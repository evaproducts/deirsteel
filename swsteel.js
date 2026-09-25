const CACHE_NAME = 'deirsteel-v1';
const assetsToCache = [
  './index.html',
  './manifeststeel.json',
  './logo.jpg'
];

// تثبيت الـ Service Worker وحفظ الملفات في الكاش
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
  self.skipWaiting();
});

// تفعيل الـ Service Worker وتنظيف الكاش القديم
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// اعتراض الطلبات لجعل التطبيق يعمل بسلاسة
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request).catch(() => {
        // يمكن هنا إرجاع صفحة بديلة في حال انقطاع الإنترنت
      });
    })
  );
});
