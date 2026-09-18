# Privacy Policy & Data Governance Statement / 私隱政策與數據治理聲明

> **Last Updated / 最後更新日期**: 2026-09-18  
> **Applicable Regulations / 參考規範**: Hong Kong Personal Data (Privacy) Ordinance (Cap. 486) [PDPO], EU General Data Protection Regulation [GDPR], ISO/IEC 27701 (PIMS).

---

## English Version

### 1. Core Principle: Privacy by Design & Zero Data Collection
**RailPeace ("The Project")** is an open-source, client-side civic tech application. The Project strictly adheres to the principle of **Privacy by Design and by Default**. 

* **No Personal Data Collected**: We do not collect, process, track, transmit, or store any Personal Identifiable Information (PII), biometric data, location data, or device identifiers.
* **No Server Infrastructure**: The application operates entirely within the user's local web browser or local Progressive Web App (PWA) cache. There is no external database or backend server logging your traffic or usage.
* **No Analytics or Cookies**: We do not use third-party analytics (e.g., Google Analytics), tracking beacons, advertising cookies, or cross-site tracking scripts.

### 2. Local Device Storage
The Project uses client-side web storage solely for essential user experience preferences:
* **Session Storage (`sessionStorage`)**: Stores the user's preferred interface language (`zh-HK` or `en`). This data remains strictly on your device and is automatically destroyed when the browser session ends.
* **Service Worker Cache (`CacheStorage`)**: Stores static HTML, CSS, JavaScript, and asset icons locally to enable offline functionality within transit tunnels. No behavioral data is stored within the cache.

### 3. External Links
The Project provides external links solely to GitHub Issues for public feedback. Clicking such links subjects the user to GitHub's respective Privacy Statement. We do not transmit tracking tokens through these links.

### 4. Regulatory Inquiries
Since no personal data is collected or retained, the Project does not act as a Data Controller or Data Processor under the GDPR, nor as a Data User under the Hong Kong PDPO. For architecture or open-source governance inquiries, please open an Issue on the repository.

---

## 繁體中文版

### 1. 核心原則：隱私設計與零資料收集 (Privacy by Design)
**RailPeace 鐵和平（下稱「本項目」）** 為完全運行於客戶端之開源公民科技應用程式。本項目恪守**隱私設計與預設隱私保護（Privacy by Design & by Default）**原則：

* **完全不收集個人資料**：本項目不收集、不處理、不追蹤、不傳輸亦不儲存任何個人身分資料（PII）、生物特徵、定位資訊或設備識別碼。
* **無伺服器架構**：本項目純粹於使用者之本地瀏覽器或漸進式 Web 應用（PWA）快取中運行，絕無任何外部伺服器或資料庫記錄您的乘車行為與使用紀錄。
* **無任何分析或追蹤 Cookie**：本項目嚴禁使用任何第三方分析工具（如 Google Analytics）、廣告 Cookie 或跨站追蹤程式碼。

### 2. 本地裝置儲存說明
本項目僅調用使用者終端裝置的本地儲存空間以維持基礎界面體驗：
* **工作階段儲存空間 (`sessionStorage`)**：僅暫存使用者自選之語系（`zh-HK` 或 `en`）。該資訊嚴格保留於本地，並隨瀏覽器關閉自動銷毀。
* **離線快取 (`CacheStorage`)**：用於在地下鐵隧道無網絡時暫存靜態檔案（HTML、CSS、JS、圖示），保證離線可用。快取內絕不包含任何使用者數據。

### 3. 外部連結說明
本項目唯一之外部連結為 GitHub Issues 使用者回報入口。點擊該連結將遵循 GitHub 平台之私隱條款。本項目不會透過 URL 參數傳遞任何追蹤標籤。

### 4. 監管合規性
鑑於本項目不收集亦不持有任何個人資料，本項目於歐盟《通用數據保障條例》(GDPR) 下不構成資料控制者或處理者，亦非香港法例第 486 章《個人資料（私隱）條例》(PDPO) 所指之「資料使用者」。如有架構治理疑問，歡迎透過開源 Issue 查詢。
