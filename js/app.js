import { I18N } from "./i18n.js";
import { SCENARIOS } from "./scenarios.js";
import { getInitialLanguage } from "./language.js";
import { parseStrongTokens } from "./dom-utils.js";

function renderWithStrong(container, rawText) {
  if (!container) return;
  const tokens = parseStrongTokens(rawText);
  const nodes = tokens.map(token => {
    if (token.type === "strong") {
      const strong = document.createElement("strong");
      strong.textContent = token.text || "";
      return strong;
    }
    return document.createTextNode(token.text || "");
  });
  container.replaceChildren(...nodes);
}

export class RailPeaceApp {
  constructor() {
    this.toastTimer = null;
    this.toastAnimation = null;

    this.safeStorage = typeof sessionStorage !== "undefined" ? sessionStorage : null;
    this.safeNavigator = typeof navigator !== "undefined" ? navigator : { languages: [] };
    this.safeWindow = typeof window !== "undefined" ? window : null;

    this.currentLang = getInitialLanguage(this.safeStorage, this.safeNavigator);
    this.isExpanded = false;
    this.initElements();
    this.bindEvents();
    this.setupFeedbackLink();
    this.render();
  }

  initElements() {
    this.docTitle = document.getElementById("doc-title");
    this.brandTitle = document.getElementById("brand-title");
    this.btnZh = document.getElementById("btn-lang-zh");
    this.btnEn = document.getElementById("btn-lang-en");
    this.scenariosContainer = document.getElementById("scenarios-container");
    this.btnToggle = document.getElementById("btn-toggle-scenarios");
    this.titleExit = document.getElementById("title-exit");
    this.descExit = document.getElementById("desc-exit");
    this.btnShare = document.getElementById("btn-share");
    this.btnCopy = document.getElementById("btn-copy");
    this.linkFeedback = document.getElementById("link-feedback");
    this.footerNote = document.getElementById("text-footer-note");
    this.footerLegal = document.getElementById("text-footer-legal");
    this.toastEl = document.getElementById("app-toast");
  }

  bindEvents() {
    if (this.btnZh) this.btnZh.addEventListener("click", () => this.switchLanguage("zh-HK"));
    if (this.btnEn) this.btnEn.addEventListener("click", () => this.switchLanguage("en"));
    if (this.btnToggle) this.btnToggle.addEventListener("click", () => this.toggleScenarios());
    if (this.btnShare) this.btnShare.addEventListener("click", () => this.handleShare());
    if (this.btnCopy) this.btnCopy.addEventListener("click", () => this.executeCopy());
  }

  setupFeedbackLink() {
    if (!this.linkFeedback) return;
    this.linkFeedback.href = "https://github.com/jackylawck/RailPeace/issues/new";
  }

  switchLanguage(lang) {
    if (this.currentLang === lang || !I18N[lang]) return;
    this.currentLang = lang;
    try {
      if (this.safeStorage) {
        this.safeStorage.setItem("railpeace_lang", lang);
      }
    } catch {}
    this.render();
  }

  toggleScenarios() {
    this.isExpanded = !this.isExpanded;
    this.renderScenarios();
    this.updateToggleButtonText();
  }

  updateToggleButtonText() {
    if (!this.btnToggle) return;
    const d = I18N[this.currentLang] || {};
    this.btnToggle.textContent = this.isExpanded ? (d.btnCollapse || "") : (d.btnExpand || "");
  }

  renderScenarios() {
    if (!this.scenariosContainer) return;
    
    const d = I18N[this.currentLang] || {};
    const list = SCENARIOS[this.currentLang] || [];
    
    // 首頁展示 priority <= 3 之核心情境（涵蓋 hostile、alight、door-jam、board）
    const visibleScenarios = this.isExpanded 
      ? list 
      : list.filter(item => typeof item.priority === "number" && item.priority <= 3);

    if (visibleScenarios.length === 0) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      empty.textContent = d.emptyState || "";
      this.scenariosContainer.replaceChildren(empty);
      return;
    }

    const fragment = document.createDocumentFragment();

    visibleScenarios.forEach(item => {
      const section = document.createElement("section");
      section.className = `script-block scenario-${item.id}`;

      const header = document.createElement("div");
      header.className = "script-header";

      const tag = document.createElement("div");
      tag.className = "role-tag";
      tag.textContent = item.tag || "";

      const metaGroup = document.createElement("div");
      metaGroup.className = "meta-group";

      if (typeof item.maxAttempts === "number") {
        const attemptBadge = document.createElement("span");
        attemptBadge.className = "attempt-badge";
        attemptBadge.textContent = item.maxAttempts === 0 
          ? (this.currentLang === "en" ? "Do Not Speak" : "禁開口")
          : (this.currentLang === "en" ? `Max ${item.maxAttempts}x` : `最多講${item.maxAttempts}次`);
        metaGroup.appendChild(attemptBadge);
      }

      const rawRisk = typeof item.riskLevel === "string" ? item.riskLevel.toUpperCase() : "LOW";
      const riskClass = rawRisk.toLowerCase();
      const riskBadge = document.createElement("span");
      riskBadge.className = `risk-badge risk-${riskClass}`;

      if (rawRisk === "HIGH") {
        riskBadge.textContent = d.riskHigh || "";
      } else if (rawRisk === "MEDIUM") {
        riskBadge.textContent = d.riskMedium || "";
      } else {
        riskBadge.textContent = d.riskLow || "";
      }
      metaGroup.appendChild(riskBadge);

      header.appendChild(tag);
      header.appendChild(metaGroup);
      section.appendChild(header);

      // 主要話術（若為 null 如 hostile 則不渲染）
      if (item.primaryScript) {
        const quote = document.createElement("div");
        quote.className = "script-quote";
        quote.textContent = item.primaryScript;
        section.appendChild(quote);
      }

      // 非語言動作
      const silent = document.createElement("div");
      silent.className = "script-silent";
      silent.textContent = item.silentOption || "";
      section.appendChild(silent);

      // 退路指引
      if (item.exitRule) {
        const exitNote = document.createElement("div");
        exitNote.className = "script-exit-rule";
        exitNote.textContent = `🛡️ 退路：${item.exitRule}`;
        section.appendChild(exitNote);
      }

      fragment.appendChild(section);
    });

