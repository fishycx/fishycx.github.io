'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7ec804def52e3b51d4881d28de944e3c",
"index.html": "7092d4d97cf37ad0d7568db9f7bcf756",
"/": "7092d4d97cf37ad0d7568db9f7bcf756",
"CNAME": "893f6a70602d5e377dfa11e8ee290557",
"main.dart.js": "152e140d1a63315041fbdbafd9fa5eaa",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1e608d89d44eb1607db73a451c28bcd3",
".git/ORIG_HEAD": "358b8b78c576004e20fe47c98f87921f",
".git/config": "82d65d87c22c8a434b2ac79e86d855e1",
".git/objects/95/d7af91626bf613d34c13cf33cf2d620229f38d": "e4ab571f2870bc42459c2067c0c67dcf",
".git/objects/68/a43ab1ccd7e877f64f2305587595837fcd71d0": "cb3401131139b58a52f86a9cb3be26c2",
".git/objects/6a/dba5ba32d8a69a9afd19da9883cb5388616577": "5cad60db8a0a3824572ebdbaabbe6b17",
".git/objects/32/106823ed14aa44c60e2cf2a9346faa1cfd1aae": "bf5927b125b5e1737b75f5ccbb861476",
".git/objects/69/6eaf4827a700e64138231f5af485727b8b085c": "31beb9c465f716d9ba162797a4280809",
".git/objects/94/7fdb00ab3601533d80ffc4ede7c7d95fd8a665": "fb733acfb619b5140901f95d7709e368",
".git/objects/b2/da36e3bd089f2617c9e9932f2c231ea3f2827e": "23b93ffef12852d764863ac575077d2f",
".git/objects/ad/552bc849fa66f86cb8f13798d0d584460081e2": "65e65f333d2bb124fdcdb9112226f264",
".git/objects/d0/7957d70fddcf1fba3d27d3dea91552f980c683": "61a2a8513b57f666dc9e6b3f7a9f9824",
".git/objects/da/27b0a3525eda67be6ad76f76f4c7ba304873d2": "626e3b7f1c3b078f09f53c2fa3d349cb",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ee/f5b24d4216d313f392a0a332b8788f8525756c": "83ce2a6f04d886397c8cbc7b026bf573",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f5/32c6b048e18731e5ee49d5d5669a16b4e923e3": "a03a78e32ffb5de2855b219f3fc6d163",
".git/objects/e3/a2435a941d75d3ddc437e79810e38966cb20d8": "5b9b438251519782203706441a21bf36",
".git/objects/e4/17922cc6f79b830e0072192868a0b416263148": "f966497c1f66eaa4d527c75bb711cb13",
".git/objects/ec/84aae532475eeff6de4ef9a6836a640242cbab": "30818c6d3b164f191e6867983abc9057",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/pack/pack-8f7ab94f79e8a44885785569d1d674562841c5ab.idx": "b00550f81100b438009932ee275b4863",
".git/objects/pack/pack-8f7ab94f79e8a44885785569d1d674562841c5ab.pack": "623db5fba2cf280caea8d045039476a5",
".git/objects/16/d9ed9db511138b195f4886afd736db0504c2e9": "3f6648a4a71b905dedb1c2bddfc8cda1",
".git/objects/1f/808ce3a0d021a5afe2ce6a500f4d5179c50ba0": "3b3abc63206dfa0711fb96222d564323",
".git/objects/1f/c9a2041ce12c8612ecd0420f699ef7b0d93507": "7bd8cabb744207c4067b2683029801f5",
".git/objects/74/35e5ad761c13c4fee28883a236642db0576ad2": "d4126bc0b34ae38ad6adcccf3bf0370e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/bd5285129c9ab9de7b71a497207508749228e9": "978101b3c0acdc75ece9c3281b9b93b5",
".git/objects/4d/7d6fe8b342700ab2467e19d427468bd799f112": "590c915f305c780511d334c775f6e0c4",
".git/objects/75/56d833f73d4e4cd3390bb5876d810b1290344d": "b7640046d1e6d98d94148b9a8dc3d4ce",
".git/objects/75/285192b0324776bda91cccbfe8283fde467bcf": "15ac75b0cf990c58d40cd6ce92c391b7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/732e9d3794dfc7052148a0bcea0a3f838df7ec": "c45c26183bb3cf1f668ad4d6b5cd02c3",
".git/objects/3a/6192682e5e2e4ef1766c281f9943fb3eecf423": "e0c7198eec44af4fb38cb2401d37fe55",
".git/objects/54/db5e8b00f83e8138e316cac9d1e30dabe2b0e1": "8b9079d72012dfd86d5e5bed8afd7f38",
".git/objects/5b/daaeef791e6a26337984a9ac14536faf82e1a6": "4b165bd2ddbb7300336eff5ab87e2072",
".git/objects/6d/ec21d7dff69de9043ba71e6b64bab7e21d128b": "47962cee2e056141d9ade4c0843b5990",
".git/objects/01/8a7d79e8635e51c35a6295f0261cd8a3dbf6cf": "40ad55b55ee57a1e62d9c68e7f400805",
".git/objects/01/a384a1ad680cb3ad774d651030693e45e9692a": "1d5558e7a32eb25931a28c854b055dfe",
".git/objects/99/bdc7e71ca376ff2e423305dff791628f52a822": "561614901e494cbd54d4f1241065fba1",
".git/objects/52/07a84522ce5d22dcc85b7ee00b4229b17fc52c": "6202b50be89fa7318e76a4e0c62ded04",
".git/objects/97/7d47ccdd6b8d6b0c3530aeaaf5a08b75684a4e": "a5dce40e49d8bd2fc1e96d1838b630a5",
".git/objects/63/f1e7db45311e0b1ac5ffb5ee4a627ba9bbec35": "15ec7327120fd7ee84bbe537110a5722",
".git/objects/d3/8cb9dc1070d61ed1bcad425524d44cceb5385a": "17d686da2abada803d7fd9502972e1ad",
".git/objects/d5/85b082f2512e3c133ef902715231b72fe19b29": "4116288c41792a6419955fd62f917c44",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/fa/b5223fabf41c4aa3afe19f49c7baa4f90d2a79": "90db9460caf449088b5749285036ece9",
".git/objects/ff/7d7a495544f29aafde82d26da27483e8cd5d56": "c3a8e2b3cf67d901237df1ef545cc22e",
".git/objects/e7/5b3148a88243de0030289b8b382233bbb26cd8": "f4f28754410d1433b345cce85f05b672",
".git/objects/e7/fa48f7803fb314875a67d651955ad4d522555d": "865149166b5db3dc75e4371d3dede6a2",
".git/objects/f8/4657af5ff632a85debd4a6484cd7b6e69ed570": "2b35901cbc2b44aedc108b9cae52f35e",
".git/objects/f8/5f3505b95a82ce69f647db97318abd3fb3216a": "19d3d4a2f59cade5326bbf9852660da7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/b547f2de72a467cfeaa520084cbea494986128": "8a47a4aa659806fe5744fe04442ea642",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/48/87fe6444dcd4f8e9ca56fff34e10aa6214dee1": "ce43b92b79b9de367ae44c6dc1269ad2",
".git/objects/85/121492e97e03c7de89ed2d65ffb3cf2cd1c9db": "68d9b7e98338715126417b2a2aa27822",
".git/objects/49/a87944ee7e8d199b81cffc2847e2f8b82ff3cb": "29b54d1926ae22d9a2643aca112dd9a3",
".git/objects/2e/4dbed246289495d173ee80e1574b302286a56f": "81cb9f1435a3becc9e021746363bc77b",
".git/objects/22/51efd3564dea3b83d4826df5641d772299590a": "9ae33272bab5b019c58a492e81e4573a",
".git/HEAD": "f01ada5d23bdfc8d97a8a8b3d70490c2",
".git/logs/HEAD": "3c53267fd6fcc4127c4c5a46a18f367b",
".git/logs/refs/heads/dev": "6ac1a349dc878e0a16ab5fd599f26074",
".git/logs/refs/remotes/origin/master": "ac09d3b8842f2aa880a4f8beeaee90a6",
".git/logs/refs/remotes/origin/dev": "dc802f2e08605ca57199bc2f22cb8016",
".git/refs/heads/dev": "c71c272e21569ecedc2e9c71437c2002",
".git/refs/remotes/origin/master": "aaf2ff2440bd368e72b8b5f33dbc2c4a",
".git/refs/remotes/origin/dev": "c71c272e21569ecedc2e9c71437c2002",
".git/index": "ffd776b336c0c61c772a67b5b6d41952",
".git/COMMIT_EDITMSG": "1d894cce937ed05f5a760b98ba3319f2",
".git/FETCH_HEAD": "8e41f3aeb3729d49e9579df987a7fe71",
".git/sourcetreeconfig": "5e03a3d3a06a371baa1b06e71e0e5fb1",
"assets/AssetManifest.json": "13c953f28a2d5df6770f6a6673e2a59b",
"assets/NOTICES": "1f87d92caa028b3e67b041a62e081028",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/text.md": "86c316cff5f9e28f5357aeb7f7acee93",
"assets/assets/images/qq.png": "3333461a2229b56965b4a980646f55b2",
"assets/assets/images/wechat.png": "6593bf63a1d387de73ffe07e97b5720b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
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
