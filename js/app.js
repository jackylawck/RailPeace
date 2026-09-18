import { I18N } from "./i18n.js";

class RailPeaceApp {
  constructor() {
    this.currentLang = this.getInitialLanguage();
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
    if (sysLang.startsWith("en")) {
      return "en";
    }
    return "zh-HK";
  }

  initElements() {
    this.docTitle = document.getElementById("doc-title");
    this.brandTitle = document.getElementById("brand-title");
    this.btnZh = document.getElementById("btn-lang-zh");
    this.btnEn = document.getElementById("btn-lang-en");
    this.tagAlight = document.getElementById("tag-alight");
    this.textAlight = document.getElementById("text-alight");
    this.subAlight = document.getElementById("sub-alight");
    this.tagDoor = document.getElementById("tag-door");
    this.textDoor = document.getElementById("text-door");
    this.subDoor = document.getElementById("sub-door");
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
    this.btnZh.addEventListener("click", () => this.switchLanguage("zh-HK"));
    this.btnEn.addEventListener("click", () => this.switchLanguage("en"));
    this.btnShare.addEventListener("click", () => this.handleShare());
    this.btnCopy.addEventListener("click", () => this.executeCopy());
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

  render() {
    const d = I18N[this.currentLang];
    
    document.documentElement.lang = this.currentLang;
    this.docTitle.textContent = d.docTitle;
    this.brandTitle.textContent = d.brand;

    const isZh = this.currentLang === "zh-HK";
    this.btnZh.classList.toggle("active", isZh);
    this.btnZh.setAttribute("aria-pressed", isZh ? "true" : "false");
    this.btnEn.classList.toggle("active", !isZh);
    this.btnEn.setAttribute("aria-pressed", !isZh ? "true" : "false");

    this.tagAlight.textContent = d.tagAlight;
    this.textAlight.textContent = d.textAlight;
    this.subAlight.textContent = d.subAlight;

    this.tagDoor.textContent = d.tagDoor;
    this.textDoor.textContent = d.textDoor;
    this.subDoor.textContent = d.subDoor;

    this.titleExit.textContent = d.titleExit;
    this.descExit.textContent = d.descExit;

    this.btnShare.textContent = d.btnShare;
    this.btnCopy.textContent = d.btnCopy;
    this.linkFeedback.textContent = d.linkFeedback;

    this.footerNote.textContent = d.footerNote;
    this.footerLegal.textContent = d.footerLegal;
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
        if (err.name !== "AbortError") {
          this.executeCopy();
        }
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
