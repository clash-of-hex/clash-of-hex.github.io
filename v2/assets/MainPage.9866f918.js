var gr=Object.defineProperty;var pr=(e,t,n)=>t in e?gr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Le=(e,t,n)=>(pr(e,typeof t!="symbol"?t+"":t,n),n),We=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var z=(e,t,n)=>(We(e,t,"read from private field"),n?n.call(e):t.get(e)),se=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},Ue=(e,t,n,i)=>(We(e,t,"write to private field"),i?i.call(e,n):t.set(e,n),n);var Q=(e,t,n)=>(We(e,t,"access private method"),n);import{c as B,_ as hr,o as At,a as St,p as fr,b as _r,d as It,e as br,f as mr}from"./App.129fd15b.js";const J=e=>Number.isFinite(e)&&!Number.isNaN(e),Pe=e=>typeof e=="object"&&e!==null,yr=e=>typeof e=="function",Re=e=>Pe(e)&&J(e.col)&&J(e.row),wr=e=>Pe(e)&&J(e.x)&&J(e.y),Qe=e=>Array.isArray(e)&&J(e[0])&&J(e[1]),Ee=(e,t)=>t+e*(t&1)>>1,Ke=([e,t,n=-e-t])=>({q:e,r:t,s:n});function Fe({q:e,r:t,s:n}){const i=J(e),s=J(t),o=J(n);if(i&&s&&o)return{q:e,r:t,s:n};if(i&&s)return{q:e,r:t,s:-e-t};if(i&&o)return{q:e,r:-e-n,s:n};if(s&&o)return{q:-t-n,r:t,s:n};throw new TypeError(`Can't determine three cube coordinates from less than two coordinates. Received: { q: ${e}, r: ${t}, s: ${n} }.`)}var K=(e=>(e.FLAT="FLAT",e.POINTY="POINTY",e))(K||{});function vr(e,t){if(Pe(e)&&e.xRadius>0&&e.yRadius>0)return e;if(Pe(e)&&e.width>0&&e.height>0){const{width:n,height:i}=e;return t===K.POINTY?{xRadius:n/Math.sqrt(3),yRadius:i/2}:{xRadius:n/2,yRadius:i/Math.sqrt(3)}}if(e>0)return{xRadius:e,yRadius:e};throw new TypeError(`Invalid dimensions: ${JSON.stringify(e)}. Dimensions must be expressed as an Ellipse ({ xRadius: number, yRadius: number }), a Rectangle ({ width: number, height: number }) or a number.`)}function Or(e,t){if(wr(e))return e;if(!t)throw new TypeError(`Supply a bounding box ({ width: number, height: number }). Received: ${JSON.stringify(t)}`);if(e==="topLeft")return{x:t.width*-.5,y:t.height*-.5};throw new TypeError(`Invalid origin: ${JSON.stringify(e)}. Origin must be expressed as a Point ({ x: number, y: number }) or the string 'topLeft'.`)}class ut{constructor(t=[0,0]){Le(this,"q");Le(this,"r");const{q:n,r:i}=Ae(this,t);this.q=n,this.r=i}static get settings(){const{dimensions:t,orientation:n,origin:i,offset:s}=this.prototype;return{dimensions:t,orientation:n,origin:i,offset:s}}get center(){const{width:t,height:n,x:i,y:s}=this;return{x:t/2-i,y:n/2-s}}get col(){return ft(this).col}get corners(){const{orientation:t,width:n,height:i,x:s,y:o}=this;return t===K.POINTY?Ar(n,i,s,o):Sr(n,i,s,o)}get dimensions(){return we.dimensions}get height(){const{orientation:t,dimensions:{yRadius:n}}=this;return t===K.POINTY?n*2:n*Math.sqrt(3)}get isFlat(){return this.orientation===K.FLAT}get isPointy(){return this.orientation===K.POINTY}get orientation(){return we.orientation}get origin(){return we.origin}get offset(){return we.offset}get row(){return ft(this).row}get width(){const{orientation:t,dimensions:{xRadius:n}}=this;return t===K.POINTY?n*Math.sqrt(3):n*2}get x(){return ge(this).x}get y(){return ge(this).y}get s(){return-this.q-this.r}clone(t=this){return new this.constructor(t)}equals(t){return Ir(this,Re(t)?jt(this,t):t)}toString(){return`${this.constructor.name}(${this.q},${this.r})`}translate(t){return jr(this,t)}}const we={dimensions:{xRadius:1,yRadius:1},orientation:K.POINTY,origin:{x:0,y:0},offset:-1},Ar=(e,t,n,i)=>[{x:n+e*.5,y:i-t*.25},{x:n+e*.5,y:i+t*.25},{x:n,y:i+t*.5},{x:n-e*.5,y:i+t*.25},{x:n-e*.5,y:i-t*.25},{x:n,y:i-t*.5}],Sr=(e,t,n,i)=>[{x:n+e*.25,y:i-t*.5},{x:n+e*.5,y:i},{x:n+e*.25,y:i+t*.5},{x:n-e*.25,y:i+t*.5},{x:n-e*.5,y:i},{x:n-e*.25,y:i-t*.5}];function Mt(e){const{dimensions:t,orientation:n,origin:i,offset:s}={...we,...e};return class extends ut{get dimensions(){return vr(t,n)}get orientation(){return n}get origin(){return Or(i,this)}get offset(){return s}}}function Ir(e,t){if(Re(e)&&Re(t))return e.col===t.col&&e.row===t.row;if(Object.hasOwn(e,"col")||Object.hasOwn(t,"col"))throw new Error(`Can't compare coordinates where one are offset coordinates. Either pass two offset coordinates or two axial/cube coordinates. Received: ${JSON.stringify(e)} and ${JSON.stringify(t)}`);const n=Qe(e)?Ke(e):e,i=Qe(t)?Ke(t):t;return n.q===i.q&&n.r===i.r}const Mr=(e,t,n)=>({col:e+Ee(n,t),row:t}),xr=(e,t,n)=>({col:e,row:t+Ee(n,e)}),ft=({q:e,r:t,offset:n,isPointy:i})=>i?Mr(e,t,n):xr(e,t,n),ge=({orientation:e,dimensions:{xRadius:t,yRadius:n},origin:{x:i,y:s},q:o,r:c})=>e===K.POINTY?{x:t*Math.sqrt(3)*(o+c/2)-i,y:n*3/2*c-s}:{x:t*3/2*o-i,y:n*Math.sqrt(3)*(c+o/2)-s},xt=(e,t,n)=>{const i=e-Ee(n,t),s=t,o=-i-s;return{q:i,r:s,s:o}},qt=(e,t,n)=>{const i=e,s=t-Ee(n,e),o=-i-s;return{q:i,r:s,s:o}},jt=({offset:e,orientation:t},{col:n,row:i})=>t===K.POINTY?xt(n,i,e):qt(n,i,e),Je=e=>{const{q:t,r:n,s:i}=Fe(e);let s=Math.round(t),o=Math.round(n),c=Math.round(i);const u=Math.abs(t-s),f=Math.abs(n-o),b=Math.abs(i-c);return u>f&&u>b?s=-o-c:f>b?o=-s-c:c=-s-o,{q:s,r:o,s:c}},qr=({dimensions:{xRadius:e,yRadius:t},origin:n,orientation:i},{x:s,y:o})=>(s+=n.x,o+=n.y,i===K.POINTY?Je({q:Math.sqrt(3)*s/(3*e)-o/(3*t),r:2/3*(o/t)}):Je({q:2/3*(s/e),r:Math.sqrt(3)*o/(3*t)-s/(3*e)}));function Ae(e,t){return Qe(t)?Ke(t):Re(t)?jt(e,t):Fe(t)}function jr(e,t){const{q:n,r:i,s}=Fe(e),{q:o,r:c,s:u}=Fe(t),f={q:n+o,r:i+c,s:s+u};return e instanceof ut?e.clone(f):f}function Ce(e,t,n){const{q:i,r:s,s:o}=Ae(e,t),{q:c,r:u,s:f}=Ae(e,n);return Math.max(Math.abs(i-c),Math.abs(s-u),Math.abs(o-f))}var Ve=(e=>(e.CLOCKWISE="CLOCKWISE",e.COUNTERCLOCKWISE="COUNTERCLOCKWISE",e))(Ve||{}),L=(e=>(e[e.N=0]="N",e[e.NE=1]="NE",e[e.E=2]="E",e[e.SE=3]="SE",e[e.S=4]="S",e[e.SW=5]="SW",e[e.W=6]="W",e[e.NW=7]="NW",e))(L||{});const Tr=[null,{q:1,r:-1},{q:1,r:0},{q:0,r:1},null,{q:-1,r:1},{q:-1,r:0},{q:0,r:-1}],kr=[{q:0,r:-1},{q:1,r:-1},null,{q:1,r:0},{q:0,r:1},{q:-1,r:1},null,{q:-1,r:0}],Br=({offset:e,q:t,r:n,col:i,row:s},o)=>{if(o===L.S||o===L.N){const u=o===L.S?s+1:s-1;return xt(i,u,e)}const c=Tr[o];return{q:t+c.q,r:n+c.r}},Pr=({offset:e,q:t,r:n,col:i,row:s},o)=>{if(o===L.E||o===L.W){const u=o===L.E?i+1:i-1;return qt(u,s,e)}const c=kr[o];return{q:t+c.q,r:n+c.r}},Ye=(e,t)=>e.clone(e.isPointy?Br(e,t):Pr(e,t));function Xe(e){return Array.isArray(e)?function(t,n){const i=[];let s=n;for(const o of e)for(const c of o(t,s))i.push(s=c);return i}:e}function Rr(e){return Fr(e)?Cr(e):Er(e)}function Fr(e){return e.direction in L}function Cr({start:e,direction:t,length:n}){return function(i,s){const o=[];let c=i(e??s);!e&&s&&(c=Ye(c,t));for(let u=0;u<n;u++)o.push(c),c=Ye(c,t);return o}}function Er({start:e,stop:t}){return function(n,i){const s=[],o=n(e??i),c=_t(o),u=_t(Ae(o,t)),f=Dr(c,u),b=Ce(o,o,t),_=1/Math.max(b,1);let d=!e&&i?1:0;for(d;d<=b;d++){const l=Je(f(_*d));s.push(n(l))}return s}}function _t({q:e,r:t,s:n}){return{q:e+1e-6,r:t+1e-6,s:n+-2e-6}}function Dr(e,t){return n=>{const i=e.q*(1-n)+t.q*n,s=e.r*(1-n)+t.r*n;return{q:i,r:s}}}function Hr(e,t,{includeSource:n=!0}={}){return function(i,s){const o=[];for(const c of Xe(e)(i,s)){n&&o.push(c);for(const u of Xe(t)(i,c))o.push(u)}return o}}L.E,L.N,L.S,L.W;function Nr(e){const{center:t,rotation:n=Ve.CLOCKWISE}=e;return function(i,s){const o=n.toUpperCase(),c=[];let{radius:u}=e,f;J(u)?f=i(t).translate({q:u,s:-u}):(f=i(e.start??s),u=Ce(f,t,f));const{q:b,r:_,s:d}=Ae(f,t);let l=i({q:b,r:_-u,s:d+u});if(o===Ve.CLOCKWISE)for(let m=0;m<6;m++)for(let w=0;w<u;w++){const{q:S,r:M}=bt[m];l=i({q:l.q+S,r:l.r+M}),c.push(l)}else for(let m=5;m>=0;m--)for(let w=0;w<u;w++){const{q:S,r:M}=bt[m];l=i({q:l.q-S,r:l.r-M}),c.push(l)}const g=!e.start&&s,p=c.findIndex(m=>m.equals(f));return c.slice(p+(g?1:0)).concat(c.slice(0,p))}}const bt=[{q:1,r:0},{q:0,r:1},{q:-1,r:1},{q:-1,r:0},{q:0,r:-1},{q:1,r:-1}];function mt({radius:e,start:t,rotation:n}){return function(i,s){const o=t??s??[0,0],c=!t&&s?e:e+1;return Hr(Rr({start:t,direction:L.N,length:c}),Nr({center:o,rotation:n}))(i,s)}}var U,te,ae,ve,xe,Ze,qe,et,je,tt;const ee=class{constructor(t,n=[]){se(this,ae);se(this,xe);se(this,qe);se(this,je);se(this,U,void 0);se(this,te,new Map);if(t instanceof ee){Ue(this,U,z(t,U)),this.setHexes(t);return}Ue(this,U,t),this.setHexes(Q(this,xe,Ze).call(this,n))}static fromIterable(t){const n=t[Symbol.iterator]().next().value;if(!n)throw new TypeError(`Can't create grid from empty iterable: ${JSON.stringify(t)}`);return new ee(n.constructor,t)}static fromJSON({hexSettings:t,coordinates:n}){const i=Mt(t);return new ee(i,n.map(s=>new i(s)))}get size(){return z(this,te).size}get pixelWidth(){if(this.size===0)return 0;const{isPointy:t,width:n}=this.hexPrototype,i=this.toArray(),{0:s,length:o,[o-1]:c}=t?i.sort((u,f)=>f.s-u.s||u.q-f.q):i.sort((u,f)=>u.q-f.q);return c.x-s.x+n}get pixelHeight(){if(this.size===0)return 0;const{isPointy:t,height:n}=this.hexPrototype,i=this.toArray(),{0:s,length:o,[o-1]:c}=t?i.sort((u,f)=>u.r-f.r):i.sort((u,f)=>f.s-u.s||u.r-f.r);return c.y-s.y+n}[Symbol.iterator](){return z(this,te).values()}get hexPrototype(){return z(this,U).prototype}createHex(t){return new(z(this,U))(t)}getHex(t){const n=this.createHex(t);return z(this,te).get(n.toString())}hasHex(t){return z(this,te).has(t.toString())}setHexes(t){for(const n of t){const i=n instanceof ut?n:new(z(this,U))(n);Q(this,ae,ve).call(this,i)}return this}filter(t){var i;const n=new ee(z(this,U));for(const s of this)t(s)&&Q(i=n,ae,ve).call(i,s);return n}map(t){var i;const n=new ee(z(this,U));for(const s of this)Q(i=n,ae,ve).call(i,t(s));return n}traverse(t,{bail:n=!1}={}){var s;const i=new ee(z(this,U));for(const o of Q(this,xe,Ze).call(this,t)){const c=this.getHex(o);if(c)Q(s=i,ae,ve).call(s,c);else if(n)return i}return i}forEach(t){for(const n of this)t(n);return this}reduce(t,n){if(n===void 0){let s,o,c;for(const u of this)o=c,c=u,o&&(s=t(o,c));return s}let i=n;for(const s of this)i=t(i,s);return i}toArray(){return Array.from(this)}toJSON(){const{dimensions:t,orientation:n,origin:i,offset:s}=this.hexPrototype;return{hexSettings:{dimensions:t,orientation:n,origin:i,offset:s},coordinates:this.toArray()}}toString(){return`${this.constructor.name}(${this.size})`}pointToHex(t,{allowOutside:n=!0}={}){const i=qr(this.hexPrototype,t),s=this.getHex(i);return n?s??this.createHex(i):s}distance(t,n,{allowOutside:i=!0}={}){if(i)return Ce(this.hexPrototype,t,n);const s=this.getHex(t),o=this.getHex(n);if(!(!s||!o))return Ce(this.hexPrototype,s,o)}neighborOf(t,n,{allowOutside:i=!0}={}){const s=Ye(this.createHex(t),n),o=this.getHex(s);return i?o??s:o}};let Se=ee;U=new WeakMap,te=new WeakMap,ae=new WeakSet,ve=function(t){z(this,te).set(t.toString(),t)},xe=new WeakSet,Ze=function(t){return Q(this,qe,et).call(this,t)?Q(this,je,tt).call(this,t):Array.isArray(t)&&Q(this,qe,et).call(this,t[0])?Q(this,je,tt).call(this,Xe(t)):t},qe=new WeakSet,et=function(t){return yr(t)},je=new WeakSet,tt=function(t){return t(this.createHex.bind(this))};var C={},P={},fe={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getUniqueId=e.mergeTransactions=e.LT_COLLATOR=e.Semaphore=e.DelayedTransactions=e.MessageExpiredException=e.AddressLiteral=e.Address=void 0;class t{constructor(g){this.equals=p=>this._equals(p),this._address=g}toString(){return this._address}toJSON(){return this._address}_equals(g){return g instanceof t?this._address===g._address:this._address===g}}e.Address=t;class n extends t{constructor(g){super(g)}}e.AddressLiteral=n;class i extends Error{constructor(g,p){super("Message expired"),this.address=g,this.hash=p}}e.MessageExpiredException=i;class s{constructor(){this.transactions=new Map}async waitTransaction(g,p){var m;let w=(m=this.transactions.get(p))===null||m===void 0?void 0:m.promise;if(w==null){let M,A;w=new Promise((h,y)=>{M=O=>h(O),A=()=>y()}),this.transactions.set(p,{promise:w,resolve:M,reject:A})}const S=await w;if(S==null)throw new i(g,p);return S}fillTransaction(g,p){const m=this.transactions.get(g);m!=null?m.resolve(p):this.transactions.set(g,{promise:Promise.resolve(p),resolve:()=>{},reject:()=>{}})}}e.DelayedTransactions=s;class o{constructor(g){this.tasks=[],this.sched=()=>{var p;this.count>0&&this.tasks.length>0&&(this.count--,(p=this.tasks.shift())===null||p===void 0||p())},this.count=g}acquire(){return new Promise((g,p)=>{this.tasks.push(()=>{let m=!1;g(()=>{m||(m=!0,this.count++,this.sched())})}),u(this.sched)})}releaseAll(){for(var g;this.tasks.length>0;)(g=this.tasks.shift())===null||g===void 0||g()}}e.Semaphore=o;function c(l){const g=document.createTextNode("");let p,m,w=0,S=0;return new l(function(){let M;if(p)m&&(p=m.slice(S).concat(p));else{if(!m)return;p=m}if(m=p,p=null,S=0,typeof m=="function"){M=m,m=null,M();return}for(g.data=w=++w%2;S<m.length;)M=m[S],S++,S===m.length&&(m=null),M()}).observe(g,{characterData:!0}),function(M){if(p){typeof p=="function"?p=[p,M]:p.push(M);return}p=M,g.data=w=++w%2}}const u=function(){if(typeof queueMicrotask=="function")return queueMicrotask;if(typeof document=="object"&&document){if(typeof MutationObserver=="function")return c(MutationObserver);if(typeof window.WebKitMutationObserver=="function")return c(window.WebKitMutationObserver)}if(typeof setImmediate=="function")return setImmediate;if(typeof setTimeout=="function"||typeof setTimeout=="object")return function(l){setTimeout(l,0)};throw new Error("No `nextTick` implementation found")}();e.LT_COLLATOR=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function f(l,g,p){if(p.batchType==="old")return l.push(...g),l;if(l.length===0)return l.push(...g),l;let m=0;for(;m<l.length&&e.LT_COLLATOR.compare(l[m].id.lt,p.maxLt)>=0;)++m;return l.splice(m,0,...g),l}e.mergeTransactions=f;const b=4294967295;let _=Math.floor(Math.random()*b);function d(){return _=(_+1)%b,_}e.getUniqueId=d})(fe);Object.defineProperty(P,"__esModule",{value:!0});P.parseTokensObject=P.serializeTokensObject=P.parseAccountInteraction=P.parsePermissions=P.parseMessage=P.serializeMessage=P.parseTransaction=P.serializeTransaction=void 0;const Ie=fe;function zr(e){return{...e,inMessage:nt(e.inMessage),outMessages:e.outMessages.map(nt)}}P.serializeTransaction=zr;function Lr(e){return{...e,inMessage:rt(e.inMessage),outMessages:e.outMessages.map(rt)}}P.parseTransaction=Lr;function nt(e){return{...e,src:e.src?e.src.toString():void 0,dst:e.dst?e.dst.toString():void 0}}P.serializeMessage=nt;function rt(e){return{...e,src:e.src?new Ie.Address(e.src):void 0,dst:e.dst?new Ie.Address(e.dst):void 0}}P.parseMessage=rt;function Wr(e){return{...e,accountInteraction:e.accountInteraction?Tt(e.accountInteraction):void 0}}P.parsePermissions=Wr;function Tt(e){return{...e,address:new Ie.Address(e.address)}}P.parseAccountInteraction=Tt;function Ur(e){return it(e)}P.serializeTokensObject=Ur;function it(e){if(e instanceof Ie.Address)return e.toString();if(Array.isArray(e)){const t=[];for(const n of e)t.push(it(n));return t}else if(e!=null&&typeof e=="object"){const t={};for(const[n,i]of Object.entries(e))t[n]=it(i);return t}else return e}function Gr(e,t){const n={};for(const i of e)n[i.name]=de(i,t[i.name]);return n}P.parseTokensObject=Gr;function de(e,t){if(e.type.startsWith("map")){let[n,i]=e.type.split(",");n=n.slice(4),i=i.slice(0,-1);const s=[];for(const[o,c]of t)s.push([de({name:"",type:n},o),de({name:"",type:i,components:e.components},c)]);return s}else{const n=e.type.endsWith("[]"),i=!n&&e.type.startsWith("optional"),s=n?e.type.slice(0,-2):i?e.type.slice(9,-1):e.type;if(n){const o={name:e.name,type:s,components:e.components},c=[];for(const u of t)c.push(de(o,u));return c}else if(i){if(t==null)return null;{const o={name:e.name,type:s,components:e.components};return de(o,t)}}else if(s==="tuple"){const o={};if(e.components!=null)for(const c of e.components)o[c.name]=de(c,t[c.name]);return o}else return s==="address"?new Ie.Address(t):t}}var Me={};Object.defineProperty(Me,"__esModule",{value:!0});Me.Subscriber=void 0;const Oe=fe,$r=P;class Qr{constructor(t){this.provider=t,this.subscriptions=new Map,this.scanners=new Map,this.unsubscribe=async()=>this._unsubscribe()}transactions(t){return this._addSubscription("transactionsFound",t,!1)}trace(t){const n=(0,Oe.getUniqueId)();return new D((i,s)=>{const o=new Jr(this.provider,{origin:t,onData:i,onEnd:c=>{this.scanners.delete(n),s(c)}});return this.scanners.set(n,o),o.start(),Promise.resolve()},async()=>{const i=this.scanners.get(n);i!=null&&(this.scanners.delete(n),await i.stop())},Ge,!0)}oldTransactions(t,n){const i=(0,Oe.getUniqueId)();return new D((s,o)=>{const c=new Kr(this.provider,{address:t,onData:s,onEnd:u=>{this.scanners.delete(i),o(u)},...n});return this.scanners.set(i,c),c.start(),Promise.resolve()},async()=>{const s=this.scanners.get(i);s!=null&&(this.scanners.delete(i),await s.stop())},Ge,!0)}states(t){return this._addSubscription("contractStateChanged",t,!1)}async _unsubscribe(){const t=[];for(const n of this.subscriptions.values())for(const[i,s]of Object.entries(n))delete n[i],s!=null&&t.push(s.subscription.then(o=>o.unsubscribe()).catch(()=>{}));this.subscriptions.clear();for(const n of this.scanners.values())t.push(n.stop());this.scanners.clear(),await Promise.all(t)}_addSubscription(t,n,i){const s=n.toString(),o=u=>{const f=this.subscriptions.get(s);if(f==null)return;const b=f[t];if(b!=null){const _=b.handlers.get(u);if(_!=null){b.handlers.delete(u);const{queue:d,onEnd:l,state:g}=_;g.finished||(g.finished=!0,d.clear(),d.enqueue(async()=>l(g.eof)))}if(b.handlers.size===0){const d=b.subscription;delete f[t],d.then(l=>l.unsubscribe()).catch(console.debug)}}f.contractStateChanged==null&&f.transactionsFound==null&&this.subscriptions.delete(s)},c=(0,Oe.getUniqueId)();return new D((u,f)=>{const b=this.subscriptions.get(s);let _=b?.[t];const d={eof:!1,finished:!1},l={onData:u,onEnd:f,queue:new lt,state:d};if(_!=null)return _.handlers.set(c,l),Promise.resolve();const g=new Map;g.set(c,l);const p=this.provider.subscribe(t,{address:n}).then(m=>(m.on("data",w=>{for(const{onData:S,queue:M,state:A}of g.values())A.eof||A.finished||M.enqueue(async()=>{await S(w)||(A.eof=!0,o(c))})}),m.on("unsubscribed",()=>{for(const w of g.keys())o(w)}),m)).catch(m=>{console.error(m);for(const w of g.keys())o(w);throw m});return _={subscription:p,handlers:g},b==null?this.subscriptions.set(s,{[t]:_}):b[t]=_,p.then(()=>{})},()=>o(c),Ge,i)}}Me.Subscriber=Qr;async function Ge(e,t){return t(e)}class D{constructor(t,n,i,s){this.makeProducer=t,this.stopProducer=n,this.extractor=i,this.isFinite=s,this.fold=this.onlyFinite((o,c,u)=>{let f=o;return new Promise((b,_)=>{const d=this.makeProducer(l=>this.extractor(l,async g=>(f=await c(f,g),!0)),l=>{l?b(f):_(new Error("Subscription closed"))});u!=null&&(u.subscribed=d)})}),this.finished=this.onlyFinite(o=>new Promise((c,u)=>{const f=this.makeProducer(b=>this.extractor(b,_=>!0),b=>{b?c(void 0):u(new Error("Subscription closed"))});o!=null&&(o.subscribed=f)}))}async delayed(t){const{subscribed:n,result:i}=t({first:()=>{const s={},o=this.first(s);return{subscribed:s.subscribed,result:o}},on:s=>{const o={};return this.on(s,o),{subscribed:o.subscribed,result:void 0}},fold:this.fold!=null?(s,o)=>{const c={},u=this.fold(s,o,c);return{subscribed:c.subscribed,result:u}}:void 0,finished:this.finished!=null?()=>{const s={},o=this.finished(s);return{subscribed:s.subscribed,result:o}}:void 0});return await n,()=>i}first(t){const n={found:!1};return new Promise((i,s)=>{const o=this.makeProducer(c=>this.extractor(c,u=>(Object.assign(n,{found:!0,result:u}),!1)),c=>{c?this.isFinite?i(n.found?n.result:void 0):n.found?i(n.result):s(new Error("Unexpected end of stream")):s(new Error("Subscription closed"))});t!=null&&(t.subscribed=o)})}on(t,n){const i=this.makeProducer(s=>this.extractor(s,async o=>(await t(o),!0)),s=>{});n!=null&&(n.subscribed=i)}merge(t){return new D((n,i)=>{const s={stopped:!1,counter:0},o=c=>{s.stopped||(++s.counter==2||!c)&&(s.stopped=!0,i(c))};return Promise.all([this.makeProducer(n,o),t.makeProducer(n,o)]).then(()=>{})},()=>{this.stopProducer(),t.stopProducer()},this.extractor,this.isFinite&&t.isFinite)}enumerate(){const t={index:0};return new D(this.makeProducer,this.stopProducer,(n,i)=>this.extractor(n,async s=>i({index:t.index++,item:s})),this.isFinite)}tap(t){return new D(this.makeProducer,this.stopProducer,(n,i)=>this.extractor(n,async s=>(await t(s),i(s))),this.isFinite)}filter(t){return new D(this.makeProducer,this.stopProducer,(n,i)=>this.extractor(n,async s=>await t(s)?i(s):!0),this.isFinite)}filterMap(t){return new D(this.makeProducer,this.stopProducer,(n,i)=>this.extractor(n,async s=>{const o=await t(s);return o!==void 0?i(o):!0}),this.isFinite)}map(t){return new D(this.makeProducer,this.stopProducer,(n,i)=>this.extractor(n,async s=>{const o=await t(s);return i(o)}),this.isFinite)}flatMap(t){return new D(this.makeProducer,this.stopProducer,(n,i)=>this.extractor(n,async s=>{const o=await t(s);for(const c of o)if(!await i(c))return!1;return!0}),this.isFinite)}skip(t){const n={index:0};return new D(this.makeProducer,this.stopProducer,(i,s)=>this.extractor(i,o=>n.index>=t?s(o):(++n.index,!0)),this.isFinite)}skipWhile(t){const n={shouldSkip:!0};return new D(this.makeProducer,this.stopProducer,(i,s)=>this.extractor(i,async o=>!n.shouldSkip||!await t(o)?(n.shouldSkip=!1,s(o)):!0),this.isFinite)}take(t){const n={index:0};return new D(this.makeProducer,this.stopProducer,(i,s)=>this.extractor(i,o=>n.index<t?(++n.index,s(o)):!1),!0)}takeWhile(t){return new D(this.makeProducer,this.stopProducer,(n,i)=>this.extractor(n,async s=>await t(s)?i(s):!1),!0)}takeWhileMap(t){return new D(this.makeProducer,this.stopProducer,(n,i)=>this.extractor(n,async s=>{const o=await t(s);return o!==void 0?i(o):!1}),!0)}onlyFinite(t){if(this.isFinite)return t}}class Kr{constructor(t,n){this.provider=t,this.params=n,this.queue=new lt,this.isRunning=!1}start(){this.isRunning||this.promise!=null||(this.isRunning=!0,this.promise=(async()=>{const t=this.params,n={complete:!1};for(;this.isRunning&&!n.complete;)try{const{transactions:i,continuation:s}=await this.provider.getTransactions({address:this.params.address,continuation:this.continuation});if(n.complete=!n.complete&&i.length==null,!this.isRunning||n.complete)break;const o=i.filter(u=>(t.fromLt==null||Oe.LT_COLLATOR.compare(u.id.lt,t.fromLt)>0)&&(t.fromUtime==null||u.createdAt>t.fromUtime));if(o.length==0){n.complete=!0;break}const c={maxLt:o[0].id.lt,minLt:o[o.length-1].id.lt,batchType:"old"};if(this.queue.enqueue(async()=>{this.params.onData({address:this.params.address,transactions:o,info:c})||(n.complete=!0,this.isRunning=!1)}),s!=null)this.continuation=s;else{n.complete=!0;break}}catch(i){console.error(i)}this.queue.enqueue(async()=>this.params.onEnd(n.complete)),this.isRunning=!1,this.continuation=void 0})())}async stop(){this.isRunning=!1,this.queue.clear(),this.promise!=null?await this.promise:this.params.onEnd(!1)}}class Jr{constructor(t,n){this.provider=t,this.params=n,this.queue=new lt,this.isRunning=!1,this.semaphore=new Oe.Semaphore(10)}start(){if(this.isRunning||this.promise!=null)return;const t=this.provider;this.isRunning=!0,this.promise=(async()=>{const n={complete:!1},i=o=>{const c={stopped:!1};return{promise:(async()=>{let b=500;for(;;){const _=await this.semaphore.acquire();if(c.stopped){_();return}const d=await t.rawApi.findTransaction({inMessageHash:o}).catch(()=>({transaction:void 0})).finally(()=>_());if(c.stopped)return;if(d.transaction!=null){const p=(0,$r.parseTransaction)(d.transaction);return p.account=p.inMessage.dst,p}let l;const g=new Promise((p,m)=>{l=()=>p(),c.reject=()=>m()});if(c.timeout=setTimeout(l,b),await g,c.stopped)return;c.reject=void 0,b=Math.min(b*2,3e3)}})(),reject:()=>{var b;c.stopped=!0,(b=c.reject)===null||b===void 0||b.call(c),c.timeout!=null&&clearTimeout(c.timeout)}}},s=[this.params.origin];try{e:for(;this.isRunning;){const o=s.shift();if(o==null){n.complete=!0;break}const c=o.outMessages.filter(u=>u.dst!=null).map(u=>{const f=u.hash;return i(f)});this.pendingTransactions=c;for(const{promise:u}of c){const f=await u;if(!this.isRunning||n.complete||f==null)break e;this.queue.enqueue(async()=>{this.params.onData(f)||(n.complete=!0,this.isRunning=!1,this.rejectPendingTransactions())}),s.push(f)}this.pendingTransactions=void 0}}catch(o){console.error(o)}finally{this.queue.enqueue(async()=>this.params.onEnd(n.complete)),this.isRunning=!1,this.rejectPendingTransactions()}})()}async stop(){this.isRunning=!1,this.queue.clear(),this.rejectPendingTransactions(),this.promise!=null?await this.promise:this.params.onEnd(!1)}rejectPendingTransactions(){if(this.pendingTransactions!=null){for(const t of this.pendingTransactions)t.reject();this.pendingTransactions=void 0}this.semaphore.releaseAll()}}class lt{constructor(){this.queue=[],this.workingOnPromise=!1}enqueue(t){this.queue.push(t),this._dequeue().catch(()=>{})}clear(){this.queue.length=0}async _dequeue(){if(this.workingOnPromise)return;const t=this.queue.shift();!t||(this.workingOnPromise=!0,t().then(()=>{this.workingOnPromise=!1,this._dequeue()}).catch(()=>{this.workingOnPromise=!1,this._dequeue()}))}}var oe={};Object.defineProperty(oe,"__esModule",{value:!0});oe.TvmException=oe.Contract=void 0;const pe=fe,N=P;class Vr{constructor(t,n,i){if(!Array.isArray(n.functions))throw new Error("Invalid abi. Functions array required");if(!Array.isArray(n.events))throw new Error("Invalid abi. Events array required");this._provider=t,this._abi=JSON.stringify(n),this._functions=n.functions.reduce((s,o)=>(s[o.name]={inputs:o.inputs||[],outputs:o.outputs||[]},s),{}),this._events=n.events.reduce((s,o)=>(s[o.name]={inputs:o.inputs||[]},s),{}),this._address=i,this._methods=new Proxy({},{get:(s,o)=>{const c=this._functions[o];return(u={})=>new Yr(this._provider,c,this._abi,this._address,o,u)}})}get methods(){return this._methods}get address(){return this._address}get abi(){return this._abi}async getFullState(){return await this._provider.ensureInitialized(),await this._provider.rawApi.getFullContractState({address:this.address.toString()})}transactions(t){return t.transactions(this._address).flatMap(({transactions:n})=>n)}events(t){return t.transactions(this._address).flatMap(({transactions:n})=>n).flatMap(n=>this.decodeTransactionEvents({transaction:n}).then(i=>(i.forEach(s=>s.transaction=n),i)))}async waitForEvent(t={}){const{range:n,filter:i}=t,s=typeof i=="string"?({event:f})=>f===i:i;let o=t.subscriber;const c=o==null;o==null&&(o=new this._provider.Subscriber);const u=await(n?.fromLt!=null||n?.fromUtime!=null?o.oldTransactions(this._address,n).merge(o.transactions(this._address)):o.transactions(this.address)).flatMap(f=>f.transactions).takeWhile(f=>n==null||(n.fromLt==null||pe.LT_COLLATOR.compare(f.id.lt,n.fromLt)>0)&&(n.fromUtime==null||f.createdAt>n.fromUtime)&&(n.toLt==null||pe.LT_COLLATOR.compare(f.id.lt,n.toLt)<0)&&(n.toUtime==null||f.createdAt<n.toUtime)).flatMap(f=>this.decodeTransactionEvents({transaction:f}).then(b=>(b.forEach(_=>_.transaction=f),b))).filterMap(async f=>{if(s==null||await s(f))return f}).first();return c&&await o.unsubscribe(),u}async getPastEvents(t){const{range:n,filter:i,limit:s}=t,o=typeof i=="string"?({event:f})=>f===i:i,c=[];let u=t?.continuation;e:for(;;){const{transactions:f,continuation:b}=await this._provider.getTransactions({address:this._address,continuation:u});if(f.length===null)break;const _=f.filter(d=>(n?.fromLt==null||pe.LT_COLLATOR.compare(d.id.lt,n.fromLt)>0)&&(n?.fromUtime==null||d.createdAt>n.fromUtime)&&(n?.toLt==null||pe.LT_COLLATOR.compare(d.id.lt,n.toLt)<0)&&(n?.toUtime==null||d.createdAt<n.toUtime));if(_.length>0){const d=await Promise.all(_.map(async l=>({tx:l,events:await this.decodeTransactionEvents({transaction:l}).then(g=>(g.forEach(p=>p.transaction=l),g))})));for(let{tx:l,events:g}of d){o!=null&&(g=await Promise.all(g.map(async p=>await o(p)?p:void 0)).then(p=>p.filter(m=>m!=null))),u=l.id;for(const p of g){if(s!=null&&c.length>=s)break e;c.push(p)}if(s!=null&&c.length>=s)break e}}if(u=b,u==null)break}return{events:c,continuation:u}}async decodeTransaction(t){await this._provider.ensureInitialized();try{const n=await this._provider.rawApi.decodeTransaction({transaction:(0,N.serializeTransaction)(t.transaction),abi:this._abi,method:t.methods});if(n==null)return;const{method:i,input:s,output:o}=n,c=this._functions[i];return{method:i,input:c.inputs!=null?(0,N.parseTokensObject)(c.inputs,s):{},output:c.outputs!=null?(0,N.parseTokensObject)(c.outputs,o):{}}}catch{return}}async decodeTransactionEvents(t){await this._provider.ensureInitialized();try{const{events:n}=await this._provider.rawApi.decodeTransactionEvents({transaction:(0,N.serializeTransaction)(t.transaction),abi:this._abi}),i=[];for(const{event:s,data:o}of n){const c=this._events[s];i.push({event:s,data:c.inputs!=null?(0,N.parseTokensObject)(c.inputs,o):{}})}return i}catch{return[]}}async decodeInputMessage(t){await this._provider.ensureInitialized();try{const n=await this._provider.rawApi.decodeInput({abi:this._abi,body:t.body,internal:t.internal,method:t.methods});if(n==null)return;const{method:i,input:s}=n,o=this._functions[i];return{method:i,input:o.inputs!=null?(0,N.parseTokensObject)(o.inputs,s):{}}}catch{return}}async decodeOutputMessage(t){await this._provider.ensureInitialized();try{const n=await this._provider.rawApi.decodeOutput({abi:this._abi,body:t.body,method:t.methods});if(n==null)return;const{method:i,output:s}=n,o=this._functions[i];return{method:i,output:o.outputs!=null?(0,N.parseTokensObject)(o.outputs,s):{}}}catch{return}}async decodeEvent(t){await this._provider.ensureInitialized();try{const n=await this._provider.rawApi.decodeEvent({abi:this.abi,body:t.body,event:t.events});if(n==null)return;const{event:i,data:s}=n,o=this._events[i];return{event:i,data:o.inputs!=null?(0,N.parseTokensObject)(o.inputs,s):{}}}catch{return}}}oe.Contract=Vr;class kt extends Error{constructor(t){super(`TvmException: ${t}`),this.code=t}}oe.TvmException=kt;class Yr{constructor(t,n,i,s,o,c){this.provider=t,this.functionAbi=n,this.abi=i,this.address=s,this.method=o,this.params=(0,N.serializeTokensObject)(c)}async send(t){await this.provider.ensureInitialized();const{transaction:n}=await this.provider.rawApi.sendMessage({sender:t.from.toString(),recipient:this.address.toString(),amount:t.amount,bounce:t.bounce==null?!0:t.bounce,payload:{abi:this.abi,method:this.method,params:this.params}});return(0,N.parseTransaction)(n)}async sendDelayed(t){await this.provider.ensureInitialized();const n=new pe.DelayedTransactions,i=await this.provider.subscribe("messageStatusUpdated");i.on("data",c=>{!c.address.equals(t.from)||n.fillTransaction(c.hash,c.transaction)});const{message:s}=await this.provider.rawApi.sendMessageDelayed({sender:t.from.toString(),recipient:this.address.toString(),amount:t.amount,bounce:t.bounce==null?!0:t.bounce,payload:{abi:this.abi,method:this.method,params:this.params}}).catch(c=>{throw i.unsubscribe().catch(console.error),c}),o=n.waitTransaction(this.address,s.hash).finally(()=>i.unsubscribe().catch(console.error));return{messageHash:s.hash,expireAt:s.expireAt,transaction:o}}async sendWithResult(t){await this.provider.ensureInitialized();let n=t.subscriber;const i=n==null;n==null&&(n=new this.provider.Subscriber);try{let s,o;const c=new Promise(g=>{o=p=>g(p)}),u=[];n.transactions(this.address).flatMap(g=>g.transactions).filter(g=>{var p;return((p=g.inMessage.src)===null||p===void 0?void 0:p.equals(t.from))||!1}).on(g=>{s==null?u.push(g):s.possibleMessages.findIndex(p=>p.hash==g.inMessage.hash)>=0&&o?.(g)});const f=await this.send(t),b=f.outMessages.filter(g=>{var p;return((p=g.dst)===null||p===void 0?void 0:p.equals(this.address))||!1});s={transaction:f,possibleMessages:b};const _=u.find(g=>b.findIndex(p=>p.hash==g.inMessage.hash)>=0);_!=null&&o?.(_);const d=await c;let l;try{const g=await this.provider.rawApi.decodeTransaction({transaction:(0,N.serializeTransaction)(d),abi:this.abi,method:this.method});g!=null&&(l=this.functionAbi.outputs!=null?(0,N.parseTokensObject)(this.functionAbi.outputs,g.output):{})}catch(g){console.error(g)}return{parentTransaction:s.transaction,childTransaction:d,output:l}}finally{i&&await n.unsubscribe()}}async estimateFees(t){await this.provider.ensureInitialized();const{fees:n}=await this.provider.rawApi.estimateFees({sender:t.from.toString(),recipient:this.address.toString(),amount:t.amount,payload:{abi:this.abi,method:this.method,params:this.params}});return n}async sendExternal(t){await this.provider.ensureInitialized();const n=t.withoutSignature===!0?this.provider.rawApi.sendUnsignedExternalMessage:this.provider.rawApi.sendExternalMessage,{transaction:i,output:s}=await n({publicKey:t.publicKey,recipient:this.address.toString(),stateInit:t.stateInit,payload:{abi:this.abi,method:this.method,params:this.params},local:t.local});return{transaction:(0,N.parseTransaction)(i),output:s!=null?(0,N.parseTokensObject)(this.functionAbi.outputs,s):void 0}}async sendExternalDelayed(t){await this.provider.ensureInitialized();const n=new pe.DelayedTransactions,i=await this.provider.subscribe("messageStatusUpdated");i.on("data",c=>{!c.address.equals(this.address)||n.fillTransaction(c.hash,c.transaction)});const{message:s}=await this.provider.rawApi.sendExternalMessageDelayed({publicKey:t.publicKey,recipient:this.address.toString(),stateInit:t.stateInit,payload:{abi:this.abi,method:this.method,params:this.params}}).catch(c=>{throw i.unsubscribe().catch(console.error),c}),o=n.waitTransaction(this.address,s.hash).finally(()=>i.unsubscribe().catch(console.error));return{messageHash:s.hash,expireAt:s.expireAt,transaction:o}}async call(t={}){await this.provider.ensureInitialized();const{output:n,code:i}=await this.provider.rawApi.runLocal({address:this.address.toString(),cachedState:t.cachedState,responsible:t.responsible,functionCall:{abi:this.abi,method:this.method,params:this.params}});if(n==null||i!=0)throw new kt(i);return(0,N.parseTokensObject)(this.functionAbi.outputs,n)}async encodeInternal(){await this.provider.ensureInitialized();const{boc:t}=await this.provider.rawApi.encodeInternalInput({abi:this.abi,method:this.method,params:this.params});return t}}var Bt={};Object.defineProperty(Bt,"__esModule",{value:!0});(function(e){var t=B&&B.__createBinding||(Object.create?function(A,h,y,O){O===void 0&&(O=y);var x=Object.getOwnPropertyDescriptor(h,y);(!x||("get"in x?!h.__esModule:x.writable||x.configurable))&&(x={enumerable:!0,get:function(){return h[y]}}),Object.defineProperty(A,O,x)}:function(A,h,y,O){O===void 0&&(O=y),A[O]=h[y]}),n=B&&B.__setModuleDefault||(Object.create?function(A,h){Object.defineProperty(A,"default",{enumerable:!0,value:h})}:function(A,h){A.default=h}),i=B&&B.__importStar||function(A){if(A&&A.__esModule)return A;var h={};if(A!=null)for(var y in A)y!=="default"&&Object.prototype.hasOwnProperty.call(A,y)&&t(h,A,y);return n(h,A),h},s=B&&B.__exportStar||function(A,h){for(var y in A)y!=="default"&&!Object.prototype.hasOwnProperty.call(h,y)&&t(h,A,y)};Object.defineProperty(e,"__esModule",{value:!0}),e.ProviderNotInitializedException=e.ProviderNotFoundException=e.ProviderRpcClient=e.hasEverscaleProvider=e.LT_COLLATOR=e.mergeTransactions=e.MessageExpiredException=e.AddressLiteral=e.Address=e.Subscriber=void 0;const o=P,c=fe,u=i(Me),f=i(oe);s(Bt,e),s(P,e),s(oe,e);var b=Me;Object.defineProperty(e,"Subscriber",{enumerable:!0,get:function(){return b.Subscriber}});var _=fe;Object.defineProperty(e,"Address",{enumerable:!0,get:function(){return _.Address}}),Object.defineProperty(e,"AddressLiteral",{enumerable:!0,get:function(){return _.AddressLiteral}}),Object.defineProperty(e,"MessageExpiredException",{enumerable:!0,get:function(){return _.MessageExpiredException}}),Object.defineProperty(e,"mergeTransactions",{enumerable:!0,get:function(){return _.mergeTransactions}}),Object.defineProperty(e,"LT_COLLATOR",{enumerable:!0,get:function(){return _.LT_COLLATOR}});const d=typeof window<"u"&&typeof window.document<"u";let l;!d||document.readyState==="complete"?l=Promise.resolve():l=new Promise(A=>{window.addEventListener("load",()=>{A()})});const g=()=>d?window.__ever||window.ton:void 0;async function p(){return d?(await l,window.__hasEverscaleProvider===!0||window.hasTonProvider===!0):!1}e.hasEverscaleProvider=p;class m{constructor(h={}){this._subscriptions={connected:new Map,disconnected:new Map,transactionsFound:new Map,contractStateChanged:new Map,messageStatusUpdated:new Map,networkChanged:new Map,permissionsChanged:new Map,loggedOut:new Map},this._contractSubscriptions=new Map,this._properties=h;const y=this;class O extends f.Contract{constructor(T,R){super(y,T,R)}}this.Contract=O;class x extends u.Subscriber{constructor(){super(y)}}this.Subscriber=x,this._api=new Proxy({},{get:(k,T)=>R=>{if(this._provider!=null)return this._provider.request({method:T,params:R});throw new S}}),h.forceUseFallback===!0?this._initializationPromise=h.fallback!=null?h.fallback().then(k=>{this._provider=k}):Promise.resolve():(this._provider=g(),this._provider!=null?this._initializationPromise=Promise.resolve():this._initializationPromise=p().then(k=>new Promise(T=>{if(!k)return T();if(this._provider=g(),this._provider!=null)T();else{const R=window.__hasEverscaleProvider===!0?"ever#initialized":"ton#initialized";window.addEventListener(R,F=>{this._provider=g(),T()})}})).then(async()=>{this._provider==null&&h.fallback!=null&&(this._provider=await h.fallback())})),this._initializationPromise.then(()=>{this._provider!=null&&this._registerEventHandlers(this._provider)})}async hasProvider(){return this._properties.fallback!=null?!0:p()}async ensureInitialized(){if(await this._initializationPromise,this._provider==null)throw new w}get isInitialized(){return this._provider!=null}get raw(){if(this._provider!=null)return this._provider;throw new S}get rawApi(){return this._api}createContract(h,y){return new this.Contract(h,y)}createSubscriber(){return new this.Subscriber}async requestPermissions(h){await this.ensureInitialized();const y=await this._api.requestPermissions({permissions:h.permissions});return(0,o.parsePermissions)(y)}async changeAccount(){await this.ensureInitialized(),await this._api.changeAccount()}async disconnect(){await this.ensureInitialized(),await this._api.disconnect()}async subscribe(h,y){class O{constructor(R,F){this._subscribe=R,this._unsubscribe=F,this._listeners={data:[],subscribed:[],unsubscribed:[]},this._subscribed=!1,this.subscribe=async()=>{if(!this._subscribed){this._subscribed=!0,await this._subscribe(this);for(const H of this._listeners.subscribed)H()}},this.unsubscribe=async()=>{if(!!this._subscribed){this._subscribed=!1,await this._unsubscribe();for(const H of this._listeners.unsubscribed)H()}}}on(R,F){return this._listeners[R].push(F),this}notify(R){for(const F of this._listeners.data)F(R)}}const x=this._subscriptions[h],k=(0,c.getUniqueId)();switch(h){case"connected":case"disconnected":case"messageStatusUpdated":case"networkChanged":case"permissionsChanged":case"loggedOut":{const T=new O(async R=>{x.has(k)||x.set(k,F=>{R.notify(F)})},async()=>{x.delete(k)});return await T.subscribe(),T}case"transactionsFound":case"contractStateChanged":{if(y==null)throw new Error("Address must be specified for the subscription");await this.ensureInitialized();const T=y.address.toString(),R=new O(async F=>{if(x.has(k))return;x.set(k,ce=>{ce.address.toString()===T&&F.notify(ce)});let H=this._contractSubscriptions.get(T);H==null&&(H=new Map,this._contractSubscriptions.set(T,H));const X={state:h==="contractStateChanged",transactions:h==="transactionsFound"};H.set(k,X);const{total:$,withoutExcluded:ke}=M(H.values(),X);try{($.transactions!==ke.transactions||$.state!==ke.state)&&await this.rawApi.subscribe({address:T,subscriptions:$})}catch(ce){throw x.delete(k),H.delete(k),ce}},async()=>{x.delete(k);const F=this._contractSubscriptions.get(T);if(F==null)return;const H=F.get(k),{total:X,withoutExcluded:$}=M(F.values(),H);F.delete(k),!$.transactions&&!$.state?await this.rawApi.unsubscribe({address:T}):(X.transactions!==$.transactions||X.state!==$.state)&&await this.rawApi.subscribe({address:T,subscriptions:$})});return await R.subscribe(),R}default:throw new Error(`Unknown event ${h}`)}}async getProviderState(){await this.ensureInitialized();const h=await this._api.getProviderState();return{...h,permissions:(0,o.parsePermissions)(h.permissions)}}async getBalance(h){const{state:y}=await this.getFullContractState({address:h});return y==null?"0":y?.balance}async getFullContractState(h){return await this.ensureInitialized(),await this._api.getFullContractState({address:h.address.toString()})}async getAccountsByCodeHash(h){await this.ensureInitialized();const{accounts:y,continuation:O}=await this._api.getAccountsByCodeHash({...h});return{accounts:y.map(x=>new c.Address(x)),continuation:O}}async getTransactions(h){await this.ensureInitialized();const{transactions:y,continuation:O,info:x}=await this._api.getTransactions({...h,address:h.address.toString()});return{transactions:y.map(o.parseTransaction),continuation:O,info:x}}async getTransaction(h){await this.ensureInitialized();const{transaction:y}=await this._api.getTransaction({...h});return{transaction:y?(0,o.parseTransaction)(y):void 0}}async getExpectedAddress(h,y){const{address:O}=await this.getStateInit(h,y);return O}async getStateInit(h,y){await this.ensureInitialized();const{address:O,stateInit:x}=await this._api.getExpectedAddress({abi:JSON.stringify(h),...y,initParams:(0,o.serializeTokensObject)(y.initParams)});return{address:new c.Address(O),stateInit:x}}async getBocHash(h){return await this.ensureInitialized(),await this._api.getBocHash({boc:h}).then(({hash:y})=>y)}async packIntoCell(h){return await this.ensureInitialized(),await this._api.packIntoCell({abiVersion:h.abiVersion,structure:h.structure,data:(0,o.serializeTokensObject)(h.data)})}async unpackFromCell(h){await this.ensureInitialized();const{data:y}=await this._api.unpackFromCell({...h,structure:h.structure});return{data:(0,o.parseTokensObject)(h.structure,y)}}async extractPublicKey(h){await this.ensureInitialized();const{publicKey:y}=await this._api.extractPublicKey({boc:h});return y}async codeToTvc(h){await this.ensureInitialized();const{tvc:y}=await this._api.codeToTvc({code:h});return y}async mergeTvc(h){return await this.ensureInitialized(),await this._api.mergeTvc(h)}async splitTvc(h){return await this.ensureInitialized(),await this._api.splitTvc({tvc:h})}async setCodeSalt(h){let y;if(typeof h.salt=="string")await this.ensureInitialized(),y=h.salt;else{const{boc:O}=await this.packIntoCell(h.salt);y=O}return await this._api.setCodeSalt({code:h.code,salt:y})}async getCodeSalt(h){await this.ensureInitialized();const{salt:y}=await this.rawApi.getCodeSalt({code:h.code});return y}async addAsset(h){await this.ensureInitialized();let y;switch(h.type){case"tip3_token":{y={rootContract:h.params.rootContract.toString()};break}default:throw new Error("Unknown asset type")}return await this._api.addAsset({account:h.account.toString(),type:h.type,params:y})}async verifySignature(h){return await this.ensureInitialized(),await this._api.verifySignature(h)}async signData(h){return await this.ensureInitialized(),await this._api.signData(h)}async signDataRaw(h){return await this.ensureInitialized(),await this._api.signDataRaw(h)}async encryptData(h){await this.ensureInitialized();const{encryptedData:y}=await this._api.encryptData(h);return y}async decryptData(h){await this.ensureInitialized();const{data:y}=await this._api.decryptData({encryptedData:h});return y}async sendMessage(h){await this.ensureInitialized();const{transaction:y}=await this._api.sendMessage({sender:h.sender.toString(),recipient:h.recipient.toString(),amount:h.amount,bounce:h.bounce,payload:h.payload?{abi:h.payload.abi,method:h.payload.method,params:(0,o.serializeTokensObject)(h.payload.params)}:void 0});return{transaction:(0,o.parseTransaction)(y)}}async sendMessageDelayed(h){await this.ensureInitialized();const y=new c.DelayedTransactions,O=await this.subscribe("messageStatusUpdated");O.on("data",T=>{!T.address.equals(h.sender)||y.fillTransaction(T.hash,T.transaction)});const{message:x}=await this._api.sendMessageDelayed({sender:h.sender.toString(),recipient:h.recipient.toString(),amount:h.amount,bounce:h.bounce,payload:h.payload?{abi:h.payload.abi,method:h.payload.method,params:(0,o.serializeTokensObject)(h.payload.params)}:void 0}).catch(T=>{throw O.unsubscribe().catch(console.error),T}),k=y.waitTransaction(h.sender,x.hash).finally(()=>O.unsubscribe().catch(console.error));return{messageHash:x.hash,expireAt:x.expireAt,transaction:k}}_registerEventHandlers(h){const y={connected:O=>O,disconnected:O=>O,transactionsFound:O=>({address:new c.Address(O.address),transactions:O.transactions.map(o.parseTransaction),info:O.info}),contractStateChanged:O=>({address:new c.Address(O.address),state:O.state}),messageStatusUpdated:O=>({address:new c.Address(O.address),hash:O.hash,transaction:O.transaction!=null?(0,o.parseTransaction)(O.transaction):void 0}),networkChanged:O=>O,permissionsChanged:O=>({permissions:(0,o.parsePermissions)(O.permissions)}),loggedOut:O=>O};for(const[O,x]of Object.entries(y))h.addListener(O,k=>{const T=this._subscriptions[O],R=x(k);for(const F of T.values())F(R)})}}e.ProviderRpcClient=m;class w extends Error{constructor(){super("Everscale provider was not found")}}e.ProviderNotFoundException=w;class S extends Error{constructor(){super("Everscale provider was not initialized yet")}}e.ProviderNotInitializedException=S;function M(A,h){const y={state:!1,transactions:!1},O=Object.assign({},y);for(const x of A){if(O.transactions&&O.state)break;y.state||(y.state=x.state),y.transactions||(y.transactions=x.transactions),x!==h&&(O.state||(O.state=x.state),O.transactions||(O.transactions=x.transactions))}return{total:y,withoutExcluded:O}}})(C);var _e={},dt={};(function(e){var t=B&&B.__awaiter||function(r,a,v,q){function j(re){return re instanceof v?re:new v(function(ue){ue(re)})}return new(v||(v=Promise))(function(re,ue){function lr(ie){try{Ne(q.next(ie))}catch(ze){ue(ze)}}function dr(ie){try{Ne(q.throw(ie))}catch(ze){ue(ze)}}function Ne(ie){ie.done?re(ie.value):j(ie.value).then(lr,dr)}Ne((q=q.apply(r,a||[])).next())})};Object.defineProperty(e,"__esModule",{value:!0}),e.builderOpInteger=e.BocErrorCode=e.bocCacheTypeUnpinned=e.bocCacheTypePinned=e.AbiModule=e.messageSourceEncodingParams=e.messageSourceEncoded=e.stateInitSourceTvc=e.stateInitSourceStateInit=e.stateInitSourceMessage=e.MessageBodyType=e.signerSigningBox=e.signerKeys=e.signerExternal=e.signerNone=e.abiSerialized=e.abiHandle=e.abiJson=e.abiContract=e.AbiErrorCode=e.CryptoModule=e.resultOfAppEncryptionBoxDecrypt=e.resultOfAppEncryptionBoxEncrypt=e.resultOfAppEncryptionBoxGetInfo=e.paramsOfAppEncryptionBoxDecrypt=e.paramsOfAppEncryptionBoxEncrypt=e.paramsOfAppEncryptionBoxGetInfo=e.resultOfAppSigningBoxSign=e.resultOfAppSigningBoxGetPublicKey=e.paramsOfAppSigningBoxSign=e.paramsOfAppSigningBoxGetPublicKey=e.resultOfAppPasswordProviderGetPassword=e.paramsOfAppPasswordProviderGetPassword=e.boxEncryptionAlgorithmNaclSecretBox=e.boxEncryptionAlgorithmNaclBox=e.boxEncryptionAlgorithmChaCha20=e.cryptoBoxSecretEncryptedSecret=e.cryptoBoxSecretPredefinedSeedPhrase=e.cryptoBoxSecretRandomSeedPhrase=e.CipherMode=e.encryptionAlgorithmNaclSecretBox=e.encryptionAlgorithmNaclBox=e.encryptionAlgorithmChaCha20=e.encryptionAlgorithmAES=e.CryptoErrorCode=e.ClientModule=e.appRequestResultOk=e.appRequestResultError=e.NetworkQueriesProtocol=e.ClientErrorCode=void 0,e.resultOfAppDebotBrowserInput=e.paramsOfAppDebotBrowserApprove=e.paramsOfAppDebotBrowserSend=e.paramsOfAppDebotBrowserInvokeDebot=e.paramsOfAppDebotBrowserGetSigningBox=e.paramsOfAppDebotBrowserInput=e.paramsOfAppDebotBrowserShowAction=e.paramsOfAppDebotBrowserSwitchCompleted=e.paramsOfAppDebotBrowserSwitch=e.paramsOfAppDebotBrowserLog=e.debotActivityTransaction=e.DebotErrorCode=e.NetModule=e.AggregationFn=e.paramsOfQueryOperationQueryCounterparties=e.paramsOfQueryOperationAggregateCollection=e.paramsOfQueryOperationWaitForCollection=e.paramsOfQueryOperationQueryCollection=e.SortDirection=e.NetErrorCode=e.TvmModule=e.accountForExecutorAccount=e.accountForExecutorUninit=e.accountForExecutorNone=e.TvmErrorCode=e.UtilsModule=e.AccountAddressType=e.addressStringFormatBase64=e.addressStringFormatHex=e.addressStringFormatAccountId=e.ProcessingModule=e.processingEventRempError=e.processingEventRempOther=e.processingEventRempIncludedIntoAcceptedBlock=e.processingEventRempIncludedIntoBlock=e.processingEventRempSentToValidators=e.processingEventMessageExpired=e.processingEventFetchNextBlockFailed=e.processingEventWillFetchNextBlock=e.processingEventSendFailed=e.processingEventDidSend=e.processingEventWillSend=e.processingEventFetchFirstBlockFailed=e.processingEventWillFetchFirstBlock=e.ProcessingErrorCode=e.BocModule=e.builderOpAddress=e.builderOpCellBoc=e.builderOpCell=e.builderOpBitString=void 0,e.ProofsModule=e.ProofsErrorCode=e.DebotModule=e.resultOfAppDebotBrowserApprove=e.resultOfAppDebotBrowserInvokeDebot=e.resultOfAppDebotBrowserGetSigningBox=void 0,function(r){r[r.NotImplemented=1]="NotImplemented",r[r.InvalidHex=2]="InvalidHex",r[r.InvalidBase64=3]="InvalidBase64",r[r.InvalidAddress=4]="InvalidAddress",r[r.CallbackParamsCantBeConvertedToJson=5]="CallbackParamsCantBeConvertedToJson",r[r.WebsocketConnectError=6]="WebsocketConnectError",r[r.WebsocketReceiveError=7]="WebsocketReceiveError",r[r.WebsocketSendError=8]="WebsocketSendError",r[r.HttpClientCreateError=9]="HttpClientCreateError",r[r.HttpRequestCreateError=10]="HttpRequestCreateError",r[r.HttpRequestSendError=11]="HttpRequestSendError",r[r.HttpRequestParseError=12]="HttpRequestParseError",r[r.CallbackNotRegistered=13]="CallbackNotRegistered",r[r.NetModuleNotInit=14]="NetModuleNotInit",r[r.InvalidConfig=15]="InvalidConfig",r[r.CannotCreateRuntime=16]="CannotCreateRuntime",r[r.InvalidContextHandle=17]="InvalidContextHandle",r[r.CannotSerializeResult=18]="CannotSerializeResult",r[r.CannotSerializeError=19]="CannotSerializeError",r[r.CannotConvertJsValueToJson=20]="CannotConvertJsValueToJson",r[r.CannotReceiveSpawnedResult=21]="CannotReceiveSpawnedResult",r[r.SetTimerError=22]="SetTimerError",r[r.InvalidParams=23]="InvalidParams",r[r.ContractsAddressConversionFailed=24]="ContractsAddressConversionFailed",r[r.UnknownFunction=25]="UnknownFunction",r[r.AppRequestError=26]="AppRequestError",r[r.NoSuchRequest=27]="NoSuchRequest",r[r.CanNotSendRequestResult=28]="CanNotSendRequestResult",r[r.CanNotReceiveRequestResult=29]="CanNotReceiveRequestResult",r[r.CanNotParseRequestResult=30]="CanNotParseRequestResult",r[r.UnexpectedCallbackResponse=31]="UnexpectedCallbackResponse",r[r.CanNotParseNumber=32]="CanNotParseNumber",r[r.InternalError=33]="InternalError",r[r.InvalidHandle=34]="InvalidHandle",r[r.LocalStorageError=35]="LocalStorageError"}(e.ClientErrorCode||(e.ClientErrorCode={})),function(r){r.HTTP="HTTP",r.WS="WS"}(e.NetworkQueriesProtocol||(e.NetworkQueriesProtocol={}));function n(r){return{type:"Error",text:r}}e.appRequestResultError=n;function i(r){return{type:"Ok",result:r}}e.appRequestResultOk=i;class s{constructor(a){this.client=a}get_api_reference(){return this.client.request("client.get_api_reference")}version(){return this.client.request("client.version")}config(){return this.client.request("client.config")}build_info(){return this.client.request("client.build_info")}resolve_app_request(a){return this.client.request("client.resolve_app_request",a)}}e.ClientModule=s,function(r){r[r.InvalidPublicKey=100]="InvalidPublicKey",r[r.InvalidSecretKey=101]="InvalidSecretKey",r[r.InvalidKey=102]="InvalidKey",r[r.InvalidFactorizeChallenge=106]="InvalidFactorizeChallenge",r[r.InvalidBigInt=107]="InvalidBigInt",r[r.ScryptFailed=108]="ScryptFailed",r[r.InvalidKeySize=109]="InvalidKeySize",r[r.NaclSecretBoxFailed=110]="NaclSecretBoxFailed",r[r.NaclBoxFailed=111]="NaclBoxFailed",r[r.NaclSignFailed=112]="NaclSignFailed",r[r.Bip39InvalidEntropy=113]="Bip39InvalidEntropy",r[r.Bip39InvalidPhrase=114]="Bip39InvalidPhrase",r[r.Bip32InvalidKey=115]="Bip32InvalidKey",r[r.Bip32InvalidDerivePath=116]="Bip32InvalidDerivePath",r[r.Bip39InvalidDictionary=117]="Bip39InvalidDictionary",r[r.Bip39InvalidWordCount=118]="Bip39InvalidWordCount",r[r.MnemonicGenerationFailed=119]="MnemonicGenerationFailed",r[r.MnemonicFromEntropyFailed=120]="MnemonicFromEntropyFailed",r[r.SigningBoxNotRegistered=121]="SigningBoxNotRegistered",r[r.InvalidSignature=122]="InvalidSignature",r[r.EncryptionBoxNotRegistered=123]="EncryptionBoxNotRegistered",r[r.InvalidIvSize=124]="InvalidIvSize",r[r.UnsupportedCipherMode=125]="UnsupportedCipherMode",r[r.CannotCreateCipher=126]="CannotCreateCipher",r[r.EncryptDataError=127]="EncryptDataError",r[r.DecryptDataError=128]="DecryptDataError",r[r.IvRequired=129]="IvRequired",r[r.CryptoBoxNotRegistered=130]="CryptoBoxNotRegistered",r[r.InvalidCryptoBoxType=131]="InvalidCryptoBoxType",r[r.CryptoBoxSecretSerializationError=132]="CryptoBoxSecretSerializationError",r[r.CryptoBoxSecretDeserializationError=133]="CryptoBoxSecretDeserializationError",r[r.InvalidNonceSize=134]="InvalidNonceSize"}(e.CryptoErrorCode||(e.CryptoErrorCode={}));function o(r){return{type:"AES",value:r}}e.encryptionAlgorithmAES=o;function c(r){return{type:"ChaCha20",value:r}}e.encryptionAlgorithmChaCha20=c;function u(r){return{type:"NaclBox",value:r}}e.encryptionAlgorithmNaclBox=u;function f(r){return{type:"NaclSecretBox",value:r}}e.encryptionAlgorithmNaclSecretBox=f,function(r){r.CBC="CBC",r.CFB="CFB",r.CTR="CTR",r.ECB="ECB",r.OFB="OFB"}(e.CipherMode||(e.CipherMode={}));function b(r,a){return{type:"RandomSeedPhrase",dictionary:r,wordcount:a}}e.cryptoBoxSecretRandomSeedPhrase=b;function _(r,a,v){return{type:"PredefinedSeedPhrase",phrase:r,dictionary:a,wordcount:v}}e.cryptoBoxSecretPredefinedSeedPhrase=_;function d(r){return{type:"EncryptedSecret",encrypted_secret:r}}e.cryptoBoxSecretEncryptedSecret=d;function l(r){return{type:"ChaCha20",value:r}}e.boxEncryptionAlgorithmChaCha20=l;function g(r){return{type:"NaclBox",value:r}}e.boxEncryptionAlgorithmNaclBox=g;function p(r){return{type:"NaclSecretBox",value:r}}e.boxEncryptionAlgorithmNaclSecretBox=p;function m(r){return{type:"GetPassword",encryption_public_key:r}}e.paramsOfAppPasswordProviderGetPassword=m;function w(r,a){return{type:"GetPassword",encrypted_password:r,app_encryption_pubkey:a}}e.resultOfAppPasswordProviderGetPassword=w;function S(){return{type:"GetPublicKey"}}e.paramsOfAppSigningBoxGetPublicKey=S;function M(r){return{type:"Sign",unsigned:r}}e.paramsOfAppSigningBoxSign=M;function A(r){return{type:"GetPublicKey",public_key:r}}e.resultOfAppSigningBoxGetPublicKey=A;function h(r){return{type:"Sign",signature:r}}e.resultOfAppSigningBoxSign=h;function y(){return{type:"GetInfo"}}e.paramsOfAppEncryptionBoxGetInfo=y;function O(r){return{type:"Encrypt",data:r}}e.paramsOfAppEncryptionBoxEncrypt=O;function x(r){return{type:"Decrypt",data:r}}e.paramsOfAppEncryptionBoxDecrypt=x;function k(r){return{type:"GetInfo",info:r}}e.resultOfAppEncryptionBoxGetInfo=k;function T(r){return{type:"Encrypt",data:r}}e.resultOfAppEncryptionBoxEncrypt=T;function R(r){return{type:"Decrypt",data:r}}e.resultOfAppEncryptionBoxDecrypt=R;function F(r,a,v,q){return t(this,void 0,void 0,function*(){try{let j={};switch(a.type){case"GetPassword":j=yield r.get_password(a);break}q.resolve_app_request(v,Object.assign({type:a.type},j))}catch(j){q.reject_app_request(v,j)}})}function H(r,a,v,q){return t(this,void 0,void 0,function*(){try{let j={};switch(a.type){case"GetPublicKey":j=yield r.get_public_key();break;case"Sign":j=yield r.sign(a);break}q.resolve_app_request(v,Object.assign({type:a.type},j))}catch(j){q.reject_app_request(v,j)}})}function X(r,a,v,q){return t(this,void 0,void 0,function*(){try{let j={};switch(a.type){case"GetInfo":j=yield r.get_info();break;case"Encrypt":j=yield r.encrypt(a);break;case"Decrypt":j=yield r.decrypt(a);break}q.resolve_app_request(v,Object.assign({type:a.type},j))}catch(j){q.reject_app_request(v,j)}})}class ${constructor(a){this.client=a}factorize(a){return this.client.request("crypto.factorize",a)}modular_power(a){return this.client.request("crypto.modular_power",a)}ton_crc16(a){return this.client.request("crypto.ton_crc16",a)}generate_random_bytes(a){return this.client.request("crypto.generate_random_bytes",a)}convert_public_key_to_ton_safe_format(a){return this.client.request("crypto.convert_public_key_to_ton_safe_format",a)}generate_random_sign_keys(){return this.client.request("crypto.generate_random_sign_keys")}sign(a){return this.client.request("crypto.sign",a)}verify_signature(a){return this.client.request("crypto.verify_signature",a)}sha256(a){return this.client.request("crypto.sha256",a)}sha512(a){return this.client.request("crypto.sha512",a)}scrypt(a){return this.client.request("crypto.scrypt",a)}nacl_sign_keypair_from_secret_key(a){return this.client.request("crypto.nacl_sign_keypair_from_secret_key",a)}nacl_sign(a){return this.client.request("crypto.nacl_sign",a)}nacl_sign_open(a){return this.client.request("crypto.nacl_sign_open",a)}nacl_sign_detached(a){return this.client.request("crypto.nacl_sign_detached",a)}nacl_sign_detached_verify(a){return this.client.request("crypto.nacl_sign_detached_verify",a)}nacl_box_keypair(){return this.client.request("crypto.nacl_box_keypair")}nacl_box_keypair_from_secret_key(a){return this.client.request("crypto.nacl_box_keypair_from_secret_key",a)}nacl_box(a){return this.client.request("crypto.nacl_box",a)}nacl_box_open(a){return this.client.request("crypto.nacl_box_open",a)}nacl_secret_box(a){return this.client.request("crypto.nacl_secret_box",a)}nacl_secret_box_open(a){return this.client.request("crypto.nacl_secret_box_open",a)}mnemonic_words(a){return this.client.request("crypto.mnemonic_words",a)}mnemonic_from_random(a){return this.client.request("crypto.mnemonic_from_random",a)}mnemonic_from_entropy(a){return this.client.request("crypto.mnemonic_from_entropy",a)}mnemonic_verify(a){return this.client.request("crypto.mnemonic_verify",a)}mnemonic_derive_sign_keys(a){return this.client.request("crypto.mnemonic_derive_sign_keys",a)}hdkey_xprv_from_mnemonic(a){return this.client.request("crypto.hdkey_xprv_from_mnemonic",a)}hdkey_derive_from_xprv(a){return this.client.request("crypto.hdkey_derive_from_xprv",a)}hdkey_derive_from_xprv_path(a){return this.client.request("crypto.hdkey_derive_from_xprv_path",a)}hdkey_secret_from_xprv(a){return this.client.request("crypto.hdkey_secret_from_xprv",a)}hdkey_public_from_xprv(a){return this.client.request("crypto.hdkey_public_from_xprv",a)}chacha20(a){return this.client.request("crypto.chacha20",a)}create_crypto_box(a,v){return this.client.request("crypto.create_crypto_box",a,(q,j)=>{j===3?F(v,q.request_data,q.app_request_id,this.client):j===4&&F(v,q,null,this.client)})}remove_crypto_box(a){return this.client.request("crypto.remove_crypto_box",a)}get_crypto_box_info(a){return this.client.request("crypto.get_crypto_box_info",a)}get_crypto_box_seed_phrase(a){return this.client.request("crypto.get_crypto_box_seed_phrase",a)}get_signing_box_from_crypto_box(a){return this.client.request("crypto.get_signing_box_from_crypto_box",a)}get_encryption_box_from_crypto_box(a){return this.client.request("crypto.get_encryption_box_from_crypto_box",a)}clear_crypto_box_secret_cache(a){return this.client.request("crypto.clear_crypto_box_secret_cache",a)}register_signing_box(a){return this.client.request("crypto.register_signing_box",void 0,(v,q)=>{q===3?H(a,v.request_data,v.app_request_id,this.client):q===4&&H(a,v,null,this.client)})}get_signing_box(a){return this.client.request("crypto.get_signing_box",a)}signing_box_get_public_key(a){return this.client.request("crypto.signing_box_get_public_key",a)}signing_box_sign(a){return this.client.request("crypto.signing_box_sign",a)}remove_signing_box(a){return this.client.request("crypto.remove_signing_box",a)}register_encryption_box(a){return this.client.request("crypto.register_encryption_box",void 0,(v,q)=>{q===3?X(a,v.request_data,v.app_request_id,this.client):q===4&&X(a,v,null,this.client)})}remove_encryption_box(a){return this.client.request("crypto.remove_encryption_box",a)}encryption_box_get_info(a){return this.client.request("crypto.encryption_box_get_info",a)}encryption_box_encrypt(a){return this.client.request("crypto.encryption_box_encrypt",a)}encryption_box_decrypt(a){return this.client.request("crypto.encryption_box_decrypt",a)}create_encryption_box(a){return this.client.request("crypto.create_encryption_box",a)}}e.CryptoModule=$,function(r){r[r.RequiredAddressMissingForEncodeMessage=301]="RequiredAddressMissingForEncodeMessage",r[r.RequiredCallSetMissingForEncodeMessage=302]="RequiredCallSetMissingForEncodeMessage",r[r.InvalidJson=303]="InvalidJson",r[r.InvalidMessage=304]="InvalidMessage",r[r.EncodeDeployMessageFailed=305]="EncodeDeployMessageFailed",r[r.EncodeRunMessageFailed=306]="EncodeRunMessageFailed",r[r.AttachSignatureFailed=307]="AttachSignatureFailed",r[r.InvalidTvcImage=308]="InvalidTvcImage",r[r.RequiredPublicKeyMissingForFunctionHeader=309]="RequiredPublicKeyMissingForFunctionHeader",r[r.InvalidSigner=310]="InvalidSigner",r[r.InvalidAbi=311]="InvalidAbi",r[r.InvalidFunctionId=312]="InvalidFunctionId",r[r.InvalidData=313]="InvalidData",r[r.EncodeInitialDataFailed=314]="EncodeInitialDataFailed",r[r.InvalidFunctionName=315]="InvalidFunctionName"}(e.AbiErrorCode||(e.AbiErrorCode={}));function ke(r){return{type:"Contract",value:r}}e.abiContract=ke;function ce(r){return{type:"Json",value:r}}e.abiJson=ce;function en(r){return{type:"Handle",value:r}}e.abiHandle=en;function tn(r){return{type:"Serialized",value:r}}e.abiSerialized=tn;function nn(){return{type:"None"}}e.signerNone=nn;function rn(r){return{type:"External",public_key:r}}e.signerExternal=rn;function sn(r){return{type:"Keys",keys:r}}e.signerKeys=sn;function an(r){return{type:"SigningBox",handle:r}}e.signerSigningBox=an,function(r){r.Input="Input",r.Output="Output",r.InternalOutput="InternalOutput",r.Event="Event"}(e.MessageBodyType||(e.MessageBodyType={}));function on(r){return{type:"Message",source:r}}e.stateInitSourceMessage=on;function cn(r,a,v){return{type:"StateInit",code:r,data:a,library:v}}e.stateInitSourceStateInit=cn;function un(r,a,v){return{type:"Tvc",tvc:r,public_key:a,init_params:v}}e.stateInitSourceTvc=un;function ln(r,a){return{type:"Encoded",message:r,abi:a}}e.messageSourceEncoded=ln;function dn(r){return Object.assign({type:"EncodingParams"},r)}e.messageSourceEncodingParams=dn;class gn{constructor(a){this.client=a}encode_message_body(a){return this.client.request("abi.encode_message_body",a)}attach_signature_to_message_body(a){return this.client.request("abi.attach_signature_to_message_body",a)}encode_message(a){return this.client.request("abi.encode_message",a)}encode_internal_message(a){return this.client.request("abi.encode_internal_message",a)}attach_signature(a){return this.client.request("abi.attach_signature",a)}decode_message(a){return this.client.request("abi.decode_message",a)}decode_message_body(a){return this.client.request("abi.decode_message_body",a)}encode_account(a){return this.client.request("abi.encode_account",a)}decode_account_data(a){return this.client.request("abi.decode_account_data",a)}update_initial_data(a){return this.client.request("abi.update_initial_data",a)}encode_initial_data(a){return this.client.request("abi.encode_initial_data",a)}decode_initial_data(a){return this.client.request("abi.decode_initial_data",a)}decode_boc(a){return this.client.request("abi.decode_boc",a)}encode_boc(a){return this.client.request("abi.encode_boc",a)}calc_function_id(a){return this.client.request("abi.calc_function_id",a)}}e.AbiModule=gn;function pn(r){return{type:"Pinned",pin:r}}e.bocCacheTypePinned=pn;function hn(){return{type:"Unpinned"}}e.bocCacheTypeUnpinned=hn,function(r){r[r.InvalidBoc=201]="InvalidBoc",r[r.SerializationError=202]="SerializationError",r[r.InappropriateBlock=203]="InappropriateBlock",r[r.MissingSourceBoc=204]="MissingSourceBoc",r[r.InsufficientCacheSize=205]="InsufficientCacheSize",r[r.BocRefNotFound=206]="BocRefNotFound",r[r.InvalidBocRef=207]="InvalidBocRef"}(e.BocErrorCode||(e.BocErrorCode={}));function fn(r,a){return{type:"Integer",size:r,value:a}}e.builderOpInteger=fn;function _n(r){return{type:"BitString",value:r}}e.builderOpBitString=_n;function bn(r){return{type:"Cell",builder:r}}e.builderOpCell=bn;function mn(r){return{type:"CellBoc",boc:r}}e.builderOpCellBoc=mn;function yn(r){return{type:"Address",address:r}}e.builderOpAddress=yn;class wn{constructor(a){this.client=a}parse_message(a){return this.client.request("boc.parse_message",a)}parse_transaction(a){return this.client.request("boc.parse_transaction",a)}parse_account(a){return this.client.request("boc.parse_account",a)}parse_block(a){return this.client.request("boc.parse_block",a)}parse_shardstate(a){return this.client.request("boc.parse_shardstate",a)}get_blockchain_config(a){return this.client.request("boc.get_blockchain_config",a)}get_boc_hash(a){return this.client.request("boc.get_boc_hash",a)}get_boc_depth(a){return this.client.request("boc.get_boc_depth",a)}get_code_from_tvc(a){return this.client.request("boc.get_code_from_tvc",a)}cache_get(a){return this.client.request("boc.cache_get",a)}cache_set(a){return this.client.request("boc.cache_set",a)}cache_unpin(a){return this.client.request("boc.cache_unpin",a)}encode_boc(a){return this.client.request("boc.encode_boc",a)}get_code_salt(a){return this.client.request("boc.get_code_salt",a)}set_code_salt(a){return this.client.request("boc.set_code_salt",a)}decode_tvc(a){return this.client.request("boc.decode_tvc",a)}encode_tvc(a){return this.client.request("boc.encode_tvc",a)}encode_external_in_message(a){return this.client.request("boc.encode_external_in_message",a)}get_compiler_version(a){return this.client.request("boc.get_compiler_version",a)}}e.BocModule=wn,function(r){r[r.MessageAlreadyExpired=501]="MessageAlreadyExpired",r[r.MessageHasNotDestinationAddress=502]="MessageHasNotDestinationAddress",r[r.CanNotBuildMessageCell=503]="CanNotBuildMessageCell",r[r.FetchBlockFailed=504]="FetchBlockFailed",r[r.SendMessageFailed=505]="SendMessageFailed",r[r.InvalidMessageBoc=506]="InvalidMessageBoc",r[r.MessageExpired=507]="MessageExpired",r[r.TransactionWaitTimeout=508]="TransactionWaitTimeout",r[r.InvalidBlockReceived=509]="InvalidBlockReceived",r[r.CanNotCheckBlockShard=510]="CanNotCheckBlockShard",r[r.BlockNotFound=511]="BlockNotFound",r[r.InvalidData=512]="InvalidData",r[r.ExternalSignerMustNotBeUsed=513]="ExternalSignerMustNotBeUsed",r[r.MessageRejected=514]="MessageRejected",r[r.InvalidRempStatus=515]="InvalidRempStatus",r[r.NextRempStatusTimeout=516]="NextRempStatusTimeout"}(e.ProcessingErrorCode||(e.ProcessingErrorCode={}));function vn(){return{type:"WillFetchFirstBlock"}}e.processingEventWillFetchFirstBlock=vn;function On(r){return{type:"FetchFirstBlockFailed",error:r}}e.processingEventFetchFirstBlockFailed=On;function An(r,a,v){return{type:"WillSend",shard_block_id:r,message_id:a,message:v}}e.processingEventWillSend=An;function Sn(r,a,v){return{type:"DidSend",shard_block_id:r,message_id:a,message:v}}e.processingEventDidSend=Sn;function In(r,a,v,q){return{type:"SendFailed",shard_block_id:r,message_id:a,message:v,error:q}}e.processingEventSendFailed=In;function Mn(r,a,v){return{type:"WillFetchNextBlock",shard_block_id:r,message_id:a,message:v}}e.processingEventWillFetchNextBlock=Mn;function xn(r,a,v,q){return{type:"FetchNextBlockFailed",shard_block_id:r,message_id:a,message:v,error:q}}e.processingEventFetchNextBlockFailed=xn;function qn(r,a,v){return{type:"MessageExpired",message_id:r,message:a,error:v}}e.processingEventMessageExpired=qn;function jn(r,a,v){return{type:"RempSentToValidators",message_id:r,timestamp:a,json:v}}e.processingEventRempSentToValidators=jn;function Tn(r,a,v){return{type:"RempIncludedIntoBlock",message_id:r,timestamp:a,json:v}}e.processingEventRempIncludedIntoBlock=Tn;function kn(r,a,v){return{type:"RempIncludedIntoAcceptedBlock",message_id:r,timestamp:a,json:v}}e.processingEventRempIncludedIntoAcceptedBlock=kn;function Bn(r,a,v){return{type:"RempOther",message_id:r,timestamp:a,json:v}}e.processingEventRempOther=Bn;function Pn(r){return{type:"RempError",error:r}}e.processingEventRempError=Pn;class Rn{constructor(a){this.client=a}send_message(a,v){return this.client.request("processing.send_message",a,v)}wait_for_transaction(a,v){return this.client.request("processing.wait_for_transaction",a,v)}process_message(a,v){return this.client.request("processing.process_message",a,v)}}e.ProcessingModule=Rn;function Fn(){return{type:"AccountId"}}e.addressStringFormatAccountId=Fn;function Cn(){return{type:"Hex"}}e.addressStringFormatHex=Cn;function En(r,a,v){return{type:"Base64",url:r,test:a,bounce:v}}e.addressStringFormatBase64=En,function(r){r.AccountId="AccountId",r.Hex="Hex",r.Base64="Base64"}(e.AccountAddressType||(e.AccountAddressType={}));class Dn{constructor(a){this.client=a}convert_address(a){return this.client.request("utils.convert_address",a)}get_address_type(a){return this.client.request("utils.get_address_type",a)}calc_storage_fee(a){return this.client.request("utils.calc_storage_fee",a)}compress_zstd(a){return this.client.request("utils.compress_zstd",a)}decompress_zstd(a){return this.client.request("utils.decompress_zstd",a)}}e.UtilsModule=Dn,function(r){r[r.CanNotReadTransaction=401]="CanNotReadTransaction",r[r.CanNotReadBlockchainConfig=402]="CanNotReadBlockchainConfig",r[r.TransactionAborted=403]="TransactionAborted",r[r.InternalError=404]="InternalError",r[r.ActionPhaseFailed=405]="ActionPhaseFailed",r[r.AccountCodeMissing=406]="AccountCodeMissing",r[r.LowBalance=407]="LowBalance",r[r.AccountFrozenOrDeleted=408]="AccountFrozenOrDeleted",r[r.AccountMissing=409]="AccountMissing",r[r.UnknownExecutionError=410]="UnknownExecutionError",r[r.InvalidInputStack=411]="InvalidInputStack",r[r.InvalidAccountBoc=412]="InvalidAccountBoc",r[r.InvalidMessageType=413]="InvalidMessageType",r[r.ContractExecutionError=414]="ContractExecutionError"}(e.TvmErrorCode||(e.TvmErrorCode={}));function Hn(){return{type:"None"}}e.accountForExecutorNone=Hn;function Nn(){return{type:"Uninit"}}e.accountForExecutorUninit=Nn;function zn(r,a){return{type:"Account",boc:r,unlimited_balance:a}}e.accountForExecutorAccount=zn;class Ln{constructor(a){this.client=a}run_executor(a){return this.client.request("tvm.run_executor",a)}run_tvm(a){return this.client.request("tvm.run_tvm",a)}run_get(a){return this.client.request("tvm.run_get",a)}}e.TvmModule=Ln,function(r){r[r.QueryFailed=601]="QueryFailed",r[r.SubscribeFailed=602]="SubscribeFailed",r[r.WaitForFailed=603]="WaitForFailed",r[r.GetSubscriptionResultFailed=604]="GetSubscriptionResultFailed",r[r.InvalidServerResponse=605]="InvalidServerResponse",r[r.ClockOutOfSync=606]="ClockOutOfSync",r[r.WaitForTimeout=607]="WaitForTimeout",r[r.GraphqlError=608]="GraphqlError",r[r.NetworkModuleSuspended=609]="NetworkModuleSuspended",r[r.WebsocketDisconnected=610]="WebsocketDisconnected",r[r.NotSupported=611]="NotSupported",r[r.NoEndpointsProvided=612]="NoEndpointsProvided",r[r.GraphqlWebsocketInitError=613]="GraphqlWebsocketInitError",r[r.NetworkModuleResumed=614]="NetworkModuleResumed",r[r.Unauthorized=615]="Unauthorized",r[r.QueryTransactionTreeTimeout=616]="QueryTransactionTreeTimeout"}(e.NetErrorCode||(e.NetErrorCode={})),function(r){r.ASC="ASC",r.DESC="DESC"}(e.SortDirection||(e.SortDirection={}));function Wn(r){return Object.assign({type:"QueryCollection"},r)}e.paramsOfQueryOperationQueryCollection=Wn;function Un(r){return Object.assign({type:"WaitForCollection"},r)}e.paramsOfQueryOperationWaitForCollection=Un;function Gn(r){return Object.assign({type:"AggregateCollection"},r)}e.paramsOfQueryOperationAggregateCollection=Gn;function $n(r){return Object.assign({type:"QueryCounterparties"},r)}e.paramsOfQueryOperationQueryCounterparties=$n,function(r){r.COUNT="COUNT",r.MIN="MIN",r.MAX="MAX",r.SUM="SUM",r.AVERAGE="AVERAGE"}(e.AggregationFn||(e.AggregationFn={}));class Qn{constructor(a){this.client=a}query(a){return this.client.request("net.query",a)}batch_query(a){return this.client.request("net.batch_query",a)}query_collection(a){return this.client.request("net.query_collection",a)}aggregate_collection(a){return this.client.request("net.aggregate_collection",a)}wait_for_collection(a){return this.client.request("net.wait_for_collection",a)}unsubscribe(a){return this.client.request("net.unsubscribe",a)}subscribe_collection(a,v){return this.client.request("net.subscribe_collection",a,v)}subscribe(a,v){return this.client.request("net.subscribe",a,v)}suspend(){return this.client.request("net.suspend")}resume(){return this.client.request("net.resume")}find_last_shard_block(a){return this.client.request("net.find_last_shard_block",a)}fetch_endpoints(){return this.client.request("net.fetch_endpoints")}set_endpoints(a){return this.client.request("net.set_endpoints",a)}get_endpoints(){return this.client.request("net.get_endpoints")}query_counterparties(a){return this.client.request("net.query_counterparties",a)}query_transaction_tree(a){return this.client.request("net.query_transaction_tree",a)}create_block_iterator(a){return this.client.request("net.create_block_iterator",a)}resume_block_iterator(a){return this.client.request("net.resume_block_iterator",a)}create_transaction_iterator(a){return this.client.request("net.create_transaction_iterator",a)}resume_transaction_iterator(a){return this.client.request("net.resume_transaction_iterator",a)}iterator_next(a){return this.client.request("net.iterator_next",a)}remove_iterator(a){return this.client.request("net.remove_iterator",a)}}e.NetModule=Qn,function(r){r[r.DebotStartFailed=801]="DebotStartFailed",r[r.DebotFetchFailed=802]="DebotFetchFailed",r[r.DebotExecutionFailed=803]="DebotExecutionFailed",r[r.DebotInvalidHandle=804]="DebotInvalidHandle",r[r.DebotInvalidJsonParams=805]="DebotInvalidJsonParams",r[r.DebotInvalidFunctionId=806]="DebotInvalidFunctionId",r[r.DebotInvalidAbi=807]="DebotInvalidAbi",r[r.DebotGetMethodFailed=808]="DebotGetMethodFailed",r[r.DebotInvalidMsg=809]="DebotInvalidMsg",r[r.DebotExternalCallFailed=810]="DebotExternalCallFailed",r[r.DebotBrowserCallbackFailed=811]="DebotBrowserCallbackFailed",r[r.DebotOperationRejected=812]="DebotOperationRejected",r[r.DebotNoCode=813]="DebotNoCode"}(e.DebotErrorCode||(e.DebotErrorCode={}));function Kn(r,a,v,q,j,re,ue){return{type:"Transaction",msg:r,dst:a,out:v,fee:q,setcode:j,signkey:re,signing_box_handle:ue}}e.debotActivityTransaction=Kn;function Jn(r){return{type:"Log",msg:r}}e.paramsOfAppDebotBrowserLog=Jn;function Vn(r){return{type:"Switch",context_id:r}}e.paramsOfAppDebotBrowserSwitch=Vn;function Yn(){return{type:"SwitchCompleted"}}e.paramsOfAppDebotBrowserSwitchCompleted=Yn;function Xn(r){return{type:"ShowAction",action:r}}e.paramsOfAppDebotBrowserShowAction=Xn;function Zn(r){return{type:"Input",prompt:r}}e.paramsOfAppDebotBrowserInput=Zn;function er(){return{type:"GetSigningBox"}}e.paramsOfAppDebotBrowserGetSigningBox=er;function tr(r,a){return{type:"InvokeDebot",debot_addr:r,action:a}}e.paramsOfAppDebotBrowserInvokeDebot=tr;function nr(r){return{type:"Send",message:r}}e.paramsOfAppDebotBrowserSend=nr;function rr(r){return{type:"Approve",activity:r}}e.paramsOfAppDebotBrowserApprove=rr;function ir(r){return{type:"Input",value:r}}e.resultOfAppDebotBrowserInput=ir;function sr(r){return{type:"GetSigningBox",signing_box:r}}e.resultOfAppDebotBrowserGetSigningBox=sr;function ar(){return{type:"InvokeDebot"}}e.resultOfAppDebotBrowserInvokeDebot=ar;function or(r){return{type:"Approve",approved:r}}e.resultOfAppDebotBrowserApprove=or;function ht(r,a,v,q){return t(this,void 0,void 0,function*(){try{let j={};switch(a.type){case"Log":r.log(a);break;case"Switch":r.switch(a);break;case"SwitchCompleted":r.switch_completed();break;case"ShowAction":r.show_action(a);break;case"Input":j=yield r.input(a);break;case"GetSigningBox":j=yield r.get_signing_box();break;case"InvokeDebot":yield r.invoke_debot(a);break;case"Send":r.send(a);break;case"Approve":j=yield r.approve(a);break}q.resolve_app_request(v,Object.assign({type:a.type},j))}catch(j){q.reject_app_request(v,j)}})}class cr{constructor(a){this.client=a}init(a,v){return this.client.request("debot.init",a,(q,j)=>{j===3?ht(v,q.request_data,q.app_request_id,this.client):j===4&&ht(v,q,null,this.client)})}start(a){return this.client.request("debot.start",a)}fetch(a){return this.client.request("debot.fetch",a)}execute(a){return this.client.request("debot.execute",a)}send(a){return this.client.request("debot.send",a)}remove(a){return this.client.request("debot.remove",a)}}e.DebotModule=cr,function(r){r[r.InvalidData=901]="InvalidData",r[r.ProofCheckFailed=902]="ProofCheckFailed",r[r.InternalError=903]="InternalError",r[r.DataDiffersFromProven=904]="DataDiffersFromProven"}(e.ProofsErrorCode||(e.ProofsErrorCode={}));class ur{constructor(a){this.client=a}proof_block_data(a){return this.client.request("proofs.proof_block_data",a)}proof_transaction_data(a){return this.client.request("proofs.proof_transaction_data",a)}proof_message_data(a){return this.client.request("proofs.proof_message_data",a)}}e.ProofsModule=ur})(dt);var De={},Pt={},He={};Object.defineProperty(He,"__esModule",{value:!0});He.TonClientError=void 0;class Xr extends Error{constructor(t,n,i){super(n),this.code=t,this.data=i}}He.TonClientError=Xr;(function(e){var t=B&&B.__awaiter||function(b,_,d,l){function g(p){return p instanceof d?p:new d(function(m){m(p)})}return new(d||(d=Promise))(function(p,m){function w(A){try{M(l.next(A))}catch(h){m(h)}}function S(A){try{M(l.throw(A))}catch(h){m(h)}}function M(A){A.done?p(A.value):g(A.value).then(w,S)}M((l=l.apply(b,_||[])).next())})};Object.defineProperty(e,"__esModule",{value:!0}),e.CommonBinaryBridge=e.useLibrary=e.getBridge=e.ResponseType=void 0;const n=He;var i;(function(b){b[b.Success=0]="Success",b[b.Error=1]="Error",b[b.Nop=2]="Nop",b[b.AppRequest=3]="AppRequest",b[b.AppNotify=4]="AppNotify",b[b.Custom=100]="Custom"})(i=e.ResponseType||(e.ResponseType={}));let s;function o(){if(!s)throw new n.TonClientError(1,"TON Client binary bridge isn't set.");return s}e.getBridge=o;function c(b){"createContext"in b?s=b:s=new f(b)}e.useLibrary=c;class u{constructor(_){this.library=_}setResponseParamsHandler(_){_===void 0?this.library.setResponseHandler(void 0):this.library.setResponseHandler((d,l,g,p)=>_(d,l!==""?JSON.parse(l):void 0,g,p))}sendRequestParams(_,d,l,g){const p=g==null?"":JSON.stringify(g,(m,w)=>typeof w=="bigint"?w<Number.MAX_SAFE_INTEGER&&w>Number.MIN_SAFE_INTEGER?Number(w):w.toString():w);this.library.sendRequest(_,d,l,p)}createContext(_){return this.library.createContext(_)}destroyContext(_){this.library.destroyContext(_)}}class f{constructor(_){this.loading=void 0,this.loadError=void 0,this.library=void 0,this.requests=new Map,this.nextRequestId=1,this.contextCount=0,this.responseHandlerAssigned=!1,this.loading=[],_().then(d=>{const l=this.loading;this.loading=void 0;let g="setResponseParamsHandler"in d?d:new u(d);this.library=g,l?.forEach(p=>p.resolve(g))},d=>{const l=this.loading;this.loading=void 0,this.loadError=d??void 0,l?.forEach(g=>g.reject(d))})}checkResponseHandler(){var _,d;const l=this.contextCount>0||this.requests.size>0;this.responseHandlerAssigned!==l&&(l?(_=this.library)===null||_===void 0||_.setResponseParamsHandler((g,p,m,w)=>this.handleLibraryResponse(g,p,m,w)):(d=this.library)===null||d===void 0||d.setResponseParamsHandler(),this.responseHandlerAssigned=l)}createContext(_){return t(this,void 0,void 0,function*(){const d=this.library||(yield this.loadRequired());return this.contextCount+=1,f.parseResult(yield d.createContext(JSON.stringify(_)))})}destroyContext(_){var d;this.contextCount=Math.max(this.contextCount-1,0),this.checkResponseHandler(),(d=this.library)===null||d===void 0||d.destroyContext(_)}request(_,d,l,g){var p;return t(this,void 0,void 0,function*(){const m=(p=this.library)!==null&&p!==void 0?p:yield this.loadRequired();return new Promise((w,S)=>{const M={resolve:w,reject:S,responseHandler:g},A=this.generateRequestId();this.requests.set(A,M),this.checkResponseHandler(),m.sendRequestParams(_,A,d,l)})})}loadRequired(){return this.library!==void 0?Promise.resolve(this.library):this.loadError!==void 0?Promise.reject(this.loadError):this.loading===void 0?Promise.reject(new n.TonClientError(1,"TON Client binary library isn't set.")):new Promise((_,d)=>{var l;(l=this.loading)===null||l===void 0||l.push({resolve:_,reject:d})})}generateRequestId(){const _=this.nextRequestId;do this.nextRequestId+=1,this.nextRequestId>=Number.MAX_SAFE_INTEGER&&(this.nextRequestId=1);while(this.requests.has(this.nextRequestId));return _}handleLibraryResponse(_,d,l,g){const p=this.requests.get(_);if(!!p)switch(g&&(this.requests.delete(_),this.checkResponseHandler()),l){case i.Success:p.resolve(d);break;case i.Error:p.reject(d);break;default:(l===i.AppNotify||l===i.AppRequest||l>=i.Custom)&&p.responseHandler&&p.responseHandler(d,l)}}static parseResult(_){const d=JSON.parse(_);if("error"in d)throw new n.TonClientError(d.error.code,d.error.message,d.error.data);return d.result}}e.CommonBinaryBridge=f})(Pt);var ye=B&&B.__awaiter||function(e,t,n,i){function s(o){return o instanceof n?o:new n(function(c){c(o)})}return new(n||(n=Promise))(function(o,c){function u(_){try{b(i.next(_))}catch(d){c(d)}}function f(_){try{b(i.throw(_))}catch(d){c(d)}}function b(_){_.done?o(_.value):s(_.value).then(u,f)}b((i=i.apply(e,t||[])).next())})};Object.defineProperty(De,"__esModule",{value:!0});De.TonClient=void 0;const Y=dt,Be=Pt;class Te{constructor(t){this.context=void 0,this.contextCreation=void 0,this.contextError=void 0,this.config=t??{},this.client=new Y.ClientModule(this),this.crypto=new Y.CryptoModule(this),this.abi=new Y.AbiModule(this),this.boc=new Y.BocModule(this),this.processing=new Y.ProcessingModule(this),this.utils=new Y.UtilsModule(this),this.net=new Y.NetModule(this),this.tvm=new Y.TvmModule(this),this.proofs=new Y.ProofsModule(this)}static set default(t){this._default=t}static get default(){return this._default===null&&(this._default=new Te(this._defaultConfig)),this._default}static set defaultConfig(t){this._defaultConfig=t}static get defaultConfig(){return this._defaultConfig}static useBinaryLibrary(t){(0,Be.useLibrary)(t)}static toKey(t){return le(t,256)}static toHash64(t){return le(t,64)}static toHash128(t){return le(t,128)}static toHash256(t){return le(t,256)}static toHash512(t){return le(t,512)}static toHex(t,n=0){return le(t,n)}close(){const t=this.context;t!==void 0&&(this.context=void 0,(0,Be.getBridge)().destroyContext(t))}resolveError(t,n,i){var s,o;return ye(this,void 0,void 0,function*(){if(i.code!==23||!(!((s=i.data)===null||s===void 0)&&s.suggest_use_helper_for))return i;try{let m=function(w,S,M){switch(w.type){case"Array":Array.isArray(S)&&S.forEach(y=>m(w.array_item,y,`${M}[i]`));break;case"Struct":w.struct_fields.forEach(y=>m(y,S[y.name],M?`${M}.${y.name}`:y.name));break;case"Optional":S&&m(w.optional_inner,S,M);break;case"Ref":w.ref_name!="Value"&&w.ref_name!="API"&&w.ref_name!="AbiParam"&&m(_[w.ref_name],S,M);break;case"EnumOfTypes":if(w.enum_types.some(y=>y.name==S.type))return;let A=w.name.toLowerCase(),h=[];w.enum_types.forEach(y=>h.push(A+y.name)),i.message=`Consider using one of the helper methods (${h.join(", ")}) for the "${M}" parameter
`+i.message;break;default:break}};const[c,u]=t.split("."),f=(yield this.client.get_api_reference()).api,b=f.modules.reduce((w,S)=>w.concat(S.types),[]),_={};b.forEach(w=>_[w.name]=w);const g=f.modules.find(w=>w.name===c).functions.find(w=>w.name===u).params[1];if(!g||g.generic_name=="AppObject")return i;const p=_[g.ref_name];m(p,n,"")}catch(c){i.message=(o=c.message)!==null&&o!==void 0?o:`${c}`}return i})}contextRequired(){return this.context!==void 0?Promise.resolve(this.context):this.contextError!==void 0?Promise.reject(this.contextError):(this.contextCreation===void 0&&(this.contextCreation=[],(0,Be.getBridge)().createContext(this.config).then(t=>{const n=this.contextCreation;this.contextCreation=void 0,this.context=t,n?.forEach(i=>i.resolve(t))},t=>{const n=this.contextCreation;this.contextCreation=void 0,this.contextError=t??void 0,n?.forEach(i=>i.reject(t))})),new Promise((t,n)=>{var i;(i=this.contextCreation)===null||i===void 0||i.push({resolve:t,reject:n})}))}request(t,n,i){var s;return ye(this,void 0,void 0,function*(){const o=(s=this.context)!==null&&s!==void 0?s:yield this.contextRequired();return(0,Be.getBridge)().request(o,t,n,i??(()=>{})).catch(c=>ye(this,void 0,void 0,function*(){throw yield this.resolveError(t,n,c)}))})}resolve_app_request(t,n){return ye(this,void 0,void 0,function*(){t&&(yield this.client.resolve_app_request({app_request_id:t,result:{type:"Ok",result:n}}))})}reject_app_request(t,n){return ye(this,void 0,void 0,function*(){t&&(yield this.client.resolve_app_request({app_request_id:t,result:{type:"Error",text:n.message}}))})}}De.TonClient=Te;Te._defaultConfig={};Te._default=null;function le(e,t){let n;typeof e=="number"||typeof e=="bigint"?n=e.toString(16):typeof e=="string"?e.startsWith("0x")?n=e.substring(2):n=Zr(e):n=e.toString();let i=t/4;for(;n.length>i&&n.startsWith("0");)n=n.substring(1);return n.padStart(i,"0")}function Zr(e){var t;let n=[];for(let s=0;s<e.length;s+=1){const o=((t=e.codePointAt(s))!==null&&t!==void 0?t:0)-48,c=yt(n,3),u=yt(n,1),f=wt(c,u);n=wt(f,[o])}let i="";for(let s=n.length-1;s>=0;s-=1)i+=n[s].toString(16).padStart(4,"0");return i}function yt(e,t){let n=0;const i=[];for(let s=0;s<e.length;s+=1){let o=(e[s]<<t)+n;i.push(o&65535),n=o>>16&65535}return n>0&&i.push(n),i}function wt(e,t){let n=0;const i=[],s=Math.max(e.length,t.length);for(let o=0;o<s;o+=1){let c=(o<e.length?e[o]:0)+(o<t.length?t[o]:0)+n;i.push(c&65535),n=c>>16&65535}return n>0&&i.push(n),i}(function(e){var t=B&&B.__createBinding||(Object.create?function(i,s,o,c){c===void 0&&(c=o);var u=Object.getOwnPropertyDescriptor(s,o);(!u||("get"in u?!s.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return s[o]}}),Object.defineProperty(i,c,u)}:function(i,s,o,c){c===void 0&&(c=o),i[c]=s[o]}),n=B&&B.__exportStar||function(i,s){for(var o in i)o!=="default"&&!Object.prototype.hasOwnProperty.call(s,o)&&t(s,i,o)};Object.defineProperty(e,"__esModule",{value:!0}),n(dt,e),n(De,e)})(_e);const ei=`//****************************************************************** WRAPPER BEGIN

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
`;async function ti(){let e;{const t=fetch("/eversdk.wasm");if(WebAssembly.compileStreaming)return await WebAssembly.compileStreaming(t);e=await WebAssembly.compile(await(await t).arrayBuffer())}await init(e)}function ni(){const e=new Blob([ei],{type:"application/javascript"}),t=URL.createObjectURL(e),n=new Worker(t);let i=1;const s=new Map;let o=!1,c=null;return n.onmessage=u=>{const f=u.data;switch(f.type){case"init":o=!0;for(const[_,d]of s.entries())n.postMessage({type:"createContext",requestId:_,configJson:d.configJson});break;case"createContext":const b=s.get(f.requestId);b&&(s.delete(f.requestId),b.resolve(f.result));break;case"destroyContext":break;case"response":c&&c(f.requestId,f.params,f.responseType,f.finished);break}},n.onerror=u=>{console.log(`Error from Web Worker: ${u.message}`)},(async()=>n.postMessage({type:"init",wasmModule:await ti()}))(),Promise.resolve({setResponseParamsHandler:u=>{c=u},createContext:u=>new Promise(f=>{const b=i;i+=1,s.set(b,{configJson:u,resolve:f}),o&&n.postMessage({type:"createContext",requestId:b,configJson:u})}),destroyContext:u=>{n.postMessage({type:"destroyContext",context:u})},sendRequestParams:(u,f,b,_)=>{n.postMessage({type:"request",context:u,requestId:f,functionName:b,functionParams:_})}})}function ri(){return ni()}var Rt={},Ft={};(function(e){var t=B&&B.__awaiter||function(_,d,l,g){function p(m){return m instanceof l?m:new l(function(w){w(m)})}return new(l||(l=Promise))(function(m,w){function S(h){try{A(g.next(h))}catch(y){w(y)}}function M(h){try{A(g.throw(h))}catch(y){w(y)}}function A(h){h.done?m(h.value):p(h.value).then(S,M)}A((g=g.apply(_,d||[])).next())})};Object.defineProperty(e,"__esModule",{value:!0}),e.DefaultGiverContract=e.Account=e.AccountType=e.AccountError=void 0;const n=_e;var i;(function(_){_[_.MISSING_TVC=0]="MISSING_TVC",_[_.ACC_NOT_EXISTS=1]="ACC_NOT_EXISTS"})(i||(i={}));class s extends Error{constructor(d){super(d.message),this.code=d.code}static missingTVC(){return new s({code:i.MISSING_TVC,message:"Can't calculate deploy params: missing required TVC."})}static missingBOC(){return new s({code:i.ACC_NOT_EXISTS,message:'Account has an empty BOC. Possible reason is: account was deleted (has account type "NonExist")'})}}e.AccountError=s;var o;(function(_){_[_.uninit=0]="uninit",_[_.active=1]="active",_[_.frozen=2]="frozen",_[_.nonExist=3]="nonExist"})(o=e.AccountType||(e.AccountType={}));class c{constructor(d,l){var g,p,m,w,S;this.syncLastTransLt=null,this.cachedBoc=null,this.subscriptions=null,this.contract=d,this.client=(g=l?.client)!==null&&g!==void 0?g:n.TonClient.default,this.abi=(0,n.abiContract)(d.abi),this.signer=(p=l?.signer)!==null&&p!==void 0?p:(0,n.signerNone)(),this.address=(m=l?.address)!==null&&m!==void 0?m:null,this.initData=(w=l?.initData)!==null&&w!==void 0?w:null,this.useCachedState=(S=l?.useCachedState)!==null&&S!==void 0?S:!1}static findGiverForClient(d){var l;return(l=this.giversByClient.find(g=>g.client===d))===null||l===void 0?void 0:l.giver}static setGiverForClient(d,l){const g=this.giversByClient.findIndex(p=>p.client===d);g>=0?l?this.giversByClient[g].giver=l:this.giversByClient.splice(g,1):l&&this.giversByClient.push({client:d,giver:l})}static createGiver(d){return t(this,void 0,void 0,function*(){const l=yield f(d),g=yield b(d,l),p=new c(e.DefaultGiverContract,{client:d,address:g,signer:(0,n.signerKeys)(l)});return{address:g,sendTo:(m,w)=>t(this,void 0,void 0,function*(){yield p.run("sendTransaction",{dest:m,value:w,bounce:!1})})}})}static getGiverForClient(d){return t(this,void 0,void 0,function*(){const l=this.findGiverForClient(d);if(l)return l;const g=yield this.createGiver(d);return this.giversByClient.push({client:d,giver:g}),g})}getAddress(){return t(this,void 0,void 0,function*(){let d=this.address;if(d===null){const l=this.getParamsOfDeployMessage({initFunctionName:null});d=(yield this.client.abi.encode_message(l)).address,this.address=d}return d})}getParamsOfDeployMessage(d){var l;if(!this.contract.tvc)throw s.missingTVC();const g={abi:this.abi,signer:this.signer,deploy_set:{tvc:this.contract.tvc}};return this.initData&&(g.deploy_set.initial_data=this.initData),d?.initFunctionName!==null&&(g.call_set={function_name:(l=d?.initFunctionName)!==null&&l!==void 0?l:"constructor"},d?.initInput!==void 0&&(g.call_set.input=d.initInput)),g}calcDeployFees(d){return t(this,void 0,void 0,function*(){const l=yield this.getParamsOfDeployMessage(d),g=yield this.client.abi.encode_message(l);return(yield this.client.tvm.run_executor({account:(0,n.accountForExecutorUninit)(),abi:this.abi,message:g.message})).fees})}deploy(d){return t(this,void 0,void 0,function*(){const l=this.getParamsOfDeployMessage(d),g=d?.useGiver,p=g===!0?yield c.getGiverForClient(this.client):g;this.address=(yield this.client.abi.encode_message(l)).address,p&&(yield p.sendTo(this.address,1e10));const m=yield this.client.processing.process_message({message_encode_params:l,send_events:!1});return this.needSyncWithTransaction(m.transaction),m})}deployLocal(d){return t(this,void 0,void 0,function*(){const l=this.getParamsOfDeployMessage(d),{address:g,message:p}=yield this.client.abi.encode_message(l),m=yield this.client.tvm.run_executor({account:(0,n.accountForExecutorUninit)(),abi:this.abi,message:p,return_updated_account:!0});return this.address=g,this.cachedBoc=m.account,m})}calcRunFees(d,l){return t(this,void 0,void 0,function*(){const g=yield this.client.abi.encode_message({address:yield this.getAddress(),abi:this.abi,signer:this.signer,call_set:{function_name:d,input:l}});let p;return p=yield this.client.tvm.run_executor({account:(0,n.accountForExecutorAccount)(yield this.boc()),abi:this.abi,message:g.message}),p.fees})}run(d,l,g){var p;return t(this,void 0,void 0,function*(){const m=yield this.client.processing.process_message({message_encode_params:{address:yield this.getAddress(),abi:this.abi,signer:(p=g?.signer)!==null&&p!==void 0?p:this.signer,call_set:{function_name:d,input:l}},send_events:!1});return this.needSyncWithTransaction(m.transaction),m})}runLocal(d,l,g){return t(this,void 0,void 0,function*(){const p=yield this.client.abi.encode_message({address:yield this.getAddress(),abi:this.abi,signer:this.signer,call_set:{function_name:d,input:l}});let m;return g?.performAllChecks?m=yield this.client.tvm.run_executor({account:(0,n.accountForExecutorAccount)(yield this.boc()),abi:this.abi,message:p.message,return_updated_account:!0}):m=yield this.client.tvm.run_tvm({account:yield this.boc(),abi:this.abi,message:p.message,return_updated_account:!0}),m.account&&(this.cachedBoc=m.account),m})}needSyncWithTransaction(d){!d.aborted&&d.lt&&(this.syncLastTransLt=d.lt,this.cachedBoc=null)}boc(){return t(this,void 0,void 0,function*(){if(this.cachedBoc&&this.useCachedState)return this.cachedBoc;const d=yield this.getAddress(),l=this.client.net;if(this.syncLastTransLt){const g=yield l.query_collection({collection:"accounts",filter:{id:{eq:d},last_trans_lt:{ge:this.syncLastTransLt}},result:"boc"});if(g.result.length>0){const p=g.result[0].boc;if(this.syncLastTransLt=null,p)return this.cachedBoc=p,p;throw s.missingBOC()}}try{const g=(yield l.wait_for_collection({collection:"accounts",filter:{id:{eq:this.address}},result:"boc",timeout:1e3})).result.boc;if(g)return this.cachedBoc=g,g;throw s.missingBOC()}catch(g){throw g.code===603?s.missingBOC():g}})}refresh(){this.cachedBoc=null}getAccount(){return t(this,void 0,void 0,function*(){try{const d=yield this.boc();return(yield this.client.boc.parse_account({boc:d})).parsed}catch(d){if(d.code===i.ACC_NOT_EXISTS)return{acc_type:o.nonExist}}})}subscribeAccount(d,l){return t(this,void 0,void 0,function*(){yield this.subscribe("accounts",{id:{eq:yield this.getAddress()}},d,l)})}subscribeTransactions(d,l){return t(this,void 0,void 0,function*(){const g=yield this.getAddress();yield this.subscribe("transactions",{account_addr:{eq:g},status:{eq:5}},d,l)})}subscribeMessages(d,l){return t(this,void 0,void 0,function*(){const g=yield this.getAddress();yield this.subscribe("messages",{status:{eq:5},src:{eq:g},OR:{status:{eq:5},dst:{eq:g}}},d,l)})}decodeMessage(d){return t(this,void 0,void 0,function*(){return yield n.TonClient.default.abi.decode_message({abi:this.abi,message:d})})}decodeMessageBody(d,l){return t(this,void 0,void 0,function*(){return yield n.TonClient.default.abi.decode_message_body({abi:this.abi,body:d,is_internal:l})})}getBalance(){return t(this,void 0,void 0,function*(){return(yield this.getAccount()).balance})}subscribe(d,l,g,p){var m,w;return t(this,void 0,void 0,function*(){const S=this.subscriptions&&this.subscriptions.get(d);S?((m=this.subscriptions)===null||m===void 0||m.delete(d),yield this.client.net.unsubscribe(S)):this.subscriptions||(this.subscriptions=new Map);const M=yield this.client.net.subscribe_collection({collection:d,filter:l,result:g},(A,h)=>{h===100&&p(A.result)});(w=this.subscriptions)===null||w===void 0||w.set(d,M)})}free(){return t(this,void 0,void 0,function*(){if(this.subscriptions){const d=this.subscriptions.values();this.subscriptions=null;for(const l of d)yield this.client.net.unsubscribe(l)}})}}e.Account=c,c.giversByClient=[];function u(_){const d=eval;try{return d(`process.env.${_}`)}catch{return}}function f(_){return t(this,void 0,void 0,function*(){const d=u("TON_GIVER_SECRET");if(d){const l=yield _.crypto.nacl_sign_keypair_from_secret_key({secret:d});return l.secret=l.secret.substr(0,64),l}return{public:"2ada2e65ab8eeab09490e3521415f45b6e42df9c760a639bcf53957550b25a16",secret:"172af540e43a524763dd53b26a066d472a97c4de37d5498170564510608250c3"}})}function b(_,d){var l;return t(this,void 0,void 0,function*(){const g=u("TON_GIVER_ADDRESS");return g||(yield _.abi.encode_message({abi:(0,n.abiContract)(e.DefaultGiverContract.abi),deploy_set:{tvc:(l=e.DefaultGiverContract.tvc)!==null&&l!==void 0?l:""},signer:(0,n.signerKeys)(d)})).address})}e.DefaultGiverContract={abi:{"ABI version":2,header:["time","expire"],functions:[{name:"sendTransaction",inputs:[{name:"dest",type:"address"},{name:"value",type:"uint128"},{name:"bounce",type:"bool"}],outputs:[]},{name:"getMessages",inputs:[],outputs:[{components:[{name:"hash",type:"uint256"},{name:"expireAt",type:"uint64"}],name:"messages",type:"tuple[]"}]},{name:"upgrade",inputs:[{name:"newcode",type:"cell"}],outputs:[]},{name:"constructor",inputs:[],outputs:[]}],data:[],events:[]},tvc:"te6ccgECGgEAA9sAAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIm/wD0pCAiwAGS9KDhiu1TWDD0oQkHAQr0pCD0oQgAAAIBIAwKAfz/fyHtRNAg10nCAZ/T/9MA9AX4an/4Yfhm+GKOG/QFbfhqcAGAQPQO8r3XC//4YnD4Y3D4Zn/4YeLTAAGOEoECANcYIPkBWPhCIPhl+RDyqN4j+EL4RSBukjBw3rry4GUh0z/THzQx+CMhAb7yuSH5ACD4SoEBAPQOIJEx3rMLAE7y4Gb4ACH4SiIBVQHIyz9ZgQEA9EP4aiMEXwTTHwHwAfhHbpLyPN4CASASDQIBWBEOAQm46Jj8UA8B/vhBbo4S7UTQ0//TAPQF+Gp/+GH4Zvhi3tFwbW8C+EqBAQD0hpUB1ws/f5NwcHDikSCONyMjI28CbyLIIs8L/yHPCz8xMQFvIiGkA1mAIPRDbwI0IvhKgQEA9HyVAdcLP3+TcHBw4gI1MzHoXwPIghB3RMfighCAAAAAsc8LHyEQAKJvIgLLH/QAyIJYYAAAAAAAAAAAAAAAAM8LZoEDmCLPMQG5lnHPQCHPF5Vxz0EhzeIgyXH7AFswwP+OEvhCyMv/+EbPCwD4SgH0AMntVN5/+GcAxbkWq+f/CC3Rxt2omgQa6ThAM/p/+mAegL8NT/8MPwzfDFHDfoCtvw1OADAIHoHeV7rhf/8MTh8Mbh8Mz/8MPFvfCNJeRnJuPwzcXwAaPwhZGX//CNnhYB8JQD6AGT2qj/8M8AIBIBUTAde7Fe+TX4QW6OEu1E0NP/0wD0Bfhqf/hh+Gb4Yt76QNcNf5XU0dDTf9/XDACV1NHQ0gDf0SIiInPIcc8LASLPCgBzz0AkzxYj+gKAac9Acs9AIMki+wBfBfhKgQEA9IaVAdcLP3+TcHBw4pEggUAJKOLfgjIgG7n/hKIwEhAYEBAPRbMDH4at4i+EqBAQD0fJUB1ws/f5NwcHDiAjUzMehfA18D+ELIy//4Rs8LAPhKAfQAye1Uf/hnAgEgFxYAx7jkYYdfCC3Rwl2omhp/+mAegL8NT/8MPwzfDFvamj8IXwikDdJGDhvXXlwMvwAfCFkZf/8I2eFgHwlAPoAZPaqfAeQfYIQaHaPdqn4ARh8IWRl//wjZ4WAfCUA+gBk9qo//DPACAtoZGAAtr4QsjL//hGzwsA+EoB9ADJ7VT4D/IAgAdacCHHAJ0i0HPXIdcLAMABkJDi4CHXDR+S8jzhUxHAAJDgwQMighD////9vLGS8jzgAfAB+EdukvI83o"}})(Ft);(function(e){var t=B&&B.__createBinding||(Object.create?function(i,s,o,c){c===void 0&&(c=o);var u=Object.getOwnPropertyDescriptor(s,o);(!u||("get"in u?!s.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return s[o]}}),Object.defineProperty(i,c,u)}:function(i,s,o,c){c===void 0&&(c=o),i[c]=s[o]}),n=B&&B.__exportStar||function(i,s){for(var o in i)o!=="default"&&!Object.prototype.hasOwnProperty.call(s,o)&&t(s,i,o)};Object.defineProperty(e,"__esModule",{value:!0}),n(Ft,e)})(Rt);const ii="2.2",si=["pubkey","time","expire"],ai=[{name:"constructor",inputs:[{name:"codeCell",type:"cell"},{name:"roundTime",type:"uint64"},{name:"radius",type:"uint64"},{name:"speed",type:"uint64"},{name:"userCount",type:"uint64"},{name:"name",type:"string"}],outputs:[]},{name:"getDetails",inputs:[],outputs:[{name:"nonce",type:"uint32"},{name:"endTime",type:"uint128"},{name:"roundTime",type:"uint64"},{name:"radius",type:"uint64"},{name:"speed",type:"uint64"},{name:"userCount",type:"uint64"},{name:"name",type:"string"},{name:"root",type:"address"}]},{name:"getUsers",inputs:[],outputs:[{name:"users",type:"map(address,uint128)"}]},{name:"getRewards",inputs:[],outputs:[{name:"rewards",type:"map(address,uint128)"}]},{name:"winCount",inputs:[],outputs:[{name:"count",type:"uint128"}]},{name:"getAddressCells",inputs:[{components:[{name:"x",type:"int64"},{name:"y",type:"int64"},{name:"z",type:"int64"}],name:"coords",type:"tuple[]"}],outputs:[{name:"addreses",type:"address[]"}]},{name:"newGame",inputs:[{components:[{name:"x",type:"int64"},{name:"y",type:"int64"},{name:"z",type:"int64"}],name:"baseCoord",type:"tuple"}],outputs:[]},{name:"_newCell",inputs:[{name:"owner",type:"address"},{components:[{name:"x",type:"int64"},{name:"y",type:"int64"},{name:"z",type:"int64"}],name:"baseCoord",type:"tuple"},{components:[{name:"x",type:"int64"},{name:"y",type:"int64"},{name:"z",type:"int64"}],name:"targetCoord",type:"tuple"},{components:[{name:"r",type:"uint8"},{name:"g",type:"uint8"},{name:"b",type:"uint8"}],name:"color",type:"tuple"},{name:"energy",type:"uint64"}],outputs:[]},{name:"onCellOwnerChanged",inputs:[{name:"oldOwner",type:"address"},{name:"newOwner",type:"address"}],outputs:[]},{name:"destroyCells",inputs:[{name:"cells",type:"address[]"}],outputs:[]},{name:"calcRewards",inputs:[],outputs:[]},{name:"claimReward",inputs:[],outputs:[]},{name:"_resolveCell",inputs:[{components:[{name:"x",type:"int64"},{name:"y",type:"int64"},{name:"z",type:"int64"}],name:"coord",type:"tuple"}],outputs:[{name:"cellAddress",type:"address"}]},{name:"_users",inputs:[],outputs:[{name:"_users",type:"map(address,uint128)"}]},{name:"_rewards",inputs:[],outputs:[{name:"_rewards",type:"map(address,uint128)"}]}],oi=[{key:1,name:"_nonce",type:"uint32"}],ci=[{name:"CellCreated",inputs:[{name:"owner",type:"uint256"},{components:[{name:"x",type:"int64"},{name:"y",type:"int64"},{name:"z",type:"int64"}],name:"coord",type:"tuple"}],outputs:[]}],ui=[{name:"_pubkey",type:"uint256"},{name:"_timestamp",type:"uint64"},{name:"_constructorFlag",type:"bool"},{name:"_nonce",type:"uint32"},{name:"_root",type:"address"},{name:"_users",type:"map(address,uint128)"},{name:"_rewards",type:"map(address,uint128)"},{name:"_codeCell",type:"cell"},{name:"_roundTime",type:"uint64"},{name:"_radius",type:"uint64"},{name:"_speed",type:"uint64"},{name:"_userCount",type:"uint64"},{name:"_name",type:"string"},{name:"_endTime",type:"uint128"}],V={"ABI version":2,version:ii,header:si,functions:ai,data:oi,events:ci,fields:ui},li="2.2",di=["pubkey","time","expire"],gi=[{name:"constructor",inputs:[{name:"router",type:"address"},{name:"owner",type:"address"},{name:"endTime",type:"uint128"},{name:"speed",type:"uint64"},{components:[{name:"r",type:"uint8"},{name:"g",type:"uint8"},{name:"b",type:"uint8"}],name:"color",type:"tuple"},{name:"energy",type:"uint64"}],outputs:[]},{name:"getRouter",inputs:[],outputs:[{name:"router",type:"address"}]},{name:"getDetails",inputs:[],outputs:[{components:[{name:"x",type:"int64"},{name:"y",type:"int64"},{name:"z",type:"int64"}],name:"coord",type:"tuple"},{components:[{name:"r",type:"uint8"},{name:"g",type:"uint8"},{name:"b",type:"uint8"}],name:"color",type:"tuple"},{name:"level",type:"uint64"},{name:"speed",type:"uint64"},{name:"endTime",type:"uint128"},{name:"energy",type:"uint64"},{name:"energySec",type:"uint64"},{name:"energyMax",type:"uint64"},{name:"lastCalcTime",type:"uint128"},{name:"owner",type:"address"}]},{name:"calculateEnergy",inputs:[],outputs:[{name:"energy",type:"uint64"}]},{name:"markCell",inputs:[{components:[{name:"x",type:"int64"},{name:"y",type:"int64"},{name:"z",type:"int64"}],name:"targetCoord",type:"tuple"},{name:"energy",type:"uint64"}],outputs:[]},{name:"helpCell",inputs:[{components:[{name:"x",type:"int64"},{name:"y",type:"int64"},{name:"z",type:"int64"}],name:"targetCoord",type:"tuple"},{name:"energy",type:"uint64"}],outputs:[]},{name:"_helpCell",inputs:[{name:"owner",type:"address"},{components:[{name:"x",type:"int64"},{name:"y",type:"int64"},{name:"z",type:"int64"}],name:"coord",type:"tuple"},{components:[{name:"r",type:"uint8"},{name:"g",type:"uint8"},{name:"b",type:"uint8"}],name:"color",type:"tuple"},{name:"energy",type:"uint64"}],outputs:[]},{name:"attkCell",inputs:[{components:[{name:"x",type:"int64"},{name:"y",type:"int64"},{name:"z",type:"int64"}],name:"targetCoord",type:"tuple"},{name:"energy",type:"uint64"}],outputs:[]},{name:"_attkCell",inputs:[{name:"owner",type:"address"},{components:[{name:"x",type:"int64"},{name:"y",type:"int64"},{name:"z",type:"int64"}],name:"coord",type:"tuple"},{components:[{name:"r",type:"uint8"},{name:"g",type:"uint8"},{name:"b",type:"uint8"}],name:"color",type:"tuple"},{name:"energy",type:"uint64"}],outputs:[]},{name:"upgradeCell",inputs:[],outputs:[]},{name:"_resolveCell",inputs:[{components:[{name:"x",type:"int64"},{name:"y",type:"int64"},{name:"z",type:"int64"}],name:"coord",type:"tuple"}],outputs:[{name:"cellAddress",type:"address"}]},{name:"_destroy",inputs:[],outputs:[]}],pi=[{components:[{name:"x",type:"int64"},{name:"y",type:"int64"},{name:"z",type:"int64"}],key:1,name:"_coord",type:"tuple"}],hi=[],fi=[{name:"_pubkey",type:"uint256"},{name:"_timestamp",type:"uint64"},{name:"_constructorFlag",type:"bool"},{components:[{name:"x",type:"int64"},{name:"y",type:"int64"},{name:"z",type:"int64"}],name:"_coord",type:"tuple"},{name:"_costPerLevel",type:"uint64[]"},{name:"_maxEPerLevel",type:"uint64[]"},{name:"_farmPerLevel",type:"uint64[]"},{name:"_deboost",type:"uint64"},{name:"_router",type:"address"},{name:"_owner",type:"address"},{name:"_speed",type:"uint64"},{name:"_level",type:"uint64"},{name:"_energy",type:"uint64"},{name:"_lastCalcTime",type:"uint128"},{name:"_endTime",type:"uint128"},{components:[{name:"r",type:"uint8"},{name:"g",type:"uint8"},{name:"b",type:"uint8"}],name:"_color",type:"tuple"}],be={"ABI version":2,version:li,header:di,functions:gi,data:pi,events:hi,fields:fi},_i="2.2",bi=["pubkey","time","expire"],mi=[{name:"constructor",inputs:[{name:"ownerPubkey",type:"uint256"},{name:"codeRouter",type:"cell"},{name:"codeCell",type:"cell"}],outputs:[]},{name:"getDetails",inputs:[],outputs:[{name:"nonce",type:"uint16"},{name:"owner",type:"uint256"}]},{name:"newRouter",inputs:[{name:"roundTime",type:"uint64"},{name:"radius",type:"uint64"},{name:"speed",type:"uint64"},{name:"userCount",type:"uint64"},{name:"name",type:"string"},{name:"nonce",type:"uint16"}],outputs:[]},{name:"getOwner",inputs:[],outputs:[{name:"pubkey",type:"uint256"}]},{name:"owner",inputs:[{name:"answerId",type:"uint32"}],outputs:[{name:"pubkey",type:"uint256"}]},{name:"transferOwnership",inputs:[{name:"newOwner",type:"uint256"}],outputs:[]}],yi=[{key:1,name:"_nonce",type:"uint16"}],wi=[{name:"RouterCreated",inputs:[{name:"nonce",type:"uint16"},{name:"routerAddress",type:"address"}],outputs:[]},{name:"OwnershipTransferred",inputs:[{name:"oldOwner",type:"uint256"},{name:"newOwner",type:"uint256"}],outputs:[]}],vi=[{name:"_pubkey",type:"uint256"},{name:"_timestamp",type:"uint64"},{name:"_constructorFlag",type:"bool"},{name:"_owner",type:"uint256"},{name:"_nonce",type:"uint16"},{name:"_codeRouter",type:"cell"},{name:"_codeCell",type:"cell"}],Oi={"ABI version":2,version:_i,header:bi,functions:mi,data:yi,events:wi,fields:vi},Ai={router:"0:0387bcd4d691475c687597f9f5a5b87045cad9d9f4f72634af5a5854bb237da0",gameroot:"0:db8e2970bf51fb826c38a7f3f851219ba425526465871b5bb2049f7eeefb86ee",codeHash:"a431e5271624bd7a5dc6ab9228cdbb35c89e88f164b113986447cd5652055550",endpoint:"https://devnet.evercloud.dev/4b0e77393fba46759305e30cea4aaa95/graphql"},Si={router:"0:b2ccd19a3524c2d1eb9857fbc2d637158e33486b1c963be3e9561fd753eb5adc",gameroot:"0:a9766ccebd7c7bcd7a8008b4cbb40191504400b84797bd9747656842bb69ab86",codeHash:"28394e6e4245238739c93f391575e8e96446567bc7b7c9a8d2faa7065049bfea",endpoint:"http://localhost/graphql"},ne={testnet:Ai,localnet:Si};_e.TonClient.useBinaryLibrary(ri);let me=[],Ct;const I=new C.ProviderRpcClient({});let he,st;const Ii=e=>new _e.TonClient({network:{endpoints:[e],message_retries_count:3,message_processing_timeout:6e4}}),Mi=(e,t="",n=null)=>{try{return new Rt.Account({abi:e},{address:t,signer:n?_e.signerKeys(n):_e.signerNone(),client:he})}catch(i){console.error(i)}},gt=async e=>{try{return(await he.net.query_collection({collection:"accounts",filter:{id:{in:e}},result:"id acc_type balance boc"})).result}catch(t){console.error(t)}},Et=async(e,t,n,i={},s=!0,o=null)=>{try{const[c,u]=await Promise.all([o||he.net.query_collection({collection:"accounts",filter:{id:{eq:t}},result:"boc"}).then(({result:b})=>b[0].boc).catch(()=>{}),he.abi.encode_message({abi:{type:"Contract",value:e},address:t,call_set:{function_name:n,input:i},signer:{type:"None"}}).then(({message:b})=>b)]);if(!c)return;let f=await he.tvm.run_tvm({message:u,account:c,abi:{type:"Contract",value:e}});return s&&console.log("output:",f.decoded.output),f.decoded.output}catch(c){console.error(c,n,i)}};function W(e,t){document.querySelectorAll(`[data-behavior=${e}]`).forEach(t)}const vt=e=>t=>{t.innerText=e};function xi(){return I.requestPermissions({permissions:["basic","accountInteraction"]})}async function qi(){console.log("disconnectAction"),await I.disconnect()}async function at(){Xt("tblRouters",3),console.log("getRoutersAction");const e=await I.getProviderState();let n=(await I.getAccountsByCodeHash({codeHash:ne[e.selectedConnection].codeHash,limit:50})).accounts.map(c=>c.toString());console.log("routers",n);let i=await gt(n);console.log("routers",i);for(let c=0;c<i.length;c++){let u=await $t(i[c].id,i[c].boc);if(u){let f,b;var s=new Date(1e3*u.endTime);console.log("date",s),f=Yt("tblRouters"),b=f.insertCell(0),b.innerHTML=u.name,b=f.insertCell(1),b.innerHTML=u.radius,b=f.insertCell(2),b.innerHTML=u.userCount,b=f.insertCell(3),b.innerHTML=u.speed,b=f.insertCell(4),b.innerHTML=s.customFormat("#DD#-#MM#-#YYYY# #hh#:#mm#:#ss#"),b=f.insertCell(5);var o=document.createElement("button");o.textContent="Set",o.setAttribute("type","button"),o.setAttribute("addr",i[c].id),o.onclick=ji,b.appendChild(o),b=f.insertCell(6),b.innerHTML=i[c].id,b.style="visibility: hidden; width: 0px"}}}async function Dt(){console.log("getLiderBoard"),await I.getProviderState();let t=(await Lt()).users.map(n=>n.toString());console.log("users",t),Xt("tblLiders",1);for(let n=0;n<t.length;n++){let i=t[n].split(","),s,o;s=Yt("tblLiders"),o=s.insertCell(0),o.innerHTML=`${i[0].substr(0,6)}...${i[0].substr(-4,4)}`,o=s.insertCell(1),o.innerHTML=i[1]}}async function ji(e){console.log("setRouter",e);let t=e.target.attributes.addr.value;console.log("address",t);const i=(await I.getProviderState()).selectedConnection;ne[i].router=t;for(let o of me)o.highlight=!1,o.details=void 0;let s=await zt();console.log("details",s),Ct(s.radius),Bi(),Dt()}async function Ti(){let e=document.getElementById("router_name").value,t=document.getElementById("router_radius").value,n=document.getElementById("router_users").value,i=document.getElementById("router_speed").value,s=document.getElementById("router_time").value;console.log("addRouterAction",e,t,i,s),await Gt(e,t,n,i,s),await at()}async function Ht(){const e=await I.getProviderState(),t=e.permissions,n=e.selectedConnection;if(!G(n)||!t.accountInteraction)W("connect",s=>s.onclick=xi),ot("login"),W("connect",s=>{const o=!G(n);s.disabled=o,s.innerText=o?"Contract not found":`Connect with ${n}`});else{const i=await I.getProviderState();(await I.subscribe("contractStateChanged",{address:G(i.selectedConnection)})).on("data",u=>{console.log("permissionsChanged:",{address:u.address,state:u.state})}),ot("main");const s=t.accountInteraction;let o=s.address.toString(),c=s.publicKey.toString();W("address",vt(`${o.substr(0,6)}...${o.substr(-4,4)}`)),W("publicKey",vt(`${c.substr(0,6)}...${c.substr(-4,4)}`)),W("disconnectAction",u=>u.onclick=qi),W("getRoutersAction",u=>u.onclick=at),W("addRouterAction",u=>u.onclick=Ti),W("calcRewardsAction",u=>u.onclick=Ni),W("claimRewardAction",u=>u.onclick=zi),W("destroyCellsAction",u=>u.onclick=Li),console.log("endpoint:",ne[n].endpoint),he=Ii(ne[n].endpoint),st=Mi({}),await at()}}async function Ot(e){const n=`<span class="badge bg-${e==="mainnet"?"success":"secondary"}">${e}</span>`;W("network",i=>i.innerHTML=n),await Ht()}function G(e,t="router"){return ne[e]&&ne[e][t]?new C.Address(ne[e][t]):null}function ot(e){console.log("switchScreen:",e),["extension","login","main"].forEach(t=>{W(t,i=>i.style.display=e===t?"table-row":"none")})}async function ki(){const e=await I.getProviderState();console.log("selectedConnection:",e.selectedConnection),await Ot(e.selectedConnection),(await I.subscribe("networkChanged")).on("data",t=>{console.log("networkChanged:",t.selectedConnection),Ot(t.selectedConnection)}),(await I.subscribe("permissionsChanged")).on("data",async t=>{console.log("permissionsChanged:",t.permissions),await Ht()})}async function Bi(){let e=[];for(const s of me)e.push({x:s.q,y:s.r,z:s.s});let t=await Ut(e);t=t.map(s=>s.toString());let n=0;for(const s of me)s.address=t[n].toString(),n++;await Wt(t);let i=await gt(t);console.log("accs",i);for(let s=0;s<i.length;s++){let o=await pt(i[s].id,i[s].boc);if(o){let c=Nt(i[s].id);console.log("hex",c),c&&(c.details=o)}}}function Pi(e){me=e}async function Ri(e){if(Ct=e,await I.hasProvider())try{await I.ensureInitialized(),await ki()}catch(t){throw t}else ot("extension")}function Nt(e){let t;for(const n of me)if(n.address==e){t=n;break}return t}async function zt(){const e=await I.getProviderState(),t=new I.Contract(V,G(e.selectedConnection,"router"));try{let n;return n=await t.methods.getDetails({}).call(),console.log("getDetails router",n),n}catch(n){console.error(n),n instanceof C.TvmException&&console.error(n.code)}}async function Lt(){const e=await I.getProviderState(),t=new I.Contract(V,G(e.selectedConnection,"router"));try{let n;return n=await t.methods.getUsers({}).call(),console.log("getUsers router",n),n}catch(n){console.error(n),n instanceof C.TvmException&&console.error(n.code)}}async function Wt(e){try{const t=await I.getProviderState();(await I.subscribe("contractStateChanged",{address:G(t.selectedConnection)})).on("data",n=>{Dt()}),await st.free(),await st.subscribe("accounts",{id:{in:e}},"id boc",async n=>{console.log("onAcc:",n.id);let i=Nt(n.id);console.log("hex",i),i&&(i.details=await pt(n.id,n.boc))},async n=>{console.log("onError:",n)})}catch(t){console.error(t),t instanceof C.TvmException&&console.error(t.code)}}async function Ut(e){const t=await I.getProviderState(),n=new I.Contract(V,G(t.selectedConnection,"router"));try{let i;return i=await n.methods.getAddressCells({coords:e}).call(),console.log("getAddressCells router",i),i.addreses}catch(i){console.error(i),i instanceof C.TvmException&&console.error(i.code)}}async function Fi(e){const t=await I.getProviderState(),n=t.permissions;if(!n.accountInteraction)return;const i=n.accountInteraction,s=new I.Contract(V,G(t.selectedConnection,"router"));try{console.log("newGame",1);let o=await s.methods.newGame({baseCoord:e}).send({from:i.address.toString(),amount:"12000000000"});console.log("newGame",o)}catch(o){console.error(o),o instanceof C.TvmException&&console.error(o.code)}}async function Ci(e,t,n){const s=(await I.getProviderState()).permissions;if(!s.accountInteraction)return;const o=s.accountInteraction,c=new I.Contract(be,e);try{console.log("markCell",1);let u=await c.methods.markCell({targetCoord:t,energy:n}).send({from:o.address.toString(),amount:"2000000000"});console.log("markCell",u)}catch(u){console.error(u),u instanceof C.TvmException&&console.error(u.code)}}async function Ei(e){const n=(await I.getProviderState()).permissions;if(!n.accountInteraction)return;const i=n.accountInteraction,s=new I.Contract(be,e);try{console.log("upgradeCell",1);let o=await s.methods.upgradeCell({}).send({from:i.address.toString(),amount:"1000000000"});console.log("upgradeCell",o)}catch(o){console.error(o),o instanceof C.TvmException&&console.error(o.code)}}async function Di(e,t,n){const s=(await I.getProviderState()).permissions;if(!s.accountInteraction)return;const o=s.accountInteraction,c=new I.Contract(be,e);try{console.log("helpCell",1);let u=await c.methods.helpCell({targetCoord:t,energy:n}).send({from:o.address.toString(),amount:"1000000000"});console.log("helpCell",u)}catch(u){console.error(u),u instanceof C.TvmException&&console.error(u.code)}}async function Hi(e,t,n){const s=(await I.getProviderState()).permissions;if(!s.accountInteraction)return;const o=s.accountInteraction,c=new I.Contract(be,e);try{console.log("attkCell",1);let u=await c.methods.attkCell({targetCoord:t,energy:n}).send({from:o.address.toString(),amount:"1000000000"});console.log("attkCell",u)}catch(u){console.error(u),u instanceof C.TvmException&&console.error(u.code)}}async function Gt(e,t,n,i,s){const o=await I.getProviderState(),c=o.permissions;if(!c.accountInteraction)return;const u=c.accountInteraction,f=new I.Contract(Oi,ne[o.selectedConnection].gameroot);try{console.log("newRouter",1);let b=await f.methods.newRouter({roundTime:s,radius:t,speed:i,userCount:n,name:e,nonce:"0"}).send({from:u.address.toString(),amount:"2000000000"});console.log("newRouter",b)}catch(b){console.error(b),b instanceof C.TvmException&&console.error(b.code)}}async function pt(e,t=null){if(t)try{return await Et(be,e,"getDetails",{},!0,t)}catch(i){console.error(i)}const n=new I.Contract(be,e);try{const i=await n.getFullState();if(i.state==null||!i.state.isDeployed)return null;let s;return s=await n.methods.getDetails({}).call(),console.log("getDetails cell",s),s}catch(i){console.error(i),i instanceof C.TvmException&&console.error(i.code)}}async function $t(e,t=null){if(t)try{return await Et(V,e,"getDetails",{},!0,t)}catch(i){console.error(i)}const n=new I.Contract(V,e);try{const i=await n.getFullState();if(i.state==null||!i.state.isDeployed)return null;let s;return s=await n.methods.getDetails({}).call(),console.log("getDetails router",s),s}catch(i){console.error(i),i instanceof C.TvmException&&console.error(i.code)}}async function Ni(){await Kt(),await Vt()}async function zi(){Jt()}async function Li(){Qt()}async function Qt(){const e=await I.getProviderState(),t=e.permissions;if(!t.accountInteraction)return;const n=t.accountInteraction,i=new I.Contract(V,G(e.selectedConnection,"router"));let s=[];for(const u of me)u.details&&s.push(u.address);if(console.log("addreses",s),!s.length)return;let o=await gt(s),c=[];for(let u=0;u<o.length&&!(o[u].boc&&(c.push(o[u].id),c.length>=10));u++);if(!!c.length)try{console.log("destroyCells",1);let u=await i.methods.destroyCells({cells:c}).send({from:n.address.toString(),amount:"10000000000"});console.log("destroyCells",u)}catch(u){console.error(u),u instanceof C.TvmException&&console.error(u.code)}}async function Kt(){const e=await I.getProviderState(),t=e.permissions;if(!t.accountInteraction)return;const n=t.accountInteraction,i=new I.Contract(V,G(e.selectedConnection,"router"));try{console.log("calcRewards",1);let s=await i.methods.calcRewards({}).send({from:n.address.toString(),amount:"2000000000"});console.log("calcRewards",s)}catch(s){console.error(s),s instanceof C.TvmException&&console.error(s.code)}}async function Jt(){const e=await I.getProviderState(),t=e.permissions;if(!t.accountInteraction)return;const n=t.accountInteraction,i=new I.Contract(V,G(e.selectedConnection,"router"));try{console.log("claimReward",1);let s=await i.methods.claimReward({}).send({from:n.address.toString(),amount:"1000000000"});console.log("claimReward",s)}catch(s){console.error(s),s instanceof C.TvmException&&console.error(s.code)}}async function Vt(){const e=await I.getProviderState(),t=new I.Contract(V,G(e.selectedConnection,"router"));try{let n;return n=await t.methods.getRewards({}).call(),console.log("getRewards router",n),n.rewards}catch(n){console.error(n),n instanceof C.TvmException&&console.error(n.code)}}async function Wi(){await I.subscribe("permissionsChanged").on("data",e=>{console.log(e)})}function Yt(e){var t=document.getElementById(e);return t.insertRow(t.rows.length)}function Xt(e,t=1){for(var n=document.getElementById(e);n?.rows.length>t;)n.deleteRow(n.rows.length-1)}Date.prototype.customFormat=function(e){var t,n,i,s,o,c,u,f,b,_,d,l,g,p,m,w,S,M,A,h,y,O,x=this;return n=((t=x.getFullYear())+"").slice(-2),o=(c=x.getMonth()+1)<10?"0"+c:c,s=(i=["January","February","March","April","May","June","July","August","September","October","November","December"][c-1]).substring(0,3),b=(_=x.getDate())<10?"0"+_:_,f=(u=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][x.getDay()]).substring(0,3),O=_>=10&&_<=20?"th":(y=_%10)==1?"st":y==2?"nd":y==3?"rd":"th",e=e.replace("#YYYY#",t).replace("#YY#",n).replace("#MMMM#",i).replace("#MMM#",s).replace("#MM#",o).replace("#M#",c).replace("#DDDD#",u).replace("#DDD#",f).replace("#DD#",b).replace("#D#",_).replace("#th#",O),p=l=x.getHours(),p==0&&(p=24),p>12&&(p-=12),g=p<10?"0"+p:p,d=l<10?"0"+l:l,h=(A=l<12?"am":"pm").toUpperCase(),m=(w=x.getMinutes())<10?"0"+w:w,S=(M=x.getSeconds())<10?"0"+M:M,e.replace("#hhhh#",d).replace("#hhh#",l).replace("#hh#",g).replace("#h#",p).replace("#mm#",m).replace("#m#",w).replace("#ss#",S).replace("#s#",M).replace("#ampm#",A).replace("#AMPM#",h)};const Ui=Object.freeze(Object.defineProperty({__proto__:null,setMap:Pi,init:Ri,routerDetails:zt,routerLiders:Lt,subscribeAllCellState:Wt,getAddressCells:Ut,newGame:Fi,markCell:Ci,upgradeCell:Ei,helpCell:Di,attkCell:Hi,newRouter:Gt,getDetailsCell:pt,getDetailsRouter:$t,destroyCells:Qt,calcRewards:Kt,claimReward:Jt,getRewards:Vt,subscribePermissionsChanged:Wi},Symbol.toStringTag,{value:"Module"})),ct=Mt({dimensions:52,orientation:"FLAT",origin:{x:-500,y:-400},highlight:!1});let $e=new Se(ct),E=[],Z=Ui;const Gi={data(){return{camera:{x:0,y:0,zoom:1},mainCanvas:null,animCanvas:null,mainCtx:null,scales:0,hexSize:0,halfCanvasWidth:0,halfCanvasHeight:0,isdblclick:!1,a_full:0,b_full:0,c_full:0,a_hex:0,b_hex:0,c_hex:0}},async mounted(){this.mainCanvas=document.querySelector("#mainCanvas"),this.animCanvas=document.querySelector("#animationCanvas"),this.mainCtx=this.mainCanvas.getContext("2d"),window.addEventListener("resize",()=>{this.windowResizeUpdate(),this.zoomUpdate()}),await this.initiateMap(Z),this.animCanvas.addEventListener("click",async({offsetX:e,offsetY:t})=>{if(await this.sleep(500),this.isdblclick)return;e+=this.camera.x-this.mainCanvas.width/2,t+=this.camera.y-this.mainCanvas.height/2;const n=$e.pointToHex({x:e,y:t});for(let i of E)i.x==n.x&&i.y==n.y?i.highlight=!i.highlight:i.highlight=!1}),this.animCanvas.addEventListener("dblclick",async({offsetX:e,offsetY:t})=>{this.isdblclick=!0,await this.sleep(500),this.isdblclick=!1,e+=this.camera.x-this.mainCanvas.width/2,t+=this.camera.y-this.mainCanvas.height/2;const n=$e.pointToHex({x:e,y:t});let i,s;for(let c of E)c.highlight&&(i=c),c.x==n.x&&c.y==n.y&&(s=c);if(!s||i&&!i.details)return;console.log("hHex",i),console.log("tHex",s);let o={x:n.q,y:n.r,z:n.s};if(!i)s.details||await Z.newGame(o);else if(i.address.toString()==s.address.toString())await Z.upgradeCell(s.address);else{if(!this.isNeighborHex(i,s))return;let c=this.getEnegry(i);console.log("energy",c),s.details?this.colorIsEqual(i.details.color,s.details.color)?await Z.helpCell(i.address,o,c):await Z.attkCell(i.address,o,c):await Z.markCell(i.address,o,c)}})},methods:{async sleep(e){return new Promise(t=>setTimeout(t,e))},getMap(e){return new Se(ct,mt({radius:1*e}))},async initiateMap(){await Z.init(n=>{E=this.getMap(n),console.log(E,"elekwleklk"),Z.setMap(E)}),console.log(E,"currentMap");let e=this.mainCanvas,t=this.animCanvas;e.width=window.innerWidth,e.height=window.innerHeight,t.width=window.innerWidth,t.height=window.innerHeight,this.calculateHexDimensions(),this.windowResizeUpdate(),this.zoomUpdate(),this.drawMap(),requestAnimationFrame(this.drawMap),this.camera.x=this.halfCanvasWidth,this.camera.y=this.halfCanvasHeight,this.recalcEnergy()},recalcEnergy(){for(let e of E)!e.details||this.calculateEnergy(e);setTimeout(this.recalcEnergy,200)},calculateEnergy(e){let t=Date.now()/1e3;if(1*e.details.lastCalcTime>=t)return;let n=1*e.details.energy,i=1*e.details.energyMax;if(n>i){let s=100*e.details.speed*(t-e.details.lastCalcTime);n-s>i?n=n-s:n=i}else n<i&&(n=Math.min(n+e.details.energySec*e.details.speed*(t-e.details.lastCalcTime),i));e.details.lastCalcTime=t,e.details.energy=Math.floor(n)},zoomUpdate(){const e=$e.pointToHex({x:this.camera.x,y:this.camera.y}),t=e.x,n=e.y;this.hexSize=this.scales,this.calculateHexDimensions();let i=new Se(ct,mt({radius:E.radius}));for(let s=0;s<E.length;s++)E[s].size=i[s].size,E[s].x===t&&E[s].y===n&&(this.camera.x=Math.round(ge(E[s]).x+this.b_full+this.hexSize/2),this.camera.y=Math.round(ge(E[s]).y+this.c_full))},drawMap(){this.mainCtx.setTransform(1,0,0,1,0,0),this.mainCtx.fillStyle="black",this.mainCtx.fillRect(0,0,this.mainCanvas.width,this.mainCanvas.height),this.mainCtx.translate(-this.camera.x+this.halfCanvasWidth,-this.camera.y+this.halfCanvasHeight);for(let e of E){let t=ge(e).x,n=ge(e).y;if(Math.abs(t-this.camera.x)>this.halfCanvasWidth+this.hexSize||Math.abs(n-this.camera.y)>this.halfCanvasHeight+this.hexSize)continue;e.highlight&&(this.mainCtx.strokeStyle="white",this.mainCtx.beginPath(),this.mainCtx.moveTo(t+this.a_full,n-this.c_full),this.mainCtx.lineTo(t+this.b_full,n),this.mainCtx.lineTo(t+this.a_full,n+this.c_full),this.mainCtx.lineTo(t-this.a_full,n+this.c_full),this.mainCtx.lineTo(t-this.b_full,n),this.mainCtx.lineTo(t-this.a_full,n-this.c_full),this.mainCtx.closePath(),this.mainCtx.stroke());let i="#001D37";this.mainCtx.fillStyle=i,this.mainCtx.strokeStyle="#0095A7",this.mainCtx.beginPath(),this.mainCtx.moveTo(t+this.a_hex,n-this.c_hex),this.mainCtx.lineTo(t+this.b_hex,n),this.mainCtx.lineTo(t+this.a_hex,n+this.c_hex),this.mainCtx.lineTo(t-this.a_hex,n+this.c_hex),this.mainCtx.lineTo(t-this.b_hex,n),this.mainCtx.lineTo(t-this.a_hex,n-this.c_hex),this.mainCtx.closePath(),this.mainCtx.stroke(),this.mainCtx.fill(),this.setText(this.mainCtx,t,n-this.hexSize/2,`${e.q};${e.r}`),e.details&&(this.setText(this.mainCtx,t,n,`${e.details.energy}`),this.setText(this.mainCtx,t,n+this.hexSize/2,`lvl: ${1*e.details.level+1}`))}},drawGrid(e,t){const n=2*Math.PI/6,i=50;for(let s=0,o=i;o+i*Math.sin(n)<t;o+=i*Math.sin(n)**s++)for(let c=i,u=0;c+i*(1+Math.cos(n))<e;c+=i*(1+Math.cos(n)),o+=(-1)**u++*i*Math.sin(n))E.push({coords:[s,u],energy:5e3,color:"inherit",lvl:1}),this.drawHexagon(c,o)},drawHexagon(e,t){const n=2*Math.PI/6,i=50;this.mainCtx.strokeStyle="#0095A7",this.mainCtx.beginPath();for(let s=0;s<6;s++)this.mainCtx.lineTo(e+i*Math.cos(n*s),t+i*Math.sin(n*s));this.mainCtx.closePath(),this.mainCtx.stroke(),this.setText(this.mainCtx,e,t-this.hexSize/2,5e3)},setText(e,t,n,i,s=10,o="white",c="center"){let u=`${s*(this.camera.zoom+1)}px Georgia`;e.font=u,e.fillStyle=o,e.textAlign=c,e.fillText(i,t,n,this.hexSize)},calculateHexDimensions(){this.a_full=this.hexSize/2,this.b_full=this.hexSize,this.c_full=this.hexSize/2*Math.sqrt(3),this.a_hex=this.a_full*.95,this.b_hex=this.b_full*.95,this.c_hex=this.c_full*.95},windowResizeUpdate(){this.mainCanvas.width=window.innerWidth,this.mainCanvas.height=window.innerHeight,this.animCanvas.width=window.innerWidth,this.animCanvas.height=window.innerHeight,this.halfCanvasWidth=this.mainCanvas.width/2,this.halfCanvasHeight=this.mainCanvas.height/2;const e=Math.min(this.halfCanvasWidth,this.halfCanvasHeight);this.scales=e/7},getEnegry(e){if(!e.details)return 0;let t=document.querySelector('input[name="energy"]:checked').value;return Math.floor(e.details.energy*t/100)},colorIsEqual(e,t){return e.r==t.r&&e.g==t.g&&e.b==t.b},isNeighborHex(e,t){return this.cube_distance(e,t)==1},cube_distance(e,t){return Math.max(Math.abs(e.q-t.q),Math.abs(e.r-t.r),Math.abs(e.s-t.s))}}};const Zt=e=>(fr("data-v-00b3a354"),e=e(),_r(),e),$i=Zt(()=>It("canvas",{id:"mainCanvas"},null,-1)),Qi=Zt(()=>It("canvas",{id:"animationCanvas"},null,-1)),Ki=[$i,Qi];function Ji(e,t,n,i,s,o){return At(),St("div",null,Ki)}const Vi=hr(Gi,[["render",Ji],["__scopeId","data-v-00b3a354"]]),Yi={class:"flex flex-col items-center gap-20 bg-base-100 py-20"},es=br({__name:"MainPage",setup(e){return(t,n)=>(At(),St("div",Yi,[mr(Vi)]))}});export{es as default};
