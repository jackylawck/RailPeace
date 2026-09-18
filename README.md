# RailPeace 鐵和平 🚇🕊️

> **香港港鐵通勤低摩擦微調解心法卡**  
> *A Low-Friction Commuter Mediation Cheatsheet for the Hong Kong MTR.*

[![CI & Integrity Check](https://github.com/jackylawck/RailPeace/actions/workflows/ci.yml/badge.svg)](https://github.com/jackylawck/RailPeace/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-success.svg)](https://jackylawck.github.io/RailPeace/)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-0-brightgreen.svg)](#-技術規格與架構-tech-stack)

---

## 繁體中文

### 💡 專案緣起 (Origin)
香港港鐵（MTR）是全球最繁忙、最密集的鐵路系統之一。在上下班高峰期，車廂內「人貼人」、車門前「門神塞路」等現象極易觸發通勤者的急性焦慮與口角衝突。

**RailPeace 鐵和平** 是一項純粹的公民科技（Civic Tech）實驗。我們融合**專業調解心理學（Mediation / ADR）**與**微觀人際溝通心法**，將話術精煉至高壓環境可負擔的短句，提供：
1. **卸力緩衝**：以香港本地社交潤滑劑「唔好意思」開頭，消除命令感。
2. **利益共贏**：陳述即時行動對彼此的實質好處（如「移入少少等後面都上到」、「出咗大家都有位企」）。
3. **退路防線**：為每個情境設立明確的嘗試上限（`maxAttempts`）與不可開口紅線（`abortConditions`），安全第一，不爭一時。

---

### 🌟 核心特色 (Core Features)

* **調解專家審定心法**：
  * **日常 Top 3 核心**：聚焦解決「門口塞住」、「移入走廊」、「人貼人輕碰」三大高頻摩擦。
  * **非語言替代方案 (Silent Options)**：為社恐、聽障、語言不通或高壓情境提供安全體態指引（如「眼神接觸 + 掌心微示意」，嚴禁具挑釁感的手指指人）。
  * **衝突熔斷機制**：面對挑釁或攻擊性對象時，嚴格鎖定「零對抗、禁開口、避開視線並退後」。
* **極致工程衛生 (Engineering Hygiene)**：
  * **Zero `innerHTML`**：全站動態節點皆透過安全 DOM Token 解析與 `replaceChildren()` 掛載，杜絕 XSS 隱患。
  * **零依賴 PWA**：純原生 ES Modules，配備 Service Worker 智慧快取（Network First 導航 + 核心模組離線快取），地下鐵斷網照常秒開。
  * **流暢無視覺競態**：全面採用 Web Animations API (WAAPI) 驅動微提示，並具備完整實例生命週期管理（`cancel` / `onfinish`），杜絕重排閃爍。
  * **深色模式優化**：為三級風險標籤量身調和低刺激色調，夜間乘車不刺眼。

---

### 📱 核心話術速查 (Quick Reference)

| 情境 | 風險等級 | 調解雙贏話術 | 非語言行動指引 |
| :--- | :---: | :--- | :--- |
| **門口塞住（入面有位）** | 🟢 常用 (Max 2x) | 「唔好意思，中間仲有位，移入少少等後面都上到，唔該晒！」 | 眼神望向走廊 + 掌心向上微示意 + 側身帶頭移入 |
| **已上車想入走廊** | 🟢 常用 (Max 2x) | 「唔好意思借借，等我入中間企，唔塞住你個位，唔該。」 | 視線望向車廂內部空隙 + 側身順向微移 |
| **人貼人輕碰／急煞** | 🟢 常用 (Max 2x) | 「唔好意思！好迫撞到你，大家頂住先，唔好意思。」 | 扶穩扶手 + 雙手收胸前點頭示好致歉 |
| **對方有攻擊性／挑釁** | 🔴 高風險 (禁開口) | *(專業紅線：嚴禁開口對罵)* | 移開視線 · 安靜退後一步 · 側身避開對峙 · 遇險按通話器 |

---

## English

### 💡 Overview
The Hong Kong MTR is one of the most efficient yet densely packed transit networks in the world. During peak rush hours, tight physical proximity and blocked doorways can escalate into acute commuter friction.

**RailPeace** is an open-source civic tech micro-tool grounded in **professional mediation and Alternative Dispute Resolution (ADR) principles**. It offers commuters practical, low-cognitive-load communication patterns designed to:
1. **De-escalate Instantly**: Leverage culturally resonant buffers (*"Excuse me" / "唔好意思"*) to neutralize perceived aggression.
2. **Highlight Mutual Benefit**: Frame movements around collective spatial relief rather than personal entitlement.
3. **Define Exit Boundaries**: Provide explicit attempt limits (`maxAttempts`) and abort conditions (`abortConditions`) to prioritize personal safety.

---

### 🌟 Technical Highlights

* **100% Native Vanilla Stack**: Built with vanilla ES Modules, native DOM APIs, and zero build/runtime dependencies.
* **Security & Clean Architecture**: Zero `innerHTML` usage across the entire codebase; safe token-based text parser (`dom-utils.js`).
* **Offline-First PWA**: Configured with strict Service Worker caching strategies ensuring seamless offline availability inside underground tunnels.
* **Zero Glitch Transitions**: WAAPI-driven toasts with cancellation tracking, eliminating race conditions and unnecessary DOM reflow hacks.
* **Accessibility (a11y)**: Complete `aria-pressed`, `aria-expanded`, and `:focus-visible` styling for inclusive transit usability.

---

## 🛡️ 合規與資料治理 (Governance & Compliance)

本專案遵循全球合規治理與透明度標準，詳細條款請參閱獨立聲明文件：
* **私隱政策與零資料收集聲明**：詳見 [PRIVACY.md](PRIVACY.md)（符合香港 PDPO、歐盟 GDPR 及 ISO/IEC 27701 精神，完全無伺服器紀錄，零收集個人身分資料）。
* **法規合規與法律免責聲明**：詳見 [COMPLIANCE.md](COMPLIANCE.md)（明確界定 EU AI Act 豁免範疇、演算法透明性、ISO/IEC 27001 資安基線及公共交通安全民事免責條款）。

---

## 🛠️ 本地開發與自動化測試 (Development & Testing)

本專案無需任何繁雜的 Bundler（如 Webpack/Vite），完全依賴 Node.js 原生測試器與輕量靜態檢查。

### 1. 複製倉庫 (Clone)
```bash
git clone [https://github.com/jackylawck/RailPeace.git](https://github.com/jackylawck/RailPeace.git)
cd RailPeace

```

### 2. 安裝開發依賴 (Install devDependencies for Linting)

```bash
npm install --no-audit --no-fund

```

### 3. 執行原生單元測試 (Run Native Unit Tests)

使用 Node.js 20+ 原生測試套件校驗核心語言決策邏輯、字典完整性與 Schema 契約：

```bash
npm test

```

### 4. 代碼風格檢查 (Lint Check)

```bash
npm run lint

```

---

## 📂 專案結構 (Directory Structure)

```text
RailPeace/
├── .github/
│   └── workflows/
│       └── ci.yml             # GitHub Actions CI 自動化管線
├── css/
│   └── style.css              # 響應式、深色模式調和與 a11y 樣式
├── js/
│   ├── app.js                 # 主應用程式控制器與 DOM 生命週期調度
│   ├── dom-utils.js           # 零 DOM 依賴之安全 Token 字串解析工具
│   ├── i18n.js                # 雙語語意字典與退路標籤定義
│   ├── language.js            # 純函式語言決策與 Storage 異常防禦模組
│   └── scenarios.js           # 調解專家審定通勤心法資料庫
├── test/
│   └── app.test.js            # 原生 Node.js 單元邏輯與 Schema 契約測試
├── index.html                 # 語意化 HTML5、嚴格 CSP 安全防禦設定
├── manifest.json              # Web App Manifest
├── sw.js                      # 離線 PWA Service Worker
├── package.json               # 專案規範與測試腳本定義
├── PRIVACY.md                 # 隱私政策與零資料收集聲明
└── COMPLIANCE.md              # 法規合規與法律免責聲明

```

---

## 🤝 參與貢獻 (Contributing)

歡迎提交 Pull Request 或開立 Issue 分享你在車廂中的實戰體驗！

* 新增或修訂話術時，請確保符合 **調解雙贏原則** 與 **15 字低認知負荷上限**。
* 任何代碼提交前，請確保本地執行 `npm test` 與 `npm run lint` 均為綠燈通過。

---

## 📄 開源授權 (License)

本專案基於 [MIT License](https://www.google.com/search?q=LICENSE&utm_source=gemini) 條款開源發布。


