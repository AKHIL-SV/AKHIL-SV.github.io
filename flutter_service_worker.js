'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0b349d89076ed5a9b0abf53208150c77",
".git/config": "fa284d1b5d1e5909e5549682fb3c19d7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "83bb6fd76c6f270a7743604516d88141",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d51ca8652b9990a4a68cea79400d588b",
".git/logs/refs/heads/main": "781005bff60b03bf1e832dfe3194af05",
".git/logs/refs/remotes/origin/main": "f43dff43458fe5ec293dcb5ff58204f3",
".git/objects/00/7b03be8ea35a71c7e083183a9f6ef9d9334e2d": "5e36bcc64e48b1797a8232cea282e673",
".git/objects/00/fc143458a64f4262431d6cb4d97ea4b4ff073d": "794add3d40b79a27b9f2d4d08cec49cd",
".git/objects/09/dd9358930fddb53b277c4367580dcb6b75d2cd": "0181411eb6578f8105c9f06206bc8080",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/16/449185ed3a0c7b1d6f108c6ffef31f6bdab645": "6324709dbb54e2aec22713806757dc7d",
".git/objects/16/7fd98b76d2f34404229e3c7bcdb4f83c6b3be8": "a1f8317f30dc5aeb54596b3f1c403e8a",
".git/objects/17/18eda649a84b357a662e95e8f21560914d4cf4": "f3eac0160abb75e8f2a134cdf21f77f6",
".git/objects/1a/fa55a48ad81e0f92a8e509681c5b5bcd1c6eb5": "cb93436bc2204d6b1989096af91fe642",
".git/objects/1d/2be4f28a6e92f76db397ebec6fb6245a2642a0": "0816d9c3bec7b363cc357212bd055b7c",
".git/objects/24/94fa0fab06c220bcd1bd385ec409dfed83741d": "9dc56da969379be07a8e51a0881a8720",
".git/objects/28/b0b56f548e57a3daab371e7a6857f14876bac9": "16ebe286779636b9d05cdcd095564868",
".git/objects/29/88be0eb304d5d925a713faac1acb641d448f67": "1aa350f7938119827aaba06d02224829",
".git/objects/30/313fba036634068607e965f3613c7d0c075c6d": "b73cf98aa621d767177c334c75f9cc5b",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/41/354c5eb6f834a6438e0b44541e5aa37f0a4d97": "e66f20dd8b9af97330c46fb717219409",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/45/7c856e5cb7d9fc0cf75c9a43ee9bb5d22ae95a": "1244a497d933dbbe355d79303b80f8e2",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/53/37be9654259a2901ed047aa32017e66f3e0de8": "8f6da44b407164226013983a74739a4a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/57/a08bac34a8acdfe15f422ed03e8b2bd68b007d": "6c0bd716563294aff89a0deb68910c7d",
".git/objects/58/2c58069201c10b7601fa602256900102f6459d": "15d2326c4b786355256da1abab1bf312",
".git/objects/59/1c223490d4c3d5b14d280f769e4fb37e0e3990": "30c112c04874ebc8d0731f14fe5196b1",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5b/3e7ccbccaebcfb34144567abdf4c945bd473e8": "7f280fc0e1acc98807ce8d87c6ff6bb3",
".git/objects/60/386697a5b808fb2f87fef1835e6d51ed20c9d3": "5f2ffd34f1b4aa81e0c3815fbc2b2cfb",
".git/objects/63/3a1017e16fa2b3840dc7175f35dd09cc5af6d9": "a5eca2fdd433951a5afcd76f2a4d0d0a",
".git/objects/68/2348d8138c26f64be68de42272996a7834dc11": "70edea959407b79492282913e41e53db",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/9c6c254bfebd0faf829b6ae340c240936dee69": "80318dea31f51c84626854fb222ae455",
".git/objects/6e/262ba93a7eaad0a9b3d15c2ec0e1a5e909934b": "12c97bf29daa0ed75e47ccba64aa0913",
".git/objects/71/01b1ddd9ab672590bdcc92ff0821297850d656": "2cd78bf281caccc7877a957654d4d7a5",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/75/b8267e5b5a8460ddc5cd347cb7c6be5fc17f87": "1f0b437de7f9bee03e356f8f06c3dee0",
".git/objects/78/cc5b9396ac77d3a01168bbfdd5bc50f553769c": "1cfe85aad967a9c4f0a658ae16cbcce8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/81/da810ed0e46cb0dfa5923c3589e0ef7c0aaea0": "ef97b3805e87d22e65d58d58a3549e35",
".git/objects/84/2307affd86c178c3ef9a8d2378786b96d9f453": "d13c945e97cca46ab5d2f3aefd9aacce",
".git/objects/87/4c041393a2cd13529a659941eaed32804b2162": "f38f157d573dc6fa3f27d8223c42df99",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/529cecdb62774a065bed4b7125edaaec8cdd14": "e88aad43de300527d9c47c3760cac2cb",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/bcc8fde25c87fd042c8230cffd62b887b5ffb5": "5b1a8ce169eec0e32ab83f785a02810a",
".git/objects/93/26d8d66bf9f0b688324005cce768a5969161d9": "2db814a0be6db75d7d3f5eefa442d713",
".git/objects/98/0505ab77824c159c9b8d335ae69eaf0f28900d": "a65e49141e5ec0610a9a7db91f83f393",
".git/objects/99/1b9b30c5bbba095c3d3b2e0199910f011d47de": "58f96a968b7680564d72468765a00c4a",
".git/objects/99/b4c63850a3857afc484bcaef3ed127f8d17fe1": "252ea06ac28c574eb18aeab089b5e36e",
".git/objects/9a/7fa48f13b16aa9181482bf5cb28ec97f83ef88": "9088dcd003ee6027329223b698b48f9d",
".git/objects/9b/d41fc52617b616c37358c4f0f6bcbd02ec17fb": "ced556cc15303abd47413fce13a0c07f",
".git/objects/a0/89f1fdff4aefdc959a0f413be9981061d02d08": "2aa3a6effeb4852cedffb334552bc75e",
".git/objects/a0/a9b9ec8e833b3a98b33208e478b3cd641a6287": "71622afa44b40e4cce5da184397ed713",
".git/objects/a0/f8a97d4bbcdc2ec46ebcf95894158fafb6a299": "63b47a48ffbf193a510dcb6cebe94ccb",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/f24ca818769c8970ec35398b8c02fa3a9932ba": "ecfa4709bbded19192a929eee53aee88",
".git/objects/aa/1b82233445b48fda902ec28e2bdab1946119dc": "ab9f373c1df3e6860114b06d9f6e713c",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/7536938ec2282de58988c670e07c8c27750fd0": "5b9a4fd4093c2e9b974597eff39c6373",
".git/objects/ab/cba6eb384371b43382bb9dd5821e54c4ed02c6": "3ca62a42ec26edc161dbe0f2edf968a7",
".git/objects/ac/7a64567be4a41993ee0a78f9ca3c2592a9fdc0": "6ee5e6acc18048a782f7005d4a8e072f",
".git/objects/ad/e7549f6540fca061964977897ca90bad400f39": "9f503942bc6108c3c478e34baed7cf36",
".git/objects/ad/fb65a5b6501058031594e13834b050fa09ecfc": "b5d4a7d0972fc0d5c92c0a65fbfc9b48",
".git/objects/af/60a8933ae0185e9318718cd0d0949161beb9e6": "66bff1cc8f82518457b331a76052dfba",
".git/objects/b0/e8cb4cf45e3a45e6ddbd261cd118622ee42afb": "8d36c1a6b8ecc059154073b33ff00ea1",
".git/objects/b1/98db9ae9de8d75dc8089b6026d42f475803998": "b987e334860a0f45c837d8f89bc92000",
".git/objects/b3/bfcd3f794338d7c5ced15bbb9adecec4b76c10": "466f4ae67a2a71dccd96637774dbea1d",
".git/objects/b6/a8eed39faf63c40a200533f354cf764c76b456": "b833110687f5e0157f7db8ca18d86b84",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/b3f2cfdfe99fe36e513c61bf3639c5a6171a7c": "d82455108399e02d97d1e5343a22dfe1",
".git/objects/b9/cc37db9c91af3b51a0988be685f1748efee583": "d23de025224554fd7eae48b1e359e591",
".git/objects/be/ffd38bb00b4287af2654d8d32cf7b89d117403": "c9704fcfa88be57ba44be04689118292",
".git/objects/bf/b113fe4688403fecdf146e615de76292793902": "4993ff343268cfacfc7197588622fa48",
".git/objects/c0/fe7b53f69088c60cf6f9b9b07d7123b349d01e": "e06d639e3c276306f832a51d2b1e0a35",
".git/objects/c1/6726a65cbb71ba104fb60e82486ad9ca349e3d": "2882360f241133697eee52df0a303ee5",
".git/objects/d2/f5c05bd25f7f01247b14a26464ab4999208cb9": "e62e4c6d78993dd21c44357c1e30812c",
".git/objects/d3/5927f1eaca0c8e6251c43af5bc7d7f24c354d7": "f24d4871ffaff1524ffb9277722f8d4d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/36944d117efa718a32fc14a07a1e755dd24a74": "c93989433c58ca69bacb43e24afb553b",
".git/objects/e5/54b2a2d34b3dd5e1f5ada5e60355a929e38e7f": "ac2130eb8d381c7bc19f2e906d02d853",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/b824470ad8c16c5569bd38c9db5dd04d5cd543": "f4b1af27f7bb7fdd75bd91f24889bffc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f4/20160b46562dc39be90b3ac096b4517a6d119a": "6c06eefbe444093f7f8773f0b0ee9daf",
".git/objects/ff/bb400c8ac2ec732b9c334b61b93ecc3136f679": "99c4420fb5f1558e1d7a88e40e5c104c",
".git/refs/heads/main": "3a41206c14d1f0921b1e7b7a58682605",
".git/refs/remotes/origin/main": "3a41206c14d1f0921b1e7b7a58682605",
"assets/1.gif": "d50ce025a5cb3897278ea0bbe6ea55ce",
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
"assets/NOTICES": "4eb04f78880b17ec7b64e2ebbda9323b",
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
"index.html": "c776340fa7933d22aeecb6f4f574e0fe",
"/": "c776340fa7933d22aeecb6f4f574e0fe",
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