    this.scenariosContainer.replaceChildren(fragment);
  }

  render() {
    const d = I18N[this.currentLang] || {};
    
    document.documentElement.lang = this.currentLang;
    if (this.docTitle) this.docTitle.textContent = d.docTitle || "";
    if (this.brandTitle) this.brandTitle.textContent = d.brand || "";

    const isZh = this.currentLang === "zh-HK";
    if (this.btnZh) {
      this.btnZh.classList.toggle("active", isZh);
      this.btnZh.setAttribute("aria-pressed", isZh ? "true" : "false");
    }
    if (this.btnEn) {
      this.btnEn.classList.toggle("active", !isZh);
      this.btnEn.setAttribute("aria-pressed", !isZh ? "true" : "false");
    }

    this.renderScenarios();
    this.updateToggleButtonText();

    if (this.titleExit) this.titleExit.textContent = d.exitTitle || "";
    renderWithStrong(this.descExit, d.exitText || "");

    if (this.btnShare) this.btnShare.textContent = d.btnShare || "";
    if (this.btnCopy) this.btnCopy.textContent = d.btnCopy || "";
    if (this.linkFeedback) this.linkFeedback.textContent = d.linkFeedback || "";

    if (this.footerNote) this.footerNote.textContent = d.footerNote || "";
    if (this.footerLegal) this.footerLegal.textContent = d.footerLegal || "";
  }

  showToast(message) {
    if (!this.toastEl) return;
    this.toastEl.textContent = message || "";
    this.toastEl.hidden = false;

    if (this.toastAnimation) {
      this.toastAnimation.cancel();
      this.toastAnimation = null;
    }

    const prefersReducedMotion = this.safeWindow && 
      typeof this.safeWindow.matchMedia === "function" && 
      this.safeWindow.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReducedMotion && typeof this.toastEl.animate === "function") {
      this.toastAnimation = this.toastEl.animate(
        [
          { opacity: 0, transform: "translate(-50%, 8px)" },
          { opacity: 1, transform: "translate(-50%, 0)", offset: 0.15 },
          { opacity: 1, transform: "translate(-50%, 0)", offset: 0.85 },
          { opacity: 0, transform: "translate(-50%, -8px)" }
        ],
        { duration: 2200, easing: "ease-out" }
      );

      this.toastAnimation.onfinish = () => {
        this.toastAnimation = null;
      };
      this.toastAnimation.oncancel = () => {
        this.toastAnimation = null;
      };
    } else {
      this.toastEl.classList.add("fallback-show");
    }

    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.toastEl.hidden = true;
      this.toastEl.classList.remove("fallback-show");
      this.toastAnimation = null;
    }, 2200);
  }

  async handleShare() {
    const d = I18N[this.currentLang] || {};
    const currentUrl = this.safeWindow ? this.safeWindow.location.href : "";
    const shareData = {
      title: d.shareTitle || "",
      text: d.shareText || "",
      url: currentUrl
    };

    if (this.safeNavigator && typeof this.safeNavigator.share === "function") {
      try {
        await this.safeNavigator.share(shareData);
        this.showToast(d.toastShareSuccess);
      } catch (err) {
        if (err && err.name !== "AbortError") this.executeCopy();
      }
    } else {
      this.executeCopy();
    }
  }

  async executeCopy() {
    const d = I18N[this.currentLang] || {};
    const currentUrl = this.safeWindow ? this.safeWindow.location.href : "";
    const content = `${d.shareText || ""}\n🔗 ${currentUrl}`;

    if (this.safeNavigator && this.safeNavigator.clipboard && this.safeWindow && this.safeWindow.isSecureContext) {
      try {
        await this.safeNavigator.clipboard.writeText(content);
        this.showToast(d.toastCopySuccess);
        return;
      } catch {}
    }

    try {
      if (typeof document !== "undefined") {
        const textarea = document.createElement("textarea");
        textarea.value = content;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        const successful = document.execCommand("copy");
        document.body.removeChild(textarea);
        if (successful) {
          this.showToast(d.toastCopySuccess);
          return;
        }
      }
    } catch {}

    this.showToast(d.toastCopyFail);
  }
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    new RailPeaceApp();
  });
}
