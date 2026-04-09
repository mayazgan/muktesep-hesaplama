const CACHE_NAME = 'dib-muktesebat-v1';
const assets = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Uygulamayı telefona yükle
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// İnternet olmasa bile sitenin açılmasını sağla
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
