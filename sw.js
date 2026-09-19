const CACHE_NAME = 'railpeace-v1.0.6';

// 包含所有原生模組與合規文件，確保地下鐵車廂 100% 離線可用
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './RailPeace192icon.png',
  './RailPeace512icon.png',
  './og-image.png',
  './css/style.css',
  './js/app.js',
  './js/i18n.js',
  './js/scenarios.js',
  './js/language.js',
  './js/dom-utils.js',
  './PRIVACY.md',
  './COMPLIANCE.md'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // 僅處理同源 http/https 請求，排除 extension 協議
  if (!url.protocol.startsWith('http')) return;

  // 1. 頁面導航請求：Network First（優先取得最新版本，離線時退回首頁快取）
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.ok) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, copy);
            });
          }
          return networkResponse;
        })
        .catch(() => caches.match('./index.html') || caches.match('./'))
    );
    return;
  }

  // 2. 靜態資產：Cache First，若快取未命中則聯網請求並快取
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || !networkResponse.ok) {
          return networkResponse;
        }

        if (url.origin === self.location.origin) {
          const copy = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, copy);
          });
        }

        return networkResponse;
      });
    }).catch(() => {
      // 離線降級：若為 HTML 請求兜底回 index.html
      if (event.request.headers.get('accept')?.includes('text/html')) {
        return caches.match('./index.html') || caches.match('./');
      }
      return new Response('Offline: Resource not available', {
        status: 503,
        statusText: 'Service Unavailable',
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    })
  );
});
