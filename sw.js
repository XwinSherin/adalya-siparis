// sw.js
const CACHE_NAME = 'adalya-platinum-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/siparis.html',
  '/manifest.json',
  '/images/adalyalogo.jpg',
  '/images/icon-192.png',
  '/images/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});