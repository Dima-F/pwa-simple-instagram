self.addEventListener('install', (e) => {
    console.log('SW installing...', e);
});

self.addEventListener('activate', (e) => {
    console.log('SW activating...', e);
    return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    console.log('SW fetching...', e);
    e.respondWith(fetch(e.request));
});