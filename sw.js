const CACHE = "english-talk-v3";
const ASSETS = [
  "/", "/static/app.js", "/static/styles.css",
  "/static/data/lessons1.js", "/static/data/lessons2.js", "/static/data/lessons3.js", "/static/data/lessons4.js",
  "/static/data/lessons5.js", "/static/data/lessons6.js", "/static/data/lessons7.js", "/static/data/lessons8.js",
  "/static/data/lessons9.js", "/static/data/lessons10.js", "/static/data/lessons11.js", "/static/data/lessons12.js",
  "/static/data/lessons13.js", "/static/data/lessons14.js", "/static/data/lessons15.js", "/static/data/lessons16.js",
  "/static/data/lessons17.js", "/static/data/lessons18.js", "/static/data/lessons19.js", "/static/data/lessons20.js",
  "/static/data/conversations.js",
  "/icons/icon-192.png", "/icons/icon-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then((cached) => {
      const network = fetch(e.request).then((res) => {
        if (res && res.ok && new URL(e.request.url).origin === location.origin) {
          const clone = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, clone));
        }
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
