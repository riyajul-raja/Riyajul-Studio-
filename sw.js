// Minimal service worker — required so browsers treat this as an installable PWA
// instead of falling back to a plain "Create shortcut" bookmark.

const CACHE_NAME = 'riyajul-studio-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

// A basic fetch handler is required by Chrome/Brave's installability checks.
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});