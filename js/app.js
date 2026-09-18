import { I18N } from "./i18n.js";
import { SCENARIOS } from "./scenarios.js";

class RailPeaceApp {
  constructor() {
    this.currentLang = this.getInitialLanguage();
    this.isExpanded = false;
    this.initElements();
    this.bindEvents();
    this.setupFeedbackLink();
    this.render();
  }

  getInitialLanguage() {
    try {
      const saved = sessionStorage.getItem("railpeace_lang");
      if (saved === "en" || saved === "zh-HK") return saved;
    } catch {}

    const sysLang = (navigator.language || "").toLowerCase();
    if (sysLang.startsWith("en")) return "en";
    return "zh-HK";
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
    // 加上可選鏈與存在性檢查，避免 null 崩潰
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
      sessionStorage.setItem("railpeace_lang", lang);
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
    const d = I18N[this.currentLang];
    this.btnToggle.textContent = this.isExpanded ? d.btnCollapse : d.btnExpand;
  }

  renderScenarios() {
    if (!this.scenariosContainer) return;
    this.scenariosContainer.textContent = "";
    const list = SCENARIOS[this.currentLang] || [];

    // 調解員標準：未展開前只顯示 Top 3 核心場景
    const visibleScenarios = this.isExpanded 
      ? list 
      : list.filter(item => item.priority <= 3);

    // 空狀態安全防護
    if (visibleScenarios.length === 0) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      empty.textContent = this.currentLang === "en" ? "No scenarios available." : "暫無場景資料";
      this.scenariosContainer.appendChild(empty);
      return;
    }

    visibleScenarios.forEach(item => {
      const section = document.createElement("section");
      section.className = "script-block";

      const header = document.createElement("div");
      header.className = "script-header";

      const tag = document.createElement("div");
      tag.className = "role-tag";
      tag.textContent = item.tag;

      // 語意化圖標與雙語支援標籤
      const riskBadge = document.createElement("span");
      riskBadge.className = `risk-badge risk-${item.riskLevel.toLowerCase()}`;
      if (item.riskLevel === "HIGH") {
        riskBadge.textContent = this.currentLang === "en" ? "🔴 High Risk" : "🔴 高風險";
      } else if (item.riskLevel === "MEDIUM") {
        riskBadge.textContent = this.currentLang === "en" ? "🟡 Moderate" : "🟡 中風險";
      } else {
        riskBadge.textContent = this.currentLang === "en" ? "🟢 Core" : "🟢 常用";
      }

      header.appendChild(tag);
      header.appendChild(riskBadge);

      const quote = document.createElement("div");
      quote.className = "script-quote";
      quote.textContent = item.script;

      // 分行排版動作與心理要點，降低資訊過載
      const subContainer = document.createElement("div");
      subContainer.className = "script-sub";

      if (item.nonVerbal) {
        const actionLine = document.createElement("span");
        actionLine.textContent = `👁️ ${item.nonVerbal}`;
        subContainer.appendChild(actionLine);
      }

      if (item.note) {
        const noteLine = document.createElement("span");
        noteLine.textContent = `💡 ${item.note}`;
        subContainer.appendChild(noteLine);
      }

      const silent = document.createElement("div");
      silent.className = "script-silent";
      silent.textContent = item.silentOption;

      section.appendChild(header);
      section.appendChild(quote);
      if (subContainer.hasChildNodes()) section.appendChild(subContainer);
      section.appendChild(silent);
      this.scenariosContainer.appendChild(section);
    });
  }

  render() {
    const d = I18N[this.currentLang];
    
    document.documentElement.lang = this.currentLang;
    if (this.docTitle) this.docTitle.textContent = d.docTitle;
    if (this.brandTitle) this.brandTitle.textContent = d.brand;

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

    if (this.titleExit) this.titleExit.textContent = d.titleExit;
    if (this.descExit) this.descExit.innerHTML = d.descExit;

    if (this.btnShare) this.btnShare.textContent = d.btnShare;
    if (this.btnCopy) this.btnCopy.textContent = d.btnCopy;
    if (this.linkFeedback) this.linkFeedback.textContent = d.linkFeedback;

    if (this.footerNote) this.footerNote.textContent = d.footerNote;
    if (this.footerLegal) this.footerLegal.textContent = d.footerLegal;
  }

  showToast(message) {
    if (!this.toastEl) return;
    this.toastEl.textContent = message;
    this.toastEl.hidden = false;

    this.toastEl.style.animation = "none";
    void this.toastEl.offsetWidth;
    this.toastEl.style.animation = "";

    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.toastEl.hidden = true;
    }, 2200);
  }

  async handleShare() {
    const d = I18N[this.currentLang];
    const shareData = {
      title: d.shareTitle,
      text: d.shareText,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err.name !== "AbortError") this.executeCopy();
      }
    } else {
      this.executeCopy();
    }
  }

  async executeCopy() {
    const d = I18N[this.currentLang];
    const content = `${d.shareText}\n🔗 ${window.location.href}`;

    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(content);
        this.showToast(d.toastCopySuccess);
        return;
      } catch {}
    }

    try {
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
    } catch {}

    this.showToast(d.toastCopyFail);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new RailPeaceApp();
});
