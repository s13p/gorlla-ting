"use strict";(globalThis.webpackChunkchumbi_valley_react=globalThis.webpackChunkchumbi_valley_react||[]).push([[982],{36982:(e,t,r)=>{r.r(t),r.d(t,{PreloaderOutro:()=>_,default:()=>f,onPreloaderOutroFinished:()=>h,usePreloaderOutro:()=>g});var i=r(67294),n=r(5143),s=r(77834),o=r(29558),u=r(10902),a=r(24219),l=r(51254);let c=new o.Event;const d=(0,l.hu)("[PreloaderOutro]");function h(e){null==c?e():c.on(e)}const g=()=>{(0,i.useEffect)((()=>{const e=u.pz.currentPriority>=1?Promise.resolve(1):(0,o.oneTimeSubscription)(u.pz.afterPriorityRun,(e=>1===e)),t=Promise.race([e,(0,o.oneTimeSubscription)(u.pz.finished)]),i=1e3-(Date.now()-(window.PRELOADER_START_TIME||0));d.log("Waiting for lazy... Min delay left =",i,"; current priority =",u.pz.currentPriority),Promise.all([(0,a.GR)(t,2e4,i),Promise.resolve().then(r.bind(r,62642)).then((e=>e.gsap))]).then((e=>{let[t,r]=e;d.log("Finishing",t),async function(e){if(null==c)return;const t=s.u3.Current.rem;c.trigger(),c=null,e.timeline().to(".preloader-img__creepers",{y:-400*t,duration:(0,n.T)(60),ease:n.V.twoSidedEase},0).to(".preloader-img__grass",{y:400*t,duration:(0,n.T)(60),ease:n.V.twoSidedEase},0).to(".preloader-img__tree--left",{x:-200*t,duration:(0,n.T)(60),ease:n.V.twoSidedEase},0).to(".preloader-img__tree--right",{x:200*t,duration:(0,n.T)(60),ease:n.V.twoSidedEase},0).to(".preloader-wrap.active",{autoAlpha:0,duration:(0,n.T)(30),ease:n.V.defaultEase},(0,n.T)(30)).fromTo(".navbar",{autoAlpha:0},{autoAlpha:1,duration:(0,n.T)(30),ease:n.V.defaultEase},(0,n.T)(30)).call((()=>{document.body.classList.remove("modal-active");const e=document.querySelector(".preloader-wrap");e&&e.remove()}))}(r)}))}),[])},_=()=>(g(),null),f=_},5143:(e,t,r)=>{r.d(t,{T:()=>d,V:()=>c});var i=r(62642),n=r(7310);i.default.registerPlugin(n.Z);const s=n.Z.create("default","0.17, 0.17, 0.45, 1.00"),o=n.Z.create("reverse","0.55, 0.00, 0.83, 0.83"),u=n.Z.create("two-sided","0.63, 0.00, 0.43, 1.00"),a=n.Z.create("extra","0.59, 0.00, 0.45, 1.00"),l=n.Z.create("bouncy","M0,0 C0,0 0.23,0.136 0.326,0.382 0.421,0.625 0.462,1.238 0.608,1.238 0.678,1.238 0.764,1.01 1,1 1.034,0.998 1,1 1,1 "),c={defaultEase:s,reverseEase:o,twoSidedEase:u,extraEase:a,infiniteCombEase:n.Z.create("infinite-comb","0.39,0.00,0.07,1.00"),bouncyEase:l},d=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;return e/t}},10902:(e,t,r)=>{r.d(t,{ZP:()=>u,pz:()=>s});var i=r(72029),n=r(67294);const s=(new i.c).withLogger("Lazy");let o=!1;const u=()=>((0,n.useEffect)((()=>{o||(o=!0,s.start())}),[]),null)},24219:(e,t)=>{t.GR=void 0,t.GR=function(e,t,r){const i=Date.now();return new Promise(((n,s)=>{let o=!1;const u=(e,t)=>{if(o)return;o=!0;const s=()=>Date.now()-i,u=()=>n({resolved:e,timedOut:t,elapsed:s()}),a=null!=r?r-s():-1;a>=0?setTimeout(u,a):u()},a=setTimeout((()=>{u(void 0,!0)}),t);e.then((e=>{clearTimeout(a),u(e,!1)})).catch(s)}))}},72029:(e,t,r)=>{t.c=void 0;const i=r(55928),n=r(29558);t.c=class{constructor(){this._queues={},this._inProgress=null,this._currentIndex=0,this._maxIndex=0,this._logger=null,this._beforePriorityRun=new n.Event,this._afterPriorityRun=new n.Event,this._finished=new n.Event,this._executeLoader=async(e,t,r)=>{var i,n;try{await e()}catch(e){null===(i=this._logger)||void 0===i||i.warn("Failed to process queue item at priority =",t," at index =",r||"?"),null===(n=this._logger)||void 0===n||n.error(e)}}}get currentPriority(){return this._currentIndex}get inProgress(){return this._inProgress}get beforePriorityRun(){return this._beforePriorityRun.expose()}get afterPriorityRun(){return this._afterPriorityRun.expose()}get finished(){return this._finished.expose()}withLogger(e){return this._logger=(0,i.createLogger)(`[Queue:${e||"?"}]`),this}enqueue(e,t){const r=Math.round(t||0);if(this._inProgress&&r<this._currentIndex||!1===this._inProgress)return this._executeLoader(e,r,1e3),()=>!1;const i=this.getQueue(r);return i.push(e),this._maxIndex=Math.max(this._maxIndex,r),()=>{if(null!=this._inProgress&&this._currentIndex>=r)return!1;const t=i.findIndex((t=>t===e));return t>=0&&(i.splice(t,1),!0)}}async start(){var e;if(!this._inProgress){this._inProgress=!0;try{await this.tryStartQueue()}catch(t){return null===(e=this._logger)||void 0===e||e.warn("Failed to process queue:",t),!1}return!0}}getQueue(e=0){let t=this._queues[e];return t||(t=[],this._queues[e]=t),t}async tryStartQueue(){var e,t,r,i;let n=null,s=0;for(await this._beforePriorityRun.triggerAsync(this._currentIndex);(null===(e=n=this._queues[this._currentIndex])||void 0===e?void 0:e.length)&&!(s++>5);){null===(t=this._logger)||void 0===t||t.log("Processing priority =",this._currentIndex,"; count =",n.length);const e=n.slice();n.length=0,await Promise.all(e.map(((e,t)=>this._executeLoader(e,this._currentIndex,t))))}if((null==n?void 0:n.length)||0!==s||null===(r=this._logger)||void 0===r||r.log("Skipping priority =",this._currentIndex,"; no items"),await this._afterPriorityRun.triggerAsync(this._currentIndex),this._currentIndex+1>this._maxIndex)return this._inProgress=!1,null===(i=this._logger)||void 0===i||i.log("Finished processing at index =",this._currentIndex),void this._finished.trigger();++this._currentIndex,await this.tryStartQueue()}}}}]);
//# sourceMappingURL=982.982.a05488.js.map