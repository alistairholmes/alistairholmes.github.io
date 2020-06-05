'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
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
"assets/NOTICES": "2b54b2ba396decbc61bdc480d01c998f",
"assets/LICENSE": "f13e2ce29b709829cd188d51942a86f7",
"index.html": "1bc89ad4f8786a05979800ac92c55f96",
"/": "1bc89ad4f8786a05979800ac92c55f96",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/objects/c1/866ad0cc75a45fd90bee5548a6c923796d7b37": "f9b8a055d3f54187f5127597e67c6016",
".git/objects/58/2444c6b4fe918f0ac3c8d29f5da0fcd342bb88": "e39be5c3532c886dbdb33c1707d80b1c",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/24/d64db98da75d386170c22a9e44406556558dbf": "c1bbb8b88376b3e46935d4613276585e",
".git/objects/9f/fb2a3a633f7476158161e20f5d9940f9e464ae": "cf84757de266987709e91f2c5dbc75cd",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/12/4fd2b7b128bbf53cdf3eb976266885c8887a5d": "78bb9284d6a330835d714aa50cfa8436",
".git/objects/c7/90e045bfef5a65717c0a794781478f7e3b138b": "c867fe9ce2b283e2314e1e55c5539d54",
".git/objects/35/63e7347be1ef18a3a447df1cd5d049cc088e14": "410c839ec94204d5a12c81538aae3317",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/15/c71bc4b1370364b3e19bdf9015daf9764ec59c": "a329cb552b2f92af382ee89afce93b10",
".git/objects/e5/af501e678d92e57549455b6b4fa3078ae5fc47": "170c455816e2dc82959ea8fffda8b2c1",
".git/objects/5c/997be13adff7eb34e83b3dc93be1fd64eb784c": "f9278aa6fbcc63adf94d6cd96feb1db2",
".git/objects/c4/1dbb665f4a371043425ab0672feacb4c5a2de2": "10428fa808c344887c39f0f944407231",
".git/objects/64/50399d1c2ab36f22254794ca7dd200354f61ba": "c114af8aa65348a05d7ee526f0b18381",
".git/objects/f7/061ea09e318bbf989e7b387ae81ff7dd25b345": "9c03309e7606b6840fd7746d0fcfd52c",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/0b/25a51d7b6f6539f67df53fe70a881517bdc157": "b6517466498dff621ab3723663d90796",
".git/objects/0b/b5f45b752b75f6ecebeca5ccf72c25197e2b29": "3b4e6af7ba1f429b677ba419badb8f39",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/f3/6590b607e688d0e2c52b5b1c7f9dfc1ef6f5cf": "2ad860d52eb8a7e5b2538c712c7b3ede",
".git/objects/54/c9e17d8546b168ee556b767c585983254c8fad": "7584eaddd21d0e5ef3d9e3c1ac8c19a0",
".git/objects/0a/ef81c2f7061c30dc19445380a2f95e6b88e158": "ea45a1e9153418b5b16d37112edf59b8",
".git/objects/0a/6069c26b6cc78357b9eedb4ce444d83bc95db9": "389285712dbc43bed435d23fb8d82aed",
".git/objects/29/bcde0ad44e672d3ba934f61da49598e4b58958": "1ce9edb1d263d4f06e3d0cd85cc3a4be",
".git/objects/33/c5e0eac830b9ac3dc01df7d469e7c6b258e690": "5ac53a7160d4e1e0a410b9d42d180d02",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/bb/e5d40e271bdb63c05a270a354fff2deceb7d26": "100c1e39e10055058ae5c3cf22ead5f7",
".git/objects/a8/c6f791c22ca8d44785c1ca64c42ca6a82b8750": "8397b990bfff40d77b3205c311ef1b1d",
".git/objects/e9/2220670c0e81e1075676af204f67235671471f": "0cd5acf9de8e2b0f806722543b3acf42",
".git/objects/63/4bec2490a3c269bf25b2f5242d3a0239c53cdc": "a18f96d1abb120ccfd6325fb91c3ee7a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/18/a3703374f7dee1138baa111ac0d76e7c405e9a": "4086f9b96b662af3edee8a1a26758a96",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/81/dfd5a8bb2387211b5c3931bd953c3d02524b75": "912dee0bc074e03652f245ed0f5a85fe",
".git/objects/62/b668b39328b8d4cb1d54741c2ea22ac5ec2565": "18cac32d0a606c12d6098b3b8a6537fe",
".git/objects/13/8134d42536934af26a622977450fc384e632a2": "6e0c97fc32cecad18c6ab9da37947a95",
".git/objects/bd/ebe208d8bd6cc1ed7962446562ad8edd01fc8c": "db53c990096d72be4c22b1e05dfd61ba",
".git/objects/1c/897d493d91888222c5882b21006d5d644f696d": "d13b8d9d7eb1361cf33c66ab5902b794",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/ca/b26ef401b9b13ff4c63908925a138cd6cc3273": "25a0a6cf7e6bacb888d745941ea24377",
".git/objects/5f/354cff90b8b50c64bc6b12de4ff71867ed3431": "42c186f37b255b05e09539d699da8ee6",
".git/objects/25/6d32e2fffa3a99de7010dbe6f4b769967e2201": "0c398fa7bc1fcb437658a5a8609a7e1f",
".git/objects/d5/22fe70691b21a175f27af3f616a1a833541a33": "ec05fc66987e3220792ee0f91f667e61",
".git/refs/heads/master": "556271c797fd4c54f99b75df4dd0ce21",
".git/refs/remotes/flutter-web/master": "556271c797fd4c54f99b75df4dd0ce21",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/index": "505d790a18e26a1287829d652386961d",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/logs/refs/heads/master": "1cf206c3ce565c55abdc17a829c1282f",
".git/logs/refs/remotes/flutter-web/master": "bdba68b3b1c8ea92b2b7792062ef3c6a",
".git/logs/HEAD": "1cf206c3ce565c55abdc17a829c1282f",
".git/config": "5b68fb93ec50c989744ebb35d66201c0",
".git/COMMIT_EDITMSG": "edef553646a2d2c6d12674ca26f038c1",
"main.dart.js": "eac4466a11127e0c47715f401658500f",
"manifest.json": "8bd6fcca4fbfc6a436cf8f31fe8da657",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
