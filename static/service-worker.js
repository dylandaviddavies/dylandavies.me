const PRECACHE = 'precache-v7';
const RUNTIME = 'runtime';

const PRECACHE_URLS = [
	'./',
	'favicon.png',
	'dist/assets/css/bundle.css',
	'dist/assets/js/bundle.js',
	'dist/assets/images/design3.png',
	'dist/assets/images/vstock.png',
	'dist/assets/images/dylandavies.png',
	'dist/assets/images/zuricom.png',
	'dist/assets/images/theorbiscommunityofpractice.png',
	'dist/assets/images/wave-dark.svg',
	'dist/assets/images/wave-neutral.svg',
	'dist/assets/images/icons-192.png',
	'dist/assets/images/icons-512.png',
	'dist/assets/images/inverted-wave-neutral.svg',
	'dist/assets/images/logo-white.svg',
	'dist/assets/images/occ.png',
	'dist/assets/images/og-image.png',
	'dist/assets/images/outcome.png',
	'dist/assets/images/tamsinio.png'
];

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches
			.open(PRECACHE)
			.then((cache) => cache.addAll(PRECACHE_URLS))
			.then(self.skipWaiting())
	);
});

self.addEventListener('activate', (event) => {
	const currentCaches = [PRECACHE, RUNTIME];
	event.waitUntil(
		caches
			.keys()
			.then((cacheNames) => {
				return cacheNames.filter((cacheName) => !currentCaches.includes(cacheName));
			})
			.then((cachesToDelete) => {
				return Promise.all(
					cachesToDelete.map((cacheToDelete) => {
						return caches.delete(cacheToDelete);
					})
				);
			})
			.then(() => self.clients.claim())
	);
});

self.addEventListener('fetch', (event) => {
	if (event.request.url.startsWith(self.location.origin)) {
		event.respondWith(
			caches.match(event.request).then((cachedResponse) => {
				if (cachedResponse) {
					return cachedResponse;
				}

				return caches.open(RUNTIME).then((cache) => {
					return fetch(event.request).then((response) => {
						return cache.put(event.request, response.clone()).then(() => {
							return response;
						});
					});
				});
			})
		);
	}
});
