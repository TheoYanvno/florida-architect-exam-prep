// Keeps the app working offline once it is on your home screen: the app's own files are saved on the
// first visit and served from the phone after that, while a fresh copy is fetched in the background.
const CACHE = 'license-study-v2';
const FILES = ['./', 'index.html', 'app.js', 'styles.css', 'icon.svg', 'manifest.webmanifest',
  'img/hero.svg', 'img/hub.svg', 'img/icon-180.png', 'img/icon-192.png', 'img/icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async (cache) => {
    const cached = await cache.match(e.request, { ignoreSearch: true });
    const fresh = fetch(e.request).then((r) => { if (r.ok) cache.put(e.request, r.clone()); return r; }).catch(() => cached);
    return cached || fresh;
  }));
});
