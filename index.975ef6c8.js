// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ShInH":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
//Import JS
var _displayJs = require("./scripts/display.js");
var _controlsJs = require("./scripts/controls.js");
var _everJs = require("./scripts/ever.js");
"use strict";
//https://github.com/flauwekeul/honeycomb
_displayJs.initiateMap(_everJs);
_controlsJs.initiateControls();

},{"./scripts/display.js":"kiN4r","./scripts/controls.js":"jEMfw","./scripts/ever.js":"jidVu"}],"kiN4r":[function(require,module,exports) {
//Imports
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "camera", ()=>camera);
parcelHelpers.export(exports, "currentMap", ()=>currentMap);
parcelHelpers.export(exports, "getMap", ()=>getMap);
//Public functions
parcelHelpers.export(exports, "initiateMap", ()=>initiateMap);
parcelHelpers.export(exports, "zoomUpdate", ()=>zoomUpdate);
var _honeycombGrid = require("honeycomb-grid");
const camera = {
    x: 0,
    y: 0,
    zoom: 1
};
let currentMap;
const Hex = (0, _honeycombGrid.defineHex)({
    dimensions: 52,
    orientation: "FLAT",
    origin: {
        x: -500,
        y: -400
    }
});
//Private variables
const mainCanvas = document.querySelector("#mainCanvas");
const animCanvas = document.querySelector("#animationCanvas");
const mainCtx = mainCanvas.getContext("2d");
const animCtx = animCanvas.getContext("2d");
let scales = 0;
let hexSize;
let a_full, b_full, c_full, a_hex, b_hex, c_hex;
let halfCanvasWidth, halfCanvasHeight;
let grid = new (0, _honeycombGrid.Grid)(Hex);
let PROVIDER;
let isdblclick = false;
async function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
function getMap(radius) {
    let map = new (0, _honeycombGrid.Grid)(Hex, (0, _honeycombGrid.spiral)({
        radius: 1 * radius
    }));
    console.log("getMap", map.size);
    //Basic water layer
    for (let hex of map){
        hex.type = "64, 128, 255";
        hex.highlight = false;
    }
    return map;
}
async function initiateMap(ever) {
    currentMap = [];
    PROVIDER = ever;
    await PROVIDER.init((radius)=>{
        currentMap = getMap(radius);
        PROVIDER.setMap(currentMap);
    });
    mainCanvas.width = window.innerWidth;
    mainCanvas.height = window.innerHeight;
    animCanvas.width = window.innerWidth;
    animCanvas.height = window.innerHeight;
    calculateHexDimensions();
    windowResizeUpdate();
    zoomUpdate();
    drawMap();
    camera.x = halfCanvasWidth;
    camera.y = halfCanvasHeight;
    recalcEnergy();
}
function recalcEnergy() {
    for (let hex of currentMap){
        if (!hex.details) continue;
        calculateEnergy(hex);
    }
    setTimeout(recalcEnergy, 200);
}
function calculateEnergy(hex) {
    let dateNow = Date.now() / 1000;
    if (1 * hex.details.lastCalcTime >= dateNow) return;
    let energy = 1 * hex.details.energy;
    let energyMax = 1 * hex.details.energyMax;
    if (energy > energyMax) {
        let val = 100 * hex.details.speed * (dateNow - hex.details.lastCalcTime);
        if (energy - val > energyMax) energy = energy - val;
        else energy = energyMax;
    } else if (energy < energyMax) energy = Math.min(energy + hex.details.energySec * hex.details.speed * (dateNow - hex.details.lastCalcTime), energyMax);
    hex.details.lastCalcTime = dateNow;
    hex.details.energy = Math.floor(energy);
}
function zoomUpdate() {
    const hex = grid.pointToHex({
        x: camera.x,
        y: camera.y
    });
    const x = hex.x;
    const y = hex.y;
    hexSize = scales;
    calculateHexDimensions();
    let replacementMap = new (0, _honeycombGrid.Grid)(Hex, (0, _honeycombGrid.spiral)({
        radius: currentMap.radius
    }));
    for(let i = 0; i < currentMap.length; i++){
        currentMap[i].size = replacementMap[i].size;
        if (currentMap[i].x === x && currentMap[i].y === y) {
            camera.x = Math.round((0, _honeycombGrid.hexToPoint)(currentMap[i]).x + b_full + hexSize / 2);
            camera.y = Math.round((0, _honeycombGrid.hexToPoint)(currentMap[i]).y + c_full);
        }
    }
}
//Private functions
function drawMap() {
    //Clearing
    mainCtx.setTransform(1, 0, 0, 1, 0, 0);
    mainCtx.fillStyle = "black";
    mainCtx.fillRect(0, 0, mainCanvas.width, mainCanvas.height);
    //Positioning the camera
    mainCtx.translate(-camera.x + halfCanvasWidth, -camera.y + halfCanvasHeight);
    for (let hex of currentMap){
        //Hex is ignored if it wasn't seen yet
        //if (hex.visibility === 'unseen') continue
        // console.log('hex', hex)
        // console.log('hexToPoint', hexToPoint(hex))
        let x = (0, _honeycombGrid.hexToPoint)(hex).x, y = (0, _honeycombGrid.hexToPoint)(hex).y;
        //Checking if hex is visible within canvas
        if (Math.abs(x - camera.x) > halfCanvasWidth + hexSize || Math.abs(y - camera.y) > halfCanvasHeight + hexSize) continue;
        //Drawing highlight around hex
        if (hex.highlight) {
            mainCtx.strokeStyle = "white";
            mainCtx.beginPath();
            mainCtx.moveTo(x + a_full, y - c_full);
            mainCtx.lineTo(x + b_full, y);
            mainCtx.lineTo(x + a_full, y + c_full);
            mainCtx.lineTo(x - a_full, y + c_full);
            mainCtx.lineTo(x - b_full, y);
            mainCtx.lineTo(x - a_full, y - c_full);
            mainCtx.closePath();
            mainCtx.stroke();
        }
        //Drawing the hex
        let color = hex.details ? `${hex.details.color.r}, ${hex.details.color.g}, ${hex.details.color.b}` : hex.type;
        mainCtx.fillStyle = `rgba(${color},1)`;
        mainCtx.beginPath();
        mainCtx.moveTo(x + a_hex, y - c_hex);
        mainCtx.lineTo(x + b_hex, y);
        mainCtx.lineTo(x + a_hex, y + c_hex);
        mainCtx.lineTo(x - a_hex, y + c_hex);
        mainCtx.lineTo(x - b_hex, y);
        mainCtx.lineTo(x - a_hex, y - c_hex);
        mainCtx.closePath();
        mainCtx.fill();
        setText(mainCtx, x, y - hexSize / 2, `${hex.q};${hex.r}`);
        if (hex.details) {
            setText(mainCtx, x, y, `${hex.details.energy}`);
            setText(mainCtx, x, y + hexSize / 2, `lvl: ${1 * hex.details.level + 1}`);
        }
    }
    requestAnimationFrame(drawMap);
}
function setText(ctx, x, y, txt, fontSize = 10, style = "white", align = "center") {
    let _font = `${fontSize * (camera.zoom + 1)}px Georgia`;
    ctx.font = _font;
    ctx.fillStyle = style;
    ctx.textAlign = align;
    ctx.fillText(txt, x, y, hexSize);
}
function calculateHexDimensions() {
    a_full = hexSize / 2;
    b_full = hexSize;
    c_full = hexSize / 2 * Math.sqrt(3);
    a_hex = a_full * 0.95;
    b_hex = b_full * 0.95;
    c_hex = c_full * 0.95;
}
function windowResizeUpdate() {
    mainCanvas.width = window.innerWidth;
    mainCanvas.height = window.innerHeight;
    animCanvas.width = window.innerWidth;
    animCanvas.height = window.innerHeight;
    halfCanvasWidth = mainCanvas.width / 2;
    halfCanvasHeight = mainCanvas.height / 2;
    const min = Math.min(halfCanvasWidth, halfCanvasHeight);
    scales = min / 7;
    console.log("halfCanvas", halfCanvasWidth, halfCanvasHeight);
    console.log("scales", scales);
}
//Hex Highlighting
animCanvas.addEventListener("click", async ({ offsetX , offsetY  })=>{
    console.log("click", isdblclick);
    await sleep(500);
    console.log("click", isdblclick);
    if (isdblclick) return;
    offsetX += camera.x - mainCanvas.width / 2;
    offsetY += camera.y - mainCanvas.height / 2;
    const hexCoordinates = grid.pointToHex({
        x: offsetX,
        y: offsetY
    });
    for (let hex of currentMap)if (hex.x == hexCoordinates.x && hex.y == hexCoordinates.y) hex.highlight = !hex.highlight;
    else hex.highlight = false;
});
animCanvas.addEventListener("dblclick", async ({ offsetX , offsetY  })=>{
    isdblclick = true;
    console.log("dblclick", isdblclick);
    await sleep(500);
    isdblclick = false;
    console.log("dblclick", isdblclick);
    offsetX += camera.x - mainCanvas.width / 2;
    offsetY += camera.y - mainCanvas.height / 2;
    const hexCoordinates = grid.pointToHex({
        x: offsetX,
        y: offsetY
    });
    console.log(hexCoordinates);
    let hHex;
    let tHex;
    for (let hex of currentMap){
        if (hex.highlight) hHex = hex;
        if (hex.x == hexCoordinates.x && hex.y == hexCoordinates.y) tHex = hex;
    }
    if (!tHex) return;
    if (hHex && !hHex.details) return;
    console.log("hHex", hHex);
    console.log("tHex", tHex);
    let cellCoord = {
        x: hexCoordinates.q,
        y: hexCoordinates.r,
        z: hexCoordinates.s
    };
    if (!hHex) {
        if (!tHex.details) await PROVIDER.newGame(cellCoord);
    } else if (hHex.address.toString() == tHex.address.toString()) await PROVIDER.upgradeCell(tHex.address);
    else {
        if (!isNeighborHex(hHex, tHex)) return;
        let energy = getEnegry(hHex);
        console.log("energy", energy);
        if (!tHex.details) await PROVIDER.markCell(hHex.address, cellCoord, energy);
        else if (colorIsEqual(hHex.details.color, tHex.details.color)) await PROVIDER.helpCell(hHex.address, cellCoord, energy);
        else await PROVIDER.attkCell(hHex.address, cellCoord, energy);
    }
});
function getEnegry(hex) {
    if (!hex.details) return 0;
    let percent = document.querySelector('input[name="energy"]:checked').value;
    return Math.floor(hex.details.energy * percent / 100);
}
function colorIsEqual(color1, color2) {
    return color1.r == color2.r && color1.g == color2.g && color1.b == color2.b;
}
function isNeighborHex(hex1, hex2) {
    return cube_distance(hex1, hex2) == 1;
}
function cube_distance(hex1, hex2) {
    return Math.max(Math.abs(hex1.q - hex2.q), Math.abs(hex1.r - hex2.r), Math.abs(hex1.s - hex2.s));
}
window.addEventListener("resize", ()=>{
    windowResizeUpdate();
    zoomUpdate();
});

},{"honeycomb-grid":"5H9zF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5H9zF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Direction", ()=>f);
parcelHelpers.export(exports, "Grid", ()=>q);
parcelHelpers.export(exports, "Hex", ()=>$);
parcelHelpers.export(exports, "Orientation", ()=>g);
parcelHelpers.export(exports, "Rotation", ()=>L);
parcelHelpers.export(exports, "completeCube", ()=>p);
parcelHelpers.export(exports, "concat", ()=>N);
parcelHelpers.export(exports, "createHexDimensions", ()=>G);
parcelHelpers.export(exports, "createHexOrigin", ()=>D);
parcelHelpers.export(exports, "defaultHexSettings", ()=>T);
parcelHelpers.export(exports, "defineHex", ()=>et);
parcelHelpers.export(exports, "distance", ()=>R);
parcelHelpers.export(exports, "equals", ()=>nt);
parcelHelpers.export(exports, "fromCoordinates", ()=>Tt);
parcelHelpers.export(exports, "hexToOffset", ()=>W);
parcelHelpers.export(exports, "hexToPoint", ()=>J);
parcelHelpers.export(exports, "isAxial", ()=>Ot);
parcelHelpers.export(exports, "isOffset", ()=>S);
parcelHelpers.export(exports, "isPoint", ()=>V);
parcelHelpers.export(exports, "isTuple", ()=>H);
parcelHelpers.export(exports, "line", ()=>v);
parcelHelpers.export(exports, "move", ()=>wt);
parcelHelpers.export(exports, "neighborOf", ()=>I);
parcelHelpers.export(exports, "offsetFromZero", ()=>P);
parcelHelpers.export(exports, "offsetToCube", ()=>j);
parcelHelpers.export(exports, "offsetToCubeFlat", ()=>_);
parcelHelpers.export(exports, "offsetToCubePointy", ()=>z);
parcelHelpers.export(exports, "pointToCube", ()=>it);
parcelHelpers.export(exports, "rectangle", ()=>St);
parcelHelpers.export(exports, "repeat", ()=>pt);
parcelHelpers.export(exports, "repeatWith", ()=>U);
parcelHelpers.export(exports, "ring", ()=>yt);
parcelHelpers.export(exports, "round", ()=>F);
parcelHelpers.export(exports, "spiral", ()=>Ct);
parcelHelpers.export(exports, "toCube", ()=>C);
parcelHelpers.export(exports, "translate", ()=>ct);
parcelHelpers.export(exports, "tupleToCube", ()=>E);
const l = (r)=>Number.isFinite(r) && !Number.isNaN(r), w = (r)=>typeof r == "object" && r !== null, Ot = (r)=>w(r) && l(r.q) && l(r.r), k = (r)=>typeof r == "function", S = (r)=>w(r) && l(r.col) && l(r.row), V = (r)=>w(r) && l(r.x) && l(r.y), H = (r)=>Array.isArray(r) && l(r[0]) && l(r[1]), P = (r, t)=>t + r * (t & 1) >> 1;
function Z(r, t) {
    return (r % t + t) % t;
}
const X = (r, t)=>Z(r + t, 8), E = ([r, t, e = -r - t])=>({
        q: r,
        r: t,
        s: e
    });
function p({ q: r , r: t , s: e  }) {
    const n = l(r), s = l(t), o = l(e);
    if (n && s && o) return {
        q: r,
        r: t,
        s: e
    };
    if (n && s) return {
        q: r,
        r: t,
        s: -r - t
    };
    if (n && o) return {
        q: r,
        r: -r - e,
        s: e
    };
    if (s && o) return {
        q: -t - e,
        r: t,
        s: e
    };
    throw new TypeError(`Can't determine three cube coordinates from less than two coordinates. Received: { q: ${r}, r: ${t}, s: ${e} }.`);
}
var g = /* @__PURE__ */ ((r)=>(r.FLAT = "FLAT", r.POINTY = "POINTY", r))(g || {});
function G(r, t) {
    if (w(r) && r.xRadius > 0 && r.yRadius > 0) return r;
    if (w(r) && r.width > 0 && r.height > 0) {
        const { width: e , height: n  } = r;
        return t === g.POINTY ? {
            xRadius: e / Math.sqrt(3),
            yRadius: n / 2
        } : {
            xRadius: e / 2,
            yRadius: n / Math.sqrt(3)
        };
    }
    if (r > 0) return {
        xRadius: r,
        yRadius: r
    };
    throw new TypeError(`Invalid dimensions: ${JSON.stringify(r)}. Dimensions must be expressed as an Ellipse ({ xRadius: number, yRadius: number }), a Rectangle ({ width: number, height: number }) or a number.`);
}
function D(r, t) {
    if (V(r)) return r;
    if (!t) throw new TypeError(`Supply a bounding box ({ width: number, height: number }). Received: ${JSON.stringify(t)}`);
    if (r === "topLeft") return {
        x: t.width * -0.5,
        y: t.height * -0.5
    };
    throw new TypeError(`Invalid origin: ${JSON.stringify(r)}. Origin must be expressed as a Point ({ x: number, y: number }) or the string 'topLeft'.`);
}
class $ {
    static get settings() {
        const { dimensions: t , orientation: e , origin: n , offset: s  } = this.prototype;
        return {
            dimensions: t,
            orientation: e,
            origin: n,
            offset: s
        };
    }
    get center() {
        const { width: t , height: e , x: n , y: s  } = this;
        return {
            x: t / 2 - n,
            y: e / 2 - s
        };
    }
    get col() {
        return W(this).col;
    }
    get corners() {
        const { orientation: t , width: e , height: n , x: s , y: o  } = this;
        return t === g.POINTY ? tt(e, n, s, o) : rt(e, n, s, o);
    }
    get dimensions() {
        return T.dimensions;
    }
    get height() {
        const { orientation: t , dimensions: { yRadius: e  }  } = this;
        return t === g.POINTY ? e * 2 : e * Math.sqrt(3);
    }
    get isFlat() {
        return this.orientation === g.FLAT;
    }
    get isPointy() {
        return this.orientation === g.POINTY;
    }
    get orientation() {
        return T.orientation;
    }
    get origin() {
        return T.origin;
    }
    get offset() {
        return T.offset;
    }
    get row() {
        return W(this).row;
    }
    get width() {
        const { orientation: t , dimensions: { xRadius: e  }  } = this;
        return t === g.POINTY ? e * Math.sqrt(3) : e * 2;
    }
    get x() {
        return J(this).x;
    }
    get y() {
        return J(this).y;
    }
    get s() {
        return -this.q - this.r;
    }
    q;
    r;
    constructor(t = [
        0,
        0
    ]){
        const { q: e , r: n  } = C(this, t);
        this.q = e, this.r = n;
    }
    clone(t = this) {
        return new this.constructor(t);
    }
    equals(t) {
        return nt(this, S(t) ? j(this, t) : t);
    }
    toString() {
        return `${this.constructor.name}(${this.q},${this.r})`;
    }
    translate(t) {
        return ct(this, t);
    }
}
const T = {
    dimensions: {
        xRadius: 1,
        yRadius: 1
    },
    orientation: g.POINTY,
    origin: {
        x: 0,
        y: 0
    },
    offset: -1
}, tt = (r, t, e, n)=>[
        {
            x: e + r * 0.5,
            y: n - t * 0.25
        },
        {
            x: e + r * 0.5,
            y: n + t * 0.25
        },
        {
            x: e,
            y: n + t * 0.5
        },
        {
            x: e - r * 0.5,
            y: n + t * 0.25
        },
        {
            x: e - r * 0.5,
            y: n - t * 0.25
        },
        {
            x: e,
            y: n - t * 0.5
        }
    ], rt = (r, t, e, n)=>[
        {
            x: e + r * 0.25,
            y: n - t * 0.5
        },
        {
            x: e + r * 0.5,
            y: n
        },
        {
            x: e + r * 0.25,
            y: n + t * 0.5
        },
        {
            x: e - r * 0.25,
            y: n + t * 0.5
        },
        {
            x: e - r * 0.5,
            y: n
        },
        {
            x: e - r * 0.25,
            y: n - t * 0.5
        }
    ];
function et(r) {
    const { dimensions: t , orientation: e , origin: n , offset: s  } = {
        ...T,
        ...r
    };
    return class extends $ {
        get dimensions() {
            return G(t, e);
        }
        get orientation() {
            return e;
        }
        get origin() {
            return D(n, this);
        }
        get offset() {
            return s;
        }
    };
}
function nt(r, t) {
    if (S(r) && S(t)) return r.col === t.col && r.row === t.row;
    if (Object.hasOwn(r, "col") || Object.hasOwn(t, "col")) throw new Error(`Can't compare coordinates where one are offset coordinates. Either pass two offset coordinates or two axial/cube coordinates. Received: ${JSON.stringify(r)} and ${JSON.stringify(t)}`);
    const e = H(r) ? E(r) : r, n = H(t) ? E(t) : t;
    return e.q === n.q && e.r === n.r;
}
const st = (r, t, e)=>({
        col: r + P(e, t),
        row: t
    }), ot = (r, t, e)=>({
        col: r,
        row: t + P(e, r)
    }), W = ({ q: r , r: t , offset: e , isPointy: n  })=>n ? st(r, t, e) : ot(r, t, e), J = ({ orientation: r , dimensions: { xRadius: t , yRadius: e  } , origin: { x: n , y: s  } , q: o , r: i  })=>r === g.POINTY ? {
        x: t * Math.sqrt(3) * (o + i / 2) - n,
        y: e * 3 / 2 * i - s
    } : {
        x: t * 3 / 2 * o - n,
        y: e * Math.sqrt(3) * (i + o / 2) - s
    }, z = (r, t, e)=>{
    const n = r - P(e, t), s = t, o = -n - s;
    return {
        q: n,
        r: s,
        s: o
    };
}, _ = (r, t, e)=>{
    const n = r, s = t - P(e, r), o = -n - s;
    return {
        q: n,
        r: s,
        s: o
    };
}, j = ({ offset: r , orientation: t  }, { col: e , row: n  })=>t === g.POINTY ? z(e, n, r) : _(e, n, r), F = (r)=>{
    const { q: t , r: e , s: n  } = p(r);
    let s = Math.round(t), o = Math.round(e), i = Math.round(n);
    const c = Math.abs(t - s), u = Math.abs(e - o), h = Math.abs(n - i);
    return c > u && c > h ? s = -o - i : u > h ? o = -s - i : i = -s - o, {
        q: s,
        r: o,
        s: i
    };
}, it = ({ dimensions: { xRadius: r , yRadius: t  } , origin: e , orientation: n  }, { x: s , y: o  })=>(s += e.x, o += e.y, n === g.POINTY ? F({
        q: Math.sqrt(3) * s / (3 * r) - o / (3 * t),
        r: 2 / 3 * (o / t)
    }) : F({
        q: 2 / 3 * (s / r),
        r: Math.sqrt(3) * o / (3 * t) - s / (3 * r)
    }));
function C(r, t) {
    return H(t) ? E(t) : S(t) ? j(r, t) : p(t);
}
function ct(r, t) {
    const { q: e , r: n , s  } = p(r), { q: o , r: i , s: c  } = p(t), u = {
        q: e + o,
        r: n + i,
        s: s + c
    };
    return r instanceof $ ? r.clone(u) : u;
}
function R(r, t, e) {
    const { q: n , r: s , s: o  } = C(r, t), { q: i , r: c , s: u  } = C(r, e);
    return Math.max(Math.abs(n - i), Math.abs(s - c), Math.abs(o - u));
}
var L = /* @__PURE__ */ ((r)=>(r.CLOCKWISE = "CLOCKWISE", r.COUNTERCLOCKWISE = "COUNTERCLOCKWISE", r))(L || {}), f = /* @__PURE__ */ ((r)=>(r[r.N = 0] = "N", r[r.NE = 1] = "NE", r[r.E = 2] = "E", r[r.SE = 3] = "SE", r[r.S = 4] = "S", r[r.SW = 5] = "SW", r[r.W = 6] = "W", r[r.NW = 7] = "NW", r))(f || {});
const ut = [
    null,
    {
        q: 1,
        r: -1
    },
    {
        q: 1,
        r: 0
    },
    {
        q: 0,
        r: 1
    },
    null,
    {
        q: -1,
        r: 1
    },
    {
        q: -1,
        r: 0
    },
    {
        q: 0,
        r: -1
    }
], ht = [
    {
        q: 0,
        r: -1
    },
    {
        q: 1,
        r: -1
    },
    null,
    {
        q: 1,
        r: 0
    },
    {
        q: 0,
        r: 1
    },
    {
        q: -1,
        r: 1
    },
    null,
    {
        q: -1,
        r: 0
    }
], ft = ({ offset: r , q: t , r: e , col: n , row: s  }, o)=>{
    if (o === f.S || o === f.N) {
        const c = o === f.S ? s + 1 : s - 1;
        return z(n, c, r);
    }
    const i = ut[o];
    return {
        q: t + i.q,
        r: e + i.r
    };
}, at = ({ offset: r , q: t , r: e , col: n , row: s  }, o)=>{
    if (o === f.E || o === f.W) {
        const c = o === f.E ? n + 1 : n - 1;
        return _(c, s, r);
    }
    const i = ht[o];
    return {
        q: t + i.q,
        r: e + i.r
    };
}, I = (r, t)=>r.clone(r.isPointy ? ft(r, t) : at(r, t));
function N(r) {
    return Array.isArray(r) ? function(e, n) {
        const s = [];
        let o = n;
        for (const i of r)for (const c of i(e, o))s.push(o = c);
        return s;
    } : r;
}
const Tt = (...r)=>(t)=>r.map(t);
function v(r) {
    return lt(r) ? gt(r) : xt(r);
}
function lt(r) {
    return r.direction in f;
}
function gt({ start: r , direction: t , length: e  }) {
    return function(s, o) {
        const i = [];
        let u = s(r ?? o);
        !r && o && (u = I(u, t));
        for(let h = 0; h < e; h++)i.push(u), u = I(u, t);
        return i;
    };
}
function xt({ start: r , stop: t  }) {
    return function(n, s) {
        const o = [], i = n(r ?? s), c = B(i), u = B(C(i, t)), h = dt(c, u), x = R(i, i, t), y = 1 / Math.max(x, 1);
        let m = !r && s ? 1 : 0;
        for(m; m <= x; m++){
            const a = F(h(y * m));
            o.push(n(a));
        }
        return o;
    };
}
function B({ q: r , r: t , s: e  }) {
    return {
        q: r + 1e-6,
        r: t + 1e-6,
        s: e + -0.000002
    };
}
function dt(r, t) {
    return (e)=>{
        const n = r.q * (1 - e) + t.q * e, s = r.r * (1 - e) + t.r * e;
        return {
            q: n,
            r: s
        };
    };
}
const wt = (r)=>(t, e)=>[
            I(t(e), r)
        ];
function U(r, t, { includeSource: e = !0  } = {}) {
    return function(s, o) {
        const i = [];
        for (const c of N(r)(s, o)){
            e && i.push(c);
            for (const u of N(t)(s, c))i.push(u);
        }
        return i;
    };
}
function St(r, t) {
    return function(n, s) {
        const { width: o , height: i , start: c , direction: u = f.E  } = t ? mt(r, t, n()) : r, h = c ?? s ?? [
            0,
            0
        ], x = U(v({
            start: h,
            direction: X(u, 2),
            length: i
        }), v({
            direction: u,
            length: o - 1
        }))(n, h);
        return !c && s ? x.slice(1) : x;
    };
}
function mt(r, t, { isPointy: e , offset: n  }) {
    const { col: s , row: o  } = K(r, e, n), { col: i , row: c  } = K(t, e, n), u = s < i ? "A" : "B", h = o < c ? "A" : "B", x = u + h, { swapWidthHeight: y , direction: m  } = qt[x], a = Math.abs(s - i) + 1, b = Math.abs(o - c) + 1;
    return {
        width: y ? b : a,
        height: y ? a : b,
        start: r,
        direction: m
    };
}
function K(r, t, e) {
    if (S(r)) return r;
    const { q: n , r: s  } = H(r) ? E(r) : p(r);
    return W({
        q: n,
        r: s,
        isPointy: t,
        offset: e
    });
}
const qt = {
    AA: {
        swapWidthHeight: !1,
        direction: f.E
    },
    AB: {
        swapWidthHeight: !0,
        direction: f.N
    },
    BA: {
        swapWidthHeight: !0,
        direction: f.S
    },
    BB: {
        swapWidthHeight: !1,
        direction: f.W
    }
};
function pt(r, t) {
    return N(Array.from({
        length: r
    }, ()=>N(t)));
}
function yt(r) {
    const { center: t , rotation: e = L.CLOCKWISE  } = r;
    return function(s, o) {
        const i = e.toUpperCase(), c = [];
        let { radius: u  } = r, h;
        l(u) ? h = s(t).translate({
            q: u,
            s: -u
        }) : (h = s(r.start ?? o), u = R(h, t, h));
        const { q: x , r: y , s: m  } = C(h, t);
        let a = s({
            q: x,
            r: y - u,
            s: m + u
        });
        if (i === L.CLOCKWISE) for(let d = 0; d < 6; d++)for(let O = 0; O < u; O++){
            const { q: A , r: M  } = Q[d];
            a = s({
                q: a.q + A,
                r: a.r + M
            }), c.push(a);
        }
        else for(let d1 = 5; d1 >= 0; d1--)for(let O1 = 0; O1 < u; O1++){
            const { q: A1 , r: M1  } = Q[d1];
            a = s({
                q: a.q - A1,
                r: a.r - M1
            }), c.push(a);
        }
        const b = !r.start && o, Y = c.findIndex((d)=>d.equals(h));
        return c.slice(Y + (b ? 1 : 0)).concat(c.slice(0, Y));
    };
}
const Q = [
    {
        q: 1,
        r: 0
    },
    {
        q: 0,
        r: 1
    },
    {
        q: -1,
        r: 1
    },
    {
        q: -1,
        r: 0
    },
    {
        q: 0,
        r: -1
    },
    {
        q: 1,
        r: -1
    }
];
function Ct({ radius: r , start: t , rotation: e  }) {
    return function(s, o) {
        const i = t ?? o ?? [
            0,
            0
        ], c = !t && o ? r : r + 1;
        return U(v({
            start: t,
            direction: f.N,
            length: c
        }), yt({
            center: i,
            rotation: e
        }))(s, o);
    };
}
class q {
    static fromIterable(t) {
        const e = t[Symbol.iterator]().next().value;
        if (!e) throw new TypeError(`Can't create grid from empty iterable: ${JSON.stringify(t)}`);
        return new q(e.constructor, t);
    }
    static fromJSON({ hexSettings: t , coordinates: e  }) {
        const n = et(t);
        return new q(n, e.map((s)=>new n(s)));
    }
    get size() {
        return this.#r.size;
    }
    get pixelWidth() {
        if (this.size === 0) return 0;
        const { isPointy: t , width: e  } = this.hexPrototype, n = this.toArray(), { 0: s , length: o , [o - 1]: i  } = t ? n.sort((c, u)=>u.s - c.s || c.q - u.q) : n.sort((c, u)=>c.q - u.q);
        return i.x - s.x + e;
    }
    get pixelHeight() {
        if (this.size === 0) return 0;
        const { isPointy: t , height: e  } = this.hexPrototype, n = this.toArray(), { 0: s , length: o , [o - 1]: i  } = t ? n.sort((c, u)=>c.r - u.r) : n.sort((c, u)=>u.s - c.s || c.r - u.r);
        return i.y - s.y + e;
    }
    [Symbol.iterator]() {
        return this.#r.values();
    }
    get hexPrototype() {
        return this.#t.prototype;
    }
    #t;
    #r = /* @__PURE__ */ new Map();
    constructor(t, e = []){
        if (t instanceof q) {
            this.#t = t.#t, this.setHexes(t);
            return;
        }
        this.#t = t, this.setHexes(this.#n(e));
    }
    createHex(t) {
        return new this.#t(t);
    }
    getHex(t) {
        const e = this.createHex(t);
        return this.#r.get(e.toString());
    }
    hasHex(t) {
        return this.#r.has(t.toString());
    }
    setHexes(t) {
        for (const e of t){
            const n = e instanceof $ ? e : new this.#t(e);
            this.#e(n);
        }
        return this;
    }
    filter(t) {
        const e = new q(this.#t);
        for (const n of this)t(n) && e.#e(n);
        return e;
    }
    map(t) {
        const e = new q(this.#t);
        for (const n of this)e.#e(t(n));
        return e;
    }
    traverse(t, { bail: e = !1  } = {}) {
        const n = new q(this.#t);
        for (const s of this.#n(t)){
            const o = this.getHex(s);
            if (o) n.#e(o);
            else if (e) return n;
        }
        return n;
    }
    forEach(t) {
        for (const e of this)t(e);
        return this;
    }
    reduce(t, e) {
        if (e === void 0) {
            let s, o, i;
            for (const c of this)o = i, i = c, o && (s = t(o, i));
            return s;
        }
        let n = e;
        for (const s1 of this)n = t(n, s1);
        return n;
    }
    toArray() {
        return Array.from(this);
    }
    toJSON() {
        const { dimensions: t , orientation: e , origin: n , offset: s  } = this.hexPrototype;
        return {
            hexSettings: {
                dimensions: t,
                orientation: e,
                origin: n,
                offset: s
            },
            coordinates: this.toArray()
        };
    }
    toString() {
        return `${this.constructor.name}(${this.size})`;
    }
    pointToHex(t, { allowOutside: e = !0  } = {}) {
        const n = it(this.hexPrototype, t), s = this.getHex(n);
        return e ? s ?? this.createHex(n) : s;
    }
    distance(t, e, { allowOutside: n = !0  } = {}) {
        if (n) return R(this.hexPrototype, t, e);
        const s = this.getHex(t), o = this.getHex(e);
        if (!(!s || !o)) return R(this.hexPrototype, s, o);
    }
    neighborOf(t, e, { allowOutside: n = !0  } = {}) {
        const s = I(this.createHex(t), e), o = this.getHex(s);
        return n ? o ?? s : o;
    }
    #e(t) {
        this.#r.set(t.toString(), t);
    }
    #n(t1) {
        return this.#s(t1) ? this.#o(t1) : Array.isArray(t1) && this.#s(t1[0]) ? this.#o(N(t1)) : t1;
    }
    #s(t2) {
        return k(t2);
    }
    #o(t3) {
        return t3(this.createHex.bind(this));
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jEMfw":[function(require,module,exports) {
//Imports
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//Public variables
//-
//Private variables
//-
//Public functions
parcelHelpers.export(exports, "initiateControls", ()=>initiateControls) //Private functions
;
var _displayJs = require("../scripts/display.js");
function initiateControls() {
    //Camera position controls
    let timer = null;
    document.addEventListener("mouseup", ()=>{
        clearInterval(timer);
    });
    document.addEventListener("keyup", ()=>{
        clearInterval(timer);
    });
    //Keyboard controls
    document.addEventListener("keydown", (e)=>{
        console.log("e.code", e.code);
        switch(e.code){
            case "ArrowUp":
            case "KeyW":
                clearInterval(timer);
                timer = setInterval(()=>{
                    _displayJs.camera.y -= 5;
                }, 10);
                break;
            case "ArrowLeft":
            case "KeyA":
                clearInterval(timer);
                timer = setInterval(()=>{
                    _displayJs.camera.x -= 5;
                }, 10);
                break;
            case "ArrowRight":
            case "KeyD":
                clearInterval(timer);
                timer = setInterval(()=>{
                    _displayJs.camera.x += 5;
                }, 10);
                break;
            case "ArrowDown":
            case "KeyS":
                clearInterval(timer);
                timer = setInterval(()=>{
                    _displayJs.camera.y += 5;
                }, 10);
                break;
            case "Digit1":
                document.querySelector('input[id="energy20"]').checked = true;
                break;
            case "Digit2":
                document.querySelector('input[id="energy40"]').checked = true;
                break;
            case "Digit3":
                document.querySelector('input[id="energy60"]').checked = true;
                break;
            case "Digit4":
                document.querySelector('input[id="energy80"]').checked = true;
                break;
            case "Digit5":
                document.querySelector('input[id="energy100"]').checked = true;
                break;
        }
    });
}

},{"../scripts/display.js":"kiN4r","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jidVu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setMap", ()=>setMap);
parcelHelpers.export(exports, "init", ()=>init);
parcelHelpers.export(exports, "routerDetails", ()=>routerDetails);
parcelHelpers.export(exports, "routerLiders", ()=>routerLiders);
parcelHelpers.export(exports, "subscribeAllCellState", ()=>subscribeAllCellState);
parcelHelpers.export(exports, "getAddressCells", ()=>getAddressCells);
parcelHelpers.export(exports, "newGame", ()=>newGame);
parcelHelpers.export(exports, "markCell", ()=>markCell);
parcelHelpers.export(exports, "upgradeCell", ()=>upgradeCell);
parcelHelpers.export(exports, "helpCell", ()=>helpCell);
parcelHelpers.export(exports, "attkCell", ()=>attkCell);
parcelHelpers.export(exports, "newRouter", ()=>newRouter);
parcelHelpers.export(exports, "getDetailsCell", ()=>getDetailsCell);
parcelHelpers.export(exports, "getDetailsRouter", ()=>getDetailsRouter);
parcelHelpers.export(exports, "destroyCells", ()=>destroyCells);
parcelHelpers.export(exports, "calcRewards", ()=>calcRewards);
parcelHelpers.export(exports, "claimReward", ()=>claimReward);
parcelHelpers.export(exports, "getRewards", ()=>getRewards);
parcelHelpers.export(exports, "subscribePermissionsChanged", ()=>subscribePermissionsChanged);
var _everscaleInpageProvider = require("everscale-inpage-provider");
var _everscaleStandaloneClient = require("everscale-standalone-client");
const { TonClient , signerKeys , signerNone  } = require("@eversdk/core");
//const { libNode } = require("@eversdk/lib-node");
const { libWeb  } = require("@eversdk/lib-web");
const { Account  } = require("@eversdk/appkit");
TonClient.useBinaryLibrary(libWeb);
const routerAbi = require("../../../../contracts/build/Router.abi.json");
const cellAbi = require("../../../../contracts/build/Cell.abi.json");
const rootAbi = require("../../../../contracts/build/GameRoot.abi.json");
const Config = require("../../../../config.json");
let currentMap = [];
let onRoumingChange;
const ever = new (0, _everscaleInpageProvider.ProviderRpcClient)({});
let everClient;
let subscribeAcc;
const createClient = (endpoint)=>{
    let client = new TonClient({
        network: {
            endpoints: [
                endpoint
            ],
            message_retries_count: 3,
            message_processing_timeout: 60000
        }
    });
    return client;
};
const getAccount = (abi, address = "", keys = null)=>{
    try {
        return new Account({
            abi
        }, {
            address: address,
            signer: keys ? signerKeys(keys) : signerNone(),
            client: everClient
        });
    } catch (error) {
        console.error(error);
    }
};
const getAccArr = async (addreses)=>{
    try {
        const result = (await everClient.net.query_collection({
            collection: "accounts",
            filter: {
                id: {
                    in: addreses
                }
            },
            result: "id acc_type balance boc"
        })).result;
        return result;
    } catch (error) {
        console.error(error);
    }
};
const runLocal = async (abi, address, functionName, input = {}, log = true, boc = null)=>{
    try {
        const [account, message] = await Promise.all([
            boc || everClient.net.query_collection({
                collection: "accounts",
                filter: {
                    id: {
                        eq: address
                    }
                },
                result: "boc"
            }).then(({ result  })=>result[0].boc).catch(()=>{
                return undefined;
            }),
            everClient.abi.encode_message({
                abi: {
                    type: "Contract",
                    value: abi
                },
                address,
                call_set: {
                    function_name: functionName,
                    input: input
                },
                signer: {
                    type: "None"
                }
            }).then(({ message  })=>message)
        ]);
        if (!account) return undefined;
        let response = await everClient.tvm.run_tvm({
            message: message,
            account: account,
            abi: {
                type: "Contract",
                value: abi
            }
        });
        if (log) console.log("output:", response.decoded.output);
        return response.decoded.output;
    } catch (error) {
        console.error(error, functionName, input);
    }
};
function behavior(name, fn) {
    document.querySelectorAll(`[data-behavior=${name}]`).forEach(fn);
}
const innerText = (text)=>(elem)=>{
        elem.innerText = text;
    };
function requestPermissions() {
    return ever.requestPermissions({
        permissions: [
            "basic",
            "accountInteraction"
        ]
    });
}
async function disconnectAction() {
    console.log("disconnectAction");
    await ever.disconnect();
}
async function getRoutersAction() {
    clearTblRows("tblRouters", 3);
    console.log("getRoutersAction");
    const providerState = await ever.getProviderState();
    let details = await ever.getAccountsByCodeHash({
        codeHash: Config[providerState.selectedConnection].codeHash,
        limit: 50
    });
    let addreses = details.accounts.map((el)=>el.toString());
    console.log("routers", addreses);
    let accs = await getAccArr(addreses);
    console.log("routers", accs);
    for(let i = 0; i < accs.length; i++){
        let details1 = await getDetailsRouter(accs[i].id, accs[i].boc);
        if (details1) {
            let row, cell;
            var date = new Date(1000 * details1.endTime);
            console.log("date", date);
            row = addTblRow("tblRouters");
            cell = row.insertCell(0);
            cell.innerHTML = details1.name;
            cell = row.insertCell(1);
            cell.innerHTML = details1.radius;
            cell = row.insertCell(2);
            cell.innerHTML = details1.userCount;
            cell = row.insertCell(3);
            cell.innerHTML = details1.speed;
            cell = row.insertCell(4);
            cell.innerHTML = date.customFormat("#DD#-#MM#-#YYYY# #hh#:#mm#:#ss#");
            cell = row.insertCell(5);
            var btn = document.createElement("button");
            btn.textContent = "Set";
            btn.setAttribute("type", "button");
            btn.setAttribute("addr", accs[i].id);
            btn.onclick = setRouter;
            cell.appendChild(btn);
            cell = row.insertCell(6);
            cell.innerHTML = accs[i].id;
            cell.style = "visibility: hidden; width: 0px";
        // cell.colSpan = "4"
        // cell.style="text-align:left;"
        }
    }
}
async function getLiderBoard() {
    console.log("getLiderBoard");
    const providerState = await ever.getProviderState();
    let details = await routerLiders();
    let users = details.users.map((el)=>el.toString());
    console.log("users", users);
    clearTblRows("tblLiders", 1);
    for(let i = 0; i < users.length; i++){
        let usr = users[i].split(",");
        let row, cell;
        row = addTblRow("tblLiders");
        cell = row.insertCell(0);
        cell.innerHTML = `${usr[0].substr(0, 6)}...${usr[0].substr(-4, 4)}`;
        cell = row.insertCell(1);
        cell.innerHTML = usr[1];
    // cell.colSpan = "4"
    // cell.style="text-align:left;"
    }
}
async function setRouter(el) {
    console.log("setRouter", el);
    let address = el.target.attributes.addr.value;
    console.log("address", address);
    const providerState = await ever.getProviderState();
    const network = providerState.selectedConnection;
    Config[network].router = address;
    for (let hex of currentMap){
        hex.highlight = false;
        hex.details = undefined;
    }
    let details = await routerDetails();
    console.log("details", details);
    onRoumingChange(details.radius);
    loadMap();
    getLiderBoard();
}
async function addRouterAction() {
    let name = document.getElementById("router_name").value;
    let radius = document.getElementById("router_radius").value;
    let users = document.getElementById("router_users").value;
    let speed = document.getElementById("router_speed").value;
    let time = document.getElementById("router_time").value;
    console.log("addRouterAction", name, radius, speed, time);
    const providerState = await newRouter(name, radius, users, speed, time);
    await getRoutersAction();
}
async function connect() {
    await ever.requestPermissions({
        permissions: [
            "basic",
            "accountInteraction"
        ]
    });
}
async function checkConnect() {
    const providerState = await ever.getProviderState();
    const permissions = providerState.permissions;
    const network = providerState.selectedConnection;
    if (!contractAddress(network) || !permissions.accountInteraction) {
        behavior("connect", (elem)=>elem.onclick = requestPermissions);
        switchScreen("login");
        const connectText = (elem)=>{
            const disabled = !contractAddress(network);
            elem.disabled = disabled;
            elem.innerText = disabled ? `Contract not found` : `Connect with ${network}`;
        };
        behavior("connect", connectText);
    } else {
        // INFO for transactionsFound and contractStateChanged need permissions
        const providerState1 = await ever.getProviderState();
        (await ever.subscribe("contractStateChanged", {
            address: contractAddress(providerState1.selectedConnection)
        })).on("data", (event)=>{
            console.log("permissionsChanged:", {
                address: event.address,
                state: event.state
            });
        });
        switchScreen("main");
        const account = permissions.accountInteraction;
        let address = account.address.toString();
        let pubkey = account.publicKey.toString();
        behavior("address", innerText(`${address.substr(0, 6)}...${address.substr(-4, 4)}`));
        behavior("publicKey", innerText(`${pubkey.substr(0, 6)}...${pubkey.substr(-4, 4)}`));
        behavior("disconnectAction", (elem)=>elem.onclick = disconnectAction);
        behavior("getRoutersAction", (elem)=>elem.onclick = getRoutersAction);
        behavior("addRouterAction", (elem)=>elem.onclick = addRouterAction);
        behavior("calcRewardsAction", (elem)=>elem.onclick = calcRewardsAction);
        behavior("claimRewardAction", (elem)=>elem.onclick = claimRewardAction);
        behavior("destroyCellsAction", (elem)=>elem.onclick = destroyCellsAction);
        console.log("endpoint:", Config[network].endpoint);
        everClient = createClient(Config[network].endpoint);
        subscribeAcc = getAccount({});
        // loadMap();
        await getRoutersAction();
    }
}
async function setNetworkChanged(network) {
    const mod = network === "mainnet" ? "success" : "secondary";
    const out = `<span class="badge bg-${mod}">${network}</span>`;
    behavior("network", (elem)=>elem.innerHTML = out);
    await checkConnect();
}
function contractAddress(network, name = "router") {
    if (Config[network] && Config[network][name]) return new (0, _everscaleInpageProvider.Address)(Config[network][name]);
    return null;
}
function switchScreen(to) {
    console.log("switchScreen:", to);
    [
        "extension",
        "login",
        "main"
    ].forEach((screen)=>{
        const switcher = (elem)=>elem.style.display = to === screen ? "table-row" : "none";
        behavior(screen, switcher);
    });
}
async function mainFlow() {
    const providerState = await ever.getProviderState();
    console.log("selectedConnection:", providerState.selectedConnection);
    await setNetworkChanged(providerState.selectedConnection);
    (await ever.subscribe("networkChanged")).on("data", (event)=>{
        console.log("networkChanged:", event.selectedConnection);
        setNetworkChanged(event.selectedConnection);
    });
    (await ever.subscribe("permissionsChanged")).on("data", async (event)=>{
        console.log("permissionsChanged:", event.permissions);
        await checkConnect();
    });
}
async function loadMap() {
    let coords = [];
    for (const hex of currentMap)coords.push({
        x: hex.q,
        y: hex.r,
        z: hex.s
    });
    // console.log('coords', coords);
    let addreses = await getAddressCells(coords);
    addreses = addreses.map((el)=>el.toString());
    let i = 0;
    for (const hex1 of currentMap){
        hex1.address = addreses[i].toString();
        i++;
    }
    // console.log('addreses', addreses);
    await subscribeAllCellState(addreses);
    let accs = await getAccArr(addreses);
    console.log("accs", accs);
    for(let i1 = 0; i1 < accs.length; i1++){
        let details = await getDetailsCell(accs[i1].id, accs[i1].boc);
        if (details) {
            let hex2 = findHex(accs[i1].id);
            console.log("hex", hex2);
            if (hex2) hex2.details = details;
        }
    }
}
function setMap(map) {
    currentMap = map;
}
async function init(_onRoumingChange) {
    onRoumingChange = _onRoumingChange;
    if (await ever.hasProvider()) try {
        await ever.ensureInitialized();
        await mainFlow();
    } catch (error) {
        throw error; // TODO handle it
    }
    else switchScreen("extension");
}
function findHex(address) {
    let _hex;
    for (const hex of currentMap)if (hex.address == address) {
        _hex = hex;
        break;
    }
    return _hex;
}
async function routerDetails() {
    const providerState = await ever.getProviderState();
    const router = new ever.Contract(routerAbi, contractAddress(providerState.selectedConnection, "router"));
    try {
        let details;
        details = await router.methods.getDetails({}).call();
        console.log("getDetails router", details);
        return details;
    } catch (e) {
        console.error(e);
        if (e instanceof (0, _everscaleInpageProvider.TvmException)) console.error(e.code);
    }
}
async function routerLiders() {
    const providerState = await ever.getProviderState();
    const router = new ever.Contract(routerAbi, contractAddress(providerState.selectedConnection, "router"));
    try {
        let details;
        details = await router.methods.getUsers({}).call();
        console.log("getUsers router", details);
        return details;
    } catch (e) {
        console.error(e);
        if (e instanceof (0, _everscaleInpageProvider.TvmException)) console.error(e.code);
    }
}
async function subscribeAllCellState(arrAcc) {
    try {
        const providerState = await ever.getProviderState();
        (await ever.subscribe("contractStateChanged", {
            address: contractAddress(providerState.selectedConnection)
        })).on("data", (event)=>{
            getLiderBoard();
        });
        await subscribeAcc.free();
        await subscribeAcc.subscribe("accounts", {
            id: {
                in: arrAcc
            }
        }, "id boc", async (msg)=>{
            console.log(`onAcc:`, msg.id);
            let hex = findHex(msg.id);
            console.log("hex", hex);
            if (hex) hex.details = await getDetailsCell(msg.id, msg.boc);
        }, async (msg)=>{
            console.log(`onError:`, msg);
        });
    } catch (e) {
        console.error(e);
        if (e instanceof (0, _everscaleInpageProvider.TvmException)) console.error(e.code);
    }
}
async function getAddressCells(coords) {
    const providerState = await ever.getProviderState();
    const router = new ever.Contract(routerAbi, contractAddress(providerState.selectedConnection, "router"));
    try {
        let details;
        details = await router.methods.getAddressCells({
            coords
        }).call();
        console.log("getAddressCells router", details);
        return details.addreses;
    } catch (e) {
        console.error(e);
        if (e instanceof (0, _everscaleInpageProvider.TvmException)) console.error(e.code);
    }
}
async function newGame(cellCoord) {
    const providerState = await ever.getProviderState();
    const permissions = providerState.permissions;
    if (!permissions.accountInteraction) return;
    const account = permissions.accountInteraction;
    const router = new ever.Contract(routerAbi, contractAddress(providerState.selectedConnection, "router"));
    try {
        console.log("newGame", 1);
        let res = await router.methods.newGame({
            baseCoord: cellCoord
        }).send({
            from: account.address.toString(),
            amount: "12000000000"
        });
        console.log("newGame", res);
    } catch (e) {
        console.error(e);
        if (e instanceof (0, _everscaleInpageProvider.TvmException)) console.error(e.code);
    }
}
async function markCell(address, cellCoord, energy) {
    const providerState = await ever.getProviderState();
    const permissions = providerState.permissions;
    if (!permissions.accountInteraction) return;
    const account = permissions.accountInteraction;
    const cell = new ever.Contract(cellAbi, address);
    try {
        console.log("markCell", 1);
        let res = await cell.methods.markCell({
            targetCoord: cellCoord,
            energy: energy
        }).send({
            from: account.address.toString(),
            amount: "2000000000"
        });
        console.log("markCell", res);
    } catch (e) {
        console.error(e);
        if (e instanceof (0, _everscaleInpageProvider.TvmException)) console.error(e.code);
    }
}
async function upgradeCell(address) {
    const providerState = await ever.getProviderState();
    const permissions = providerState.permissions;
    if (!permissions.accountInteraction) return;
    const account = permissions.accountInteraction;
    const cell = new ever.Contract(cellAbi, address);
    try {
        console.log("upgradeCell", 1);
        let res = await cell.methods.upgradeCell({
        }).send({
            from: account.address.toString(),
            amount: "1000000000"
        });
        console.log("upgradeCell", res);
    } catch (e) {
        console.error(e);
        if (e instanceof (0, _everscaleInpageProvider.TvmException)) console.error(e.code);
    }
}
async function helpCell(address, cellCoord, energy) {
    const providerState = await ever.getProviderState();
    const permissions = providerState.permissions;
    if (!permissions.accountInteraction) return;
    const account = permissions.accountInteraction;
    const cell = new ever.Contract(cellAbi, address);
    try {
        console.log("helpCell", 1);
        let res = await cell.methods.helpCell({
            targetCoord: cellCoord,
            energy: energy
        }).send({
            from: account.address.toString(),
            amount: "1000000000"
        });
        console.log("helpCell", res);
    } catch (e) {
        console.error(e);
        if (e instanceof (0, _everscaleInpageProvider.TvmException)) console.error(e.code);
    }
}
async function attkCell(address, cellCoord, energy) {
    const providerState = await ever.getProviderState();
    const permissions = providerState.permissions;
    if (!permissions.accountInteraction) return;
    const account = permissions.accountInteraction;
    const cell = new ever.Contract(cellAbi, address);
    try {
        console.log("attkCell", 1);
        let res = await cell.methods.attkCell({
            targetCoord: cellCoord,
            energy: energy
        }).send({
            from: account.address.toString(),
            amount: "1000000000"
        });
        console.log("attkCell", res);
    } catch (e) {
        console.error(e);
        if (e instanceof (0, _everscaleInpageProvider.TvmException)) console.error(e.code);
    }
}
async function newRouter(name, radius, users, speed, time) {
    const providerState = await ever.getProviderState();
    const permissions = providerState.permissions;
    if (!permissions.accountInteraction) return;
    const account = permissions.accountInteraction;
    const gameroot = new ever.Contract(rootAbi, Config[providerState.selectedConnection].gameroot);
    try {
        console.log("newRouter", 1);
        let res = await gameroot.methods.newRouter({
            roundTime: time,
            radius: radius,
            speed: speed,
            userCount: users,
            name: name,
            nonce: "0"
        }).send({
            from: account.address.toString(),
            amount: "2000000000"
        });
        console.log("newRouter", res);
    } catch (e) {
        console.error(e);
        if (e instanceof (0, _everscaleInpageProvider.TvmException)) console.error(e.code);
    }
}
async function getDetailsCell(address, boc = null) {
    if (boc) try {
        const output = await runLocal(cellAbi, address, "getDetails", {}, true, boc);
        return output;
    } catch (error) {
        console.error(error);
    }
    const cell = new ever.Contract(cellAbi, address);
    try {
        const stateRes = await cell.getFullState();
        if (stateRes.state == null || !stateRes.state.isDeployed) return null;
        //console.log('state', stateRes.state);
        let details;
        details = await cell.methods.getDetails({}).call();
        console.log("getDetails cell", details);
        return details;
    } catch (e) {
        console.error(e);
        if (e instanceof (0, _everscaleInpageProvider.TvmException)) console.error(e.code);
    }
}
async function getDetailsRouter(address, boc = null) {
    if (boc) try {
        const output = await runLocal(routerAbi, address, "getDetails", {}, true, boc);
        return output;
    } catch (error) {
        console.error(error);
    }
    const router = new ever.Contract(routerAbi, address);
    try {
        const stateRes = await router.getFullState();
        if (stateRes.state == null || !stateRes.state.isDeployed) return null;
        //console.log('state', stateRes.state);
        let details;
        details = await router.methods.getDetails({}).call();
        console.log("getDetails router", details);
        return details;
    } catch (e) {
        console.error(e);
        if (e instanceof (0, _everscaleInpageProvider.TvmException)) console.error(e.code);
    }
}
async function calcRewardsAction() {
    await calcRewards();
    await getRewards();
}
async function claimRewardAction() {
    claimReward();
}
async function destroyCellsAction() {
    destroyCells();
}
async function destroyCells() {
    const providerState = await ever.getProviderState();
    const permissions = providerState.permissions;
    if (!permissions.accountInteraction) return;
    const account = permissions.accountInteraction;
    const router = new ever.Contract(routerAbi, contractAddress(providerState.selectedConnection, "router"));
    let addreses = [];
    for (const hex of currentMap)if (hex.details) addreses.push(hex.address);
    console.log("addreses", addreses);
    if (!addreses.length) return;
    let accs = await getAccArr(addreses);
    let accDestroy = [];
    for(let i = 0; i < accs.length; i++)if (accs[i].boc) {
        accDestroy.push(accs[i].id);
        if (accDestroy.length >= 10) break;
    }
    if (!accDestroy.length) return;
    try {
        console.log("destroyCells", 1);
        let res = await router.methods.destroyCells({
            cells: accDestroy
        }).send({
            from: account.address.toString(),
            amount: "10000000000"
        });
        console.log("destroyCells", res);
    } catch (e) {
        console.error(e);
        if (e instanceof (0, _everscaleInpageProvider.TvmException)) console.error(e.code);
    }
}
async function calcRewards() {
    const providerState = await ever.getProviderState();
    const permissions = providerState.permissions;
    if (!permissions.accountInteraction) return;
    const account = permissions.accountInteraction;
    const router = new ever.Contract(routerAbi, contractAddress(providerState.selectedConnection, "router"));
    try {
        console.log("calcRewards", 1);
        let res = await router.methods.calcRewards({}).send({
            from: account.address.toString(),
            amount: "2000000000"
        });
        console.log("calcRewards", res);
    } catch (e) {
        console.error(e);
        if (e instanceof (0, _everscaleInpageProvider.TvmException)) console.error(e.code);
    }
}
async function claimReward() {
    const providerState = await ever.getProviderState();
    const permissions = providerState.permissions;
    if (!permissions.accountInteraction) return;
    const account = permissions.accountInteraction;
    const router = new ever.Contract(routerAbi, contractAddress(providerState.selectedConnection, "router"));
    try {
        console.log("claimReward", 1);
        let res = await router.methods.claimReward({}).send({
            from: account.address.toString(),
            amount: "1000000000"
        });
        console.log("claimReward", res);
    } catch (e) {
        console.error(e);
        if (e instanceof (0, _everscaleInpageProvider.TvmException)) console.error(e.code);
    }
}
async function getRewards() {
    const providerState = await ever.getProviderState();
    const router = new ever.Contract(routerAbi, contractAddress(providerState.selectedConnection, "router"));
    try {
        let details;
        details = await router.methods.getRewards({}).call();
        console.log("getRewards router", details);
        return details.rewards;
    } catch (e) {
        console.error(e);
        if (e instanceof (0, _everscaleInpageProvider.TvmException)) console.error(e.code);
    }
}
async function subscribePermissionsChanged() {
    await ever.subscribe("permissionsChanged").on("data", (permissions)=>{
        console.log(permissions);
    });
}
function addTblRow(tblName) {
    var table = document.getElementById(tblName);
    return table.insertRow(table.rows.length);
}
function clearTblRows(tblName, min = 1) {
    var table = document.getElementById(tblName);
    while(table.rows.length > min)table.deleteRow(table.rows.length - 1);
}
Date.prototype.customFormat = function(formatString) {
    var YYYY, YY, MMMM, MMM, MM, M, DDDD, DDD, DD, D, hhhh, hhh, hh, h, mm, m, ss, s, ampm, AMPM, dMod, th;
    var dateObject = this;
    YY = ((YYYY = dateObject.getFullYear()) + "").slice(-2);
    MM = (M = dateObject.getMonth() + 1) < 10 ? "0" + M : M;
    MMM = (MMMM = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ][M - 1]).substring(0, 3);
    DD = (D = dateObject.getDate()) < 10 ? "0" + D : D;
    DDD = (DDDD = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ][dateObject.getDay()]).substring(0, 3);
    th = D >= 10 && D <= 20 ? "th" : (dMod = D % 10) == 1 ? "st" : dMod == 2 ? "nd" : dMod == 3 ? "rd" : "th";
    formatString = formatString.replace("#YYYY#", YYYY).replace("#YY#", YY).replace("#MMMM#", MMMM).replace("#MMM#", MMM).replace("#MM#", MM).replace("#M#", M).replace("#DDDD#", DDDD).replace("#DDD#", DDD).replace("#DD#", DD).replace("#D#", D).replace("#th#", th);
    h = hhh = dateObject.getHours();
    if (h == 0) h = 24;
    if (h > 12) h -= 12;
    hh = h < 10 ? "0" + h : h;
    hhhh = hhh < 10 ? "0" + hhh : hhh;
    AMPM = (ampm = hhh < 12 ? "am" : "pm").toUpperCase();
    mm = (m = dateObject.getMinutes()) < 10 ? "0" + m : m;
    ss = (s = dateObject.getSeconds()) < 10 ? "0" + s : s;
    return formatString.replace("#hhhh#", hhhh).replace("#hhh#", hhh).replace("#hh#", hh).replace("#h#", h).replace("#mm#", mm).replace("#m#", m).replace("#ss#", ss).replace("#s#", s).replace("#ampm#", ampm).replace("#AMPM#", AMPM);
};

},{"everscale-inpage-provider":"3AWTf","everscale-standalone-client":"78Hw1","@eversdk/core":"5a6Vu","@eversdk/lib-web":"03lEV","@eversdk/appkit":"2hb9b","../../../../contracts/build/Router.abi.json":"cEdaJ","../../../../contracts/build/Cell.abi.json":"19dkK","../../../../contracts/build/GameRoot.abi.json":"7luGY","../../../../config.json":"hi4Ts","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3AWTf":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProviderNotInitializedException = exports.ProviderNotFoundException = exports.ProviderRpcClient = exports.hasEverscaleProvider = exports.LT_COLLATOR = exports.mergeTransactions = exports.MessageExpiredException = exports.AddressLiteral = exports.Address = exports.Subscriber = void 0;
const models_1 = require("./models");
const utils_1 = require("./utils");
const subscriber = __importStar(require("./stream"));
const contract = __importStar(require("./contract"));
__exportStar(require("./api"), exports);
__exportStar(require("./models"), exports);
__exportStar(require("./contract"), exports);
var stream_1 = require("./stream");
Object.defineProperty(exports, "Subscriber", {
    enumerable: true,
    get: function() {
        return stream_1.Subscriber;
    }
});
var utils_2 = require("./utils");
Object.defineProperty(exports, "Address", {
    enumerable: true,
    get: function() {
        return utils_2.Address;
    }
});
Object.defineProperty(exports, "AddressLiteral", {
    enumerable: true,
    get: function() {
        return utils_2.AddressLiteral;
    }
});
Object.defineProperty(exports, "MessageExpiredException", {
    enumerable: true,
    get: function() {
        return utils_2.MessageExpiredException;
    }
});
Object.defineProperty(exports, "mergeTransactions", {
    enumerable: true,
    get: function() {
        return utils_2.mergeTransactions;
    }
});
Object.defineProperty(exports, "LT_COLLATOR", {
    enumerable: true,
    get: function() {
        return utils_2.LT_COLLATOR;
    }
});
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
let ensurePageLoaded;
if (!isBrowser || document.readyState === "complete") ensurePageLoaded = Promise.resolve();
else ensurePageLoaded = new Promise((resolve)=>{
    window.addEventListener("load", ()=>{
        resolve();
    });
});
const getProvider = ()=>isBrowser ? window.__ever || window.ton : undefined;
/**
 * @category Provider
 */ async function hasEverscaleProvider() {
    if (!isBrowser) return false;
    await ensurePageLoaded;
    return window.__hasEverscaleProvider === true || window.hasTonProvider === true;
}
exports.hasEverscaleProvider = hasEverscaleProvider;
/**
 * @category Provider
 */ class ProviderRpcClient {
    constructor(properties = {}){
        this._subscriptions = {
            connected: new Map(),
            disconnected: new Map(),
            transactionsFound: new Map(),
            contractStateChanged: new Map(),
            messageStatusUpdated: new Map(),
            networkChanged: new Map(),
            permissionsChanged: new Map(),
            loggedOut: new Map()
        };
        this._contractSubscriptions = new Map();
        this._properties = properties;
        const self = this;
        // Create contract proxy type
        class ProviderContract extends contract.Contract {
            constructor(abi, address){
                super(self, abi, address);
            }
        }
        this.Contract = ProviderContract;
        // Create subscriber proxy type
        class ProviderSubscriber extends subscriber.Subscriber {
            constructor(){
                super(self);
            }
        }
        this.Subscriber = ProviderSubscriber;
        // Wrap provider requests
        this._api = new Proxy({}, {
            get: (_object, method)=>(params)=>{
                    if (this._provider != null) return this._provider.request({
                        method,
                        params
                    });
                    else throw new ProviderNotInitializedException();
                }
        });
        if (properties.forceUseFallback === true) this._initializationPromise = properties.fallback != null ? properties.fallback().then((provider)=>{
            this._provider = provider;
        }) : Promise.resolve();
        else {
            // Initialize provider with injected object by default
            this._provider = getProvider();
            if (this._provider != null) // Provider as already injected
            this._initializationPromise = Promise.resolve();
            else // Wait until page is loaded and initialization complete
            this._initializationPromise = hasEverscaleProvider().then((hasProvider)=>new Promise((resolve)=>{
                    if (!hasProvider) // Fully loaded page doesn't even contain provider flag
                    return resolve();
                    // Wait injected provider initialization otherwise
                    this._provider = getProvider();
                    if (this._provider != null) resolve();
                    else {
                        const eventName = window.__hasEverscaleProvider === true ? "ever#initialized" : "ton#initialized";
                        window.addEventListener(eventName, (_)=>{
                            this._provider = getProvider();
                            resolve();
                        });
                    }
                })).then(async ()=>{
                if (this._provider == null && properties.fallback != null) this._provider = await properties.fallback();
            });
        }
        // Will only register handlers for successfully loaded injected provider
        this._initializationPromise.then(()=>{
            if (this._provider != null) this._registerEventHandlers(this._provider);
        });
    }
    /**
     * Checks whether this page has injected Everscale provider or
     * there is a fallback provider.
     */ async hasProvider() {
        if (this._properties.fallback != null) return true;
        return hasEverscaleProvider();
    }
    /**
     * Waits until provider api will be available. Calls `fallback` if no provider was found
     *
     * @throws ProviderNotFoundException when no provider found
     */ async ensureInitialized() {
        await this._initializationPromise;
        if (this._provider == null) throw new ProviderNotFoundException();
    }
    /**
     * Whether provider api is ready
     */ get isInitialized() {
        return this._provider != null;
    }
    /**
     * Raw provider
     */ get raw() {
        if (this._provider != null) return this._provider;
        else throw new ProviderNotInitializedException();
    }
    /**
     * Raw provider api
     */ get rawApi() {
        return this._api;
    }
    /**
     * Creates typed contract wrapper.
     *
     * @param abi Readonly object (must be declared with `as const`)
     * @param address Default contract address
     *
     * @deprecated `new ever.Contract(abi, address)` should be used instead
     */ createContract(abi, address) {
        return new this.Contract(abi, address);
    }
    /**
     * Creates subscriptions group
     *
     * @deprecated `new ever.Subscriber()` should be used instead
     */ createSubscriber() {
        return new this.Subscriber();
    }
    /**
     * Requests new permissions for current origin.
     * Shows an approval window to the user.
     * Will overwrite already existing permissions
     *
     * ---
     * Required permissions: none
     */ async requestPermissions(args) {
        await this.ensureInitialized();
        const result = await this._api.requestPermissions({
            permissions: args.permissions
        });
        return (0, models_1.parsePermissions)(result);
    }
    /**
     * Updates `accountInteraction` permission value
     *
     * ---
     * Requires permissions: `accountInteraction`
     */ async changeAccount() {
        await this.ensureInitialized();
        await this._api.changeAccount();
    }
    /**
     * Removes all permissions for current origin and stops all subscriptions
     */ async disconnect() {
        await this.ensureInitialized();
        await this._api.disconnect();
    }
    async subscribe(eventName, params) {
        class SubscriptionImpl {
            constructor(_subscribe, _unsubscribe){
                this._subscribe = _subscribe;
                this._unsubscribe = _unsubscribe;
                this._listeners = {
                    data: [],
                    subscribed: [],
                    unsubscribed: []
                };
                this._subscribed = false;
                this.subscribe = async ()=>{
                    if (this._subscribed) return;
                    this._subscribed = true;
                    await this._subscribe(this);
                    for (const handler of this._listeners["subscribed"])handler();
                };
                this.unsubscribe = async ()=>{
                    if (!this._subscribed) return;
                    this._subscribed = false;
                    await this._unsubscribe();
                    for (const handler of this._listeners["unsubscribed"])handler();
                };
            }
            on(eventName, listener) {
                this._listeners[eventName].push(listener);
                return this;
            }
            notify(data) {
                for (const handler of this._listeners["data"])handler(data);
            }
        }
        const existingSubscriptions = this._subscriptions[eventName];
        const id = (0, utils_1.getUniqueId)();
        switch(eventName){
            case "connected":
            case "disconnected":
            case "messageStatusUpdated":
            case "networkChanged":
            case "permissionsChanged":
            case "loggedOut":
                {
                    const subscription = new SubscriptionImpl(async (subscription)=>{
                        if (existingSubscriptions.has(id)) return;
                        existingSubscriptions.set(id, (data)=>{
                            subscription.notify(data);
                        });
                    }, async ()=>{
                        existingSubscriptions.delete(id);
                    });
                    await subscription.subscribe();
                    return subscription;
                }
            case "transactionsFound":
            case "contractStateChanged":
                {
                    if (params == null) throw new Error("Address must be specified for the subscription");
                    await this.ensureInitialized();
                    const address = params.address.toString();
                    const subscription1 = new SubscriptionImpl(async (subscription)=>{
                        if (existingSubscriptions.has(id)) return;
                        existingSubscriptions.set(id, (data)=>{
                            if (data.address.toString() === address) subscription.notify(data);
                        });
                        let contractSubscriptions = this._contractSubscriptions.get(address);
                        if (contractSubscriptions == null) {
                            contractSubscriptions = new Map();
                            this._contractSubscriptions.set(address, contractSubscriptions);
                        }
                        const subscriptionState = {
                            state: eventName === "contractStateChanged",
                            transactions: eventName === "transactionsFound"
                        };
                        contractSubscriptions.set(id, subscriptionState);
                        const { total , withoutExcluded  } = foldSubscriptions(contractSubscriptions.values(), subscriptionState);
                        try {
                            if (total.transactions !== withoutExcluded.transactions || total.state !== withoutExcluded.state) await this.rawApi.subscribe({
                                address,
                                subscriptions: total
                            });
                        } catch (e) {
                            existingSubscriptions.delete(id);
                            contractSubscriptions.delete(id);
                            throw e;
                        }
                    }, async ()=>{
                        existingSubscriptions.delete(id);
                        const contractSubscriptions = this._contractSubscriptions.get(address);
                        if (contractSubscriptions == null) return;
                        const updates = contractSubscriptions.get(id);
                        const { total , withoutExcluded  } = foldSubscriptions(contractSubscriptions.values(), updates);
                        contractSubscriptions.delete(id);
                        if (!withoutExcluded.transactions && !withoutExcluded.state) await this.rawApi.unsubscribe({
                            address
                        });
                        else if (total.transactions !== withoutExcluded.transactions || total.state !== withoutExcluded.state) await this.rawApi.subscribe({
                            address,
                            subscriptions: withoutExcluded
                        });
                    });
                    await subscription1.subscribe();
                    return subscription1;
                }
            default:
                throw new Error(`Unknown event ${eventName}`);
        }
    }
    /**
     * Returns provider api state
     *
     * ---
     * Required permissions: none
     */ async getProviderState() {
        await this.ensureInitialized();
        const state = await this._api.getProviderState();
        return {
            ...state,
            permissions: (0, models_1.parsePermissions)(state.permissions)
        };
    }
    /**
     * Requests contract balance
     *
     * ---
     * Required permissions: `basic`
     */ async getBalance(address) {
        const { state  } = await this.getFullContractState({
            address
        });
        return state == null ? "0" : state === null || state === void 0 ? void 0 : state.balance;
    }
    /**
     * Requests contract data
     *
     * ---
     * Required permissions: `basic`
     */ async getFullContractState(args) {
        await this.ensureInitialized();
        return await this._api.getFullContractState({
            address: args.address.toString()
        });
    }
    /**
     * Requests accounts with specified code hash
     *
     * ---
     * Required permissions: `basic`
     */ async getAccountsByCodeHash(args) {
        await this.ensureInitialized();
        const { accounts , continuation  } = await this._api.getAccountsByCodeHash({
            ...args
        });
        return {
            accounts: accounts.map((address)=>new utils_1.Address(address)),
            continuation
        };
    }
    /**
     * Requests contract transactions
     *
     * ---
     * Required permissions: `basic`
     */ async getTransactions(args) {
        await this.ensureInitialized();
        const { transactions , continuation , info  } = await this._api.getTransactions({
            ...args,
            address: args.address.toString()
        });
        return {
            transactions: transactions.map(models_1.parseTransaction),
            continuation,
            info
        };
    }
    /**
     * Searches transaction by hash
     *
     * ---
     * Required permissions: `basic`
     */ async getTransaction(args) {
        await this.ensureInitialized();
        const { transaction  } = await this._api.getTransaction({
            ...args
        });
        return {
            transaction: transaction ? (0, models_1.parseTransaction)(transaction) : undefined
        };
    }
    /**
     * Computes contract address from code and init params
     *
     * ---
     * Required permissions: `basic`
     */ async getExpectedAddress(abi, args) {
        const { address  } = await this.getStateInit(abi, args);
        return address;
    }
    /**
     * Computes contract address and state from code and init params
     *
     * ---
     * Required permissions: `basic`
     */ async getStateInit(abi, args) {
        await this.ensureInitialized();
        const { address , stateInit  } = await this._api.getExpectedAddress({
            abi: JSON.stringify(abi),
            ...args,
            initParams: (0, models_1.serializeTokensObject)(args.initParams)
        });
        return {
            address: new utils_1.Address(address),
            stateInit
        };
    }
    /**
     * Computes hash of base64 encoded BOC
     *
     * ---
     * Required permissions: `basic`
     */ async getBocHash(boc) {
        await this.ensureInitialized();
        return await this._api.getBocHash({
            boc
        }).then(({ hash  })=>hash);
    }
    /**
     * Creates base64 encoded BOC
     *
     * ---
     * Required permissions: `basic`
     */ async packIntoCell(args) {
        await this.ensureInitialized();
        return await this._api.packIntoCell({
            abiVersion: args.abiVersion,
            structure: args.structure,
            data: (0, models_1.serializeTokensObject)(args.data)
        });
    }
    /**
     * Decodes base64 encoded BOC
     *
     * ---
     * Required permissions: `basic`
     */ async unpackFromCell(args) {
        await this.ensureInitialized();
        const { data  } = await this._api.unpackFromCell({
            ...args,
            structure: args.structure
        });
        return {
            data: (0, models_1.parseTokensObject)(args.structure, data)
        };
    }
    /**
     * Extracts public key from raw account state
     *
     * **NOTE:** can only be used on contracts which are deployed and has `pubkey` header
     *
     * ---
     * Required permissions: `basic`
     */ async extractPublicKey(boc) {
        await this.ensureInitialized();
        const { publicKey  } = await this._api.extractPublicKey({
            boc
        });
        return publicKey;
    }
    /**
     * Converts base64 encoded contract code into tvc with default init data
     *
     * ---
     * Required permissions: `basic`
     */ async codeToTvc(code) {
        await this.ensureInitialized();
        const { tvc  } = await this._api.codeToTvc({
            code
        });
        return tvc;
    }
    /**
     * Merges code and data into state init
     *
     * ---
     * Required permissions: `basic`
     */ async mergeTvc(args) {
        await this.ensureInitialized();
        return await this._api.mergeTvc(args);
    }
    /**
     * Splits base64 encoded state init into code and data
     *
     * ---
     * Required permissions: `basic`
     */ async splitTvc(tvc) {
        await this.ensureInitialized();
        return await this._api.splitTvc({
            tvc
        });
    }
    /**
     * Merges code and data into state init
     *
     * ---
     * Required permissions: `basic`
     */ async setCodeSalt(args) {
        let salt;
        if (typeof args.salt === "string") {
            await this.ensureInitialized();
            salt = args.salt;
        } else {
            const { boc  } = await this.packIntoCell(args.salt);
            salt = boc;
        }
        return await this._api.setCodeSalt({
            code: args.code,
            salt
        });
    }
    /**
     * Retrieves salt from code. Returns undefined if code doesn't contain salt
     *
     * ---
     * Required permissions: `basic`
     */ async getCodeSalt(args) {
        await this.ensureInitialized();
        const { salt  } = await this.rawApi.getCodeSalt({
            code: args.code
        });
        return salt;
    }
    /**
     * Adds asset to the selected account
     *
     * ---
     * Requires permissions: `accountInteraction`
     */ async addAsset(args) {
        await this.ensureInitialized();
        let params;
        switch(args.type){
            case "tip3_token":
                params = {
                    rootContract: args.params.rootContract.toString()
                };
                break;
            default:
                throw new Error("Unknown asset type");
        }
        return await this._api.addAsset({
            account: args.account.toString(),
            type: args.type,
            params
        });
    }
    async verifySignature(args) {
        await this.ensureInitialized();
        return await this._api.verifySignature(args);
    }
    /**
     * Signs arbitrary data.
     *
     * NOTE: hashes data before signing. Use `signDataRaw` to sign without hash.
     *
     * ---
     * Requires permissions: `accountInteraction`
     */ async signData(args) {
        await this.ensureInitialized();
        return await this._api.signData(args);
    }
    /**
     * Signs arbitrary data without hashing it
     *
     * ---
     * Requires permissions: `accountInteraction`
     */ async signDataRaw(args) {
        await this.ensureInitialized();
        return await this._api.signDataRaw(args);
    }
    /**
     * Encrypts arbitrary data with specified algorithm for each specified recipient
     *
     * ---
     * Requires permissions: `accountInteraction`
     */ async encryptData(args) {
        await this.ensureInitialized();
        const { encryptedData  } = await this._api.encryptData(args);
        return encryptedData;
    }
    /**
     * Decrypts encrypted data. Returns base64 encoded data
     *
     * ---
     * Requires permissions: `accountInteraction`
     */ async decryptData(encryptedData) {
        await this.ensureInitialized();
        const { data  } = await this._api.decryptData({
            encryptedData
        });
        return data;
    }
    /**
     * Sends an internal message from the user account.
     * Shows an approval window to the user.
     *
     * ---
     * Required permissions: `accountInteraction`
     */ async sendMessage(args) {
        await this.ensureInitialized();
        const { transaction  } = await this._api.sendMessage({
            sender: args.sender.toString(),
            recipient: args.recipient.toString(),
            amount: args.amount,
            bounce: args.bounce,
            payload: args.payload ? {
                abi: args.payload.abi,
                method: args.payload.method,
                params: (0, models_1.serializeTokensObject)(args.payload.params)
            } : undefined
        });
        return {
            transaction: (0, models_1.parseTransaction)(transaction)
        };
    }
    /**
     * Sends an internal message from the user account without waiting for the transaction.
     * Shows an approval window to the user.
     *
     * @see messageStatusUpdated
     *
     * ---
     * Required permissions: `accountInteraction`
     */ async sendMessageDelayed(args) {
        await this.ensureInitialized();
        const transactions = new utils_1.DelayedTransactions;
        const subscription = await this.subscribe("messageStatusUpdated");
        subscription.on("data", (data)=>{
            if (!data.address.equals(args.sender)) return;
            transactions.fillTransaction(data.hash, data.transaction);
        });
        const { message  } = await this._api.sendMessageDelayed({
            sender: args.sender.toString(),
            recipient: args.recipient.toString(),
            amount: args.amount,
            bounce: args.bounce,
            payload: args.payload ? {
                abi: args.payload.abi,
                method: args.payload.method,
                params: (0, models_1.serializeTokensObject)(args.payload.params)
            } : undefined
        }).catch((e)=>{
            subscription.unsubscribe().catch(console.error);
            throw e;
        });
        const transaction = transactions.waitTransaction(args.sender, message.hash).finally(()=>subscription.unsubscribe().catch(console.error));
        return {
            messageHash: message.hash,
            expireAt: message.expireAt,
            transaction
        };
    }
    _registerEventHandlers(provider) {
        const knownEvents = {
            "connected": (data)=>data,
            "disconnected": (data)=>data,
            "transactionsFound": (data)=>({
                    address: new utils_1.Address(data.address),
                    transactions: data.transactions.map(models_1.parseTransaction),
                    info: data.info
                }),
            "contractStateChanged": (data)=>({
                    address: new utils_1.Address(data.address),
                    state: data.state
                }),
            "messageStatusUpdated": (data)=>({
                    address: new utils_1.Address(data.address),
                    hash: data.hash,
                    transaction: data.transaction != null ? (0, models_1.parseTransaction)(data.transaction) : undefined
                }),
            "networkChanged": (data)=>data,
            "permissionsChanged": (data)=>({
                    permissions: (0, models_1.parsePermissions)(data.permissions)
                }),
            "loggedOut": (data)=>data
        };
        for (const [eventName, extractor] of Object.entries(knownEvents))provider.addListener(eventName, (data)=>{
            const handlers = this._subscriptions[eventName];
            const parsed = extractor(data);
            for (const handler of handlers.values())handler(parsed);
        });
    }
}
exports.ProviderRpcClient = ProviderRpcClient;
/**
 * @category Provider
 */ class ProviderNotFoundException extends Error {
    constructor(){
        super("Everscale provider was not found");
    }
}
exports.ProviderNotFoundException = ProviderNotFoundException;
/**
 * @category Provider
 */ class ProviderNotInitializedException extends Error {
    constructor(){
        super("Everscale provider was not initialized yet");
    }
}
exports.ProviderNotInitializedException = ProviderNotInitializedException;
function foldSubscriptions(subscriptions, except) {
    const total = {
        state: false,
        transactions: false
    };
    const withoutExcluded = Object.assign({}, total);
    for (const item of subscriptions){
        if (withoutExcluded.transactions && withoutExcluded.state) break;
        total.state || (total.state = item.state);
        total.transactions || (total.transactions = item.transactions);
        if (item !== except) {
            withoutExcluded.state || (withoutExcluded.state = item.state);
            withoutExcluded.transactions || (withoutExcluded.transactions = item.transactions);
        }
    }
    return {
        total,
        withoutExcluded
    };
}

},{"./models":"jJ5zc","./utils":"03nXq","./stream":"80fNZ","./contract":"37DLW","./api":"Nqd8k"}],"jJ5zc":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTokensObject = exports.serializeTokensObject = exports.parseAccountInteraction = exports.parsePermissions = exports.parseMessage = exports.serializeMessage = exports.parseTransaction = exports.serializeTransaction = void 0;
const utils_1 = require("./utils");
/**
 * @category Models
 */ function serializeTransaction(transaction) {
    return {
        ...transaction,
        inMessage: serializeMessage(transaction.inMessage),
        outMessages: transaction.outMessages.map(serializeMessage)
    };
}
exports.serializeTransaction = serializeTransaction;
/**
 * @category Models
 */ function parseTransaction(transaction) {
    return {
        ...transaction,
        inMessage: parseMessage(transaction.inMessage),
        outMessages: transaction.outMessages.map(parseMessage)
    };
}
exports.parseTransaction = parseTransaction;
/**
 * @category Models
 */ function serializeMessage(message) {
    return {
        ...message,
        src: message.src ? message.src.toString() : undefined,
        dst: message.dst ? message.dst.toString() : undefined
    };
}
exports.serializeMessage = serializeMessage;
/**
 * @category Models
 */ function parseMessage(message) {
    return {
        ...message,
        src: message.src ? new utils_1.Address(message.src) : undefined,
        dst: message.dst ? new utils_1.Address(message.dst) : undefined
    };
}
exports.parseMessage = parseMessage;
/**
 * @category Models
 */ function parsePermissions(permissions) {
    return {
        ...permissions,
        accountInteraction: permissions.accountInteraction ? parseAccountInteraction(permissions.accountInteraction) : undefined
    };
}
exports.parsePermissions = parsePermissions;
/**
 * @category Models
 */ function parseAccountInteraction(accountInteraction) {
    return {
        ...accountInteraction,
        address: new utils_1.Address(accountInteraction.address)
    };
}
exports.parseAccountInteraction = parseAccountInteraction;
/**
 * @category Models
 */ function serializeTokensObject(object) {
    return serializeTokenValue(object);
}
exports.serializeTokensObject = serializeTokensObject;
function serializeTokenValue(token) {
    if (token instanceof utils_1.Address) return token.toString();
    if (Array.isArray(token)) {
        const result = [];
        for (const item of token)result.push(serializeTokenValue(item));
        return result;
    } else if (token != null && typeof token === "object") {
        const result1 = {};
        for (const [key, value] of Object.entries(token))result1[key] = serializeTokenValue(value);
        return result1;
    } else return token;
}
/**
 * @category Models
 */ function parseTokensObject(params, object) {
    const result = {};
    for (const param of params)result[param.name] = parseTokenValue(param, object[param.name]);
    return result;
}
exports.parseTokensObject = parseTokensObject;
function parseTokenValue(param, token) {
    if (!param.type.startsWith("map")) {
        const isArray = param.type.endsWith("[]");
        const isOptional = !isArray && param.type.startsWith("optional");
        const rawType = isArray ? param.type.slice(0, -2) : isOptional ? param.type.slice(9, -1) : param.type;
        if (isArray) {
            const rawParam = {
                name: param.name,
                type: rawType,
                components: param.components
            };
            const result = [];
            for (const item of token)result.push(parseTokenValue(rawParam, item));
            return result;
        } else if (isOptional) {
            if (token == null) return null;
            else {
                const rawParam1 = {
                    name: param.name,
                    type: rawType,
                    components: param.components
                };
                return parseTokenValue(rawParam1, token);
            }
        } else if (rawType === "tuple") {
            const result1 = {};
            if (param.components != null) for (const component of param.components)result1[component.name] = parseTokenValue(component, token[component.name]);
            return result1;
        } else if (rawType === "address") return new utils_1.Address(token);
        else return token;
    } else {
        let [keyType, valueType] = param.type.split(",");
        keyType = keyType.slice(4);
        valueType = valueType.slice(0, -1);
        const result2 = [];
        for (const [key, value] of token)result2.push([
            parseTokenValue({
                name: "",
                type: keyType
            }, key),
            parseTokenValue({
                name: "",
                type: valueType,
                components: param.components
            }, value)
        ]);
        return result2;
    }
}

},{"./utils":"03nXq"}],"03nXq":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUniqueId = exports.mergeTransactions = exports.LT_COLLATOR = exports.Semaphore = exports.DelayedTransactions = exports.MessageExpiredException = exports.AddressLiteral = exports.Address = void 0;
/**
 * @category Utils
 */ class Address {
    constructor(address){
        this.equals = (other)=>this._equals(other);
        this._address = address;
    }
    toString() {
        return this._address;
    }
    toJSON() {
        return this._address;
    }
    _equals(other) {
        if (other instanceof Address) return this._address === other._address;
        else return this._address === other;
    }
}
exports.Address = Address;
/**
 * @category Utils
 */ class AddressLiteral extends Address {
    constructor(address){
        super(address);
    }
}
exports.AddressLiteral = AddressLiteral;
/**
 * @category Utils
 */ class MessageExpiredException extends Error {
    constructor(address, hash){
        super("Message expired");
        this.address = address;
        this.hash = hash;
    }
}
exports.MessageExpiredException = MessageExpiredException;
class DelayedTransactions {
    constructor(){
        this.transactions = new Map();
    }
    async waitTransaction(address, hash) {
        var _a;
        let transaction = (_a = this.transactions.get(hash)) === null || _a === void 0 ? void 0 : _a.promise;
        if (transaction == null) {
            let resolve;
            let reject;
            transaction = new Promise((promiseResolve, promiseReject)=>{
                resolve = (tx)=>promiseResolve(tx);
                reject = ()=>promiseReject();
            });
            this.transactions.set(hash, {
                promise: transaction,
                resolve: resolve,
                reject: reject
            });
        }
        const tx = await transaction;
        if (tx == null) throw new MessageExpiredException(address, hash);
        return tx;
    }
    fillTransaction(hash, transaction) {
        const pendingTransaction = this.transactions.get(hash);
        if (pendingTransaction != null) pendingTransaction.resolve(transaction);
        else this.transactions.set(hash, {
            promise: Promise.resolve(transaction),
            resolve: ()=>{},
            reject: ()=>{}
        });
    }
}
exports.DelayedTransactions = DelayedTransactions;
/**
 * @category Utils
 */ class Semaphore {
    constructor(count){
        this.tasks = [];
        this.sched = ()=>{
            var _a;
            if (this.count > 0 && this.tasks.length > 0) {
                this.count--;
                (_a = this.tasks.shift()) === null || _a === void 0 || _a();
            }
        };
        this.count = count;
    }
    acquire() {
        return new Promise((res, _rej)=>{
            this.tasks.push(()=>{
                let released = false;
                res(()=>{
                    if (!released) {
                        released = true;
                        this.count++;
                        this.sched();
                    }
                });
            });
            nextTick(this.sched);
        });
    }
    releaseAll() {
        var _a;
        while(this.tasks.length > 0)(_a = this.tasks.shift()) === null || _a === void 0 || _a();
    }
}
exports.Semaphore = Semaphore;
function byObserver(Observer) {
    const node = document.createTextNode("");
    let queue, currentQueue, bit = 0, i = 0;
    new Observer(function() {
        let callback;
        if (!queue) {
            if (!currentQueue) return;
            queue = currentQueue;
        } else if (currentQueue) queue = currentQueue.slice(i).concat(queue);
        currentQueue = queue;
        queue = null;
        i = 0;
        if (typeof currentQueue === "function") {
            callback = currentQueue;
            currentQueue = null;
            callback();
            return;
        }
        node.data = bit = ++bit % 2;
        while(i < currentQueue.length){
            callback = currentQueue[i];
            i++;
            if (i === currentQueue.length) currentQueue = null;
            callback();
        }
    }).observe(node, {
        characterData: true
    });
    return function(fn) {
        if (queue) {
            if (typeof queue === "function") queue = [
                queue,
                fn
            ];
            else queue.push(fn);
            return;
        }
        queue = fn;
        node.data = bit = ++bit % 2;
    };
}
const nextTick = function() {
    // queueMicrotask
    if (typeof queueMicrotask === "function") return queueMicrotask;
    // MutationObserver
    if (typeof document === "object" && document) {
        if (typeof MutationObserver === "function") return byObserver(MutationObserver);
        if (typeof window.WebKitMutationObserver === "function") return byObserver(window.WebKitMutationObserver);
    }
    /* @ts-ignore */ if (typeof setImmediate === "function") /* @ts-ignore */ return setImmediate;
    if (typeof setTimeout === "function" || typeof setTimeout === "object") return function(cb) {
        setTimeout(cb, 0);
    };
    throw new Error("No `nextTick` implementation found");
}();
/**
 * @category Utils
 */ exports.LT_COLLATOR = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: "base"
});
/**
 * Modifies knownTransactions array, merging it with new transactions.
 * All arrays are assumed to be sorted by descending logical time.
 *
 * > Note! This method does not remove duplicates.
 *
 * @param knownTransactions
 * @param newTransactions
 * @param info
 *
 * @category Utils
 */ function mergeTransactions(knownTransactions, newTransactions, info) {
    if (info.batchType === "old") {
        knownTransactions.push(...newTransactions);
        return knownTransactions;
    }
    if (knownTransactions.length === 0) {
        knownTransactions.push(...newTransactions);
        return knownTransactions;
    }
    // Example:
    // known lts: [N, N-1, N-2, N-3, (!) N-10,...]
    // new lts: [N-4, N-5]
    // batch info: { minLt: N-5, maxLt: N-4, batchType: 'new' }
    // 1. Skip indices until known transaction lt is greater than the biggest in the batch
    let i = 0;
    while(i < knownTransactions.length && exports.LT_COLLATOR.compare(knownTransactions[i].id.lt, info.maxLt) >= 0)++i;
    // 2. Insert new transactions
    knownTransactions.splice(i, 0, ...newTransactions);
    return knownTransactions;
}
exports.mergeTransactions = mergeTransactions;
const MAX = 4294967295;
let idCounter = Math.floor(Math.random() * MAX);
function getUniqueId() {
    idCounter = (idCounter + 1) % MAX;
    return idCounter;
}
exports.getUniqueId = getUniqueId;

},{}],"80fNZ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Subscriber = void 0;
const utils_1 = require("./utils");
const models_1 = require("./models");
/**
 * @category Stream
 */ class Subscriber {
    constructor(provider){
        this.provider = provider;
        this.subscriptions = new Map();
        this.scanners = new Map();
        this.unsubscribe = async ()=>this._unsubscribe();
    }
    /**
     * Returns a stream of new transactions
     */ transactions(address) {
        return this._addSubscription("transactionsFound", address, false);
    }
    /**
     * Returns a finite stream of child transactions
     * @param transaction - root transaction
     */ trace(transaction) {
        const id = (0, utils_1.getUniqueId)();
        return new StreamImpl((onData, onEnd)=>{
            const scanner = new TraceTransactionsScanner(this.provider, {
                origin: transaction,
                onData,
                onEnd: (eof)=>{
                    this.scanners.delete(id);
                    onEnd(eof);
                }
            });
            this.scanners.set(id, scanner);
            scanner.start();
            // Subscription is not required
            return Promise.resolve();
        }, async ()=>{
            const scanner = this.scanners.get(id);
            if (scanner != null) {
                this.scanners.delete(id);
                await scanner.stop();
            }
        }, identity, true);
    }
    /**
     * Returns a stream of old transactions
     */ oldTransactions(address, filter) {
        const id = (0, utils_1.getUniqueId)();
        return new StreamImpl((onData, onEnd)=>{
            const scanner = new UnorderedTransactionsScanner(this.provider, {
                address,
                onData,
                onEnd: (eof)=>{
                    this.scanners.delete(id);
                    onEnd(eof);
                },
                ...filter
            });
            this.scanners.set(id, scanner);
            scanner.start();
            // Subscription is not required
            return Promise.resolve();
        }, async ()=>{
            const scanner = this.scanners.get(id);
            if (scanner != null) {
                this.scanners.delete(id);
                await scanner.stop();
            }
        }, identity, true);
    }
    states(address) {
        return this._addSubscription("contractStateChanged", address, false);
    }
    async _unsubscribe() {
        const tasks = [];
        for (const item of this.subscriptions.values())for (const [event, eventData] of Object.entries(item)){
            delete item[event];
            if (eventData != null) tasks.push(eventData.subscription.then((item)=>item.unsubscribe()).catch(()=>{}));
        }
        this.subscriptions.clear();
        for (const scanner of this.scanners.values())tasks.push(scanner.stop());
        this.scanners.clear();
        await Promise.all(tasks);
    }
    _addSubscription(event, address, isFinite) {
        const rawAddress = address.toString();
        const stopProducer = (id)=>{
            const subscriptions = this.subscriptions.get(rawAddress);
            if (subscriptions == null) // No subscriptions for the address
            return;
            const eventData = subscriptions[event];
            if (eventData != null) {
                const handler = eventData.handlers.get(id);
                if (handler != null) {
                    // Remove event handler with the id
                    eventData.handlers.delete(id);
                    const { queue , onEnd , state  } = handler;
                    if (!state.finished) {
                        state.finished = true;
                        queue.clear();
                        queue.enqueue(async ()=>onEnd(state.eof));
                    }
                }
                // Remove event data subscription if there are none of them
                if (eventData.handlers.size === 0) {
                    const subscription = eventData.subscription;
                    delete subscriptions[event];
                    subscription.then((subscription)=>subscription.unsubscribe()).catch(console.debug);
                }
            }
            // Remove address subscriptions object if it is empty
            if (subscriptions.contractStateChanged == null && subscriptions.transactionsFound == null) this.subscriptions.delete(rawAddress);
        };
        const id = (0, utils_1.getUniqueId)();
        return new StreamImpl((onData, onEnd)=>{
            const subscriptions = this.subscriptions.get(rawAddress);
            let eventData = subscriptions === null || subscriptions === void 0 ? void 0 : subscriptions[event];
            const state = {
                eof: false,
                finished: false
            };
            // Create handler object
            const handler = {
                onData,
                onEnd,
                queue: new PromiseQueue(),
                state
            };
            if (eventData != null) {
                // Add handler if there is already a handler group
                eventData.handlers.set(id, handler);
                return Promise.resolve();
            }
            // Create handlers group
            const handlers = new Map();
            handlers.set(id, handler);
            // Create subscription
            const subscription = this.provider.subscribe(event, {
                address
            }).then((subscription)=>{
                subscription.on("data", (data)=>{
                    for (const { onData , queue , state  } of handlers.values()){
                        // Skip closed streams
                        if (state.eof || state.finished) continue;
                        queue.enqueue(async ()=>{
                            if (!await onData(data)) {
                                state.eof = true;
                                stopProducer(id);
                            }
                        });
                    }
                });
                subscription.on("unsubscribed", ()=>{
                    for (const id of handlers.keys())stopProducer(id);
                });
                return subscription;
            }).catch((e)=>{
                console.error(e);
                for (const id of handlers.keys())stopProducer(id);
                throw e;
            });
            // Add event data to subscriptions
            eventData = {
                subscription,
                handlers
            };
            if (subscriptions == null) this.subscriptions.set(rawAddress, {
                [event]: eventData
            });
            else subscriptions[event] = eventData;
            // Wait until subscribed
            return subscription.then(()=>{});
        }, ()=>stopProducer(id), identity, isFinite);
    }
}
exports.Subscriber = Subscriber;
async function identity(item, handler) {
    return handler(item);
}
class StreamImpl {
    constructor(makeProducer, stopProducer, extractor, isFinite){
        this.makeProducer = makeProducer;
        this.stopProducer = stopProducer;
        this.extractor = extractor;
        this.isFinite = isFinite;
        /**
         * Folds every element into an accumulator by applying an operation, returning the final result
         */ this.fold = this.onlyFinite((init, f, ctx)=>{
            let state = init;
            return new Promise((resolve, reject)=>{
                const subscribed = this.makeProducer(// onData
                (data)=>this.extractor(data, async (item)=>{
                        state = await f(state, item);
                        return true;
                    }), // onEnd
                (eof)=>{
                    if (eof) resolve(state);
                    else reject(new Error("Subscription closed"));
                });
                if (ctx != null) ctx.subscribed = subscribed;
            });
        });
        /**
         * Waits until the end of the stream
         */ this.finished = this.onlyFinite((ctx)=>{
            return new Promise((resolve, reject)=>{
                const subscribed = this.makeProducer(// onData
                (data)=>this.extractor(data, (_item)=>true), // onEnd
                (eof)=>{
                    if (eof) resolve(undefined);
                    else reject(new Error("Subscription closed"));
                });
                if (ctx != null) ctx.subscribed = subscribed;
            });
        });
    }
    async delayed(f) {
        const { subscribed , result  } = f({
            first: ()=>{
                const ctx = {};
                const result = this.first(ctx);
                return {
                    subscribed: ctx.subscribed,
                    result
                };
            },
            on: (handler)=>{
                const ctx = {};
                this.on(handler, ctx);
                return {
                    subscribed: ctx.subscribed,
                    result: undefined
                };
            },
            fold: this.fold != null ? (init, f)=>{
                const ctx = {};
                const result = this.fold(init, f, ctx);
                return {
                    subscribed: ctx.subscribed,
                    result
                };
            } : undefined,
            finished: this.finished != null ? ()=>{
                const ctx = {};
                const result = this.finished(ctx);
                return {
                    subscribed: ctx.subscribed,
                    result
                };
            } : undefined
        });
        await subscribed;
        return ()=>result;
    }
    first(ctx) {
        const state = {
            found: false
        };
        return new Promise((resolve, reject)=>{
            const subscribed = this.makeProducer(// onData
            (data)=>this.extractor(data, (item)=>{
                    Object.assign(state, {
                        found: true,
                        result: item
                    });
                    return false;
                }), // onEnd
            (eof)=>{
                if (eof) {
                    if (this.isFinite) resolve(state.found ? state.result : undefined);
                    else if (state.found) resolve(state.result);
                    else reject(new Error("Unexpected end of stream"));
                } else reject(new Error("Subscription closed"));
            });
            if (ctx != null) ctx.subscribed = subscribed;
        });
    }
    on(handler, ctx) {
        const subscribed = this.makeProducer((event)=>this.extractor(event, async (item)=>{
                await handler(item);
                return true;
            }), (_eof)=>{});
        if (ctx != null) ctx.subscribed = subscribed;
    }
    merge(other) {
        return new StreamImpl((onData, onEnd)=>{
            const state = {
                stopped: false,
                counter: 0
            };
            const checkEnd = (eof)=>{
                if (state.stopped) return;
                if (++state.counter == 2 || !eof) {
                    state.stopped = true;
                    onEnd(eof);
                }
            };
            return Promise.all([
                this.makeProducer(onData, checkEnd),
                other.makeProducer(onData, checkEnd)
            ]).then(()=>{});
        }, ()=>{
            this.stopProducer();
            other.stopProducer();
        }, this.extractor, this.isFinite && other.isFinite);
    }
    enumerate() {
        const state = {
            index: 0
        };
        return new StreamImpl(this.makeProducer, this.stopProducer, (event, handler)=>this.extractor(event, async (item)=>{
                return handler({
                    index: state.index++,
                    item
                });
            }), this.isFinite);
    }
    tap(f) {
        return new StreamImpl(this.makeProducer, this.stopProducer, (event, handler)=>this.extractor(event, async (item)=>{
                await f(item);
                return handler(item);
            }), this.isFinite);
    }
    filter(f) {
        return new StreamImpl(this.makeProducer, this.stopProducer, (event, handler)=>this.extractor(event, async (item)=>{
                if (await f(item)) return handler(item);
                else return true;
            }), this.isFinite);
    }
    filterMap(f) {
        return new StreamImpl(this.makeProducer, this.stopProducer, (event, handler)=>this.extractor(event, async (item)=>{
                const newItem = await f(item);
                if (newItem !== undefined) return handler(newItem);
                else return true;
            }), this.isFinite);
    }
    map(f) {
        return new StreamImpl(this.makeProducer, this.stopProducer, (event, handler)=>this.extractor(event, async (item)=>{
                const newItem = await f(item);
                return handler(newItem);
            }), this.isFinite);
    }
    flatMap(f) {
        return new StreamImpl(this.makeProducer, this.stopProducer, (event, handler)=>this.extractor(event, async (item)=>{
                const items = await f(item);
                for (const newItem of items){
                    if (!await handler(newItem)) return false;
                }
                return true;
            }), this.isFinite);
    }
    skip(n) {
        const state = {
            index: 0
        };
        return new StreamImpl(this.makeProducer, this.stopProducer, (event, handler)=>this.extractor(event, (item)=>{
                if (state.index >= n) return handler(item);
                else {
                    ++state.index;
                    return true;
                }
            }), this.isFinite);
    }
    skipWhile(f) {
        const state = {
            shouldSkip: true
        };
        return new StreamImpl(this.makeProducer, this.stopProducer, (event, handler)=>this.extractor(event, async (item)=>{
                if (!state.shouldSkip || !await f(item)) {
                    state.shouldSkip = false;
                    return handler(item);
                } else return true;
            }), this.isFinite);
    }
    take(n) {
        const state = {
            index: 0
        };
        return new StreamImpl(this.makeProducer, this.stopProducer, (event, handler)=>this.extractor(event, (item)=>{
                if (state.index < n) {
                    ++state.index;
                    return handler(item);
                } else return false;
            }), true);
    }
    takeWhile(f) {
        return new StreamImpl(this.makeProducer, this.stopProducer, (event, handler)=>this.extractor(event, async (item)=>{
                if (await f(item)) return handler(item);
                else return false;
            }), true);
    }
    takeWhileMap(f) {
        return new StreamImpl(this.makeProducer, this.stopProducer, (event, handler)=>this.extractor(event, async (item)=>{
                const newItem = await f(item);
                if (newItem !== undefined) return handler(newItem);
                else return false;
            }), true);
    }
    onlyFinite(f) {
        if (this.isFinite) return f;
        else return undefined;
    }
}
class UnorderedTransactionsScanner {
    constructor(provider, params){
        this.provider = provider;
        this.params = params;
        this.queue = new PromiseQueue();
        this.isRunning = false;
    }
    start() {
        if (this.isRunning || this.promise != null) return;
        this.isRunning = true;
        this.promise = (async ()=>{
            const params = this.params;
            const state = {
                complete: false
            };
            while(this.isRunning && !state.complete)try {
                const { transactions , continuation  } = await this.provider.getTransactions({
                    address: this.params.address,
                    continuation: this.continuation
                });
                state.complete = !state.complete && transactions.length == null;
                if (!this.isRunning || state.complete) break;
                const filteredTransactions = transactions.filter((item)=>(params.fromLt == null || utils_1.LT_COLLATOR.compare(item.id.lt, params.fromLt) > 0) && (params.fromUtime == null || item.createdAt > params.fromUtime));
                if (filteredTransactions.length == 0) {
                    state.complete = true;
                    break;
                }
                const info = {
                    maxLt: filteredTransactions[0].id.lt,
                    minLt: filteredTransactions[filteredTransactions.length - 1].id.lt,
                    batchType: "old"
                };
                this.queue.enqueue(async ()=>{
                    const isRunning = this.params.onData({
                        address: this.params.address,
                        transactions: filteredTransactions,
                        info
                    });
                    if (!isRunning) {
                        state.complete = true;
                        this.isRunning = false;
                    }
                });
                if (continuation != null) this.continuation = continuation;
                else {
                    state.complete = true;
                    break;
                }
            } catch (e) {
                console.error(e);
            }
            this.queue.enqueue(async ()=>this.params.onEnd(state.complete));
            this.isRunning = false;
            this.continuation = undefined;
        })();
    }
    async stop() {
        this.isRunning = false;
        this.queue.clear();
        if (this.promise != null) await this.promise;
        else this.params.onEnd(false);
    }
}
class TraceTransactionsScanner {
    constructor(provider, params){
        this.provider = provider;
        this.params = params;
        this.queue = new PromiseQueue();
        this.isRunning = false;
        this.semaphore = new utils_1.Semaphore(10);
    }
    start() {
        if (this.isRunning || this.promise != null) return;
        const provider = this.provider;
        this.isRunning = true;
        this.promise = (async ()=>{
            const state = {
                complete: false
            };
            const makePendingTransaction = (messageHash)=>{
                const state = {
                    stopped: false
                };
                const promise = (async ()=>{
                    let timeout = 500;
                    while(true){
                        const release = await this.semaphore.acquire();
                        if (state.stopped) {
                            release();
                            return;
                        }
                        const result = await provider.rawApi.findTransaction({
                            inMessageHash: messageHash
                        }).catch(()=>({
                                transaction: undefined
                            })).finally(()=>release());
                        if (state.stopped) return;
                        if (result.transaction != null) {
                            const transaction = (0, models_1.parseTransaction)(result.transaction);
                            transaction.account = transaction.inMessage.dst;
                            return transaction;
                        }
                        let resolve;
                        const promise = new Promise((resolvePromise, rejectPromise)=>{
                            resolve = ()=>resolvePromise();
                            state.reject = ()=>rejectPromise();
                        });
                        state.timeout = setTimeout(resolve, timeout);
                        await promise;
                        if (state.stopped) return;
                        state.reject = undefined;
                        timeout = Math.min(timeout * 2, 3000);
                    }
                })();
                const reject = ()=>{
                    var _a;
                    state.stopped = true;
                    (_a = state.reject) === null || _a === void 0 || _a.call(state);
                    if (state.timeout != null) clearTimeout(state.timeout);
                };
                return {
                    promise,
                    reject
                };
            };
            const transactionsQueue = [
                this.params.origin
            ];
            try {
                outer: while(this.isRunning){
                    const transaction = transactionsQueue.shift();
                    if (transaction == null) {
                        state.complete = true;
                        break;
                    }
                    // Spawn promises
                    const pendingTransactions = transaction.outMessages.filter((message)=>message.dst != null).map((message)=>{
                        const messageHash = message.hash;
                        return makePendingTransaction(messageHash);
                    });
                    this.pendingTransactions = pendingTransactions;
                    for (const { promise  } of pendingTransactions){
                        const childTransaction = await promise;
                        if (!this.isRunning || state.complete || childTransaction == null) break outer;
                        this.queue.enqueue(async ()=>{
                            const isRunning = this.params.onData(childTransaction);
                            if (!isRunning) {
                                state.complete = true;
                                this.isRunning = false;
                                this.rejectPendingTransactions();
                            }
                        });
                        transactionsQueue.push(childTransaction);
                    }
                    this.pendingTransactions = undefined;
                }
            } catch (e) {
                console.error(e);
            /* do nothing */ } finally{
                this.queue.enqueue(async ()=>this.params.onEnd(state.complete));
                this.isRunning = false;
                this.rejectPendingTransactions();
            }
        })();
    }
    async stop() {
        this.isRunning = false;
        this.queue.clear();
        this.rejectPendingTransactions();
        if (this.promise != null) await this.promise;
        else this.params.onEnd(false);
    }
    rejectPendingTransactions() {
        if (this.pendingTransactions != null) {
            for (const pendingTransaction of this.pendingTransactions)pendingTransaction.reject();
            this.pendingTransactions = undefined;
        }
        this.semaphore.releaseAll();
    }
}
class PromiseQueue {
    constructor(){
        this.queue = [];
        this.workingOnPromise = false;
    }
    enqueue(promise) {
        this.queue.push(promise);
        this._dequeue().catch(()=>{});
    }
    clear() {
        this.queue.length = 0;
    }
    async _dequeue() {
        if (this.workingOnPromise) return;
        const item = this.queue.shift();
        if (!item) return;
        this.workingOnPromise = true;
        item().then(()=>{
            this.workingOnPromise = false;
            this._dequeue();
        }).catch(()=>{
            this.workingOnPromise = false;
            this._dequeue();
        });
    }
}

},{"./utils":"03nXq","./models":"jJ5zc"}],"37DLW":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TvmException = exports.Contract = void 0;
const utils_1 = require("./utils");
const models_1 = require("./models");
/**
 * @category Contract
 */ class Contract {
    constructor(provider, abi, address){
        if (!Array.isArray(abi.functions)) throw new Error("Invalid abi. Functions array required");
        if (!Array.isArray(abi.events)) throw new Error("Invalid abi. Events array required");
        this._provider = provider;
        this._abi = JSON.stringify(abi);
        this._functions = abi.functions.reduce((functions, item)=>{
            functions[item.name] = {
                inputs: item.inputs || [],
                outputs: item.outputs || []
            };
            return functions;
        }, {});
        this._events = abi.events.reduce((events, item)=>{
            events[item.name] = {
                inputs: item.inputs || []
            };
            return events;
        }, {});
        this._address = address;
        this._methods = new Proxy({}, {
            get: (_object, method)=>{
                const rawAbi = this._functions[method];
                return (params = {})=>new ContractMethodImpl(this._provider, rawAbi, this._abi, this._address, method, params);
            }
        });
    }
    get methods() {
        return this._methods;
    }
    get address() {
        return this._address;
    }
    get abi() {
        return this._abi;
    }
    /**
     * Requests contract data
     *
     * ---
     * Required permissions: `basic`
     */ async getFullState() {
        await this._provider.ensureInitialized();
        return await this._provider.rawApi.getFullContractState({
            address: this.address.toString()
        });
    }
    /**
     * Creates new contract transactions stream
     *
     * @param subscriber
     */ transactions(subscriber) {
        return subscriber.transactions(this._address).flatMap(({ transactions  })=>transactions);
    }
    /**
     * Creates new contract events stream
     *
     * @param subscriber
     */ events(subscriber) {
        return subscriber.transactions(this._address).flatMap(({ transactions  })=>transactions).flatMap((tx)=>this.decodeTransactionEvents({
                transaction: tx
            }).then((events)=>{
                events.forEach((event)=>event.transaction = tx);
                return events;
            }));
    }
    async waitForEvent(args = {}) {
        const { range , filter  } = args;
        const filterFn = typeof filter === "string" ? ({ event  })=>event === filter : filter;
        let subscriber = args.subscriber;
        const hasTempSubscriber = subscriber == null;
        if (subscriber == null) subscriber = new this._provider.Subscriber();
        const event = await ((range === null || range === void 0 ? void 0 : range.fromLt) != null || (range === null || range === void 0 ? void 0 : range.fromUtime) != null ? subscriber.oldTransactions(this._address, range).merge(subscriber.transactions(this._address)) : subscriber.transactions(this.address)).flatMap((item)=>item.transactions).takeWhile((item)=>range == null || (range.fromLt == null || utils_1.LT_COLLATOR.compare(item.id.lt, range.fromLt) > 0) && (range.fromUtime == null || item.createdAt > range.fromUtime) && (range.toLt == null || utils_1.LT_COLLATOR.compare(item.id.lt, range.toLt) < 0) && (range.toUtime == null || item.createdAt < range.toUtime)).flatMap((tx)=>this.decodeTransactionEvents({
                transaction: tx
            }).then((events)=>{
                events.forEach((event)=>event.transaction = tx);
                return events;
            })).filterMap(async (event)=>{
            if (filterFn == null || await filterFn(event)) return event;
            else return undefined;
        }).first();
        hasTempSubscriber && await subscriber.unsubscribe();
        return event;
    }
    async getPastEvents(args) {
        const { range , filter , limit  } = args;
        const filterFn = typeof filter === "string" ? ({ event  })=>event === filter : filter;
        const result = [];
        let currentContinuation = args === null || args === void 0 ? void 0 : args.continuation;
        outer: while(true){
            const { transactions , continuation  } = await this._provider.getTransactions({
                address: this._address,
                continuation: currentContinuation
            });
            if (transactions.length === null) break;
            const filteredTransactions = transactions.filter((item)=>((range === null || range === void 0 ? void 0 : range.fromLt) == null || utils_1.LT_COLLATOR.compare(item.id.lt, range.fromLt) > 0) && ((range === null || range === void 0 ? void 0 : range.fromUtime) == null || item.createdAt > range.fromUtime) && ((range === null || range === void 0 ? void 0 : range.toLt) == null || utils_1.LT_COLLATOR.compare(item.id.lt, range.toLt) < 0) && ((range === null || range === void 0 ? void 0 : range.toUtime) == null || item.createdAt < range.toUtime));
            if (filteredTransactions.length > 0) {
                const parsedEvents = await Promise.all(filteredTransactions.map(async (tx)=>{
                    return {
                        tx,
                        events: await this.decodeTransactionEvents({
                            transaction: tx
                        }).then((events)=>{
                            events.forEach((event)=>event.transaction = tx);
                            return events;
                        })
                    };
                }));
                for (let { tx , events  } of parsedEvents){
                    if (filterFn != null) events = await Promise.all(events.map(async (event)=>await filterFn(event) ? event : undefined)).then((events)=>events.filter((event)=>event != null));
                    currentContinuation = tx.id; // update continuation in case of early break
                    for (const event of events){
                        if (limit != null && result.length >= limit) break outer;
                        result.push(event);
                    }
                    if (limit != null && result.length >= limit) break outer;
                }
            }
            currentContinuation = continuation;
            if (currentContinuation == null) break;
        }
        return {
            events: result,
            continuation: currentContinuation
        };
    }
    async decodeTransaction(args) {
        await this._provider.ensureInitialized();
        try {
            const result = await this._provider.rawApi.decodeTransaction({
                transaction: (0, models_1.serializeTransaction)(args.transaction),
                abi: this._abi,
                method: args.methods
            });
            if (result == null) return undefined;
            const { method , input , output  } = result;
            const rawAbi = this._functions[method];
            return {
                method,
                input: rawAbi.inputs != null ? (0, models_1.parseTokensObject)(rawAbi.inputs, input) : {},
                output: rawAbi.outputs != null ? (0, models_1.parseTokensObject)(rawAbi.outputs, output) : {}
            };
        } catch (_) {
            return undefined;
        }
    }
    async decodeTransactionEvents(args) {
        await this._provider.ensureInitialized();
        try {
            const { events  } = await this._provider.rawApi.decodeTransactionEvents({
                transaction: (0, models_1.serializeTransaction)(args.transaction),
                abi: this._abi
            });
            const result = [];
            for (const { event , data  } of events){
                const rawAbi = this._events[event];
                result.push({
                    event,
                    data: rawAbi.inputs != null ? (0, models_1.parseTokensObject)(rawAbi.inputs, data) : {}
                });
            }
            return result;
        } catch (_) {
            return [];
        }
    }
    async decodeInputMessage(args) {
        await this._provider.ensureInitialized();
        try {
            const result = await this._provider.rawApi.decodeInput({
                abi: this._abi,
                body: args.body,
                internal: args.internal,
                method: args.methods
            });
            if (result == null) return undefined;
            const { method , input  } = result;
            const rawAbi = this._functions[method];
            return {
                method,
                input: rawAbi.inputs != null ? (0, models_1.parseTokensObject)(rawAbi.inputs, input) : {}
            };
        } catch (_) {
            return undefined;
        }
    }
    async decodeOutputMessage(args) {
        await this._provider.ensureInitialized();
        try {
            const result = await this._provider.rawApi.decodeOutput({
                abi: this._abi,
                body: args.body,
                method: args.methods
            });
            if (result == null) return undefined;
            const { method , output  } = result;
            const rawAbi = this._functions[method];
            return {
                method,
                output: rawAbi.outputs != null ? (0, models_1.parseTokensObject)(rawAbi.outputs, output) : {}
            };
        } catch (_) {
            return undefined;
        }
    }
    async decodeEvent(args) {
        await this._provider.ensureInitialized();
        try {
            const result = await this._provider.rawApi.decodeEvent({
                abi: this.abi,
                body: args.body,
                event: args.events
            });
            if (result == null) return undefined;
            const { event , data  } = result;
            const rawAbi = this._events[event];
            return {
                event,
                data: rawAbi.inputs != null ? (0, models_1.parseTokensObject)(rawAbi.inputs, data) : {}
            };
        } catch (_) {
            return undefined;
        }
    }
}
exports.Contract = Contract;
/**
 * @category Contract
 */ class TvmException extends Error {
    constructor(code){
        super(`TvmException: ${code}`);
        this.code = code;
    }
}
exports.TvmException = TvmException;
class ContractMethodImpl {
    constructor(provider, functionAbi, abi, address, method, params){
        this.provider = provider;
        this.functionAbi = functionAbi;
        this.abi = abi;
        this.address = address;
        this.method = method;
        this.params = (0, models_1.serializeTokensObject)(params);
    }
    async send(args) {
        await this.provider.ensureInitialized();
        const { transaction  } = await this.provider.rawApi.sendMessage({
            sender: args.from.toString(),
            recipient: this.address.toString(),
            amount: args.amount,
            bounce: args.bounce == null ? true : args.bounce,
            payload: {
                abi: this.abi,
                method: this.method,
                params: this.params
            }
        });
        return (0, models_1.parseTransaction)(transaction);
    }
    async sendDelayed(args) {
        await this.provider.ensureInitialized();
        const transactions = new utils_1.DelayedTransactions;
        const subscription = await this.provider.subscribe("messageStatusUpdated");
        subscription.on("data", (data)=>{
            if (!data.address.equals(args.from)) return;
            transactions.fillTransaction(data.hash, data.transaction);
        });
        const { message  } = await this.provider.rawApi.sendMessageDelayed({
            sender: args.from.toString(),
            recipient: this.address.toString(),
            amount: args.amount,
            bounce: args.bounce == null ? true : args.bounce,
            payload: {
                abi: this.abi,
                method: this.method,
                params: this.params
            }
        }).catch((e)=>{
            subscription.unsubscribe().catch(console.error);
            throw e;
        });
        const transaction = transactions.waitTransaction(this.address, message.hash).finally(()=>subscription.unsubscribe().catch(console.error));
        return {
            messageHash: message.hash,
            expireAt: message.expireAt,
            transaction
        };
    }
    async sendWithResult(args) {
        await this.provider.ensureInitialized();
        let subscriber = args.subscriber;
        const hasTempSubscriber = subscriber == null;
        if (subscriber == null) subscriber = new this.provider.Subscriber();
        try {
            // Parent transaction from wallet
            let parentTransaction = undefined;
            // Child transaction promise
            let resolveChildTransactionPromise;
            const childTransactionPromise = new Promise((resolve)=>{
                resolveChildTransactionPromise = (tx)=>resolve(tx);
            });
            // Array for collecting transactions on target before parent transaction promise resolution
            const possibleChildren = [];
            // Subscribe to this account
            subscriber.transactions(this.address).flatMap((batch)=>batch.transactions)// Listen only messages from sender
            .filter((item)=>{
                var _a;
                return ((_a = item.inMessage.src) === null || _a === void 0 ? void 0 : _a.equals(args.from)) || false;
            }).on((tx)=>{
                if (parentTransaction == null) // If we don't known whether the message was sent just collect all transactions from the sender
                possibleChildren.push(tx);
                else if (parentTransaction.possibleMessages.findIndex((msg)=>msg.hash == tx.inMessage.hash) >= 0) // Resolve promise if transaction was found
                resolveChildTransactionPromise === null || resolveChildTransactionPromise === void 0 || resolveChildTransactionPromise(tx);
            });
            // Send message
            const transaction = await this.send(args);
            // Extract all outgoing messages from the parent transaction to this contract
            const possibleMessages = transaction.outMessages.filter((msg)=>{
                var _a;
                return ((_a = msg.dst) === null || _a === void 0 ? void 0 : _a.equals(this.address)) || false;
            });
            // Update stream state
            parentTransaction = {
                transaction,
                possibleMessages
            };
            // Check whether child transaction was already found
            const alreadyReceived = possibleChildren.find((tx)=>{
                return possibleMessages.findIndex((msg)=>msg.hash == tx.inMessage.hash) >= 0;
            });
            if (alreadyReceived != null) resolveChildTransactionPromise === null || resolveChildTransactionPromise === void 0 || resolveChildTransactionPromise(alreadyReceived);
            const childTransaction = await childTransactionPromise;
            // Parse output
            let output = undefined;
            try {
                const result = await this.provider.rawApi.decodeTransaction({
                    transaction: (0, models_1.serializeTransaction)(childTransaction),
                    abi: this.abi,
                    method: this.method
                });
                if (result != null) output = this.functionAbi.outputs != null ? (0, models_1.parseTokensObject)(this.functionAbi.outputs, result.output) : {};
            } catch (e) {
                console.error(e);
            }
            // Done
            return {
                parentTransaction: parentTransaction.transaction,
                childTransaction,
                output
            };
        } finally{
            hasTempSubscriber && await subscriber.unsubscribe();
        }
    }
    async estimateFees(args) {
        await this.provider.ensureInitialized();
        const { fees  } = await this.provider.rawApi.estimateFees({
            sender: args.from.toString(),
            recipient: this.address.toString(),
            amount: args.amount,
            payload: {
                abi: this.abi,
                method: this.method,
                params: this.params
            }
        });
        return fees;
    }
    async sendExternal(args) {
        await this.provider.ensureInitialized();
        const method = args.withoutSignature === true ? this.provider.rawApi.sendUnsignedExternalMessage : this.provider.rawApi.sendExternalMessage;
        const { transaction , output  } = await method({
            publicKey: args.publicKey,
            recipient: this.address.toString(),
            stateInit: args.stateInit,
            payload: {
                abi: this.abi,
                method: this.method,
                params: this.params
            },
            local: args.local
        });
        return {
            transaction: (0, models_1.parseTransaction)(transaction),
            output: output != null ? (0, models_1.parseTokensObject)(this.functionAbi.outputs, output) : undefined
        };
    }
    async sendExternalDelayed(args) {
        await this.provider.ensureInitialized();
        const transactions = new utils_1.DelayedTransactions;
        const subscription = await this.provider.subscribe("messageStatusUpdated");
        subscription.on("data", (data)=>{
            if (!data.address.equals(this.address)) return;
            transactions.fillTransaction(data.hash, data.transaction);
        });
        const { message  } = await this.provider.rawApi.sendExternalMessageDelayed({
            publicKey: args.publicKey,
            recipient: this.address.toString(),
            stateInit: args.stateInit,
            payload: {
                abi: this.abi,
                method: this.method,
                params: this.params
            }
        }).catch((e)=>{
            subscription.unsubscribe().catch(console.error);
            throw e;
        });
        const transaction = transactions.waitTransaction(this.address, message.hash).finally(()=>subscription.unsubscribe().catch(console.error));
        return {
            messageHash: message.hash,
            expireAt: message.expireAt,
            transaction
        };
    }
    async call(args = {}) {
        await this.provider.ensureInitialized();
        const { output , code  } = await this.provider.rawApi.runLocal({
            address: this.address.toString(),
            cachedState: args.cachedState,
            responsible: args.responsible,
            functionCall: {
                abi: this.abi,
                method: this.method,
                params: this.params
            }
        });
        if (output == null || code != 0) throw new TvmException(code);
        else return (0, models_1.parseTokensObject)(this.functionAbi.outputs, output);
    }
    async encodeInternal() {
        await this.provider.ensureInitialized();
        const { boc  } = await this.provider.rawApi.encodeInternalInput({
            abi: this.abi,
            method: this.method,
            params: this.params
        });
        return boc;
    }
}

},{"./utils":"03nXq","./models":"jJ5zc"}],"Nqd8k":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"78Hw1":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const nekoton_wasm_1 = __importStar(require("nekoton-wasm")), nt = nekoton_wasm_1;
const core_1 = __importDefault(require("./core"));
let clientInitializationStarted = false;
let notifyClientInitialized;
const initializationPromise = new Promise((resolve, reject)=>{
    notifyClientInitialized = {
        resolve,
        reject
    };
});
core_1.default.ensureNekotonLoaded = (initInput)=>{
    if (!clientInitializationStarted) {
        clientInitializationStarted = true;
        (0, nekoton_wasm_1.default)(initInput).then(notifyClientInitialized.resolve).catch(notifyClientInitialized.reject);
    }
    return initializationPromise;
};
core_1.default.nekoton = nt;
core_1.default.fetch = fetch;
core_1.default.debugLog = console.debug;
__exportStar(require("./client"), exports);

},{"nekoton-wasm":"03JAX","./core":"01TnY","./client":"egeIF"}],"03JAX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
* @param {string} address
* @returns {boolean}
*/ parcelHelpers.export(exports, "checkAddress", ()=>checkAddress);
/**
* @param {string} address
* @returns {string}
*/ parcelHelpers.export(exports, "repackAddress", ()=>repackAddress);
/**
* @param {ClockWithOffset} clock
* @param {string} account_stuff_boc
* @param {string} contract_abi
* @param {string} method
* @param {TokensObject} input
* @param {boolean} responsible
* @returns {ExecutionOutput}
*/ parcelHelpers.export(exports, "runLocal", ()=>runLocal);
/**
* @param {string} account_stuff_boc
* @returns {string}
*/ parcelHelpers.export(exports, "makeFullAccountBoc", ()=>makeFullAccountBoc);
/**
* @param {string} account
* @returns {FullContractState | undefined}
*/ parcelHelpers.export(exports, "parseFullAccountBoc", ()=>parseFullAccountBoc);
/**
* @param {string} config
* @param {string} account
* @param {string} message
* @param {number} utime
* @param {boolean} disable_signature_check
* @returns {TransactionExecutorOutput}
*/ parcelHelpers.export(exports, "executeLocal", ()=>executeLocal);
/**
* @param {string} tvc
* @param {string} contract_abi
* @param {number} workchain_id
* @param {string | undefined} public_key
* @param {TokensObject} init_data
* @returns {ExpectedAddress}
*/ parcelHelpers.export(exports, "getExpectedAddress", ()=>getExpectedAddress);
/**
* @param {string} boc
* @returns {string}
*/ parcelHelpers.export(exports, "getBocHash", ()=>getBocHash);
/**
* @param {Array<AbiParam>} params
* @param {TokensObject} tokens
* @param {string | undefined} abi_version
* @returns {string}
*/ parcelHelpers.export(exports, "packIntoCell", ()=>packIntoCell);
/**
* @param {Array<AbiParam>} params
* @param {string} boc
* @param {boolean} allow_partial
* @param {string | undefined} abi_version
* @returns {TokensObject}
*/ parcelHelpers.export(exports, "unpackFromCell", ()=>unpackFromCell);
/**
* @param {string} boc
* @returns {string | undefined}
*/ parcelHelpers.export(exports, "extractContractData", ()=>extractContractData);
/**
* @param {string} boc
* @returns {string}
*/ parcelHelpers.export(exports, "extractPublicKey", ()=>extractPublicKey);
/**
* @param {string} code
* @returns {string}
*/ parcelHelpers.export(exports, "codeToTvc", ()=>codeToTvc);
/**
* @param {string} code
* @param {string} data
* @returns {string}
*/ parcelHelpers.export(exports, "mergeTvc", ()=>mergeTvc);
/**
* @param {string} tvc
* @returns {StateInit}
*/ parcelHelpers.export(exports, "splitTvc", ()=>splitTvc);
/**
* @param {string} code
* @param {string} salt
* @returns {string}
*/ parcelHelpers.export(exports, "setCodeSalt", ()=>setCodeSalt);
/**
* @param {string} code
* @returns {string | undefined}
*/ parcelHelpers.export(exports, "getCodeSalt", ()=>getCodeSalt);
/**
* @param {string} contract_abi
* @param {string} method
* @param {TokensObject} input
* @returns {string}
*/ parcelHelpers.export(exports, "encodeInternalInput", ()=>encodeInternalInput);
/**
* @param {string | undefined} src
* @param {string} dst
* @param {boolean} bounce
* @param {string | undefined} state_init
* @param {string | undefined} body
* @param {string} amount
* @returns {string}
*/ parcelHelpers.export(exports, "encodeInternalMessage", ()=>encodeInternalMessage);
/**
* @param {string} message_body
* @param {string} contract_abi
* @param {MethodName} method
* @param {boolean} internal
* @returns {DecodedInput | undefined}
*/ parcelHelpers.export(exports, "decodeInput", ()=>decodeInput);
/**
* @param {string} message_body
* @param {string} contract_abi
* @param {MethodName} event
* @returns {DecodedEvent | undefined}
*/ parcelHelpers.export(exports, "decodeEvent", ()=>decodeEvent);
/**
* @param {string} message_body
* @param {string} contract_abi
* @param {MethodName} method
* @returns {DecodedOutput | undefined}
*/ parcelHelpers.export(exports, "decodeOutput", ()=>decodeOutput);
/**
* @param {Transaction} transaction
* @param {string} contract_abi
* @param {MethodName} method
* @returns {DecodedTransaction | undefined}
*/ parcelHelpers.export(exports, "decodeTransaction", ()=>decodeTransaction);
/**
* @param {Transaction} transaction
* @param {string} contract_abi
* @returns {DecodedTransactionEvents}
*/ parcelHelpers.export(exports, "decodeTransactionEvents", ()=>decodeTransactionEvents);
/**
* @param {string} data
* @returns {string}
*/ parcelHelpers.export(exports, "getDataHash", ()=>getDataHash);
/**
* @returns {Ed25519KeyPair}
*/ parcelHelpers.export(exports, "ed25519_generateKeyPair", ()=>ed25519_generateKeyPair);
/**
* @param {string} secret_key
* @param {string} data
* @returns {string}
*/ parcelHelpers.export(exports, "ed25519_sign", ()=>ed25519_sign);
/**
* @param {string} signature
* @returns {ExtendedSignature}
*/ parcelHelpers.export(exports, "extendSignature", ()=>extendSignature);
/**
* @param {string} public_key
* @param {string} data
* @param {string} signature
* @returns {boolean}
*/ parcelHelpers.export(exports, "verifySignature", ()=>verifySignature);
/**
* @param {string} dst
* @param {string | undefined} state_init
* @param {string | undefined} body
* @param {number} expire_at
* @returns {SignedMessage}
*/ parcelHelpers.export(exports, "createRawExternalMessage", ()=>createRawExternalMessage);
/**
* @param {ClockWithOffset} clock
* @param {string} dst
* @param {string} contract_abi
* @param {string} method
* @param {string | undefined} state_init
* @param {TokensObject} input
* @param {number} timeout
* @returns {SignedMessage}
*/ parcelHelpers.export(exports, "createExternalMessageWithoutSignature", ()=>createExternalMessageWithoutSignature);
/**
* @param {ClockWithOffset} clock
* @param {string} dst
* @param {string} contract_abi
* @param {string} method
* @param {string | undefined} state_init
* @param {TokensObject} input
* @param {string} public_key
* @param {number} timeout
* @returns {UnsignedMessage}
*/ parcelHelpers.export(exports, "createExternalMessage", ()=>createExternalMessage);
/**
*/ parcelHelpers.export(exports, "ClockWithOffset", ()=>ClockWithOffset);
/**
*/ parcelHelpers.export(exports, "GenericContract", ()=>GenericContract);
/**
*/ parcelHelpers.export(exports, "GqlConnection", ()=>GqlConnection);
/**
*/ parcelHelpers.export(exports, "GqlQuery", ()=>GqlQuery);
/**
*/ parcelHelpers.export(exports, "JrpcConnection", ()=>JrpcConnection);
/**
*/ parcelHelpers.export(exports, "JrpcQuery", ()=>JrpcQuery);
/**
*/ parcelHelpers.export(exports, "Transport", ()=>Transport);
/**
*/ parcelHelpers.export(exports, "UnsignedMessage", ()=>UnsignedMessage);
parcelHelpers.export(exports, "initSync", ()=>initSync);
var global = arguments[3];
let wasm;
const cachedTextDecoder = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
});
cachedTextDecoder.decode();
let cachedUint8Memory0 = new Uint8Array();
function getUint8Memory0() {
    if (cachedUint8Memory0.byteLength === 0) cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    return cachedUint8Memory0;
}
function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
const heap = new Array(32).fill(undefined);
heap.push(undefined, null, true, false);
let heap_next = heap.length;
function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];
    heap[idx] = obj;
    return idx;
}
function getObject(idx) {
    return heap[idx];
}
function isLikeNone(x) {
    return x === undefined || x === null;
}
let cachedFloat64Memory0 = new Float64Array();
function getFloat64Memory0() {
    if (cachedFloat64Memory0.byteLength === 0) cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer);
    return cachedFloat64Memory0;
}
let cachedInt32Memory0 = new Int32Array();
function getInt32Memory0() {
    if (cachedInt32Memory0.byteLength === 0) cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    return cachedInt32Memory0;
}
let WASM_VECTOR_LEN = 0;
const cachedTextEncoder = new TextEncoder("utf-8");
const encodeString = typeof cachedTextEncoder.encodeInto === "function" ? function(arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
} : function(arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
};
function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }
    let len = arg.length;
    let ptr1 = malloc(len);
    const mem = getUint8Memory0();
    let offset = 0;
    for(; offset < len; offset++){
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr1 + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) arg = arg.slice(offset);
        ptr1 = realloc(ptr1, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr1 + offset, ptr1 + len);
        const ret = encodeString(arg, view);
        offset += ret.written;
    }
    WASM_VECTOR_LEN = offset;
    return ptr1;
}
function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}
function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}
function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == "number" || type == "boolean" || val == null) return `${val}`;
    if (type == "string") return `"${val}"`;
    if (type == "symbol") {
        const description = val.description;
        if (description == null) return "Symbol";
        else return `Symbol(${description})`;
    }
    if (type == "function") {
        const name = val.name;
        if (typeof name == "string" && name.length > 0) return `Function(${name})`;
        else return "Function";
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = "[";
        if (length > 0) debug += debugString(val[0]);
        for(let i = 1; i < length; i++)debug += ", " + debugString(val[i]);
        debug += "]";
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) className = builtInMatches[1];
    else // Failed to match the standard '[object ClassName]'
    return toString.call(val);
    if (className == "Object") // we're a user defined class or Object
    // JSON.stringify avoids problems with cycles, and is generally much
    // easier than looping through ownProperties of `val`.
    try {
        return "Object(" + JSON.stringify(val) + ")";
    } catch (_) {
        return "Object";
    }
    // errors
    if (val instanceof Error) return `${val.name}: ${val.message}\n${val.stack}`;
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}
function makeMutClosure(arg0, arg1, dtor, f) {
    const state = {
        a: arg0,
        b: arg1,
        cnt: 1,
        dtor
    };
    const real = (...args)=>{
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally{
            if (--state.cnt === 0) wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);
            else state.a = a;
        }
    };
    real.original = state;
    return real;
}
function __wbg_adapter_32(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hcb77729c6af9d376(arg0, arg1, addHeapObject(arg2));
}
function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) throw new Error(`expected instance of ${klass.name}`);
    return instance.ptr;
}
function checkAddress(address) {
    const ptr0 = passStringToWasm0(address, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.checkAddress(ptr0, len0);
    return ret !== 0;
}
function repackAddress(address) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(address, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.repackAddress(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        var r3 = getInt32Memory0()[retptr / 4 + 3];
        var ptr1 = r0;
        var len1 = r1;
        if (r3) {
            ptr1 = 0;
            len1 = 0;
            throw takeObject(r2);
        }
        return getStringFromWasm0(ptr1, len1);
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(ptr1, len1);
    }
}
function runLocal(clock, account_stuff_boc, contract_abi, method, input, responsible) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        _assertClass(clock, ClockWithOffset);
        const ptr0 = passStringToWasm0(account_stuff_boc, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(contract_abi, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(method, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        wasm.runLocal(retptr, clock.ptr, ptr0, len0, ptr1, len1, ptr2, len2, addHeapObject(input), responsible);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) throw takeObject(r1);
        return takeObject(r0);
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}
function makeFullAccountBoc(account_stuff_boc) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(account_stuff_boc, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.makeFullAccountBoc(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        var r3 = getInt32Memory0()[retptr / 4 + 3];
        var ptr1 = r0;
        var len1 = r1;
        if (r3) {
            ptr1 = 0;
            len1 = 0;
            throw takeObject(r2);
        }
        return getStringFromWasm0(ptr1, len1);
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(ptr1, len1);
    }
}
function parseFullAccountBoc(account) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(account, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.parseFullAccountBoc(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) throw takeObject(r1);
        return takeObject(r0);
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}
function executeLocal(config, account, message, utime, disable_signature_check) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(config, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(account, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(message, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        wasm.executeLocal(retptr, ptr0, len0, ptr1, len1, ptr2, len2, utime, disable_signature_check);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) throw takeObject(r1);
        return takeObject(r0);
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}
function getExpectedAddress(tvc, contract_abi, workchain_id, public_key, init_data) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(tvc, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(contract_abi, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        var ptr2 = isLikeNone(public_key) ? 0 : passStringToWasm0(public_key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len2 = WASM_VECTOR_LEN;
        wasm.getExpectedAddress(retptr, ptr0, len0, ptr1, len1, workchain_id, ptr2, len2, addHeapObject(init_data));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) throw takeObject(r1);
        return takeObject(r0);
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}
function getBocHash(boc) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(boc, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.getBocHash(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        var r3 = getInt32Memory0()[retptr / 4 + 3];
        var ptr1 = r0;
        var len1 = r1;
        if (r3) {
            ptr1 = 0;
            len1 = 0;
            throw takeObject(r2);
        }
        return getStringFromWasm0(ptr1, len1);
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(ptr1, len1);
    }
}
function packIntoCell(params, tokens, abi_version) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        var ptr0 = isLikeNone(abi_version) ? 0 : passStringToWasm0(abi_version, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.packIntoCell(retptr, addHeapObject(params), addHeapObject(tokens), ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        var r3 = getInt32Memory0()[retptr / 4 + 3];
        var ptr1 = r0;
        var len1 = r1;
        if (r3) {
            ptr1 = 0;
            len1 = 0;
            throw takeObject(r2);
        }
        return getStringFromWasm0(ptr1, len1);
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(ptr1, len1);
    }
}
function unpackFromCell(params, boc, allow_partial, abi_version) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(boc, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(abi_version) ? 0 : passStringToWasm0(abi_version, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        wasm.unpackFromCell(retptr, addHeapObject(params), ptr0, len0, allow_partial, ptr1, len1);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) throw takeObject(r1);
        return takeObject(r0);
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}
function extractContractData(boc) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(boc, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.extractContractData(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        var r3 = getInt32Memory0()[retptr / 4 + 3];
        if (r3) throw takeObject(r2);
        let v1;
        if (r0 !== 0) {
            v1 = getStringFromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 1);
        }
        return v1;
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}
function extractPublicKey(boc) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(boc, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.extractPublicKey(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        var r3 = getInt32Memory0()[retptr / 4 + 3];
        var ptr1 = r0;
        var len1 = r1;
        if (r3) {
            ptr1 = 0;
            len1 = 0;
            throw takeObject(r2);
        }
        return getStringFromWasm0(ptr1, len1);
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(ptr1, len1);
    }
}
function codeToTvc(code) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(code, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.codeToTvc(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        var r3 = getInt32Memory0()[retptr / 4 + 3];
        var ptr1 = r0;
        var len1 = r1;
        if (r3) {
            ptr1 = 0;
            len1 = 0;
            throw takeObject(r2);
        }
        return getStringFromWasm0(ptr1, len1);
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(ptr1, len1);
    }
}
function mergeTvc(code, data) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(code, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(data, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.mergeTvc(retptr, ptr0, len0, ptr1, len1);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        var r3 = getInt32Memory0()[retptr / 4 + 3];
        var ptr2 = r0;
        var len2 = r1;
        if (r3) {
            ptr2 = 0;
            len2 = 0;
            throw takeObject(r2);
        }
        return getStringFromWasm0(ptr2, len2);
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(ptr2, len2);
    }
}
function splitTvc(tvc) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(tvc, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.splitTvc(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) throw takeObject(r1);
        return takeObject(r0);
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}
function setCodeSalt(code, salt) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(code, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(salt, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.setCodeSalt(retptr, ptr0, len0, ptr1, len1);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        var r3 = getInt32Memory0()[retptr / 4 + 3];
        var ptr2 = r0;
        var len2 = r1;
        if (r3) {
            ptr2 = 0;
            len2 = 0;
            throw takeObject(r2);
        }
        return getStringFromWasm0(ptr2, len2);
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(ptr2, len2);
    }
}
function getCodeSalt(code) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(code, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.getCodeSalt(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        var r3 = getInt32Memory0()[retptr / 4 + 3];
        if (r3) throw takeObject(r2);
        let v1;
        if (r0 !== 0) {
            v1 = getStringFromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 1);
        }
        return v1;
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}
function encodeInternalInput(contract_abi, method, input) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(contract_abi, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(method, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.encodeInternalInput(retptr, ptr0, len0, ptr1, len1, addHeapObject(input));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        var r3 = getInt32Memory0()[retptr / 4 + 3];
        var ptr2 = r0;
        var len2 = r1;
        if (r3) {
            ptr2 = 0;
            len2 = 0;
            throw takeObject(r2);
        }
        return getStringFromWasm0(ptr2, len2);
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(ptr2, len2);
    }
}
function encodeInternalMessage(src, dst, bounce, state_init, body, amount) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        var ptr0 = isLikeNone(src) ? 0 : passStringToWasm0(src, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(dst, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        var ptr2 = isLikeNone(state_init) ? 0 : passStringToWasm0(state_init, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len2 = WASM_VECTOR_LEN;
        var ptr3 = isLikeNone(body) ? 0 : passStringToWasm0(body, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len3 = WASM_VECTOR_LEN;
        const ptr4 = passStringToWasm0(amount, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len4 = WASM_VECTOR_LEN;
        wasm.encodeInternalMessage(retptr, ptr0, len0, ptr1, len1, bounce, ptr2, len2, ptr3, len3, ptr4, len4);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        var r3 = getInt32Memory0()[retptr / 4 + 3];
        var ptr5 = r0;
        var len5 = r1;
        if (r3) {
            ptr5 = 0;
            len5 = 0;
            throw takeObject(r2);
        }
        return getStringFromWasm0(ptr5, len5);
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(ptr5, len5);
    }
}
function decodeInput(message_body, contract_abi, method, internal) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(message_body, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(contract_abi, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.decodeInput(retptr, ptr0, len0, ptr1, len1, addHeapObject(method), internal);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) throw takeObject(r1);
        return takeObject(r0);
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}
function decodeEvent(message_body, contract_abi, event) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(message_body, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(contract_abi, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.decodeEvent(retptr, ptr0, len0, ptr1, len1, addHeapObject(event));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) throw takeObject(r1);
        return takeObject(r0);
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}
function decodeOutput(message_body, contract_abi, method) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(message_body, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(contract_abi, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.decodeOutput(retptr, ptr0, len0, ptr1, len1, addHeapObject(method));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) throw takeObject(r1);
        return takeObject(r0);
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}
function decodeTransaction(transaction, contract_abi, method) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(contract_abi, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.decodeTransaction(retptr, addHeapObject(transaction), ptr0, len0, addHeapObject(method));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) throw takeObject(r1);
        return takeObject(r0);
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}
function decodeTransactionEvents(transaction, contract_abi) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(contract_abi, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.decodeTransactionEvents(retptr, addHeapObject(transaction), ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) throw takeObject(r1);
        return takeObject(r0);
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}
function getDataHash(data) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(data, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.getDataHash(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        var r3 = getInt32Memory0()[retptr / 4 + 3];
        var ptr1 = r0;
        var len1 = r1;
        if (r3) {
            ptr1 = 0;
            len1 = 0;
            throw takeObject(r2);
        }
        return getStringFromWasm0(ptr1, len1);
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(ptr1, len1);
    }
}
function ed25519_generateKeyPair() {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.ed25519_generateKeyPair(retptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) throw takeObject(r1);
        return takeObject(r0);
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}
function ed25519_sign(secret_key, data) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(secret_key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(data, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.ed25519_sign(retptr, ptr0, len0, ptr1, len1);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        var r3 = getInt32Memory0()[retptr / 4 + 3];
        var ptr2 = r0;
        var len2 = r1;
        if (r3) {
            ptr2 = 0;
            len2 = 0;
            throw takeObject(r2);
        }
        return getStringFromWasm0(ptr2, len2);
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(ptr2, len2);
    }
}
function extendSignature(signature) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(signature, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.extendSignature(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) throw takeObject(r1);
        return takeObject(r0);
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}
function verifySignature(public_key, data, signature) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(public_key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(data, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(signature, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        wasm.verifySignature(retptr, ptr0, len0, ptr1, len1, ptr2, len2);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) throw takeObject(r1);
        return r0 !== 0;
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}
function createRawExternalMessage(dst, state_init, body, expire_at) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(dst, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(state_init) ? 0 : passStringToWasm0(state_init, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        var ptr2 = isLikeNone(body) ? 0 : passStringToWasm0(body, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len2 = WASM_VECTOR_LEN;
        wasm.createRawExternalMessage(retptr, ptr0, len0, ptr1, len1, ptr2, len2, expire_at);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) throw takeObject(r1);
        return takeObject(r0);
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}
function createExternalMessageWithoutSignature(clock, dst, contract_abi, method, state_init, input, timeout) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        _assertClass(clock, ClockWithOffset);
        const ptr0 = passStringToWasm0(dst, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(contract_abi, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(method, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        var ptr3 = isLikeNone(state_init) ? 0 : passStringToWasm0(state_init, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len3 = WASM_VECTOR_LEN;
        wasm.createExternalMessageWithoutSignature(retptr, clock.ptr, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, addHeapObject(input), timeout);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) throw takeObject(r1);
        return takeObject(r0);
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}
function createExternalMessage(clock, dst, contract_abi, method, state_init, input, public_key, timeout) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        _assertClass(clock, ClockWithOffset);
        const ptr0 = passStringToWasm0(dst, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(contract_abi, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(method, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        var ptr3 = isLikeNone(state_init) ? 0 : passStringToWasm0(state_init, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len3 = WASM_VECTOR_LEN;
        const ptr4 = passStringToWasm0(public_key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len4 = WASM_VECTOR_LEN;
        wasm.createExternalMessage(retptr, clock.ptr, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, addHeapObject(input), ptr4, len4, timeout);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) throw takeObject(r1);
        return UnsignedMessage.__wrap(r0);
    } finally{
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}
function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}
function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}
function __wbg_adapter_163(arg0, arg1, arg2, arg3) {
    wasm.wasm_bindgen__convert__closures__invoke2_mut__hecba896d1563d223(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
}
class ClockWithOffset {
    static __wrap(ptr) {
        const obj = Object.create(ClockWithOffset.prototype);
        obj.ptr = ptr;
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_clockwithoffset_free(ptr);
    }
    /**
    */ constructor(){
        const ret = wasm.clockwithoffset_new();
        return ClockWithOffset.__wrap(ret);
    }
    /**
    * @returns {number}
    */ get nowMs() {
        const ret = wasm.clockwithoffset_nowMs(this.ptr);
        return ret;
    }
    /**
    * @param {number} offset_ms
    */ updateOffset(offset_ms) {
        wasm.clockwithoffset_updateOffset(this.ptr, offset_ms);
    }
    /**
    * @returns {number}
    */ offsetMs() {
        const ret = wasm.clockwithoffset_offsetMs(this.ptr);
        return ret;
    }
}
class GenericContract {
    static __wrap(ptr) {
        const obj = Object.create(GenericContract.prototype);
        obj.ptr = ptr;
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_genericcontract_free(ptr);
    }
    /**
    * @returns {string}
    */ get address() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.genericcontract_address(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally{
            wasm.__wbindgen_add_to_stack_pointer(16);
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @param {SignedMessage} message
    * @returns {Promise<Transaction>}
    */ sendMessageLocally(message) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.genericcontract_sendMessageLocally(retptr, this.ptr, addHeapObject(message));
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) throw takeObject(r1);
            return takeObject(r0);
        } finally{
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {SignedMessage} message
    * @returns {Promise<PendingTransaction>}
    */ sendMessage(message) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.genericcontract_sendMessage(retptr, this.ptr, addHeapObject(message));
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) throw takeObject(r1);
            return takeObject(r0);
        } finally{
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {Promise<void>}
    */ refresh() {
        const ret = wasm.genericcontract_refresh(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {string} block_id
    * @returns {Promise<void>}
    */ handleBlock(block_id) {
        const ptr0 = passStringToWasm0(block_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.genericcontract_handleBlock(this.ptr, ptr0, len0);
        return takeObject(ret);
    }
    /**
    * @param {string} lt
    * @returns {Promise<void>}
    */ preloadTransactions(lt) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passStringToWasm0(lt, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.genericcontract_preloadTransactions(retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) throw takeObject(r1);
            return takeObject(r0);
        } finally{
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {PollingMethod}
    */ get pollingMethod() {
        const ret = wasm.genericcontract_pollingMethod(this.ptr);
        return takeObject(ret);
    }
}
class GqlConnection {
    static __wrap(ptr) {
        const obj = Object.create(GqlConnection.prototype);
        obj.ptr = ptr;
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_gqlconnection_free(ptr);
    }
    /**
    * @param {ClockWithOffset} clock
    * @param {IGqlSender} sender
    */ constructor(clock, sender){
        _assertClass(clock, ClockWithOffset);
        const ret = wasm.gqlconnection_new(clock.ptr, addHeapObject(sender));
        return GqlConnection.__wrap(ret);
    }
    /**
    * @param {string} address
    * @returns {Promise<LatestBlock>}
    */ getLatestBlock(address) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passStringToWasm0(address, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.gqlconnection_getLatestBlock(retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) throw takeObject(r1);
            return takeObject(r0);
        } finally{
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {string} current_block_id
    * @param {string} address
    * @param {number} timeout
    * @returns {Promise<string>}
    */ waitForNextBlock(current_block_id, address, timeout) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passStringToWasm0(current_block_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ptr1 = passStringToWasm0(address, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            wasm.gqlconnection_waitForNextBlock(retptr, this.ptr, ptr0, len0, ptr1, len1, timeout);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) throw takeObject(r1);
            return takeObject(r0);
        } finally{
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
class GqlQuery {
    static __wrap(ptr) {
        const obj = Object.create(GqlQuery.prototype);
        obj.ptr = ptr;
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_gqlquery_free(ptr);
    }
    /**
    * @param {string} data
    */ onReceive(data) {
        const ptr = this.__destroy_into_raw();
        const ptr0 = passStringToWasm0(data, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.gqlquery_onReceive(ptr, ptr0, len0);
    }
    /**
    * @param {any} arg0
    */ onError(arg0) {
        const ptr = this.__destroy_into_raw();
        wasm.gqlquery_onError(ptr, addHeapObject(arg0));
    }
    /**
    */ onTimeout() {
        const ptr = this.__destroy_into_raw();
        wasm.gqlquery_onTimeout(ptr);
    }
}
class JrpcConnection {
    static __wrap(ptr) {
        const obj = Object.create(JrpcConnection.prototype);
        obj.ptr = ptr;
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_jrpcconnection_free(ptr);
    }
    /**
    * @param {ClockWithOffset} clock
    * @param {any} sender
    */ constructor(clock, sender){
        _assertClass(clock, ClockWithOffset);
        const ret = wasm.jrpcconnection_new(clock.ptr, addHeapObject(sender));
        return JrpcConnection.__wrap(ret);
    }
}
class JrpcQuery {
    static __wrap(ptr) {
        const obj = Object.create(JrpcQuery.prototype);
        obj.ptr = ptr;
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_jrpcquery_free(ptr);
    }
    /**
    * @param {string} data
    */ onReceive(data) {
        const ptr = this.__destroy_into_raw();
        const ptr0 = passStringToWasm0(data, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.jrpcquery_onReceive(ptr, ptr0, len0);
    }
    /**
    * @param {any} arg0
    */ onError(arg0) {
        const ptr = this.__destroy_into_raw();
        wasm.jrpcquery_onError(ptr, addHeapObject(arg0));
    }
    /**
    */ onTimeout() {
        const ptr = this.__destroy_into_raw();
        wasm.jrpcquery_onTimeout(ptr);
    }
}
class Transport {
    static __wrap(ptr) {
        const obj = Object.create(Transport.prototype);
        obj.ptr = ptr;
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_transport_free(ptr);
    }
    /**
    * @param {GqlConnection} gql
    * @returns {Transport}
    */ static fromGqlConnection(gql) {
        _assertClass(gql, GqlConnection);
        const ret = wasm.transport_fromGqlConnection(gql.ptr);
        return Transport.__wrap(ret);
    }
    /**
    * @param {JrpcConnection} jrpc
    * @returns {Transport}
    */ static fromJrpcConnection(jrpc) {
        _assertClass(jrpc, JrpcConnection);
        const ret = wasm.transport_fromJrpcConnection(jrpc.ptr);
        return Transport.__wrap(ret);
    }
    /**
    * @param {string} address
    * @param {any} handler
    * @returns {Promise<GenericContract>}
    */ subscribeToGenericContract(address, handler) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passStringToWasm0(address, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.transport_subscribeToGenericContract(retptr, this.ptr, ptr0, len0, addHeapObject(handler));
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) throw takeObject(r1);
            return takeObject(r0);
        } finally{
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {string} address
    * @returns {Promise<FullContractState | undefined>}
    */ getFullContractState(address) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passStringToWasm0(address, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.transport_getFullContractState(retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) throw takeObject(r1);
            return takeObject(r0);
        } finally{
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {string} code_hash
    * @param {number} limit
    * @param {string | undefined} continuation
    * @returns {Promise<AccountsList>}
    */ getAccountsByCodeHash(code_hash, limit, continuation) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passStringToWasm0(code_hash, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            var ptr1 = isLikeNone(continuation) ? 0 : passStringToWasm0(continuation, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            wasm.transport_getAccountsByCodeHash(retptr, this.ptr, ptr0, len0, limit, ptr1, len1);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) throw takeObject(r1);
            return takeObject(r0);
        } finally{
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {string} address
    * @param {string | undefined} continuation
    * @param {number} limit
    * @returns {Promise<TransactionsList>}
    */ getTransactions(address, continuation, limit) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passStringToWasm0(address, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            var ptr1 = isLikeNone(continuation) ? 0 : passStringToWasm0(continuation, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            wasm.transport_getTransactions(retptr, this.ptr, ptr0, len0, ptr1, len1, limit);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) throw takeObject(r1);
            return takeObject(r0);
        } finally{
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {string} hash
    * @returns {Promise<Transaction | undefined>}
    */ getTransaction(hash) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passStringToWasm0(hash, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.transport_getTransaction(retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) throw takeObject(r1);
            return takeObject(r0);
        } finally{
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {string} message_hash
    * @returns {Promise<Transaction | undefined>}
    */ getDstTransaction(message_hash) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passStringToWasm0(message_hash, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.transport_getDstTransaction(retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) throw takeObject(r1);
            return takeObject(r0);
        } finally{
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
class UnsignedMessage {
    static __wrap(ptr) {
        const obj = Object.create(UnsignedMessage.prototype);
        obj.ptr = ptr;
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_unsignedmessage_free(ptr);
    }
    /**
    * @param {ClockWithOffset} clock
    */ refreshTimeout(clock) {
        _assertClass(clock, ClockWithOffset);
        wasm.unsignedmessage_refreshTimeout(this.ptr, clock.ptr);
    }
    /**
    * @returns {number}
    */ expireAt() {
        const ret = wasm.unsignedmessage_expireAt(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {string}
    */ get hash() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.unsignedmessage_hash(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally{
            wasm.__wbindgen_add_to_stack_pointer(16);
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @param {string} signature
    * @returns {SignedMessage}
    */ sign(signature) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passStringToWasm0(signature, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.unsignedmessage_sign(retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) throw takeObject(r1);
            return takeObject(r0);
        } finally{
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {SignedMessage}
    */ signFake() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.unsignedmessage_signFake(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) throw takeObject(r1);
            return takeObject(r0);
        } finally{
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
async function load(module1, imports) {
    if (typeof Response === "function" && module1 instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === "function") try {
            return await WebAssembly.instantiateStreaming(module1, imports);
        } catch (e) {
            if (module1.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
            else throw e;
        }
        const bytes = await module1.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module1, imports);
        if (instance instanceof WebAssembly.Instance) return {
            instance,
            module: module1
        };
        else return instance;
    }
}
function getImports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
        const ret = getStringFromWasm0(arg0, arg1);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_length_6e3bbe7c8bd4dbd8 = function(arg0) {
        const ret = getObject(arg0).length;
        return ret;
    };
    imports.wbg.__wbindgen_is_undefined = function(arg0) {
        const ret = getObject(arg0) === undefined;
        return ret;
    };
    imports.wbg.__wbindgen_number_get = function(arg0, arg1) {
        const obj = getObject(arg1);
        const ret = typeof obj === "number" ? obj : undefined;
        getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
        getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
    };
    imports.wbg.__wbindgen_is_null = function(arg0) {
        const ret = getObject(arg0) === null;
        return ret;
    };
    imports.wbg.__wbindgen_string_get = function(arg0, arg1) {
        const obj = getObject(arg1);
        const ret = typeof obj === "string" ? obj : undefined;
        var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbindgen_is_object = function(arg0) {
        const val = getObject(arg0);
        const ret = typeof val === "object" && val !== null;
        return ret;
    };
    imports.wbg.__wbindgen_is_string = function(arg0) {
        const ret = typeof getObject(arg0) === "string";
        return ret;
    };
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        takeObject(arg0);
    };
    imports.wbg.__wbindgen_number_new = function(arg0) {
        const ret = arg0;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_now_58886682b7e790d7 = function() {
        const ret = Date.now();
        return ret;
    };
    imports.wbg.__wbg_new_8d2af00bc1e329ee = function(arg0, arg1) {
        const ret = new Error(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_0b9bfdd97583284e = function() {
        const ret = new Object();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_send_55c5735308610fc0 = function(arg0, arg1, arg2, arg3, arg4) {
        getObject(arg0).send(getStringFromWasm0(arg1, arg2), GqlQuery.__wrap(arg3), arg4 !== 0);
    };
    imports.wbg.__wbg_send_c4fe5ef5f4851b5a = function(arg0, arg1, arg2, arg3, arg4) {
        getObject(arg0).send(getStringFromWasm0(arg1, arg2), JrpcQuery.__wrap(arg3), arg4 !== 0);
    };
    imports.wbg.__wbg_new_1d9a920c6bfc44a8 = function() {
        const ret = new Array();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_push_740e4b286702d964 = function(arg0, arg1) {
        const ret = getObject(arg0).push(getObject(arg1));
        return ret;
    };
    imports.wbg.__wbg_genericcontract_new = function(arg0) {
        const ret = GenericContract.__wrap(arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_onMessageSent_fc2ded3b8153507a = function(arg0, arg1, arg2) {
        getObject(arg0).onMessageSent(takeObject(arg1), takeObject(arg2));
    };
    imports.wbg.__wbg_onMessageExpired_fbdb4b1a8bb0e7c5 = function(arg0, arg1) {
        getObject(arg0).onMessageExpired(takeObject(arg1));
    };
    imports.wbg.__wbg_onStateChanged_e696a7b987dba9ea = function(arg0, arg1) {
        getObject(arg0).onStateChanged(takeObject(arg1));
    };
    imports.wbg.__wbg_onTransactionsFound_33b7b56c770e2e88 = function(arg0, arg1, arg2) {
        getObject(arg0).onTransactionsFound(takeObject(arg1), takeObject(arg2));
    };
    imports.wbg.__wbg_keys_0702294afaeb6044 = function(arg0) {
        const ret = Object.keys(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_get_57245cc7d7c7619d = function(arg0, arg1) {
        const ret = getObject(arg0)[arg1 >>> 0];
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_boolean_get = function(arg0) {
        const v = getObject(arg0);
        const ret = typeof v === "boolean" ? v ? 1 : 0 : 2;
        return ret;
    };
    imports.wbg.__wbg_isLocal_0cc0f6258c8cf6ca = function(arg0) {
        const ret = getObject(arg0).isLocal();
        return ret;
    };
    imports.wbg.__wbg_new_9962f939219f1820 = function(arg0, arg1) {
        try {
            var state0 = {
                a: arg0,
                b: arg1
            };
            var cb0 = (arg0, arg1)=>{
                const a = state0.a;
                state0.a = 0;
                try {
                    return __wbg_adapter_163(a, state0.b, arg0, arg1);
                } finally{
                    state0.a = a;
                }
            };
            const ret = new Promise(cb0);
            return addHeapObject(ret);
        } finally{
            state0.a = state0.b = 0;
        }
    };
    imports.wbg.__wbg_static_accessor_NODE_MODULE_cf6401cc1091279e = function() {
        const ret = module;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
        const ret = getObject(arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_process_0cc2ada8524d6f83 = function(arg0) {
        const ret = getObject(arg0).process;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_versions_c11acceab27a6c87 = function(arg0) {
        const ret = getObject(arg0).versions;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_node_7ff1ce49caf23815 = function(arg0) {
        const ret = getObject(arg0).node;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_require_a746e79b322b9336 = function() {
        return handleError(function(arg0, arg1, arg2) {
            const ret = getObject(arg0).require(getStringFromWasm0(arg1, arg2));
            return addHeapObject(ret);
        }, arguments);
    };
    imports.wbg.__wbg_crypto_2036bed7c44c25e7 = function(arg0) {
        const ret = getObject(arg0).crypto;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_msCrypto_a21fc88caf1ecdc8 = function(arg0) {
        const ret = getObject(arg0).msCrypto;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_newwithlength_f5933855e4f48a19 = function(arg0) {
        const ret = new Uint8Array(arg0 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_get_765201544a2b6869 = function() {
        return handleError(function(arg0, arg1) {
            const ret = Reflect.get(getObject(arg0), getObject(arg1));
            return addHeapObject(ret);
        }, arguments);
    };
    imports.wbg.__wbg_self_6d479506f72c6a71 = function() {
        return handleError(function() {
            const ret = self.self;
            return addHeapObject(ret);
        }, arguments);
    };
    imports.wbg.__wbg_window_f2557cc78490aceb = function() {
        return handleError(function() {
            const ret = window.window;
            return addHeapObject(ret);
        }, arguments);
    };
    imports.wbg.__wbg_globalThis_7f206bda628d5286 = function() {
        return handleError(function() {
            const ret = globalThis.globalThis;
            return addHeapObject(ret);
        }, arguments);
    };
    imports.wbg.__wbg_global_ba75c50d1cf384f4 = function() {
        return handleError(function() {
            const ret = global.global;
            return addHeapObject(ret);
        }, arguments);
    };
    imports.wbg.__wbg_newnoargs_b5b063fc6c2f0376 = function(arg0, arg1) {
        const ret = new Function(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_call_97ae9d8645dc388b = function() {
        return handleError(function(arg0, arg1) {
            const ret = getObject(arg0).call(getObject(arg1));
            return addHeapObject(ret);
        }, arguments);
    };
    imports.wbg.__wbg_isArray_27c46c67f498e15d = function(arg0) {
        const ret = Array.isArray(getObject(arg0));
        return ret;
    };
    imports.wbg.__wbg_call_168da88779e35f61 = function() {
        return handleError(function(arg0, arg1, arg2) {
            const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
            return addHeapObject(ret);
        }, arguments);
    };
    imports.wbg.__wbg_set_bf3f89b92d5a34bf = function() {
        return handleError(function(arg0, arg1, arg2) {
            const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
            return ret;
        }, arguments);
    };
    imports.wbg.__wbg_randomFillSync_065afffde01daa66 = function() {
        return handleError(function(arg0, arg1, arg2) {
            getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
        }, arguments);
    };
    imports.wbg.__wbg_subarray_58ad4efbb5bcb886 = function(arg0, arg1, arg2) {
        const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getRandomValues_b99eec4244a475bb = function() {
        return handleError(function(arg0, arg1) {
            getObject(arg0).getRandomValues(getObject(arg1));
        }, arguments);
    };
    imports.wbg.__wbg_length_9e1ae1900cb0fbd5 = function(arg0) {
        const ret = getObject(arg0).length;
        return ret;
    };
    imports.wbg.__wbindgen_memory = function() {
        const ret = wasm.memory;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_buffer_3f3d764d4747d564 = function(arg0) {
        const ret = getObject(arg0).buffer;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_8c3f0052272a457a = function(arg0) {
        const ret = new Uint8Array(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_83db9690f9353e79 = function(arg0, arg1, arg2) {
        getObject(arg0).set(getObject(arg1), arg2 >>> 0);
    };
    imports.wbg.__wbindgen_debug_string = function(arg0, arg1) {
        const ret = debugString(getObject(arg1));
        const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbg_then_11f7a54d67b4bfad = function(arg0, arg1) {
        const ret = getObject(arg0).then(getObject(arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_cb_drop = function(arg0) {
        const obj = takeObject(arg0).original;
        if (obj.cnt-- == 1) {
            obj.a = 0;
            return true;
        }
        const ret = false;
        return ret;
    };
    imports.wbg.__wbg_resolve_99fe17964f31ffc0 = function(arg0) {
        const ret = Promise.resolve(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper6437 = function(arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 925, __wbg_adapter_32);
        return addHeapObject(ret);
    };
    return imports;
}
function initMemory(imports, maybe_memory) {}
function finalizeInit(instance, module1) {
    wasm = instance.exports;
    init.__wbindgen_wasm_module = module1;
    cachedFloat64Memory0 = new Float64Array();
    cachedInt32Memory0 = new Int32Array();
    cachedUint8Memory0 = new Uint8Array();
    return wasm;
}
function initSync(module1) {
    const imports = getImports();
    initMemory(imports);
    if (!(module1 instanceof WebAssembly.Module)) module1 = new WebAssembly.Module(module1);
    const instance = new WebAssembly.Instance(module1, imports);
    return finalizeInit(instance, module1);
}
async function init(input) {
    if (typeof input === "undefined") input = new URL(require("17b5be5fd35d37"));
    const imports = getImports();
    if (typeof input === "string" || typeof Request === "function" && input instanceof Request || typeof URL === "function" && input instanceof URL) input = fetch(input);
    initMemory(imports);
    const { instance , module: module1  } = await load(await input, imports);
    return finalizeInit(instance, module1);
}
exports.default = init;

},{"17b5be5fd35d37":"krJS2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"krJS2":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "nekoton_wasm_bg.fd8cc9f3.wasm" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"01TnY":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const core = {
    ensureNekotonLoaded: undefined,
    nekoton: undefined,
    fetch: undefined,
    fetchAgent: ()=>undefined,
    debugLog: undefined
};
exports.default = core;

},{}],"egeIF":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EverscaleStandaloneClient = exports.SUPPORTED_PERMISSIONS = exports.VERSION = exports.DEFAULT_CLIENT_PROPERTIES = exports.Clock = exports.SimpleKeystore = exports.checkConnection = exports.ConnectionError = exports.NETWORK_PRESETS = void 0;
const fast_safe_stringify_1 = __importDefault(require("fast-safe-stringify"));
const core_1 = __importDefault(require("../core"));
const utils_1 = require("./utils");
const ConnectionController_1 = require("./ConnectionController");
const SubscriptionController_1 = require("./SubscriptionController");
const AccountsStorage_1 = require("./AccountsStorage");
var ConnectionController_2 = require("./ConnectionController");
Object.defineProperty(exports, "NETWORK_PRESETS", {
    enumerable: true,
    get: function() {
        return ConnectionController_2.NETWORK_PRESETS;
    }
});
var ConnectionController_3 = require("./ConnectionController");
Object.defineProperty(exports, "ConnectionError", {
    enumerable: true,
    get: function() {
        return ConnectionController_3.ConnectionError;
    }
});
Object.defineProperty(exports, "checkConnection", {
    enumerable: true,
    get: function() {
        return ConnectionController_3.checkConnection;
    }
});
__exportStar(require("./AccountsStorage"), exports);
var keystore_1 = require("./keystore");
Object.defineProperty(exports, "SimpleKeystore", {
    enumerable: true,
    get: function() {
        return keystore_1.SimpleKeystore;
    }
});
var clock_1 = require("./clock");
Object.defineProperty(exports, "Clock", {
    enumerable: true,
    get: function() {
        return clock_1.Clock;
    }
});
const { ensureNekotonLoaded , nekoton  } = core_1.default;
function validateMessageProperties(message) {
    const m = message || {};
    return {
        retryCount: m.retryCount != null ? Math.max(1, ~~m.retryCount) : 5,
        timeout: m.timeout != null ? Math.max(1, ~~m.timeout) : 60,
        timeoutGrowFactor: m.timeoutGrowFactor || 1.2,
        retryTransfers: true
    };
}
/**
 * @category Client
 */ exports.DEFAULT_CLIENT_PROPERTIES = {
    connection: ConnectionController_1.DEFAULT_NETWORK_GROUP
};
/**
 * @category Client
 */ exports.VERSION = "0.2.25";
/**
 * @category Client
 */ exports.SUPPORTED_PERMISSIONS = [
    "basic",
    "accountInteraction"
];
/**
 * @category Client
 */ class EverscaleStandaloneClient extends utils_1.SafeEventEmitter {
    constructor(ctx){
        super();
        this._handlers = {
            requestPermissions,
            changeAccount,
            disconnect,
            subscribe,
            unsubscribe,
            unsubscribeAll,
            getProviderState,
            getFullContractState,
            getAccountsByCodeHash,
            getTransactions,
            getTransaction,
            findTransaction,
            runLocal,
            getExpectedAddress,
            getBocHash,
            packIntoCell,
            unpackFromCell,
            extractPublicKey,
            codeToTvc,
            mergeTvc,
            splitTvc,
            setCodeSalt,
            getCodeSalt,
            encodeInternalInput,
            decodeInput,
            decodeOutput,
            decodeEvent,
            decodeTransaction,
            decodeTransactionEvents,
            verifySignature,
            sendUnsignedExternalMessage,
            // addAsset, // not supported
            signData,
            signDataRaw,
            // encryptData, // not supported
            // decryptData, // not supported
            // estimateFees, // not supported
            sendMessage,
            sendMessageDelayed,
            sendExternalMessage,
            sendExternalMessageDelayed
        };
        this._context = ctx;
    }
    static async create(params) {
        await ensureNekotonLoaded(params.initInput);
        // NOTE: capture client inside notify using wrapper object
        const notificationContext = {};
        const notify = (method, params)=>{
            var _a;
            (_a = notificationContext.client) === null || _a === void 0 || _a.emit(method, params);
        };
        const clock = new core_1.default.nekoton.ClockWithOffset();
        if (params.clock != null) {
            params.clock["impls"].push(clock);
            clock.updateOffset(params.clock.offset);
        }
        try {
            const connectionController = await (0, ConnectionController_1.createConnectionController)(clock, params.connection);
            const subscriptionController = new SubscriptionController_1.SubscriptionController(connectionController, notify);
            const client = new EverscaleStandaloneClient({
                permissions: {},
                connectionController,
                subscriptionController,
                properties: {
                    message: validateMessageProperties(params.message)
                },
                keystore: params.keystore,
                accountsStorage: params.accountsStorage,
                clock,
                notify
            });
            // NOTE: WeakRef is not working here, so hope it will be garbage collected
            notificationContext.client = client;
            return client;
        } catch (e) {
            if (params.clock != null) params.clock["impls"].pop();
            clock.free();
            throw e;
        }
    }
    request(req) {
        const handler = this._handlers[req.method];
        if (handler == null) throw invalidRequest(req, `Method '${req.method}' is not supported by standalone provider`);
        return handler(this._context, req);
    }
    addListener(eventName, listener) {
        return super.addListener(eventName, listener);
    }
    removeListener(eventName, listener) {
        return super.removeListener(eventName, listener);
    }
    on(eventName, listener) {
        return super.on(eventName, listener);
    }
    once(eventName, listener) {
        return super.once(eventName, listener);
    }
    prependListener(eventName, listener) {
        return super.prependListener(eventName, listener);
    }
    prependOnceListener(eventName, listener) {
        return super.prependOnceListener(eventName, listener);
    }
}
exports.EverscaleStandaloneClient = EverscaleStandaloneClient;
const requestPermissions = async (ctx, req)=>{
    requireParams(req);
    const { permissions  } = req.params;
    requireArray(req, req.params, "permissions");
    const newPermissions = {
        ...ctx.permissions
    };
    for (const permission of permissions){
        if (permission === "basic" || permission === "tonClient") newPermissions.basic = true;
        else if (permission === "accountInteraction") {
            if (newPermissions.accountInteraction != null) continue;
            newPermissions.accountInteraction = await makeAccountInteractionPermission(req, ctx);
        } else throw invalidRequest(req, `Permission '${permission}' is not supported by standalone provider`);
    }
    ctx.permissions = newPermissions;
    // NOTE: be sure to return object copy to prevent adding new permissions
    const permissionsCopy = JSON.parse(JSON.stringify(newPermissions));
    ctx.notify("permissionsChanged", {
        permissions: permissionsCopy
    });
    return permissionsCopy;
};
const changeAccount = async (ctx, req)=>{
    requireAccountsStorage(req, ctx);
    const newPermissions = {
        ...ctx.permissions
    };
    newPermissions.accountInteraction = await makeAccountInteractionPermission(req, ctx);
    ctx.permissions = newPermissions;
    // NOTE: be sure to return object copy to prevent adding new permissions
    const permissionsCopy = JSON.parse(JSON.stringify(newPermissions));
    ctx.notify("permissionsChanged", {
        permissions: permissionsCopy
    });
    return permissionsCopy;
};
const disconnect = async (ctx, _req)=>{
    ctx.permissions = {};
    await ctx.subscriptionController.unsubscribeFromAllContracts();
    ctx.notify("permissionsChanged", {
        permissions: {}
    });
    return undefined;
};
const subscribe = async (ctx, req)=>{
    requireParams(req);
    const { address , subscriptions  } = req.params;
    requireString(req, req.params, "address");
    requireOptionalObject(req, req.params, "subscriptions");
    let repackedAddress;
    try {
        repackedAddress = nekoton.repackAddress(address);
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
    try {
        return await ctx.subscriptionController.subscribeToContract(repackedAddress, subscriptions);
    } catch (e1) {
        throw invalidRequest(req, e1.toString());
    }
};
const unsubscribe = async (ctx, req)=>{
    requireParams(req);
    const { address  } = req.params;
    requireString(req, req.params, "address");
    let repackedAddress;
    try {
        repackedAddress = nekoton.repackAddress(address);
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
    await ctx.subscriptionController.unsubscribeFromContract(repackedAddress);
    return undefined;
};
const unsubscribeAll = async (ctx, _req)=>{
    await ctx.subscriptionController.unsubscribeFromAllContracts();
    return undefined;
};
const getProviderState = async (ctx, req)=>{
    const transport = ctx.connectionController.initializedTransport;
    if (transport == null) throw invalidRequest(req, "Connection controller was not initialized");
    const version = exports.VERSION;
    return {
        version,
        numericVersion: (0, utils_1.convertVersionToInt32)(version),
        networkId: transport.id,
        selectedConnection: transport.group,
        supportedPermissions: [
            ...exports.SUPPORTED_PERMISSIONS
        ],
        permissions: JSON.parse(JSON.stringify(ctx.permissions)),
        subscriptions: ctx.subscriptionController.subscriptionStates
    };
};
const getFullContractState = async (ctx, req)=>{
    requireParams(req);
    const { address  } = req.params;
    requireString(req, req.params, "address");
    const { connectionController  } = ctx;
    try {
        return connectionController.use(async ({ data: { transport  }  })=>({
                state: await transport.getFullContractState(address)
            }));
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
};
const getAccountsByCodeHash = async (ctx, req)=>{
    requireParams(req);
    const { codeHash , limit , continuation  } = req.params;
    requireString(req, req.params, "codeHash");
    requireOptionalNumber(req, req.params, "limit");
    requireOptionalString(req, req.params, "continuation");
    const { connectionController  } = ctx;
    try {
        return connectionController.use(({ data: { transport  }  })=>transport.getAccountsByCodeHash(codeHash, limit || 50, continuation));
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
};
const getTransactions = async (ctx, req)=>{
    requireParams(req);
    const { address , continuation , limit  } = req.params;
    requireString(req, req.params, "address");
    requireOptional(req, req.params, "continuation", requireTransactionId);
    requireOptionalNumber(req, req.params, "limit");
    const { connectionController  } = ctx;
    try {
        return connectionController.use(({ data: { transport  }  })=>transport.getTransactions(address, continuation === null || continuation === void 0 ? void 0 : continuation.lt, limit || 50));
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
};
const getTransaction = async (ctx, req)=>{
    requireParams(req);
    const { hash  } = req.params;
    requireString(req, req.params, "hash");
    const { connectionController  } = ctx;
    try {
        return {
            transaction: await connectionController.use(({ data: { transport  }  })=>transport.getTransaction(hash))
        };
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
};
const findTransaction = async (ctx, req)=>{
    requireParams(req);
    const { inMessageHash  } = req.params;
    requireOptional(req, req.params, "inMessageHash", requireString);
    const { connectionController  } = ctx;
    // TODO: add more filters
    if (inMessageHash == null) return {
        transaction: undefined
    };
    try {
        return {
            transaction: await connectionController.use(({ data: { transport  }  })=>transport.getDstTransaction(inMessageHash))
        };
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
};
const runLocal = async (ctx, req)=>{
    requireParams(req);
    const { address , cachedState , responsible , functionCall  } = req.params;
    requireString(req, req.params, "address");
    requireOptional(req, req.params, "cachedState", requireContractState);
    requireOptionalBoolean(req, req.params, "responsible");
    requireFunctionCall(req, req.params, "functionCall");
    const { clock , connectionController  } = ctx;
    let contractState = cachedState;
    if (contractState == null) contractState = await connectionController.use(async ({ data: { transport  }  })=>transport.getFullContractState(address));
    if (contractState == null) throw invalidRequest(req, "Account not found");
    if (!contractState.isDeployed || contractState.lastTransactionId == null) throw invalidRequest(req, "Account is not deployed");
    try {
        const { output , code  } = nekoton.runLocal(clock, contractState.boc, functionCall.abi, functionCall.method, functionCall.params, responsible || false);
        return {
            output,
            code
        };
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
};
const getExpectedAddress = async (_ctx, req)=>{
    requireParams(req);
    const { tvc , abi , workchain , publicKey , initParams  } = req.params;
    requireString(req, req.params, "tvc");
    requireString(req, req.params, "abi");
    requireOptionalNumber(req, req.params, "workchain");
    requireOptionalString(req, req.params, "publicKey");
    try {
        return nekoton.getExpectedAddress(tvc, abi, workchain || 0, publicKey, initParams);
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
};
const getBocHash = async (_ctx, req)=>{
    requireParams(req);
    const { boc  } = req.params;
    requireString(req, req.params, "boc");
    try {
        return {
            hash: nekoton.getBocHash(boc)
        };
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
};
const packIntoCell = async (_ctx, req)=>{
    requireParams(req);
    const { structure , data , abiVersion  } = req.params;
    requireArray(req, req.params, "structure");
    requireOptional(req, req.params, "abiVersion", requireString);
    try {
        return {
            boc: nekoton.packIntoCell(structure, data, abiVersion)
        };
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
};
const unpackFromCell = async (_ctx, req)=>{
    requireParams(req);
    const { structure , boc , allowPartial , abiVersion  } = req.params;
    requireArray(req, req.params, "structure");
    requireString(req, req.params, "boc");
    requireBoolean(req, req.params, "allowPartial");
    requireOptional(req, req.params, "abiVersion", requireString);
    try {
        return {
            data: nekoton.unpackFromCell(structure, boc, allowPartial, abiVersion)
        };
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
};
const extractPublicKey = async (_ctx, req)=>{
    requireParams(req);
    const { boc  } = req.params;
    requireString(req, req.params, "boc");
    try {
        return {
            publicKey: nekoton.extractPublicKey(boc)
        };
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
};
const codeToTvc = async (_ctx, req)=>{
    requireParams(req);
    const { code  } = req.params;
    requireString(req, req.params, "code");
    try {
        return {
            tvc: nekoton.codeToTvc(code)
        };
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
};
const mergeTvc = async (_ctx, req)=>{
    requireParams(req);
    const { code , data  } = req.params;
    requireString(req, req.params, "code");
    requireString(req, req.params, "data");
    try {
        return {
            tvc: nekoton.mergeTvc(code, data)
        };
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
};
const splitTvc = async (_ctx, req)=>{
    requireParams(req);
    const { tvc  } = req.params;
    requireString(req, req.params, "tvc");
    try {
        return nekoton.splitTvc(tvc);
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
};
const setCodeSalt = async (_ctx, req)=>{
    requireParams(req);
    const { code , salt  } = req.params;
    requireString(req, req.params, "code");
    requireString(req, req.params, "salt");
    try {
        return {
            code: nekoton.setCodeSalt(code, salt)
        };
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
};
const getCodeSalt = async (_ctx, req)=>{
    requireParams(req);
    const { code  } = req.params;
    requireString(req, req.params, "code");
    try {
        return {
            salt: nekoton.getCodeSalt(code)
        };
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
};
const encodeInternalInput = async (_ctx, req)=>{
    requireParams(req);
    requireFunctionCall(req, req, "params");
    const { abi , method , params  } = req.params;
    try {
        return {
            boc: nekoton.encodeInternalInput(abi, method, params)
        };
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
};
const decodeInput = async (_ctx, req)=>{
    requireParams(req);
    const { body , abi , method , internal  } = req.params;
    requireString(req, req.params, "body");
    requireString(req, req.params, "abi");
    requireMethodOrArray(req, req.params, "method");
    requireBoolean(req, req.params, "internal");
    try {
        return nekoton.decodeInput(body, abi, method, internal) || null;
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
};
const decodeOutput = async (_ctx, req)=>{
    requireParams(req);
    const { body , abi , method  } = req.params;
    requireString(req, req.params, "body");
    requireString(req, req.params, "abi");
    requireMethodOrArray(req, req.params, "method");
    try {
        return nekoton.decodeOutput(body, abi, method) || null;
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
};
const decodeEvent = async (_ctx, req)=>{
    requireParams(req);
    const { body , abi , event  } = req.params;
    requireString(req, req.params, "body");
    requireString(req, req.params, "abi");
    requireMethodOrArray(req, req.params, "event");
    try {
        return nekoton.decodeEvent(body, abi, event) || null;
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
};
const decodeTransaction = async (_ctx, req)=>{
    requireParams(req);
    const { transaction , abi , method  } = req.params;
    requireString(req, req.params, "abi");
    requireMethodOrArray(req, req.params, "method");
    try {
        return nekoton.decodeTransaction(transaction, abi, method) || null;
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
};
const decodeTransactionEvents = async (_ctx, req)=>{
    requireParams(req);
    const { transaction , abi  } = req.params;
    requireString(req, req.params, "abi");
    try {
        return {
            events: nekoton.decodeTransactionEvents(transaction, abi)
        };
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
};
const verifySignature = async (_ctx, req)=>{
    requireParams(req);
    const { publicKey , dataHash , signature  } = req.params;
    requireString(req, req.params, "publicKey");
    requireString(req, req.params, "dataHash");
    requireString(req, req.params, "signature");
    try {
        return {
            isValid: nekoton.verifySignature(publicKey, dataHash, signature)
        };
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
};
const sendUnsignedExternalMessage = async (ctx, req)=>{
    requireParams(req);
    const { recipient , stateInit , payload , local  } = req.params;
    requireString(req, req.params, "recipient");
    requireOptionalString(req, req.params, "stateInit");
    requireOptionalRawFunctionCall(req, req.params, "payload");
    requireOptionalBoolean(req, req.params, "local");
    let repackedRecipient;
    try {
        repackedRecipient = nekoton.repackAddress(recipient);
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
    const { clock , subscriptionController , properties  } = ctx;
    const makeSignedMessage = (timeout)=>{
        try {
            if (typeof payload === "string" || payload == null) {
                const expireAt = ~~(clock.nowMs / 1000) + timeout;
                return nekoton.createRawExternalMessage(repackedRecipient, stateInit, payload, expireAt);
            } else return nekoton.createExternalMessageWithoutSignature(clock, repackedRecipient, payload.abi, payload.method, stateInit, payload.params, timeout);
        } catch (e) {
            throw invalidRequest(req, e.toString());
        }
    };
    const handleTransaction = (transaction)=>{
        let output;
        try {
            if (typeof payload === "object" && true) {
                const decoded = nekoton.decodeTransaction(transaction, payload.abi, payload.method);
                output = decoded === null || decoded === void 0 ? void 0 : decoded.output;
            }
        } catch (_) {}
        return {
            transaction,
            output
        };
    };
    // Force local execution
    if (local === true) {
        const signedMessage = makeSignedMessage(60);
        const transaction = await subscriptionController.sendMessageLocally(repackedRecipient, signedMessage);
        return handleTransaction(transaction);
    }
    // Send and wait with several retries
    let timeout = properties.message.timeout;
    for(let retry = 0; retry < properties.message.retryCount; ++retry){
        const signedMessage1 = makeSignedMessage(timeout);
        const transaction1 = await subscriptionController.sendMessage(repackedRecipient, signedMessage1);
        if (transaction1 == null) {
            timeout *= properties.message.timeoutGrowFactor;
            continue;
        }
        return handleTransaction(transaction1);
    }
    // Execute locally
    const errorMessage = "Message expired";
    const signedMessage2 = makeSignedMessage(60);
    const transaction2 = await subscriptionController.sendMessageLocally(repackedRecipient, signedMessage2).catch((e)=>{
        throw invalidRequest(req, `${errorMessage}. ${e.toString()}`);
    });
    const additionalText = transaction2.exitCode != null ? `. Possible exit code: ${transaction2.exitCode}` : "";
    throw invalidRequest(req, `${errorMessage}${additionalText}`);
};
const signData = async (ctx, req)=>{
    requireKeystore(req, ctx);
    requireParams(req);
    const { publicKey , data  } = req.params;
    requireString(req, req.params, "publicKey");
    requireString(req, req.params, "data");
    const { keystore  } = ctx;
    const signer = await keystore.getSigner(publicKey);
    if (signer == null) throw invalidRequest(req, "Signer not found for public key");
    try {
        const dataHash = nekoton.getDataHash(data);
        return {
            dataHash,
            ...await signer.sign(dataHash).then(nekoton.extendSignature)
        };
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
};
const signDataRaw = async (ctx, req)=>{
    requireKeystore(req, ctx);
    requireParams(req);
    const { publicKey , data  } = req.params;
    requireString(req, req.params, "publicKey");
    requireString(req, req.params, "data");
    const { keystore  } = ctx;
    const signer = await keystore.getSigner(publicKey);
    if (signer == null) throw invalidRequest(req, "Signer not found for public key");
    try {
        return await signer.sign(data).then(nekoton.extendSignature);
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
};
const sendMessage = async (ctx, req)=>{
    requireKeystore(req, ctx);
    requireAccountsStorage(req, ctx);
    requireParams(req);
    const { sender , recipient , amount , bounce , payload  } = req.params;
    requireString(req, req.params, "sender");
    requireString(req, req.params, "recipient");
    requireString(req, req.params, "amount");
    requireBoolean(req, req.params, "bounce");
    requireOptional(req, req.params, "payload", requireFunctionCall);
    const { clock , properties , subscriptionController , connectionController , keystore , accountsStorage  } = ctx;
    let repackedSender;
    let repackedRecipient;
    let account;
    try {
        repackedSender = nekoton.repackAddress(sender);
        repackedRecipient = nekoton.repackAddress(recipient);
        account = await accountsStorage.getAccount(repackedSender).then((account)=>{
            if (account != null) return account;
            else throw new Error("Sender not found");
        });
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
    const makeSignedMessage = async (timeout)=>{
        try {
            return account.prepareMessage({
                recipient: repackedRecipient,
                amount,
                bounce,
                payload,
                stateInit: undefined,
                timeout
            }, new AccountsStorage_1.AccountsStorageContext(clock, connectionController, nekoton, keystore));
        } catch (e) {
            throw invalidRequest(req, e.toString());
        }
    };
    // Send and wait with several retries
    let timeout = properties.message.timeout;
    // Set `retryCount` if not explicitly disabled
    const retryCount = properties.message.retryTransfers !== false ? properties.message.retryCount : 1;
    for(let retry = 0; retry < retryCount; ++retry){
        const signedMessage = await makeSignedMessage(timeout);
        const transaction = await subscriptionController.sendMessage(repackedSender, signedMessage);
        if (transaction == null) {
            timeout *= properties.message.timeoutGrowFactor;
            continue;
        }
        return {
            transaction
        };
    }
    // Execute locally
    const errorMessage = "Message expired";
    const signedMessage1 = await makeSignedMessage(60);
    const transaction1 = await subscriptionController.sendMessageLocally(repackedSender, signedMessage1).catch((e)=>{
        throw invalidRequest(req, `${errorMessage}. ${e.toString()}`);
    });
    const additionalText = transaction1.exitCode != null ? `. Possible exit code: ${transaction1.exitCode}` : "";
    throw invalidRequest(req, `${errorMessage}${additionalText}`);
};
const sendMessageDelayed = async (ctx, req)=>{
    requireKeystore(req, ctx);
    requireAccountsStorage(req, ctx);
    requireParams(req);
    const { sender , recipient , amount , bounce , payload  } = req.params;
    requireString(req, req.params, "sender");
    requireString(req, req.params, "recipient");
    requireString(req, req.params, "amount");
    requireBoolean(req, req.params, "bounce");
    requireOptional(req, req.params, "payload", requireFunctionCall);
    const { clock , subscriptionController , connectionController , keystore , accountsStorage , notify  } = ctx;
    let repackedSender;
    let repackedRecipient;
    try {
        repackedSender = nekoton.repackAddress(sender);
        repackedRecipient = nekoton.repackAddress(recipient);
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
    let signedMessage;
    try {
        const account = await accountsStorage.getAccount(repackedSender);
        if (account == null) throw new Error("Sender not found");
        signedMessage = await account.prepareMessage({
            recipient: repackedRecipient,
            amount,
            bounce,
            payload,
            stateInit: undefined,
            timeout: 60
        }, new AccountsStorage_1.AccountsStorageContext(clock, connectionController, nekoton, keystore));
    } catch (e1) {
        throw invalidRequest(req, e1.toString());
    }
    subscriptionController.sendMessage(repackedSender, signedMessage).then((transaction)=>{
        notify("messageStatusUpdated", {
            address: repackedSender,
            hash: signedMessage.hash,
            transaction
        });
    }).catch(console.error);
    return {
        message: {
            account: repackedSender,
            hash: signedMessage.hash,
            expireAt: signedMessage.expireAt
        }
    };
};
const sendExternalMessage = async (ctx, req)=>{
    requireKeystore(req, ctx);
    requireParams(req);
    const { publicKey , recipient , stateInit , payload , local  } = req.params;
    requireString(req, req.params, "publicKey");
    requireString(req, req.params, "recipient");
    requireOptionalString(req, req.params, "stateInit");
    requireFunctionCall(req, req.params, "payload");
    requireOptionalBoolean(req, req.params, "local");
    let repackedRecipient;
    try {
        repackedRecipient = nekoton.repackAddress(recipient);
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
    const { clock , subscriptionController , keystore , properties  } = ctx;
    const signer = await keystore.getSigner(publicKey);
    if (signer == null) throw invalidRequest(req, "Signer not found for public key");
    const makeSignedMessage = async (timeout)=>{
        let unsignedMessage;
        try {
            unsignedMessage = nekoton.createExternalMessage(clock, repackedRecipient, payload.abi, payload.method, stateInit, payload.params, publicKey, timeout);
        } catch (e) {
            throw invalidRequest(req, e.toString());
        }
        try {
            const signature = await signer.sign(unsignedMessage.hash);
            return unsignedMessage.sign(signature);
        } catch (e1) {
            throw invalidRequest(req, e1.toString());
        } finally{
            unsignedMessage.free();
        }
    };
    const handleTransaction = (transaction)=>{
        let output;
        try {
            const decoded = nekoton.decodeTransaction(transaction, payload.abi, payload.method);
            output = decoded === null || decoded === void 0 ? void 0 : decoded.output;
        } catch (_) {}
        return {
            transaction,
            output
        };
    };
    // Force local execution
    if (local === true) {
        const signedMessage = await makeSignedMessage(60);
        const transaction = await subscriptionController.sendMessageLocally(repackedRecipient, signedMessage);
        return handleTransaction(transaction);
    }
    // Send and wait with several retries
    let timeout = properties.message.timeout;
    for(let retry = 0; retry < properties.message.retryCount; ++retry){
        const signedMessage1 = await makeSignedMessage(timeout);
        const transaction1 = await subscriptionController.sendMessage(repackedRecipient, signedMessage1);
        if (transaction1 == null) {
            timeout *= properties.message.timeoutGrowFactor;
            continue;
        }
        return handleTransaction(transaction1);
    }
    // Execute locally
    const errorMessage = "Message expired";
    const signedMessage2 = await makeSignedMessage(60);
    const transaction2 = await subscriptionController.sendMessageLocally(repackedRecipient, signedMessage2).catch((e)=>{
        throw invalidRequest(req, `${errorMessage}. ${e.toString()}`);
    });
    const additionalText = transaction2.exitCode != null ? `. Possible exit code: ${transaction2.exitCode}` : "";
    throw invalidRequest(req, `${errorMessage}${additionalText}`);
};
const sendExternalMessageDelayed = async (ctx, req)=>{
    requireKeystore(req, ctx);
    requireParams(req);
    const { publicKey , recipient , stateInit , payload  } = req.params;
    requireString(req, req.params, "publicKey");
    requireString(req, req.params, "recipient");
    requireOptionalString(req, req.params, "stateInit");
    requireFunctionCall(req, req.params, "payload");
    let repackedRecipient;
    try {
        repackedRecipient = nekoton.repackAddress(recipient);
    } catch (e) {
        throw invalidRequest(req, e.toString());
    }
    const { clock , subscriptionController , keystore , properties , notify  } = ctx;
    const signer = await keystore.getSigner(publicKey);
    if (signer == null) throw invalidRequest(req, "Signer not found for public key");
    let unsignedMessage;
    try {
        unsignedMessage = nekoton.createExternalMessage(clock, repackedRecipient, payload.abi, payload.method, stateInit, payload.params, publicKey, properties.message.timeout);
    } catch (e1) {
        throw invalidRequest(req, e1.toString());
    }
    let signedMessage;
    try {
        const signature = await signer.sign(unsignedMessage.hash);
        signedMessage = unsignedMessage.sign(signature);
    } catch (e2) {
        throw invalidRequest(req, e2.toString());
    } finally{
        unsignedMessage.free();
    }
    subscriptionController.sendMessage(repackedRecipient, signedMessage).then((transaction)=>{
        notify("messageStatusUpdated", {
            address: repackedRecipient,
            hash: signedMessage.hash,
            transaction
        });
    }).catch(console.error);
    return {
        message: {
            account: repackedRecipient,
            hash: signedMessage.hash,
            expireAt: signedMessage.expireAt
        }
    };
};
function requireKeystore(req, context) {
    if (context.keystore == null) throw invalidRequest(req, "Keystore not found");
}
function requireAccountsStorage(req, context) {
    if (context.accountsStorage == null) throw invalidRequest(req, "AccountsStorage not found");
}
function requireParams(req) {
    if (req.params == null || typeof req.params !== "object") throw invalidRequest(req, "required params object");
}
function requireObject(req, object, key) {
    const property = object[key];
    if (typeof property !== "object") throw invalidRequest(req, `'${String(key)}' must be an object`);
}
function requireOptionalObject(req, object, key) {
    const property = object[key];
    if (property != null && typeof property !== "object") throw invalidRequest(req, `'${String(key)}' must be an object if specified`);
}
function requireBoolean(req, object, key) {
    const property = object[key];
    if (typeof property !== "boolean") throw invalidRequest(req, `'${String(key)}' must be a boolean`);
}
function requireOptionalBoolean(req, object, key) {
    const property = object[key];
    if (property != null && typeof property !== "boolean") throw invalidRequest(req, `'${String(key)}' must be a boolean if specified`);
}
function requireString(req, object, key) {
    const property = object[key];
    if (typeof property !== "string" || property.length === 0) throw invalidRequest(req, `'${String(key)}' must be non-empty string`);
}
function requireOptionalString(req, object, key) {
    const property = object[key];
    if (property != null && (typeof property !== "string" || property.length === 0)) throw invalidRequest(req, `'${String(key)}' must be a non-empty string if provided`);
}
function requireOptionalNumber(req, object, key) {
    const property = object[key];
    if (property != null && typeof property !== "number") throw invalidRequest(req, `'${String(key)}' must be a number if provider`);
}
function requireArray(req, object, key) {
    const property = object[key];
    if (!Array.isArray(property)) throw invalidRequest(req, `'${String(key)}' must be an array`);
}
function requireOptional(req, object, key, predicate) {
    const property = object[key];
    if (property != null) predicate(req, object, key);
}
function requireTransactionId(req, object, key) {
    requireObject(req, object, key);
    const property = object[key];
    requireString(req, property, "lt");
    requireString(req, property, "hash");
}
function requireLastTransactionId(req, object, key) {
    requireObject(req, object, key);
    const property = object[key];
    requireBoolean(req, property, "isExact");
    requireString(req, property, "lt");
    requireOptionalString(req, property, "hash");
}
function requireContractState(req, object, key) {
    requireObject(req, object, key);
    const property = object[key];
    requireString(req, property, "balance");
    requireOptional(req, property, "lastTransactionId", requireLastTransactionId);
    requireBoolean(req, property, "isDeployed");
}
function requireFunctionCall(req, object, key) {
    requireObject(req, object, key);
    const property = object[key];
    requireString(req, property, "abi");
    requireString(req, property, "method");
    requireObject(req, property, "params");
}
function requireOptionalRawFunctionCall(req, object, key) {
    const property = object[key];
    if (typeof property === "string" || property == null) return;
    else if (typeof property === "object") {
        requireString(req, property, "abi");
        requireString(req, property, "method");
        requireObject(req, property, "params");
    } else throw invalidRequest(req, `'${String(key)}' must be a function all or optional string`);
}
function requireMethodOrArray(req, object, key) {
    const property = object[key];
    if (property != null && typeof property !== "string" && !Array.isArray(property)) throw invalidRequest(req, `'${String(key)}' must be a method name or an array of possible names`);
}
async function makeAccountInteractionPermission(req, ctx) {
    requireAccountsStorage(req, ctx);
    const defaultAccount = ctx.accountsStorage.defaultAccount;
    if (defaultAccount == null) throw invalidRequest(req, "Default account not set in accounts storage");
    const account = await ctx.accountsStorage.getAccount(defaultAccount);
    if (account == null) throw invalidRequest(req, "Default account not found");
    const publicKey = await account.fetchPublicKey(new AccountsStorage_1.AccountsStorageContext(ctx.clock, ctx.connectionController, nekoton));
    return {
        address: account.address.toString(),
        publicKey,
        contractType: "unknown"
    };
}
const invalidRequest = (req, message, data)=>new NekotonRpcError(2, `${req.method}: ${message}`, data);
class NekotonRpcError extends Error {
    constructor(code, message, data){
        if (!Number.isInteger(code)) throw new Error('"code" must be an integer');
        if (!message || typeof message !== "string") throw new Error('"message" must be a nonempty string');
        super(message);
        this.code = code;
        this.data = data;
    }
    serialize() {
        const serialized = {
            code: this.code,
            message: this.message
        };
        if (this.data !== undefined) serialized.data = this.data;
        if (this.stack) serialized.stack = this.stack;
        return serialized;
    }
    toString() {
        return (0, fast_safe_stringify_1.default)(this.serialize(), stringifyReplacer, 2);
    }
}
const stringifyReplacer = (_, value)=>{
    if (value === "[Circular]") return undefined;
    return value;
};

},{"fast-safe-stringify":"dY7b6","../core":"01TnY","./utils":"lCyHH","./ConnectionController":"73jlc","./SubscriptionController":"kqcIM","./AccountsStorage":"huQK1","./keystore":"8Khk1","./clock":"j1nec"}],"dY7b6":[function(require,module,exports) {
module.exports = stringify;
stringify.default = stringify;
stringify.stable = deterministicStringify;
stringify.stableStringify = deterministicStringify;
var LIMIT_REPLACE_NODE = "[...]";
var CIRCULAR_REPLACE_NODE = "[Circular]";
var arr = [];
var replacerStack = [];
function defaultOptions() {
    return {
        depthLimit: Number.MAX_SAFE_INTEGER,
        edgesLimit: Number.MAX_SAFE_INTEGER
    };
}
// Regular stringify
function stringify(obj, replacer, spacer, options) {
    if (typeof options === "undefined") options = defaultOptions();
    decirc(obj, "", 0, [], undefined, 0, options);
    var res;
    try {
        if (replacerStack.length === 0) res = JSON.stringify(obj, replacer, spacer);
        else res = JSON.stringify(obj, replaceGetterValues(replacer), spacer);
    } catch (_) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
    } finally{
        while(arr.length !== 0){
            var part = arr.pop();
            if (part.length === 4) Object.defineProperty(part[0], part[1], part[3]);
            else part[0][part[1]] = part[2];
        }
    }
    return res;
}
function setReplace(replace, val, k, parent) {
    var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k);
    if (propertyDescriptor.get !== undefined) {
        if (propertyDescriptor.configurable) {
            Object.defineProperty(parent, k, {
                value: replace
            });
            arr.push([
                parent,
                k,
                val,
                propertyDescriptor
            ]);
        } else replacerStack.push([
            val,
            k,
            replace
        ]);
    } else {
        parent[k] = replace;
        arr.push([
            parent,
            k,
            val
        ]);
    }
}
function decirc(val, k, edgeIndex, stack, parent, depth, options) {
    depth += 1;
    var i;
    if (typeof val === "object" && val !== null) {
        for(i = 0; i < stack.length; i++)if (stack[i] === val) {
            setReplace(CIRCULAR_REPLACE_NODE, val, k, parent);
            return;
        }
        if (typeof options.depthLimit !== "undefined" && depth > options.depthLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
        }
        if (typeof options.edgesLimit !== "undefined" && edgeIndex + 1 > options.edgesLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
        }
        stack.push(val);
        // Optimize for Arrays. Big arrays could kill the performance otherwise!
        if (Array.isArray(val)) for(i = 0; i < val.length; i++)decirc(val[i], i, i, stack, val, depth, options);
        else {
            var keys = Object.keys(val);
            for(i = 0; i < keys.length; i++){
                var key = keys[i];
                decirc(val[key], key, i, stack, val, depth, options);
            }
        }
        stack.pop();
    }
}
// Stable-stringify
function compareFunction(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}
function deterministicStringify(obj, replacer, spacer, options) {
    if (typeof options === "undefined") options = defaultOptions();
    var tmp = deterministicDecirc(obj, "", 0, [], undefined, 0, options) || obj;
    var res;
    try {
        if (replacerStack.length === 0) res = JSON.stringify(tmp, replacer, spacer);
        else res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer);
    } catch (_) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
    } finally{
        // Ensure that we restore the object as it was.
        while(arr.length !== 0){
            var part = arr.pop();
            if (part.length === 4) Object.defineProperty(part[0], part[1], part[3]);
            else part[0][part[1]] = part[2];
        }
    }
    return res;
}
function deterministicDecirc(val, k, edgeIndex, stack, parent, depth, options) {
    depth += 1;
    var i;
    if (typeof val === "object" && val !== null) {
        for(i = 0; i < stack.length; i++)if (stack[i] === val) {
            setReplace(CIRCULAR_REPLACE_NODE, val, k, parent);
            return;
        }
        try {
            if (typeof val.toJSON === "function") return;
        } catch (_) {
            return;
        }
        if (typeof options.depthLimit !== "undefined" && depth > options.depthLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
        }
        if (typeof options.edgesLimit !== "undefined" && edgeIndex + 1 > options.edgesLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
        }
        stack.push(val);
        // Optimize for Arrays. Big arrays could kill the performance otherwise!
        if (Array.isArray(val)) for(i = 0; i < val.length; i++)deterministicDecirc(val[i], i, i, stack, val, depth, options);
        else {
            // Create a temporary object in the required way
            var tmp = {};
            var keys = Object.keys(val).sort(compareFunction);
            for(i = 0; i < keys.length; i++){
                var key = keys[i];
                deterministicDecirc(val[key], key, i, stack, val, depth, options);
                tmp[key] = val[key];
            }
            if (typeof parent !== "undefined") {
                arr.push([
                    parent,
                    k,
                    val
                ]);
                parent[k] = tmp;
            } else return tmp;
        }
        stack.pop();
    }
}
// wraps replacer function to handle values we couldn't replace
// and mark them as replaced value
function replaceGetterValues(replacer) {
    replacer = typeof replacer !== "undefined" ? replacer : function(k, v) {
        return v;
    };
    return function(key, val) {
        if (replacerStack.length > 0) for(var i = 0; i < replacerStack.length; i++){
            var part = replacerStack[i];
            if (part[1] === key && part[0] === val) {
                val = part[2];
                replacerStack.splice(i, 1);
                break;
            }
        }
        return replacer.call(this, key, val);
    };
}

},{}],"lCyHH":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUniqueId = exports.convertVersionToInt32 = exports.SafeEventEmitter = void 0;
const events_1 = require("events");
function safeApply(handler, context, args) {
    try {
        Reflect.apply(handler, context, args);
    } catch (err) {
        // Throw error after timeout so as not to interrupt the stack
        setTimeout(()=>{
            throw err;
        });
    }
}
function arrayClone(arr) {
    const n = arr.length;
    const copy = new Array(n);
    for(let i = 0; i < n; i += 1)copy[i] = arr[i];
    return copy;
}
class SafeEventEmitter extends events_1.EventEmitter {
    emit(type, ...args) {
        let doError = type === "error";
        const events = this._events;
        if (events !== undefined) doError = doError && events.error === undefined;
        else if (!doError) return false;
        if (doError) {
            let er;
            if (args.length > 0) [er] = args;
            if (er instanceof Error) throw er;
            const err = new Error(`Unhandled error.${er ? ` (${er.message})` : ""}`);
            err.context = er;
            throw err;
        }
        const handler = events[type];
        if (handler === undefined) return false;
        if (typeof handler === "function") safeApply(handler, this, args);
        else {
            const len = handler.length;
            const listeners = arrayClone(handler);
            for(let i = 0; i < len; i += 1)safeApply(listeners[i], this, args);
        }
        return true;
    }
}
exports.SafeEventEmitter = SafeEventEmitter;
/**
 * @category Utils
 */ const convertVersionToInt32 = (version)=>{
    const parts = version.split(".");
    if (parts.length !== 3) throw new Error("Received invalid version string");
    parts.forEach((part)=>{
        if (~~part > 999) throw new Error(`Version string invalid, ${part} is too large`);
    });
    let multiplier = 1000000;
    let numericVersion = 0;
    for(let i = 0; i < 3; i++){
        numericVersion += ~~parts[i] * multiplier;
        multiplier /= 1000;
    }
    return numericVersion;
};
exports.convertVersionToInt32 = convertVersionToInt32;
const MAX = 4294967295;
let idCounter = Math.floor(Math.random() * MAX);
function getUniqueId() {
    idCounter = (idCounter + 1) % MAX;
    return idCounter;
}
exports.getUniqueId = getUniqueId;

},{"events":"1VQLm"}],"1VQLm":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
var R = typeof Reflect === "object" ? Reflect : null;
var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;
if (R && typeof R.ownKeys === "function") ReflectOwnKeys = R.ownKeys;
else if (Object.getOwnPropertySymbols) ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
};
else ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
};
function ProcessEmitWarning(warning) {
    if (console && console.warn) console.warn(warning);
}
var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
    return value !== value;
};
function EventEmitter() {
    EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;
// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;
function checkListener(listener) {
    if (typeof listener !== "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
}
Object.defineProperty(EventEmitter, "defaultMaxListeners", {
    enumerable: true,
    get: function() {
        return defaultMaxListeners;
    },
    set: function(arg) {
        if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
        defaultMaxListeners = arg;
    }
});
EventEmitter.init = function() {
    if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
        this._events = Object.create(null);
        this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || undefined;
};
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
    this._maxListeners = n;
    return this;
};
function _getMaxListeners(that) {
    if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
}
EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this);
};
EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for(var i = 1; i < arguments.length; i++)args.push(arguments[i]);
    var doError = type === "error";
    var events = this._events;
    if (events !== undefined) doError = doError && events.error === undefined;
    else if (!doError) return false;
    // If there is no 'error' event listener then throw.
    if (doError) {
        var er;
        if (args.length > 0) er = args[0];
        if (er instanceof Error) // Note: The comments on the `throw` lines are intentional, they show
        // up in Node's output if this results in an unhandled exception.
        throw er; // Unhandled 'error' event
        // At least give some kind of context to the user
        var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
        err.context = er;
        throw err; // Unhandled 'error' event
    }
    var handler = events[type];
    if (handler === undefined) return false;
    if (typeof handler === "function") ReflectApply(handler, this, args);
    else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for(var i = 0; i < len; ++i)ReflectApply(listeners[i], this, args);
    }
    return true;
};
function _addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;
    checkListener(listener);
    events = target._events;
    if (events === undefined) {
        events = target._events = Object.create(null);
        target._eventsCount = 0;
    } else {
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (events.newListener !== undefined) {
            target.emit("newListener", type, listener.listener ? listener.listener : listener);
            // Re-assign `events` because a newListener handler could have caused the
            // this._events to be assigned to a new object
            events = target._events;
        }
        existing = events[type];
    }
    if (existing === undefined) {
        // Optimize the case of one listener. Don't need the extra array object.
        existing = events[type] = listener;
        ++target._eventsCount;
    } else {
        if (typeof existing === "function") // Adding the second element, need to change to array.
        existing = events[type] = prepend ? [
            listener,
            existing
        ] : [
            existing,
            listener
        ];
        else if (prepend) existing.unshift(listener);
        else existing.push(listener);
        // Check for listener leak
        m = _getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true;
            // No error code for this since it is a Warning
            // eslint-disable-next-line no-restricted-syntax
            var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners " + "added. Use emitter.setMaxListeners() to " + "increase limit");
            w.name = "MaxListenersExceededWarning";
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            ProcessEmitWarning(w);
        }
    }
    return target;
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.prependListener = function prependListener(type, listener) {
    return _addListener(this, type, listener, true);
};
function onceWrapper() {
    if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
    }
}
function _onceWrap(target, type, listener) {
    var state = {
        fired: false,
        wrapFn: undefined,
        target: target,
        type: type,
        listener: listener
    };
    var wrapped = onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
}
EventEmitter.prototype.once = function once(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
};
EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
    checkListener(listener);
    this.prependListener(type, _onceWrap(this, type, listener));
    return this;
};
// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
    var list, events, position, i, originalListener;
    checkListener(listener);
    events = this._events;
    if (events === undefined) return this;
    list = events[type];
    if (list === undefined) return this;
    if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0) this._events = Object.create(null);
        else {
            delete events[type];
            if (events.removeListener) this.emit("removeListener", type, list.listener || listener);
        }
    } else if (typeof list !== "function") {
        position = -1;
        for(i = list.length - 1; i >= 0; i--)if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
        }
        if (position < 0) return this;
        if (position === 0) list.shift();
        else spliceOne(list, position);
        if (list.length === 1) events[type] = list[0];
        if (events.removeListener !== undefined) this.emit("removeListener", type, originalListener || listener);
    }
    return this;
};
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
    var listeners, events, i;
    events = this._events;
    if (events === undefined) return this;
    // not listening for removeListener, no need to emit
    if (events.removeListener === undefined) {
        if (arguments.length === 0) {
            this._events = Object.create(null);
            this._eventsCount = 0;
        } else if (events[type] !== undefined) {
            if (--this._eventsCount === 0) this._events = Object.create(null);
            else delete events[type];
        }
        return this;
    }
    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for(i = 0; i < keys.length; ++i){
            key = keys[i];
            if (key === "removeListener") continue;
            this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
    }
    listeners = events[type];
    if (typeof listeners === "function") this.removeListener(type, listeners);
    else if (listeners !== undefined) // LIFO order
    for(i = listeners.length - 1; i >= 0; i--)this.removeListener(type, listeners[i]);
    return this;
};
function _listeners(target, type, unwrap) {
    var events = target._events;
    if (events === undefined) return [];
    var evlistener = events[type];
    if (evlistener === undefined) return [];
    if (typeof evlistener === "function") return unwrap ? [
        evlistener.listener || evlistener
    ] : [
        evlistener
    ];
    return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}
EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
};
EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
};
EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === "function") return emitter.listenerCount(type);
    else return listenerCount.call(emitter, type);
};
EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
    var events = this._events;
    if (events !== undefined) {
        var evlistener = events[type];
        if (typeof evlistener === "function") return 1;
        else if (evlistener !== undefined) return evlistener.length;
    }
    return 0;
}
EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};
function arrayClone(arr, n) {
    var copy = new Array(n);
    for(var i = 0; i < n; ++i)copy[i] = arr[i];
    return copy;
}
function spliceOne(list, index) {
    for(; index + 1 < list.length; index++)list[index] = list[index + 1];
    list.pop();
}
function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for(var i = 0; i < ret.length; ++i)ret[i] = arr[i].listener || arr[i];
    return ret;
}
function once(emitter, name) {
    return new Promise(function(resolve, reject) {
        function errorListener(err) {
            emitter.removeListener(name, resolver);
            reject(err);
        }
        function resolver() {
            if (typeof emitter.removeListener === "function") emitter.removeListener("error", errorListener);
            resolve([].slice.call(arguments));
        }
        eventTargetAgnosticAddListener(emitter, name, resolver, {
            once: true
        });
        if (name !== "error") addErrorHandlerIfEventEmitter(emitter, errorListener, {
            once: true
        });
    });
}
function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === "function") eventTargetAgnosticAddListener(emitter, "error", handler, flags);
}
function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === "function") {
        if (flags.once) emitter.once(name, listener);
        else emitter.on(name, listener);
    } else if (typeof emitter.addEventListener === "function") // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
        // IE does not have builtin `{ once: true }` support so we
        // have to do it manually.
        if (flags.once) emitter.removeEventListener(name, wrapListener);
        listener(arg);
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
}

},{}],"73jlc":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConnectionController = exports.createConnectionController = exports.ConnectionError = exports.checkConnection = exports.NETWORK_PRESETS = exports.DEFAULT_NETWORK_GROUP = void 0;
const await_semaphore_1 = require("@broxus/await-semaphore");
const core_1 = __importDefault(require("../../core"));
const gql_1 = require("./gql");
const jrpc_1 = require("./jrpc");
const { nekoton , debugLog  } = core_1.default;
exports.DEFAULT_NETWORK_GROUP = "mainnet";
/**
 * @category Client
 */ exports.NETWORK_PRESETS = {
    mainnet: {
        id: 1,
        group: "mainnet",
        type: "graphql",
        data: {
            endpoints: [
                "eri01.main.everos.dev",
                "gra01.main.everos.dev",
                "gra02.main.everos.dev",
                "lim01.main.everos.dev",
                "rbx01.main.everos.dev"
            ],
            local: false
        }
    },
    mainnetJrpc: {
        id: 1,
        group: "mainnet",
        type: "jrpc",
        data: {
            endpoint: "https://jrpc.everwallet.net/rpc"
        }
    },
    testnet: {
        id: 2,
        group: "testnet",
        type: "graphql",
        data: {
            endpoints: [
                "eri01.net.everos.dev",
                "rbx01.net.everos.dev",
                "gra01.net.everos.dev"
            ],
            local: false
        }
    },
    fld: {
        id: 10,
        group: "fld",
        type: "graphql",
        data: {
            endpoints: [
                "gql.custler.net"
            ],
            local: false
        }
    },
    local: {
        id: 31337,
        group: "localnet",
        type: "graphql",
        data: {
            endpoints: [
                "127.0.0.1"
            ],
            local: true
        }
    }
};
function loadPreset(params) {
    if (typeof params === "string") {
        const targetPreset = exports.NETWORK_PRESETS[params];
        if (targetPreset == null) throw new Error(`Target preset id not found: ${params}`);
        return targetPreset;
    } else return params;
}
/**
 * Tries to connect with the specified params. Throws an exception in case of error
 *
 * @category Client
 * @throws ConnectionError
 */ async function checkConnection(params) {
    const preset = loadPreset(params);
    const clock = new nekoton.ClockWithOffset();
    try {
        const controller = new ConnectionController(clock);
        await controller["_connect"](preset);
        if (controller["_initializedTransport"] != null) cleanupInitializedTransport(controller["_initializedTransport"]);
    } catch (e) {
        throw new ConnectionError(preset, e.toString());
    } finally{
        clock.free();
    }
}
exports.checkConnection = checkConnection;
/**
 * @category Client
 */ class ConnectionError extends Error {
    constructor(params, message){
        super(message);
        this.params = params;
    }
}
exports.ConnectionError = ConnectionError;
async function createConnectionController(clock, params, retry = false) {
    const preset = loadPreset(params);
    // Try connect
    while(true)try {
        const controller = new ConnectionController(clock);
        await controller.startSwitchingNetwork(preset).then((handle)=>handle.switch());
        debugLog(`Successfully connected to ${preset.group}`);
        return controller;
    } catch (e) {
        if (retry) {
            console.error("Connection failed:", e);
            await new Promise((resolve)=>{
                setTimeout(()=>resolve(), 5000);
            });
            debugLog("Restarting connection process");
        } else throw e;
    }
}
exports.createConnectionController = createConnectionController;
class ConnectionController {
    constructor(clock){
        this._networkMutex = new await_semaphore_1.Mutex();
        this._acquiredTransportCounter = 0;
        this._clock = clock;
    }
    async acquire() {
        requireInitializedTransport(this._initializedTransport);
        await this._acquireTransport();
        return {
            transport: this._initializedTransport,
            release: ()=>this._releaseTransport()
        };
    }
    async use(f) {
        requireInitializedTransport(this._initializedTransport);
        await this._acquireTransport();
        return f(this._initializedTransport).finally(()=>{
            this._releaseTransport();
        });
    }
    async startSwitchingNetwork(params) {
        var _a;
        class NetworkSwitchHandle {
            constructor(controller, release, params){
                this._controller = controller;
                this._release = release;
                this._params = params;
            }
            async switch() {
                await this._controller._connect(this._params).finally(()=>this._release());
            }
        }
        (_a = this._cancelTestTransport) === null || _a === void 0 || _a.call(this);
        const release = await this._networkMutex.acquire();
        return new NetworkSwitchHandle(this, release, params);
    }
    get initializedTransport() {
        return this._initializedTransport;
    }
    async _connect(params) {
        if (this._initializedTransport != null) cleanupInitializedTransport(this._initializedTransport);
        this._initializedTransport = undefined;
        let TestConnectionResult;
        (function(TestConnectionResult) {
            TestConnectionResult[TestConnectionResult["DONE"] = 0] = "DONE";
            TestConnectionResult[TestConnectionResult["CANCELLED"] = 1] = "CANCELLED";
        })(TestConnectionResult || (TestConnectionResult = {}));
        const testTransport = async ({ data: { transport  }  }, local)=>{
            return new Promise((resolve, reject)=>{
                this._cancelTestTransport = ()=>resolve(TestConnectionResult.CANCELLED);
                if (local) transport.getAccountsByCodeHash("4e92716de61d456e58f16e4e867e3e93a7548321eace86301b51c8b80ca6239b", 1).then(()=>resolve(TestConnectionResult.DONE)).catch((e)=>reject(e));
                else // Try to get any account state
                transport.getFullContractState("-1:0000000000000000000000000000000000000000000000000000000000000000").then(()=>resolve(TestConnectionResult.DONE)).catch((e)=>reject(e));
                setTimeout(()=>reject(new Error("Connection timeout")), 10000);
            }).finally(()=>this._cancelTestTransport = undefined);
        };
        try {
            const { local , transportData  } = await (params.type === "graphql" ? async ()=>{
                const socket = new gql_1.GqlSocket();
                const connection = await socket.connect(this._clock, params.data);
                const transport = nekoton.Transport.fromGqlConnection(connection);
                const transportData = {
                    id: params.id,
                    group: params.group,
                    type: "graphql",
                    data: {
                        socket,
                        connection,
                        transport
                    }
                };
                return {
                    local: params.data.local,
                    transportData
                };
            } : async ()=>{
                const socket = new jrpc_1.JrpcSocket();
                const connection = await socket.connect(this._clock, params.data);
                const transport = nekoton.Transport.fromJrpcConnection(connection);
                const transportData = {
                    id: params.id,
                    group: params.group,
                    type: "jrpc",
                    data: {
                        socket,
                        connection,
                        transport
                    }
                };
                return {
                    local: false,
                    transportData
                };
            })();
            try {
                if (await testTransport(transportData, local) == TestConnectionResult.CANCELLED) {
                    cleanupInitializedTransport(transportData);
                    return;
                }
            } catch (e) {
                // Free transport data in case of error
                cleanupInitializedTransport(transportData);
                throw e;
            }
            this._initializedTransport = transportData;
        } catch (e1) {
            throw new Error(`Failed to create connection: ${e1.toString()}`);
        }
    }
    async _acquireTransport() {
        debugLog("_acquireTransport");
        if (this._acquiredTransportCounter > 0) {
            debugLog("_acquireTransport -> increase");
            this._acquiredTransportCounter += 1;
        } else {
            this._acquiredTransportCounter = 1;
            if (this._release != null) console.warn("mutex is already acquired");
            else {
                debugLog("_acquireTransport -> await");
                this._release = await this._networkMutex.acquire();
                debugLog("_acquireTransport -> create");
            }
        }
    }
    _releaseTransport() {
        var _a;
        debugLog("_releaseTransport");
        this._acquiredTransportCounter -= 1;
        if (this._acquiredTransportCounter <= 0) {
            debugLog("_releaseTransport -> release");
            (_a = this._release) === null || _a === void 0 || _a.call(this);
            this._release = undefined;
        }
    }
}
exports.ConnectionController = ConnectionController;
function cleanupInitializedTransport(transport) {
    transport.data.transport.free();
    transport.data.connection.free();
}
function requireInitializedTransport(transport) {
    if (transport == null) throw new Error("Connection is not initialized");
}

},{"@broxus/await-semaphore":"3cqBb","../../core":"01TnY","./gql":"6Bb1l","./jrpc":"3N8yM"}],"3cqBb":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Mutex = exports.Semaphore = void 0;
function ensureCallable(fn) {
    if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
    return fn;
}
function byObserver(Observer) {
    const node = document.createTextNode("");
    let queue, currentQueue, bit = 0, i = 0;
    new Observer(function() {
        let callback;
        if (!queue) {
            if (!currentQueue) return;
            queue = currentQueue;
        } else if (currentQueue) queue = currentQueue.slice(i).concat(queue);
        currentQueue = queue;
        queue = null;
        i = 0;
        if (typeof currentQueue === "function") {
            callback = currentQueue;
            currentQueue = null;
            callback();
            return;
        }
        node.data = bit = ++bit % 2; // Invoke other batch, to handle leftover callbacks in case of crash
        while(i < currentQueue.length){
            callback = currentQueue[i];
            i++;
            if (i === currentQueue.length) currentQueue = null;
            callback();
        }
    }).observe(node, {
        characterData: true
    });
    return function(fn) {
        ensureCallable(fn);
        if (queue) {
            if (typeof queue === "function") queue = [
                queue,
                fn
            ];
            else queue.push(fn);
            return;
        }
        queue = fn;
        node.data = bit = ++bit % 2;
    };
}
const nextTick = function() {
    // queueMicrotask
    if (typeof queueMicrotask === "function") return function(cb) {
        queueMicrotask(ensureCallable(cb));
    };
    // MutationObserver
    if (typeof document === "object" && document) {
        if (typeof MutationObserver === "function") return byObserver(MutationObserver);
        if (typeof window.WebKitMutationObserver === "function") return byObserver(window.WebKitMutationObserver);
    }
    // W3C Draft
    // http://dvcs.w3.org/hg/webperf/raw-file/tip/specs/setImmediate/Overview.html
    if (typeof setImmediate === "function") return function(cb) {
        setImmediate(ensureCallable(cb));
    };
    // Wide available standard
    if (typeof setTimeout === "function" || typeof setTimeout === "object") return function(cb) {
        setTimeout(ensureCallable(cb), 0);
    };
    throw new Error("No `nextTick` implementation found");
}();
class Semaphore {
    constructor(count){
        this.tasks = [];
        this.count = count;
    }
    sched() {
        if (this.count > 0 && this.tasks.length > 0) {
            this.count--;
            let next = this.tasks.shift();
            if (next === undefined) throw "Unexpected undefined value in tasks list";
            next();
        }
    }
    acquire() {
        return new Promise((res, _rej)=>{
            const task = ()=>{
                let released = false;
                res(()=>{
                    if (!released) {
                        released = true;
                        this.count++;
                        this.sched();
                    }
                });
            };
            this.tasks.push(task);
            nextTick(this.sched.bind(this));
        });
    }
    use(f) {
        return this.acquire().then((release)=>{
            return f().then((res)=>{
                release();
                return res;
            }).catch((err)=>{
                release();
                throw err;
            });
        });
    }
}
exports.Semaphore = Semaphore;
class Mutex extends Semaphore {
    constructor(){
        super(1);
    }
}
exports.Mutex = Mutex;

},{}],"6Bb1l":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GqlSocket = void 0;
const core_1 = __importDefault(require("../../core"));
const { nekoton , fetch , fetchAgent , debugLog  } = core_1.default;
class GqlSocket {
    async connect(clock, params) {
        class GqlSender {
            constructor(params){
                this.nextLatencyDetectionTime = 0;
                this.params = params;
                this.latencyDetectionInterval = params.latencyDetectionInterval || 60000;
                this.endpoints = params.endpoints.map(GqlSocket.expandAddress);
                if (this.endpoints.length == 1) {
                    this.currentEndpoint = this.endpoints[0];
                    this.nextLatencyDetectionTime = Number.MAX_VALUE;
                }
            }
            isLocal() {
                return this.params.local;
            }
            send(data, handler, _longQuery) {
                (async ()=>{
                    const now = Date.now();
                    try {
                        let endpoint;
                        if (this.currentEndpoint != null && now < this.nextLatencyDetectionTime) // Default route
                        endpoint = this.currentEndpoint;
                        else if (this.resolutionPromise != null) {
                            // Already resolving
                            endpoint = await this.resolutionPromise;
                            delete this.resolutionPromise;
                        } else {
                            delete this.currentEndpoint;
                            // Start resolving (current endpoint is null, or it is time to refresh)
                            this.resolutionPromise = this._selectQueryingEndpoint().then((endpoint)=>{
                                this.currentEndpoint = endpoint;
                                this.nextLatencyDetectionTime = Date.now() + this.latencyDetectionInterval;
                                return endpoint;
                            });
                            endpoint = await this.resolutionPromise;
                            delete this.resolutionPromise;
                        }
                        const response = await fetch(endpoint.url, {
                            method: "post",
                            headers: DEFAULT_HEADERS,
                            body: data,
                            agent: endpoint.agent
                        }).then((response)=>response.text());
                        handler.onReceive(response);
                    } catch (e) {
                        handler.onError(e);
                    }
                })();
            }
            async _selectQueryingEndpoint() {
                const maxLatency = this.params.maxLatency || 60000;
                const endpointCount = this.endpoints.length;
                for(let retryCount = 0; retryCount < 5; ++retryCount){
                    let handlers;
                    const promise = new Promise((resolve, reject)=>{
                        handlers = {
                            resolve: (endpoint)=>resolve(endpoint),
                            reject: ()=>reject(undefined)
                        };
                    });
                    let checkedEndpoints = 0;
                    let lastLatency;
                    for (const endpoint of this.endpoints)GqlSocket.checkLatency(endpoint).then((latency)=>{
                        ++checkedEndpoints;
                        if (latency !== undefined && latency <= maxLatency) return handlers.resolve(endpoint);
                        if (lastLatency === undefined || lastLatency.latency === undefined || latency !== undefined && latency < lastLatency.latency) lastLatency = {
                            endpoint,
                            latency
                        };
                        if (checkedEndpoints >= endpointCount) {
                            if ((lastLatency === null || lastLatency === void 0 ? void 0 : lastLatency.latency) !== undefined) handlers.resolve(lastLatency.endpoint);
                            else handlers.reject();
                        }
                    });
                    try {
                        return await promise;
                    } catch (e) {
                        let resolveDelay;
                        const delayPromise = new Promise((resolve)=>{
                            resolveDelay = ()=>resolve();
                        });
                        setTimeout(()=>resolveDelay(), Math.min(100 * retryCount, 5000));
                        await delayPromise;
                    }
                }
                throw new Error("Not available endpoint found");
            }
        }
        return new nekoton.GqlConnection(clock, new GqlSender(params));
    }
    static async checkLatency(endpoint) {
        const response = await fetch(`${endpoint.url}?query=%7Binfo%7Bversion%20time%20latency%7D%7D`, {
            method: "get",
            agent: endpoint.agent
        }).then((response)=>response.json()).catch((e)=>{
            debugLog(e);
            return undefined;
        });
        if (typeof response !== "object" || response == null) return;
        const data = response["data"];
        if (typeof data !== "object" || data == null) return;
        const info = data["info"];
        if (typeof info !== "object" || info == null) return;
        const latency = info["latency"];
        if (typeof latency !== "number") return;
        return latency;
    }
}
exports.GqlSocket = GqlSocket;
GqlSocket.expandAddress = (baseUrl)=>{
    const lastBackslashIndex = baseUrl.lastIndexOf("/");
    baseUrl = lastBackslashIndex < 0 ? baseUrl : baseUrl.substring(0, lastBackslashIndex);
    let url;
    if (baseUrl.startsWith("http://") || baseUrl.startsWith("https://")) url = `${baseUrl}/graphql`;
    else if ([
        "localhost",
        "127.0.0.1"
    ].indexOf(baseUrl) >= 0) url = `http://${baseUrl}/graphql`;
    else url = `https://${baseUrl}/graphql`;
    return {
        url,
        agent: fetchAgent(url)
    };
};
const DEFAULT_HEADERS = {
    "Content-Type": "application/json"
};

},{"../../core":"01TnY"}],"3N8yM":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.JrpcSocket = void 0;
const core_1 = __importDefault(require("../../core"));
const { nekoton , fetch , fetchAgent  } = core_1.default;
class JrpcSocket {
    async connect(clock, params) {
        class JrpcSender {
            constructor(params){
                this.endpoint = params.endpoint;
                this.endpointAgent = fetchAgent(this.endpoint);
                this.alternativeEndpoint = params.alternativeEndpoint != null ? params.alternativeEndpoint : params.endpoint;
                this.alternativeEndpointAgent = fetchAgent(this.alternativeEndpoint);
            }
            send(data, handler, requiresDb) {
                (async ()=>{
                    try {
                        const url = requiresDb ? this.endpoint : this.alternativeEndpoint;
                        const agent = requiresDb ? this.endpointAgent : this.alternativeEndpointAgent;
                        const response = await fetch(url, {
                            method: "post",
                            headers: DEFAULT_HEADERS,
                            body: data,
                            agent
                        }).then((response)=>response.text());
                        handler.onReceive(response);
                    } catch (e) {
                        handler.onError(e);
                    }
                })();
            }
        }
        return new nekoton.JrpcConnection(clock, new JrpcSender(params));
    }
}
exports.JrpcSocket = JrpcSocket;
const DEFAULT_HEADERS = {
    "Content-Type": "application/json"
};

},{"../../core":"01TnY"}],"kqcIM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SubscriptionController = void 0;
const await_semaphore_1 = require("@broxus/await-semaphore");
const utils_1 = require("../utils");
const subscription_1 = require("./subscription");
const DEFAULT_POLLING_INTERVAL = 10000; // 10s
class SubscriptionController {
    constructor(connectionController, notify){
        this._subscriptions = new Map();
        this._subscriptionsMutex = new await_semaphore_1.Mutex();
        this._sendMessageRequests = new Map();
        this._subscriptionStates = new Map();
        this._connectionController = connectionController;
        this._notify = notify;
    }
    async sendMessageLocally(address, signedMessage) {
        const subscriptionId = (0, utils_1.getUniqueId)();
        try {
            await this.subscribeToContract(address, {
                state: true
            }, subscriptionId);
            const subscription = this._subscriptions.get(address);
            if (subscription == null) throw new Error("Failed to subscribe to contract");
            return await subscription.use((contract)=>contract.sendMessageLocally(signedMessage));
        } finally{
            this.unsubscribeFromContract(address, subscriptionId).catch(console.error);
        }
    }
    sendMessage(address, signedMessage) {
        let messageRequests = this._sendMessageRequests.get(address);
        if (messageRequests == null) {
            messageRequests = new Map();
            this._sendMessageRequests.set(address, messageRequests);
        }
        const subscriptionId = (0, utils_1.getUniqueId)();
        return new Promise((resolve, reject)=>{
            const id = signedMessage.hash;
            messageRequests.set(id, {
                resolve,
                reject
            });
            this.subscribeToContract(address, {
                state: true
            }, subscriptionId).then(async ()=>{
                const subscription = this._subscriptions.get(address);
                if (subscription == null) throw new Error("Failed to subscribe to contract");
                await subscription.prepareReliablePolling();
                await subscription.use(async (contract)=>{
                    await contract.sendMessage(signedMessage);
                    subscription.skipRefreshTimer();
                });
            }).catch((e)=>this._rejectMessageRequest(address, id, e)).finally(()=>{
                this.unsubscribeFromContract(address, subscriptionId).catch(console.error);
            });
        });
    }
    async subscribeToContract(address, params, internalId) {
        return this._subscriptionsMutex.use(async ()=>{
            let mergeInputParams = (currentParams)=>{
                const newParams = {
                    ...currentParams
                };
                Object.keys(newParams).map((param)=>{
                    if (param !== "state" && param !== "transactions") throw new Error(`Unknown subscription topic: ${param}`);
                    const value = params[param];
                    if (typeof value === "boolean") newParams[param] = value;
                    else if (value == null) return;
                    else throw new Error(`Unknown subscription topic value ${param}: ${value}`);
                });
                return newParams;
            };
            const subscriptionState = this._subscriptionStates.get(address) || makeDefaultSubscriptionState();
            let changedParams;
            if (internalId == null) // Client subscription without id
            // Changed params are `SubscriptionState.client`
            changedParams = mergeInputParams(subscriptionState.client);
            else {
                // Internal subscription with id
                // Changed params are `SubscriptionState.internal[internalId]`
                let exisingParams = subscriptionState.internal.get(internalId);
                if (exisingParams != null) {
                    // Updating existing internal params
                    changedParams = mergeInputParams(exisingParams);
                    // Remove entry if it is empty
                    if (isEmptySubscription(changedParams)) subscriptionState.internal.delete(internalId);
                } else // Merge input params with empty struct
                changedParams = mergeInputParams({
                    state: false,
                    transactions: false
                });
            }
            // Merge changed params with the rest of internal params
            let computedParams = {
                ...changedParams
            };
            for (const params1 of subscriptionState.internal.values()){
                computedParams.state || (computedParams.state = params1.state);
                computedParams.transactions || (computedParams.transactions = params1.transactions);
            }
            // Remove subscription if all params are empty
            if (isEmptySubscription(computedParams)) {
                this._subscriptionStates.delete(address);
                await this._tryUnsubscribe(address);
                return {
                    ...computedParams
                };
            }
            // Create subscription if it doesn't exist
            let existingSubscription = this._subscriptions.get(address);
            const isNewSubscription = existingSubscription == null;
            if (existingSubscription == null) existingSubscription = await this._createSubscription(address);
            // Update subscription state
            if (internalId == null) // Update client params
            subscriptionState.client = changedParams;
            else // Set new internal params
            subscriptionState.internal.set(internalId, changedParams);
            this._subscriptionStates.set(address, subscriptionState);
            // Start subscription
            if (isNewSubscription) await existingSubscription.start();
            // Returns only changed params
            return {
                ...changedParams
            };
        });
    }
    async unsubscribeFromContract(address, internalId) {
        await this.subscribeToContract(address, {
            state: false,
            transactions: false
        }, internalId);
    }
    async unsubscribeFromAllContracts(internalId) {
        for (const address of this._subscriptions.keys())await this.unsubscribeFromContract(address, internalId);
    }
    get subscriptionStates() {
        const result = {};
        for (const [key, value] of this._subscriptionStates.entries())result[key] = {
            ...value.client
        };
        return result;
    }
    async _createSubscription(address) {
        class ContractHandler {
            constructor(address, controller){
                this._enabled = false;
                this._address = address;
                this._controller = controller;
            }
            enabledNotifications() {
                this._enabled = true;
            }
            onMessageExpired(pendingTransaction) {
                if (this._enabled) this._controller._resolveMessageRequest(this._address, pendingTransaction.messageHash, undefined).catch(console.error);
            }
            onMessageSent(pendingTransaction, transaction) {
                if (this._enabled) this._controller._resolveMessageRequest(this._address, pendingTransaction.messageHash, transaction).catch(console.error);
            }
            onStateChanged(newState) {
                if (this._enabled) this._controller._notifyStateChanged(this._address, newState);
            }
            onTransactionsFound(transactions, info) {
                if (this._enabled) this._controller._notifyTransactionsFound(this._address, transactions, info);
            }
        }
        const handler = new ContractHandler(address, this);
        const subscription = await subscription_1.ContractSubscription.subscribe(this._connectionController, address, handler);
        subscription.setPollingInterval(DEFAULT_POLLING_INTERVAL);
        handler.enabledNotifications();
        this._subscriptions.set(address, subscription);
        return subscription;
    }
    async _tryUnsubscribe(address) {
        const subscriptionState = this._subscriptionStates.get(address);
        const sendMessageRequests = this._sendMessageRequests.get(address);
        if (subscriptionState == null && ((sendMessageRequests === null || sendMessageRequests === void 0 ? void 0 : sendMessageRequests.size) || 0) == 0) {
            const subscription = this._subscriptions.get(address);
            this._subscriptions.delete(address);
            await (subscription === null || subscription === void 0 ? void 0 : subscription.stop());
        }
    }
    async _rejectMessageRequest(address, id, error) {
        this._deleteMessageRequestAndGetCallback(address, id).reject(error);
        await this._subscriptionsMutex.use(async ()=>this._tryUnsubscribe(address));
    }
    async _resolveMessageRequest(address, id, transaction) {
        this._deleteMessageRequestAndGetCallback(address, id).resolve(transaction);
        await this._subscriptionsMutex.use(async ()=>this._tryUnsubscribe(address));
    }
    _notifyStateChanged(address, state) {
        const subscriptionState = this._subscriptionStates.get(address);
        if (subscriptionState === null || subscriptionState === void 0 ? void 0 : subscriptionState.client.state) this._notify("contractStateChanged", {
            address,
            state
        });
    }
    _notifyTransactionsFound(address, transactions, info) {
        const subscriptionState = this._subscriptionStates.get(address);
        if (subscriptionState === null || subscriptionState === void 0 ? void 0 : subscriptionState.client.transactions) this._notify("transactionsFound", {
            address,
            transactions,
            info
        });
    }
    _deleteMessageRequestAndGetCallback(address, id) {
        var _a;
        const callbacks = (_a = this._sendMessageRequests.get(address)) === null || _a === void 0 ? void 0 : _a.get(id);
        if (!callbacks) throw new Error(`SendMessage request with id '${id}' not found`);
        this._deleteMessageRequest(address, id);
        return callbacks;
    }
    _deleteMessageRequest(address, id) {
        const accountMessageRequests = this._sendMessageRequests.get(address);
        if (!accountMessageRequests) return;
        accountMessageRequests.delete(id);
        if (accountMessageRequests.size == 0) this._sendMessageRequests.delete(address);
    }
}
exports.SubscriptionController = SubscriptionController;
const makeDefaultSubscriptionState = ()=>({
        internal: new Map(),
        client: {
            state: false,
            transactions: false
        }
    });
const isEmptySubscription = (params)=>!params.state && !params.transactions;

},{"@broxus/await-semaphore":"3cqBb","../utils":"lCyHH","./subscription":"4meJv"}],"4meJv":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ContractSubscription = void 0;
const await_semaphore_1 = require("@broxus/await-semaphore");
const core_1 = __importDefault(require("../../core"));
const { nekoton , debugLog  } = core_1.default;
class ContractSubscription {
    constructor(connection, release, address, contract){
        this._contractMutex = new await_semaphore_1.Mutex();
        this._pollingInterval = BACKGROUND_POLLING_INTERVAL;
        this._isRunning = false;
        this._connection = connection;
        this._address = address;
        this._contract = contract;
        this._releaseTransport = release;
        this._currentPollingMethod = contract.pollingMethod;
    }
    static async subscribe(connectionController, address, handler) {
        const { transport: { data: { connection , transport  }  } , release  } = await connectionController.acquire();
        try {
            const contract = await transport.subscribeToGenericContract(address, handler);
            if (contract == null) throw new Error(`Failed to subscribe to contract: ${address}`);
            return new ContractSubscription(connection, release, address, contract);
        } catch (e) {
            release();
            throw e;
        }
    }
    setPollingInterval(interval) {
        this._pollingInterval = interval;
    }
    async start() {
        if (this._releaseTransport == null) throw new Error("Contract subscription must not be started after being closed");
        if (this._loopPromise) {
            debugLog("ContractSubscription -> awaiting loop promise");
            await this._loopPromise;
        }
        debugLog("ContractSubscription -> loop started");
        this._loopPromise = (async ()=>{
            const isSimple = !(this._connection instanceof nekoton.GqlConnection);
            this._isRunning = true;
            let previousPollingMethod = this._currentPollingMethod;
            while(this._isRunning){
                const pollingMethodChanged = previousPollingMethod != this._currentPollingMethod;
                previousPollingMethod = this._currentPollingMethod;
                if (isSimple || this._currentPollingMethod == "manual") {
                    this._currentBlockId = undefined;
                    debugLog("ContractSubscription -> manual -> waiting begins");
                    const pollingInterval = this._currentPollingMethod == "manual" ? this._pollingInterval : INTENSIVE_POLLING_INTERVAL;
                    await new Promise((resolve)=>{
                        const timerHandle = setTimeout(()=>{
                            this._refreshTimer = undefined;
                            resolve();
                        }, pollingInterval);
                        this._refreshTimer = [
                            timerHandle,
                            resolve
                        ];
                    });
                    debugLog("ContractSubscription -> manual -> waiting ends");
                    if (!this._isRunning) break;
                    debugLog("ContractSubscription -> manual -> refreshing begins");
                    try {
                        this._currentPollingMethod = await this._contractMutex.use(async ()=>{
                            await this._contract.refresh();
                            return this._contract.pollingMethod;
                        });
                    } catch (e) {
                        console.error(`Error during account refresh (${this._address})`, e);
                    }
                    debugLog("ContractSubscription -> manual -> refreshing ends");
                } else {
                    // SAFETY: connection is always GqlConnection here due to `isSimple`
                    const connection = this._connection;
                    debugLog("ContractSubscription -> reliable start");
                    if (pollingMethodChanged && this._suggestedBlockId != null) this._currentBlockId = this._suggestedBlockId;
                    this._suggestedBlockId = undefined;
                    let nextBlockId;
                    if (this._currentBlockId == null) {
                        console.warn("Starting reliable connection with unknown block");
                        try {
                            const latestBlock = await connection.getLatestBlock(this._address);
                            this._currentBlockId = latestBlock.id;
                            nextBlockId = this._currentBlockId;
                        } catch (e1) {
                            console.error(`Failed to get latest block for ${this._address}`, e1);
                            continue;
                        }
                    } else try {
                        nextBlockId = await connection.waitForNextBlock(this._currentBlockId, this._address, NEXT_BLOCK_TIMEOUT);
                    } catch (e2) {
                        console.error(`Failed to wait for next block for ${this._address}`);
                        continue; // retry
                    }
                    try {
                        this._currentPollingMethod = await this._contractMutex.use(async ()=>{
                            await this._contract.handleBlock(nextBlockId);
                            return this._contract.pollingMethod;
                        });
                        this._currentBlockId = nextBlockId;
                    } catch (e3) {
                        console.error(`Failed to handle block for ${this._address}`, e3);
                    }
                }
            }
            debugLog("ContractSubscription -> loop finished");
        })();
    }
    skipRefreshTimer() {
        var _a, _b;
        clearTimeout((_a = this._refreshTimer) === null || _a === void 0 ? void 0 : _a[0]);
        (_b = this._refreshTimer) === null || _b === void 0 || _b[1]();
        this._refreshTimer = undefined;
    }
    async pause() {
        if (!this._isRunning) return;
        this._isRunning = false;
        this.skipRefreshTimer();
        await this._loopPromise;
        this._loopPromise = undefined;
        this._currentPollingMethod = await this._contractMutex.use(async ()=>{
            return this._contract.pollingMethod;
        });
        this._currentBlockId = undefined;
        this._suggestedBlockId = undefined;
    }
    async stop() {
        var _a;
        await this.pause();
        this._contract.free();
        (_a = this._releaseTransport) === null || _a === void 0 || _a.call(this);
        this._releaseTransport = undefined;
    }
    async prepareReliablePolling() {
        try {
            if (this._connection instanceof nekoton.GqlConnection) this._suggestedBlockId = (await this._connection.getLatestBlock(this._address)).id;
        } catch (e) {
            throw new Error(`Failed to prepare reliable polling: ${e.toString()}`);
        }
    }
    async use(f) {
        const release = await this._contractMutex.acquire();
        return f(this._contract).then((res)=>{
            release();
            return res;
        }).catch((err)=>{
            release();
            throw err;
        });
    }
}
exports.ContractSubscription = ContractSubscription;
const NEXT_BLOCK_TIMEOUT = 60; // 60s
const INTENSIVE_POLLING_INTERVAL = 2000; // 2s
const BACKGROUND_POLLING_INTERVAL = 60000;

},{"@broxus/await-semaphore":"3cqBb","../../core":"01TnY"}],"huQK1":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SimpleAccountsStorage = exports.AccountsStorageContext = exports.HighloadWalletV2 = exports.WalletV3Account = exports.MsigAccount = exports.GenericAccount = exports.GiverAccount = void 0;
const everscale_inpage_provider_1 = require("everscale-inpage-provider");
var Giver_1 = require("./Giver");
Object.defineProperty(exports, "GiverAccount", {
    enumerable: true,
    get: function() {
        return Giver_1.GiverAccount;
    }
});
var Generic_1 = require("./Generic");
Object.defineProperty(exports, "GenericAccount", {
    enumerable: true,
    get: function() {
        return Generic_1.GenericAccount;
    }
});
Object.defineProperty(exports, "MsigAccount", {
    enumerable: true,
    get: function() {
        return Generic_1.MsigAccount;
    }
});
var WalletV3_1 = require("./WalletV3");
Object.defineProperty(exports, "WalletV3Account", {
    enumerable: true,
    get: function() {
        return WalletV3_1.WalletV3Account;
    }
});
var HighloadWalletV2_1 = require("./HighloadWalletV2");
Object.defineProperty(exports, "HighloadWalletV2", {
    enumerable: true,
    get: function() {
        return HighloadWalletV2_1.HighloadWalletV2;
    }
});
/**
 * @category AccountsStorage
 */ class AccountsStorageContext {
    constructor(clock, connectionController, nekoton, keystore){
        this.clock = clock;
        this.connectionController = connectionController;
        this.nekoton = nekoton;
        this.keystore = keystore;
    }
    async getSigner(publicKey) {
        if (this.keystore == null) throw new Error("Keystore not found");
        const signer = await this.keystore.getSigner(publicKey);
        if (signer == null) throw new Error("Signer not found");
        return signer;
    }
    get nowMs() {
        return this.clock.nowMs;
    }
    get nowSec() {
        return ~~(this.clock.nowMs / 1000);
    }
    async fetchPublicKey(address) {
        const state = await this.getFullContractState(address);
        if (state == null || !state.isDeployed) throw new Error("Contract not deployed");
        return this.nekoton.extractPublicKey(state.boc);
    }
    async getFullContractState(address) {
        return this.connectionController.use(async ({ data: { transport  }  })=>transport.getFullContractState(address.toString()));
    }
    extractContractData(boc) {
        return this.nekoton.extractContractData(boc);
    }
    packIntoCell(args) {
        return this.nekoton.packIntoCell(args.structure, args.data, args.abiVersion);
    }
    unpackFromCell(args) {
        return this.nekoton.unpackFromCell(args.structure, args.boc, args.allowPartial, args.abiVersion);
    }
    getBocHash(boc) {
        return this.nekoton.getBocHash(boc);
    }
    extendSignature(signature) {
        return this.nekoton.extendSignature(signature);
    }
    encodeInternalInput(args) {
        return this.nekoton.encodeInternalInput(args.abi, args.method, args.params);
    }
    encodeInternalMessage(args) {
        return this.nekoton.encodeInternalMessage(args.src, args.dst, args.bounce, args.stateInit, args.body, args.amount);
    }
    async createExternalMessage(args) {
        const unsignedMessage = this.nekoton.createExternalMessage(this.clock, args.address.toString(), args.abi, args.method, args.stateInit, args.params, args.signer.publicKey, args.timeout);
        try {
            const signature = await args.signer.sign(unsignedMessage.hash);
            return unsignedMessage.sign(signature);
        } finally{
            unsignedMessage.free();
        }
    }
    createRawExternalMessage(args) {
        return this.nekoton.createRawExternalMessage(args.address.toString(), args.stateInit, args.body, args.expireAt);
    }
}
exports.AccountsStorageContext = AccountsStorageContext;
/**
 * @category AccountsStorage
 */ class SimpleAccountsStorage {
    /**
     * Creates new simple accounts storage.
     *
     * If no `defaultAccount` provided, uses first provided entry
     *
     * @param args
     */ constructor(args = {}){
        this.accounts = new Map();
        if (args.entries != null) for (const account of args.entries){
            if (this._defaultAccount == null) this._defaultAccount = account.address;
            this.accounts.set(account.address.toString(), account);
        }
        if (args.defaultAccount != null) {
            let defaultAccount;
            if (args.defaultAccount instanceof everscale_inpage_provider_1.Address) defaultAccount = args.defaultAccount;
            else defaultAccount = new everscale_inpage_provider_1.Address(args.defaultAccount);
            if (!this.accounts.has(defaultAccount.toString())) throw new Error("Provided default account not found in storage");
            this._defaultAccount = defaultAccount;
        }
    }
    get defaultAccount() {
        return this._defaultAccount;
    }
    set defaultAccount(value) {
        const address = value === null || value === void 0 ? void 0 : value.toString();
        if (address != null && !this.accounts.has(address)) throw new Error("Account not found in storage");
        this._defaultAccount = value == null || value instanceof everscale_inpage_provider_1.Address ? value : new everscale_inpage_provider_1.Address(value);
    }
    async getAccount(address) {
        return this.accounts.get(address.toString());
    }
    addAccount(account) {
        const address = account.address;
        this.accounts.set(address.toString(), account);
        return address;
    }
    hasAccount(address) {
        return this.accounts.has(address.toString());
    }
    removeAccount(address) {
        this.accounts.delete(address.toString());
    }
}
exports.SimpleAccountsStorage = SimpleAccountsStorage;

},{"everscale-inpage-provider":"3AWTf","./Giver":"6AanL","./Generic":"1Z9Vv","./WalletV3":"kgKf2","./HighloadWalletV2":"aLfF5"}],"6AanL":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GiverAccount = void 0;
const everscale_inpage_provider_1 = require("everscale-inpage-provider");
/**
 * Any account which supports Giver ABI (GiverV2, GiverV3):
 *
 * ```
 * {
 *   "ABI version": 2,
 *   "header": ["pubkey", "time", "expire"],
 *   "functions": [{
 *     "name": "sendTransaction",
 *     "inputs": [
 *       {"name":"dest","type":"address"},
 *       {"name":"value","type":"uint128"},
 *       {"name":"bounce","type":"bool"},
 *     ],
 *     "outputs": []
 *   }],
 *   "events": []
 * }
 * ```
 *
 * @category AccountsStorage
 */ class GiverAccount {
    constructor(args){
        this.address = args.address instanceof everscale_inpage_provider_1.Address ? args.address : new everscale_inpage_provider_1.Address(args.address);
        this.publicKey = args.publicKey;
    }
    static fromVersion(version) {
        let address;
        switch(version){
            case 2:
                address = "0:ece57bcc6c530283becbbd8a3b24d3c5987cdddc3c8b7b33be6e4a6312490415";
                break;
            case 3:
                address = "0:78fbd6980c10cf41401b32e9b51810415e7578b52403af80dae68ddf99714498";
                break;
            default:
                throw new Error("Unknown version");
        }
        return new GiverAccount({
            address,
            publicKey: GiverAccount.GIVER_KEY_PAIR.publicKey
        });
    }
    async fetchPublicKey(_ctx) {
        return this.publicKey;
    }
    async prepareMessage(args, ctx) {
        if (args.payload != null) console.warn("Giver contract does not support payload");
        const signer = await ctx.getSigner(this.publicKey);
        return await ctx.createExternalMessage({
            address: this.address,
            signer,
            timeout: args.timeout,
            abi: GIVER_ABI,
            method: "sendTransaction",
            params: {
                dest: args.recipient,
                value: args.amount,
                bounce: args.bounce
            }
        });
    }
}
exports.GiverAccount = GiverAccount;
GiverAccount.GIVER_KEY_PAIR = {
    secretKey: "172af540e43a524763dd53b26a066d472a97c4de37d5498170564510608250c3",
    publicKey: "2ada2e65ab8eeab09490e3521415f45b6e42df9c760a639bcf53957550b25a16"
};
const GIVER_ABI = `{
  "ABI version": 2,
  "header": ["time", "expire"],
  "functions": [{
    "name": "sendTransaction",
    "inputs": [
      {"name":"dest","type":"address"},
      {"name":"value","type":"uint128"},
      {"name":"bounce","type":"bool"}
    ],
    "outputs": []
  }],
  "events": []
}`;

},{"everscale-inpage-provider":"3AWTf"}],"1Z9Vv":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MsigAccount = exports.GenericAccount = void 0;
const everscale_inpage_provider_1 = require("everscale-inpage-provider");
/**
 * @category AccountsStorage
 */ class GenericAccount {
    constructor(args){
        this.address = args.address instanceof everscale_inpage_provider_1.Address ? args.address : new everscale_inpage_provider_1.Address(args.address);
        this.abi = typeof args.abi === "string" ? args.abi : JSON.stringify(args.abi);
        this.prepareMessageImpl = args.prepareMessage;
        this.publicKey = args.publicKey;
    }
    async fetchPublicKey(ctx) {
        if (this.publicKey != null) return this.publicKey;
        this.publicKey = await ctx.fetchPublicKey(this.address);
        return this.publicKey;
    }
    async prepareMessage(args, ctx) {
        const publicKey = await this.fetchPublicKey(ctx);
        const signer = await ctx.getSigner(publicKey);
        const { method , params , stateInit  } = await this.prepareMessageImpl(args, ctx);
        return await ctx.createExternalMessage({
            address: this.address,
            signer,
            timeout: args.timeout,
            abi: this.abi,
            method,
            params,
            stateInit
        });
    }
}
exports.GenericAccount = GenericAccount;
/**
 * @category AccountsStorage
 */ class MsigAccount extends GenericAccount {
    constructor(args){
        super({
            address: args.address,
            publicKey: args.publicKey,
            abi: MSIG_ABI,
            prepareMessage: async (args, ctx)=>{
                const payload = args.payload ? ctx.encodeInternalInput(args.payload) : "";
                return {
                    method: "sendTransaction",
                    params: {
                        dest: args.recipient,
                        value: args.amount,
                        bounce: args.bounce,
                        flags: 3,
                        payload
                    }
                };
            }
        });
    }
}
exports.MsigAccount = MsigAccount;
const MSIG_ABI = `{
  "ABI version": 2,
  "header": ["pubkey", "time", "expire"],
  "functions": [{
    "name": "sendTransaction",
    "inputs": [
      {"name":"dest","type":"address"},
      {"name":"value","type":"uint128"},
      {"name":"bounce","type":"bool"},
      {"name":"flags","type":"uint8"},
      {"name":"payload","type":"cell"}
    ],
    "outputs": []
  }],
  "events": []
}`;

},{"everscale-inpage-provider":"3AWTf"}],"kgKf2":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WalletV3Account = void 0;
const everscale_inpage_provider_1 = require("everscale-inpage-provider");
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const core_1 = __importDefault(require("../../core"));
const { ensureNekotonLoaded , nekoton  } = core_1.default;
/**
 * @category AccountsStorage
 */ class WalletV3Account {
    constructor(address){
        this.address = address;
    }
    static async computeAddress(args) {
        // TODO: Somehow propagate init params
        await ensureNekotonLoaded();
        const publicKey = args.publicKey instanceof bignumber_js_1.default ? args.publicKey : new bignumber_js_1.default(`0x${args.publicKey}`);
        const tvc = makeStateInit(publicKey);
        const hash = nekoton.getBocHash(tvc);
        return new everscale_inpage_provider_1.Address(`${args.workchain != null ? args.workchain : 0}:${hash}`);
    }
    static async fromPubkey(args) {
        const publicKey = new bignumber_js_1.default(`0x${args.publicKey}`);
        const address = await WalletV3Account.computeAddress({
            publicKey,
            workchain: args.workchain
        });
        const result = new WalletV3Account(address);
        result.publicKey = publicKey;
        return result;
    }
    async fetchPublicKey(ctx) {
        let publicKey = this.publicKey;
        if (publicKey == null) publicKey = this.publicKey = await ctx.fetchPublicKey(this.address).then((publicKey)=>new bignumber_js_1.default(`0x${publicKey}`));
        return publicKey.toString(16).padStart(64, "0");
    }
    async prepareMessage(args, ctx) {
        const { seqno , publicKey , stateInit  } = await this.fetchState(ctx);
        const signer = await ctx.getSigner(publicKey);
        const expireAt = ctx.nowSec + args.timeout;
        const attachedPayload = args.payload ? ctx.encodeInternalInput(args.payload) : undefined;
        const internalMessage = ctx.encodeInternalMessage({
            dst: args.recipient,
            bounce: args.bounce,
            stateInit: args.stateInit,
            body: attachedPayload,
            amount: args.amount
        });
        const params = {
            walletId: WALLET_ID,
            expireAt,
            seqno,
            flags: 3,
            message: internalMessage
        };
        const unsignedPayload = ctx.packIntoCell({
            structure: UNSIGNED_TRANSFER_STRUCTURE,
            data: params
        });
        const hash = ctx.getBocHash(unsignedPayload);
        const signature = await signer.sign(hash);
        const { signatureParts  } = ctx.extendSignature(signature);
        params.signatureHigh = signatureParts.high;
        params.signatureLow = signatureParts.low;
        const signedPayload = ctx.packIntoCell({
            structure: SIGNED_TRANSFER_STRUCTURE,
            data: params
        });
        return ctx.createRawExternalMessage({
            address: this.address,
            body: signedPayload,
            stateInit,
            expireAt
        });
    }
    async fetchState(ctx) {
        let stateInit = undefined;
        let result;
        const state = await ctx.getFullContractState(this.address);
        if (state == null || !state.isDeployed) {
            if (this.publicKey == null) throw new Error("Contract not deployed and public key was not specified");
            stateInit = makeStateInit(this.publicKey);
            result = {
                seqno: 0,
                publicKey: this.publicKey
            };
        } else {
            const data = ctx.extractContractData(state.boc);
            if (data == null) throw new Error("Failed to extract contract data");
            result = parseInitData(ctx, data);
        }
        if (this.publicKey == null) this.publicKey = result.publicKey;
        else if (!this.publicKey.eq(result.publicKey)) throw new Error("Public key mismatch");
        return {
            seqno: result.seqno,
            publicKey: result.publicKey.toString(16).padStart(64, "0"),
            stateInit
        };
    }
}
exports.WalletV3Account = WalletV3Account;
const parseInitData = (ctx, boc)=>{
    const parsed = ctx.unpackFromCell({
        structure: DATA_STRUCTURE,
        boc,
        allowPartial: false
    });
    if (typeof parsed !== "object" || typeof parsed["seqno"] !== "string" || typeof parsed["publicKey"] !== "string") throw new Error("Invalid contract data ");
    return {
        seqno: parseInt(parsed.seqno),
        publicKey: new bignumber_js_1.default(parsed.publicKey)
    };
};
const makeStateInit = (publicKey)=>{
    const data = nekoton.packIntoCell(DATA_STRUCTURE, {
        seqno: 0,
        walletId: WALLET_ID,
        publicKey: publicKey.toFixed(0)
    });
    return nekoton.mergeTvc(WALLET_V3_CODE, data);
};
const UNSIGNED_TRANSFER_STRUCTURE = [
    {
        name: "walletId",
        type: "uint32"
    },
    {
        name: "expireAt",
        type: "uint32"
    },
    {
        name: "seqno",
        type: "uint32"
    },
    {
        name: "flags",
        type: "uint8"
    },
    {
        name: "message",
        type: "cell"
    }
];
const SIGNED_TRANSFER_STRUCTURE = [
    {
        name: "signatureHigh",
        type: "uint256"
    },
    {
        name: "signatureLow",
        type: "uint256"
    },
    ...UNSIGNED_TRANSFER_STRUCTURE
];
const DATA_STRUCTURE = [
    {
        name: "seqno",
        type: "uint32"
    },
    {
        name: "walletId",
        type: "uint32"
    },
    {
        name: "publicKey",
        type: "uint256"
    }
];
const WALLET_V3_CODE = "te6ccgEBAQEAcQAA3v8AIN0gggFMl7ohggEznLqxn3Gw7UTQ0x/THzHXC//jBOCk8mCDCNcYINMf0x/TH/gjE7vyY+1E0NMf0x/T/9FRMrryoVFEuvKiBPkBVBBV+RDyo/gAkyDXSpbTB9QC+wDo0QGkyMsfyx/L/8ntVA==";
const WALLET_ID = 0x4BA92D8A;

},{"everscale-inpage-provider":"3AWTf","bignumber.js":"57qkX","../../core":"01TnY"}],"57qkX":[function(require,module,exports) {
(function(globalObject) {
    "use strict";
    /*
 *      bignumber.js v9.1.0
 *      A JavaScript library for arbitrary-precision arithmetic.
 *      https://github.com/MikeMcl/bignumber.js
 *      Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *      MIT Licensed.
 *
 *      BigNumber.prototype methods     |  BigNumber methods
 *                                      |
 *      absoluteValue            abs    |  clone
 *      comparedTo                      |  config               set
 *      decimalPlaces            dp     |      DECIMAL_PLACES
 *      dividedBy                div    |      ROUNDING_MODE
 *      dividedToIntegerBy       idiv   |      EXPONENTIAL_AT
 *      exponentiatedBy          pow    |      RANGE
 *      integerValue                    |      CRYPTO
 *      isEqualTo                eq     |      MODULO_MODE
 *      isFinite                        |      POW_PRECISION
 *      isGreaterThan            gt     |      FORMAT
 *      isGreaterThanOrEqualTo   gte    |      ALPHABET
 *      isInteger                       |  isBigNumber
 *      isLessThan               lt     |  maximum              max
 *      isLessThanOrEqualTo      lte    |  minimum              min
 *      isNaN                           |  random
 *      isNegative                      |  sum
 *      isPositive                      |
 *      isZero                          |
 *      minus                           |
 *      modulo                   mod    |
 *      multipliedBy             times  |
 *      negated                         |
 *      plus                            |
 *      precision                sd     |
 *      shiftedBy                       |
 *      squareRoot               sqrt   |
 *      toExponential                   |
 *      toFixed                         |
 *      toFormat                        |
 *      toFraction                      |
 *      toJSON                          |
 *      toNumber                        |
 *      toPrecision                     |
 *      toString                        |
 *      valueOf                         |
 *
 */ var BigNumber, isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, mathceil = Math.ceil, mathfloor = Math.floor, bignumberError = "[BigNumber Error] ", tooManyDigits = bignumberError + "Number primitive has more than 15 significant digits: ", BASE = 1e14, LOG_BASE = 14, MAX_SAFE_INTEGER = 0x1fffffffffffff, // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
    POWS_TEN = [
        1,
        10,
        100,
        1e3,
        1e4,
        1e5,
        1e6,
        1e7,
        1e8,
        1e9,
        1e10,
        1e11,
        1e12,
        1e13
    ], SQRT_BASE = 1e7, // EDITABLE
    // The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
    // the arguments to toExponential, toFixed, toFormat, and toPrecision.
    MAX = 1E9; // 0 to MAX_INT32
    /*
   * Create and return a BigNumber constructor.
   */ function clone(configObject) {
        var div, convertBase, parseNumeric, P = BigNumber.prototype = {
            constructor: BigNumber,
            toString: null,
            valueOf: null
        }, ONE = new BigNumber(1), //----------------------------- EDITABLE CONFIG DEFAULTS -------------------------------
        // The default values below must be integers within the inclusive ranges stated.
        // The values can also be changed at run-time using BigNumber.set.
        // The maximum number of decimal places for operations involving division.
        DECIMAL_PLACES = 20, // The rounding mode used when rounding to the above decimal places, and when using
        // toExponential, toFixed, toFormat and toPrecision, and round (default value).
        // UP         0 Away from zero.
        // DOWN       1 Towards zero.
        // CEIL       2 Towards +Infinity.
        // FLOOR      3 Towards -Infinity.
        // HALF_UP    4 Towards nearest neighbour. If equidistant, up.
        // HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
        // HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
        // HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
        // HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
        ROUNDING_MODE = 4, // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]
        // The exponent value at and beneath which toString returns exponential notation.
        // Number type: -7
        TO_EXP_NEG = -7, // The exponent value at and above which toString returns exponential notation.
        // Number type: 21
        TO_EXP_POS = 21, // RANGE : [MIN_EXP, MAX_EXP]
        // The minimum exponent value, beneath which underflow to zero occurs.
        // Number type: -324  (5e-324)
        MIN_EXP = -10000000, // The maximum exponent value, above which overflow to Infinity occurs.
        // Number type:  308  (1.7976931348623157e+308)
        // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
        MAX_EXP = 1e7, // Whether to use cryptographically-secure random number generation, if available.
        CRYPTO = false, // The modulo mode used when calculating the modulus: a mod n.
        // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
        // The remainder (r) is calculated as: r = a - n * q.
        //
        // UP        0 The remainder is positive if the dividend is negative, else is negative.
        // DOWN      1 The remainder has the same sign as the dividend.
        //             This modulo mode is commonly known as 'truncated division' and is
        //             equivalent to (a % n) in JavaScript.
        // FLOOR     3 The remainder has the same sign as the divisor (Python %).
        // HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
        // EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
        //             The remainder is always positive.
        //
        // The truncated division, floored division, Euclidian division and IEEE 754 remainder
        // modes are commonly used for the modulus operation.
        // Although the other rounding modes can also be used, they may not give useful results.
        MODULO_MODE = 1, // The maximum number of significant digits of the result of the exponentiatedBy operation.
        // If POW_PRECISION is 0, there will be unlimited significant digits.
        POW_PRECISION = 0, // The format specification used by the BigNumber.prototype.toFormat method.
        FORMAT = {
            prefix: "",
            groupSize: 3,
            secondaryGroupSize: 0,
            groupSeparator: ",",
            decimalSeparator: ".",
            fractionGroupSize: 0,
            fractionGroupSeparator: "\xa0",
            suffix: ""
        }, // The alphabet used for base conversion. It must be at least 2 characters long, with no '+',
        // '-', '.', whitespace, or repeated character.
        // '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
        ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz", alphabetHasNormalDecimalDigits = true;
        //------------------------------------------------------------------------------------------
        // CONSTRUCTOR
        /*
     * The BigNumber constructor and exported function.
     * Create and return a new instance of a BigNumber object.
     *
     * v {number|string|BigNumber} A numeric value.
     * [b] {number} The base of v. Integer, 2 to ALPHABET.length inclusive.
     */ function BigNumber(v, b) {
            var alphabet, c, caseChanged, e, i, isNum, len, str, x = this;
            // Enable constructor call without `new`.
            if (!(x instanceof BigNumber)) return new BigNumber(v, b);
            if (b == null) {
                if (v && v._isBigNumber === true) {
                    x.s = v.s;
                    if (!v.c || v.e > MAX_EXP) x.c = x.e = null;
                    else if (v.e < MIN_EXP) x.c = [
                        x.e = 0
                    ];
                    else {
                        x.e = v.e;
                        x.c = v.c.slice();
                    }
                    return;
                }
                if ((isNum = typeof v == "number") && v * 0 == 0) {
                    // Use `1 / n` to handle minus zero also.
                    x.s = 1 / v < 0 ? (v = -v, -1) : 1;
                    // Fast path for integers, where n < 2147483648 (2**31).
                    if (v === ~~v) {
                        for(e = 0, i = v; i >= 10; i /= 10, e++);
                        if (e > MAX_EXP) x.c = x.e = null;
                        else {
                            x.e = e;
                            x.c = [
                                v
                            ];
                        }
                        return;
                    }
                    str = String(v);
                } else {
                    if (!isNumeric.test(str = String(v))) return parseNumeric(x, str, isNum);
                    x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
                }
                // Decimal point?
                if ((e = str.indexOf(".")) > -1) str = str.replace(".", "");
                // Exponential form?
                if ((i = str.search(/e/i)) > 0) {
                    // Determine exponent.
                    if (e < 0) e = i;
                    e += +str.slice(i + 1);
                    str = str.substring(0, i);
                } else if (e < 0) // Integer.
                e = str.length;
            } else {
                // '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
                intCheck(b, 2, ALPHABET.length, "Base");
                // Allow exponential notation to be used with base 10 argument, while
                // also rounding to DECIMAL_PLACES as with other bases.
                if (b == 10 && alphabetHasNormalDecimalDigits) {
                    x = new BigNumber(v);
                    return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
                }
                str = String(v);
                if (isNum = typeof v == "number") {
                    // Avoid potential interpretation of Infinity and NaN as base 44+ values.
                    if (v * 0 != 0) return parseNumeric(x, str, isNum, b);
                    x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;
                    // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
                    if (BigNumber.DEBUG && str.replace(/^0\.0*|\./, "").length > 15) throw Error(tooManyDigits + v);
                } else x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
                alphabet = ALPHABET.slice(0, b);
                e = i = 0;
                // Check that str is a valid base b number.
                // Don't use RegExp, so alphabet can contain special characters.
                for(len = str.length; i < len; i++)if (alphabet.indexOf(c = str.charAt(i)) < 0) {
                    if (c == ".") // If '.' is not the first character and it has not be found before.
                    {
                        if (i > e) {
                            e = len;
                            continue;
                        }
                    } else if (!caseChanged) // Allow e.g. hexadecimal 'FF' as well as 'ff'.
                    {
                        if (str == str.toUpperCase() && (str = str.toLowerCase()) || str == str.toLowerCase() && (str = str.toUpperCase())) {
                            caseChanged = true;
                            i = -1;
                            e = 0;
                            continue;
                        }
                    }
                    return parseNumeric(x, String(v), isNum, b);
                }
                // Prevent later check for length on converted number.
                isNum = false;
                str = convertBase(str, b, 10, x.s);
                // Decimal point?
                if ((e = str.indexOf(".")) > -1) str = str.replace(".", "");
                else e = str.length;
            }
            // Determine leading zeros.
            for(i = 0; str.charCodeAt(i) === 48; i++);
            // Determine trailing zeros.
            for(len = str.length; str.charCodeAt(--len) === 48;);
            if (str = str.slice(i, ++len)) {
                len -= i;
                // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
                if (isNum && BigNumber.DEBUG && len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) throw Error(tooManyDigits + x.s * v);
                // Overflow?
                if ((e = e - i - 1) > MAX_EXP) // Infinity.
                x.c = x.e = null;
                else if (e < MIN_EXP) // Zero.
                x.c = [
                    x.e = 0
                ];
                else {
                    x.e = e;
                    x.c = [];
                    // Transform base
                    // e is the base 10 exponent.
                    // i is where to slice str to get the first element of the coefficient array.
                    i = (e + 1) % LOG_BASE;
                    if (e < 0) i += LOG_BASE; // i < 1
                    if (i < len) {
                        if (i) x.c.push(+str.slice(0, i));
                        for(len -= LOG_BASE; i < len;)x.c.push(+str.slice(i, i += LOG_BASE));
                        i = LOG_BASE - (str = str.slice(i)).length;
                    } else i -= len;
                    for(; i--; str += "0");
                    x.c.push(+str);
                }
            } else // Zero.
            x.c = [
                x.e = 0
            ];
        }
        // CONSTRUCTOR PROPERTIES
        BigNumber.clone = clone;
        BigNumber.ROUND_UP = 0;
        BigNumber.ROUND_DOWN = 1;
        BigNumber.ROUND_CEIL = 2;
        BigNumber.ROUND_FLOOR = 3;
        BigNumber.ROUND_HALF_UP = 4;
        BigNumber.ROUND_HALF_DOWN = 5;
        BigNumber.ROUND_HALF_EVEN = 6;
        BigNumber.ROUND_HALF_CEIL = 7;
        BigNumber.ROUND_HALF_FLOOR = 8;
        BigNumber.EUCLID = 9;
        /*
     * Configure infrequently-changing library-wide settings.
     *
     * Accept an object with the following optional properties (if the value of a property is
     * a number, it must be an integer within the inclusive range stated):
     *
     *   DECIMAL_PLACES   {number}           0 to MAX
     *   ROUNDING_MODE    {number}           0 to 8
     *   EXPONENTIAL_AT   {number|number[]}  -MAX to MAX  or  [-MAX to 0, 0 to MAX]
     *   RANGE            {number|number[]}  -MAX to MAX (not zero)  or  [-MAX to -1, 1 to MAX]
     *   CRYPTO           {boolean}          true or false
     *   MODULO_MODE      {number}           0 to 9
     *   POW_PRECISION       {number}           0 to MAX
     *   ALPHABET         {string}           A string of two or more unique characters which does
     *                                       not contain '.'.
     *   FORMAT           {object}           An object with some of the following properties:
     *     prefix                 {string}
     *     groupSize              {number}
     *     secondaryGroupSize     {number}
     *     groupSeparator         {string}
     *     decimalSeparator       {string}
     *     fractionGroupSize      {number}
     *     fractionGroupSeparator {string}
     *     suffix                 {string}
     *
     * (The values assigned to the above FORMAT object properties are not checked for validity.)
     *
     * E.g.
     * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
     *
     * Ignore properties/parameters set to null or undefined, except for ALPHABET.
     *
     * Return an object with the properties current values.
     */ BigNumber.config = BigNumber.set = function(obj) {
            var p, v;
            if (obj != null) {
                if (typeof obj == "object") {
                    // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
                    // '[BigNumber Error] DECIMAL_PLACES {not a primitive number|not an integer|out of range}: {v}'
                    if (obj.hasOwnProperty(p = "DECIMAL_PLACES")) {
                        v = obj[p];
                        intCheck(v, 0, MAX, p);
                        DECIMAL_PLACES = v;
                    }
                    // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
                    // '[BigNumber Error] ROUNDING_MODE {not a primitive number|not an integer|out of range}: {v}'
                    if (obj.hasOwnProperty(p = "ROUNDING_MODE")) {
                        v = obj[p];
                        intCheck(v, 0, 8, p);
                        ROUNDING_MODE = v;
                    }
                    // EXPONENTIAL_AT {number|number[]}
                    // Integer, -MAX to MAX inclusive or
                    // [integer -MAX to 0 inclusive, 0 to MAX inclusive].
                    // '[BigNumber Error] EXPONENTIAL_AT {not a primitive number|not an integer|out of range}: {v}'
                    if (obj.hasOwnProperty(p = "EXPONENTIAL_AT")) {
                        v = obj[p];
                        if (v && v.pop) {
                            intCheck(v[0], -MAX, 0, p);
                            intCheck(v[1], 0, MAX, p);
                            TO_EXP_NEG = v[0];
                            TO_EXP_POS = v[1];
                        } else {
                            intCheck(v, -MAX, MAX, p);
                            TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
                        }
                    }
                    // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
                    // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
                    // '[BigNumber Error] RANGE {not a primitive number|not an integer|out of range|cannot be zero}: {v}'
                    if (obj.hasOwnProperty(p = "RANGE")) {
                        v = obj[p];
                        if (v && v.pop) {
                            intCheck(v[0], -MAX, -1, p);
                            intCheck(v[1], 1, MAX, p);
                            MIN_EXP = v[0];
                            MAX_EXP = v[1];
                        } else {
                            intCheck(v, -MAX, MAX, p);
                            if (v) MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
                            else throw Error(bignumberError + p + " cannot be zero: " + v);
                        }
                    }
                    // CRYPTO {boolean} true or false.
                    // '[BigNumber Error] CRYPTO not true or false: {v}'
                    // '[BigNumber Error] crypto unavailable'
                    if (obj.hasOwnProperty(p = "CRYPTO")) {
                        v = obj[p];
                        if (v === !!v) {
                            if (v) {
                                if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) CRYPTO = v;
                                else {
                                    CRYPTO = !v;
                                    throw Error(bignumberError + "crypto unavailable");
                                }
                            } else CRYPTO = v;
                        } else throw Error(bignumberError + p + " not true or false: " + v);
                    }
                    // MODULO_MODE {number} Integer, 0 to 9 inclusive.
                    // '[BigNumber Error] MODULO_MODE {not a primitive number|not an integer|out of range}: {v}'
                    if (obj.hasOwnProperty(p = "MODULO_MODE")) {
                        v = obj[p];
                        intCheck(v, 0, 9, p);
                        MODULO_MODE = v;
                    }
                    // POW_PRECISION {number} Integer, 0 to MAX inclusive.
                    // '[BigNumber Error] POW_PRECISION {not a primitive number|not an integer|out of range}: {v}'
                    if (obj.hasOwnProperty(p = "POW_PRECISION")) {
                        v = obj[p];
                        intCheck(v, 0, MAX, p);
                        POW_PRECISION = v;
                    }
                    // FORMAT {object}
                    // '[BigNumber Error] FORMAT not an object: {v}'
                    if (obj.hasOwnProperty(p = "FORMAT")) {
                        v = obj[p];
                        if (typeof v == "object") FORMAT = v;
                        else throw Error(bignumberError + p + " not an object: " + v);
                    }
                    // ALPHABET {string}
                    // '[BigNumber Error] ALPHABET invalid: {v}'
                    if (obj.hasOwnProperty(p = "ALPHABET")) {
                        v = obj[p];
                        // Disallow if less than two characters,
                        // or if it contains '+', '-', '.', whitespace, or a repeated character.
                        if (typeof v == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
                            alphabetHasNormalDecimalDigits = v.slice(0, 10) == "0123456789";
                            ALPHABET = v;
                        } else throw Error(bignumberError + p + " invalid: " + v);
                    }
                } else // '[BigNumber Error] Object expected: {v}'
                throw Error(bignumberError + "Object expected: " + obj);
            }
            return {
                DECIMAL_PLACES: DECIMAL_PLACES,
                ROUNDING_MODE: ROUNDING_MODE,
                EXPONENTIAL_AT: [
                    TO_EXP_NEG,
                    TO_EXP_POS
                ],
                RANGE: [
                    MIN_EXP,
                    MAX_EXP
                ],
                CRYPTO: CRYPTO,
                MODULO_MODE: MODULO_MODE,
                POW_PRECISION: POW_PRECISION,
                FORMAT: FORMAT,
                ALPHABET: ALPHABET
            };
        };
        /*
     * Return true if v is a BigNumber instance, otherwise return false.
     *
     * If BigNumber.DEBUG is true, throw if a BigNumber instance is not well-formed.
     *
     * v {any}
     *
     * '[BigNumber Error] Invalid BigNumber: {v}'
     */ BigNumber.isBigNumber = function(v) {
            if (!v || v._isBigNumber !== true) return false;
            if (!BigNumber.DEBUG) return true;
            var i, n, c = v.c, e = v.e, s = v.s;
            out: if (({}).toString.call(c) == "[object Array]") {
                if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {
                    // If the first element is zero, the BigNumber value must be zero.
                    if (c[0] === 0) {
                        if (e === 0 && c.length === 1) return true;
                        break out;
                    }
                    // Calculate number of digits that c[0] should have, based on the exponent.
                    i = (e + 1) % LOG_BASE;
                    if (i < 1) i += LOG_BASE;
                    // Calculate number of digits of c[0].
                    //if (Math.ceil(Math.log(c[0] + 1) / Math.LN10) == i) {
                    if (String(c[0]).length == i) {
                        for(i = 0; i < c.length; i++){
                            n = c[i];
                            if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
                        }
                        // Last element cannot be zero, unless it is the only element.
                        if (n !== 0) return true;
                    }
                }
            } else if (c === null && e === null && (s === null || s === 1 || s === -1)) return true;
            throw Error(bignumberError + "Invalid BigNumber: " + v);
        };
        /*
     * Return a new BigNumber whose value is the maximum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */ BigNumber.maximum = BigNumber.max = function() {
            return maxOrMin(arguments, P.lt);
        };
        /*
     * Return a new BigNumber whose value is the minimum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */ BigNumber.minimum = BigNumber.min = function() {
            return maxOrMin(arguments, P.gt);
        };
        /*
     * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
     * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
     * zeros are produced).
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp}'
     * '[BigNumber Error] crypto unavailable'
     */ BigNumber.random = function() {
            var pow2_53 = 0x20000000000000;
            // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
            // Check if Math.random() produces more than 32 bits of randomness.
            // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
            // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
            var random53bitInt = Math.random() * pow2_53 & 0x1fffff ? function() {
                return mathfloor(Math.random() * pow2_53);
            } : function() {
                return (Math.random() * 0x40000000 | 0) * 0x800000 + (Math.random() * 0x800000 | 0);
            };
            return function(dp) {
                var a, b, e, k, v, i = 0, c = [], rand = new BigNumber(ONE);
                if (dp == null) dp = DECIMAL_PLACES;
                else intCheck(dp, 0, MAX);
                k = mathceil(dp / LOG_BASE);
                if (CRYPTO) {
                    // Browsers supporting crypto.getRandomValues.
                    if (crypto.getRandomValues) {
                        a = crypto.getRandomValues(new Uint32Array(k *= 2));
                        for(; i < k;){
                            // 53 bits:
                            // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
                            // 11111 11111111 11111111 11111111 11100000 00000000 00000000
                            // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
                            //                                     11111 11111111 11111111
                            // 0x20000 is 2^21.
                            v = a[i] * 0x20000 + (a[i + 1] >>> 11);
                            // Rejection sampling:
                            // 0 <= v < 9007199254740992
                            // Probability that v >= 9e15, is
                            // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
                            if (v >= 9e15) {
                                b = crypto.getRandomValues(new Uint32Array(2));
                                a[i] = b[0];
                                a[i + 1] = b[1];
                            } else {
                                // 0 <= v <= 8999999999999999
                                // 0 <= (v % 1e14) <= 99999999999999
                                c.push(v % 1e14);
                                i += 2;
                            }
                        }
                        i = k / 2;
                    // Node.js supporting crypto.randomBytes.
                    } else if (crypto.randomBytes) {
                        // buffer
                        a = crypto.randomBytes(k *= 7);
                        for(; i < k;){
                            // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
                            // 0x100000000 is 2^32, 0x1000000 is 2^24
                            // 11111 11111111 11111111 11111111 11111111 11111111 11111111
                            // 0 <= v < 9007199254740992
                            v = (a[i] & 31) * 0x1000000000000 + a[i + 1] * 0x10000000000 + a[i + 2] * 0x100000000 + a[i + 3] * 0x1000000 + (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];
                            if (v >= 9e15) crypto.randomBytes(7).copy(a, i);
                            else {
                                // 0 <= (v % 1e14) <= 99999999999999
                                c.push(v % 1e14);
                                i += 7;
                            }
                        }
                        i = k / 7;
                    } else {
                        CRYPTO = false;
                        throw Error(bignumberError + "crypto unavailable");
                    }
                }
                // Use Math.random.
                if (!CRYPTO) for(; i < k;){
                    v = random53bitInt();
                    if (v < 9e15) c[i++] = v % 1e14;
                }
                k = c[--i];
                dp %= LOG_BASE;
                // Convert trailing digits to zeros according to dp.
                if (k && dp) {
                    v = POWS_TEN[LOG_BASE - dp];
                    c[i] = mathfloor(k / v) * v;
                }
                // Remove trailing elements which are zero.
                for(; c[i] === 0; c.pop(), i--);
                // Zero?
                if (i < 0) c = [
                    e = 0
                ];
                else {
                    // Remove leading elements which are zero and adjust exponent accordingly.
                    for(e = -1; c[0] === 0; c.splice(0, 1), e -= LOG_BASE);
                    // Count the digits of the first element of c to determine leading zeros, and...
                    for(i = 1, v = c[0]; v >= 10; v /= 10, i++);
                    // adjust the exponent accordingly.
                    if (i < LOG_BASE) e -= LOG_BASE - i;
                }
                rand.e = e;
                rand.c = c;
                return rand;
            };
        }();
        /*
     * Return a BigNumber whose value is the sum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */ BigNumber.sum = function() {
            var i = 1, args = arguments, sum = new BigNumber(args[0]);
            for(; i < args.length;)sum = sum.plus(args[i++]);
            return sum;
        };
        // PRIVATE FUNCTIONS
        // Called by BigNumber and BigNumber.prototype.toString.
        convertBase = function() {
            var decimal = "0123456789";
            /*
       * Convert string of baseIn to an array of numbers of baseOut.
       * Eg. toBaseOut('255', 10, 16) returns [15, 15].
       * Eg. toBaseOut('ff', 16, 10) returns [2, 5, 5].
       */ function toBaseOut(str, baseIn, baseOut, alphabet) {
                var j, arr = [
                    0
                ], arrL, i = 0, len = str.length;
                for(; i < len;){
                    for(arrL = arr.length; arrL--; arr[arrL] *= baseIn);
                    arr[0] += alphabet.indexOf(str.charAt(i++));
                    for(j = 0; j < arr.length; j++)if (arr[j] > baseOut - 1) {
                        if (arr[j + 1] == null) arr[j + 1] = 0;
                        arr[j + 1] += arr[j] / baseOut | 0;
                        arr[j] %= baseOut;
                    }
                }
                return arr.reverse();
            }
            // Convert a numeric string of baseIn to a numeric string of baseOut.
            // If the caller is toString, we are converting from base 10 to baseOut.
            // If the caller is BigNumber, we are converting from baseIn to base 10.
            return function(str, baseIn, baseOut, sign, callerIsToString) {
                var alphabet, d, e, k, r, x, xc, y, i = str.indexOf("."), dp = DECIMAL_PLACES, rm = ROUNDING_MODE;
                // Non-integer.
                if (i >= 0) {
                    k = POW_PRECISION;
                    // Unlimited precision.
                    POW_PRECISION = 0;
                    str = str.replace(".", "");
                    y = new BigNumber(baseIn);
                    x = y.pow(str.length - i);
                    POW_PRECISION = k;
                    // Convert str as if an integer, then restore the fraction part by dividing the
                    // result by its base raised to a power.
                    y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, "0"), 10, baseOut, decimal);
                    y.e = y.c.length;
                }
                // Convert the number as integer.
                xc = toBaseOut(str, baseIn, baseOut, callerIsToString ? (alphabet = ALPHABET, decimal) : (alphabet = decimal, ALPHABET));
                // xc now represents str as an integer and converted to baseOut. e is the exponent.
                e = k = xc.length;
                // Remove trailing zeros.
                for(; xc[--k] == 0; xc.pop());
                // Zero?
                if (!xc[0]) return alphabet.charAt(0);
                // Does str represent an integer? If so, no need for the division.
                if (i < 0) --e;
                else {
                    x.c = xc;
                    x.e = e;
                    // The sign is needed for correct rounding.
                    x.s = sign;
                    x = div(x, y, dp, rm, baseOut);
                    xc = x.c;
                    r = x.r;
                    e = x.e;
                }
                // xc now represents str converted to baseOut.
                // THe index of the rounding digit.
                d = e + dp + 1;
                // The rounding digit: the digit to the right of the digit that may be rounded up.
                i = xc[d];
                // Look at the rounding digits and mode to determine whether to round up.
                k = baseOut / 2;
                r = r || d < 0 || xc[d + 1] != null;
                r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : i > k || i == k && (rm == 4 || r || rm == 6 && xc[d - 1] & 1 || rm == (x.s < 0 ? 8 : 7));
                // If the index of the rounding digit is not greater than zero, or xc represents
                // zero, then the result of the base conversion is zero or, if rounding up, a value
                // such as 0.00001.
                if (d < 1 || !xc[0]) // 1^-dp or 0
                str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
                else {
                    // Truncate xc to the required number of decimal places.
                    xc.length = d;
                    // Round up?
                    if (r) // Rounding up may mean the previous digit has to be rounded up and so on.
                    for(--baseOut; ++xc[--d] > baseOut;){
                        xc[d] = 0;
                        if (!d) {
                            ++e;
                            xc = [
                                1
                            ].concat(xc);
                        }
                    }
                    // Determine trailing zeros.
                    for(k = xc.length; !xc[--k];);
                    // E.g. [4, 11, 15] becomes 4bf.
                    for(i = 0, str = ""; i <= k; str += alphabet.charAt(xc[i++]));
                    // Add leading zeros, decimal point and trailing zeros as required.
                    str = toFixedPoint(str, e, alphabet.charAt(0));
                }
                // The caller will add the sign.
                return str;
            };
        }();
        // Perform division in the specified base. Called by div and convertBase.
        div = function() {
            // Assume non-zero x and k.
            function multiply(x, k, base) {
                var m, temp, xlo, xhi, carry = 0, i = x.length, klo = k % SQRT_BASE, khi = k / SQRT_BASE | 0;
                for(x = x.slice(); i--;){
                    xlo = x[i] % SQRT_BASE;
                    xhi = x[i] / SQRT_BASE | 0;
                    m = khi * xlo + xhi * klo;
                    temp = klo * xlo + m % SQRT_BASE * SQRT_BASE + carry;
                    carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
                    x[i] = temp % base;
                }
                if (carry) x = [
                    carry
                ].concat(x);
                return x;
            }
            function compare(a, b, aL, bL) {
                var i, cmp;
                if (aL != bL) cmp = aL > bL ? 1 : -1;
                else {
                    for(i = cmp = 0; i < aL; i++)if (a[i] != b[i]) {
                        cmp = a[i] > b[i] ? 1 : -1;
                        break;
                    }
                }
                return cmp;
            }
            function subtract(a, b, aL, base) {
                var i = 0;
                // Subtract b from a.
                for(; aL--;){
                    a[aL] -= i;
                    i = a[aL] < b[aL] ? 1 : 0;
                    a[aL] = i * base + a[aL] - b[aL];
                }
                // Remove leading zeros.
                for(; !a[0] && a.length > 1; a.splice(0, 1));
            }
            // x: dividend, y: divisor.
            return function(x, y, dp, rm, base) {
                var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0, yL, yz, s = x.s == y.s ? 1 : -1, xc = x.c, yc = y.c;
                // Either NaN, Infinity or 0?
                if (!xc || !xc[0] || !yc || !yc[0]) return new BigNumber(// Return NaN if either NaN, or both Infinity or 0.
                !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN : // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
                xc && xc[0] == 0 || !yc ? s * 0 : s / 0);
                q = new BigNumber(s);
                qc = q.c = [];
                e = x.e - y.e;
                s = dp + e + 1;
                if (!base) {
                    base = BASE;
                    e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
                    s = s / LOG_BASE | 0;
                }
                // Result exponent may be one less then the current value of e.
                // The coefficients of the BigNumbers from convertBase may have trailing zeros.
                for(i = 0; yc[i] == (xc[i] || 0); i++);
                if (yc[i] > (xc[i] || 0)) e--;
                if (s < 0) {
                    qc.push(1);
                    more = true;
                } else {
                    xL = xc.length;
                    yL = yc.length;
                    i = 0;
                    s += 2;
                    // Normalise xc and yc so highest order digit of yc is >= base / 2.
                    n = mathfloor(base / (yc[0] + 1));
                    // Not necessary, but to handle odd bases where yc[0] == (base / 2) - 1.
                    // if (n > 1 || n++ == 1 && yc[0] < base / 2) {
                    if (n > 1) {
                        yc = multiply(yc, n, base);
                        xc = multiply(xc, n, base);
                        yL = yc.length;
                        xL = xc.length;
                    }
                    xi = yL;
                    rem = xc.slice(0, yL);
                    remL = rem.length;
                    // Add zeros to make remainder as long as divisor.
                    for(; remL < yL; rem[remL++] = 0);
                    yz = yc.slice();
                    yz = [
                        0
                    ].concat(yz);
                    yc0 = yc[0];
                    if (yc[1] >= base / 2) yc0++;
                    // Not necessary, but to prevent trial digit n > base, when using base 3.
                    // else if (base == 3 && yc0 == 1) yc0 = 1 + 1e-15;
                    do {
                        n = 0;
                        // Compare divisor and remainder.
                        cmp = compare(yc, rem, yL, remL);
                        // If divisor < remainder.
                        if (cmp < 0) {
                            // Calculate trial digit, n.
                            rem0 = rem[0];
                            if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);
                            // n is how many times the divisor goes into the current remainder.
                            n = mathfloor(rem0 / yc0);
                            //  Algorithm:
                            //  product = divisor multiplied by trial digit (n).
                            //  Compare product and remainder.
                            //  If product is greater than remainder:
                            //    Subtract divisor from product, decrement trial digit.
                            //  Subtract product from remainder.
                            //  If product was less than remainder at the last compare:
                            //    Compare new remainder and divisor.
                            //    If remainder is greater than divisor:
                            //      Subtract divisor from remainder, increment trial digit.
                            if (n > 1) {
                                // n may be > base only when base is 3.
                                if (n >= base) n = base - 1;
                                // product = divisor * trial digit.
                                prod = multiply(yc, n, base);
                                prodL = prod.length;
                                remL = rem.length;
                                // Compare product and remainder.
                                // If product > remainder then trial digit n too high.
                                // n is 1 too high about 5% of the time, and is not known to have
                                // ever been more than 1 too high.
                                while(compare(prod, rem, prodL, remL) == 1){
                                    n--;
                                    // Subtract divisor from product.
                                    subtract(prod, yL < prodL ? yz : yc, prodL, base);
                                    prodL = prod.length;
                                    cmp = 1;
                                }
                            } else {
                                // n is 0 or 1, cmp is -1.
                                // If n is 0, there is no need to compare yc and rem again below,
                                // so change cmp to 1 to avoid it.
                                // If n is 1, leave cmp as -1, so yc and rem are compared again.
                                if (n == 0) // divisor < remainder, so n must be at least 1.
                                cmp = n = 1;
                                // product = divisor
                                prod = yc.slice();
                                prodL = prod.length;
                            }
                            if (prodL < remL) prod = [
                                0
                            ].concat(prod);
                            // Subtract product from remainder.
                            subtract(rem, prod, remL, base);
                            remL = rem.length;
                            // If product was < remainder.
                            if (cmp == -1) // Compare divisor and new remainder.
                            // If divisor < new remainder, subtract divisor from remainder.
                            // Trial digit n too low.
                            // n is 1 too low about 5% of the time, and very rarely 2 too low.
                            while(compare(yc, rem, yL, remL) < 1){
                                n++;
                                // Subtract divisor from remainder.
                                subtract(rem, yL < remL ? yz : yc, remL, base);
                                remL = rem.length;
                            }
                        } else if (cmp === 0) {
                            n++;
                            rem = [
                                0
                            ];
                        } // else cmp === 1 and n will be 0
                        // Add the next digit, n, to the result array.
                        qc[i++] = n;
                        // Update the remainder.
                        if (rem[0]) rem[remL++] = xc[xi] || 0;
                        else {
                            rem = [
                                xc[xi]
                            ];
                            remL = 1;
                        }
                    }while ((xi++ < xL || rem[0] != null) && s--);
                    more = rem[0] != null;
                    // Leading zero?
                    if (!qc[0]) qc.splice(0, 1);
                }
                if (base == BASE) {
                    // To calculate q.e, first get the number of digits of qc[0].
                    for(i = 1, s = qc[0]; s >= 10; s /= 10, i++);
                    round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);
                // Caller is convertBase.
                } else {
                    q.e = e;
                    q.r = +more;
                }
                return q;
            };
        }();
        /*
     * Return a string representing the value of BigNumber n in fixed-point or exponential
     * notation rounded to the specified decimal places or significant digits.
     *
     * n: a BigNumber.
     * i: the index of the last digit required (i.e. the digit that may be rounded up).
     * rm: the rounding mode.
     * id: 1 (toExponential) or 2 (toPrecision).
     */ function format(n, i, rm, id) {
            var c0, e, ne, len, str;
            if (rm == null) rm = ROUNDING_MODE;
            else intCheck(rm, 0, 8);
            if (!n.c) return n.toString();
            c0 = n.c[0];
            ne = n.e;
            if (i == null) {
                str = coeffToString(n.c);
                str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS) ? toExponential(str, ne) : toFixedPoint(str, ne, "0");
            } else {
                n = round(new BigNumber(n), i, rm);
                // n.e may have changed if the value was rounded up.
                e = n.e;
                str = coeffToString(n.c);
                len = str.length;
                // toPrecision returns exponential notation if the number of significant digits
                // specified is less than the number of digits necessary to represent the integer
                // part of the value in fixed-point notation.
                // Exponential notation.
                if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {
                    // Append zeros?
                    for(; len < i; str += "0", len++);
                    str = toExponential(str, e);
                // Fixed-point notation.
                } else {
                    i -= ne;
                    str = toFixedPoint(str, e, "0");
                    // Append zeros?
                    if (e + 1 > len) {
                        if (--i > 0) for(str += "."; i--; str += "0");
                    } else {
                        i += e - len;
                        if (i > 0) {
                            if (e + 1 == len) str += ".";
                            for(; i--; str += "0");
                        }
                    }
                }
            }
            return n.s < 0 && c0 ? "-" + str : str;
        }
        // Handle BigNumber.max and BigNumber.min.
        function maxOrMin(args, method) {
            var n, i = 1, m = new BigNumber(args[0]);
            for(; i < args.length; i++){
                n = new BigNumber(args[i]);
                // If any number is NaN, return NaN.
                if (!n.s) {
                    m = n;
                    break;
                } else if (method.call(m, n)) m = n;
            }
            return m;
        }
        /*
     * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
     * Called by minus, plus and times.
     */ function normalise(n, c, e) {
            var i = 1, j = c.length;
            // Remove trailing zeros.
            for(; !c[--j]; c.pop());
            // Calculate the base 10 exponent. First get the number of digits of c[0].
            for(j = c[0]; j >= 10; j /= 10, i++);
            // Overflow?
            if ((e = i + e * LOG_BASE - 1) > MAX_EXP) // Infinity.
            n.c = n.e = null;
            else if (e < MIN_EXP) // Zero.
            n.c = [
                n.e = 0
            ];
            else {
                n.e = e;
                n.c = c;
            }
            return n;
        }
        // Handle values that fail the validity test in BigNumber.
        parseNumeric = function() {
            var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i, dotAfter = /^([^.]+)\.$/, dotBefore = /^\.([^.]+)$/, isInfinityOrNaN = /^-?(Infinity|NaN)$/, whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
            return function(x, str, isNum, b) {
                var base, s = isNum ? str : str.replace(whitespaceOrPlus, "");
                // No exception on ±Infinity or NaN.
                if (isInfinityOrNaN.test(s)) x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
                else {
                    if (!isNum) {
                        // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
                        s = s.replace(basePrefix, function(m, p1, p2) {
                            base = (p2 = p2.toLowerCase()) == "x" ? 16 : p2 == "b" ? 2 : 8;
                            return !b || b == base ? p1 : m;
                        });
                        if (b) {
                            base = b;
                            // E.g. '1.' to '1', '.1' to '0.1'
                            s = s.replace(dotAfter, "$1").replace(dotBefore, "0.$1");
                        }
                        if (str != s) return new BigNumber(s, base);
                    }
                    // '[BigNumber Error] Not a number: {n}'
                    // '[BigNumber Error] Not a base {b} number: {n}'
                    if (BigNumber.DEBUG) throw Error(bignumberError + "Not a" + (b ? " base " + b : "") + " number: " + str);
                    // NaN
                    x.s = null;
                }
                x.c = x.e = null;
            };
        }();
        /*
     * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
     * If r is truthy, it is known that there are more digits after the rounding digit.
     */ function round(x, sd, rm, r) {
            var d, i, j, k, n, ni, rd, xc = x.c, pows10 = POWS_TEN;
            // if x is not Infinity or NaN...
            if (xc) {
                // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
                // n is a base 1e14 number, the value of the element of array x.c containing rd.
                // ni is the index of n within x.c.
                // d is the number of digits of n.
                // i is the index of rd within n including leading zeros.
                // j is the actual index of rd within n (if < 0, rd is a leading zero).
                out: {
                    // Get the number of digits of the first element of xc.
                    for(d = 1, k = xc[0]; k >= 10; k /= 10, d++);
                    i = sd - d;
                    // If the rounding digit is in the first element of xc...
                    if (i < 0) {
                        i += LOG_BASE;
                        j = sd;
                        n = xc[ni = 0];
                        // Get the rounding digit at index j of n.
                        rd = n / pows10[d - j - 1] % 10 | 0;
                    } else {
                        ni = mathceil((i + 1) / LOG_BASE);
                        if (ni >= xc.length) {
                            if (r) {
                                // Needed by sqrt.
                                for(; xc.length <= ni; xc.push(0));
                                n = rd = 0;
                                d = 1;
                                i %= LOG_BASE;
                                j = i - LOG_BASE + 1;
                            } else break out;
                        } else {
                            n = k = xc[ni];
                            // Get the number of digits of n.
                            for(d = 1; k >= 10; k /= 10, d++);
                            // Get the index of rd within n.
                            i %= LOG_BASE;
                            // Get the index of rd within n, adjusted for leading zeros.
                            // The number of leading zeros of n is given by LOG_BASE - d.
                            j = i - LOG_BASE + d;
                            // Get the rounding digit at index j of n.
                            rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
                        }
                    }
                    r = r || sd < 0 || // Are there any non-zero digits after the rounding digit?
                    // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
                    // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
                    xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);
                    r = rm < 4 ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 && (i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
                    if (sd < 1 || !xc[0]) {
                        xc.length = 0;
                        if (r) {
                            // Convert sd to decimal places.
                            sd -= x.e + 1;
                            // 1, 0.1, 0.01, 0.001, 0.0001 etc.
                            xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
                            x.e = -sd || 0;
                        } else // Zero.
                        xc[0] = x.e = 0;
                        return x;
                    }
                    // Remove excess digits.
                    if (i == 0) {
                        xc.length = ni;
                        k = 1;
                        ni--;
                    } else {
                        xc.length = ni + 1;
                        k = pows10[LOG_BASE - i];
                        // E.g. 56700 becomes 56000 if 7 is the rounding digit.
                        // j > 0 means i > number of leading zeros of n.
                        xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
                    }
                    // Round up?
                    if (r) {
                        for(;;)// If the digit to be rounded up is in the first element of xc...
                        if (ni == 0) {
                            // i will be the length of xc[0] before k is added.
                            for(i = 1, j = xc[0]; j >= 10; j /= 10, i++);
                            j = xc[0] += k;
                            for(k = 1; j >= 10; j /= 10, k++);
                            // if i != k the length has increased.
                            if (i != k) {
                                x.e++;
                                if (xc[0] == BASE) xc[0] = 1;
                            }
                            break;
                        } else {
                            xc[ni] += k;
                            if (xc[ni] != BASE) break;
                            xc[ni--] = 0;
                            k = 1;
                        }
                    }
                    // Remove trailing zeros.
                    for(i = xc.length; xc[--i] === 0; xc.pop());
                }
                // Overflow? Infinity.
                if (x.e > MAX_EXP) x.c = x.e = null;
                else if (x.e < MIN_EXP) x.c = [
                    x.e = 0
                ];
            }
            return x;
        }
        function valueOf(n) {
            var str, e = n.e;
            if (e === null) return n.toString();
            str = coeffToString(n.c);
            str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(str, e) : toFixedPoint(str, e, "0");
            return n.s < 0 ? "-" + str : str;
        }
        // PROTOTYPE/INSTANCE METHODS
        /*
     * Return a new BigNumber whose value is the absolute value of this BigNumber.
     */ P.absoluteValue = P.abs = function() {
            var x = new BigNumber(this);
            if (x.s < 0) x.s = 1;
            return x;
        };
        /*
     * Return
     *   1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
     *   -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
     *   0 if they have the same value,
     *   or null if the value of either is NaN.
     */ P.comparedTo = function(y, b) {
            return compare(this, new BigNumber(y, b));
        };
        /*
     * If dp is undefined or null or true or false, return the number of decimal places of the
     * value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     *
     * Otherwise, if dp is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of dp decimal places using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * [dp] {number} Decimal places: integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */ P.decimalPlaces = P.dp = function(dp, rm) {
            var c, n, v, x = this;
            if (dp != null) {
                intCheck(dp, 0, MAX);
                if (rm == null) rm = ROUNDING_MODE;
                else intCheck(rm, 0, 8);
                return round(new BigNumber(x), dp + x.e + 1, rm);
            }
            if (!(c = x.c)) return null;
            n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;
            // Subtract the number of trailing zeros of the last number.
            if (v = c[v]) for(; v % 10 == 0; v /= 10, n--);
            if (n < 0) n = 0;
            return n;
        };
        /*
     *  n / 0 = I
     *  n / N = N
     *  n / I = 0
     *  0 / n = 0
     *  0 / 0 = N
     *  0 / N = N
     *  0 / I = 0
     *  N / n = N
     *  N / 0 = N
     *  N / N = N
     *  N / I = N
     *  I / n = I
     *  I / 0 = I
     *  I / N = N
     *  I / I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
     * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */ P.dividedBy = P.div = function(y, b) {
            return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
        };
        /*
     * Return a new BigNumber whose value is the integer part of dividing the value of this
     * BigNumber by the value of BigNumber(y, b).
     */ P.dividedToIntegerBy = P.idiv = function(y, b) {
            return div(this, new BigNumber(y, b), 0, 1);
        };
        /*
     * Return a BigNumber whose value is the value of this BigNumber exponentiated by n.
     *
     * If m is present, return the result modulo m.
     * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
     * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using ROUNDING_MODE.
     *
     * The modular power operation works efficiently when x, n, and m are integers, otherwise it
     * is equivalent to calculating x.exponentiatedBy(n).modulo(m) with a POW_PRECISION of 0.
     *
     * n {number|string|BigNumber} The exponent. An integer.
     * [m] {number|string|BigNumber} The modulus.
     *
     * '[BigNumber Error] Exponent not an integer: {n}'
     */ P.exponentiatedBy = P.pow = function(n, m) {
            var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y, x = this;
            n = new BigNumber(n);
            // Allow NaN and ±Infinity, but not other non-integers.
            if (n.c && !n.isInteger()) throw Error(bignumberError + "Exponent not an integer: " + valueOf(n));
            if (m != null) m = new BigNumber(m);
            // Exponent of MAX_SAFE_INTEGER is 15.
            nIsBig = n.e > 14;
            // If x is NaN, ±Infinity, ±0 or ±1, or n is ±Infinity, NaN or ±0.
            if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {
                // The sign of the result of pow when x is negative depends on the evenness of n.
                // If +n overflows to ±Infinity, the evenness of n would be not be known.
                y = new BigNumber(Math.pow(+valueOf(x), nIsBig ? 2 - isOdd(n) : +valueOf(n)));
                return m ? y.mod(m) : y;
            }
            nIsNeg = n.s < 0;
            if (m) {
                // x % m returns NaN if abs(m) is zero, or m is NaN.
                if (m.c ? !m.c[0] : !m.s) return new BigNumber(NaN);
                isModExp = !nIsNeg && x.isInteger() && m.isInteger();
                if (isModExp) x = x.mod(m);
            // Overflow to ±Infinity: >=2**1e10 or >=1.0000024**1e15.
            // Underflow to ±0: <=0.79**1e10 or <=0.9999975**1e15.
            } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0 ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7 : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {
                // If x is negative and n is odd, k = -0, else k = 0.
                k = x.s < 0 && isOdd(n) ? -0 : 0;
                // If x >= 1, k = ±Infinity.
                if (x.e > -1) k = 1 / k;
                // If n is negative return ±0, else return ±Infinity.
                return new BigNumber(nIsNeg ? 1 / k : k);
            } else if (POW_PRECISION) // Truncating each coefficient array to a length of k after each multiplication
            // equates to truncating significant digits to POW_PRECISION + [28, 41],
            // i.e. there will be a minimum of 28 guard digits retained.
            k = mathceil(POW_PRECISION / LOG_BASE + 2);
            if (nIsBig) {
                half = new BigNumber(0.5);
                if (nIsNeg) n.s = 1;
                nIsOdd = isOdd(n);
            } else {
                i = Math.abs(+valueOf(n));
                nIsOdd = i % 2;
            }
            y = new BigNumber(ONE);
            // Performs 54 loop iterations for n of 9007199254740991.
            for(;;){
                if (nIsOdd) {
                    y = y.times(x);
                    if (!y.c) break;
                    if (k) {
                        if (y.c.length > k) y.c.length = k;
                    } else if (isModExp) y = y.mod(m); //y = y.minus(div(y, m, 0, MODULO_MODE).times(m));
                }
                if (i) {
                    i = mathfloor(i / 2);
                    if (i === 0) break;
                    nIsOdd = i % 2;
                } else {
                    n = n.times(half);
                    round(n, n.e + 1, 1);
                    if (n.e > 14) nIsOdd = isOdd(n);
                    else {
                        i = +valueOf(n);
                        if (i === 0) break;
                        nIsOdd = i % 2;
                    }
                }
                x = x.times(x);
                if (k) {
                    if (x.c && x.c.length > k) x.c.length = k;
                } else if (isModExp) x = x.mod(m); //x = x.minus(div(x, m, 0, MODULO_MODE).times(m));
            }
            if (isModExp) return y;
            if (nIsNeg) y = ONE.div(y);
            return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
        };
        /*
     * Return a new BigNumber whose value is the value of this BigNumber rounded to an integer
     * using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {rm}'
     */ P.integerValue = function(rm) {
            var n = new BigNumber(this);
            if (rm == null) rm = ROUNDING_MODE;
            else intCheck(rm, 0, 8);
            return round(n, n.e + 1, rm);
        };
        /*
     * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
     * otherwise return false.
     */ P.isEqualTo = P.eq = function(y, b) {
            return compare(this, new BigNumber(y, b)) === 0;
        };
        /*
     * Return true if the value of this BigNumber is a finite number, otherwise return false.
     */ P.isFinite = function() {
            return !!this.c;
        };
        /*
     * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
     * otherwise return false.
     */ P.isGreaterThan = P.gt = function(y, b) {
            return compare(this, new BigNumber(y, b)) > 0;
        };
        /*
     * Return true if the value of this BigNumber is greater than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */ P.isGreaterThanOrEqualTo = P.gte = function(y, b) {
            return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;
        };
        /*
     * Return true if the value of this BigNumber is an integer, otherwise return false.
     */ P.isInteger = function() {
            return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
        };
        /*
     * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
     * otherwise return false.
     */ P.isLessThan = P.lt = function(y, b) {
            return compare(this, new BigNumber(y, b)) < 0;
        };
        /*
     * Return true if the value of this BigNumber is less than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */ P.isLessThanOrEqualTo = P.lte = function(y, b) {
            return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
        };
        /*
     * Return true if the value of this BigNumber is NaN, otherwise return false.
     */ P.isNaN = function() {
            return !this.s;
        };
        /*
     * Return true if the value of this BigNumber is negative, otherwise return false.
     */ P.isNegative = function() {
            return this.s < 0;
        };
        /*
     * Return true if the value of this BigNumber is positive, otherwise return false.
     */ P.isPositive = function() {
            return this.s > 0;
        };
        /*
     * Return true if the value of this BigNumber is 0 or -0, otherwise return false.
     */ P.isZero = function() {
            return !!this.c && this.c[0] == 0;
        };
        /*
     *  n - 0 = n
     *  n - N = N
     *  n - I = -I
     *  0 - n = -n
     *  0 - 0 = 0
     *  0 - N = N
     *  0 - I = -I
     *  N - n = N
     *  N - 0 = N
     *  N - N = N
     *  N - I = N
     *  I - n = I
     *  I - 0 = I
     *  I - N = N
     *  I - I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber minus the value of
     * BigNumber(y, b).
     */ P.minus = function(y, b) {
            var i, j, t, xLTy, x = this, a = x.s;
            y = new BigNumber(y, b);
            b = y.s;
            // Either NaN?
            if (!a || !b) return new BigNumber(NaN);
            // Signs differ?
            if (a != b) {
                y.s = -b;
                return x.plus(y);
            }
            var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
            if (!xe || !ye) {
                // Either Infinity?
                if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);
                // Either zero?
                if (!xc[0] || !yc[0]) // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
                return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x : // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
                ROUNDING_MODE == 3 ? -0 : 0);
            }
            xe = bitFloor(xe);
            ye = bitFloor(ye);
            xc = xc.slice();
            // Determine which is the bigger number.
            if (a = xe - ye) {
                if (xLTy = a < 0) {
                    a = -a;
                    t = xc;
                } else {
                    ye = xe;
                    t = yc;
                }
                t.reverse();
                // Prepend zeros to equalise exponents.
                for(b = a; b--; t.push(0));
                t.reverse();
            } else {
                // Exponents equal. Check digit by digit.
                j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;
                for(a = b = 0; b < j; b++)if (xc[b] != yc[b]) {
                    xLTy = xc[b] < yc[b];
                    break;
                }
            }
            // x < y? Point xc to the array of the bigger number.
            if (xLTy) {
                t = xc;
                xc = yc;
                yc = t;
                y.s = -y.s;
            }
            b = (j = yc.length) - (i = xc.length);
            // Append zeros to xc if shorter.
            // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
            if (b > 0) for(; b--; xc[i++] = 0);
            b = BASE - 1;
            // Subtract yc from xc.
            for(; j > a;){
                if (xc[--j] < yc[j]) {
                    for(i = j; i && !xc[--i]; xc[i] = b);
                    --xc[i];
                    xc[j] += BASE;
                }
                xc[j] -= yc[j];
            }
            // Remove leading zeros and adjust exponent accordingly.
            for(; xc[0] == 0; xc.splice(0, 1), --ye);
            // Zero?
            if (!xc[0]) {
                // Following IEEE 754 (2008) 6.3,
                // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
                y.s = ROUNDING_MODE == 3 ? -1 : 1;
                y.c = [
                    y.e = 0
                ];
                return y;
            }
            // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
            // for finite x and y.
            return normalise(y, xc, ye);
        };
        /*
     *   n % 0 =  N
     *   n % N =  N
     *   n % I =  n
     *   0 % n =  0
     *  -0 % n = -0
     *   0 % 0 =  N
     *   0 % N =  N
     *   0 % I =  0
     *   N % n =  N
     *   N % 0 =  N
     *   N % N =  N
     *   N % I =  N
     *   I % n =  N
     *   I % 0 =  N
     *   I % N =  N
     *   I % I =  N
     *
     * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
     * BigNumber(y, b). The result depends on the value of MODULO_MODE.
     */ P.modulo = P.mod = function(y, b) {
            var q, s, x = this;
            y = new BigNumber(y, b);
            // Return NaN if x is Infinity or NaN, or y is NaN or zero.
            if (!x.c || !y.s || y.c && !y.c[0]) return new BigNumber(NaN);
            else if (!y.c || x.c && !x.c[0]) return new BigNumber(x);
            if (MODULO_MODE == 9) {
                // Euclidian division: q = sign(y) * floor(x / abs(y))
                // r = x - qy    where  0 <= r < abs(y)
                s = y.s;
                y.s = 1;
                q = div(x, y, 0, 3);
                y.s = s;
                q.s *= s;
            } else q = div(x, y, 0, MODULO_MODE);
            y = x.minus(q.times(y));
            // To match JavaScript %, ensure sign of zero is sign of dividend.
            if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;
            return y;
        };
        /*
     *  n * 0 = 0
     *  n * N = N
     *  n * I = I
     *  0 * n = 0
     *  0 * 0 = 0
     *  0 * N = N
     *  0 * I = N
     *  N * n = N
     *  N * 0 = N
     *  N * N = N
     *  N * I = N
     *  I * n = I
     *  I * 0 = N
     *  I * N = N
     *  I * I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber multiplied by the value
     * of BigNumber(y, b).
     */ P.multipliedBy = P.times = function(y, b) {
            var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc, base, sqrtBase, x = this, xc = x.c, yc = (y = new BigNumber(y, b)).c;
            // Either NaN, ±Infinity or ±0?
            if (!xc || !yc || !xc[0] || !yc[0]) {
                // Return NaN if either is NaN, or one is 0 and the other is Infinity.
                if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) y.c = y.e = y.s = null;
                else {
                    y.s *= x.s;
                    // Return ±Infinity if either is ±Infinity.
                    if (!xc || !yc) y.c = y.e = null;
                    else {
                        y.c = [
                            0
                        ];
                        y.e = 0;
                    }
                }
                return y;
            }
            e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
            y.s *= x.s;
            xcL = xc.length;
            ycL = yc.length;
            // Ensure xc points to longer array and xcL to its length.
            if (xcL < ycL) {
                zc = xc;
                xc = yc;
                yc = zc;
                i = xcL;
                xcL = ycL;
                ycL = i;
            }
            // Initialise the result array with zeros.
            for(i = xcL + ycL, zc = []; i--; zc.push(0));
            base = BASE;
            sqrtBase = SQRT_BASE;
            for(i = ycL; --i >= 0;){
                c = 0;
                ylo = yc[i] % sqrtBase;
                yhi = yc[i] / sqrtBase | 0;
                for(k = xcL, j = i + k; j > i;){
                    xlo = xc[--k] % sqrtBase;
                    xhi = xc[k] / sqrtBase | 0;
                    m = yhi * xlo + xhi * ylo;
                    xlo = ylo * xlo + m % sqrtBase * sqrtBase + zc[j] + c;
                    c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
                    zc[j--] = xlo % base;
                }
                zc[j] = c;
            }
            if (c) ++e;
            else zc.splice(0, 1);
            return normalise(y, zc, e);
        };
        /*
     * Return a new BigNumber whose value is the value of this BigNumber negated,
     * i.e. multiplied by -1.
     */ P.negated = function() {
            var x = new BigNumber(this);
            x.s = -x.s || null;
            return x;
        };
        /*
     *  n + 0 = n
     *  n + N = N
     *  n + I = I
     *  0 + n = n
     *  0 + 0 = 0
     *  0 + N = N
     *  0 + I = I
     *  N + n = N
     *  N + 0 = N
     *  N + N = N
     *  N + I = N
     *  I + n = I
     *  I + 0 = I
     *  I + N = N
     *  I + I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber plus the value of
     * BigNumber(y, b).
     */ P.plus = function(y, b) {
            var t, x = this, a = x.s;
            y = new BigNumber(y, b);
            b = y.s;
            // Either NaN?
            if (!a || !b) return new BigNumber(NaN);
            // Signs differ?
            if (a != b) {
                y.s = -b;
                return x.minus(y);
            }
            var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
            if (!xe || !ye) {
                // Return ±Infinity if either ±Infinity.
                if (!xc || !yc) return new BigNumber(a / 0);
                // Either zero?
                // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
                if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
            }
            xe = bitFloor(xe);
            ye = bitFloor(ye);
            xc = xc.slice();
            // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
            if (a = xe - ye) {
                if (a > 0) {
                    ye = xe;
                    t = yc;
                } else {
                    a = -a;
                    t = xc;
                }
                t.reverse();
                for(; a--; t.push(0));
                t.reverse();
            }
            a = xc.length;
            b = yc.length;
            // Point xc to the longer array, and b to the shorter length.
            if (a - b < 0) {
                t = yc;
                yc = xc;
                xc = t;
                b = a;
            }
            // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
            for(a = 0; b;){
                a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
                xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
            }
            if (a) {
                xc = [
                    a
                ].concat(xc);
                ++ye;
            }
            // No need to check for zero, as +x + +y != 0 && -x + -y != 0
            // ye = MAX_EXP + 1 possible
            return normalise(y, xc, ye);
        };
        /*
     * If sd is undefined or null or true or false, return the number of significant digits of
     * the value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     * If sd is true include integer-part trailing zeros in the count.
     *
     * Otherwise, if sd is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of sd significant digits using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * sd {number|boolean} number: significant digits: integer, 1 to MAX inclusive.
     *                     boolean: whether to count integer-part trailing zeros: true or false.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */ P.precision = P.sd = function(sd, rm) {
            var c, n, v, x = this;
            if (sd != null && sd !== !!sd) {
                intCheck(sd, 1, MAX);
                if (rm == null) rm = ROUNDING_MODE;
                else intCheck(rm, 0, 8);
                return round(new BigNumber(x), sd, rm);
            }
            if (!(c = x.c)) return null;
            v = c.length - 1;
            n = v * LOG_BASE + 1;
            if (v = c[v]) {
                // Subtract the number of trailing zeros of the last element.
                for(; v % 10 == 0; v /= 10, n--);
                // Add the number of digits of the first element.
                for(v = c[0]; v >= 10; v /= 10, n++);
            }
            if (sd && x.e + 1 > n) n = x.e + 1;
            return n;
        };
        /*
     * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
     * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
     *
     * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {k}'
     */ P.shiftedBy = function(k) {
            intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
            return this.times("1e" + k);
        };
        /*
     *  sqrt(-n) =  N
     *  sqrt(N) =  N
     *  sqrt(-I) =  N
     *  sqrt(I) =  I
     *  sqrt(0) =  0
     *  sqrt(-0) = -0
     *
     * Return a new BigNumber whose value is the square root of the value of this BigNumber,
     * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */ P.squareRoot = P.sqrt = function() {
            var m, n, r, rep, t, x = this, c = x.c, s = x.s, e = x.e, dp = DECIMAL_PLACES + 4, half = new BigNumber("0.5");
            // Negative/NaN/Infinity/zero?
            if (s !== 1 || !c || !c[0]) return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
            // Initial estimate.
            s = Math.sqrt(+valueOf(x));
            // Math.sqrt underflow/overflow?
            // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
            if (s == 0 || s == 1 / 0) {
                n = coeffToString(c);
                if ((n.length + e) % 2 == 0) n += "0";
                s = Math.sqrt(+n);
                e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);
                if (s == 1 / 0) n = "5e" + e;
                else {
                    n = s.toExponential();
                    n = n.slice(0, n.indexOf("e") + 1) + e;
                }
                r = new BigNumber(n);
            } else r = new BigNumber(s + "");
            // Check for zero.
            // r could be zero if MIN_EXP is changed after the this value was created.
            // This would cause a division by zero (x/t) and hence Infinity below, which would cause
            // coeffToString to throw.
            if (r.c[0]) {
                e = r.e;
                s = e + dp;
                if (s < 3) s = 0;
                // Newton-Raphson iteration.
                for(;;){
                    t = r;
                    r = half.times(t.plus(div(x, t, dp, 1)));
                    if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {
                        // The exponent of r may here be one less than the final result exponent,
                        // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
                        // are indexed correctly.
                        if (r.e < e) --s;
                        n = n.slice(s - 3, s + 1);
                        // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
                        // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
                        // iteration.
                        if (n == "9999" || !rep && n == "4999") {
                            // On the first iteration only, check to see if rounding up gives the
                            // exact result as the nines may infinitely repeat.
                            if (!rep) {
                                round(t, t.e + DECIMAL_PLACES + 2, 0);
                                if (t.times(t).eq(x)) {
                                    r = t;
                                    break;
                                }
                            }
                            dp += 4;
                            s += 4;
                            rep = 1;
                        } else {
                            // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
                            // result. If not, then there are further digits and m will be truthy.
                            if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
                                // Truncate to the first rounding digit.
                                round(r, r.e + DECIMAL_PLACES + 2, 1);
                                m = !r.times(r).eq(x);
                            }
                            break;
                        }
                    }
                }
            }
            return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
        };
        /*
     * Return a string representing the value of this BigNumber in exponential notation and
     * rounded using ROUNDING_MODE to dp fixed decimal places.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */ P.toExponential = function(dp, rm) {
            if (dp != null) {
                intCheck(dp, 0, MAX);
                dp++;
            }
            return format(this, dp, rm, 1);
        };
        /*
     * Return a string representing the value of this BigNumber in fixed-point notation rounding
     * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
     * but e.g. (-0.00001).toFixed(0) is '-0'.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */ P.toFixed = function(dp, rm) {
            if (dp != null) {
                intCheck(dp, 0, MAX);
                dp = dp + this.e + 1;
            }
            return format(this, dp, rm);
        };
        /*
     * Return a string representing the value of this BigNumber in fixed-point notation rounded
     * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
     * of the format or FORMAT object (see BigNumber.set).
     *
     * The formatting object may contain some or all of the properties shown below.
     *
     * FORMAT = {
     *   prefix: '',
     *   groupSize: 3,
     *   secondaryGroupSize: 0,
     *   groupSeparator: ',',
     *   decimalSeparator: '.',
     *   fractionGroupSize: 0,
     *   fractionGroupSeparator: '\xA0',      // non-breaking space
     *   suffix: ''
     * };
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     * [format] {object} Formatting options. See FORMAT pbject above.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     * '[BigNumber Error] Argument not an object: {format}'
     */ P.toFormat = function(dp, rm, format) {
            var str, x = this;
            if (format == null) {
                if (dp != null && rm && typeof rm == "object") {
                    format = rm;
                    rm = null;
                } else if (dp && typeof dp == "object") {
                    format = dp;
                    dp = rm = null;
                } else format = FORMAT;
            } else if (typeof format != "object") throw Error(bignumberError + "Argument not an object: " + format);
            str = x.toFixed(dp, rm);
            if (x.c) {
                var i, arr = str.split("."), g1 = +format.groupSize, g2 = +format.secondaryGroupSize, groupSeparator = format.groupSeparator || "", intPart = arr[0], fractionPart = arr[1], isNeg = x.s < 0, intDigits = isNeg ? intPart.slice(1) : intPart, len = intDigits.length;
                if (g2) {
                    i = g1;
                    g1 = g2;
                    g2 = i;
                    len -= i;
                }
                if (g1 > 0 && len > 0) {
                    i = len % g1 || g1;
                    intPart = intDigits.substr(0, i);
                    for(; i < len; i += g1)intPart += groupSeparator + intDigits.substr(i, g1);
                    if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
                    if (isNeg) intPart = "-" + intPart;
                }
                str = fractionPart ? intPart + (format.decimalSeparator || "") + ((g2 = +format.fractionGroupSize) ? fractionPart.replace(new RegExp("\\d{" + g2 + "}\\B", "g"), "$&" + (format.fractionGroupSeparator || "")) : fractionPart) : intPart;
            }
            return (format.prefix || "") + str + (format.suffix || "");
        };
        /*
     * Return an array of two BigNumbers representing the value of this BigNumber as a simple
     * fraction with an integer numerator and an integer denominator.
     * The denominator will be a positive non-zero value less than or equal to the specified
     * maximum denominator. If a maximum denominator is not specified, the denominator will be
     * the lowest value necessary to represent the number exactly.
     *
     * [md] {number|string|BigNumber} Integer >= 1, or Infinity. The maximum denominator.
     *
     * '[BigNumber Error] Argument {not an integer|out of range} : {md}'
     */ P.toFraction = function(md) {
            var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s, x = this, xc = x.c;
            if (md != null) {
                n = new BigNumber(md);
                // Throw if md is less than one or is not an integer, unless it is Infinity.
                if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) throw Error(bignumberError + "Argument " + (n.isInteger() ? "out of range: " : "not an integer: ") + valueOf(n));
            }
            if (!xc) return new BigNumber(x);
            d = new BigNumber(ONE);
            n1 = d0 = new BigNumber(ONE);
            d1 = n0 = new BigNumber(ONE);
            s = coeffToString(xc);
            // Determine initial denominator.
            // d is a power of 10 and the minimum max denominator that specifies the value exactly.
            e = d.e = s.length - x.e - 1;
            d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
            md = !md || n.comparedTo(d) > 0 ? e > 0 ? d : n1 : n;
            exp = MAX_EXP;
            MAX_EXP = 1 / 0;
            n = new BigNumber(s);
            // n0 = d1 = 0
            n0.c[0] = 0;
            for(;;){
                q = div(n, d, 0, 1);
                d2 = d0.plus(q.times(d1));
                if (d2.comparedTo(md) == 1) break;
                d0 = d1;
                d1 = d2;
                n1 = n0.plus(q.times(d2 = n1));
                n0 = d2;
                d = n.minus(q.times(d2 = d));
                n = d2;
            }
            d2 = div(md.minus(d0), d1, 0, 1);
            n0 = n0.plus(d2.times(n1));
            d0 = d0.plus(d2.times(d1));
            n0.s = n1.s = x.s;
            e = e * 2;
            // Determine which fraction is closer to x, n0/d0 or n1/d1
            r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [
                n1,
                d1
            ] : [
                n0,
                d0
            ];
            MAX_EXP = exp;
            return r;
        };
        /*
     * Return the value of this BigNumber converted to a number primitive.
     */ P.toNumber = function() {
            return +valueOf(this);
        };
        /*
     * Return a string representing the value of this BigNumber rounded to sd significant digits
     * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
     * necessary to represent the integer part of the value in fixed-point notation, then use
     * exponential notation.
     *
     * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */ P.toPrecision = function(sd, rm) {
            if (sd != null) intCheck(sd, 1, MAX);
            return format(this, sd, rm, 2);
        };
        /*
     * Return a string representing the value of this BigNumber in base b, or base 10 if b is
     * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
     * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
     * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
     * TO_EXP_NEG, return exponential notation.
     *
     * [b] {number} Integer, 2 to ALPHABET.length inclusive.
     *
     * '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
     */ P.toString = function(b) {
            var str, n = this, s = n.s, e = n.e;
            // Infinity or NaN?
            if (e === null) {
                if (s) {
                    str = "Infinity";
                    if (s < 0) str = "-" + str;
                } else str = "NaN";
            } else {
                if (b == null) str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(coeffToString(n.c), e) : toFixedPoint(coeffToString(n.c), e, "0");
                else if (b === 10 && alphabetHasNormalDecimalDigits) {
                    n = round(new BigNumber(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
                    str = toFixedPoint(coeffToString(n.c), n.e, "0");
                } else {
                    intCheck(b, 2, ALPHABET.length, "Base");
                    str = convertBase(toFixedPoint(coeffToString(n.c), e, "0"), 10, b, s, true);
                }
                if (s < 0 && n.c[0]) str = "-" + str;
            }
            return str;
        };
        /*
     * Return as toString, but do not accept a base argument, and include the minus sign for
     * negative zero.
     */ P.valueOf = P.toJSON = function() {
            return valueOf(this);
        };
        P._isBigNumber = true;
        if (configObject != null) BigNumber.set(configObject);
        return BigNumber;
    }
    // PRIVATE HELPER FUNCTIONS
    // These functions don't need access to variables,
    // e.g. DECIMAL_PLACES, in the scope of the `clone` function above.
    function bitFloor(n) {
        var i = n | 0;
        return n > 0 || n === i ? i : i - 1;
    }
    // Return a coefficient array as a string of base 10 digits.
    function coeffToString(a) {
        var s, z, i = 1, j = a.length, r = a[0] + "";
        for(; i < j;){
            s = a[i++] + "";
            z = LOG_BASE - s.length;
            for(; z--; s = "0" + s);
            r += s;
        }
        // Determine trailing zeros.
        for(j = r.length; r.charCodeAt(--j) === 48;);
        return r.slice(0, j + 1 || 1);
    }
    // Compare the value of BigNumbers x and y.
    function compare(x, y) {
        var a, b, xc = x.c, yc = y.c, i = x.s, j = y.s, k = x.e, l = y.e;
        // Either NaN?
        if (!i || !j) return null;
        a = xc && !xc[0];
        b = yc && !yc[0];
        // Either zero?
        if (a || b) return a ? b ? 0 : -j : i;
        // Signs differ?
        if (i != j) return i;
        a = i < 0;
        b = k == l;
        // Either Infinity?
        if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;
        // Compare exponents.
        if (!b) return k > l ^ a ? 1 : -1;
        j = (k = xc.length) < (l = yc.length) ? k : l;
        // Compare digit by digit.
        for(i = 0; i < j; i++)if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;
        // Compare lengths.
        return k == l ? 0 : k > l ^ a ? 1 : -1;
    }
    /*
   * Check that n is a primitive number, an integer, and in range, otherwise throw.
   */ function intCheck(n, min, max, name) {
        if (n < min || n > max || n !== mathfloor(n)) throw Error(bignumberError + (name || "Argument") + (typeof n == "number" ? n < min || n > max ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(n));
    }
    // Assumes finite n.
    function isOdd(n) {
        var k = n.c.length - 1;
        return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
    }
    function toExponential(str, e) {
        return (str.length > 1 ? str.charAt(0) + "." + str.slice(1) : str) + (e < 0 ? "e" : "e+") + e;
    }
    function toFixedPoint(str, e, z) {
        var len, zs;
        // Negative exponent?
        if (e < 0) {
            // Prepend zeros.
            for(zs = z + "."; ++e; zs += z);
            str = zs + str;
        // Positive exponent
        } else {
            len = str.length;
            // Append zeros.
            if (++e > len) {
                for(zs = z, e -= len; --e; zs += z);
                str += zs;
            } else if (e < len) str = str.slice(0, e) + "." + str.slice(e);
        }
        return str;
    }
    // EXPORT
    BigNumber = clone();
    BigNumber["default"] = BigNumber.BigNumber = BigNumber;
    // AMD.
    if (typeof define == "function" && define.amd) define(function() {
        return BigNumber;
    });
    else if (module.exports) module.exports = BigNumber;
    else {
        if (!globalObject) globalObject = typeof self != "undefined" && self ? self : window;
        globalObject.BigNumber = BigNumber;
    }
})(this);

},{}],"aLfF5":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HighloadWalletV2 = void 0;
const everscale_inpage_provider_1 = require("everscale-inpage-provider");
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const core_1 = __importDefault(require("../../core"));
const { ensureNekotonLoaded , nekoton  } = core_1.default;
/**
 * @category AccountsStorage
 */ class HighloadWalletV2 {
    constructor(address){
        this.address = address instanceof everscale_inpage_provider_1.Address ? address : new everscale_inpage_provider_1.Address(address);
    }
    static async computeAddress(args) {
        // TODO: Somehow propagate init params
        await ensureNekotonLoaded();
        const publicKey = args.publicKey instanceof bignumber_js_1.default ? args.publicKey : new bignumber_js_1.default(`0x${args.publicKey}`);
        const tvc = makeStateInit(publicKey);
        const hash = nekoton.getBocHash(tvc);
        return new everscale_inpage_provider_1.Address(`${args.workchain != null ? args.workchain : 0}:${hash}`);
    }
    static async fromPubkey(args) {
        const publicKey = new bignumber_js_1.default(`0x${args.publicKey}`);
        const address = await HighloadWalletV2.computeAddress({
            publicKey,
            workchain: args.workchain
        });
        const result = new HighloadWalletV2(address);
        result.publicKey = publicKey;
        return result;
    }
    async fetchPublicKey(ctx) {
        let publicKey = this.publicKey;
        if (publicKey == null) publicKey = this.publicKey = await ctx.fetchPublicKey(this.address).then((publicKey)=>new bignumber_js_1.default(`0x${publicKey}`));
        return publicKey.toString(16).padStart(64, "0");
    }
    async prepareMessage(args, ctx) {
        const { publicKey , stateInit  } = await this.fetchState(ctx);
        const signer = await ctx.getSigner(publicKey);
        const expireAt = ctx.nowSec + args.timeout;
        const attachedPayload = args.payload ? ctx.encodeInternalInput(args.payload) : undefined;
        const internalMessage = ctx.encodeInternalMessage({
            dst: args.recipient,
            bounce: args.bounce,
            stateInit: args.stateInit,
            body: attachedPayload,
            amount: args.amount
        });
        const params = {
            messages: [
                [
                    0,
                    {
                        flags: 3,
                        message: internalMessage
                    }
                ]
            ]
        };
        const messages = ctx.packIntoCell({
            structure: MESSAGES_STRUCTURE,
            data: params
        });
        const messagesHash = ctx.getBocHash(messages);
        params.walletId = WALLET_ID;
        params.expireAt = expireAt;
        params.messagesHash = `0x${messagesHash.slice(-8)}`;
        const unsignedPayload = ctx.packIntoCell({
            structure: UNSIGNED_TRANSFER_STRUCTURE,
            data: params
        });
        const hash = ctx.getBocHash(unsignedPayload);
        const signature = await signer.sign(hash);
        const { signatureParts  } = ctx.extendSignature(signature);
        params.signatureHigh = signatureParts.high;
        params.signatureLow = signatureParts.low;
        const signedPayload = ctx.packIntoCell({
            structure: SIGNED_TRANSFER_STRUCTURE,
            data: params
        });
        return ctx.createRawExternalMessage({
            address: this.address.toString(),
            body: signedPayload,
            stateInit,
            expireAt
        });
    }
    async fetchState(ctx) {
        let stateInit = undefined;
        let publicKey;
        const state = await ctx.getFullContractState(this.address);
        if (state == null || !state.isDeployed) {
            if (this.publicKey == null) throw new Error("Contract not deployed and public key was not specified");
            stateInit = makeStateInit(this.publicKey);
            publicKey = this.publicKey;
        } else if (this.publicKey == null) {
            const data = ctx.extractContractData(state.boc);
            if (data == null) throw new Error("Failed to extract contract data");
            publicKey = parseInitData(ctx, data).publicKey;
        } else publicKey = this.publicKey;
        if (this.publicKey == null) this.publicKey = publicKey;
        return {
            publicKey: publicKey.toString(16).padStart(64, "0"),
            stateInit
        };
    }
}
exports.HighloadWalletV2 = HighloadWalletV2;
const parseInitData = (ctx, boc)=>{
    const parsed = ctx.unpackFromCell({
        structure: DATA_STRUCTURE,
        boc,
        allowPartial: true
    });
    if (typeof parsed !== "object" || typeof parsed["publicKey"] !== "string") throw new Error("Invalid contract data");
    return {
        publicKey: new bignumber_js_1.default(parsed.publicKey)
    };
};
const makeStateInit = (publicKey)=>{
    const data = nekoton.packIntoCell(DATA_STRUCTURE, {
        walletId: WALLET_ID,
        lastCleaned: 0,
        publicKey: publicKey.toFixed(0),
        queries: false
    });
    return nekoton.mergeTvc(HIGHLOAD_WALLET_V2_CODE, data);
};
const MESSAGES_STRUCTURE = [
    {
        name: "messages",
        type: "map(uint16,tuple)",
        components: [
            {
                name: "flags",
                type: "uint8"
            },
            {
                name: "message",
                type: "cell"
            }
        ]
    }
];
const UNSIGNED_TRANSFER_STRUCTURE = [
    {
        name: "walletId",
        type: "uint32"
    },
    {
        name: "expireAt",
        type: "uint32"
    },
    {
        name: "messagesHash",
        type: "uint32"
    },
    ...MESSAGES_STRUCTURE
];
const SIGNED_TRANSFER_STRUCTURE = [
    {
        name: "signatureHigh",
        type: "uint256"
    },
    {
        name: "signatureLow",
        type: "uint256"
    },
    ...UNSIGNED_TRANSFER_STRUCTURE
];
const DATA_STRUCTURE = [
    {
        name: "walletId",
        type: "uint32"
    },
    {
        name: "lastCleaned",
        type: "uint64"
    },
    {
        name: "publicKey",
        type: "uint256"
    },
    {
        name: "queries",
        type: "bool"
    }
];
const HIGHLOAD_WALLET_V2_CODE = "te6ccgEBCQEA5QABFP8A9KQT9LzyyAsBAgEgBAIB6vKDCNcYINMf0z/4I6ofUyC58mPtRNDTH9M/0//0BNFTYIBA9A5voTHyYFFzuvKiB/kBVBCH+RDyowL0BNH4AH+OFiGAEPR4b6UgmALTB9QwAfsAkTLiAbPmW4MlochANIBA9EOK5jHIEssfE8s/y//0AMntVAMANCCAQPSWb6UyURCUMFMDud4gkzM2AZIyMOKzAgFICAUCASAHBgBBvl+XaiaGmPmOmf6f+Y+gJoqRBAIHoHN9CYyS2/yV3R8UABe9nOdqJoaa+Y64X/wABNAw";
const WALLET_ID = 0;

},{"everscale-inpage-provider":"3AWTf","bignumber.js":"57qkX","../../core":"01TnY"}],"8Khk1":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SimpleKeystore = void 0;
const core_1 = __importDefault(require("../core"));
const { nekoton  } = core_1.default;
/**
 * @category Keystore
 */ class SimpleKeystore {
    constructor(entries = {}){
        this.signers = new Map();
        this.signersByPublicKey = new Map();
        for (const [id, signer] of Object.entries(entries))this.addKeyPair(id, signer);
    }
    static generateKeyPair() {
        return nekoton.ed25519_generateKeyPair();
    }
    addKeyPair(idOrKeypair, rest) {
        let id;
        let keyPair;
        if (typeof idOrKeypair == "string") {
            id = idOrKeypair;
            keyPair = rest;
        } else {
            id = idOrKeypair.publicKey;
            keyPair = idOrKeypair;
        }
        const signer = new SimpleSigner(keyPair);
        this.signers.set(id, signer);
        this.signersByPublicKey.set(keyPair.publicKey, signer);
    }
    removeKeyPair(id) {
        const signer = this.signers.get(id);
        if (signer != null) {
            this.signers.delete(id);
            this.signersByPublicKey.delete(signer.publicKey);
        }
    }
    /**
     * Generate and add a new key
     *
     * @returns keyId of the new signer
     */ async withNewKey(f, options = {}) {
        const newKey = SimpleKeystore.generateKeyPair();
        const keyId = options.keyId != null ? options.keyId : newKey.publicKey;
        const keepOnError = options.keepOnError || false;
        this.addKeyPair(keyId, newKey);
        return f(keyId).then((retain)=>{
            if (retain === false) this.removeKeyPair(keyId);
            return keyId;
        }).catch((e)=>{
            if (!keepOnError) this.removeKeyPair(keyId);
            throw e;
        });
    }
    async getSigner(id) {
        return this.signers.get(id) || this.signersByPublicKey.get(id);
    }
}
exports.SimpleKeystore = SimpleKeystore;
class SimpleSigner {
    constructor(keyPair){
        this.keyPair = keyPair;
        this.publicKey = this.keyPair.publicKey;
    }
    async sign(rawData) {
        return nekoton.ed25519_sign(this.keyPair.secretKey, rawData);
    }
}

},{"../core":"01TnY"}],"j1nec":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Clock = void 0;
/**
 * Wrapper around clocks which are used in `EverscaleStandaloneClient` instances
 *
 * @category Client
 */ class Clock {
    constructor(offset){
        this.impls = [];
        this.currentOffset = 0;
        if (offset != null) this.currentOffset = offset;
    }
    /**
     * Clock offset in milliseconds
     */ get offset() {
        return this.currentOffset;
    }
    /**
     * Set clock offset in milliseconds
     */ set offset(value) {
        this.currentOffset = value;
        for (const impl of this.impls)impl.updateOffset(this.currentOffset);
    }
    /**
     * Returns current time in milliseconds
     */ get time() {
        return new Date().getTime() + this.offset;
    }
    /**
     * Detaches all affected providers
     *
     * NOTE: affected providers offset remains the same
     */ detach() {
        this.impls = [];
    }
}
exports.Clock = Clock;

},{}],"5a6Vu":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("./modules"), exports);
__exportStar(require("./client"), exports); //# sourceMappingURL=index.js.map

},{"./modules":"27gLV","./client":"MXip4"}],"27gLV":[function(require,module,exports) {
"use strict";
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.builderOpInteger = exports.BocErrorCode = exports.bocCacheTypeUnpinned = exports.bocCacheTypePinned = exports.AbiModule = exports.messageSourceEncodingParams = exports.messageSourceEncoded = exports.stateInitSourceTvc = exports.stateInitSourceStateInit = exports.stateInitSourceMessage = exports.MessageBodyType = exports.signerSigningBox = exports.signerKeys = exports.signerExternal = exports.signerNone = exports.abiSerialized = exports.abiHandle = exports.abiJson = exports.abiContract = exports.AbiErrorCode = exports.CryptoModule = exports.resultOfAppEncryptionBoxDecrypt = exports.resultOfAppEncryptionBoxEncrypt = exports.resultOfAppEncryptionBoxGetInfo = exports.paramsOfAppEncryptionBoxDecrypt = exports.paramsOfAppEncryptionBoxEncrypt = exports.paramsOfAppEncryptionBoxGetInfo = exports.resultOfAppSigningBoxSign = exports.resultOfAppSigningBoxGetPublicKey = exports.paramsOfAppSigningBoxSign = exports.paramsOfAppSigningBoxGetPublicKey = exports.resultOfAppPasswordProviderGetPassword = exports.paramsOfAppPasswordProviderGetPassword = exports.boxEncryptionAlgorithmNaclSecretBox = exports.boxEncryptionAlgorithmNaclBox = exports.boxEncryptionAlgorithmChaCha20 = exports.cryptoBoxSecretEncryptedSecret = exports.cryptoBoxSecretPredefinedSeedPhrase = exports.cryptoBoxSecretRandomSeedPhrase = exports.CipherMode = exports.encryptionAlgorithmNaclSecretBox = exports.encryptionAlgorithmNaclBox = exports.encryptionAlgorithmChaCha20 = exports.encryptionAlgorithmAES = exports.CryptoErrorCode = exports.ClientModule = exports.appRequestResultOk = exports.appRequestResultError = exports.NetworkQueriesProtocol = exports.ClientErrorCode = void 0;
exports.resultOfAppDebotBrowserInput = exports.paramsOfAppDebotBrowserApprove = exports.paramsOfAppDebotBrowserSend = exports.paramsOfAppDebotBrowserInvokeDebot = exports.paramsOfAppDebotBrowserGetSigningBox = exports.paramsOfAppDebotBrowserInput = exports.paramsOfAppDebotBrowserShowAction = exports.paramsOfAppDebotBrowserSwitchCompleted = exports.paramsOfAppDebotBrowserSwitch = exports.paramsOfAppDebotBrowserLog = exports.debotActivityTransaction = exports.DebotErrorCode = exports.NetModule = exports.AggregationFn = exports.paramsOfQueryOperationQueryCounterparties = exports.paramsOfQueryOperationAggregateCollection = exports.paramsOfQueryOperationWaitForCollection = exports.paramsOfQueryOperationQueryCollection = exports.SortDirection = exports.NetErrorCode = exports.TvmModule = exports.accountForExecutorAccount = exports.accountForExecutorUninit = exports.accountForExecutorNone = exports.TvmErrorCode = exports.UtilsModule = exports.AccountAddressType = exports.addressStringFormatBase64 = exports.addressStringFormatHex = exports.addressStringFormatAccountId = exports.ProcessingModule = exports.processingEventRempError = exports.processingEventRempOther = exports.processingEventRempIncludedIntoAcceptedBlock = exports.processingEventRempIncludedIntoBlock = exports.processingEventRempSentToValidators = exports.processingEventMessageExpired = exports.processingEventFetchNextBlockFailed = exports.processingEventWillFetchNextBlock = exports.processingEventSendFailed = exports.processingEventDidSend = exports.processingEventWillSend = exports.processingEventFetchFirstBlockFailed = exports.processingEventWillFetchFirstBlock = exports.ProcessingErrorCode = exports.BocModule = exports.builderOpAddress = exports.builderOpCellBoc = exports.builderOpCell = exports.builderOpBitString = void 0;
exports.ProofsModule = exports.ProofsErrorCode = exports.DebotModule = exports.resultOfAppDebotBrowserApprove = exports.resultOfAppDebotBrowserInvokeDebot = exports.resultOfAppDebotBrowserGetSigningBox = void 0;
// client module
var ClientErrorCode;
(function(ClientErrorCode) {
    ClientErrorCode[ClientErrorCode["NotImplemented"] = 1] = "NotImplemented";
    ClientErrorCode[ClientErrorCode["InvalidHex"] = 2] = "InvalidHex";
    ClientErrorCode[ClientErrorCode["InvalidBase64"] = 3] = "InvalidBase64";
    ClientErrorCode[ClientErrorCode["InvalidAddress"] = 4] = "InvalidAddress";
    ClientErrorCode[ClientErrorCode["CallbackParamsCantBeConvertedToJson"] = 5] = "CallbackParamsCantBeConvertedToJson";
    ClientErrorCode[ClientErrorCode["WebsocketConnectError"] = 6] = "WebsocketConnectError";
    ClientErrorCode[ClientErrorCode["WebsocketReceiveError"] = 7] = "WebsocketReceiveError";
    ClientErrorCode[ClientErrorCode["WebsocketSendError"] = 8] = "WebsocketSendError";
    ClientErrorCode[ClientErrorCode["HttpClientCreateError"] = 9] = "HttpClientCreateError";
    ClientErrorCode[ClientErrorCode["HttpRequestCreateError"] = 10] = "HttpRequestCreateError";
    ClientErrorCode[ClientErrorCode["HttpRequestSendError"] = 11] = "HttpRequestSendError";
    ClientErrorCode[ClientErrorCode["HttpRequestParseError"] = 12] = "HttpRequestParseError";
    ClientErrorCode[ClientErrorCode["CallbackNotRegistered"] = 13] = "CallbackNotRegistered";
    ClientErrorCode[ClientErrorCode["NetModuleNotInit"] = 14] = "NetModuleNotInit";
    ClientErrorCode[ClientErrorCode["InvalidConfig"] = 15] = "InvalidConfig";
    ClientErrorCode[ClientErrorCode["CannotCreateRuntime"] = 16] = "CannotCreateRuntime";
    ClientErrorCode[ClientErrorCode["InvalidContextHandle"] = 17] = "InvalidContextHandle";
    ClientErrorCode[ClientErrorCode["CannotSerializeResult"] = 18] = "CannotSerializeResult";
    ClientErrorCode[ClientErrorCode["CannotSerializeError"] = 19] = "CannotSerializeError";
    ClientErrorCode[ClientErrorCode["CannotConvertJsValueToJson"] = 20] = "CannotConvertJsValueToJson";
    ClientErrorCode[ClientErrorCode["CannotReceiveSpawnedResult"] = 21] = "CannotReceiveSpawnedResult";
    ClientErrorCode[ClientErrorCode["SetTimerError"] = 22] = "SetTimerError";
    ClientErrorCode[ClientErrorCode["InvalidParams"] = 23] = "InvalidParams";
    ClientErrorCode[ClientErrorCode["ContractsAddressConversionFailed"] = 24] = "ContractsAddressConversionFailed";
    ClientErrorCode[ClientErrorCode["UnknownFunction"] = 25] = "UnknownFunction";
    ClientErrorCode[ClientErrorCode["AppRequestError"] = 26] = "AppRequestError";
    ClientErrorCode[ClientErrorCode["NoSuchRequest"] = 27] = "NoSuchRequest";
    ClientErrorCode[ClientErrorCode["CanNotSendRequestResult"] = 28] = "CanNotSendRequestResult";
    ClientErrorCode[ClientErrorCode["CanNotReceiveRequestResult"] = 29] = "CanNotReceiveRequestResult";
    ClientErrorCode[ClientErrorCode["CanNotParseRequestResult"] = 30] = "CanNotParseRequestResult";
    ClientErrorCode[ClientErrorCode["UnexpectedCallbackResponse"] = 31] = "UnexpectedCallbackResponse";
    ClientErrorCode[ClientErrorCode["CanNotParseNumber"] = 32] = "CanNotParseNumber";
    ClientErrorCode[ClientErrorCode["InternalError"] = 33] = "InternalError";
    ClientErrorCode[ClientErrorCode["InvalidHandle"] = 34] = "InvalidHandle";
    ClientErrorCode[ClientErrorCode["LocalStorageError"] = 35] = "LocalStorageError";
})(ClientErrorCode = exports.ClientErrorCode || (exports.ClientErrorCode = {}));
/**
 * Network protocol used to perform GraphQL queries.
 */ var NetworkQueriesProtocol;
(function(NetworkQueriesProtocol) {
    NetworkQueriesProtocol["HTTP"] = "HTTP";
    NetworkQueriesProtocol["WS"] = "WS";
})(NetworkQueriesProtocol = exports.NetworkQueriesProtocol || (exports.NetworkQueriesProtocol = {}));
function appRequestResultError(text) {
    return {
        type: "Error",
        text
    };
}
exports.appRequestResultError = appRequestResultError;
function appRequestResultOk(result) {
    return {
        type: "Ok",
        result
    };
}
exports.appRequestResultOk = appRequestResultOk;
/**
 * Provides information about library.
 */ class ClientModule {
    constructor(client){
        this.client = client;
    }
    /**
     * Returns Core Library API reference
     * @returns ResultOfGetApiReference
     */ get_api_reference() {
        return this.client.request("client.get_api_reference");
    }
    /**
     * Returns Core Library version
     * @returns ResultOfVersion
     */ version() {
        return this.client.request("client.version");
    }
    /**
     * Returns Core Library API reference
     * @returns ClientConfig
     */ config() {
        return this.client.request("client.config");
    }
    /**
     * Returns detailed information about this build.
     * @returns ResultOfBuildInfo
     */ build_info() {
        return this.client.request("client.build_info");
    }
    /**
     * Resolves application request processing result
     *
     * @param {ParamsOfResolveAppRequest} params
     * @returns
     */ resolve_app_request(params) {
        return this.client.request("client.resolve_app_request", params);
    }
}
exports.ClientModule = ClientModule;
// crypto module
var CryptoErrorCode;
(function(CryptoErrorCode) {
    CryptoErrorCode[CryptoErrorCode["InvalidPublicKey"] = 100] = "InvalidPublicKey";
    CryptoErrorCode[CryptoErrorCode["InvalidSecretKey"] = 101] = "InvalidSecretKey";
    CryptoErrorCode[CryptoErrorCode["InvalidKey"] = 102] = "InvalidKey";
    CryptoErrorCode[CryptoErrorCode["InvalidFactorizeChallenge"] = 106] = "InvalidFactorizeChallenge";
    CryptoErrorCode[CryptoErrorCode["InvalidBigInt"] = 107] = "InvalidBigInt";
    CryptoErrorCode[CryptoErrorCode["ScryptFailed"] = 108] = "ScryptFailed";
    CryptoErrorCode[CryptoErrorCode["InvalidKeySize"] = 109] = "InvalidKeySize";
    CryptoErrorCode[CryptoErrorCode["NaclSecretBoxFailed"] = 110] = "NaclSecretBoxFailed";
    CryptoErrorCode[CryptoErrorCode["NaclBoxFailed"] = 111] = "NaclBoxFailed";
    CryptoErrorCode[CryptoErrorCode["NaclSignFailed"] = 112] = "NaclSignFailed";
    CryptoErrorCode[CryptoErrorCode["Bip39InvalidEntropy"] = 113] = "Bip39InvalidEntropy";
    CryptoErrorCode[CryptoErrorCode["Bip39InvalidPhrase"] = 114] = "Bip39InvalidPhrase";
    CryptoErrorCode[CryptoErrorCode["Bip32InvalidKey"] = 115] = "Bip32InvalidKey";
    CryptoErrorCode[CryptoErrorCode["Bip32InvalidDerivePath"] = 116] = "Bip32InvalidDerivePath";
    CryptoErrorCode[CryptoErrorCode["Bip39InvalidDictionary"] = 117] = "Bip39InvalidDictionary";
    CryptoErrorCode[CryptoErrorCode["Bip39InvalidWordCount"] = 118] = "Bip39InvalidWordCount";
    CryptoErrorCode[CryptoErrorCode["MnemonicGenerationFailed"] = 119] = "MnemonicGenerationFailed";
    CryptoErrorCode[CryptoErrorCode["MnemonicFromEntropyFailed"] = 120] = "MnemonicFromEntropyFailed";
    CryptoErrorCode[CryptoErrorCode["SigningBoxNotRegistered"] = 121] = "SigningBoxNotRegistered";
    CryptoErrorCode[CryptoErrorCode["InvalidSignature"] = 122] = "InvalidSignature";
    CryptoErrorCode[CryptoErrorCode["EncryptionBoxNotRegistered"] = 123] = "EncryptionBoxNotRegistered";
    CryptoErrorCode[CryptoErrorCode["InvalidIvSize"] = 124] = "InvalidIvSize";
    CryptoErrorCode[CryptoErrorCode["UnsupportedCipherMode"] = 125] = "UnsupportedCipherMode";
    CryptoErrorCode[CryptoErrorCode["CannotCreateCipher"] = 126] = "CannotCreateCipher";
    CryptoErrorCode[CryptoErrorCode["EncryptDataError"] = 127] = "EncryptDataError";
    CryptoErrorCode[CryptoErrorCode["DecryptDataError"] = 128] = "DecryptDataError";
    CryptoErrorCode[CryptoErrorCode["IvRequired"] = 129] = "IvRequired";
    CryptoErrorCode[CryptoErrorCode["CryptoBoxNotRegistered"] = 130] = "CryptoBoxNotRegistered";
    CryptoErrorCode[CryptoErrorCode["InvalidCryptoBoxType"] = 131] = "InvalidCryptoBoxType";
    CryptoErrorCode[CryptoErrorCode["CryptoBoxSecretSerializationError"] = 132] = "CryptoBoxSecretSerializationError";
    CryptoErrorCode[CryptoErrorCode["CryptoBoxSecretDeserializationError"] = 133] = "CryptoBoxSecretDeserializationError";
    CryptoErrorCode[CryptoErrorCode["InvalidNonceSize"] = 134] = "InvalidNonceSize";
})(CryptoErrorCode = exports.CryptoErrorCode || (exports.CryptoErrorCode = {}));
function encryptionAlgorithmAES(value) {
    return {
        type: "AES",
        value
    };
}
exports.encryptionAlgorithmAES = encryptionAlgorithmAES;
function encryptionAlgorithmChaCha20(value) {
    return {
        type: "ChaCha20",
        value
    };
}
exports.encryptionAlgorithmChaCha20 = encryptionAlgorithmChaCha20;
function encryptionAlgorithmNaclBox(value) {
    return {
        type: "NaclBox",
        value
    };
}
exports.encryptionAlgorithmNaclBox = encryptionAlgorithmNaclBox;
function encryptionAlgorithmNaclSecretBox(value) {
    return {
        type: "NaclSecretBox",
        value
    };
}
exports.encryptionAlgorithmNaclSecretBox = encryptionAlgorithmNaclSecretBox;
var CipherMode;
(function(CipherMode) {
    CipherMode["CBC"] = "CBC";
    CipherMode["CFB"] = "CFB";
    CipherMode["CTR"] = "CTR";
    CipherMode["ECB"] = "ECB";
    CipherMode["OFB"] = "OFB";
})(CipherMode = exports.CipherMode || (exports.CipherMode = {}));
function cryptoBoxSecretRandomSeedPhrase(dictionary, wordcount) {
    return {
        type: "RandomSeedPhrase",
        dictionary,
        wordcount
    };
}
exports.cryptoBoxSecretRandomSeedPhrase = cryptoBoxSecretRandomSeedPhrase;
function cryptoBoxSecretPredefinedSeedPhrase(phrase, dictionary, wordcount) {
    return {
        type: "PredefinedSeedPhrase",
        phrase,
        dictionary,
        wordcount
    };
}
exports.cryptoBoxSecretPredefinedSeedPhrase = cryptoBoxSecretPredefinedSeedPhrase;
function cryptoBoxSecretEncryptedSecret(encrypted_secret) {
    return {
        type: "EncryptedSecret",
        encrypted_secret
    };
}
exports.cryptoBoxSecretEncryptedSecret = cryptoBoxSecretEncryptedSecret;
function boxEncryptionAlgorithmChaCha20(value) {
    return {
        type: "ChaCha20",
        value
    };
}
exports.boxEncryptionAlgorithmChaCha20 = boxEncryptionAlgorithmChaCha20;
function boxEncryptionAlgorithmNaclBox(value) {
    return {
        type: "NaclBox",
        value
    };
}
exports.boxEncryptionAlgorithmNaclBox = boxEncryptionAlgorithmNaclBox;
function boxEncryptionAlgorithmNaclSecretBox(value) {
    return {
        type: "NaclSecretBox",
        value
    };
}
exports.boxEncryptionAlgorithmNaclSecretBox = boxEncryptionAlgorithmNaclSecretBox;
function paramsOfAppPasswordProviderGetPassword(encryption_public_key) {
    return {
        type: "GetPassword",
        encryption_public_key
    };
}
exports.paramsOfAppPasswordProviderGetPassword = paramsOfAppPasswordProviderGetPassword;
function resultOfAppPasswordProviderGetPassword(encrypted_password, app_encryption_pubkey) {
    return {
        type: "GetPassword",
        encrypted_password,
        app_encryption_pubkey
    };
}
exports.resultOfAppPasswordProviderGetPassword = resultOfAppPasswordProviderGetPassword;
function paramsOfAppSigningBoxGetPublicKey() {
    return {
        type: "GetPublicKey"
    };
}
exports.paramsOfAppSigningBoxGetPublicKey = paramsOfAppSigningBoxGetPublicKey;
function paramsOfAppSigningBoxSign(unsigned) {
    return {
        type: "Sign",
        unsigned
    };
}
exports.paramsOfAppSigningBoxSign = paramsOfAppSigningBoxSign;
function resultOfAppSigningBoxGetPublicKey(public_key) {
    return {
        type: "GetPublicKey",
        public_key
    };
}
exports.resultOfAppSigningBoxGetPublicKey = resultOfAppSigningBoxGetPublicKey;
function resultOfAppSigningBoxSign(signature) {
    return {
        type: "Sign",
        signature
    };
}
exports.resultOfAppSigningBoxSign = resultOfAppSigningBoxSign;
function paramsOfAppEncryptionBoxGetInfo() {
    return {
        type: "GetInfo"
    };
}
exports.paramsOfAppEncryptionBoxGetInfo = paramsOfAppEncryptionBoxGetInfo;
function paramsOfAppEncryptionBoxEncrypt(data) {
    return {
        type: "Encrypt",
        data
    };
}
exports.paramsOfAppEncryptionBoxEncrypt = paramsOfAppEncryptionBoxEncrypt;
function paramsOfAppEncryptionBoxDecrypt(data) {
    return {
        type: "Decrypt",
        data
    };
}
exports.paramsOfAppEncryptionBoxDecrypt = paramsOfAppEncryptionBoxDecrypt;
function resultOfAppEncryptionBoxGetInfo(info) {
    return {
        type: "GetInfo",
        info
    };
}
exports.resultOfAppEncryptionBoxGetInfo = resultOfAppEncryptionBoxGetInfo;
function resultOfAppEncryptionBoxEncrypt(data) {
    return {
        type: "Encrypt",
        data
    };
}
exports.resultOfAppEncryptionBoxEncrypt = resultOfAppEncryptionBoxEncrypt;
function resultOfAppEncryptionBoxDecrypt(data) {
    return {
        type: "Decrypt",
        data
    };
}
exports.resultOfAppEncryptionBoxDecrypt = resultOfAppEncryptionBoxDecrypt;
function dispatchAppPasswordProvider(obj, params, app_request_id, client) {
    return __awaiter(this, void 0, void 0, function*() {
        try {
            let result = {};
            switch(params.type){
                case "GetPassword":
                    result = yield obj.get_password(params);
                    break;
            }
            client.resolve_app_request(app_request_id, Object.assign({
                type: params.type
            }, result));
        } catch (error) {
            client.reject_app_request(app_request_id, error);
        }
    });
}
function dispatchAppSigningBox(obj, params, app_request_id, client) {
    return __awaiter(this, void 0, void 0, function*() {
        try {
            let result = {};
            switch(params.type){
                case "GetPublicKey":
                    result = yield obj.get_public_key();
                    break;
                case "Sign":
                    result = yield obj.sign(params);
                    break;
            }
            client.resolve_app_request(app_request_id, Object.assign({
                type: params.type
            }, result));
        } catch (error) {
            client.reject_app_request(app_request_id, error);
        }
    });
}
function dispatchAppEncryptionBox(obj, params, app_request_id, client) {
    return __awaiter(this, void 0, void 0, function*() {
        try {
            let result = {};
            switch(params.type){
                case "GetInfo":
                    result = yield obj.get_info();
                    break;
                case "Encrypt":
                    result = yield obj.encrypt(params);
                    break;
                case "Decrypt":
                    result = yield obj.decrypt(params);
                    break;
            }
            client.resolve_app_request(app_request_id, Object.assign({
                type: params.type
            }, result));
        } catch (error) {
            client.reject_app_request(app_request_id, error);
        }
    });
}
/**
 * Crypto functions.
 */ class CryptoModule {
    constructor(client){
        this.client = client;
    }
    /**
     * Integer factorization
     *
     * @remarks
     * Performs prime factorization – decomposition of a composite number
     * into a product of smaller prime integers (factors).
     * See [https://en.wikipedia.org/wiki/Integer_factorization]
     *
     * @param {ParamsOfFactorize} params
     * @returns ResultOfFactorize
     */ factorize(params) {
        return this.client.request("crypto.factorize", params);
    }
    /**
     * Modular exponentiation
     *
     * @remarks
     * Performs modular exponentiation for big integers (`base`^`exponent` mod `modulus`).
     * See [https://en.wikipedia.org/wiki/Modular_exponentiation]
     *
     * @param {ParamsOfModularPower} params
     * @returns ResultOfModularPower
     */ modular_power(params) {
        return this.client.request("crypto.modular_power", params);
    }
    /**
     * Calculates CRC16 using TON algorithm.
     *
     * @param {ParamsOfTonCrc16} params
     * @returns ResultOfTonCrc16
     */ ton_crc16(params) {
        return this.client.request("crypto.ton_crc16", params);
    }
    /**
     * Generates random byte array of the specified length and returns it in `base64` format
     *
     * @param {ParamsOfGenerateRandomBytes} params
     * @returns ResultOfGenerateRandomBytes
     */ generate_random_bytes(params) {
        return this.client.request("crypto.generate_random_bytes", params);
    }
    /**
     * Converts public key to ton safe_format
     *
     * @param {ParamsOfConvertPublicKeyToTonSafeFormat} params
     * @returns ResultOfConvertPublicKeyToTonSafeFormat
     */ convert_public_key_to_ton_safe_format(params) {
        return this.client.request("crypto.convert_public_key_to_ton_safe_format", params);
    }
    /**
     * Generates random ed25519 key pair.
     * @returns KeyPair
     */ generate_random_sign_keys() {
        return this.client.request("crypto.generate_random_sign_keys");
    }
    /**
     * Signs a data using the provided keys.
     *
     * @param {ParamsOfSign} params
     * @returns ResultOfSign
     */ sign(params) {
        return this.client.request("crypto.sign", params);
    }
    /**
     * Verifies signed data using the provided public key. Raises error if verification is failed.
     *
     * @param {ParamsOfVerifySignature} params
     * @returns ResultOfVerifySignature
     */ verify_signature(params) {
        return this.client.request("crypto.verify_signature", params);
    }
    /**
     * Calculates SHA256 hash of the specified data.
     *
     * @param {ParamsOfHash} params
     * @returns ResultOfHash
     */ sha256(params) {
        return this.client.request("crypto.sha256", params);
    }
    /**
     * Calculates SHA512 hash of the specified data.
     *
     * @param {ParamsOfHash} params
     * @returns ResultOfHash
     */ sha512(params) {
        return this.client.request("crypto.sha512", params);
    }
    /**
     * Perform `scrypt` encryption
     *
     * @remarks
     * Derives key from `password` and `key` using `scrypt` algorithm.
     * See [https://en.wikipedia.org/wiki/Scrypt].
     *
     * # Arguments
     * - `log_n` - The log2 of the Scrypt parameter `N`
     * - `r` - The Scrypt parameter `r`
     * - `p` - The Scrypt parameter `p`
     * # Conditions
     * - `log_n` must be less than `64`
     * - `r` must be greater than `0` and less than or equal to `4294967295`
     * - `p` must be greater than `0` and less than `4294967295`
     * # Recommended values sufficient for most use-cases
     * - `log_n = 15` (`n = 32768`)
     * - `r = 8`
     * - `p = 1`
     *
     * @param {ParamsOfScrypt} params
     * @returns ResultOfScrypt
     */ scrypt(params) {
        return this.client.request("crypto.scrypt", params);
    }
    /**
     * Generates a key pair for signing from the secret key
     *
     * @remarks
     * **NOTE:** In the result the secret key is actually the concatenation
     * of secret and public keys (128 symbols hex string) by design of [NaCL](http://nacl.cr.yp.to/sign.html).
     * See also [the stackexchange question](https://crypto.stackexchange.com/questions/54353/).
     *
     * @param {ParamsOfNaclSignKeyPairFromSecret} params
     * @returns KeyPair
     */ nacl_sign_keypair_from_secret_key(params) {
        return this.client.request("crypto.nacl_sign_keypair_from_secret_key", params);
    }
    /**
     * Signs data using the signer's secret key.
     *
     * @param {ParamsOfNaclSign} params
     * @returns ResultOfNaclSign
     */ nacl_sign(params) {
        return this.client.request("crypto.nacl_sign", params);
    }
    /**
     * Verifies the signature and returns the unsigned message
     *
     * @remarks
     * Verifies the signature in `signed` using the signer's public key `public`
     * and returns the message `unsigned`.
     *
     * If the signature fails verification, crypto_sign_open raises an exception.
     *
     * @param {ParamsOfNaclSignOpen} params
     * @returns ResultOfNaclSignOpen
     */ nacl_sign_open(params) {
        return this.client.request("crypto.nacl_sign_open", params);
    }
    /**
     * Signs the message using the secret key and returns a signature.
     *
     * @remarks
     * Signs the message `unsigned` using the secret key `secret`
     * and returns a signature `signature`.
     *
     * @param {ParamsOfNaclSign} params
     * @returns ResultOfNaclSignDetached
     */ nacl_sign_detached(params) {
        return this.client.request("crypto.nacl_sign_detached", params);
    }
    /**
     * Verifies the signature with public key and `unsigned` data.
     *
     * @param {ParamsOfNaclSignDetachedVerify} params
     * @returns ResultOfNaclSignDetachedVerify
     */ nacl_sign_detached_verify(params) {
        return this.client.request("crypto.nacl_sign_detached_verify", params);
    }
    /**
     * Generates a random NaCl key pair
     * @returns KeyPair
     */ nacl_box_keypair() {
        return this.client.request("crypto.nacl_box_keypair");
    }
    /**
     * Generates key pair from a secret key
     *
     * @param {ParamsOfNaclBoxKeyPairFromSecret} params
     * @returns KeyPair
     */ nacl_box_keypair_from_secret_key(params) {
        return this.client.request("crypto.nacl_box_keypair_from_secret_key", params);
    }
    /**
     * Public key authenticated encryption
     *
     * @remarks
     * Encrypt and authenticate a message using the senders secret key, the receivers public
     * key, and a nonce.
     *
     * @param {ParamsOfNaclBox} params
     * @returns ResultOfNaclBox
     */ nacl_box(params) {
        return this.client.request("crypto.nacl_box", params);
    }
    /**
     * Decrypt and verify the cipher text using the receivers secret key, the senders public key, and the nonce.
     *
     * @param {ParamsOfNaclBoxOpen} params
     * @returns ResultOfNaclBoxOpen
     */ nacl_box_open(params) {
        return this.client.request("crypto.nacl_box_open", params);
    }
    /**
     * Encrypt and authenticate message using nonce and secret key.
     *
     * @param {ParamsOfNaclSecretBox} params
     * @returns ResultOfNaclBox
     */ nacl_secret_box(params) {
        return this.client.request("crypto.nacl_secret_box", params);
    }
    /**
     * Decrypts and verifies cipher text using `nonce` and secret `key`.
     *
     * @param {ParamsOfNaclSecretBoxOpen} params
     * @returns ResultOfNaclBoxOpen
     */ nacl_secret_box_open(params) {
        return this.client.request("crypto.nacl_secret_box_open", params);
    }
    /**
     * Prints the list of words from the specified dictionary
     *
     * @param {ParamsOfMnemonicWords} params
     * @returns ResultOfMnemonicWords
     */ mnemonic_words(params) {
        return this.client.request("crypto.mnemonic_words", params);
    }
    /**
     * Generates a random mnemonic
     *
     * @remarks
     * Generates a random mnemonic from the specified dictionary and word count
     *
     * @param {ParamsOfMnemonicFromRandom} params
     * @returns ResultOfMnemonicFromRandom
     */ mnemonic_from_random(params) {
        return this.client.request("crypto.mnemonic_from_random", params);
    }
    /**
     * Generates mnemonic from pre-generated entropy
     *
     * @param {ParamsOfMnemonicFromEntropy} params
     * @returns ResultOfMnemonicFromEntropy
     */ mnemonic_from_entropy(params) {
        return this.client.request("crypto.mnemonic_from_entropy", params);
    }
    /**
     * Validates a mnemonic phrase
     *
     * @remarks
     * The phrase supplied will be checked for word length and validated according to the checksum
     * specified in BIP0039.
     *
     * @param {ParamsOfMnemonicVerify} params
     * @returns ResultOfMnemonicVerify
     */ mnemonic_verify(params) {
        return this.client.request("crypto.mnemonic_verify", params);
    }
    /**
     * Derives a key pair for signing from the seed phrase
     *
     * @remarks
     * Validates the seed phrase, generates master key and then derives
     * the key pair from the master key and the specified path
     *
     * @param {ParamsOfMnemonicDeriveSignKeys} params
     * @returns KeyPair
     */ mnemonic_derive_sign_keys(params) {
        return this.client.request("crypto.mnemonic_derive_sign_keys", params);
    }
    /**
     * Generates an extended master private key that will be the root for all the derived keys
     *
     * @param {ParamsOfHDKeyXPrvFromMnemonic} params
     * @returns ResultOfHDKeyXPrvFromMnemonic
     */ hdkey_xprv_from_mnemonic(params) {
        return this.client.request("crypto.hdkey_xprv_from_mnemonic", params);
    }
    /**
     * Returns extended private key derived from the specified extended private key and child index
     *
     * @param {ParamsOfHDKeyDeriveFromXPrv} params
     * @returns ResultOfHDKeyDeriveFromXPrv
     */ hdkey_derive_from_xprv(params) {
        return this.client.request("crypto.hdkey_derive_from_xprv", params);
    }
    /**
     * Derives the extended private key from the specified key and path
     *
     * @param {ParamsOfHDKeyDeriveFromXPrvPath} params
     * @returns ResultOfHDKeyDeriveFromXPrvPath
     */ hdkey_derive_from_xprv_path(params) {
        return this.client.request("crypto.hdkey_derive_from_xprv_path", params);
    }
    /**
     * Extracts the private key from the serialized extended private key
     *
     * @param {ParamsOfHDKeySecretFromXPrv} params
     * @returns ResultOfHDKeySecretFromXPrv
     */ hdkey_secret_from_xprv(params) {
        return this.client.request("crypto.hdkey_secret_from_xprv", params);
    }
    /**
     * Extracts the public key from the serialized extended private key
     *
     * @param {ParamsOfHDKeyPublicFromXPrv} params
     * @returns ResultOfHDKeyPublicFromXPrv
     */ hdkey_public_from_xprv(params) {
        return this.client.request("crypto.hdkey_public_from_xprv", params);
    }
    /**
     * Performs symmetric `chacha20` encryption.
     *
     * @param {ParamsOfChaCha20} params
     * @returns ResultOfChaCha20
     */ chacha20(params) {
        return this.client.request("crypto.chacha20", params);
    }
    /**
     * Creates a Crypto Box instance.
     *
     * @remarks
     * Crypto Box is a root crypto object, that encapsulates some secret (seed phrase usually)
     * in encrypted form and acts as a factory for all crypto primitives used in SDK:
     * keys for signing and encryption, derived from this secret.
     *
     * Crypto Box encrypts original Seed Phrase with salt and password that is retrieved
     * from `password_provider` callback, implemented on Application side.
     *
     * When used, decrypted secret shows up in core library's memory for a very short period
     * of time and then is immediately overwritten with zeroes.
     *
     * @param {ParamsOfCreateCryptoBox} params
     * @returns RegisteredCryptoBox
     */ create_crypto_box(params, obj) {
        return this.client.request("crypto.create_crypto_box", params, (params, responseType)=>{
            if (responseType === 3) dispatchAppPasswordProvider(obj, params.request_data, params.app_request_id, this.client);
            else if (responseType === 4) dispatchAppPasswordProvider(obj, params, null, this.client);
        });
    }
    /**
     * Removes Crypto Box. Clears all secret data.
     *
     * @param {RegisteredCryptoBox} params
     * @returns
     */ remove_crypto_box(params) {
        return this.client.request("crypto.remove_crypto_box", params);
    }
    /**
     * Get Crypto Box Info. Used to get `encrypted_secret` that should be used for all the cryptobox initializations except the first one.
     *
     * @param {RegisteredCryptoBox} params
     * @returns ResultOfGetCryptoBoxInfo
     */ get_crypto_box_info(params) {
        return this.client.request("crypto.get_crypto_box_info", params);
    }
    /**
     * Get Crypto Box Seed Phrase.
     *
     * @remarks
     * Attention! Store this data in your application for a very short period of time and overwrite it with zeroes ASAP.
     *
     * @param {RegisteredCryptoBox} params
     * @returns ResultOfGetCryptoBoxSeedPhrase
     */ get_crypto_box_seed_phrase(params) {
        return this.client.request("crypto.get_crypto_box_seed_phrase", params);
    }
    /**
     * Get handle of Signing Box derived from Crypto Box.
     *
     * @param {ParamsOfGetSigningBoxFromCryptoBox} params
     * @returns RegisteredSigningBox
     */ get_signing_box_from_crypto_box(params) {
        return this.client.request("crypto.get_signing_box_from_crypto_box", params);
    }
    /**
     * Gets Encryption Box from Crypto Box.
     *
     * @remarks
     * Derives encryption keypair from cryptobox secret and hdpath and
     * stores it in cache for `secret_lifetime`
     * or until explicitly cleared by `clear_crypto_box_secret_cache` method.
     * If `secret_lifetime` is not specified - overwrites encryption secret with zeroes immediately after
     * encryption operation.
     *
     * @param {ParamsOfGetEncryptionBoxFromCryptoBox} params
     * @returns RegisteredEncryptionBox
     */ get_encryption_box_from_crypto_box(params) {
        return this.client.request("crypto.get_encryption_box_from_crypto_box", params);
    }
    /**
     * Removes cached secrets (overwrites with zeroes) from all signing and encryption boxes, derived from crypto box.
     *
     * @param {RegisteredCryptoBox} params
     * @returns
     */ clear_crypto_box_secret_cache(params) {
        return this.client.request("crypto.clear_crypto_box_secret_cache", params);
    }
    /**
     * Register an application implemented signing box.
     * @returns RegisteredSigningBox
     */ register_signing_box(obj) {
        return this.client.request("crypto.register_signing_box", undefined, (params, responseType)=>{
            if (responseType === 3) dispatchAppSigningBox(obj, params.request_data, params.app_request_id, this.client);
            else if (responseType === 4) dispatchAppSigningBox(obj, params, null, this.client);
        });
    }
    /**
     * Creates a default signing box implementation.
     *
     * @param {KeyPair} params
     * @returns RegisteredSigningBox
     */ get_signing_box(params) {
        return this.client.request("crypto.get_signing_box", params);
    }
    /**
     * Returns public key of signing key pair.
     *
     * @param {RegisteredSigningBox} params
     * @returns ResultOfSigningBoxGetPublicKey
     */ signing_box_get_public_key(params) {
        return this.client.request("crypto.signing_box_get_public_key", params);
    }
    /**
     * Returns signed user data.
     *
     * @param {ParamsOfSigningBoxSign} params
     * @returns ResultOfSigningBoxSign
     */ signing_box_sign(params) {
        return this.client.request("crypto.signing_box_sign", params);
    }
    /**
     * Removes signing box from SDK.
     *
     * @param {RegisteredSigningBox} params
     * @returns
     */ remove_signing_box(params) {
        return this.client.request("crypto.remove_signing_box", params);
    }
    /**
     * Register an application implemented encryption box.
     * @returns RegisteredEncryptionBox
     */ register_encryption_box(obj) {
        return this.client.request("crypto.register_encryption_box", undefined, (params, responseType)=>{
            if (responseType === 3) dispatchAppEncryptionBox(obj, params.request_data, params.app_request_id, this.client);
            else if (responseType === 4) dispatchAppEncryptionBox(obj, params, null, this.client);
        });
    }
    /**
     * Removes encryption box from SDK
     *
     * @param {RegisteredEncryptionBox} params
     * @returns
     */ remove_encryption_box(params) {
        return this.client.request("crypto.remove_encryption_box", params);
    }
    /**
     * Queries info from the given encryption box
     *
     * @param {ParamsOfEncryptionBoxGetInfo} params
     * @returns ResultOfEncryptionBoxGetInfo
     */ encryption_box_get_info(params) {
        return this.client.request("crypto.encryption_box_get_info", params);
    }
    /**
     * Encrypts data using given encryption box Note.
     *
     * @remarks
     * Block cipher algorithms pad data to cipher block size so encrypted data can be longer then original data. Client should store the original data size after encryption and use it after
     * decryption to retrieve the original data from decrypted data.
     *
     * @param {ParamsOfEncryptionBoxEncrypt} params
     * @returns ResultOfEncryptionBoxEncrypt
     */ encryption_box_encrypt(params) {
        return this.client.request("crypto.encryption_box_encrypt", params);
    }
    /**
     * Decrypts data using given encryption box Note.
     *
     * @remarks
     * Block cipher algorithms pad data to cipher block size so encrypted data can be longer then original data. Client should store the original data size after encryption and use it after
     * decryption to retrieve the original data from decrypted data.
     *
     * @param {ParamsOfEncryptionBoxDecrypt} params
     * @returns ResultOfEncryptionBoxDecrypt
     */ encryption_box_decrypt(params) {
        return this.client.request("crypto.encryption_box_decrypt", params);
    }
    /**
     * Creates encryption box with specified algorithm
     *
     * @param {ParamsOfCreateEncryptionBox} params
     * @returns RegisteredEncryptionBox
     */ create_encryption_box(params) {
        return this.client.request("crypto.create_encryption_box", params);
    }
}
exports.CryptoModule = CryptoModule;
// abi module
var AbiErrorCode;
(function(AbiErrorCode) {
    AbiErrorCode[AbiErrorCode["RequiredAddressMissingForEncodeMessage"] = 301] = "RequiredAddressMissingForEncodeMessage";
    AbiErrorCode[AbiErrorCode["RequiredCallSetMissingForEncodeMessage"] = 302] = "RequiredCallSetMissingForEncodeMessage";
    AbiErrorCode[AbiErrorCode["InvalidJson"] = 303] = "InvalidJson";
    AbiErrorCode[AbiErrorCode["InvalidMessage"] = 304] = "InvalidMessage";
    AbiErrorCode[AbiErrorCode["EncodeDeployMessageFailed"] = 305] = "EncodeDeployMessageFailed";
    AbiErrorCode[AbiErrorCode["EncodeRunMessageFailed"] = 306] = "EncodeRunMessageFailed";
    AbiErrorCode[AbiErrorCode["AttachSignatureFailed"] = 307] = "AttachSignatureFailed";
    AbiErrorCode[AbiErrorCode["InvalidTvcImage"] = 308] = "InvalidTvcImage";
    AbiErrorCode[AbiErrorCode["RequiredPublicKeyMissingForFunctionHeader"] = 309] = "RequiredPublicKeyMissingForFunctionHeader";
    AbiErrorCode[AbiErrorCode["InvalidSigner"] = 310] = "InvalidSigner";
    AbiErrorCode[AbiErrorCode["InvalidAbi"] = 311] = "InvalidAbi";
    AbiErrorCode[AbiErrorCode["InvalidFunctionId"] = 312] = "InvalidFunctionId";
    AbiErrorCode[AbiErrorCode["InvalidData"] = 313] = "InvalidData";
    AbiErrorCode[AbiErrorCode["EncodeInitialDataFailed"] = 314] = "EncodeInitialDataFailed";
    AbiErrorCode[AbiErrorCode["InvalidFunctionName"] = 315] = "InvalidFunctionName";
})(AbiErrorCode = exports.AbiErrorCode || (exports.AbiErrorCode = {}));
function abiContract(value) {
    return {
        type: "Contract",
        value
    };
}
exports.abiContract = abiContract;
function abiJson(value) {
    return {
        type: "Json",
        value
    };
}
exports.abiJson = abiJson;
function abiHandle(value) {
    return {
        type: "Handle",
        value
    };
}
exports.abiHandle = abiHandle;
function abiSerialized(value) {
    return {
        type: "Serialized",
        value
    };
}
exports.abiSerialized = abiSerialized;
function signerNone() {
    return {
        type: "None"
    };
}
exports.signerNone = signerNone;
function signerExternal(public_key) {
    return {
        type: "External",
        public_key
    };
}
exports.signerExternal = signerExternal;
function signerKeys(keys) {
    return {
        type: "Keys",
        keys
    };
}
exports.signerKeys = signerKeys;
function signerSigningBox(handle) {
    return {
        type: "SigningBox",
        handle
    };
}
exports.signerSigningBox = signerSigningBox;
var MessageBodyType;
(function(MessageBodyType) {
    MessageBodyType["Input"] = "Input";
    MessageBodyType["Output"] = "Output";
    MessageBodyType["InternalOutput"] = "InternalOutput";
    MessageBodyType["Event"] = "Event";
})(MessageBodyType = exports.MessageBodyType || (exports.MessageBodyType = {}));
function stateInitSourceMessage(source) {
    return {
        type: "Message",
        source
    };
}
exports.stateInitSourceMessage = stateInitSourceMessage;
function stateInitSourceStateInit(code, data, library) {
    return {
        type: "StateInit",
        code,
        data,
        library
    };
}
exports.stateInitSourceStateInit = stateInitSourceStateInit;
function stateInitSourceTvc(tvc, public_key, init_params) {
    return {
        type: "Tvc",
        tvc,
        public_key,
        init_params
    };
}
exports.stateInitSourceTvc = stateInitSourceTvc;
function messageSourceEncoded(message, abi) {
    return {
        type: "Encoded",
        message,
        abi
    };
}
exports.messageSourceEncoded = messageSourceEncoded;
function messageSourceEncodingParams(params) {
    return Object.assign({
        type: "EncodingParams"
    }, params);
}
exports.messageSourceEncodingParams = messageSourceEncodingParams;
/**
 * Provides message encoding and decoding according to the ABI specification.
 */ class AbiModule {
    constructor(client){
        this.client = client;
    }
    /**
     * Encodes message body according to ABI function call.
     *
     * @param {ParamsOfEncodeMessageBody} params
     * @returns ResultOfEncodeMessageBody
     */ encode_message_body(params) {
        return this.client.request("abi.encode_message_body", params);
    }
    /**
     *
     * @param {ParamsOfAttachSignatureToMessageBody} params
     * @returns ResultOfAttachSignatureToMessageBody
     */ attach_signature_to_message_body(params) {
        return this.client.request("abi.attach_signature_to_message_body", params);
    }
    /**
     * Encodes an ABI-compatible message
     *
     * @remarks
     * Allows to encode deploy and function call messages,
     * both signed and unsigned.
     *
     * Use cases include messages of any possible type:
     * - deploy with initial function call (i.e. `constructor` or any other function that is used for some kind
     * of initialization);
     * - deploy without initial function call;
     * - signed/unsigned + data for signing.
     *
     * `Signer` defines how the message should or shouldn't be signed:
     *
     * `Signer::None` creates an unsigned message. This may be needed in case of some public methods,
     * that do not require authorization by pubkey.
     *
     * `Signer::External` takes public key and returns `data_to_sign` for later signing.
     * Use `attach_signature` method with the result signature to get the signed message.
     *
     * `Signer::Keys` creates a signed message with provided key pair.
     *
     * [SOON] `Signer::SigningBox` Allows using a special interface to implement signing
     * without private key disclosure to SDK. For instance, in case of using a cold wallet or HSM,
     * when application calls some API to sign data.
     *
     * There is an optional public key can be provided in deploy set in order to substitute one
     * in TVM file.
     *
     * Public key resolving priority:
     * 1. Public key from deploy set.
     * 2. Public key, specified in TVM file.
     * 3. Public key, provided by signer.
     *
     * @param {ParamsOfEncodeMessage} params
     * @returns ResultOfEncodeMessage
     */ encode_message(params) {
        return this.client.request("abi.encode_message", params);
    }
    /**
     * Encodes an internal ABI-compatible message
     *
     * @remarks
     * Allows to encode deploy and function call messages.
     *
     * Use cases include messages of any possible type:
     * - deploy with initial function call (i.e. `constructor` or any other function that is used for some kind
     * of initialization);
     * - deploy without initial function call;
     * - simple function call
     *
     * There is an optional public key can be provided in deploy set in order to substitute one
     * in TVM file.
     *
     * Public key resolving priority:
     * 1. Public key from deploy set.
     * 2. Public key, specified in TVM file.
     *
     * @param {ParamsOfEncodeInternalMessage} params
     * @returns ResultOfEncodeInternalMessage
     */ encode_internal_message(params) {
        return this.client.request("abi.encode_internal_message", params);
    }
    /**
     * Combines `hex`-encoded `signature` with `base64`-encoded `unsigned_message`. Returns signed message encoded in `base64`.
     *
     * @param {ParamsOfAttachSignature} params
     * @returns ResultOfAttachSignature
     */ attach_signature(params) {
        return this.client.request("abi.attach_signature", params);
    }
    /**
     * Decodes message body using provided message BOC and ABI.
     *
     * @param {ParamsOfDecodeMessage} params
     * @returns DecodedMessageBody
     */ decode_message(params) {
        return this.client.request("abi.decode_message", params);
    }
    /**
     * Decodes message body using provided body BOC and ABI.
     *
     * @param {ParamsOfDecodeMessageBody} params
     * @returns DecodedMessageBody
     */ decode_message_body(params) {
        return this.client.request("abi.decode_message_body", params);
    }
    /**
     * Creates account state BOC
     *
     * @remarks
     * Creates account state provided with one of these sets of data :
     * 1. BOC of code, BOC of data, BOC of library
     * 2. TVC (string in `base64`), keys, init params
     *
     * @param {ParamsOfEncodeAccount} params
     * @returns ResultOfEncodeAccount
     */ encode_account(params) {
        return this.client.request("abi.encode_account", params);
    }
    /**
     * Decodes account data using provided data BOC and ABI.
     *
     * @remarks
     * Note: this feature requires ABI 2.1 or higher.
     *
     * @param {ParamsOfDecodeAccountData} params
     * @returns ResultOfDecodeAccountData
     */ decode_account_data(params) {
        return this.client.request("abi.decode_account_data", params);
    }
    /**
     * Updates initial account data with initial values for the contract's static variables and owner's public key. This operation is applicable only for initial account data (before deploy). If the contract is already deployed, its data doesn't contain this data section any more.
     *
     * @param {ParamsOfUpdateInitialData} params
     * @returns ResultOfUpdateInitialData
     */ update_initial_data(params) {
        return this.client.request("abi.update_initial_data", params);
    }
    /**
     * Encodes initial account data with initial values for the contract's static variables and owner's public key into a data BOC that can be passed to `encode_tvc` function afterwards.
     *
     * @remarks
     * This function is analogue of `tvm.buildDataInit` function in Solidity.
     *
     * @param {ParamsOfEncodeInitialData} params
     * @returns ResultOfEncodeInitialData
     */ encode_initial_data(params) {
        return this.client.request("abi.encode_initial_data", params);
    }
    /**
     * Decodes initial values of a contract's static variables and owner's public key from account initial data This operation is applicable only for initial account data (before deploy). If the contract is already deployed, its data doesn't contain this data section any more.
     *
     * @param {ParamsOfDecodeInitialData} params
     * @returns ResultOfDecodeInitialData
     */ decode_initial_data(params) {
        return this.client.request("abi.decode_initial_data", params);
    }
    /**
     * Decodes BOC into JSON as a set of provided parameters.
     *
     * @remarks
     * Solidity functions use ABI types for [builder encoding](https://github.com/tonlabs/TON-Solidity-Compiler/blob/master/API.md#tvmbuilderstore).
     * The simplest way to decode such a BOC is to use ABI decoding.
     * ABI has it own rules for fields layout in cells so manually encoded
     * BOC can not be described in terms of ABI rules.
     *
     * To solve this problem we introduce a new ABI type `Ref(<ParamType>)`
     * which allows to store `ParamType` ABI parameter in cell reference and, thus,
     * decode manually encoded BOCs. This type is available only in `decode_boc` function
     * and will not be available in ABI messages encoding until it is included into some ABI revision.
     *
     * Such BOC descriptions covers most users needs. If someone wants to decode some BOC which
     * can not be described by these rules (i.e. BOC with TLB containing constructors of flags
     * defining some parsing conditions) then they can decode the fields up to fork condition,
     * check the parsed data manually, expand the parsing schema and then decode the whole BOC
     * with the full schema.
     *
     * @param {ParamsOfDecodeBoc} params
     * @returns ResultOfDecodeBoc
     */ decode_boc(params) {
        return this.client.request("abi.decode_boc", params);
    }
    /**
     * Encodes given parameters in JSON into a BOC using param types from ABI.
     *
     * @param {ParamsOfAbiEncodeBoc} params
     * @returns ResultOfAbiEncodeBoc
     */ encode_boc(params) {
        return this.client.request("abi.encode_boc", params);
    }
    /**
     * Calculates contract function ID by contract ABI
     *
     * @param {ParamsOfCalcFunctionId} params
     * @returns ResultOfCalcFunctionId
     */ calc_function_id(params) {
        return this.client.request("abi.calc_function_id", params);
    }
}
exports.AbiModule = AbiModule;
function bocCacheTypePinned(pin) {
    return {
        type: "Pinned",
        pin
    };
}
exports.bocCacheTypePinned = bocCacheTypePinned;
function bocCacheTypeUnpinned() {
    return {
        type: "Unpinned"
    };
}
exports.bocCacheTypeUnpinned = bocCacheTypeUnpinned;
var BocErrorCode;
(function(BocErrorCode) {
    BocErrorCode[BocErrorCode["InvalidBoc"] = 201] = "InvalidBoc";
    BocErrorCode[BocErrorCode["SerializationError"] = 202] = "SerializationError";
    BocErrorCode[BocErrorCode["InappropriateBlock"] = 203] = "InappropriateBlock";
    BocErrorCode[BocErrorCode["MissingSourceBoc"] = 204] = "MissingSourceBoc";
    BocErrorCode[BocErrorCode["InsufficientCacheSize"] = 205] = "InsufficientCacheSize";
    BocErrorCode[BocErrorCode["BocRefNotFound"] = 206] = "BocRefNotFound";
    BocErrorCode[BocErrorCode["InvalidBocRef"] = 207] = "InvalidBocRef";
})(BocErrorCode = exports.BocErrorCode || (exports.BocErrorCode = {}));
function builderOpInteger(size, value) {
    return {
        type: "Integer",
        size,
        value
    };
}
exports.builderOpInteger = builderOpInteger;
function builderOpBitString(value) {
    return {
        type: "BitString",
        value
    };
}
exports.builderOpBitString = builderOpBitString;
function builderOpCell(builder) {
    return {
        type: "Cell",
        builder
    };
}
exports.builderOpCell = builderOpCell;
function builderOpCellBoc(boc) {
    return {
        type: "CellBoc",
        boc
    };
}
exports.builderOpCellBoc = builderOpCellBoc;
function builderOpAddress(address) {
    return {
        type: "Address",
        address
    };
}
exports.builderOpAddress = builderOpAddress;
/**
 * BOC manipulation module.
 */ class BocModule {
    constructor(client){
        this.client = client;
    }
    /**
     * Parses message boc into a JSON
     *
     * @remarks
     * JSON structure is compatible with GraphQL API message object
     *
     * @param {ParamsOfParse} params
     * @returns ResultOfParse
     */ parse_message(params) {
        return this.client.request("boc.parse_message", params);
    }
    /**
     * Parses transaction boc into a JSON
     *
     * @remarks
     * JSON structure is compatible with GraphQL API transaction object
     *
     * @param {ParamsOfParse} params
     * @returns ResultOfParse
     */ parse_transaction(params) {
        return this.client.request("boc.parse_transaction", params);
    }
    /**
     * Parses account boc into a JSON
     *
     * @remarks
     * JSON structure is compatible with GraphQL API account object
     *
     * @param {ParamsOfParse} params
     * @returns ResultOfParse
     */ parse_account(params) {
        return this.client.request("boc.parse_account", params);
    }
    /**
     * Parses block boc into a JSON
     *
     * @remarks
     * JSON structure is compatible with GraphQL API block object
     *
     * @param {ParamsOfParse} params
     * @returns ResultOfParse
     */ parse_block(params) {
        return this.client.request("boc.parse_block", params);
    }
    /**
     * Parses shardstate boc into a JSON
     *
     * @remarks
     * JSON structure is compatible with GraphQL API shardstate object
     *
     * @param {ParamsOfParseShardstate} params
     * @returns ResultOfParse
     */ parse_shardstate(params) {
        return this.client.request("boc.parse_shardstate", params);
    }
    /**
     * Extract blockchain configuration from key block and also from zerostate.
     *
     * @param {ParamsOfGetBlockchainConfig} params
     * @returns ResultOfGetBlockchainConfig
     */ get_blockchain_config(params) {
        return this.client.request("boc.get_blockchain_config", params);
    }
    /**
     * Calculates BOC root hash
     *
     * @param {ParamsOfGetBocHash} params
     * @returns ResultOfGetBocHash
     */ get_boc_hash(params) {
        return this.client.request("boc.get_boc_hash", params);
    }
    /**
     * Calculates BOC depth
     *
     * @param {ParamsOfGetBocDepth} params
     * @returns ResultOfGetBocDepth
     */ get_boc_depth(params) {
        return this.client.request("boc.get_boc_depth", params);
    }
    /**
     * Extracts code from TVC contract image
     *
     * @param {ParamsOfGetCodeFromTvc} params
     * @returns ResultOfGetCodeFromTvc
     */ get_code_from_tvc(params) {
        return this.client.request("boc.get_code_from_tvc", params);
    }
    /**
     * Get BOC from cache
     *
     * @param {ParamsOfBocCacheGet} params
     * @returns ResultOfBocCacheGet
     */ cache_get(params) {
        return this.client.request("boc.cache_get", params);
    }
    /**
     * Save BOC into cache or increase pin counter for existing pinned BOC
     *
     * @param {ParamsOfBocCacheSet} params
     * @returns ResultOfBocCacheSet
     */ cache_set(params) {
        return this.client.request("boc.cache_set", params);
    }
    /**
     * Unpin BOCs with specified pin defined in the `cache_set`. Decrease pin reference counter for BOCs with specified pin defined in the `cache_set`. BOCs which have only 1 pin and its reference counter become 0 will be removed from cache
     *
     * @param {ParamsOfBocCacheUnpin} params
     * @returns
     */ cache_unpin(params) {
        return this.client.request("boc.cache_unpin", params);
    }
    /**
     * Encodes bag of cells (BOC) with builder operations. This method provides the same functionality as Solidity TvmBuilder. Resulting BOC of this method can be passed into Solidity and C++ contracts as TvmCell type.
     *
     * @param {ParamsOfEncodeBoc} params
     * @returns ResultOfEncodeBoc
     */ encode_boc(params) {
        return this.client.request("boc.encode_boc", params);
    }
    /**
     * Returns the contract code's salt if it is present.
     *
     * @param {ParamsOfGetCodeSalt} params
     * @returns ResultOfGetCodeSalt
     */ get_code_salt(params) {
        return this.client.request("boc.get_code_salt", params);
    }
    /**
     * Sets new salt to contract code.
     *
     * @remarks
     * Returns the new contract code with salt.
     *
     * @param {ParamsOfSetCodeSalt} params
     * @returns ResultOfSetCodeSalt
     */ set_code_salt(params) {
        return this.client.request("boc.set_code_salt", params);
    }
    /**
     * Decodes tvc into code, data, libraries and special options.
     *
     * @param {ParamsOfDecodeTvc} params
     * @returns ResultOfDecodeTvc
     */ decode_tvc(params) {
        return this.client.request("boc.decode_tvc", params);
    }
    /**
     * Encodes tvc from code, data, libraries ans special options (see input params)
     *
     * @param {ParamsOfEncodeTvc} params
     * @returns ResultOfEncodeTvc
     */ encode_tvc(params) {
        return this.client.request("boc.encode_tvc", params);
    }
    /**
     * Encodes a message
     *
     * @remarks
     * Allows to encode any external inbound message.
     *
     * @param {ParamsOfEncodeExternalInMessage} params
     * @returns ResultOfEncodeExternalInMessage
     */ encode_external_in_message(params) {
        return this.client.request("boc.encode_external_in_message", params);
    }
    /**
     * Returns the compiler version used to compile the code.
     *
     * @param {ParamsOfGetCompilerVersion} params
     * @returns ResultOfGetCompilerVersion
     */ get_compiler_version(params) {
        return this.client.request("boc.get_compiler_version", params);
    }
}
exports.BocModule = BocModule;
// processing module
var ProcessingErrorCode;
(function(ProcessingErrorCode) {
    ProcessingErrorCode[ProcessingErrorCode["MessageAlreadyExpired"] = 501] = "MessageAlreadyExpired";
    ProcessingErrorCode[ProcessingErrorCode["MessageHasNotDestinationAddress"] = 502] = "MessageHasNotDestinationAddress";
    ProcessingErrorCode[ProcessingErrorCode["CanNotBuildMessageCell"] = 503] = "CanNotBuildMessageCell";
    ProcessingErrorCode[ProcessingErrorCode["FetchBlockFailed"] = 504] = "FetchBlockFailed";
    ProcessingErrorCode[ProcessingErrorCode["SendMessageFailed"] = 505] = "SendMessageFailed";
    ProcessingErrorCode[ProcessingErrorCode["InvalidMessageBoc"] = 506] = "InvalidMessageBoc";
    ProcessingErrorCode[ProcessingErrorCode["MessageExpired"] = 507] = "MessageExpired";
    ProcessingErrorCode[ProcessingErrorCode["TransactionWaitTimeout"] = 508] = "TransactionWaitTimeout";
    ProcessingErrorCode[ProcessingErrorCode["InvalidBlockReceived"] = 509] = "InvalidBlockReceived";
    ProcessingErrorCode[ProcessingErrorCode["CanNotCheckBlockShard"] = 510] = "CanNotCheckBlockShard";
    ProcessingErrorCode[ProcessingErrorCode["BlockNotFound"] = 511] = "BlockNotFound";
    ProcessingErrorCode[ProcessingErrorCode["InvalidData"] = 512] = "InvalidData";
    ProcessingErrorCode[ProcessingErrorCode["ExternalSignerMustNotBeUsed"] = 513] = "ExternalSignerMustNotBeUsed";
    ProcessingErrorCode[ProcessingErrorCode["MessageRejected"] = 514] = "MessageRejected";
    ProcessingErrorCode[ProcessingErrorCode["InvalidRempStatus"] = 515] = "InvalidRempStatus";
    ProcessingErrorCode[ProcessingErrorCode["NextRempStatusTimeout"] = 516] = "NextRempStatusTimeout";
})(ProcessingErrorCode = exports.ProcessingErrorCode || (exports.ProcessingErrorCode = {}));
function processingEventWillFetchFirstBlock() {
    return {
        type: "WillFetchFirstBlock"
    };
}
exports.processingEventWillFetchFirstBlock = processingEventWillFetchFirstBlock;
function processingEventFetchFirstBlockFailed(error) {
    return {
        type: "FetchFirstBlockFailed",
        error
    };
}
exports.processingEventFetchFirstBlockFailed = processingEventFetchFirstBlockFailed;
function processingEventWillSend(shard_block_id, message_id, message) {
    return {
        type: "WillSend",
        shard_block_id,
        message_id,
        message
    };
}
exports.processingEventWillSend = processingEventWillSend;
function processingEventDidSend(shard_block_id, message_id, message) {
    return {
        type: "DidSend",
        shard_block_id,
        message_id,
        message
    };
}
exports.processingEventDidSend = processingEventDidSend;
function processingEventSendFailed(shard_block_id, message_id, message, error) {
    return {
        type: "SendFailed",
        shard_block_id,
        message_id,
        message,
        error
    };
}
exports.processingEventSendFailed = processingEventSendFailed;
function processingEventWillFetchNextBlock(shard_block_id, message_id, message) {
    return {
        type: "WillFetchNextBlock",
        shard_block_id,
        message_id,
        message
    };
}
exports.processingEventWillFetchNextBlock = processingEventWillFetchNextBlock;
function processingEventFetchNextBlockFailed(shard_block_id, message_id, message, error) {
    return {
        type: "FetchNextBlockFailed",
        shard_block_id,
        message_id,
        message,
        error
    };
}
exports.processingEventFetchNextBlockFailed = processingEventFetchNextBlockFailed;
function processingEventMessageExpired(message_id, message, error) {
    return {
        type: "MessageExpired",
        message_id,
        message,
        error
    };
}
exports.processingEventMessageExpired = processingEventMessageExpired;
function processingEventRempSentToValidators(message_id, timestamp, json) {
    return {
        type: "RempSentToValidators",
        message_id,
        timestamp,
        json
    };
}
exports.processingEventRempSentToValidators = processingEventRempSentToValidators;
function processingEventRempIncludedIntoBlock(message_id, timestamp, json) {
    return {
        type: "RempIncludedIntoBlock",
        message_id,
        timestamp,
        json
    };
}
exports.processingEventRempIncludedIntoBlock = processingEventRempIncludedIntoBlock;
function processingEventRempIncludedIntoAcceptedBlock(message_id, timestamp, json) {
    return {
        type: "RempIncludedIntoAcceptedBlock",
        message_id,
        timestamp,
        json
    };
}
exports.processingEventRempIncludedIntoAcceptedBlock = processingEventRempIncludedIntoAcceptedBlock;
function processingEventRempOther(message_id, timestamp, json) {
    return {
        type: "RempOther",
        message_id,
        timestamp,
        json
    };
}
exports.processingEventRempOther = processingEventRempOther;
function processingEventRempError(error) {
    return {
        type: "RempError",
        error
    };
}
exports.processingEventRempError = processingEventRempError;
/**
 * Message processing module.
 *
 * @remarks
 * This module incorporates functions related to complex message
 * processing scenarios.
 */ class ProcessingModule {
    constructor(client){
        this.client = client;
    }
    /**
     * Sends message to the network
     *
     * @remarks
     * Sends message to the network and returns the last generated shard block of the destination account
     * before the message was sent. It will be required later for message processing.
     *
     * @param {ParamsOfSendMessage} params
     * @returns ResultOfSendMessage
     */ send_message(params, responseHandler) {
        return this.client.request("processing.send_message", params, responseHandler);
    }
    /**
     * Performs monitoring of the network for the result transaction of the external inbound message processing.
     *
     * @remarks
     * `send_events` enables intermediate events, such as `WillFetchNextBlock`,
     * `FetchNextBlockFailed` that may be useful for logging of new shard blocks creation
     * during message processing.
     *
     * Note, that presence of the `abi` parameter is critical for ABI
     * compliant contracts. Message processing uses drastically
     * different strategy for processing message for contracts which
     * ABI includes "expire" header.
     *
     * When the ABI header `expire` is present, the processing uses
     * `message expiration` strategy:
     * - The maximum block gen time is set to
     *   `message_expiration_timeout + transaction_wait_timeout`.
     * - When maximum block gen time is reached, the processing will
     *   be finished with `MessageExpired` error.
     *
     * When the ABI header `expire` isn't present or `abi` parameter
     * isn't specified, the processing uses `transaction waiting`
     * strategy:
     * - The maximum block gen time is set to
     *   `now() + transaction_wait_timeout`.
     *
     * - If maximum block gen time is reached and no result transaction is found,
     * the processing will exit with an error.
     *
     * @param {ParamsOfWaitForTransaction} params
     * @returns ResultOfProcessMessage
     */ wait_for_transaction(params, responseHandler) {
        return this.client.request("processing.wait_for_transaction", params, responseHandler);
    }
    /**
     * Creates message, sends it to the network and monitors its processing.
     *
     * @remarks
     * Creates ABI-compatible message,
     * sends it to the network and monitors for the result transaction.
     * Decodes the output messages' bodies.
     *
     * If contract's ABI includes "expire" header, then
     * SDK implements retries in case of unsuccessful message delivery within the expiration
     * timeout: SDK recreates the message, sends it and processes it again.
     *
     * The intermediate events, such as `WillFetchFirstBlock`, `WillSend`, `DidSend`,
     * `WillFetchNextBlock`, etc - are switched on/off by `send_events` flag
     * and logged into the supplied callback function.
     *
     * The retry configuration parameters are defined in the client's `NetworkConfig` and `AbiConfig`.
     *
     * If contract's ABI does not include "expire" header
     * then, if no transaction is found within the network timeout (see config parameter ), exits with error.
     *
     * @param {ParamsOfProcessMessage} params
     * @returns ResultOfProcessMessage
     */ process_message(params, responseHandler) {
        return this.client.request("processing.process_message", params, responseHandler);
    }
}
exports.ProcessingModule = ProcessingModule;
function addressStringFormatAccountId() {
    return {
        type: "AccountId"
    };
}
exports.addressStringFormatAccountId = addressStringFormatAccountId;
function addressStringFormatHex() {
    return {
        type: "Hex"
    };
}
exports.addressStringFormatHex = addressStringFormatHex;
function addressStringFormatBase64(url, test, bounce) {
    return {
        type: "Base64",
        url,
        test,
        bounce
    };
}
exports.addressStringFormatBase64 = addressStringFormatBase64;
var AccountAddressType;
(function(AccountAddressType) {
    AccountAddressType["AccountId"] = "AccountId";
    AccountAddressType["Hex"] = "Hex";
    AccountAddressType["Base64"] = "Base64";
})(AccountAddressType = exports.AccountAddressType || (exports.AccountAddressType = {}));
/**
 * Misc utility Functions.
 */ class UtilsModule {
    constructor(client){
        this.client = client;
    }
    /**
     * Converts address from any TON format to any TON format
     *
     * @param {ParamsOfConvertAddress} params
     * @returns ResultOfConvertAddress
     */ convert_address(params) {
        return this.client.request("utils.convert_address", params);
    }
    /**
     * Validates and returns the type of any TON address.
     *
     * @remarks
     * Address types are the following
     *
     * `0:919db8e740d50bf349df2eea03fa30c385d846b991ff5542e67098ee833fc7f7` - standard TON address most
     * commonly used in all cases. Also called as hex address
     * `919db8e740d50bf349df2eea03fa30c385d846b991ff5542e67098ee833fc7f7` - account ID. A part of full
     * address. Identifies account inside particular workchain
     * `EQCRnbjnQNUL80nfLuoD+jDDhdhGuZH/VULmcJjugz/H9wam` - base64 address. Also called "user-friendly".
     * Was used at the beginning of TON. Now it is supported for compatibility
     *
     * @param {ParamsOfGetAddressType} params
     * @returns ResultOfGetAddressType
     */ get_address_type(params) {
        return this.client.request("utils.get_address_type", params);
    }
    /**
     * Calculates storage fee for an account over a specified time period
     *
     * @param {ParamsOfCalcStorageFee} params
     * @returns ResultOfCalcStorageFee
     */ calc_storage_fee(params) {
        return this.client.request("utils.calc_storage_fee", params);
    }
    /**
     * Compresses data using Zstandard algorithm
     *
     * @param {ParamsOfCompressZstd} params
     * @returns ResultOfCompressZstd
     */ compress_zstd(params) {
        return this.client.request("utils.compress_zstd", params);
    }
    /**
     * Decompresses data using Zstandard algorithm
     *
     * @param {ParamsOfDecompressZstd} params
     * @returns ResultOfDecompressZstd
     */ decompress_zstd(params) {
        return this.client.request("utils.decompress_zstd", params);
    }
}
exports.UtilsModule = UtilsModule;
// tvm module
var TvmErrorCode;
(function(TvmErrorCode) {
    TvmErrorCode[TvmErrorCode["CanNotReadTransaction"] = 401] = "CanNotReadTransaction";
    TvmErrorCode[TvmErrorCode["CanNotReadBlockchainConfig"] = 402] = "CanNotReadBlockchainConfig";
    TvmErrorCode[TvmErrorCode["TransactionAborted"] = 403] = "TransactionAborted";
    TvmErrorCode[TvmErrorCode["InternalError"] = 404] = "InternalError";
    TvmErrorCode[TvmErrorCode["ActionPhaseFailed"] = 405] = "ActionPhaseFailed";
    TvmErrorCode[TvmErrorCode["AccountCodeMissing"] = 406] = "AccountCodeMissing";
    TvmErrorCode[TvmErrorCode["LowBalance"] = 407] = "LowBalance";
    TvmErrorCode[TvmErrorCode["AccountFrozenOrDeleted"] = 408] = "AccountFrozenOrDeleted";
    TvmErrorCode[TvmErrorCode["AccountMissing"] = 409] = "AccountMissing";
    TvmErrorCode[TvmErrorCode["UnknownExecutionError"] = 410] = "UnknownExecutionError";
    TvmErrorCode[TvmErrorCode["InvalidInputStack"] = 411] = "InvalidInputStack";
    TvmErrorCode[TvmErrorCode["InvalidAccountBoc"] = 412] = "InvalidAccountBoc";
    TvmErrorCode[TvmErrorCode["InvalidMessageType"] = 413] = "InvalidMessageType";
    TvmErrorCode[TvmErrorCode["ContractExecutionError"] = 414] = "ContractExecutionError";
})(TvmErrorCode = exports.TvmErrorCode || (exports.TvmErrorCode = {}));
function accountForExecutorNone() {
    return {
        type: "None"
    };
}
exports.accountForExecutorNone = accountForExecutorNone;
function accountForExecutorUninit() {
    return {
        type: "Uninit"
    };
}
exports.accountForExecutorUninit = accountForExecutorUninit;
function accountForExecutorAccount(boc, unlimited_balance) {
    return {
        type: "Account",
        boc,
        unlimited_balance
    };
}
exports.accountForExecutorAccount = accountForExecutorAccount;
class TvmModule {
    constructor(client){
        this.client = client;
    }
    /**
     * Emulates all the phases of contract execution locally
     *
     * @remarks
     * Performs all the phases of contract execution on Transaction Executor -
     * the same component that is used on Validator Nodes.
     *
     * Can be used for contract debugging, to find out the reason why a message was not delivered successfully.
     * Validators throw away the failed external inbound messages (if they failed bedore `ACCEPT`) in the real network.
     * This is why these messages are impossible to debug in the real network.
     * With the help of run_executor you can do that. In fact, `process_message` function
     * performs local check with `run_executor` if there was no transaction as a result of processing
     * and returns the error, if there is one.
     *
     * Another use case to use `run_executor` is to estimate fees for message execution.
     * Set  `AccountForExecutor::Account.unlimited_balance`
     * to `true` so that emulation will not depend on the actual balance.
     * This may be needed to calculate deploy fees for an account that does not exist yet.
     * JSON with fees is in `fees` field of the result.
     *
     * One more use case - you can produce the sequence of operations,
     * thus emulating the sequential contract calls locally.
     * And so on.
     *
     * Transaction executor requires account BOC (bag of cells) as a parameter.
     * To get the account BOC - use `net.query` method to download it from GraphQL API
     * (field `boc` of `account`) or generate it with `abi.encode_account` method.
     *
     * Also it requires message BOC. To get the message BOC - use `abi.encode_message` or `abi.encode_internal_message`.
     *
     * If you need this emulation to be as precise as possible (for instance - emulate transaction
     * with particular lt in particular block or use particular blockchain config,
     * downloaded from a particular key block - then specify `execution_options` parameter.
     *
     * If you need to see the aborted transaction as a result, not as an error, set `skip_transaction_check` to `true`.
     *
     * @param {ParamsOfRunExecutor} params
     * @returns ResultOfRunExecutor
     */ run_executor(params) {
        return this.client.request("tvm.run_executor", params);
    }
    /**
     * Executes get-methods of ABI-compatible contracts
     *
     * @remarks
     * Performs only a part of compute phase of transaction execution
     * that is used to run get-methods of ABI-compatible contracts.
     *
     * If you try to run get-methods with `run_executor` you will get an error, because it checks ACCEPT and exits
     * if there is none, which is actually true for get-methods.
     *
     *  To get the account BOC (bag of cells) - use `net.query` method to download it from GraphQL API
     * (field `boc` of `account`) or generate it with `abi.encode_account method`.
     * To get the message BOC - use `abi.encode_message` or prepare it any other way, for instance, with FIFT script.
     *
     * Attention! Updated account state is produces as well, but only
     * `account_state.storage.state.data`  part of the BOC is updated.
     *
     * @param {ParamsOfRunTvm} params
     * @returns ResultOfRunTvm
     */ run_tvm(params) {
        return this.client.request("tvm.run_tvm", params);
    }
    /**
     * Executes a get-method of FIFT contract
     *
     * @remarks
     * Executes a get-method of FIFT contract that fulfills the smc-guidelines https://test.ton.org/smc-guidelines.txt
     * and returns the result data from TVM's stack
     *
     * @param {ParamsOfRunGet} params
     * @returns ResultOfRunGet
     */ run_get(params) {
        return this.client.request("tvm.run_get", params);
    }
}
exports.TvmModule = TvmModule;
// net module
var NetErrorCode;
(function(NetErrorCode) {
    NetErrorCode[NetErrorCode["QueryFailed"] = 601] = "QueryFailed";
    NetErrorCode[NetErrorCode["SubscribeFailed"] = 602] = "SubscribeFailed";
    NetErrorCode[NetErrorCode["WaitForFailed"] = 603] = "WaitForFailed";
    NetErrorCode[NetErrorCode["GetSubscriptionResultFailed"] = 604] = "GetSubscriptionResultFailed";
    NetErrorCode[NetErrorCode["InvalidServerResponse"] = 605] = "InvalidServerResponse";
    NetErrorCode[NetErrorCode["ClockOutOfSync"] = 606] = "ClockOutOfSync";
    NetErrorCode[NetErrorCode["WaitForTimeout"] = 607] = "WaitForTimeout";
    NetErrorCode[NetErrorCode["GraphqlError"] = 608] = "GraphqlError";
    NetErrorCode[NetErrorCode["NetworkModuleSuspended"] = 609] = "NetworkModuleSuspended";
    NetErrorCode[NetErrorCode["WebsocketDisconnected"] = 610] = "WebsocketDisconnected";
    NetErrorCode[NetErrorCode["NotSupported"] = 611] = "NotSupported";
    NetErrorCode[NetErrorCode["NoEndpointsProvided"] = 612] = "NoEndpointsProvided";
    NetErrorCode[NetErrorCode["GraphqlWebsocketInitError"] = 613] = "GraphqlWebsocketInitError";
    NetErrorCode[NetErrorCode["NetworkModuleResumed"] = 614] = "NetworkModuleResumed";
    NetErrorCode[NetErrorCode["Unauthorized"] = 615] = "Unauthorized";
    NetErrorCode[NetErrorCode["QueryTransactionTreeTimeout"] = 616] = "QueryTransactionTreeTimeout";
})(NetErrorCode = exports.NetErrorCode || (exports.NetErrorCode = {}));
var SortDirection;
(function(SortDirection) {
    SortDirection["ASC"] = "ASC";
    SortDirection["DESC"] = "DESC";
})(SortDirection = exports.SortDirection || (exports.SortDirection = {}));
function paramsOfQueryOperationQueryCollection(params) {
    return Object.assign({
        type: "QueryCollection"
    }, params);
}
exports.paramsOfQueryOperationQueryCollection = paramsOfQueryOperationQueryCollection;
function paramsOfQueryOperationWaitForCollection(params) {
    return Object.assign({
        type: "WaitForCollection"
    }, params);
}
exports.paramsOfQueryOperationWaitForCollection = paramsOfQueryOperationWaitForCollection;
function paramsOfQueryOperationAggregateCollection(params) {
    return Object.assign({
        type: "AggregateCollection"
    }, params);
}
exports.paramsOfQueryOperationAggregateCollection = paramsOfQueryOperationAggregateCollection;
function paramsOfQueryOperationQueryCounterparties(params) {
    return Object.assign({
        type: "QueryCounterparties"
    }, params);
}
exports.paramsOfQueryOperationQueryCounterparties = paramsOfQueryOperationQueryCounterparties;
var AggregationFn;
(function(AggregationFn) {
    AggregationFn["COUNT"] = "COUNT";
    AggregationFn["MIN"] = "MIN";
    AggregationFn["MAX"] = "MAX";
    AggregationFn["SUM"] = "SUM";
    AggregationFn["AVERAGE"] = "AVERAGE";
})(AggregationFn = exports.AggregationFn || (exports.AggregationFn = {}));
/**
 * Network access.
 */ class NetModule {
    constructor(client){
        this.client = client;
    }
    /**
     * Performs DAppServer GraphQL query.
     *
     * @param {ParamsOfQuery} params
     * @returns ResultOfQuery
     */ query(params) {
        return this.client.request("net.query", params);
    }
    /**
     * Performs multiple queries per single fetch.
     *
     * @param {ParamsOfBatchQuery} params
     * @returns ResultOfBatchQuery
     */ batch_query(params) {
        return this.client.request("net.batch_query", params);
    }
    /**
     * Queries collection data
     *
     * @remarks
     * Queries data that satisfies the `filter` conditions,
     * limits the number of returned records and orders them.
     * The projection fields are limited to `result` fields
     *
     * @param {ParamsOfQueryCollection} params
     * @returns ResultOfQueryCollection
     */ query_collection(params) {
        return this.client.request("net.query_collection", params);
    }
    /**
     * Aggregates collection data.
     *
     * @remarks
     * Aggregates values from the specified `fields` for records
     * that satisfies the `filter` conditions,
     *
     * @param {ParamsOfAggregateCollection} params
     * @returns ResultOfAggregateCollection
     */ aggregate_collection(params) {
        return this.client.request("net.aggregate_collection", params);
    }
    /**
     * Returns an object that fulfills the conditions or waits for its appearance
     *
     * @remarks
     * Triggers only once.
     * If object that satisfies the `filter` conditions
     * already exists - returns it immediately.
     * If not - waits for insert/update of data within the specified `timeout`,
     * and returns it.
     * The projection fields are limited to `result` fields
     *
     * @param {ParamsOfWaitForCollection} params
     * @returns ResultOfWaitForCollection
     */ wait_for_collection(params) {
        return this.client.request("net.wait_for_collection", params);
    }
    /**
     * Cancels a subscription
     *
     * @remarks
     * Cancels a subscription specified by its handle.
     *
     * @param {ResultOfSubscribeCollection} params
     * @returns
     */ unsubscribe(params) {
        return this.client.request("net.unsubscribe", params);
    }
    /**
     * Creates a collection subscription
     *
     * @remarks
     * Triggers for each insert/update of data that satisfies
     * the `filter` conditions.
     * The projection fields are limited to `result` fields.
     *
     * The subscription is a persistent communication channel between
     * client and Free TON Network.
     * All changes in the blockchain will be reflected in realtime.
     * Changes means inserts and updates of the blockchain entities.
     *
     * ### Important Notes on Subscriptions
     *
     * Unfortunately sometimes the connection with the network brakes down.
     * In this situation the library attempts to reconnect to the network.
     * This reconnection sequence can take significant time.
     * All of this time the client is disconnected from the network.
     *
     * Bad news is that all blockchain changes that happened while
     * the client was disconnected are lost.
     *
     * Good news is that the client report errors to the callback when
     * it loses and resumes connection.
     *
     * So, if the lost changes are important to the application then
     * the application must handle these error reports.
     *
     * Library reports errors with `responseType` == 101
     * and the error object passed via `params`.
     *
     * When the library has successfully reconnected
     * the application receives callback with
     * `responseType` == 101 and `params.code` == 614 (NetworkModuleResumed).
     *
     * Application can use several ways to handle this situation:
     * - If application monitors changes for the single blockchain
     * object (for example specific account):  application
     * can perform a query for this object and handle actual data as a
     * regular data from the subscription.
     * - If application monitors sequence of some blockchain objects
     * (for example transactions of the specific account): application must
     * refresh all cached (or visible to user) lists where this sequences presents.
     *
     * @param {ParamsOfSubscribeCollection} params
     * @returns ResultOfSubscribeCollection
     */ subscribe_collection(params, responseHandler) {
        return this.client.request("net.subscribe_collection", params, responseHandler);
    }
    /**
     * Creates a subscription
     *
     * @remarks
     * The subscription is a persistent communication channel between
     * client and Everscale Network.
     *
     * ### Important Notes on Subscriptions
     *
     * Unfortunately sometimes the connection with the network breakes down.
     * In this situation the library attempts to reconnect to the network.
     * This reconnection sequence can take significant time.
     * All of this time the client is disconnected from the network.
     *
     * Bad news is that all changes that happened while
     * the client was disconnected are lost.
     *
     * Good news is that the client report errors to the callback when
     * it loses and resumes connection.
     *
     * So, if the lost changes are important to the application then
     * the application must handle these error reports.
     *
     * Library reports errors with `responseType` == 101
     * and the error object passed via `params`.
     *
     * When the library has successfully reconnected
     * the application receives callback with
     * `responseType` == 101 and `params.code` == 614 (NetworkModuleResumed).
     *
     * Application can use several ways to handle this situation:
     * - If application monitors changes for the single
     * object (for example specific account):  application
     * can perform a query for this object and handle actual data as a
     * regular data from the subscription.
     * - If application monitors sequence of some objects
     * (for example transactions of the specific account): application must
     * refresh all cached (or visible to user) lists where this sequences presents.
     *
     * @param {ParamsOfSubscribe} params
     * @returns ResultOfSubscribeCollection
     */ subscribe(params, responseHandler) {
        return this.client.request("net.subscribe", params, responseHandler);
    }
    /**
     * Suspends network module to stop any network activity
     * @returns
     */ suspend() {
        return this.client.request("net.suspend");
    }
    /**
     * Resumes network module to enable network activity
     * @returns
     */ resume() {
        return this.client.request("net.resume");
    }
    /**
     * Returns ID of the last block in a specified account shard
     *
     * @param {ParamsOfFindLastShardBlock} params
     * @returns ResultOfFindLastShardBlock
     */ find_last_shard_block(params) {
        return this.client.request("net.find_last_shard_block", params);
    }
    /**
     * Requests the list of alternative endpoints from server
     * @returns EndpointsSet
     */ fetch_endpoints() {
        return this.client.request("net.fetch_endpoints");
    }
    /**
     * Sets the list of endpoints to use on reinit
     *
     * @param {EndpointsSet} params
     * @returns
     */ set_endpoints(params) {
        return this.client.request("net.set_endpoints", params);
    }
    /**
     * Requests the list of alternative endpoints from server
     * @returns ResultOfGetEndpoints
     */ get_endpoints() {
        return this.client.request("net.get_endpoints");
    }
    /**
     * Allows to query and paginate through the list of accounts that the specified account has interacted with, sorted by the time of the last internal message between accounts
     *
     * @remarks
     * *Attention* this query retrieves data from 'Counterparties' service which is not supported in
     * the opensource version of DApp Server (and will not be supported) as well as in Evernode SE (will be supported in SE in future),
     * but is always accessible via [EVER OS Clouds](../ton-os-api/networks.md)
     *
     * @param {ParamsOfQueryCounterparties} params
     * @returns ResultOfQueryCollection
     */ query_counterparties(params) {
        return this.client.request("net.query_counterparties", params);
    }
    /**
     * Returns a tree of transactions triggered by a specific message.
     *
     * @remarks
     * Performs recursive retrieval of a transactions tree produced by a specific message:
     * in_msg -> dst_transaction -> out_messages -> dst_transaction -> ...
     * If the chain of transactions execution is in progress while the function is running,
     * it will wait for the next transactions to appear until the full tree or more than 50 transactions
     * are received.
     *
     * All the retrieved messages and transactions are included
     * into `result.messages` and `result.transactions` respectively.
     *
     * Function reads transactions layer by layer, by pages of 20 transactions.
     *
     * The retrieval prosess goes like this:
     * Let's assume we have an infinite chain of transactions and each transaction generates 5 messages.
     * 1. Retrieve 1st message (input parameter) and corresponding transaction - put it into result.
     * It is the first level of the tree of transactions - its root.
     * Retrieve 5 out message ids from the transaction for next steps.
     * 2. Retrieve 5 messages and corresponding transactions on the 2nd layer. Put them into result.
     * Retrieve 5*5 out message ids from these transactions for next steps
     * 3. Retrieve 20 (size of the page) messages and transactions (3rd layer) and 20*5=100 message ids (4th layer).
     * 4. Retrieve the last 5 messages and 5 transactions on the 3rd layer + 15 messages and transactions (of 100) from the 4th layer
     * + 25 message ids of the 4th layer + 75 message ids of the 5th layer.
     * 5. Retrieve 20 more messages and 20 more transactions of the 4th layer + 100 more message ids of the 5th layer.
     * 6. Now we have 1+5+20+20+20 = 66 transactions, which is more than 50. Function exits with the tree of
     * 1m->1t->5m->5t->25m->25t->35m->35t. If we see any message ids in the last transactions out_msgs, which don't have
     * corresponding messages in the function result, it means that the full tree was not received and we need to continue iteration.
     *
     * To summarize, it is guaranteed that each message in `result.messages` has the corresponding transaction
     * in the `result.transactions`.
     * But there is no guarantee that all messages from transactions `out_msgs` are
     * presented in `result.messages`.
     * So the application has to continue retrieval for missing messages if it requires.
     *
     * @param {ParamsOfQueryTransactionTree} params
     * @returns ResultOfQueryTransactionTree
     */ query_transaction_tree(params) {
        return this.client.request("net.query_transaction_tree", params);
    }
    /**
     * Creates block iterator.
     *
     * @remarks
     * Block iterator uses robust iteration methods that guaranties that every
     * block in the specified range isn't missed or iterated twice.
     *
     * Iterated range can be reduced with some filters:
     * - `start_time` – the bottom time range. Only blocks with `gen_utime`
     * more or equal to this value is iterated. If this parameter is omitted then there is
     * no bottom time edge, so all blocks since zero state is iterated.
     * - `end_time` – the upper time range. Only blocks with `gen_utime`
     * less then this value is iterated. If this parameter is omitted then there is
     * no upper time edge, so iterator never finishes.
     * - `shard_filter` – workchains and shard prefixes that reduce the set of interesting
     * blocks. Block conforms to the shard filter if it belongs to the filter workchain
     * and the first bits of block's `shard` fields matches to the shard prefix.
     * Only blocks with suitable shard are iterated.
     *
     * Items iterated is a JSON objects with block data. The minimal set of returned
     * fields is:
     * ```text
     * id
     * gen_utime
     * workchain_id
     * shard
     * after_split
     * after_merge
     * prev_ref {
     *     root_hash
     * }
     * prev_alt_ref {
     *     root_hash
     * }
     * ```
     * Application can request additional fields in the `result` parameter.
     *
     * Application should call the `remove_iterator` when iterator is no longer required.
     *
     * @param {ParamsOfCreateBlockIterator} params
     * @returns RegisteredIterator
     */ create_block_iterator(params) {
        return this.client.request("net.create_block_iterator", params);
    }
    /**
     * Resumes block iterator.
     *
     * @remarks
     * The iterator stays exactly at the same position where the `resume_state` was catched.
     *
     * Application should call the `remove_iterator` when iterator is no longer required.
     *
     * @param {ParamsOfResumeBlockIterator} params
     * @returns RegisteredIterator
     */ resume_block_iterator(params) {
        return this.client.request("net.resume_block_iterator", params);
    }
    /**
     * Creates transaction iterator.
     *
     * @remarks
     * Transaction iterator uses robust iteration methods that guaranty that every
     * transaction in the specified range isn't missed or iterated twice.
     *
     * Iterated range can be reduced with some filters:
     * - `start_time` – the bottom time range. Only transactions with `now`
     * more or equal to this value are iterated. If this parameter is omitted then there is
     * no bottom time edge, so all the transactions since zero state are iterated.
     * - `end_time` – the upper time range. Only transactions with `now`
     * less then this value are iterated. If this parameter is omitted then there is
     * no upper time edge, so iterator never finishes.
     * - `shard_filter` – workchains and shard prefixes that reduce the set of interesting
     * accounts. Account address conforms to the shard filter if
     * it belongs to the filter workchain and the first bits of address match to
     * the shard prefix. Only transactions with suitable account addresses are iterated.
     * - `accounts_filter` – set of account addresses whose transactions must be iterated.
     * Note that accounts filter can conflict with shard filter so application must combine
     * these filters carefully.
     *
     * Iterated item is a JSON objects with transaction data. The minimal set of returned
     * fields is:
     * ```text
     * id
     * account_addr
     * now
     * balance_delta(format:DEC)
     * bounce { bounce_type }
     * in_message {
     *     id
     *     value(format:DEC)
     *     msg_type
     *     src
     * }
     * out_messages {
     *     id
     *     value(format:DEC)
     *     msg_type
     *     dst
     * }
     * ```
     * Application can request an additional fields in the `result` parameter.
     *
     * Another parameter that affects on the returned fields is the `include_transfers`.
     * When this parameter is `true` the iterator computes and adds `transfer` field containing
     * list of the useful `TransactionTransfer` objects.
     * Each transfer is calculated from the particular message related to the transaction
     * and has the following structure:
     * - message – source message identifier.
     * - isBounced – indicates that the transaction is bounced, which means the value will be returned back to the sender.
     * - isDeposit – indicates that this transfer is the deposit (true) or withdraw (false).
     * - counterparty – account address of the transfer source or destination depending on `isDeposit`.
     * - value – amount of nano tokens transferred. The value is represented as a decimal string
     * because the actual value can be more precise than the JSON number can represent. Application
     * must use this string carefully – conversion to number can follow to loose of precision.
     *
     * Application should call the `remove_iterator` when iterator is no longer required.
     *
     * @param {ParamsOfCreateTransactionIterator} params
     * @returns RegisteredIterator
     */ create_transaction_iterator(params) {
        return this.client.request("net.create_transaction_iterator", params);
    }
    /**
     * Resumes transaction iterator.
     *
     * @remarks
     * The iterator stays exactly at the same position where the `resume_state` was caught.
     * Note that `resume_state` doesn't store the account filter. If the application requires
     * to use the same account filter as it was when the iterator was created then the application
     * must pass the account filter again in `accounts_filter` parameter.
     *
     * Application should call the `remove_iterator` when iterator is no longer required.
     *
     * @param {ParamsOfResumeTransactionIterator} params
     * @returns RegisteredIterator
     */ resume_transaction_iterator(params) {
        return this.client.request("net.resume_transaction_iterator", params);
    }
    /**
     * Returns next available items.
     *
     * @remarks
     * In addition to available items this function returns the `has_more` flag
     * indicating that the iterator isn't reach the end of the iterated range yet.
     *
     * This function can return the empty list of available items but
     * indicates that there are more items is available.
     * This situation appears when the iterator doesn't reach iterated range
     * but database doesn't contains available items yet.
     *
     * If application requests resume state in `return_resume_state` parameter
     * then this function returns `resume_state` that can be used later to
     * resume the iteration from the position after returned items.
     *
     * The structure of the items returned depends on the iterator used.
     * See the description to the appropriated iterator creation function.
     *
     * @param {ParamsOfIteratorNext} params
     * @returns ResultOfIteratorNext
     */ iterator_next(params) {
        return this.client.request("net.iterator_next", params);
    }
    /**
     * Removes an iterator
     *
     * @remarks
     * Frees all resources allocated in library to serve iterator.
     *
     * Application always should call the `remove_iterator` when iterator
     * is no longer required.
     *
     * @param {RegisteredIterator} params
     * @returns
     */ remove_iterator(params) {
        return this.client.request("net.remove_iterator", params);
    }
}
exports.NetModule = NetModule;
// debot module
var DebotErrorCode;
(function(DebotErrorCode) {
    DebotErrorCode[DebotErrorCode["DebotStartFailed"] = 801] = "DebotStartFailed";
    DebotErrorCode[DebotErrorCode["DebotFetchFailed"] = 802] = "DebotFetchFailed";
    DebotErrorCode[DebotErrorCode["DebotExecutionFailed"] = 803] = "DebotExecutionFailed";
    DebotErrorCode[DebotErrorCode["DebotInvalidHandle"] = 804] = "DebotInvalidHandle";
    DebotErrorCode[DebotErrorCode["DebotInvalidJsonParams"] = 805] = "DebotInvalidJsonParams";
    DebotErrorCode[DebotErrorCode["DebotInvalidFunctionId"] = 806] = "DebotInvalidFunctionId";
    DebotErrorCode[DebotErrorCode["DebotInvalidAbi"] = 807] = "DebotInvalidAbi";
    DebotErrorCode[DebotErrorCode["DebotGetMethodFailed"] = 808] = "DebotGetMethodFailed";
    DebotErrorCode[DebotErrorCode["DebotInvalidMsg"] = 809] = "DebotInvalidMsg";
    DebotErrorCode[DebotErrorCode["DebotExternalCallFailed"] = 810] = "DebotExternalCallFailed";
    DebotErrorCode[DebotErrorCode["DebotBrowserCallbackFailed"] = 811] = "DebotBrowserCallbackFailed";
    DebotErrorCode[DebotErrorCode["DebotOperationRejected"] = 812] = "DebotOperationRejected";
    DebotErrorCode[DebotErrorCode["DebotNoCode"] = 813] = "DebotNoCode";
})(DebotErrorCode = exports.DebotErrorCode || (exports.DebotErrorCode = {}));
function debotActivityTransaction(msg, dst, out, fee, setcode, signkey, signing_box_handle) {
    return {
        type: "Transaction",
        msg,
        dst,
        out,
        fee,
        setcode,
        signkey,
        signing_box_handle
    };
}
exports.debotActivityTransaction = debotActivityTransaction;
function paramsOfAppDebotBrowserLog(msg) {
    return {
        type: "Log",
        msg
    };
}
exports.paramsOfAppDebotBrowserLog = paramsOfAppDebotBrowserLog;
function paramsOfAppDebotBrowserSwitch(context_id) {
    return {
        type: "Switch",
        context_id
    };
}
exports.paramsOfAppDebotBrowserSwitch = paramsOfAppDebotBrowserSwitch;
function paramsOfAppDebotBrowserSwitchCompleted() {
    return {
        type: "SwitchCompleted"
    };
}
exports.paramsOfAppDebotBrowserSwitchCompleted = paramsOfAppDebotBrowserSwitchCompleted;
function paramsOfAppDebotBrowserShowAction(action) {
    return {
        type: "ShowAction",
        action
    };
}
exports.paramsOfAppDebotBrowserShowAction = paramsOfAppDebotBrowserShowAction;
function paramsOfAppDebotBrowserInput(prompt) {
    return {
        type: "Input",
        prompt
    };
}
exports.paramsOfAppDebotBrowserInput = paramsOfAppDebotBrowserInput;
function paramsOfAppDebotBrowserGetSigningBox() {
    return {
        type: "GetSigningBox"
    };
}
exports.paramsOfAppDebotBrowserGetSigningBox = paramsOfAppDebotBrowserGetSigningBox;
function paramsOfAppDebotBrowserInvokeDebot(debot_addr, action) {
    return {
        type: "InvokeDebot",
        debot_addr,
        action
    };
}
exports.paramsOfAppDebotBrowserInvokeDebot = paramsOfAppDebotBrowserInvokeDebot;
function paramsOfAppDebotBrowserSend(message) {
    return {
        type: "Send",
        message
    };
}
exports.paramsOfAppDebotBrowserSend = paramsOfAppDebotBrowserSend;
function paramsOfAppDebotBrowserApprove(activity) {
    return {
        type: "Approve",
        activity
    };
}
exports.paramsOfAppDebotBrowserApprove = paramsOfAppDebotBrowserApprove;
function resultOfAppDebotBrowserInput(value) {
    return {
        type: "Input",
        value
    };
}
exports.resultOfAppDebotBrowserInput = resultOfAppDebotBrowserInput;
function resultOfAppDebotBrowserGetSigningBox(signing_box) {
    return {
        type: "GetSigningBox",
        signing_box
    };
}
exports.resultOfAppDebotBrowserGetSigningBox = resultOfAppDebotBrowserGetSigningBox;
function resultOfAppDebotBrowserInvokeDebot() {
    return {
        type: "InvokeDebot"
    };
}
exports.resultOfAppDebotBrowserInvokeDebot = resultOfAppDebotBrowserInvokeDebot;
function resultOfAppDebotBrowserApprove(approved) {
    return {
        type: "Approve",
        approved
    };
}
exports.resultOfAppDebotBrowserApprove = resultOfAppDebotBrowserApprove;
function dispatchAppDebotBrowser(obj, params, app_request_id, client) {
    return __awaiter(this, void 0, void 0, function*() {
        try {
            let result = {};
            switch(params.type){
                case "Log":
                    obj.log(params);
                    break;
                case "Switch":
                    obj.switch(params);
                    break;
                case "SwitchCompleted":
                    obj.switch_completed();
                    break;
                case "ShowAction":
                    obj.show_action(params);
                    break;
                case "Input":
                    result = yield obj.input(params);
                    break;
                case "GetSigningBox":
                    result = yield obj.get_signing_box();
                    break;
                case "InvokeDebot":
                    yield obj.invoke_debot(params);
                    break;
                case "Send":
                    obj.send(params);
                    break;
                case "Approve":
                    result = yield obj.approve(params);
                    break;
            }
            client.resolve_app_request(app_request_id, Object.assign({
                type: params.type
            }, result));
        } catch (error) {
            client.reject_app_request(app_request_id, error);
        }
    });
}
/**
 * [UNSTABLE](UNSTABLE.md) Module for working with debot.
 */ class DebotModule {
    constructor(client){
        this.client = client;
    }
    /**
     * [UNSTABLE](UNSTABLE.md) Creates and instance of DeBot.
     *
     * @remarks
     * Downloads debot smart contract (code and data) from blockchain and creates
     * an instance of Debot Engine for it.
     *
     * # Remarks
     * It does not switch debot to context 0. Browser Callbacks are not called.
     *
     * @param {ParamsOfInit} params
     * @returns RegisteredDebot
     */ init(params, obj) {
        return this.client.request("debot.init", params, (params, responseType)=>{
            if (responseType === 3) dispatchAppDebotBrowser(obj, params.request_data, params.app_request_id, this.client);
            else if (responseType === 4) dispatchAppDebotBrowser(obj, params, null, this.client);
        });
    }
    /**
     * [UNSTABLE](UNSTABLE.md) Starts the DeBot.
     *
     * @remarks
     * Downloads debot smart contract from blockchain and switches it to
     * context zero.
     *
     * This function must be used by Debot Browser to start a dialog with debot.
     * While the function is executing, several Browser Callbacks can be called,
     * since the debot tries to display all actions from the context 0 to the user.
     *
     * When the debot starts SDK registers `BrowserCallbacks` AppObject.
     * Therefore when `debote.remove` is called the debot is being deleted and the callback is called
     * with `finish`=`true` which indicates that it will never be used again.
     *
     * @param {ParamsOfStart} params
     * @returns
     */ start(params) {
        return this.client.request("debot.start", params);
    }
    /**
     * [UNSTABLE](UNSTABLE.md) Fetches DeBot metadata from blockchain.
     *
     * @remarks
     * Downloads DeBot from blockchain and creates and fetches its metadata.
     *
     * @param {ParamsOfFetch} params
     * @returns ResultOfFetch
     */ fetch(params) {
        return this.client.request("debot.fetch", params);
    }
    /**
     * [UNSTABLE](UNSTABLE.md) Executes debot action.
     *
     * @remarks
     * Calls debot engine referenced by debot handle to execute input action.
     * Calls Debot Browser Callbacks if needed.
     *
     * # Remarks
     * Chain of actions can be executed if input action generates a list of subactions.
     *
     * @param {ParamsOfExecute} params
     * @returns
     */ execute(params) {
        return this.client.request("debot.execute", params);
    }
    /**
     * [UNSTABLE](UNSTABLE.md) Sends message to Debot.
     *
     * @remarks
     * Used by Debot Browser to send response on Dinterface call or from other Debots.
     *
     * @param {ParamsOfSend} params
     * @returns
     */ send(params) {
        return this.client.request("debot.send", params);
    }
    /**
     * [UNSTABLE](UNSTABLE.md) Destroys debot handle.
     *
     * @remarks
     * Removes handle from Client Context and drops debot engine referenced by that handle.
     *
     * @param {ParamsOfRemove} params
     * @returns
     */ remove(params) {
        return this.client.request("debot.remove", params);
    }
}
exports.DebotModule = DebotModule;
// proofs module
var ProofsErrorCode;
(function(ProofsErrorCode) {
    ProofsErrorCode[ProofsErrorCode["InvalidData"] = 901] = "InvalidData";
    ProofsErrorCode[ProofsErrorCode["ProofCheckFailed"] = 902] = "ProofCheckFailed";
    ProofsErrorCode[ProofsErrorCode["InternalError"] = 903] = "InternalError";
    ProofsErrorCode[ProofsErrorCode["DataDiffersFromProven"] = 904] = "DataDiffersFromProven";
})(ProofsErrorCode = exports.ProofsErrorCode || (exports.ProofsErrorCode = {}));
/**
 * [UNSTABLE](UNSTABLE.md) Module for proving data, retrieved from TONOS API.
 */ class ProofsModule {
    constructor(client){
        this.client = client;
    }
    /**
     * Proves that a given block's data, which is queried from TONOS API, can be trusted.
     *
     * @remarks
     * This function checks block proofs and compares given data with the proven.
     * If the given data differs from the proven, the exception will be thrown.
     * The input param is a single block's JSON object, which was queried from DApp server using
     * functions such as `net.query`, `net.query_collection` or `net.wait_for_collection`.
     * If block's BOC is not provided in the JSON, it will be queried from DApp server
     * (in this case it is required to provide at least `id` of block).
     *
     * Please note, that joins (like `signatures` in `Block`) are separated entities and not supported,
     * so function will throw an exception in a case if JSON being checked has such entities in it.
     *
     * If `cache_in_local_storage` in config is set to `true` (default), downloaded proofs and
     * master-chain BOCs are saved into the persistent local storage (e.g. file system for native
     * environments or browser's IndexedDB for the web); otherwise all the data is cached only in
     * memory in current client's context and will be lost after destruction of the client.
     *
     * **Why Proofs are needed**
     *
     * Proofs are needed to ensure that the data downloaded from a DApp server is real blockchain
     * data. Checking proofs can protect from the malicious DApp server which can potentially provide
     * fake data, or also from "Man in the Middle" attacks class.
     *
     * **What Proofs are**
     *
     * Simply, proof is a list of signatures of validators', which have signed this particular master-
     * block.
     *
     * The very first validator set's public keys are included in the zero-state. Whe know a root hash
     * of the zero-state, because it is stored in the network configuration file, it is our authority
     * root. For proving zero-state it is enough to calculate and compare its root hash.
     *
     * In each new validator cycle the validator set is changed. The new one is stored in a key-block,
     * which is signed by the validator set, which we already trust, the next validator set will be
     * stored to the new key-block and signed by the current validator set, and so on.
     *
     * In order to prove any block in the master-chain we need to check, that it has been signed by
     * a trusted validator set. So we need to check all key-blocks' proofs, started from the zero-state
     * and until the block, which we want to prove. But it can take a lot of time and traffic to
     * download and prove all key-blocks on a client. For solving this, special trusted blocks are used
     * in Ever-SDK.
     *
     * The trusted block is the authority root, as well, as the zero-state. Each trusted block is the
     * `id` (e.g. `root_hash`) of the already proven key-block. There can be plenty of trusted
     * blocks, so there can be a lot of authority roots. The hashes of trusted blocks for MainNet
     * and DevNet are hardcoded in SDK in a separated binary file (trusted_key_blocks.bin) and is
     * being updated for each release by using `update_trusted_blocks` utility.
     *
     * See [update_trusted_blocks](../../../tools/update_trusted_blocks) directory for more info.
     *
     * In future SDK releases, one will also be able to provide their hashes of trusted blocks for
     * other networks, besides for MainNet and DevNet.
     * By using trusted key-blocks, in order to prove any block, we can prove chain of key-blocks to
     * the closest previous trusted key-block, not only to the zero-state.
     *
     * But shard-blocks don't have proofs on DApp server. In this case, in order to prove any shard-
     * block data, we search for a corresponding master-block, which contains the root hash of this
     * shard-block, or some shard block which is linked to that block in shard-chain. After proving
     * this master-block, we traverse through each link and calculate and compare hashes with links,
     * one-by-one. After that we can ensure that this shard-block has also been proven.
     *
     * @param {ParamsOfProofBlockData} params
     * @returns
     */ proof_block_data(params) {
        return this.client.request("proofs.proof_block_data", params);
    }
    /**
     * Proves that a given transaction's data, which is queried from TONOS API, can be trusted.
     *
     * @remarks
     * This function requests the corresponding block, checks block proofs, ensures that given
     * transaction exists in the proven block and compares given data with the proven.
     * If the given data differs from the proven, the exception will be thrown.
     * The input parameter is a single transaction's JSON object (see params description),
     * which was queried from TONOS API using functions such as `net.query`, `net.query_collection`
     * or `net.wait_for_collection`.
     *
     * If transaction's BOC and/or `block_id` are not provided in the JSON, they will be queried from
     * TONOS API.
     *
     * Please note, that joins (like `account`, `in_message`, `out_messages`, etc. in `Transaction`
     * entity) are separated entities and not supported, so function will throw an exception in a case
     * if JSON being checked has such entities in it.
     *
     * For more information about proofs checking, see description of `proof_block_data` function.
     *
     * @param {ParamsOfProofTransactionData} params
     * @returns
     */ proof_transaction_data(params) {
        return this.client.request("proofs.proof_transaction_data", params);
    }
    /**
     * Proves that a given message's data, which is queried from TONOS API, can be trusted.
     *
     * @remarks
     * This function first proves the corresponding transaction, ensures that the proven transaction
     * refers to the given message and compares given data with the proven.
     * If the given data differs from the proven, the exception will be thrown.
     * The input parameter is a single message's JSON object (see params description),
     * which was queried from TONOS API using functions such as `net.query`, `net.query_collection`
     * or `net.wait_for_collection`.
     *
     * If message's BOC and/or non-null `src_transaction.id` or `dst_transaction.id` are not provided
     * in the JSON, they will be queried from TONOS API.
     *
     * Please note, that joins (like `block`, `dst_account`, `dst_transaction`, `src_account`,
     * `src_transaction`, etc. in `Message` entity) are separated entities and not supported,
     * so function will throw an exception in a case if JSON being checked has such entities in it.
     *
     * For more information about proofs checking, see description of `proof_block_data` function.
     *
     * @param {ParamsOfProofMessageData} params
     * @returns
     */ proof_message_data(params) {
        return this.client.request("proofs.proof_message_data", params);
    }
}
exports.ProofsModule = ProofsModule; //# sourceMappingURL=modules.js.map

},{}],"MXip4":[function(require,module,exports) {
"use strict";
/*
 * Copyright 2018-2020 TON Labs LTD.
 *
 * Licensed under the SOFTWARE EVALUATION License (the "License"); you may not use
 * this file except in compliance with the License.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific TON DEV software governing permissions and
 * limitations under the License.
 *
 */ var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TonClient = void 0;
const modules_1 = require("./modules");
const bin_1 = require("./bin");
class TonClient {
    constructor(config){
        this.context = undefined;
        this.contextCreation = undefined;
        this.contextError = undefined;
        this.config = config !== null && config !== void 0 ? config : {};
        this.client = new modules_1.ClientModule(this);
        this.crypto = new modules_1.CryptoModule(this);
        this.abi = new modules_1.AbiModule(this);
        this.boc = new modules_1.BocModule(this);
        this.processing = new modules_1.ProcessingModule(this);
        this.utils = new modules_1.UtilsModule(this);
        this.net = new modules_1.NetModule(this);
        this.tvm = new modules_1.TvmModule(this);
        this.proofs = new modules_1.ProofsModule(this);
    }
    static set default(client) {
        this._default = client;
    }
    static get default() {
        if (this._default === null) this._default = new TonClient(this._defaultConfig);
        return this._default;
    }
    static set defaultConfig(config) {
        this._defaultConfig = config;
    }
    static get defaultConfig() {
        return this._defaultConfig;
    }
    static useBinaryLibrary(loader) {
        (0, bin_1.useLibrary)(loader);
    }
    static toKey(d) {
        return toHex(d, 256);
    }
    static toHash64(d) {
        return toHex(d, 64);
    }
    static toHash128(d) {
        return toHex(d, 128);
    }
    static toHash256(d) {
        return toHex(d, 256);
    }
    static toHash512(d) {
        return toHex(d, 512);
    }
    static toHex(dec, bits = 0) {
        return toHex(dec, bits);
    }
    close() {
        const context = this.context;
        if (context !== undefined) {
            this.context = undefined;
            (0, bin_1.getBridge)().destroyContext(context);
        }
    }
    resolveError(functionName, params, err) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function*() {
            if (err.code !== 23 || !((_a = err.data) === null || _a === void 0 ? void 0 : _a.suggest_use_helper_for)) return err;
            try {
                const [modName, funcName] = functionName.split(".");
                const api = (yield this.client.get_api_reference()).api;
                const allTypesArray = api.modules.reduce((accumulator, element)=>accumulator.concat(element.types), []);
                const allTypesDict = {};
                allTypesArray.forEach((element)=>allTypesDict[element.name] = element);
                const module = api.modules.find((x)=>x.name === modName);
                const func = module.functions.find((x)=>x.name === funcName);
                const param = func.params[1];
                // If there is only context param (or AppObject second param), there is nothing to analyze
                if (!param || param.generic_name == "AppObject") return err;
                const paramTypeInfo = allTypesDict[param.ref_name];
                walkParameters(paramTypeInfo, params, "");
                function walkParameters(valueTypeInfo, value, path) {
                    switch(valueTypeInfo.type){
                        case "Array":
                            if (Array.isArray(value)) value.forEach((v)=>walkParameters(valueTypeInfo.array_item, v, `${path}[i]`));
                            break;
                        case "Struct":
                            valueTypeInfo.struct_fields.forEach((sf)=>walkParameters(sf, value[sf.name], path ? `${path}.${sf.name}` : sf.name));
                            break;
                        case "Optional":
                            if (value) walkParameters(valueTypeInfo.optional_inner, value, path);
                            break;
                        case "Ref":
                            if (valueTypeInfo.ref_name != "Value" && valueTypeInfo.ref_name != "API" && valueTypeInfo.ref_name != "AbiParam") walkParameters(allTypesDict[valueTypeInfo.ref_name], value, path);
                            break;
                        case "EnumOfTypes":
                            if (valueTypeInfo.enum_types.some((et)=>et.name == value.type)) return;
                            let parameterName = valueTypeInfo.name.toLowerCase();
                            let helperFunctions = [];
                            valueTypeInfo.enum_types.forEach((et)=>helperFunctions.push(parameterName + et.name));
                            err.message = `Consider using one of the helper methods (${helperFunctions.join(", ")}) for the \"${path}\" parameter\n` + err.message;
                            break;
                        default:
                            break;
                    }
                }
            } catch (e) {
                err.message = (_b = e.message) !== null && _b !== void 0 ? _b : `${e}`;
            }
            return err;
        });
    }
    contextRequired() {
        if (this.context !== undefined) return Promise.resolve(this.context);
        if (this.contextError !== undefined) return Promise.reject(this.contextError);
        if (this.contextCreation === undefined) {
            this.contextCreation = [];
            (0, bin_1.getBridge)().createContext(this.config).then((context)=>{
                const creation = this.contextCreation;
                this.contextCreation = undefined;
                this.context = context;
                creation === null || creation === void 0 || creation.forEach((x)=>x.resolve(context));
            }, (reason)=>{
                const creation = this.contextCreation;
                this.contextCreation = undefined;
                this.contextError = reason !== null && reason !== void 0 ? reason : undefined;
                creation === null || creation === void 0 || creation.forEach((x)=>x.reject(reason));
            });
        }
        return new Promise((resolve, reject)=>{
            var _a;
            (_a = this.contextCreation) === null || _a === void 0 || _a.push({
                resolve,
                reject
            });
        });
    }
    request(functionName, functionParams, responseHandler) {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            const context = (_a = this.context) !== null && _a !== void 0 ? _a : yield this.contextRequired();
            return (0, bin_1.getBridge)().request(context, functionName, functionParams, responseHandler !== null && responseHandler !== void 0 ? responseHandler : ()=>{}).catch((reason)=>__awaiter(this, void 0, void 0, function*() {
                    throw yield this.resolveError(functionName, functionParams, reason);
                }));
        });
    }
    resolve_app_request(app_request_id, result) {
        return __awaiter(this, void 0, void 0, function*() {
            if (app_request_id) yield this.client.resolve_app_request({
                app_request_id,
                result: {
                    type: "Ok",
                    result
                }
            });
        });
    }
    reject_app_request(app_request_id, error) {
        return __awaiter(this, void 0, void 0, function*() {
            if (app_request_id) yield this.client.resolve_app_request({
                app_request_id,
                result: {
                    type: "Error",
                    text: error.message
                }
            });
        });
    }
}
exports.TonClient = TonClient;
TonClient._defaultConfig = {};
TonClient._default = null;
// Converts value to hex
function toHex(value, bits) {
    let hex;
    if (typeof value === "number" || typeof value === "bigint") hex = value.toString(16);
    else if (typeof value === "string") {
        if (value.startsWith("0x")) hex = value.substring(2);
        else hex = decToHex(value);
    } else hex = value.toString();
    let len = bits / 4;
    while(hex.length > len && hex.startsWith("0"))hex = hex.substring(1);
    return hex.padStart(len, "0");
}
function decToHex(dec) {
    var _a;
    let bigNum = [];
    for(let i = 0; i < dec.length; i += 1){
        const d = ((_a = dec.codePointAt(i)) !== null && _a !== void 0 ? _a : 0) - 48;
        const mul8 = shl(bigNum, 3);
        const mul2 = shl(bigNum, 1);
        const mul10 = add(mul8, mul2);
        bigNum = add(mul10, [
            d
        ]);
    }
    let hex = "";
    for(let i1 = bigNum.length - 1; i1 >= 0; i1 -= 1)hex += bigNum[i1].toString(16).padStart(4, "0");
    return hex;
}
function shl(bigNum, bits) {
    let rest = 0;
    const result = [];
    for(let i = 0; i < bigNum.length; i += 1){
        let v = (bigNum[i] << bits) + rest;
        result.push(v & 0xFFFF);
        rest = v >> 16 & 0xFFFF;
    }
    if (rest > 0) result.push(rest);
    return result;
}
function add(a, b) {
    let rest = 0;
    const result = [];
    const len = Math.max(a.length, b.length);
    for(let i = 0; i < len; i += 1){
        let v = (i < a.length ? a[i] : 0) + (i < b.length ? b[i] : 0) + rest;
        result.push(v & 0xFFFF);
        rest = v >> 16 & 0xFFFF;
    }
    if (rest > 0) result.push(rest);
    return result;
} //# sourceMappingURL=client.js.map

},{"./modules":"27gLV","./bin":"fHrVm"}],"fHrVm":[function(require,module,exports) {
"use strict";
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CommonBinaryBridge = exports.useLibrary = exports.getBridge = exports.ResponseType = void 0;
const errors_1 = require("./errors");
var ResponseType;
(function(ResponseType) {
    ResponseType[ResponseType["Success"] = 0] = "Success";
    ResponseType[ResponseType["Error"] = 1] = "Error";
    ResponseType[ResponseType["Nop"] = 2] = "Nop";
    ResponseType[ResponseType["AppRequest"] = 3] = "AppRequest";
    ResponseType[ResponseType["AppNotify"] = 4] = "AppNotify";
    ResponseType[ResponseType["Custom"] = 100] = "Custom";
})(ResponseType = exports.ResponseType || (exports.ResponseType = {}));
let bridge = undefined;
function getBridge() {
    if (!bridge) throw new errors_1.TonClientError(1, "TON Client binary bridge isn't set.");
    return bridge;
}
exports.getBridge = getBridge;
function useLibrary(loader) {
    if ("createContext" in loader) bridge = loader;
    else bridge = new CommonBinaryBridge(loader);
}
exports.useLibrary = useLibrary;
class BinaryLibraryAdapter {
    constructor(library){
        this.library = library;
    }
    setResponseParamsHandler(handler) {
        if (handler === undefined) this.library.setResponseHandler(undefined);
        else this.library.setResponseHandler((requestId, paramsJson, responseType, finished)=>handler(requestId, paramsJson !== "" ? JSON.parse(paramsJson) : undefined, responseType, finished));
    }
    sendRequestParams(context, requestId, functionName, functionParams) {
        const paramsJson = functionParams === undefined || functionParams === null ? "" : JSON.stringify(functionParams, (_, value)=>typeof value === "bigint" ? value < Number.MAX_SAFE_INTEGER && value > Number.MIN_SAFE_INTEGER ? Number(value) : value.toString() : value);
        this.library.sendRequest(context, requestId, functionName, paramsJson);
    }
    createContext(configJson) {
        return this.library.createContext(configJson);
    }
    destroyContext(context) {
        this.library.destroyContext(context);
    }
}
class CommonBinaryBridge {
    constructor(loader){
        this.loading = undefined;
        this.loadError = undefined;
        this.library = undefined;
        this.requests = new Map();
        this.nextRequestId = 1;
        this.contextCount = 0;
        this.responseHandlerAssigned = false;
        this.loading = [];
        loader().then((library)=>{
            const saveLoading = this.loading;
            this.loading = undefined;
            let libraryWithParams = "setResponseParamsHandler" in library ? library : new BinaryLibraryAdapter(library);
            this.library = libraryWithParams;
            saveLoading === null || saveLoading === void 0 || saveLoading.forEach((x)=>x.resolve(libraryWithParams));
        }, (reason)=>{
            const saveLoading = this.loading;
            this.loading = undefined;
            this.loadError = reason !== null && reason !== void 0 ? reason : undefined;
            saveLoading === null || saveLoading === void 0 || saveLoading.forEach((x)=>x.reject(reason));
        });
    }
    checkResponseHandler() {
        var _a, _b;
        const mustBeAssigned = this.contextCount > 0 || this.requests.size > 0;
        if (this.responseHandlerAssigned !== mustBeAssigned) {
            if (mustBeAssigned) (_a = this.library) === null || _a === void 0 || _a.setResponseParamsHandler((requestId, params, responseType, finished)=>this.handleLibraryResponse(requestId, params, responseType, finished));
            else (_b = this.library) === null || _b === void 0 || _b.setResponseParamsHandler();
            this.responseHandlerAssigned = mustBeAssigned;
        }
    }
    createContext(config) {
        return __awaiter(this, void 0, void 0, function*() {
            const lib = this.library || (yield this.loadRequired());
            this.contextCount += 1;
            return CommonBinaryBridge.parseResult((yield lib.createContext(JSON.stringify(config))));
        });
    }
    destroyContext(context) {
        var _a;
        this.contextCount = Math.max(this.contextCount - 1, 0);
        this.checkResponseHandler();
        (_a = this.library) === null || _a === void 0 || _a.destroyContext(context);
    }
    request(context, functionName, functionParams, responseHandler) {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            const lib = (_a = this.library) !== null && _a !== void 0 ? _a : yield this.loadRequired();
            return new Promise((resolve, reject)=>{
                const request = {
                    resolve,
                    reject,
                    responseHandler
                };
                const requestId = this.generateRequestId();
                this.requests.set(requestId, request);
                this.checkResponseHandler();
                lib.sendRequestParams(context, requestId, functionName, functionParams);
            });
        });
    }
    loadRequired() {
        if (this.library !== undefined) return Promise.resolve(this.library);
        if (this.loadError !== undefined) return Promise.reject(this.loadError);
        if (this.loading === undefined) return Promise.reject(new errors_1.TonClientError(1, "TON Client binary library isn't set."));
        return new Promise((resolve, reject)=>{
            var _a;
            (_a = this.loading) === null || _a === void 0 || _a.push({
                resolve,
                reject
            });
        });
    }
    generateRequestId() {
        const id = this.nextRequestId;
        do {
            this.nextRequestId += 1;
            if (this.nextRequestId >= Number.MAX_SAFE_INTEGER) this.nextRequestId = 1;
        }while (this.requests.has(this.nextRequestId));
        return id;
    }
    handleLibraryResponse(requestId, params, responseType, finished) {
        const request = this.requests.get(requestId);
        if (!request) return;
        if (finished) {
            this.requests.delete(requestId);
            this.checkResponseHandler();
        }
        switch(responseType){
            case ResponseType.Success:
                request.resolve(params);
                break;
            case ResponseType.Error:
                request.reject(params);
                break;
            default:
                const isAppObjectOrCustom = responseType === ResponseType.AppNotify || responseType === ResponseType.AppRequest || responseType >= ResponseType.Custom;
                if (isAppObjectOrCustom && request.responseHandler) request.responseHandler(params, responseType);
        }
    }
    static parseResult(resultJson) {
        const result = JSON.parse(resultJson);
        if ("error" in result) throw new errors_1.TonClientError(result.error.code, result.error.message, result.error.data);
        return result.result;
    }
}
exports.CommonBinaryBridge = CommonBinaryBridge; //# sourceMappingURL=bin.js.map

},{"./errors":"e30Mw"}],"e30Mw":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TonClientError = void 0;
class TonClientError extends Error {
    constructor(code, message, data){
        super(message);
        this.code = code;
        this.data = data;
    }
}
exports.TonClientError = TonClientError; //# sourceMappingURL=errors.js.map

},{}],"03lEV":[function(require,module,exports) {
/*
 * Copyright 2018-2020 TON Labs LTD.
 *
 * Licensed under the SOFTWARE EVALUATION License (the "License"); you may not use
 * this file except in compliance with the License.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific TON DEV software governing permissions and
 * limitations under the License.
 *
 */ // This file is just a template that used to generate index.js at npm installation stage
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "libWebSetup", ()=>libWebSetup);
parcelHelpers.export(exports, "libWeb", ()=>libWeb);
var global = arguments[3];
const workerScript = `//****************************************************************** WRAPPER BEGIN

let wasm;

const cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8Memory0 = new Uint8Array();

function getUint8Memory0() {
    if (cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function getObject(idx) { return heap[idx]; }

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

let WASM_VECTOR_LEN = 0;

const cachedTextEncoder = new TextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachedInt32Memory0 = new Int32Array();

function getInt32Memory0() {
    if (cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}

let cachedFloat64Memory0 = new Float64Array();

function getFloat64Memory0() {
    if (cachedFloat64Memory0.byteLength === 0) {
        cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer);
    }
    return cachedFloat64Memory0;
}

let cachedBigInt64Memory0 = new BigInt64Array();

function getBigInt64Memory0() {
    if (cachedBigInt64Memory0.byteLength === 0) {
        cachedBigInt64Memory0 = new BigInt64Array(wasm.memory.buffer);
    }
    return cachedBigInt64Memory0;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  \`\${val}\`;
    }
    if (type == 'string') {
        return \`"\${val}"\`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return \`Symbol(\${description})\`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return \`Function(\${name})\`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of \`val\`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return \`\${val.name}: \${val.message}\\n\${val.stack}\`;
    }
    // TODO we could test for more things here, like \`Set\`s and \`Map\`s.
    return className;
}

function makeClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        try {
            return f(state.a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export_2.get(state.dtor)(state.a, state.b);
                state.a = 0;

            }
        }
    };
    real.original = state;

    return real;
}
function __wbg_adapter_50(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__Fn__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h6d5e1b9883c4464f(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_53(arg0, arg1) {
    wasm._dyn_core__ops__function__Fn_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h301d59c5350efcda(arg0, arg1);
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);

            } else {
                state.a = a;
            }
        }
    };
    real.original = state;

    return real;
}
function __wbg_adapter_56(arg0, arg1) {
    wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h220f424c4a8cd253(arg0, arg1);
}

function __wbg_adapter_59(arg0, arg1, arg2) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h66d95f0606fac985(retptr, arg0, arg1, addHeapObject(arg2));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        if (r1) {
            throw takeObject(r0);
        }
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

function __wbg_adapter_62(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h85dfe11e5a5a7c31(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_65(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h989a80b4ed275554(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_68(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h3ab80c6a88c6785e(arg0, arg1, addHeapObject(arg2));
}

/**
* @param {string} config_json
* @returns {string}
*/
function core_create_context(config_json) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(config_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.core_create_context(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(r0, r1);
    }
}

/**
* @param {number} context
*/
function core_destroy_context(context) {
    wasm.core_destroy_context(context);
}

/**
* @param {number} context
* @param {string} function_name
* @param {any} params
* @param {number} request_id
*/
function core_request(context, function_name, params, request_id) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(function_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.core_request(retptr, context, ptr0, len0, addHeapObject(params), request_id);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        if (r1) {
            throw takeObject(r0);
        }
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}

function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}

async function load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function getImports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbg_new_8d2af00bc1e329ee = function(arg0, arg1) {
        const ret = new Error(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
        const ret = getStringFromWasm0(arg0, arg1);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_memory = function() {
        const ret = wasm.memory;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_buffer_3f3d764d4747d564 = function(arg0) {
        const ret = getObject(arg0).buffer;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_newwithbyteoffsetandlength_d9aa266703cb98be = function(arg0, arg1, arg2) {
        const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        takeObject(arg0);
    };
    imports.wbg.__wbg_newwithlength_7c42f7e738a9d5d3 = function(arg0) {
        const ret = new Array(arg0 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_a68214f35c417fa9 = function(arg0, arg1, arg2) {
        getObject(arg0)[arg1 >>> 0] = takeObject(arg2);
    };
    imports.wbg.__wbg_newwithu8arraysequence_f863246af83e1785 = function() { return handleError(function (arg0) {
        const ret = new Blob(getObject(arg0));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_get_765201544a2b6869 = function() { return handleError(function (arg0, arg1) {
        const ret = Reflect.get(getObject(arg0), getObject(arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_instanceof_ArrayBuffer_e5e48f4762c5610b = function(arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof ArrayBuffer;
        } catch {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbindgen_is_object = function(arg0) {
        const val = getObject(arg0);
        const ret = typeof(val) === 'object' && val !== null;
        return ret;
    };
    imports.wbg.__wbg_new_8c3f0052272a457a = function(arg0) {
        const ret = new Uint8Array(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
        const ret = getObject(arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_keys_0702294afaeb6044 = function(arg0) {
        const ret = Object.keys(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_length_6e3bbe7c8bd4dbd8 = function(arg0) {
        const ret = getObject(arg0).length;
        return ret;
    };
    imports.wbg.__wbg_get_57245cc7d7c7619d = function(arg0, arg1) {
        const ret = getObject(arg0)[arg1 >>> 0];
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_string_get = function(arg0, arg1) {
        const obj = getObject(arg1);
        const ret = typeof(obj) === 'string' ? obj : undefined;
        var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_new0_a57059d72c5b7aee = function() {
        const ret = new Date();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getTime_cb82adb2556ed13e = function(arg0) {
        const ret = getObject(arg0).getTime();
        return ret;
    };
    imports.wbg.__wbindgen_jsval_loose_eq = function(arg0, arg1) {
        const ret = getObject(arg0) == getObject(arg1);
        return ret;
    };
    imports.wbg.__wbindgen_boolean_get = function(arg0) {
        const v = getObject(arg0);
        const ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;
        return ret;
    };
    imports.wbg.__wbindgen_is_bigint = function(arg0) {
        const ret = typeof(getObject(arg0)) === 'bigint';
        return ret;
    };
    imports.wbg.__wbindgen_number_get = function(arg0, arg1) {
        const obj = getObject(arg1);
        const ret = typeof(obj) === 'number' ? obj : undefined;
        getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
        getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
    };
    imports.wbg.__wbg_isSafeInteger_dfa0593e8d7ac35a = function(arg0) {
        const ret = Number.isSafeInteger(getObject(arg0));
        return ret;
    };
    imports.wbg.__wbindgen_bigint_get_as_i64 = function(arg0, arg1) {
        const v = getObject(arg1);
        const ret = typeof(v) === 'bigint' ? v : undefined;
        getBigInt64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0n : ret;
        getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
    };
    imports.wbg.__wbindgen_bigint_from_i64 = function(arg0) {
        const ret = arg0;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_jsval_eq = function(arg0, arg1) {
        const ret = getObject(arg0) === getObject(arg1);
        return ret;
    };
    imports.wbg.__wbindgen_bigint_from_u64 = function(arg0) {
        const ret = BigInt.asUintN(64, arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_error_new = function(arg0, arg1) {
        const ret = new Error(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_isArray_27c46c67f498e15d = function(arg0) {
        const ret = Array.isArray(getObject(arg0));
        return ret;
    };
    imports.wbg.__wbg_iterator_6f9d4f28845f426c = function() {
        const ret = Symbol.iterator;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_in = function(arg0, arg1) {
        const ret = getObject(arg0) in getObject(arg1);
        return ret;
    };
    imports.wbg.__wbg_entries_65a76a413fc91037 = function(arg0) {
        const ret = Object.entries(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_undefined = function(arg0) {
        const ret = getObject(arg0) === undefined;
        return ret;
    };
    imports.wbg.__wbindgen_is_null = function(arg0) {
        const ret = getObject(arg0) === null;
        return ret;
    };
    imports.wbg.__wbg_String_91fba7ded13ba54c = function(arg0, arg1) {
        const ret = String(getObject(arg1));
        const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbindgen_number_new = function(arg0) {
        const ret = arg0;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_0b9bfdd97583284e = function() {
        const ret = new Object();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_String_33099856e8a8246a = function(arg0, arg1) {
        const ret = String(getObject(arg1));
        const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_coreresponsehandler_a52879454c60c764 = function(arg0, arg1, arg2, arg3) {
        core_response_handler(arg0 >>> 0, takeObject(arg1), arg2 >>> 0, arg3 !== 0);
    };
    imports.wbg.__wbg_message_fe2af63ccc8985bc = function(arg0) {
        const ret = getObject(arg0).message;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_1d9a920c6bfc44a8 = function() {
        const ret = new Array();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_268f7b7dd3430798 = function() {
        const ret = new Map();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_933729cf5b66ac11 = function(arg0, arg1, arg2) {
        const ret = getObject(arg0).set(getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_string = function(arg0) {
        const ret = typeof(getObject(arg0)) === 'string';
        return ret;
    };
    imports.wbg.__wbg_set_fbc33d020f507b72 = function(arg0, arg1, arg2) {
        getObject(arg0)[takeObject(arg1)] = takeObject(arg2);
    };
    imports.wbg.__wbg_crypto_e1d53a1d73fb10b8 = function(arg0) {
        const ret = getObject(arg0).crypto;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_process_038c26bf42b093f8 = function(arg0) {
        const ret = getObject(arg0).process;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_versions_ab37218d2f0b24a8 = function(arg0) {
        const ret = getObject(arg0).versions;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_node_080f4b19d15bc1fe = function(arg0) {
        const ret = getObject(arg0).node;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_require_78a3dcfbdba9cbce = function() { return handleError(function () {
        const ret = module.require;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbindgen_is_function = function(arg0) {
        const ret = typeof(getObject(arg0)) === 'function';
        return ret;
    };
    imports.wbg.__wbg_call_168da88779e35f61 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_msCrypto_6e7d3e1f92610cbb = function(arg0) {
        const ret = getObject(arg0).msCrypto;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_newwithlength_f5933855e4f48a19 = function(arg0) {
        const ret = new Uint8Array(arg0 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_transaction_cce96cbebd81fe1c = function() { return handleError(function (arg0, arg1, arg2, arg3) {
        const ret = getObject(arg0).transaction(getStringFromWasm0(arg1, arg2), takeObject(arg3));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_setoncomplete_3e57a8cec8327f66 = function(arg0, arg1) {
        getObject(arg0).oncomplete = getObject(arg1);
    };
    imports.wbg.__wbg_setonerror_00051c0213f27b2c = function(arg0, arg1) {
        getObject(arg0).onerror = getObject(arg1);
    };
    imports.wbg.__wbg_setonabort_404bee3b9940d03d = function(arg0, arg1) {
        getObject(arg0).onabort = getObject(arg1);
    };
    imports.wbg.__wbg_item_52a6bec36314687b = function(arg0, arg1, arg2) {
        const ret = getObject(arg1).item(arg2 >>> 0);
        var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_objectStore_f17976b0e6377830 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).objectStore(getStringFromWasm0(arg1, arg2));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_target_bf704b7db7ad1387 = function(arg0) {
        const ret = getObject(arg0).target;
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_readyState_fb287f170113917c = function(arg0) {
        const ret = getObject(arg0).readyState;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_setonsuccess_5f71593bc51653a3 = function(arg0, arg1) {
        getObject(arg0).onsuccess = getObject(arg1);
    };
    imports.wbg.__wbg_setonerror_d5771cc5bf9ea74c = function(arg0, arg1) {
        getObject(arg0).onerror = getObject(arg1);
    };
    imports.wbg.__wbindgen_cb_drop = function(arg0) {
        const obj = takeObject(arg0).original;
        if (obj.cnt-- == 1) {
            obj.a = 0;
            return true;
        }
        const ret = false;
        return ret;
    };
    imports.wbg.__wbg_next_aaef7c8aa5e212ac = function() { return handleError(function (arg0) {
        const ret = getObject(arg0).next();
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_done_1b73b0672e15f234 = function(arg0) {
        const ret = getObject(arg0).done;
        return ret;
    };
    imports.wbg.__wbg_value_1ccc36bc03462d71 = function(arg0) {
        const ret = getObject(arg0).value;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_call_97ae9d8645dc388b = function() { return handleError(function (arg0, arg1) {
        const ret = getObject(arg0).call(getObject(arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_next_579e583d33566a86 = function(arg0) {
        const ret = getObject(arg0).next;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_self_6d479506f72c6a71 = function() { return handleError(function () {
        const ret = self.self;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_window_f2557cc78490aceb = function() { return handleError(function () {
        const ret = window.window;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_globalThis_7f206bda628d5286 = function() { return handleError(function () {
        const ret = globalThis.globalThis;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_global_ba75c50d1cf384f4 = function() { return handleError(function () {
        const ret = global.global;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_newnoargs_b5b063fc6c2f0376 = function(arg0, arg1) {
        const ret = new Function(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_83db9690f9353e79 = function(arg0, arg1, arg2) {
        getObject(arg0).set(getObject(arg1), arg2 >>> 0);
    };
    imports.wbg.__wbg_length_9e1ae1900cb0fbd5 = function(arg0) {
        const ret = getObject(arg0).length;
        return ret;
    };
    imports.wbg.__wbg_set_bf3f89b92d5a34bf = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
        return ret;
    }, arguments) };
    imports.wbg.__wbg_self_7eede1f4488bf346 = function() { return handleError(function () {
        const ret = self.self;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_crypto_c909fb428dcbddb6 = function(arg0) {
        const ret = getObject(arg0).crypto;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_msCrypto_511eefefbfc70ae4 = function(arg0) {
        const ret = getObject(arg0).msCrypto;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_static_accessor_MODULE_ef3aa2eb251158a5 = function() {
        const ret = module;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_require_900d5c3984fe7703 = function(arg0, arg1, arg2) {
        const ret = getObject(arg0).require(getStringFromWasm0(arg1, arg2));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getRandomValues_307049345d0bd88c = function(arg0) {
        const ret = getObject(arg0).getRandomValues;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_randomFillSync_85b3f4c52c56c313 = function(arg0, arg1, arg2) {
        getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
    };
    imports.wbg.__wbg_subarray_58ad4efbb5bcb886 = function(arg0, arg1, arg2) {
        const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getRandomValues_cd175915511f705e = function(arg0, arg1) {
        getObject(arg0).getRandomValues(getObject(arg1));
    };
    imports.wbg.__wbg_randomFillSync_6894564c2c334c42 = function() { return handleError(function (arg0, arg1, arg2) {
        getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
    }, arguments) };
    imports.wbg.__wbg_getRandomValues_805f1c3d65988a5a = function() { return handleError(function (arg0, arg1) {
        getObject(arg0).getRandomValues(getObject(arg1));
    }, arguments) };
    imports.wbg.__wbg_instanceof_Uint8Array_971eeda69eb75003 = function(arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof Uint8Array;
        } catch {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_put_84e7fc93eee27b28 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).put(getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_delete_8abedd1043b4105d = function() { return handleError(function (arg0, arg1) {
        const ret = getObject(arg0).delete(getObject(arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_setTimeout_d6fcf0d9067b8e64 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).setTimeout(getObject(arg1), arg2);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_clearTimeout_7d6f7bfeed34b348 = function(arg0, arg1) {
        getObject(arg0).clearTimeout(arg1);
    };
    imports.wbg.__wbg_newwithstrandinit_05d7180788420c40 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = new Request(getStringFromWasm0(arg0, arg1), getObject(arg2));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_headers_85824e993aa739bf = function(arg0) {
        const ret = getObject(arg0).headers;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_992c1d31586b2957 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
        getObject(arg0).set(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
    }, arguments) };
    imports.wbg.__wbg_fetch_0fe04905cccfc2aa = function(arg0, arg1) {
        const ret = getObject(arg0).fetch(getObject(arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_instanceof_Response_eaa426220848a39e = function(arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof Response;
        } catch {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_status_c4ef3dd591e63435 = function(arg0) {
        const ret = getObject(arg0).status;
        return ret;
    };
    imports.wbg.__wbg_url_74285ddf2747cb3d = function(arg0, arg1) {
        const ret = getObject(arg1).url;
        const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_setonversionchange_840d65cd0888dfb0 = function(arg0, arg1) {
        getObject(arg0).onversionchange = getObject(arg1);
    };
    imports.wbg.__wbg_setonupgradeneeded_17d0b9530f1e0cac = function(arg0, arg1) {
        getObject(arg0).onupgradeneeded = getObject(arg1);
    };
    imports.wbg.__wbg_setonblocked_e66d6be5c879980d = function(arg0, arg1) {
        getObject(arg0).onblocked = getObject(arg1);
    };
    imports.wbg.__wbg_message_a7af3ee0cc0fe28d = function(arg0, arg1) {
        const ret = getObject(arg1).message;
        const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_stringify_d6471d300ded9b68 = function() { return handleError(function (arg0) {
        const ret = JSON.stringify(getObject(arg0));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_Window_5684341ff6dfe3ad = function(arg0) {
        const ret = getObject(arg0).Window;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_WorkerGlobalScope_e0447ffcae8bb272 = function(arg0) {
        const ret = getObject(arg0).WorkerGlobalScope;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_indexedDB_050f0962ab607ac5 = function() { return handleError(function (arg0) {
        const ret = getObject(arg0).indexedDB;
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_indexedDB_8d9e9ab4616df7f0 = function() { return handleError(function (arg0) {
        const ret = getObject(arg0).indexedDB;
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_open_a31c3fe1fdc244eb = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).open(getStringFromWasm0(arg1, arg2));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_newwithstr_d5b5f9b985ee84fb = function() { return handleError(function (arg0, arg1, arg2, arg3) {
        const ret = new WebSocket(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_new_d29e507f6606de91 = function() { return handleError(function (arg0, arg1) {
        const ret = new WebSocket(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_setonmessage_c5a806b62a0c5607 = function(arg0, arg1) {
        getObject(arg0).onmessage = getObject(arg1);
    };
    imports.wbg.__wbg_setonopen_9ce48dce57e549b5 = function(arg0, arg1) {
        getObject(arg0).onopen = getObject(arg1);
    };
    imports.wbg.__wbg_setonerror_02393260b3e29972 = function(arg0, arg1) {
        getObject(arg0).onerror = getObject(arg1);
    };
    imports.wbg.__wbg_send_80b256d87a6779e5 = function() { return handleError(function (arg0, arg1, arg2) {
        getObject(arg0).send(getStringFromWasm0(arg1, arg2));
    }, arguments) };
    imports.wbg.__wbg_data_7b1f01f4e6a64fbe = function(arg0) {
        const ret = getObject(arg0).data;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_objectStoreNames_8c06c40d2b05141c = function(arg0) {
        const ret = getObject(arg0).objectStoreNames;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_createObjectStore_d3e2789c13dde1fc = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).createObjectStore(getStringFromWasm0(arg1, arg2));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_instanceof_Error_56b496a10a56de66 = function(arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof Error;
        } catch {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_getTimezoneOffset_89bd4275e1ca8341 = function(arg0) {
        const ret = getObject(arg0).getTimezoneOffset();
        return ret;
    };
    imports.wbg.__wbindgen_debug_string = function(arg0, arg1) {
        const ret = debugString(getObject(arg1));
        const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbg_then_cedad20fbbd9418a = function(arg0, arg1, arg2) {
        const ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_resolve_99fe17964f31ffc0 = function(arg0) {
        const ret = Promise.resolve(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_then_11f7a54d67b4bfad = function(arg0, arg1) {
        const ret = getObject(arg0).then(getObject(arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_result_9e399c14676970d9 = function() { return handleError(function (arg0) {
        const ret = getObject(arg0).result;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_error_aacf5ac191e54ed0 = function() { return handleError(function (arg0) {
        const ret = getObject(arg0).error;
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_get_6285bf458a1ee758 = function() { return handleError(function (arg0, arg1) {
        const ret = getObject(arg0).get(getObject(arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_instanceof_Window_acc97ff9f5d2c7b4 = function(arg0) {
        let result;
        try {
            result = true;
        } catch {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_close_45d053bea59e7746 = function() { return handleError(function (arg0) {
        getObject(arg0).close();
    }, arguments) };
    imports.wbg.__wbg_text_1169d752cc697903 = function() { return handleError(function (arg0) {
        const ret = getObject(arg0).text();
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbindgen_closure_wrapper942 = function(arg0, arg1, arg2) {
        const ret = makeClosure(arg0, arg1, 44, __wbg_adapter_50);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper953 = function(arg0, arg1, arg2) {
        const ret = makeClosure(arg0, arg1, 47, __wbg_adapter_53);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper6271 = function(arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 238, __wbg_adapter_56);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper6565 = function(arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 244, __wbg_adapter_59);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper7096 = function(arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 247, __wbg_adapter_62);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper7097 = function(arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 1206, __wbg_adapter_65);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper7098 = function(arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 241, __wbg_adapter_68);
        return addHeapObject(ret);
    };

    return imports;
}

function initMemory(imports, maybe_memory) {

}

function finalizeInit(instance, module) {
    wasm = instance.exports;
    init.__wbindgen_wasm_module = module;
    cachedBigInt64Memory0 = new BigInt64Array();
    cachedFloat64Memory0 = new Float64Array();
    cachedInt32Memory0 = new Int32Array();
    cachedUint8Memory0 = new Uint8Array();


    return wasm;
}

function initSync(module) {
    const imports = getImports();

    initMemory(imports);

    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }

    const instance = new WebAssembly.Instance(module, imports);

    return finalizeInit(instance, module);
}

async function init(input) {
    if (typeof input === 'undefined') {    }
    const imports = getImports();

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }

    initMemory(imports);

    const { instance, module } = await load(await input, imports);

    return finalizeInit(instance, module);
}


//****************************************************************** WRAPPER END

function replaceUndefinedWithNulls(value) {
    if (value === undefined) {
        return null;
    }
    if (value instanceof Blob) {
        return value;
    }
    if (typeof value === "object" && value !== null) {
        const result = Array.isArray(value) ? [] : {};
        for (const key in value) {
            result[key] = replaceUndefinedWithNulls(value[key]);
        }
        return result;
    }
    return value;
};

function core_response_handler(request_id, params, response_type, finished) {
    postMessage({
        type: 'response',
        requestId: request_id,
        params: replaceUndefinedWithNulls(params),
        responseType: response_type,
        finished,
    });
}

async function replaceBlobsWithArrayBuffers(value) {
    if (value instanceof Blob) {
        return await value.arrayBuffer();
    }
    if (typeof value === "bigint") {
        if (value < Number.MAX_SAFE_INTEGER && value > Number.MIN_SAFE_INTEGER) {
            return Number(value);
        } else {
            return value.toString();
        }
    }
    if (typeof value === "object" && value !== null) {
        const result = Array.isArray(value) ? [] : {};
        for (const key in value) {
            result[key] = await replaceBlobsWithArrayBuffers(value[key]);
        }
        return result;
    }
    return value;
}

self.onmessage = (e) => {
    const message = e.data;
    switch (message.type) {
    case 'init':
        (async () => {
            await init(message.wasmModule);
            postMessage({ type: 'init' });
        })();
        break;

    case 'createContext':
        postMessage({
            type: 'createContext',
            result: core_create_context(message.configJson),
            requestId: message.requestId,
        });
        break;

    case 'destroyContext':
        core_destroy_context(message.context);
        postMessage({
            type: 'destroyContext'
        });
        break;

    case 'request':
        (async () => {
            core_request(
                message.context,
                message.functionName,
                await replaceBlobsWithArrayBuffers(message.functionParams),
                message.requestId,
            );
        })();
        break;
    }
};
`;
let options = null;
function libWebSetup(libOptions) {
    options = libOptions;
}
function debugLog(message) {
    if (options && options.debugLog) options.debugLog(message);
}
async function loadModule() {
    const startLoadTime = Date.now();
    let wasmModule;
    if (options && options.loadModule) wasmModule = await options.loadModule;
    else {
        const fetched = fetch(options && options.binaryURL || "/eversdk.wasm");
        if (WebAssembly.compileStreaming) {
            debugLog("compileStreaming binary");
            return await WebAssembly.compileStreaming(fetched);
        }
        debugLog("compile binary");
        wasmModule = await WebAssembly.compile(await (await fetched).arrayBuffer());
    }
    await init(wasmModule);
    debugLog(`compile time ${Date.now() - startLoadTime}`);
}
function withSeparateWorker() {
    function debugLog(message) {
        if (options && options.debugLog) options.debugLog(message);
    }
    const workerBlob = new Blob([
        workerScript
    ], {
        type: "application/javascript"
    });
    const workerUrl = URL.createObjectURL(workerBlob);
    const worker = new Worker(workerUrl);
    let nextCreateContextRequestId = 1;
    const createContextRequests = new Map();
    let initComplete = false;
    let responseHandler = null;
    worker.onmessage = (evt)=>{
        const message = evt.data;
        switch(message.type){
            case "init":
                initComplete = true;
                for (const [requestId, request] of createContextRequests.entries())worker.postMessage({
                    type: "createContext",
                    requestId,
                    configJson: request.configJson
                });
                break;
            case "createContext":
                const request1 = createContextRequests.get(message.requestId);
                if (request1) {
                    createContextRequests.delete(message.requestId);
                    request1.resolve(message.result);
                }
                break;
            case "destroyContext":
                break;
            case "response":
                if (responseHandler) responseHandler(message.requestId, message.params, message.responseType, message.finished);
                break;
        }
    };
    worker.onerror = (evt)=>{
        console.log(`Error from Web Worker: ${evt.message}`);
    };
    (async ()=>{
        worker.postMessage({
            type: "init",
            wasmModule: await loadModule()
        });
    })();
    return Promise.resolve({
        setResponseParamsHandler: (handler)=>{
            responseHandler = handler;
        },
        createContext: (configJson)=>{
            return new Promise((resolve)=>{
                const requestId = nextCreateContextRequestId;
                nextCreateContextRequestId += 1;
                createContextRequests.set(requestId, {
                    configJson,
                    resolve
                });
                if (initComplete) worker.postMessage({
                    type: "createContext",
                    requestId,
                    configJson
                });
            });
        },
        destroyContext: (context)=>{
            worker.postMessage({
                type: "destroyContext",
                context
            });
        },
        sendRequestParams: (context, requestId, functionName, functionParams)=>{
            worker.postMessage({
                type: "request",
                context,
                requestId,
                functionName,
                functionParams
            });
        }
    });
}
function withoutSeparateWorker() {
    //****************************************************************** WRAPPER BEGIN
    let wasm;
    const cachedTextDecoder = new TextDecoder("utf-8", {
        ignoreBOM: true,
        fatal: true
    });
    cachedTextDecoder.decode();
    let cachedUint8Memory0 = new Uint8Array();
    function getUint8Memory0() {
        if (cachedUint8Memory0.byteLength === 0) cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
        return cachedUint8Memory0;
    }
    function getStringFromWasm0(ptr, len) {
        return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
    }
    const heap = new Array(32).fill(undefined);
    heap.push(undefined, null, true, false);
    let heap_next = heap.length;
    function addHeapObject(obj) {
        if (heap_next === heap.length) heap.push(heap.length + 1);
        const idx = heap_next;
        heap_next = heap[idx];
        heap[idx] = obj;
        return idx;
    }
    function getObject(idx) {
        return heap[idx];
    }
    function dropObject(idx) {
        if (idx < 36) return;
        heap[idx] = heap_next;
        heap_next = idx;
    }
    function takeObject(idx) {
        const ret = getObject(idx);
        dropObject(idx);
        return ret;
    }
    let WASM_VECTOR_LEN = 0;
    const cachedTextEncoder = new TextEncoder("utf-8");
    const encodeString = typeof cachedTextEncoder.encodeInto === "function" ? function(arg, view) {
        return cachedTextEncoder.encodeInto(arg, view);
    } : function(arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
    function passStringToWasm0(arg, malloc, realloc) {
        if (realloc === undefined) {
            const buf = cachedTextEncoder.encode(arg);
            const ptr = malloc(buf.length);
            getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
            WASM_VECTOR_LEN = buf.length;
            return ptr;
        }
        let len = arg.length;
        let ptr1 = malloc(len);
        const mem = getUint8Memory0();
        let offset = 0;
        for(; offset < len; offset++){
            const code = arg.charCodeAt(offset);
            if (code > 0x7F) break;
            mem[ptr1 + offset] = code;
        }
        if (offset !== len) {
            if (offset !== 0) arg = arg.slice(offset);
            ptr1 = realloc(ptr1, len, len = offset + arg.length * 3);
            const view = getUint8Memory0().subarray(ptr1 + offset, ptr1 + len);
            const ret = encodeString(arg, view);
            offset += ret.written;
        }
        WASM_VECTOR_LEN = offset;
        return ptr1;
    }
    function isLikeNone(x) {
        return x === undefined || x === null;
    }
    let cachedInt32Memory0 = new Int32Array();
    function getInt32Memory0() {
        if (cachedInt32Memory0.byteLength === 0) cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
        return cachedInt32Memory0;
    }
    let cachedFloat64Memory0 = new Float64Array();
    function getFloat64Memory0() {
        if (cachedFloat64Memory0.byteLength === 0) cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer);
        return cachedFloat64Memory0;
    }
    let cachedBigInt64Memory0 = new BigInt64Array();
    function getBigInt64Memory0() {
        if (cachedBigInt64Memory0.byteLength === 0) cachedBigInt64Memory0 = new BigInt64Array(wasm.memory.buffer);
        return cachedBigInt64Memory0;
    }
    function debugString(val) {
        // primitive types
        const type = typeof val;
        if (type == "number" || type == "boolean" || val == null) return `${val}`;
        if (type == "string") return `"${val}"`;
        if (type == "symbol") {
            const description = val.description;
            if (description == null) return "Symbol";
            else return `Symbol(${description})`;
        }
        if (type == "function") {
            const name = val.name;
            if (typeof name == "string" && name.length > 0) return `Function(${name})`;
            else return "Function";
        }
        // objects
        if (Array.isArray(val)) {
            const length = val.length;
            let debug = "[";
            if (length > 0) debug += debugString(val[0]);
            for(let i = 1; i < length; i++)debug += ", " + debugString(val[i]);
            debug += "]";
            return debug;
        }
        // Test for built-in
        const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
        let className;
        if (builtInMatches.length > 1) className = builtInMatches[1];
        else // Failed to match the standard '[object ClassName]'
        return toString.call(val);
        if (className == "Object") // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return "Object(" + JSON.stringify(val) + ")";
        } catch (_) {
            return "Object";
        }
        // errors
        if (val instanceof Error) return `${val.name}: ${val.message}\n${val.stack}`;
        // TODO we could test for more things here, like `Set`s and `Map`s.
        return className;
    }
    function makeClosure(arg0, arg1, dtor, f) {
        const state = {
            a: arg0,
            b: arg1,
            cnt: 1,
            dtor
        };
        const real = (...args)=>{
            // First up with a closure we increment the internal reference
            // count. This ensures that the Rust closure environment won't
            // be deallocated while we're invoking it.
            state.cnt++;
            try {
                return f(state.a, state.b, ...args);
            } finally{
                if (--state.cnt === 0) {
                    wasm.__wbindgen_export_2.get(state.dtor)(state.a, state.b);
                    state.a = 0;
                }
            }
        };
        real.original = state;
        return real;
    }
    function __wbg_adapter_50(arg0, arg1, arg2) {
        wasm._dyn_core__ops__function__Fn__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h6d5e1b9883c4464f(arg0, arg1, addHeapObject(arg2));
    }
    function __wbg_adapter_53(arg0, arg1) {
        wasm._dyn_core__ops__function__Fn_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h301d59c5350efcda(arg0, arg1);
    }
    function makeMutClosure(arg0, arg1, dtor, f) {
        const state = {
            a: arg0,
            b: arg1,
            cnt: 1,
            dtor
        };
        const real = (...args)=>{
            // First up with a closure we increment the internal reference
            // count. This ensures that the Rust closure environment won't
            // be deallocated while we're invoking it.
            state.cnt++;
            const a = state.a;
            state.a = 0;
            try {
                return f(a, state.b, ...args);
            } finally{
                if (--state.cnt === 0) wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);
                else state.a = a;
            }
        };
        real.original = state;
        return real;
    }
    function __wbg_adapter_56(arg0, arg1) {
        wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h220f424c4a8cd253(arg0, arg1);
    }
    function __wbg_adapter_59(arg0, arg1, arg2) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h66d95f0606fac985(retptr, arg0, arg1, addHeapObject(arg2));
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            if (r1) throw takeObject(r0);
        } finally{
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    function __wbg_adapter_62(arg0, arg1, arg2) {
        wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h85dfe11e5a5a7c31(arg0, arg1, addHeapObject(arg2));
    }
    function __wbg_adapter_65(arg0, arg1, arg2) {
        wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h989a80b4ed275554(arg0, arg1, addHeapObject(arg2));
    }
    function __wbg_adapter_68(arg0, arg1, arg2) {
        wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h3ab80c6a88c6785e(arg0, arg1, addHeapObject(arg2));
    }
    /**
* @param {string} config_json
* @returns {string}
*/ function core_create_context(config_json) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passStringToWasm0(config_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.core_create_context(retptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally{
            wasm.__wbindgen_add_to_stack_pointer(16);
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
* @param {number} context
*/ function core_destroy_context(context) {
        wasm.core_destroy_context(context);
    }
    /**
* @param {number} context
* @param {string} function_name
* @param {any} params
* @param {number} request_id
*/ function core_request(context, function_name, params, request_id) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passStringToWasm0(function_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.core_request(retptr, context, ptr0, len0, addHeapObject(params), request_id);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            if (r1) throw takeObject(r0);
        } finally{
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    function handleError(f, args) {
        try {
            return f.apply(this, args);
        } catch (e) {
            wasm.__wbindgen_exn_store(addHeapObject(e));
        }
    }
    function getArrayU8FromWasm0(ptr, len) {
        return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
    }
    async function load(module1, imports) {
        if (typeof Response === "function" && module1 instanceof Response) {
            if (typeof WebAssembly.instantiateStreaming === "function") try {
                return await WebAssembly.instantiateStreaming(module1, imports);
            } catch (e) {
                if (module1.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
                else throw e;
            }
            const bytes = await module1.arrayBuffer();
            return await WebAssembly.instantiate(bytes, imports);
        } else {
            const instance = await WebAssembly.instantiate(module1, imports);
            if (instance instanceof WebAssembly.Instance) return {
                instance,
                module: module1
            };
            else return instance;
        }
    }
    function getImports() {
        const imports = {};
        imports.wbg = {};
        imports.wbg.__wbg_new_8d2af00bc1e329ee = function(arg0, arg1) {
            const ret = new Error(getStringFromWasm0(arg0, arg1));
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
            const ret = getStringFromWasm0(arg0, arg1);
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_memory = function() {
            const ret = wasm.memory;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_buffer_3f3d764d4747d564 = function(arg0) {
            const ret = getObject(arg0).buffer;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_newwithbyteoffsetandlength_d9aa266703cb98be = function(arg0, arg1, arg2) {
            const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
            takeObject(arg0);
        };
        imports.wbg.__wbg_newwithlength_7c42f7e738a9d5d3 = function(arg0) {
            const ret = new Array(arg0 >>> 0);
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_set_a68214f35c417fa9 = function(arg0, arg1, arg2) {
            getObject(arg0)[arg1 >>> 0] = takeObject(arg2);
        };
        imports.wbg.__wbg_newwithu8arraysequence_f863246af83e1785 = function() {
            return handleError(function(arg0) {
                const ret = new Blob(getObject(arg0));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_get_765201544a2b6869 = function() {
            return handleError(function(arg0, arg1) {
                const ret = Reflect.get(getObject(arg0), getObject(arg1));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_instanceof_ArrayBuffer_e5e48f4762c5610b = function(arg0) {
            let result;
            try {
                result = getObject(arg0) instanceof ArrayBuffer;
            } catch  {
                result = false;
            }
            const ret = result;
            return ret;
        };
        imports.wbg.__wbindgen_is_object = function(arg0) {
            const val = getObject(arg0);
            const ret = typeof val === "object" && val !== null;
            return ret;
        };
        imports.wbg.__wbg_new_8c3f0052272a457a = function(arg0) {
            const ret = new Uint8Array(getObject(arg0));
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
            const ret = getObject(arg0);
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_keys_0702294afaeb6044 = function(arg0) {
            const ret = Object.keys(getObject(arg0));
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_length_6e3bbe7c8bd4dbd8 = function(arg0) {
            const ret = getObject(arg0).length;
            return ret;
        };
        imports.wbg.__wbg_get_57245cc7d7c7619d = function(arg0, arg1) {
            const ret = getObject(arg0)[arg1 >>> 0];
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_string_get = function(arg0, arg1) {
            const obj = getObject(arg1);
            const ret = typeof obj === "string" ? obj : undefined;
            var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            getInt32Memory0()[arg0 / 4 + 1] = len0;
            getInt32Memory0()[arg0 / 4 + 0] = ptr0;
        };
        imports.wbg.__wbg_new0_a57059d72c5b7aee = function() {
            const ret = new Date();
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_getTime_cb82adb2556ed13e = function(arg0) {
            const ret = getObject(arg0).getTime();
            return ret;
        };
        imports.wbg.__wbindgen_jsval_loose_eq = function(arg0, arg1) {
            const ret = getObject(arg0) == getObject(arg1);
            return ret;
        };
        imports.wbg.__wbindgen_boolean_get = function(arg0) {
            const v = getObject(arg0);
            const ret = typeof v === "boolean" ? v ? 1 : 0 : 2;
            return ret;
        };
        imports.wbg.__wbindgen_is_bigint = function(arg0) {
            const ret = typeof getObject(arg0) === "bigint";
            return ret;
        };
        imports.wbg.__wbindgen_number_get = function(arg0, arg1) {
            const obj = getObject(arg1);
            const ret = typeof obj === "number" ? obj : undefined;
            getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
            getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
        };
        imports.wbg.__wbg_isSafeInteger_dfa0593e8d7ac35a = function(arg0) {
            const ret = Number.isSafeInteger(getObject(arg0));
            return ret;
        };
        imports.wbg.__wbindgen_bigint_get_as_i64 = function(arg0, arg1) {
            const v = getObject(arg1);
            const ret = typeof v === "bigint" ? v : undefined;
            getBigInt64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0n : ret;
            getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
        };
        imports.wbg.__wbindgen_bigint_from_i64 = function(arg0) {
            const ret = arg0;
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_jsval_eq = function(arg0, arg1) {
            const ret = getObject(arg0) === getObject(arg1);
            return ret;
        };
        imports.wbg.__wbindgen_bigint_from_u64 = function(arg0) {
            const ret = BigInt.asUintN(64, arg0);
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_error_new = function(arg0, arg1) {
            const ret = new Error(getStringFromWasm0(arg0, arg1));
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_isArray_27c46c67f498e15d = function(arg0) {
            const ret = Array.isArray(getObject(arg0));
            return ret;
        };
        imports.wbg.__wbg_iterator_6f9d4f28845f426c = function() {
            const ret = Symbol.iterator;
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_in = function(arg0, arg1) {
            const ret = getObject(arg0) in getObject(arg1);
            return ret;
        };
        imports.wbg.__wbg_entries_65a76a413fc91037 = function(arg0) {
            const ret = Object.entries(getObject(arg0));
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_is_undefined = function(arg0) {
            const ret = getObject(arg0) === undefined;
            return ret;
        };
        imports.wbg.__wbindgen_is_null = function(arg0) {
            const ret = getObject(arg0) === null;
            return ret;
        };
        imports.wbg.__wbg_String_91fba7ded13ba54c = function(arg0, arg1) {
            const ret = String(getObject(arg1));
            const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            getInt32Memory0()[arg0 / 4 + 1] = len0;
            getInt32Memory0()[arg0 / 4 + 0] = ptr0;
        };
        imports.wbg.__wbindgen_number_new = function(arg0) {
            const ret = arg0;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_new_0b9bfdd97583284e = function() {
            const ret = new Object();
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_String_33099856e8a8246a = function(arg0, arg1) {
            const ret = String(getObject(arg1));
            const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            getInt32Memory0()[arg0 / 4 + 1] = len0;
            getInt32Memory0()[arg0 / 4 + 0] = ptr0;
        };
        imports.wbg.__wbg_coreresponsehandler_a52879454c60c764 = function(arg0, arg1, arg2, arg3) {
            core_response_handler(arg0 >>> 0, takeObject(arg1), arg2 >>> 0, arg3 !== 0);
        };
        imports.wbg.__wbg_message_fe2af63ccc8985bc = function(arg0) {
            const ret = getObject(arg0).message;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_new_1d9a920c6bfc44a8 = function() {
            const ret = new Array();
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_new_268f7b7dd3430798 = function() {
            const ret = new Map();
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_set_933729cf5b66ac11 = function(arg0, arg1, arg2) {
            const ret = getObject(arg0).set(getObject(arg1), getObject(arg2));
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_is_string = function(arg0) {
            const ret = typeof getObject(arg0) === "string";
            return ret;
        };
        imports.wbg.__wbg_set_fbc33d020f507b72 = function(arg0, arg1, arg2) {
            getObject(arg0)[takeObject(arg1)] = takeObject(arg2);
        };
        imports.wbg.__wbg_crypto_e1d53a1d73fb10b8 = function(arg0) {
            const ret = getObject(arg0).crypto;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_process_038c26bf42b093f8 = function(arg0) {
            const ret = getObject(arg0).process;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_versions_ab37218d2f0b24a8 = function(arg0) {
            const ret = getObject(arg0).versions;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_node_080f4b19d15bc1fe = function(arg0) {
            const ret = getObject(arg0).node;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_require_78a3dcfbdba9cbce = function() {
            return handleError(function() {
                const ret = module.require;
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbindgen_is_function = function(arg0) {
            const ret = typeof getObject(arg0) === "function";
            return ret;
        };
        imports.wbg.__wbg_call_168da88779e35f61 = function() {
            return handleError(function(arg0, arg1, arg2) {
                const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_msCrypto_6e7d3e1f92610cbb = function(arg0) {
            const ret = getObject(arg0).msCrypto;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_newwithlength_f5933855e4f48a19 = function(arg0) {
            const ret = new Uint8Array(arg0 >>> 0);
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_transaction_cce96cbebd81fe1c = function() {
            return handleError(function(arg0, arg1, arg2, arg3) {
                const ret = getObject(arg0).transaction(getStringFromWasm0(arg1, arg2), takeObject(arg3));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_setoncomplete_3e57a8cec8327f66 = function(arg0, arg1) {
            getObject(arg0).oncomplete = getObject(arg1);
        };
        imports.wbg.__wbg_setonerror_00051c0213f27b2c = function(arg0, arg1) {
            getObject(arg0).onerror = getObject(arg1);
        };
        imports.wbg.__wbg_setonabort_404bee3b9940d03d = function(arg0, arg1) {
            getObject(arg0).onabort = getObject(arg1);
        };
        imports.wbg.__wbg_item_52a6bec36314687b = function(arg0, arg1, arg2) {
            const ret = getObject(arg1).item(arg2 >>> 0);
            var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            getInt32Memory0()[arg0 / 4 + 1] = len0;
            getInt32Memory0()[arg0 / 4 + 0] = ptr0;
        };
        imports.wbg.__wbg_objectStore_f17976b0e6377830 = function() {
            return handleError(function(arg0, arg1, arg2) {
                const ret = getObject(arg0).objectStore(getStringFromWasm0(arg1, arg2));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_target_bf704b7db7ad1387 = function(arg0) {
            const ret = getObject(arg0).target;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        };
        imports.wbg.__wbg_readyState_fb287f170113917c = function(arg0) {
            const ret = getObject(arg0).readyState;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_setonsuccess_5f71593bc51653a3 = function(arg0, arg1) {
            getObject(arg0).onsuccess = getObject(arg1);
        };
        imports.wbg.__wbg_setonerror_d5771cc5bf9ea74c = function(arg0, arg1) {
            getObject(arg0).onerror = getObject(arg1);
        };
        imports.wbg.__wbindgen_cb_drop = function(arg0) {
            const obj = takeObject(arg0).original;
            if (obj.cnt-- == 1) {
                obj.a = 0;
                return true;
            }
            const ret = false;
            return ret;
        };
        imports.wbg.__wbg_next_aaef7c8aa5e212ac = function() {
            return handleError(function(arg0) {
                const ret = getObject(arg0).next();
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_done_1b73b0672e15f234 = function(arg0) {
            const ret = getObject(arg0).done;
            return ret;
        };
        imports.wbg.__wbg_value_1ccc36bc03462d71 = function(arg0) {
            const ret = getObject(arg0).value;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_call_97ae9d8645dc388b = function() {
            return handleError(function(arg0, arg1) {
                const ret = getObject(arg0).call(getObject(arg1));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_next_579e583d33566a86 = function(arg0) {
            const ret = getObject(arg0).next;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_self_6d479506f72c6a71 = function() {
            return handleError(function() {
                const ret = self.self;
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_window_f2557cc78490aceb = function() {
            return handleError(function() {
                const ret = window.window;
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_globalThis_7f206bda628d5286 = function() {
            return handleError(function() {
                const ret = globalThis.globalThis;
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_global_ba75c50d1cf384f4 = function() {
            return handleError(function() {
                const ret = global.global;
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_newnoargs_b5b063fc6c2f0376 = function(arg0, arg1) {
            const ret = new Function(getStringFromWasm0(arg0, arg1));
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_set_83db9690f9353e79 = function(arg0, arg1, arg2) {
            getObject(arg0).set(getObject(arg1), arg2 >>> 0);
        };
        imports.wbg.__wbg_length_9e1ae1900cb0fbd5 = function(arg0) {
            const ret = getObject(arg0).length;
            return ret;
        };
        imports.wbg.__wbg_set_bf3f89b92d5a34bf = function() {
            return handleError(function(arg0, arg1, arg2) {
                const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
                return ret;
            }, arguments);
        };
        imports.wbg.__wbg_self_7eede1f4488bf346 = function() {
            return handleError(function() {
                const ret = self.self;
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_crypto_c909fb428dcbddb6 = function(arg0) {
            const ret = getObject(arg0).crypto;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_msCrypto_511eefefbfc70ae4 = function(arg0) {
            const ret = getObject(arg0).msCrypto;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_static_accessor_MODULE_ef3aa2eb251158a5 = function() {
            const ret = module;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_require_900d5c3984fe7703 = function(arg0, arg1, arg2) {
            const ret = getObject(arg0).require(getStringFromWasm0(arg1, arg2));
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_getRandomValues_307049345d0bd88c = function(arg0) {
            const ret = getObject(arg0).getRandomValues;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_randomFillSync_85b3f4c52c56c313 = function(arg0, arg1, arg2) {
            getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
        };
        imports.wbg.__wbg_subarray_58ad4efbb5bcb886 = function(arg0, arg1, arg2) {
            const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_getRandomValues_cd175915511f705e = function(arg0, arg1) {
            getObject(arg0).getRandomValues(getObject(arg1));
        };
        imports.wbg.__wbg_randomFillSync_6894564c2c334c42 = function() {
            return handleError(function(arg0, arg1, arg2) {
                getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
            }, arguments);
        };
        imports.wbg.__wbg_getRandomValues_805f1c3d65988a5a = function() {
            return handleError(function(arg0, arg1) {
                getObject(arg0).getRandomValues(getObject(arg1));
            }, arguments);
        };
        imports.wbg.__wbg_instanceof_Uint8Array_971eeda69eb75003 = function(arg0) {
            let result;
            try {
                result = getObject(arg0) instanceof Uint8Array;
            } catch  {
                result = false;
            }
            const ret = result;
            return ret;
        };
        imports.wbg.__wbg_put_84e7fc93eee27b28 = function() {
            return handleError(function(arg0, arg1, arg2) {
                const ret = getObject(arg0).put(getObject(arg1), getObject(arg2));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_delete_8abedd1043b4105d = function() {
            return handleError(function(arg0, arg1) {
                const ret = getObject(arg0).delete(getObject(arg1));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_setTimeout_d6fcf0d9067b8e64 = function() {
            return handleError(function(arg0, arg1, arg2) {
                const ret = getObject(arg0).setTimeout(getObject(arg1), arg2);
                return ret;
            }, arguments);
        };
        imports.wbg.__wbg_clearTimeout_7d6f7bfeed34b348 = function(arg0, arg1) {
            getObject(arg0).clearTimeout(arg1);
        };
        imports.wbg.__wbg_newwithstrandinit_05d7180788420c40 = function() {
            return handleError(function(arg0, arg1, arg2) {
                const ret = new Request(getStringFromWasm0(arg0, arg1), getObject(arg2));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_headers_85824e993aa739bf = function(arg0) {
            const ret = getObject(arg0).headers;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_set_992c1d31586b2957 = function() {
            return handleError(function(arg0, arg1, arg2, arg3, arg4) {
                getObject(arg0).set(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
            }, arguments);
        };
        imports.wbg.__wbg_fetch_0fe04905cccfc2aa = function(arg0, arg1) {
            const ret = getObject(arg0).fetch(getObject(arg1));
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_instanceof_Response_eaa426220848a39e = function(arg0) {
            let result;
            try {
                result = getObject(arg0) instanceof Response;
            } catch  {
                result = false;
            }
            const ret = result;
            return ret;
        };
        imports.wbg.__wbg_status_c4ef3dd591e63435 = function(arg0) {
            const ret = getObject(arg0).status;
            return ret;
        };
        imports.wbg.__wbg_url_74285ddf2747cb3d = function(arg0, arg1) {
            const ret = getObject(arg1).url;
            const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            getInt32Memory0()[arg0 / 4 + 1] = len0;
            getInt32Memory0()[arg0 / 4 + 0] = ptr0;
        };
        imports.wbg.__wbg_setonversionchange_840d65cd0888dfb0 = function(arg0, arg1) {
            getObject(arg0).onversionchange = getObject(arg1);
        };
        imports.wbg.__wbg_setonupgradeneeded_17d0b9530f1e0cac = function(arg0, arg1) {
            getObject(arg0).onupgradeneeded = getObject(arg1);
        };
        imports.wbg.__wbg_setonblocked_e66d6be5c879980d = function(arg0, arg1) {
            getObject(arg0).onblocked = getObject(arg1);
        };
        imports.wbg.__wbg_message_a7af3ee0cc0fe28d = function(arg0, arg1) {
            const ret = getObject(arg1).message;
            const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            getInt32Memory0()[arg0 / 4 + 1] = len0;
            getInt32Memory0()[arg0 / 4 + 0] = ptr0;
        };
        imports.wbg.__wbg_stringify_d6471d300ded9b68 = function() {
            return handleError(function(arg0) {
                const ret = JSON.stringify(getObject(arg0));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_Window_5684341ff6dfe3ad = function(arg0) {
            const ret = getObject(arg0).Window;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_WorkerGlobalScope_e0447ffcae8bb272 = function(arg0) {
            const ret = getObject(arg0).WorkerGlobalScope;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_indexedDB_050f0962ab607ac5 = function() {
            return handleError(function(arg0) {
                const ret = getObject(arg0).indexedDB;
                return isLikeNone(ret) ? 0 : addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_indexedDB_8d9e9ab4616df7f0 = function() {
            return handleError(function(arg0) {
                const ret = getObject(arg0).indexedDB;
                return isLikeNone(ret) ? 0 : addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_open_a31c3fe1fdc244eb = function() {
            return handleError(function(arg0, arg1, arg2) {
                const ret = getObject(arg0).open(getStringFromWasm0(arg1, arg2));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_newwithstr_d5b5f9b985ee84fb = function() {
            return handleError(function(arg0, arg1, arg2, arg3) {
                const ret = new WebSocket(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_new_d29e507f6606de91 = function() {
            return handleError(function(arg0, arg1) {
                const ret = new WebSocket(getStringFromWasm0(arg0, arg1));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_setonmessage_c5a806b62a0c5607 = function(arg0, arg1) {
            getObject(arg0).onmessage = getObject(arg1);
        };
        imports.wbg.__wbg_setonopen_9ce48dce57e549b5 = function(arg0, arg1) {
            getObject(arg0).onopen = getObject(arg1);
        };
        imports.wbg.__wbg_setonerror_02393260b3e29972 = function(arg0, arg1) {
            getObject(arg0).onerror = getObject(arg1);
        };
        imports.wbg.__wbg_send_80b256d87a6779e5 = function() {
            return handleError(function(arg0, arg1, arg2) {
                getObject(arg0).send(getStringFromWasm0(arg1, arg2));
            }, arguments);
        };
        imports.wbg.__wbg_data_7b1f01f4e6a64fbe = function(arg0) {
            const ret = getObject(arg0).data;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_objectStoreNames_8c06c40d2b05141c = function(arg0) {
            const ret = getObject(arg0).objectStoreNames;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_createObjectStore_d3e2789c13dde1fc = function() {
            return handleError(function(arg0, arg1, arg2) {
                const ret = getObject(arg0).createObjectStore(getStringFromWasm0(arg1, arg2));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_instanceof_Error_56b496a10a56de66 = function(arg0) {
            let result;
            try {
                result = getObject(arg0) instanceof Error;
            } catch  {
                result = false;
            }
            const ret = result;
            return ret;
        };
        imports.wbg.__wbg_getTimezoneOffset_89bd4275e1ca8341 = function(arg0) {
            const ret = getObject(arg0).getTimezoneOffset();
            return ret;
        };
        imports.wbg.__wbindgen_debug_string = function(arg0, arg1) {
            const ret = debugString(getObject(arg1));
            const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            getInt32Memory0()[arg0 / 4 + 1] = len0;
            getInt32Memory0()[arg0 / 4 + 0] = ptr0;
        };
        imports.wbg.__wbindgen_throw = function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        };
        imports.wbg.__wbg_then_cedad20fbbd9418a = function(arg0, arg1, arg2) {
            const ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_resolve_99fe17964f31ffc0 = function(arg0) {
            const ret = Promise.resolve(getObject(arg0));
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_then_11f7a54d67b4bfad = function(arg0, arg1) {
            const ret = getObject(arg0).then(getObject(arg1));
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_result_9e399c14676970d9 = function() {
            return handleError(function(arg0) {
                const ret = getObject(arg0).result;
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_error_aacf5ac191e54ed0 = function() {
            return handleError(function(arg0) {
                const ret = getObject(arg0).error;
                return isLikeNone(ret) ? 0 : addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_get_6285bf458a1ee758 = function() {
            return handleError(function(arg0, arg1) {
                const ret = getObject(arg0).get(getObject(arg1));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_instanceof_Window_acc97ff9f5d2c7b4 = function(arg0) {
            let result;
            try {
                result = true;
            } catch  {
                result = false;
            }
            const ret = result;
            return ret;
        };
        imports.wbg.__wbg_close_45d053bea59e7746 = function() {
            return handleError(function(arg0) {
                getObject(arg0).close();
            }, arguments);
        };
        imports.wbg.__wbg_text_1169d752cc697903 = function() {
            return handleError(function(arg0) {
                const ret = getObject(arg0).text();
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbindgen_closure_wrapper942 = function(arg0, arg1, arg2) {
            const ret = makeClosure(arg0, arg1, 44, __wbg_adapter_50);
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_closure_wrapper953 = function(arg0, arg1, arg2) {
            const ret = makeClosure(arg0, arg1, 47, __wbg_adapter_53);
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_closure_wrapper6271 = function(arg0, arg1, arg2) {
            const ret = makeMutClosure(arg0, arg1, 238, __wbg_adapter_56);
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_closure_wrapper6565 = function(arg0, arg1, arg2) {
            const ret = makeMutClosure(arg0, arg1, 244, __wbg_adapter_59);
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_closure_wrapper7096 = function(arg0, arg1, arg2) {
            const ret = makeMutClosure(arg0, arg1, 247, __wbg_adapter_62);
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_closure_wrapper7097 = function(arg0, arg1, arg2) {
            const ret = makeMutClosure(arg0, arg1, 1206, __wbg_adapter_65);
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_closure_wrapper7098 = function(arg0, arg1, arg2) {
            const ret = makeMutClosure(arg0, arg1, 241, __wbg_adapter_68);
            return addHeapObject(ret);
        };
        return imports;
    }
    function initMemory(imports, maybe_memory) {}
    function finalizeInit(instance, module1) {
        wasm = instance.exports;
        init1.__wbindgen_wasm_module = module1;
        cachedBigInt64Memory0 = new BigInt64Array();
        cachedFloat64Memory0 = new Float64Array();
        cachedInt32Memory0 = new Int32Array();
        cachedUint8Memory0 = new Uint8Array();
        return wasm;
    }
    function initSync(module1) {
        const imports = getImports();
        initMemory(imports);
        if (!(module1 instanceof WebAssembly.Module)) module1 = new WebAssembly.Module(module1);
        const instance = new WebAssembly.Instance(module1, imports);
        return finalizeInit(instance, module1);
    }
    async function init1(input) {
        typeof input;
        const imports = getImports();
        if (typeof input === "string" || typeof Request === "function" && input instanceof Request || typeof URL === "function" && input instanceof URL) input = fetch(input);
        initMemory(imports);
        const { instance , module: module1  } = await load(await input, imports);
        return finalizeInit(instance, module1);
    }
    //****************************************************************** WRAPPER END
    function replaceUndefinedWithNulls(value) {
        if (value === undefined) return null;
        if (value instanceof Blob) return value;
        if (typeof value === "object" && value !== null) {
            const result = Array.isArray(value) ? [] : {};
            for(const key in value)result[key] = replaceUndefinedWithNulls(value[key]);
            return result;
        }
        return value;
    }
    async function replaceBlobsWithArrayBuffers(value) {
        if (value instanceof Blob) return await value.arrayBuffer();
        if (typeof value === "bigint") {
            if (value < Number.MAX_SAFE_INTEGER && value > Number.MIN_SAFE_INTEGER) return Number(value);
            else return value.toString();
        }
        if (typeof value === "object" && value !== null) {
            const result = Array.isArray(value) ? [] : {};
            for(const key in value)result[key] = await replaceBlobsWithArrayBuffers(value[key]);
            return result;
        }
        return value;
    }
    let deferredCreateContext = [];
    let responseHandler = null;
    function core_response_handler(request_id, params, response_type, finished) {
        if (responseHandler) responseHandler(request_id, params, response_type, finished);
    }
    (async ()=>{
        await init1(await loadModule());
        for (const createContext of deferredCreateContext)createContext.resolve(core_create_context(createContext.configJson));
        deferredCreateContext = null;
    })();
    return Promise.resolve({
        setResponseParamsHandler: (handler)=>{
            responseHandler = handler;
        },
        createContext: (configJson)=>{
            return deferredCreateContext === null ? Promise.resolve(core_create_context(configJson)) : new Promise((resolve)=>{
                deferredCreateContext.push({
                    configJson,
                    resolve
                });
            });
        },
        destroyContext: (context)=>{
            core_destroy_context(context);
        },
        sendRequestParams: (context, requestId, functionName, functionParams)=>{
            (async ()=>{
                core_request(context, functionName, await replaceBlobsWithArrayBuffers(functionParams), requestId);
            })();
        }
    });
}
function libWeb() {
    return options && options.disableSeparateWorker ? withoutSeparateWorker() : withSeparateWorker();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2hb9b":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("./account"), exports); //# sourceMappingURL=index.js.map

},{"./account":"hRGOy"}],"hRGOy":[function(require,module,exports) {
"use strict";
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DefaultGiverContract = exports.Account = exports.AccountType = exports.AccountError = void 0;
const core_1 = require("@eversdk/core");
var ERR_CODES;
(function(ERR_CODES) {
    ERR_CODES[ERR_CODES["MISSING_TVC"] = 0] = "MISSING_TVC";
    ERR_CODES[ERR_CODES["ACC_NOT_EXISTS"] = 1] = "ACC_NOT_EXISTS";
})(ERR_CODES || (ERR_CODES = {}));
class AccountError extends Error {
    constructor(opt){
        super(opt.message);
        this.code = opt.code;
    }
    static missingTVC() {
        return new AccountError({
            code: ERR_CODES.MISSING_TVC,
            message: "Can't calculate deploy params: missing required TVC."
        });
    }
    static missingBOC() {
        return new AccountError({
            code: ERR_CODES.ACC_NOT_EXISTS,
            message: 'Account has an empty BOC. Possible reason is: account was deleted (has account type "NonExist")'
        });
    }
}
exports.AccountError = AccountError;
/**
 * Current type of the account.
 */ var AccountType;
(function(AccountType) {
    /**
     * Account exists in the blockchain but without smart contract.
     */ AccountType[AccountType["uninit"] = 0] = "uninit";
    /**
     * Account exists in the blockchain with smart contract.
     */ AccountType[AccountType["active"] = 1] = "active";
    /**
     * Account exists in the blockchain but it had frozen.
     */ AccountType[AccountType["frozen"] = 2] = "frozen";
    /**
     * Account is missing in the blockchain.
     */ AccountType[AccountType["nonExist"] = 3] = "nonExist";
})(AccountType = exports.AccountType || (exports.AccountType = {}));
/**
 * Object to deal with specified account using specified signer (owner).
 *
 * Account instance can be bound to account address
 * or account deploy parameters that uniquely identifies
 * account address.
 */ class Account {
    /**
     * Constructs account instance.
     *
     * @param contract Contract package containing abi and optional tvc data.
     * @param options Account instance options.
     */ constructor(contract, options){
        var _a, _b, _c, _d, _e;
        this.syncLastTransLt = null;
        this.cachedBoc = null;
        this.subscriptions = null;
        this.contract = contract;
        this.client = (_a = options === null || options === void 0 ? void 0 : options.client) !== null && _a !== void 0 ? _a : core_1.TonClient.default;
        this.abi = (0, core_1.abiContract)(contract.abi);
        this.signer = (_b = options === null || options === void 0 ? void 0 : options.signer) !== null && _b !== void 0 ? _b : (0, core_1.signerNone)();
        this.address = (_c = options === null || options === void 0 ? void 0 : options.address) !== null && _c !== void 0 ? _c : null;
        this.initData = (_d = options === null || options === void 0 ? void 0 : options.initData) !== null && _d !== void 0 ? _d : null;
        this.useCachedState = (_e = options === null || options === void 0 ? void 0 : options.useCachedState) !== null && _e !== void 0 ? _e : false;
    }
    /**
     * Returns the giver instance assigned for specified client instance.
     * Or `null` if no giver is associated with this client yet.
     *
     * @param client Client instance looking for.
     */ static findGiverForClient(client) {
        var _a;
        return (_a = this.giversByClient.find((x)=>x.client === client)) === null || _a === void 0 ? void 0 : _a.giver;
    }
    /**
     * Assigns specified giver as a default for specified client instance.
     * If client already has default giver it will be reassigned.
     *
     * @param client Client instance.
     * @param giver New giver instance or `null` if the default giver for
     * this client must be removed.
     */ static setGiverForClient(client, giver) {
        const i = this.giversByClient.findIndex((x)=>x.client === client);
        if (i >= 0) {
            if (giver) this.giversByClient[i].giver = giver;
            else this.giversByClient.splice(i, 1);
        } else if (giver) this.giversByClient.push({
            client,
            giver
        });
    }
    static createGiver(client) {
        return __awaiter(this, void 0, void 0, function*() {
            const giverKeys = yield getDefaultGiverKeys(client);
            const giverAddress = yield getDefaultGiverAddress(client, giverKeys);
            const giver = new Account(exports.DefaultGiverContract, {
                client,
                address: giverAddress,
                signer: (0, core_1.signerKeys)(giverKeys)
            });
            return {
                address: giverAddress,
                sendTo: (address, value)=>__awaiter(this, void 0, void 0, function*() {
                        yield giver.run("sendTransaction", {
                            dest: address,
                            value,
                            bounce: false
                        });
                    })
            };
        });
    }
    /**
     * Returns the default giver for specified client instance.
     * If no giver assigned yet then new one will be created,
     * assigned and returned.
     *
     * @param client Client instance.
     */ static getGiverForClient(client) {
        return __awaiter(this, void 0, void 0, function*() {
            const existing = this.findGiverForClient(client);
            if (existing) return existing;
            const giver = yield this.createGiver(client);
            this.giversByClient.push({
                client,
                giver
            });
            return giver;
        });
    }
    /**
     * Returns address of the account.
     *
     * Uses address specified in constructor options
     * or calculates it from deploy data provided in constructor.
     */ getAddress() {
        return __awaiter(this, void 0, void 0, function*() {
            let address = this.address;
            if (address === null) {
                const deployParams = this.getParamsOfDeployMessage({
                    initFunctionName: null
                });
                address = (yield this.client.abi.encode_message(deployParams)).address;
                this.address = address;
            }
            return address;
        });
    }
    /**
     * Returns params for encoding deploy message.
     * @param options Message encoding options.
     */ getParamsOfDeployMessage(options) {
        var _a;
        if (!this.contract.tvc) throw AccountError.missingTVC();
        const params = {
            abi: this.abi,
            signer: this.signer,
            deploy_set: {
                tvc: this.contract.tvc
            }
        };
        if (this.initData) params.deploy_set.initial_data = this.initData;
        if ((options === null || options === void 0 ? void 0 : options.initFunctionName) !== null) {
            params.call_set = {
                function_name: (_a = options === null || options === void 0 ? void 0 : options.initFunctionName) !== null && _a !== void 0 ? _a : "constructor"
            };
            if ((options === null || options === void 0 ? void 0 : options.initInput) !== undefined) params.call_set.input = options.initInput;
        }
        return params;
    }
    /**
     * Calculates detailed deploy fees.
     */ calcDeployFees(options) {
        return __awaiter(this, void 0, void 0, function*() {
            const deployParams = yield this.getParamsOfDeployMessage(options);
            const message = yield this.client.abi.encode_message(deployParams);
            const result = yield this.client.tvm.run_executor({
                account: (0, core_1.accountForExecutorUninit)(),
                abi: this.abi,
                message: message.message
            });
            return result.fees;
        });
    }
    /**
     * Deploys account into network
     * @param options
     */ deploy(options) {
        return __awaiter(this, void 0, void 0, function*() {
            const deployParams = this.getParamsOfDeployMessage(options);
            const useGiver = options === null || options === void 0 ? void 0 : options.useGiver;
            const giver = useGiver === true ? yield Account.getGiverForClient(this.client) : useGiver;
            this.address = (yield this.client.abi.encode_message(deployParams)).address;
            if (giver) yield giver.sendTo(this.address, 10000000000);
            const result = yield this.client.processing.process_message({
                message_encode_params: deployParams,
                send_events: false
            });
            this.needSyncWithTransaction(result.transaction);
            return result;
        });
    }
    /**
     * Emulate deploy
     * @param options
     */ deployLocal(options) {
        return __awaiter(this, void 0, void 0, function*() {
            const deployParams = this.getParamsOfDeployMessage(options);
            const { address , message  } = yield this.client.abi.encode_message(deployParams);
            const result = yield this.client.tvm.run_executor({
                account: (0, core_1.accountForExecutorUninit)(),
                abi: this.abi,
                message,
                return_updated_account: true
            });
            this.address = address;
            this.cachedBoc = result.account;
            return result;
        });
    }
    /**
     * Calculates detailed fees for specified run parameters.
     *
     * @param functionName Name of the function according to the ABI.
     * @param input Object with function parameters (function parameters).
     */ calcRunFees(functionName, input) {
        return __awaiter(this, void 0, void 0, function*() {
            const message = yield this.client.abi.encode_message({
                address: yield this.getAddress(),
                abi: this.abi,
                signer: this.signer,
                call_set: {
                    function_name: functionName,
                    input
                }
            });
            let result;
            result = yield this.client.tvm.run_executor({
                account: (0, core_1.accountForExecutorAccount)((yield this.boc())),
                abi: this.abi,
                message: message.message
            });
            return result.fees;
        });
    }
    /**
     * Process message on network and returns detailed information
     * about results including produced transaction and messages.
     *
     * @param functionName Name of the function according to the ABI.
     * @param input Object with function parameters (function parameters).
     * @param options Run options.
     */ run(functionName, input, options) {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            const result = yield this.client.processing.process_message({
                message_encode_params: {
                    address: yield this.getAddress(),
                    abi: this.abi,
                    signer: (_a = options === null || options === void 0 ? void 0 : options.signer) !== null && _a !== void 0 ? _a : this.signer,
                    call_set: {
                        function_name: functionName,
                        input
                    }
                },
                send_events: false
            });
            this.needSyncWithTransaction(result.transaction);
            return result;
        });
    }
    /**
     * Evaluates message on local TVM and returns decoded output.
     *
     * @param functionName Name of the function according to the ABI.
     * @param input Object with function parameters (function input).
     * @param options Run options.
     */ runLocal(functionName, input, options) {
        return __awaiter(this, void 0, void 0, function*() {
            const message = yield this.client.abi.encode_message({
                address: yield this.getAddress(),
                abi: this.abi,
                signer: this.signer,
                call_set: {
                    function_name: functionName,
                    input
                }
            });
            let result;
            if (options === null || options === void 0 ? void 0 : options.performAllChecks) result = yield this.client.tvm.run_executor({
                account: (0, core_1.accountForExecutorAccount)((yield this.boc())),
                abi: this.abi,
                message: message.message,
                return_updated_account: true
            });
            else result = yield this.client.tvm.run_tvm({
                account: yield this.boc(),
                abi: this.abi,
                message: message.message,
                return_updated_account: true
            });
            if (result.account) this.cachedBoc = result.account;
            return result;
        });
    }
    needSyncWithTransaction(transaction) {
        if (!transaction.aborted && transaction.lt) {
            this.syncLastTransLt = transaction.lt;
            this.cachedBoc = null;
        }
    }
    /**
     * Returns raw data of the account in form of BOC.
     * Fetches boc data from network and caches it in private field.
     * `runLocal` updates cached boc.
     * `run` drops cached boc.
     * This function syncs fetching boc with last `run` or `deploy`
     * so fetched boc
     */ boc() {
        return __awaiter(this, void 0, void 0, function*() {
            if (this.cachedBoc && this.useCachedState) return this.cachedBoc;
            const address = yield this.getAddress();
            const net = this.client.net;
            if (this.syncLastTransLt) {
                const accounts = yield net.query_collection({
                    collection: "accounts",
                    filter: {
                        id: {
                            eq: address
                        },
                        last_trans_lt: {
                            ge: this.syncLastTransLt
                        }
                    },
                    result: "boc"
                });
                if (accounts.result.length > 0) {
                    const boc = accounts.result[0].boc;
                    this.syncLastTransLt = null;
                    if (boc) {
                        this.cachedBoc = boc;
                        return boc;
                    }
                    throw AccountError.missingBOC();
                }
            }
            try {
                const boc1 = // Returns BOC or null if account was found in DB, but has "NotExists" status
                // Throws if:
                //  - account NOT found in DB (err.code 603) 
                //  - some network error occured
                (yield net.wait_for_collection({
                    collection: "accounts",
                    filter: {
                        id: {
                            eq: this.address
                        }
                    },
                    result: "boc",
                    timeout: 1000
                })).result.boc;
                if (boc1) {
                    this.cachedBoc = boc1;
                    return boc1;
                }
                throw AccountError.missingBOC();
            } catch (error) {
                if (error.code === 603) throw AccountError.missingBOC();
                throw error;
            }
        });
    }
    /**
     * Drops all cached and local data.
     */ refresh() {
        this.cachedBoc = null;
    }
    /**
     * Returns parsed data of the account.
     */ getAccount() {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const boc = yield this.boc();
                return (yield this.client.boc.parse_account({
                    boc
                })).parsed;
            } catch (err) {
                if (err.code === ERR_CODES.ACC_NOT_EXISTS) return {
                    acc_type: AccountType.nonExist
                };
            }
        });
    }
    subscribeAccount(fields, listener) {
        return __awaiter(this, void 0, void 0, function*() {
            yield this.subscribe("accounts", {
                id: {
                    eq: yield this.getAddress()
                }
            }, fields, listener);
        });
    }
    subscribeTransactions(fields, listener) {
        return __awaiter(this, void 0, void 0, function*() {
            const address = yield this.getAddress();
            yield this.subscribe("transactions", {
                account_addr: {
                    eq: address
                },
                status: {
                    eq: 5
                }
            }, fields, listener);
        });
    }
    subscribeMessages(fields, listener) {
        return __awaiter(this, void 0, void 0, function*() {
            const address = yield this.getAddress();
            yield this.subscribe("messages", {
                status: {
                    eq: 5
                },
                src: {
                    eq: address
                },
                OR: {
                    status: {
                        eq: 5
                    },
                    dst: {
                        eq: address
                    }
                }
            }, fields, listener);
        });
    }
    decodeMessage(message) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield core_1.TonClient.default.abi.decode_message({
                abi: this.abi,
                message
            });
        });
    }
    decodeMessageBody(body, isInternal) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield core_1.TonClient.default.abi.decode_message_body({
                abi: this.abi,
                body,
                is_internal: isInternal
            });
        });
    }
    getBalance() {
        return __awaiter(this, void 0, void 0, function*() {
            return (yield this.getAccount()).balance;
        });
    }
    subscribe(collection, filter, fields, listener) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function*() {
            const prevSubscription = this.subscriptions && this.subscriptions.get(collection);
            if (prevSubscription) {
                (_a = this.subscriptions) === null || _a === void 0 || _a.delete(collection);
                yield this.client.net.unsubscribe(prevSubscription);
            } else if (!this.subscriptions) this.subscriptions = new Map();
            const subscription = yield this.client.net.subscribe_collection({
                collection,
                filter,
                result: fields
            }, (params, responseType)=>{
                if (responseType === 100) listener(params.result);
            });
            (_b = this.subscriptions) === null || _b === void 0 || _b.set(collection, subscription);
        });
    }
    /**
     * Free all internal resources related to this instance
     * and allocated inside core.
     *
     * It is a good practice to call this method when you have finished
     * with this Account object.
     *
     * Note that this instance still fully operable.
     * So you can continue to work with this instance.
     */ free() {
        return __awaiter(this, void 0, void 0, function*() {
            if (this.subscriptions) {
                const subscriptions = this.subscriptions.values();
                this.subscriptions = null;
                for (const subscription of subscriptions)yield this.client.net.unsubscribe(subscription);
            }
        });
    }
}
exports.Account = Account;
Account.giversByClient = [];
function getEnv(name) {
    const globalEval = eval;
    try {
        return globalEval(`process.env.${name}`);
    } catch (_a) {
        return undefined;
    }
}
function getDefaultGiverKeys(client) {
    return __awaiter(this, void 0, void 0, function*() {
        const definedSecret = getEnv("TON_GIVER_SECRET");
        if (definedSecret) {
            const definedKeys = yield client.crypto.nacl_sign_keypair_from_secret_key({
                secret: definedSecret
            });
            definedKeys.secret = definedKeys.secret.substr(0, 64);
            return definedKeys;
        }
        // noinspection SpellCheckingInspection
        return {
            "public": "2ada2e65ab8eeab09490e3521415f45b6e42df9c760a639bcf53957550b25a16",
            "secret": "172af540e43a524763dd53b26a066d472a97c4de37d5498170564510608250c3"
        };
    });
}
function getDefaultGiverAddress(client, keys) {
    var _a;
    return __awaiter(this, void 0, void 0, function*() {
        const definedAddress = getEnv("TON_GIVER_ADDRESS");
        if (definedAddress) return definedAddress;
        return (yield client.abi.encode_message({
            abi: (0, core_1.abiContract)(exports.DefaultGiverContract.abi),
            deploy_set: {
                tvc: (_a = exports.DefaultGiverContract.tvc) !== null && _a !== void 0 ? _a : ""
            },
            signer: (0, core_1.signerKeys)(keys)
        })).address;
    });
}
// noinspection SpellCheckingInspection
exports.DefaultGiverContract = {
    abi: {
        "ABI version": 2,
        header: [
            "time",
            "expire"
        ],
        functions: [
            {
                name: "sendTransaction",
                inputs: [
                    {
                        "name": "dest",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "bounce",
                        "type": "bool"
                    }
                ],
                outputs: []
            },
            {
                name: "getMessages",
                inputs: [],
                outputs: [
                    {
                        components: [
                            {
                                name: "hash",
                                type: "uint256"
                            },
                            {
                                name: "expireAt",
                                type: "uint64"
                            }
                        ],
                        name: "messages",
                        type: "tuple[]"
                    }
                ]
            },
            {
                name: "upgrade",
                inputs: [
                    {
                        name: "newcode",
                        type: "cell"
                    }
                ],
                outputs: []
            },
            {
                name: "constructor",
                inputs: [],
                outputs: []
            }
        ],
        data: [],
        events: []
    },
    tvc: "te6ccgECGgEAA9sAAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIm/wD0pCAiwAGS9KDhiu1TWDD0oQkHAQr0pCD0oQgAAAIBIAwKAfz/fyHtRNAg10nCAZ/T/9MA9AX4an/4Yfhm+GKOG/QFbfhqcAGAQPQO8r3XC//4YnD4Y3D4Zn/4YeLTAAGOEoECANcYIPkBWPhCIPhl+RDyqN4j+EL4RSBukjBw3rry4GUh0z/THzQx+CMhAb7yuSH5ACD4SoEBAPQOIJEx3rMLAE7y4Gb4ACH4SiIBVQHIyz9ZgQEA9EP4aiMEXwTTHwHwAfhHbpLyPN4CASASDQIBWBEOAQm46Jj8UA8B/vhBbo4S7UTQ0//TAPQF+Gp/+GH4Zvhi3tFwbW8C+EqBAQD0hpUB1ws/f5NwcHDikSCONyMjI28CbyLIIs8L/yHPCz8xMQFvIiGkA1mAIPRDbwI0IvhKgQEA9HyVAdcLP3+TcHBw4gI1MzHoXwPIghB3RMfighCAAAAAsc8LHyEQAKJvIgLLH/QAyIJYYAAAAAAAAAAAAAAAAM8LZoEDmCLPMQG5lnHPQCHPF5Vxz0EhzeIgyXH7AFswwP+OEvhCyMv/+EbPCwD4SgH0AMntVN5/+GcAxbkWq+f/CC3Rxt2omgQa6ThAM/p/+mAegL8NT/8MPwzfDFHDfoCtvw1OADAIHoHeV7rhf/8MTh8Mbh8Mz/8MPFvfCNJeRnJuPwzcXwAaPwhZGX//CNnhYB8JQD6AGT2qj/8M8AIBIBUTAde7Fe+TX4QW6OEu1E0NP/0wD0Bfhqf/hh+Gb4Yt76QNcNf5XU0dDTf9/XDACV1NHQ0gDf0SIiInPIcc8LASLPCgBzz0AkzxYj+gKAac9Acs9AIMki+wBfBfhKgQEA9IaVAdcLP3+TcHBw4pEggUAJKOLfgjIgG7n/hKIwEhAYEBAPRbMDH4at4i+EqBAQD0fJUB1ws/f5NwcHDiAjUzMehfA18D+ELIy//4Rs8LAPhKAfQAye1Uf/hnAgEgFxYAx7jkYYdfCC3Rwl2omhp/+mAegL8NT/8MPwzfDFvamj8IXwikDdJGDhvXXlwMvwAfCFkZf/8I2eFgHwlAPoAZPaqfAeQfYIQaHaPdqn4ARh8IWRl//wjZ4WAfCUA+gBk9qo//DPACAtoZGAAtr4QsjL//hGzwsA+EoB9ADJ7VT4D/IAgAdacCHHAJ0i0HPXIdcLAMABkJDi4CHXDR+S8jzhUxHAAJDgwQMighD////9vLGS8jzgAfAB+EdukvI83o"
}; //# sourceMappingURL=account.js.map

},{"@eversdk/core":"5a6Vu"}],"cEdaJ":[function(require,module,exports) {
module.exports = JSON.parse('{"ABI version":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"codeCell","type":"cell"},{"name":"roundTime","type":"uint64"},{"name":"radius","type":"uint64"},{"name":"speed","type":"uint64"},{"name":"userCount","type":"uint64"},{"name":"name","type":"string"}],"outputs":[]},{"name":"getDetails","inputs":[],"outputs":[{"name":"nonce","type":"uint32"},{"name":"endTime","type":"uint128"},{"name":"roundTime","type":"uint64"},{"name":"radius","type":"uint64"},{"name":"speed","type":"uint64"},{"name":"userCount","type":"uint64"},{"name":"name","type":"string"},{"name":"root","type":"address"}]},{"name":"getUsers","inputs":[],"outputs":[{"name":"users","type":"map(address,uint128)"}]},{"name":"getRewards","inputs":[],"outputs":[{"name":"rewards","type":"map(address,uint128)"}]},{"name":"winCount","inputs":[],"outputs":[{"name":"count","type":"uint128"}]},{"name":"getAddressCells","inputs":[{"components":[{"name":"x","type":"int64"},{"name":"y","type":"int64"},{"name":"z","type":"int64"}],"name":"coords","type":"tuple[]"}],"outputs":[{"name":"addreses","type":"address[]"}]},{"name":"newGame","inputs":[{"components":[{"name":"x","type":"int64"},{"name":"y","type":"int64"},{"name":"z","type":"int64"}],"name":"baseCoord","type":"tuple"}],"outputs":[]},{"name":"_newCell","inputs":[{"name":"owner","type":"address"},{"components":[{"name":"x","type":"int64"},{"name":"y","type":"int64"},{"name":"z","type":"int64"}],"name":"baseCoord","type":"tuple"},{"components":[{"name":"x","type":"int64"},{"name":"y","type":"int64"},{"name":"z","type":"int64"}],"name":"targetCoord","type":"tuple"},{"components":[{"name":"r","type":"uint8"},{"name":"g","type":"uint8"},{"name":"b","type":"uint8"}],"name":"color","type":"tuple"},{"name":"energy","type":"uint64"}],"outputs":[]},{"name":"onCellOwnerChanged","inputs":[{"name":"oldOwner","type":"address"},{"name":"newOwner","type":"address"}],"outputs":[]},{"name":"destroyCells","inputs":[{"name":"cells","type":"address[]"}],"outputs":[]},{"name":"calcRewards","inputs":[],"outputs":[]},{"name":"claimReward","inputs":[],"outputs":[]},{"name":"_resolveCell","inputs":[{"components":[{"name":"x","type":"int64"},{"name":"y","type":"int64"},{"name":"z","type":"int64"}],"name":"coord","type":"tuple"}],"outputs":[{"name":"cellAddress","type":"address"}]},{"name":"_users","inputs":[],"outputs":[{"name":"_users","type":"map(address,uint128)"}]},{"name":"_rewards","inputs":[],"outputs":[{"name":"_rewards","type":"map(address,uint128)"}]}],"data":[{"key":1,"name":"_nonce","type":"uint32"}],"events":[{"name":"CellCreated","inputs":[{"name":"owner","type":"uint256"},{"components":[{"name":"x","type":"int64"},{"name":"y","type":"int64"},{"name":"z","type":"int64"}],"name":"coord","type":"tuple"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_nonce","type":"uint32"},{"name":"_root","type":"address"},{"name":"_users","type":"map(address,uint128)"},{"name":"_rewards","type":"map(address,uint128)"},{"name":"_codeCell","type":"cell"},{"name":"_roundTime","type":"uint64"},{"name":"_radius","type":"uint64"},{"name":"_speed","type":"uint64"},{"name":"_userCount","type":"uint64"},{"name":"_name","type":"string"},{"name":"_endTime","type":"uint128"}]}');

},{}],"19dkK":[function(require,module,exports) {
module.exports = JSON.parse('{"ABI version":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"router","type":"address"},{"name":"owner","type":"address"},{"name":"endTime","type":"uint128"},{"name":"speed","type":"uint64"},{"components":[{"name":"r","type":"uint8"},{"name":"g","type":"uint8"},{"name":"b","type":"uint8"}],"name":"color","type":"tuple"},{"name":"energy","type":"uint64"}],"outputs":[]},{"name":"getRouter","inputs":[],"outputs":[{"name":"router","type":"address"}]},{"name":"getDetails","inputs":[],"outputs":[{"components":[{"name":"x","type":"int64"},{"name":"y","type":"int64"},{"name":"z","type":"int64"}],"name":"coord","type":"tuple"},{"components":[{"name":"r","type":"uint8"},{"name":"g","type":"uint8"},{"name":"b","type":"uint8"}],"name":"color","type":"tuple"},{"name":"level","type":"uint64"},{"name":"speed","type":"uint64"},{"name":"endTime","type":"uint128"},{"name":"energy","type":"uint64"},{"name":"energySec","type":"uint64"},{"name":"energyMax","type":"uint64"},{"name":"lastCalcTime","type":"uint128"},{"name":"owner","type":"address"}]},{"name":"calculateEnergy","inputs":[],"outputs":[{"name":"energy","type":"uint64"}]},{"name":"markCell","inputs":[{"components":[{"name":"x","type":"int64"},{"name":"y","type":"int64"},{"name":"z","type":"int64"}],"name":"targetCoord","type":"tuple"},{"name":"energy","type":"uint64"}],"outputs":[]},{"name":"helpCell","inputs":[{"components":[{"name":"x","type":"int64"},{"name":"y","type":"int64"},{"name":"z","type":"int64"}],"name":"targetCoord","type":"tuple"},{"name":"energy","type":"uint64"}],"outputs":[]},{"name":"_helpCell","inputs":[{"name":"owner","type":"address"},{"components":[{"name":"x","type":"int64"},{"name":"y","type":"int64"},{"name":"z","type":"int64"}],"name":"coord","type":"tuple"},{"components":[{"name":"r","type":"uint8"},{"name":"g","type":"uint8"},{"name":"b","type":"uint8"}],"name":"color","type":"tuple"},{"name":"energy","type":"uint64"}],"outputs":[]},{"name":"attkCell","inputs":[{"components":[{"name":"x","type":"int64"},{"name":"y","type":"int64"},{"name":"z","type":"int64"}],"name":"targetCoord","type":"tuple"},{"name":"energy","type":"uint64"}],"outputs":[]},{"name":"_attkCell","inputs":[{"name":"owner","type":"address"},{"components":[{"name":"x","type":"int64"},{"name":"y","type":"int64"},{"name":"z","type":"int64"}],"name":"coord","type":"tuple"},{"components":[{"name":"r","type":"uint8"},{"name":"g","type":"uint8"},{"name":"b","type":"uint8"}],"name":"color","type":"tuple"},{"name":"energy","type":"uint64"}],"outputs":[]},{"name":"upgradeCell","inputs":[],"outputs":[]},{"name":"_resolveCell","inputs":[{"components":[{"name":"x","type":"int64"},{"name":"y","type":"int64"},{"name":"z","type":"int64"}],"name":"coord","type":"tuple"}],"outputs":[{"name":"cellAddress","type":"address"}]},{"name":"_destroy","inputs":[],"outputs":[]}],"data":[{"components":[{"name":"x","type":"int64"},{"name":"y","type":"int64"},{"name":"z","type":"int64"}],"key":1,"name":"_coord","type":"tuple"}],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"components":[{"name":"x","type":"int64"},{"name":"y","type":"int64"},{"name":"z","type":"int64"}],"name":"_coord","type":"tuple"},{"name":"_costPerLevel","type":"uint64[]"},{"name":"_maxEPerLevel","type":"uint64[]"},{"name":"_farmPerLevel","type":"uint64[]"},{"name":"_deboost","type":"uint64"},{"name":"_router","type":"address"},{"name":"_owner","type":"address"},{"name":"_speed","type":"uint64"},{"name":"_level","type":"uint64"},{"name":"_energy","type":"uint64"},{"name":"_lastCalcTime","type":"uint128"},{"name":"_endTime","type":"uint128"},{"components":[{"name":"r","type":"uint8"},{"name":"g","type":"uint8"},{"name":"b","type":"uint8"}],"name":"_color","type":"tuple"}]}');

},{}],"7luGY":[function(require,module,exports) {
module.exports = JSON.parse('{"ABI version":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"ownerPubkey","type":"uint256"},{"name":"codeRouter","type":"cell"},{"name":"codeCell","type":"cell"}],"outputs":[]},{"name":"getDetails","inputs":[],"outputs":[{"name":"nonce","type":"uint16"},{"name":"owner","type":"uint256"}]},{"name":"newRouter","inputs":[{"name":"roundTime","type":"uint64"},{"name":"radius","type":"uint64"},{"name":"speed","type":"uint64"},{"name":"userCount","type":"uint64"},{"name":"name","type":"string"},{"name":"nonce","type":"uint16"}],"outputs":[]},{"name":"getOwner","inputs":[],"outputs":[{"name":"pubkey","type":"uint256"}]},{"name":"owner","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"pubkey","type":"uint256"}]},{"name":"transferOwnership","inputs":[{"name":"newOwner","type":"uint256"}],"outputs":[]}],"data":[{"key":1,"name":"_nonce","type":"uint16"}],"events":[{"name":"RouterCreated","inputs":[{"name":"nonce","type":"uint16"},{"name":"routerAddress","type":"address"}],"outputs":[]},{"name":"OwnershipTransferred","inputs":[{"name":"oldOwner","type":"uint256"},{"name":"newOwner","type":"uint256"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_owner","type":"uint256"},{"name":"_nonce","type":"uint16"},{"name":"_codeRouter","type":"cell"},{"name":"_codeCell","type":"cell"}]}');

},{}],"hi4Ts":[function(require,module,exports) {
module.exports = JSON.parse('{"testnet":{"router":"0:0387bcd4d691475c687597f9f5a5b87045cad9d9f4f72634af5a5854bb237da0","gameroot":"0:db8e2970bf51fb826c38a7f3f851219ba425526465871b5bb2049f7eeefb86ee","codeHash":"a431e5271624bd7a5dc6ab9228cdbb35c89e88f164b113986447cd5652055550","endpoint":"https://devnet.evercloud.dev/4b0e77393fba46759305e30cea4aaa95/graphql"},"localnet":{"router":"0:b2ccd19a3524c2d1eb9857fbc2d637158e33486b1c963be3e9561fd753eb5adc","gameroot":"0:a9766ccebd7c7bcd7a8008b4cbb40191504400b84797bd9747656842bb69ab86","codeHash":"28394e6e4245238739c93f391575e8e96446567bc7b7c9a8d2faa7065049bfea","endpoint":"http://localhost/graphql"}}');

},{}]},["ShInH","8lqZg"], "8lqZg", "parcelRequirefd0c")

//# sourceMappingURL=index.975ef6c8.js.map
