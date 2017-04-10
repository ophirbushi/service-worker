var cacheName = 'v1';
var cacheFiles = [
    './styles.css'
];

self.addEventListener('install', function (e) {
    console.log('[Service Worker] Installed');

    var cacheAddAll = caches
        .open(cacheName)
        .then(function (cache) {
            console.log('[Service Worker] Caching cacheFiles');
            return cache.addAll(cacheFiles);
        });

    e.waitUntil(cacheAddAll);
});

self.addEventListener('activate', function (e) {
    console.log('[Service Worker] Activated');
});

self.addEventListener('fetch', function (e) {
    console.log('[Service Worker] Fetching', e.request.url);
});
