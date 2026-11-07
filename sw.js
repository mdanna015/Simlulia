const C="simulia-v1";
self.addEventListener("install",e=>e.waitUntil(caches.open(C).then(c=>c.addAll(["./","manifest.json","icon.svg"])).then(()=>self.skipWaiting())));
self.addEventListener("fetch",e=>e.respondWith(fetch(e.request).then(r=>{const k=r.clone();caches.open(C).then(c=>c.put(e.request,k));return r}).catch(()=>caches.match(e.request))));
