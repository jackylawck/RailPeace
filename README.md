# RailPeace 鐵和平 🚇🕊️

> **香港鐵路通勤「低摩擦」避火拆彈心法卡**  
> *A Low-Friction Transit De-escalation Cheatsheet for Hong Kong Commuters.*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/jackylawck/RailPeace/blob/main/LICENSE)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-success.svg)](https://jackylawck.github.io/RailPeace/)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-0-brightgreen.svg)](#-技術規格與架構-tech-stack)

---

## 繁體中文

### 💡 專案緣起 (Origin)
香港鐵路系統是全球客運量最高、最擁擠的公共運輸網絡之一。上下班高峰期車廂內「人貼人」、車門前「人肉門神塞路」，極易引發通勤摩擦與急性火氣。

官方宣傳常提倡「畀心」與禮儀口號，但在逼車、趕時間的當下，成年人需要的是**不尷尬、講得出、能解窘的具體溝通工具**。

**RailPeace 鐵和平** 是一張專為打工仔設計的**生活降溫微心法卡**。我們不講高深學問，專注於車廂當下最實用的「避火溝通」：
1. **社交前綴卸力**：求助用「唔好意思」、日常借過用「麻煩借一借」、維持秩序用「大家稍為等等」，分寸拿捏得當，一秒卸下防禦。
2. **多講「大家」**：不指責個人對錯，將焦點拉升至車廂集體利益（如「入中間企大家都鬆啲」、「出晒先入會仲快」）。
3. **安全邊界與退路**：每種情況最多嘗試一至兩次（`maxAttempts`），對方若有挑釁或敵意立即閉口退後半步（`abortConditions`），安全第一，返工唔爭一時。

---

### 🌟 核心特色 (Core Features)

* **通勤避火實戰設計**：
  * **日常 Top 3 核心**：聚焦解決「行入中間」、「移入走廊」、「人貼人輕碰」三大高頻摩擦。
  * **無聲避火動作 (Silent Options)**：為社恐、聽歌乘客或高壓環境提供安全肢體指引（如「眼神望向走廊 + 掌心微示意」，嚴禁具攻擊性的手指指人）。
  * **極速降溫防線**：面對惡意挑釁時，唯一策略為「零對抗、禁開口、避開視線並退後」。
* **極致工程衛生 (Engineering Hygiene)**：
  * **Zero `innerHTML`**：全站動態節點皆透過安全 DOM Token 解析與原生 API 掛載，杜絕 XSS 隱患。
  * **零依賴 PWA**：純原生 ES Modules，配備 Service Worker 智慧快取，地下鐵斷網照常秒開。
  * **流暢無視覺競態**：全面採用 Web Animations API (WAAPI) 驅動微提示，絕無卡頓閃爍。
  * **深色模式優化**：為三級風險標籤量身調和低刺激色調，夜間乘車不刺眼。

---

### 📱 核心避火話術速查 (Quick Reference)

| 情境 | 風險等級 | 避火雙贏話術 | 無聲行動指引 |
| :--- | :---: | :--- | :--- |
| **行入車廂中間：門口塞住入面有位？** | 🟢 常用 (最多2次) | 「唔好意思，中間仲有位，移入少少等後面都上到，唔該晒！」 | 眼神望向走廊 + 掌心向上微示意 + 側身帶頭移入 |
| **已上車想入走廊？** | 🟢 常用 (最多2次) | 「麻煩借一借，入中間企大家都鬆啲，唔該晒！」 | 視線望向車廂內部空隙 + 側身順向微移 |
| **車廂人貼人時輕碰／晃動？** | 🟢 常用 (最多2次) | 「唔好意思！真係好迫，大家頂一頂，唔好意思。」 | 扶穩扶手 + 雙手收胸前點頭示好致歉 |
| **對方有攻擊性／挑釁？** | 🔴 高風險 (禁開口) | *(安全紅線：嚴禁開口對罵)* | 移開視線 · 安靜退後一步 · 側身避開對峙 · 遇險按通話器 |

---

## English

### 💡 Overview
The Hong Kong transit network is among the densest in the world. During peak rush hours, acute spatial tension and congested doorways frequently trigger commuter friction and stress.

**RailPeace** is an open-source civic tech micro-tool designed for **daily transit de-friction**. It offers practical, low-cognitive-load communication hacks to help commuters stay calm and de-escalate tension:
1. **De-escalate Instantly**: Leverage natural Hong Kong conversational buffers (*"Excuse me"*, *"Pardon me"*) to disarm defensiveness immediately.
2. **De-personalize & Frame Mutual Benefit**: Move away from confrontational "I/You" phrasing to collective benefit (e.g., *"Moving center gives everyone more room"* or *"Exiting first gets everyone in faster"*).
3. **Establish Safe Boundaries**: Strict attempt limits (`maxAttempts`) and safety abort rules (`abortConditions`) ensure personal safety always takes priority over argument.

---

### 🌟 Technical Highlights

* **100% Native Vanilla Stack**: Pure ES Modules, native DOM APIs, and zero dependencies.
* **Security & Clean Architecture**: Zero `innerHTML` usage across the codebase; deterministic token parsing via `dom-utils.js`.
* **Offline-First PWA**: Smart Service Worker caching (Network First for navigation, Cache First for assets) guaranteeing offline availability in underground transit tunnels.
* **Zero-Glitch Transitions**: WAAPI-driven toasts with cancellation tracking, eliminating race conditions.
* **Accessibility (a11y)**: Accessible focus rings (`:focus-visible`), explicit `aria-pressed`, and `aria-expanded` toggle states.

---

## 🛡️ 合規與資料治理 (Governance & Compliance)

本專案遵循透明合規治理標準，詳細條款請參閱獨立文件：
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
│   └── scenarios.js           # 通勤避火拆彈心法資料庫
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

* 新增或修訂話術時，請確保符合 **雙贏避火原則** 與 **25 字低認知負荷上限**。
* 任何代碼提交前，請確保本地執行 `npm test` 與 `npm run lint` 均為綠燈通過。

---

## 📄 開源授權 (License)

本專案基於 [MIT License](https://github.com/jackylawck/RailPeace/blob/main/LICENSE?utm_source=gemini) 條款開源發布。
