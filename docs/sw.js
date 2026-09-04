const CACHE = "english-talk-pwa-v1";
const ASSETS = [
  "./", "./index.html", "./app.js", "./styles.css",
  "./data/lessons1.js", "./data/lessons2.js", "./data/lessons3.js", "./data/lessons4.js",
  "./data/lessons5.js", "./data/lessons6.js", "./data/lessons7.js", "./data/lessons8.js",
  "./data/lessons9.js", "./data/lessons10.js", "./data/lessons11.js", "./data/lessons12.js",
  "./data/lessons13.js", "./data/lessons14.js", "./data/lessons15.js", "./data/lessons16.js",
  "./data/lessons17.js", "./data/lessons18.js", "./data/lessons19.js", "./data/lessons20.js",
  "./data/conversations.js",
  "./icons/icon-192.png", "./icons/icon-512.png"
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
