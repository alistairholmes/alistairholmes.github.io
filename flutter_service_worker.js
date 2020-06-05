'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/AssetManifest.json": "e0798f5f1c440f4ce4b94bf3059d8092",
"assets/assets/fonts/SourceCodePro-Regular.ttf": "b484b32fcec981a533e3b9694953103b",
"assets/assets/fonts/SourceCodePro-Medium.ttf": "f621c504d70317ff13774e27d643ba21",
"assets/assets/fonts/SourceCodePro-Bold.ttf": "03c11f6b0c0f707075d6483a78824c60",
"assets/assets/fonts/bansheepilotblackital1.ttf": "d8f61f0deaac7795154cee2e9ce06885",
"assets/assets/images/screenshot-onboard.png": "7fdad9bba67fdc9f284ec5c0d5b015a5",
"assets/assets/images/screenshot-furn-home.png": "bd143b289d88a372866ef06f33602ff8",
"assets/assets/images/icon-twitter.png": "d5834166b672ddf4e08fc1beee634204",
"assets/assets/images/screenshot-furn-discover.png": "b043c35c41164e01cfe035bc1ce4b254",
"assets/assets/images/screenshot-furn-cart.png": "9a251a91d806d2d5a3248545bacf6cae",
"assets/assets/images/me_at_hacktober.jpeg": "b740a60a3bf0ae2807b2a6b66762e9fd",
"assets/assets/images/hero_image.jpg": "2176d7fcdf7850aba57eeaf7f3b451c1",
"assets/assets/images/icon-linkedin.png": "c1f224fdf02d312b57f3451054625576",
"assets/assets/images/contact.jpg": "3590830fbbb96d85a1fd85f584cc4b69",
"assets/assets/images/screenshot-cart.png": "7891b74c55c44b6271b60ee463a1ae6f",
"assets/assets/images/screenshot-login.png": "87fa5a4293cf109dbd0ffc3ceaae2597",
"assets/assets/images/icon_github.png": "c1ff69e0bf5a90a008d3d3efa3ccb1cd",
"assets/assets/images/hero2.jpg": "ad40e89f81f60b621e070b8bea56e626",
"assets/assets/images/profile_image.jpeg": "f0a9efdd1099198b27027c5ecd21264b",
"assets/assets/images/screenshot-home.png": "7eac7aa42024384e7f9c4bd52b88f10f",
"assets/assets/images/mouse_scroll.png": "1d512c3ebd0ee385a2830b3c068a5ecd",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/FontManifest.json": "fcc1a679b73fe28f0d5b6aab427aa77e",
"assets/LICENSE": "f13e2ce29b709829cd188d51942a86f7",
"index.html": "1bc89ad4f8786a05979800ac92c55f96",
"/": "1bc89ad4f8786a05979800ac92c55f96",
"main.dart.js": "34cc9f40bbe5701f6badab4cc4326e8a",
"manifest.json": "8bd6fcca4fbfc6a436cf8f31fe8da657",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
