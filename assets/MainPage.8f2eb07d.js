var pt=Object.defineProperty;var _t=(e,t,s)=>t in e?pt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var V=(e,t,s)=>(_t(e,typeof t!="symbol"?t+"":t,s),s),G=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var c=(e,t,s)=>(G(e,t,"read from private field"),s?s.call(e):t.get(e)),_=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},j=(e,t,s,i)=>(G(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s);var f=(e,t,s)=>(G(e,t,"access private method"),s);import{_ as ft,o as R,c as H,E as gt,a as qt,b as o,d as Tt,t as St,n as z,w as M,v as L,e as Q,f as Nt,r as Mt,g as Et,h as It}from"./App.b15d49dd.js";const w=e=>Number.isFinite(e)&&!Number.isNaN(e),$=e=>typeof e=="object"&&e!==null,Rt=e=>typeof e=="function",F=e=>$(e)&&w(e.col)&&w(e.row),Ht=e=>$(e)&&w(e.x)&&w(e.y),X=e=>Array.isArray(e)&&w(e[0])&&w(e[1]),B=(e,t)=>t+e*(t&1)>>1,tt=([e,t,s=-e-t])=>({q:e,r:t,s});function U({q:e,r:t,s}){const i=w(e),n=w(t),a=w(s);if(i&&n&&a)return{q:e,r:t,s};if(i&&n)return{q:e,r:t,s:-e-t};if(i&&a)return{q:e,r:-e-s,s};if(n&&a)return{q:-t-s,r:t,s};throw new TypeError(`Can't determine three cube coordinates from less than two coordinates. Received: { q: ${e}, r: ${t}, s: ${s} }.`)}var g=(e=>(e.FLAT="FLAT",e.POINTY="POINTY",e))(g||{});function Ot(e,t){if($(e)&&e.xRadius>0&&e.yRadius>0)return e;if($(e)&&e.width>0&&e.height>0){const{width:s,height:i}=e;return t===g.POINTY?{xRadius:s/Math.sqrt(3),yRadius:i/2}:{xRadius:s/2,yRadius:i/Math.sqrt(3)}}if(e>0)return{xRadius:e,yRadius:e};throw new TypeError(`Invalid dimensions: ${JSON.stringify(e)}. Dimensions must be expressed as an Ellipse ({ xRadius: number, yRadius: number }), a Rectangle ({ width: number, height: number }) or a number.`)}function Pt(e,t){if(Ht(e))return e;if(!t)throw new TypeError(`Supply a bounding box ({ width: number, height: number }). Received: ${JSON.stringify(t)}`);if(e==="topLeft")return{x:t.width*-.5,y:t.height*-.5};throw new TypeError(`Invalid origin: ${JSON.stringify(e)}. Origin must be expressed as a Point ({ x: number, y: number }) or the string 'topLeft'.`)}class lt{constructor(t=[0,0]){V(this,"q");V(this,"r");const{q:s,r:i}=O(this,t);this.q=s,this.r=i}static get settings(){const{dimensions:t,orientation:s,origin:i,offset:n}=this.prototype;return{dimensions:t,orientation:s,origin:i,offset:n}}get center(){const{width:t,height:s,x:i,y:n}=this;return{x:t/2-i,y:s/2-n}}get col(){return ut(this).col}get corners(){const{orientation:t,width:s,height:i,x:n,y:a}=this;return t===g.POINTY?At(s,i,n,a):Wt(s,i,n,a)}get dimensions(){return E.dimensions}get height(){const{orientation:t,dimensions:{yRadius:s}}=this;return t===g.POINTY?s*2:s*Math.sqrt(3)}get isFlat(){return this.orientation===g.FLAT}get isPointy(){return this.orientation===g.POINTY}get orientation(){return E.orientation}get origin(){return E.origin}get offset(){return E.offset}get row(){return ut(this).row}get width(){const{orientation:t,dimensions:{xRadius:s}}=this;return t===g.POINTY?s*Math.sqrt(3):s*2}get x(){return S(this).x}get y(){return S(this).y}get s(){return-this.q-this.r}clone(t=this){return new this.constructor(t)}equals(t){return kt(this,F(t)?Ct(this,t):t)}toString(){return`${this.constructor.name}(${this.q},${this.r})`}translate(t){return Ft(this,t)}}const E={dimensions:{xRadius:1,yRadius:1},orientation:g.POINTY,origin:{x:0,y:0},offset:-1},At=(e,t,s,i)=>[{x:s+e*.5,y:i-t*.25},{x:s+e*.5,y:i+t*.25},{x:s,y:i+t*.5},{x:s-e*.5,y:i+t*.25},{x:s-e*.5,y:i-t*.25},{x:s,y:i-t*.5}],Wt=(e,t,s,i)=>[{x:s+e*.25,y:i-t*.5},{x:s+e*.5,y:i},{x:s+e*.25,y:i+t*.5},{x:s-e*.25,y:i+t*.5},{x:s-e*.5,y:i},{x:s-e*.25,y:i-t*.5}];function xt(e){const{dimensions:t,orientation:s,origin:i,offset:n}={...E,...e};return class extends lt{get dimensions(){return Ot(t,s)}get orientation(){return s}get origin(){return Pt(i,this)}get offset(){return n}}}function kt(e,t){if(F(e)&&F(t))return e.col===t.col&&e.row===t.row;if(Object.hasOwn(e,"col")||Object.hasOwn(t,"col"))throw new Error(`Can't compare coordinates where one are offset coordinates. Either pass two offset coordinates or two axial/cube coordinates. Received: ${JSON.stringify(e)} and ${JSON.stringify(t)}`);const s=X(e)?tt(e):e,i=X(t)?tt(t):t;return s.q===i.q&&s.r===i.r}const zt=(e,t,s)=>({col:e+B(s,t),row:t}),Lt=(e,t,s)=>({col:e,row:t+B(s,e)}),ut=({q:e,r:t,offset:s,isPointy:i})=>i?zt(e,t,s):Lt(e,t,s),S=({orientation:e,dimensions:{xRadius:t,yRadius:s},origin:{x:i,y:n},q:a,r})=>e===g.POINTY?{x:t*Math.sqrt(3)*(a+r/2)-i,y:s*3/2*r-n}:{x:t*3/2*a-i,y:s*Math.sqrt(3)*(r+a/2)-n},yt=(e,t,s)=>{const i=e-B(s,t),n=t,a=-i-n;return{q:i,r:n,s:a}},wt=(e,t,s)=>{const i=e,n=t-B(s,e),a=-i-n;return{q:i,r:n,s:a}},Ct=({offset:e,orientation:t},{col:s,row:i})=>t===g.POINTY?yt(s,i,e):wt(s,i,e),et=e=>{const{q:t,r:s,s:i}=U(e);let n=Math.round(t),a=Math.round(s),r=Math.round(i);const l=Math.abs(t-n),h=Math.abs(s-a),p=Math.abs(i-r);return l>h&&l>p?n=-a-r:h>p?a=-n-r:r=-n-a,{q:n,r:a,s:r}},$t=({dimensions:{xRadius:e,yRadius:t},origin:s,orientation:i},{x:n,y:a})=>(n+=s.x,a+=s.y,i===g.POINTY?et({q:Math.sqrt(3)*n/(3*e)-a/(3*t),r:2/3*(a/t)}):et({q:2/3*(n/e),r:Math.sqrt(3)*a/(3*t)-n/(3*e)}));function O(e,t){return X(t)?tt(t):F(t)?Ct(e,t):U(t)}function Ft(e,t){const{q:s,r:i,s:n}=U(e),{q:a,r,s:l}=U(t),h={q:s+a,r:i+r,s:n+l};return e instanceof lt?e.clone(h):h}function D(e,t,s){const{q:i,r:n,s:a}=O(e,t),{q:r,r:l,s:h}=O(e,s);return Math.max(Math.abs(i-r),Math.abs(n-l),Math.abs(a-h))}var st=(e=>(e.CLOCKWISE="CLOCKWISE",e.COUNTERCLOCKWISE="COUNTERCLOCKWISE",e))(st||{}),d=(e=>(e[e.N=0]="N",e[e.NE=1]="NE",e[e.E=2]="E",e[e.SE=3]="SE",e[e.S=4]="S",e[e.SW=5]="SW",e[e.W=6]="W",e[e.NW=7]="NW",e))(d||{});const Ut=[null,{q:1,r:-1},{q:1,r:0},{q:0,r:1},null,{q:-1,r:1},{q:-1,r:0},{q:0,r:-1}],Dt=[{q:0,r:-1},{q:1,r:-1},null,{q:1,r:0},{q:0,r:1},{q:-1,r:1},null,{q:-1,r:0}],Bt=({offset:e,q:t,r:s,col:i,row:n},a)=>{if(a===d.S||a===d.N){const l=a===d.S?n+1:n-1;return yt(i,l,e)}const r=Ut[a];return{q:t+r.q,r:s+r.r}},Jt=({offset:e,q:t,r:s,col:i,row:n},a)=>{if(a===d.E||a===d.W){const l=a===d.E?i+1:i-1;return wt(l,n,e)}const r=Dt[a];return{q:t+r.q,r:s+r.r}},it=(e,t)=>e.clone(e.isPointy?Bt(e,t):Jt(e,t));function nt(e){return Array.isArray(e)?function(t,s){const i=[];let n=s;for(const a of e)for(const r of a(t,n))i.push(n=r);return i}:e}function Kt(e){return Yt(e)?Vt(e):Gt(e)}function Yt(e){return e.direction in d}function Vt({start:e,direction:t,length:s}){return function(i,n){const a=[];let r=i(e??n);!e&&n&&(r=it(r,t));for(let l=0;l<s;l++)a.push(r),r=it(r,t);return a}}function Gt({start:e,stop:t}){return function(s,i){const n=[],a=s(e??i),r=dt(a),l=dt(O(a,t)),h=jt(r,l),p=D(a,a,t),J=1/Math.max(p,1);let T=!e&&i?1:0;for(T;T<=p;T++){const x=et(h(J*T));n.push(s(x))}return n}}function dt({q:e,r:t,s}){return{q:e+1e-6,r:t+1e-6,s:s+-2e-6}}function jt(e,t){return s=>{const i=e.q*(1-s)+t.q*s,n=e.r*(1-s)+t.r*s;return{q:i,r:n}}}function Zt(e,t,{includeSource:s=!0}={}){return function(i,n){const a=[];for(const r of nt(e)(i,n)){s&&a.push(r);for(const l of nt(t)(i,r))a.push(l)}return a}}d.E,d.N,d.S,d.W;function Qt(e){const{center:t,rotation:s=st.CLOCKWISE}=e;return function(i,n){const a=s.toUpperCase(),r=[];let{radius:l}=e,h;w(l)?h=i(t).translate({q:l,s:-l}):(h=i(e.start??n),l=D(h,t,h));const{q:p,r:J,s:T}=O(h,t);let x=i({q:p,r:J-l,s:T+l});if(a===st.CLOCKWISE)for(let C=0;C<6;C++)for(let N=0;N<l;N++){const{q:K,r:Y}=mt[C];x=i({q:x.q+K,r:x.r+Y}),r.push(x)}else for(let C=5;C>=0;C--)for(let N=0;N<l;N++){const{q:K,r:Y}=mt[C];x=i({q:x.q-K,r:x.r-Y}),r.push(x)}const vt=!e.start&&n,ct=r.findIndex(C=>C.equals(h));return r.slice(ct+(vt?1:0)).concat(r.slice(0,ct))}}const mt=[{q:1,r:0},{q:0,r:1},{q:-1,r:1},{q:-1,r:0},{q:0,r:-1},{q:1,r:-1}];function bt({radius:e,start:t,rotation:s}){return function(i,n){const a=t??n??[0,0],r=!t&&n?e:e+1;return Zt(Kt({start:t,direction:d.N,length:r}),Qt({center:a,rotation:s}))(i,n)}}var m,v,q,I,A,at,W,rt,k,ot;const b=class{constructor(t,s=[]){_(this,q);_(this,A);_(this,W);_(this,k);_(this,m,void 0);_(this,v,new Map);if(t instanceof b){j(this,m,c(t,m)),this.setHexes(t);return}j(this,m,t),this.setHexes(f(this,A,at).call(this,s))}static fromIterable(t){const s=t[Symbol.iterator]().next().value;if(!s)throw new TypeError(`Can't create grid from empty iterable: ${JSON.stringify(t)}`);return new b(s.constructor,t)}static fromJSON({hexSettings:t,coordinates:s}){const i=xt(t);return new b(i,s.map(n=>new i(n)))}get size(){return c(this,v).size}get pixelWidth(){if(this.size===0)return 0;const{isPointy:t,width:s}=this.hexPrototype,i=this.toArray(),{0:n,length:a,[a-1]:r}=t?i.sort((l,h)=>h.s-l.s||l.q-h.q):i.sort((l,h)=>l.q-h.q);return r.x-n.x+s}get pixelHeight(){if(this.size===0)return 0;const{isPointy:t,height:s}=this.hexPrototype,i=this.toArray(),{0:n,length:a,[a-1]:r}=t?i.sort((l,h)=>l.r-h.r):i.sort((l,h)=>h.s-l.s||l.r-h.r);return r.y-n.y+s}[Symbol.iterator](){return c(this,v).values()}get hexPrototype(){return c(this,m).prototype}createHex(t){return new(c(this,m))(t)}getHex(t){const s=this.createHex(t);return c(this,v).get(s.toString())}hasHex(t){return c(this,v).has(t.toString())}setHexes(t){for(const s of t){const i=s instanceof lt?s:new(c(this,m))(s);f(this,q,I).call(this,i)}return this}filter(t){var i;const s=new b(c(this,m));for(const n of this)t(n)&&f(i=s,q,I).call(i,n);return s}map(t){var i;const s=new b(c(this,m));for(const n of this)f(i=s,q,I).call(i,t(n));return s}traverse(t,{bail:s=!1}={}){var n;const i=new b(c(this,m));for(const a of f(this,A,at).call(this,t)){const r=this.getHex(a);if(r)f(n=i,q,I).call(n,r);else if(s)return i}return i}forEach(t){for(const s of this)t(s);return this}reduce(t,s){if(s===void 0){let n,a,r;for(const l of this)a=r,r=l,a&&(n=t(a,r));return n}let i=s;for(const n of this)i=t(i,n);return i}toArray(){return Array.from(this)}toJSON(){const{dimensions:t,orientation:s,origin:i,offset:n}=this.hexPrototype;return{hexSettings:{dimensions:t,orientation:s,origin:i,offset:n},coordinates:this.toArray()}}toString(){return`${this.constructor.name}(${this.size})`}pointToHex(t,{allowOutside:s=!0}={}){const i=$t(this.hexPrototype,t),n=this.getHex(i);return s?n??this.createHex(i):n}distance(t,s,{allowOutside:i=!0}={}){if(i)return D(this.hexPrototype,t,s);const n=this.getHex(t),a=this.getHex(s);if(!(!n||!a))return D(this.hexPrototype,n,a)}neighborOf(t,s,{allowOutside:i=!0}={}){const n=it(this.createHex(t),s),a=this.getHex(n);return i?a??n:a}};let P=b;m=new WeakMap,v=new WeakMap,q=new WeakSet,I=function(t){c(this,v).set(t.toString(),t)},A=new WeakSet,at=function(t){return f(this,W,rt).call(this,t)?f(this,k,ot).call(this,t):Array.isArray(t)&&f(this,W,rt).call(this,t[0])?f(this,k,ot).call(this,nt(t)):t},W=new WeakSet,rt=function(t){return Rt(t)},k=new WeakSet,ot=function(t){return t(this.createHex.bind(this))};const ht=xt({dimensions:52,orientation:"FLAT",origin:{x:-500,y:-400},highlight:!1});let Z=new P(ht),u=[],y=gt;function Xt(e){let t=new P(ht,bt({radius:1*e}));for(let s of t)s.type="#001D37",s.highlight=!1;return t}const te={data(){return{camera:{x:0,y:0,zoom:1},mainCanvas:null,animCanvas:null,mainCtx:null,scales:0,hexSize:0,halfCanvasWidth:0,halfCanvasHeight:0,isdblclick:!1,a_full:0,b_full:0,c_full:0,a_hex:0,b_hex:0,c_hex:0}},async mounted(){y=gt,this.mainCanvas=document.querySelector("#mainCanvas"),this.animCanvas=document.querySelector("#animationCanvas"),this.mainCtx=this.mainCanvas.getContext("2d"),window.addEventListener("resize",()=>{this.windowResizeUpdate(),this.zoomUpdate()}),this.initiateControls(),this.initiateMap(y),this.animCanvas.addEventListener("click",async({offsetX:e,offsetY:t})=>{if(await this.sleep(500),this.isdblclick)return;e+=this.camera.x-this.mainCanvas.width/2,t+=this.camera.y-this.mainCanvas.height/2;const s=Z.pointToHex({x:e,y:t});for(let i of u)i.x==s.x&&i.y==s.y?i.highlight=!i.highlight:i.highlight=!1}),this.animCanvas.addEventListener("dblclick",async({offsetX:e,offsetY:t})=>{this.isdblclick=!0,await this.sleep(500),this.isdblclick=!1,e+=this.camera.x-this.mainCanvas.width/2,t+=this.camera.y-this.mainCanvas.height/2;const s=Z.pointToHex({x:e,y:t});let i,n;for(let r of u)r.highlight&&(i=r),r.x==s.x&&r.y==s.y&&(n=r);if(!n||i&&!i.details)return;let a={x:s.q,y:s.r,z:s.s};if(!i)n.details||await y.newGame(a);else if(i.address.toString()==n.address.toString())await y.upgradeCell(n.address);else{if(!this.isNeighborHex(i,n))return;let r=this.getEnegry(i);const l=await y.getDetailsCell(i.address);l&&(console.log("_details",l),r=l.energy),n.details?this.colorIsEqual(i.details.color,n.details.color)?await y.helpCell(i.address,a,r):await y.attkCell(i.address,a,r):await y.markCell(i.address,a,r)}})},methods:{async sleep(e){return new Promise(t=>setTimeout(t,e))},async initiateMap(){await y.init(s=>{u=Xt(s),y.setMap(u)});let e=this.mainCanvas,t=this.animCanvas;e.width=window.innerWidth,e.height=window.innerHeight,t.width=window.innerWidth,t.height=window.innerHeight,this.calculateHexDimensions(),this.windowResizeUpdate(),this.zoomUpdate(),this.drawMap(),this.camera.x=this.halfCanvasWidth,this.camera.y=this.halfCanvasHeight,this.recalcEnergy()},recalcEnergy(){for(let e of u)!e.details||this.calculateEnergy(e);setTimeout(this.recalcEnergy,200)},calculateEnergy(e){let t=Date.now()/1e3;if(1*e.details.lastCalcTime>=t)return;let s=1*e.details.energy,i=1*e.details.energyMax;if(s>i){let n=100*e.details.speed*(t-e.details.lastCalcTime);s-n>i?s=s-n:s=i}else s<i&&(s=Math.min(s+e.details.energySec*e.details.speed*(t-e.details.lastCalcTime),i));e.details.lastCalcTime=t,e.details.energy=Math.floor(s)},zoomUpdate(){const e=Z.pointToHex({x:this.camera.x,y:this.camera.y}),t=e.x,s=e.y;this.hexSize=this.scales,this.calculateHexDimensions();let i=new P(ht,bt({radius:u.radius}));for(let n=0;n<u.length;n++)u[n].size=i[n].size,u[n].x===t&&u[n].y===s&&(this.camera.x=Math.round(S(u[n]).x+this.b_full+this.hexSize/2),this.camera.y=Math.round(S(u[n]).y+this.c_full))},drawMap(){this.mainCtx.setTransform(1,0,0,1,0,0),this.mainCtx.fillStyle="black",this.mainCtx.fillRect(0,0,this.mainCanvas.width,this.mainCanvas.height),this.mainCtx.translate(-this.camera.x+this.halfCanvasWidth,-this.camera.y+this.halfCanvasHeight);for(let e of u){let t=S(e).x,s=S(e).y;if(Math.abs(t-this.camera.x)>this.halfCanvasWidth+this.hexSize||Math.abs(s-this.camera.y)>this.halfCanvasHeight+this.hexSize)continue;e.highlight&&(this.mainCtx.strokeStyle="#00E4FF",this.mainCtx.beginPath(),this.mainCtx.moveTo(t+this.a_full,s-this.c_full),this.mainCtx.lineTo(t+this.b_full,s),this.mainCtx.lineTo(t+this.a_full,s+this.c_full),this.mainCtx.lineTo(t-this.a_full,s+this.c_full),this.mainCtx.lineTo(t-this.b_full,s),this.mainCtx.lineTo(t-this.a_full,s-this.c_full),this.mainCtx.closePath(),this.mainCtx.stroke());let i=e.details?`${e.details.color.r}, ${e.details.color.g}, ${e.details.color.b}`:e.type;this.mainCtx.fillStyle=`rgba(${i},1)`,this.mainCtx.fillStyle=i,this.mainCtx.strokeStyle="#0095A7",this.mainCtx.beginPath(),this.mainCtx.moveTo(t+this.a_hex,s-this.c_hex),this.mainCtx.lineTo(t+this.b_hex,s),this.mainCtx.lineTo(t+this.a_hex,s+this.c_hex),this.mainCtx.lineTo(t-this.a_hex,s+this.c_hex),this.mainCtx.lineTo(t-this.b_hex,s),this.mainCtx.lineTo(t-this.a_hex,s-this.c_hex),this.mainCtx.closePath(),this.mainCtx.stroke(),this.mainCtx.fill();let n=new Image;n.src="/star.svg";let a=new Image;a.src="/star-yellow.svg",e.details?(this.setText(this.mainCtx,t,s-5,`${e.details.energy}`,10,"#FFC700"),e.details.level==="0"?(this.mainCtx.drawImage(a,t-23,s+5,15,15),this.mainCtx.drawImage(n,t-8,s+5,15,15),this.mainCtx.drawImage(n,t+7,s+5,15,15)):e.details.level==="1"?(this.mainCtx.drawImage(a,t-23,s+5,15,15),this.mainCtx.drawImage(a,t-8,s+5,15,15),this.mainCtx.drawImage(n,t+7,s+5,15,15)):e.details.level==="2"&&(this.mainCtx.drawImage(a,t-23,s+5,15,15),this.mainCtx.drawImage(a,t-8,s+5,15,15),this.mainCtx.drawImage(a,t+7,s+5,15,15))):(this.setText(this.mainCtx,t,s-5,0,10,"#FFC700"),this.mainCtx.drawImage(n,t-23,s+5,15,15),this.mainCtx.drawImage(n,t-8,s+5,15,15),this.mainCtx.drawImage(n,t+7,s+5,15,15))}requestAnimationFrame(this.drawMap)},setText(e,t,s,i,n=10,a="white",r="center"){let l=`${n*(this.camera.zoom+1)}px JetBrains Mono`;e.font=l,e.fillStyle=a,e.textAlign=r,e.fillText(i,t,s,this.hexSize)},calculateHexDimensions(){this.a_full=this.hexSize/2,this.b_full=this.hexSize,this.c_full=this.hexSize/2*Math.sqrt(3),this.a_hex=this.a_full*.95,this.b_hex=this.b_full*.95,this.c_hex=this.c_full*.95},windowResizeUpdate(){this.mainCanvas.width=window.innerWidth,this.mainCanvas.height=window.innerHeight,this.animCanvas.width=window.innerWidth,this.animCanvas.height=window.innerHeight,this.halfCanvasWidth=this.mainCanvas.width/2,this.halfCanvasHeight=this.mainCanvas.height/2;const e=Math.min(this.halfCanvasWidth,this.halfCanvasHeight);this.scales=e/7},getEnegry(e){if(!e.details)return 0;let t=100;return Math.floor(e.details.energy*t/100)},colorIsEqual(e,t){return e.r==t.r&&e.g==t.g&&e.b==t.b},isNeighborHex(e,t){return this.cube_distance(e,t)==1},cube_distance(e,t){return Math.max(Math.abs(e.q-t.q),Math.abs(e.r-t.r),Math.abs(e.s-t.s))},initiateControls(){let e=null;document.addEventListener("mouseup",()=>{clearInterval(e)}),document.addEventListener("keyup",()=>{clearInterval(e)}),document.addEventListener("keydown",t=>{switch(t.code){case"ArrowUp":case"KeyW":clearInterval(e),e=setInterval(()=>{this.camera.y-=5},10);break;case"ArrowLeft":case"KeyA":clearInterval(e),e=setInterval(()=>{this.camera.x-=5},10);break;case"ArrowRight":case"KeyD":clearInterval(e),e=setInterval(()=>{this.camera.x+=5},10);break;case"ArrowDown":case"KeyS":clearInterval(e),e=setInterval(()=>{this.camera.y+=5},10);break}})}}},ee=qt('<div data-v-ed4613b3><canvas id="mainCanvas" data-v-ed4613b3></canvas><canvas id="animationCanvas" data-v-ed4613b3></canvas></div><div data-behavior="extension" style="display:none;" class="login-status" data-v-ed4613b3> Please install <a href="https://l1.broxus.com/everscale/wallet" data-v-ed4613b3>EVER Wallet</a></div><div data-behavior="login" style="display:none;" class="login-status" data-v-ed4613b3> Please authorize your account on the Test Network </div>',3),se=[ee];function ie(e,t,s,i,n,a){return R(),H("div",null,se)}const ne=ft(te,[["render",ie],["__scopeId","data-v-ed4613b3"]]),ae="/arrow.svg",re="/users.svg";const oe={data(){return{showControls:!0,usersNumber:3,roomName:"",activeTab:"games"}},methods:{setUsersNumber(e){e==="down"&&this.usersNumber>0?this.usersNumber--:e==="up"&&this.usersNumber>=0&&this.usersNumber++}}},le={class:"controls-wrapper","data-behavior":"main",style:{display:"none"}},he={class:"controls"},ce={class:"games-tab"},ue={class:"table-games",id:"tblRouters"},de=o("tr",{class:"routers-heading"},[o("td",{style:{width:"70%"}},"Room name"),o("td",null,"Players"),o("td")],-1),me={class:"flex"},fe=o("img",{src:re,alt:"users"},null,-1),ge={class:"users-number"},xe=o("path",{d:"M25.1525 21.7346C25.5895 22.5576 25.6143 23.3914 25.2271 24.2358C24.8412 25.0786 24.2448 25.5 23.438 25.5L2.56252 25.5C1.75574 25.5 1.15872 25.0786 0.771462 24.2358C0.385551 23.3914 0.411099 22.5576 0.848107 21.7346L11.2859 1.61112C11.6893 0.870375 12.2607 0.500002 13.0003 0.500002C13.7398 0.500002 14.3113 0.870375 14.7147 1.61112L25.1525 21.7346Z",fill:"#FFC700"},null,-1),ye=[xe],we=["value"],Ce=o("path",{d:"M25.1525 21.7346C25.5895 22.5576 25.6143 23.3914 25.2271 24.2358C24.8412 25.0786 24.2448 25.5 23.438 25.5L2.56252 25.5C1.75574 25.5 1.15872 25.0786 0.771462 24.2358C0.385551 23.3914 0.411099 22.5576 0.848107 21.7346L11.2859 1.61112C11.6893 0.870375 12.2607 0.500002 13.0003 0.500002C13.7398 0.500002 14.3113 0.870375 14.7147 1.61112L25.1525 21.7346Z",fill:"#FFC700"},null,-1),be=[Ce],ve=o("td",null,[o("button",{class:"button-add",type:"button","data-behavior":"addRouterAction"}," +Add ")],-1),pe={class:"thisgame-tab"},_e=o("table",{id:"tblUsers"},[o("tbody",null,[o("tr",{class:"routers-heading"},[o("td",{style:{width:"70%"}},"User address"),o("td",{colspan:"2"},"Cells"),o("td")])])],-1),qe=o("table",{class:"mt-8"},[o("tbody",null,[o("tr",null,[o("td",{colspan:"3"},"_________")]),o("tr",null,[o("td",{colspan:"3"},[o("button",{type:"button","data-behavior":"destroyCellsAction"}," Destroy Cells ")])]),o("tr",null,[o("td",{colspan:"3"},[o("button",{type:"button","data-behavior":"calcRewardsAction"}," Calc Rewards ")])]),o("tr",null,[o("td",{colspan:"3"},[o("button",{type:"button","data-behavior":"claimRewardAction"}," Claim Reward ")])])])],-1),Te=[_e,qe],Se={class:"leaders-tab"},Ne=o("table",{id:"tblLiders"},[o("tbody",null,[o("tr",{class:"routers-heading"},[o("td",{style:{width:"70%"}},"User address"),o("td",{colspan:"2"},"Cells"),o("td")])])],-1),Me=o("table",{class:"mt-8"},[o("tbody",null,[o("tr",null,[o("td",{colspan:"1"},"_________")]),o("tr",null,[o("td",{colspan:"1"},[o("button",{type:"button","data-behavior":"getRoutersAction"}," Get Routers ")])])])],-1),Ee=[Ne,Me],Ie={class:"bottom-buttons"};function Re(e,t,s,i,n,a){const r=Mt("perfect-scrollbar");return R(),H("div",le,[o("button",{class:"show-controls",onClick:t[0]||(t[0]=l=>n.showControls=!n.showControls)},[Tt(St(n.activeTab==="games"?"Game rooms":"Leader board")+" ",1),o("img",{class:z(["arrow-image",[n.showControls?"down":"up"]]),src:ae},null,2)]),M(o("div",he,[Q(r,null,{default:Nt(()=>[M(o("div",ce,[o("table",ue,[o("tbody",null,[de,o("tr",null,[o("td",null,[M(o("input",{type:"text",id:"router_name",name:"name",placeholder:"Room name",class:"router-name","onUpdate:modelValue":t[1]||(t[1]=l=>n.roomName=l)},null,512),[[Et,n.roomName]])]),o("td",me,[fe,o("div",ge,[(R(),H("svg",{onClick:t[2]||(t[2]=l=>a.setUsersNumber("up")),width:"7",height:"5",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"arrow-number up"},ye)),o("input",{type:"number",id:"router_users",name:"users",min:"2",max:"10",step:"1",value:n.usersNumber},null,8,we),(R(),H("svg",{onClick:t[3]||(t[3]=l=>a.setUsersNumber("down")),width:"7",height:"5",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"arrow-number down"},be))])]),ve])])])],512),[[L,n.activeTab==="games"]]),M(o("div",pe,Te,512),[[L,n.activeTab==="thisgame"]]),M(o("div",Se,Ee,512),[[L,n.activeTab==="top"]])]),_:1}),o("div",Ie,[o("button",{class:z(["button-games",{active:n.activeTab==="games"}]),onClick:t[4]||(t[4]=l=>n.activeTab="games")}," Game rooms ",2),o("button",{class:z(["button-thisgame",{active:n.activeTab==="thisgame"}]),onClick:t[5]||(t[5]=l=>n.activeTab="thisgame")}," This game ",2),o("button",{class:z(["button-top",{active:n.activeTab==="top"}]),onClick:t[6]||(t[6]=l=>n.activeTab="top")}," 30 days TOP ",2)])],512),[[L,n.showControls]])])}const He=ft(oe,[["render",Re]]),Oe={class:"flex flex-col items-center gap-20 bg-base-100"},We=It({__name:"MainPage",setup(e){return(t,s)=>(R(),H("div",Oe,[Q(He),Q(ne)]))}});export{We as default};
