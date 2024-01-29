// service-worker.js

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('mi-cache').then(cache => {
      return cache.addAll([
        '/',
        './index.html',
        './css/estiloIndex.css',
        './css/estiloMenu.css',
        './paginas/inicio.html',
        './paginas/ejemplo1.html',
        './paginas/listaVideos.html',
        './paginas/perfil.html',
        './icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
