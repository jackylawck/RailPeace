const CACHE_NAME = 'railpeace-v1.0.4';

// 包含所有現代模組檔案，確保地下鐵車廂 100% 離線可用
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
  './js/dom-utils.js'
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

  // 對於 HTML 導航請求，採用 Network First 策略，確保能第一時間取得新版，斷網時退回快取
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // 對於靜態資源（CSS、JS、圖標），採用 Cache First 並背景更新策略
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          if (url.origin === self.location.origin) {
            cache.put(event.request, responseToCache);
          }
        });
        return networkResponse;
      });
    }).catch(() => {
      // 離線兜底處理
      if (event.request.headers.get('accept')?.includes('text/html')) {
        return caches.match('./index.html');
      }
    })
  );
});
