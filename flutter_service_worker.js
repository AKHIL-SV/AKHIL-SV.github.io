'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c196db7f7951f4dd91770338b18f699c",
"assets/assets/fonts/NotoColorEmoji-Regular.ttf": "ed84f46d3d5564a08541cd64bddd495c",
"assets/assets/icons/facebook.png": "ac7674cd4b3ef88ad587b161c4512173",
"assets/assets/icons/github.png": "67ae99201236bf21b56ee0548d417421",
"assets/assets/icons/linkedin.png": "1598d39776d3eae2f894cd65a14d0fce",
"assets/assets/img/1.png": "eaea8294a80b1bd6932ea6c270b57594",
"assets/assets/img/6.png": "07f26a7b7858f3f397ed79a0d201bb58",
"assets/assets/img/7.png": "ea419b7e912e638a2fc09c6aeedf13bf",
"assets/assets/img/8.png": "960ae35f2652ff48bb51f387fb4193a3",
"assets/assets/img/cc.png": "7006149fef229652a4c67fce0a9c4671",
"assets/assets/img/dn.png": "ab5080ead12c82f7dc414c76c11b75da",
"assets/assets/img/mm.png": "36089edcedaccd305ee67d3ae90d1ca6",
"assets/assets/img/ns.png": "16891770873c12af44939f94e005bafa",
"assets/assets/img/open-source.png": "858a6285e7d990938793db691cbff9b1",
"assets/assets/img/profile.jpg": "619088277eca465ca28a518028c11847",
"assets/assets/img/td.png": "92e70478431fb791ba3a4a6e2ba55bbf",
"assets/assets/img/va.png": "2e56af4eff57bd082389660655a0274d",
"assets/assets/img/wa.png": "8d50538139d9bcf85508ac30ef3e3bab",
"assets/assets/logos/api.png": "52a24bf87690226a7fb3d9ae75129e92",
"assets/assets/logos/css.png": "9d089bd0b10be9772b151c76fabe85ca",
"assets/assets/logos/dart.png": "f6998efb5d667130e9a777870e37e3a8",
"assets/assets/logos/firebase.png": "04aec5a53cd16f26a855e61aa5cd35b5",
"assets/assets/logos/flutter.png": "6637b6c64481c76692760d0729b9c10a",
"assets/assets/logos/getx.png": "e4baab27f1a659a71e55de0d9f080c52",
"assets/assets/logos/git.png": "5b2255699fcb506b570720cdbc8ade1b",
"assets/assets/logos/hive.png": "d226187dbbc83220cb3e9f206cdb5a98",
"assets/assets/logos/html.png": "27b0afc8d7069fad77a6ece74eeb7e83",
"assets/assets/logos/js.png": "1a3cc25d0a714e9fe2c12bb986202af8",
"assets/assets/logos/json.png": "e592ce422462ea17bd49ca86e7606412",
"assets/assets/logos/node.png": "25578617761bc5f6a1f8d5fe69ae3889",
"assets/assets/resume/ResumeN.pdf": "d31782e011e405f81cfa0ee2f300e554",
"assets/FontManifest.json": "eea7fad4bee576cfbafea1c0e9896ce8",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "da851b1faeb27c3f797abce2c4f7451a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.ico": "8418015f4ec5af1ec5b43024f433f1c4",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "22995faac28f05059511e5d755c8af63",
"/": "22995faac28f05059511e5d755c8af63",
"main.dart.js": "bf4f0a44a17891a847aa0cb469d3d4c4",
"manifest.json": "b4a54bfdbf154a40fcc92103a746c919",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
