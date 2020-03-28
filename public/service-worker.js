const PRECACHE = 'precache-v3';
const RUNTIME = 'runtime';

const PRECACHE_URLS = [
  './',
  'favicon.png',
  'dist/assets/css/bundle.css',
  'dist/assets/js/bundle.js',
  'dist/assets/img/design3.png',
  'dist/assets/img/dylandavies.png',
  'dist/assets/img/zuricom.png',
  'dist/assets/img/footer-wave.svg',
  'dist/assets/img/hero-wave.svg',
  'dist/assets/img/icons-192.png',
  'dist/assets/img/icons-512.png',
  'dist/assets/img/inverted-hero-wave.svg',
  'dist/assets/img/logo-white.svg',
  'dist/assets/img/occ.png',
  'dist/assets/img/og-image.png',
  'dist/assets/img/outcome.png',
  'dist/assets/img/tamsinio.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});