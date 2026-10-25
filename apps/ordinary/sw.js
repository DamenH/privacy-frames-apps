// A conventional precache worker. No Privacy Frames SDK or application manifest.
const authority=Object.fromEntries(['document','postMessage','Worker','SharedWorker','WebSocket','RTCPeerConnection','indexedDB','navigator','localStorage'].map(name=>[name,typeof globalThis[name]!=='undefined']));
self.addEventListener('install',event=>event.waitUntil((async()=>{
 const cache=await caches.open('ordinary-precache');
 await cache.addAll(['./','main.js','dependency.js','style.css']);
 await cache.put(new URL('phase.json',self.registration.scope),new Response(JSON.stringify({phase:'prepared',authority}),{headers:{'Content-Type':'application/json'}}));
})()));
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>event.respondWith(caches.open('ordinary-precache').then(async cache=>(await cache.match(event.request))||fetch(event.request))));
