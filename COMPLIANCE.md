# Compliance & Legal Governance Statement / 法規合規與法律治理聲明

> **Scope / 範疇**: Artificial Intelligence Governance, Public Transit Safety, Civil Liability, and Information Security.  
> **Key References / 參考標準**: EU Artificial Intelligence Act (EU AI Act), CAC Interim Measures on Generative AI (國家網信辦生成式AI暫行辦法), ISO/IEC 42001, ISO/IEC 27001.

---

## English Version

### 1. Statement on Artificial Intelligence & Non-Applicability (AI Act Exclusion)
* **Scope Determination**: **RailPeace ("The Project") is NOT an Artificial Intelligence System.**
* **Algorithmic Transparency**: The application relies strictly on deterministic, static human-curated data objects (`scenarios.js`) and rule-based DOM manipulation. It does **not** employ machine learning (ML), large language models (LLMs), neural networks, automated generative pipelines, or Automated Decision-Making (ADM).
* **Regulatory Exemption**: 
  * **EU AI Act**: The Project is explicitly outside the scope of the EU AI Act (Regulation (EU) 2024/1689), as it does not develop, deploy, or distribute AI models or high-risk AI architectures.
  * **China CAC Regulations**: The Project does not fall within the scope of the *Interim Measures for the Management of Generative Artificial Intelligence Services*, as no generative algorithm or content synthesis system is utilized.
  * **ISO/IEC 42001 (AIMS)**: The Project does not require an Artificial Intelligence Management System certification, as no AI lifecycle activities are conducted.

### 2. Information Security Baseline (ISO/IEC 27001 Alignment)
The Project implements enterprise-grade technical safeguards aligned with modern web security controls:
* **Strict Content Security Policy (CSP)**: Eliminates Cross-Site Scripting (XSS) risks with strict resource confinement (`object-src 'none'`, `media-src 'none'`, restricted `script-src`).
* **Zero `innerHTML` Policy**: Complete adoption of declarative DOM manipulation (`createElement`, `createTextNode`, `replaceChildren`) and custom deterministic token parsing.
* **Permissions Policy Isolation**: Explicitly revokes device sensor and hardware access permissions (`camera=()`, `microphone=()`, `geolocation=()`, `payment=()`).

### 3. Public Transit Advisory & Disclaimer of Liability (Civil Protection)
* **Not Legal or Mediation Advice**: The communication scripts and non-verbal guidance provided are heuristic conflict de-escalation tips derived from general Alternative Dispute Resolution (ADR) practices. They do not constitute formal legal counsel, security protocols, or certified mediation services.
* **Personal Safety & Assumption of Risk**: Public transit environments present dynamic, unpredictable risks. Users must exercise independent judgment. **Personal physical safety takes absolute precedence over de-escalation scripts.**
* **Zero Liability**: Under no circumstances shall the authors, maintainers, or contributors be held liable for any disputes, altercations, administrative penalties, injuries, or damages arising directly or indirectly from the use or inability to use this cheatsheet.
* **Emergency Protocol**: In the event of physical threats, violence, harassment, or dangerous conduct, users must immediately withdraw to a safe distance, notify Hong Kong Police Force personnel, or activate the train carriage Passenger Emergency Call unit.

---

## 繁體中文版

### 1. 人工智能治理與不適用性聲明 (EU AI Act & 網信辦規範排除)
* **範疇界定**：**RailPeace 鐵和平（下稱「本項目」）不屬於人工智能系統（AI System）。**
* **演算法透明性**：本應用程式完全基於確定性之靜態資料結構（`scenarios.js`）與前端規則比對，**絕無包含任何機器學習（ML）、大語言模型（LLM）、神經網絡、自動生成式演算法或自動化決策系統（ADM）**。
* **合規豁免依據**：
  * **歐盟《人工智能法案》(EU AI Act)**：本項目完全落於 EU AI Act (Regulation (EU) 2024/1689) 之管轄範疇之外，無開發、部署或提供任何高風險或通用 AI 系統。
  * **國家網信辦《生成式人工智能服務管理暫行辦法》**：本項目非生成式人工智能，不提供任何演算法內容生成服務，無須進行演算法備案。
  * **ISO/IEC 42001**：本項目無 AI 生命週期活動，不適用人工智能管理體系要求。

### 2. 資訊安全控制基準 (符合 ISO/IEC 27001 精神)
本項目落實頂級前端資安防禦措施：
* **嚴格內容安全策略 (CSP)**：全面阻斷跨站腳本攻擊（XSS），鎖定無外部媒體、無外掛物件之安全邊界。
* **全面零 `innerHTML` 架構**：全專案動態節點均由原生安全 API（`createElement`、`createTextNode`、`replaceChildren`）組裝，杜絕 DOM 型注入。
* **硬體權限全面隔離**：透過 `Permissions-Policy` 嚴格宣告禁用相機、麥克風、地理定位及生物識別設備。

### 3. 公共交通指引與免責聲明 (法律責任保護)
* **非法律或調解意見**：本項目所載話術及肢體引導僅為基於替代性爭端解決（ADR）常識之日常通勤備忘，不構成任何正式法律建議、安全指引或專業調解方案。
* **個人安全與自負風險**：車廂環境瞬息萬變，使用者應憑個人常識獨立評估現場情況。**個人人身安全永遠凌駕於任何溝通話術之上。**
* **免除一切損害賠償責任**：在法律允許的最大範圍內，本專案開發者、維護者及貢獻者概不對因使用、參考或無法使用本心法卡而導致之任何口角、肢體衝突、行政處罰、人身傷害或財物損失承擔任何法律責任。
* **緊急處置優先**：若遇人身威脅、肢體暴力、醉酒滋事或性騷擾等危機，請勿嘗試言語調解，應立即退避至安全位置，並即時向香港警務處人員求助或按動車廂緊急通話器。
