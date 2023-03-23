import{u as Ue,a as ht,c as yt,b as bt,f as st,d as Rt}from"./use-key-composition.4627ba4a.js";import{I as Te,G as Ht,H as Lt,g as S,h as w,M as ve,m as Re,r as T,w as ie,J as We,L as ct,ab as Pt,Y as Dt,az as $t,k as Kt,an as Nt,aq as jt,a3 as oe,aA as Qt,aB as Ut,R as Ne,aw as Ae,aC as dt,O as Wt,S as Ve,av as Xt}from"./index.9a7e15b2.js";import{Q as Oe,R as Yt}from"./use-router-link.f178a329.js";import{u as Gt,a as Jt}from"./use-dark.d3065166.js";import{c as Zt,d as el,a as tl,h as ll}from"./render.a71c528d.js";import{Q as ul,a as nl}from"./QItem.c574c170.js";import{u as ol,a as il,b as al,d as rl,e as sl,Q as cl}from"./use-prevent-scroll.8900c8b7.js";import{b as dl,d as fl,e as vl,r as ft,f as vt,h as ml,i as Sl,Q as gl}from"./QMenu.1455cfa9.js";import{u as hl}from"./use-timeout.5844ca9e.js";import{u as yl}from"./use-tick.58d47302.js";import{b as bl}from"./focus-manager.32f8d49a.js";import{r as Qe}from"./rtl.b51694b1.js";import{u as wl,c as Cl}from"./use-form.220229f9.js";var Vl=Te({name:"QField",inheritAttrs:!1,props:Ue,emits:ht,setup(){return yt(bt())}});const xl={xs:8,sm:10,md:14,lg:20,xl:24};var kl=Te({name:"QChip",props:{...Gt,...Ht,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:f,emit:a}){const{proxy:{$q:k}}=Re(),p=Jt(e,k),o=Lt(e,xl),A=S(()=>e.selected===!0||e.icon!==void 0),b=S(()=>e.selected===!0?e.iconSelected||k.iconSet.chip.selected:e.icon),g=S(()=>e.iconRemove||k.iconSet.chip.remove),q=S(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),r=S(()=>{const V=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(V?` text-${V} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(q.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(p.value===!0?" q-chip--dark q-dark":"")}),x=S(()=>{const V=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},$={...V,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||k.lang.label.remove};return{chip:V,remove:$}});function M(V){V.keyCode===13&&C(V)}function C(V){e.disable||(a("update:selected",!e.selected),a("click",V))}function H(V){(V.keyCode===void 0||V.keyCode===13)&&(ve(V),e.disable===!1&&(a("update:modelValue",!1),a("remove")))}function E(){const V=[];q.value===!0&&V.push(w("div",{class:"q-focus-helper"})),A.value===!0&&V.push(w(Oe,{class:"q-chip__icon q-chip__icon--left",name:b.value}));const $=e.label!==void 0?[w("div",{class:"ellipsis"},[e.label])]:void 0;return V.push(w("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},el(f.default,$))),e.iconRight&&V.push(w(Oe,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&V.push(w(Oe,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:g.value,...x.value.remove,onClick:H,onKeyup:H})),V}return()=>{if(e.modelValue===!1)return;const V={class:r.value,style:o.value};return q.value===!0&&Object.assign(V,x.value.chip,{onClick:C,onKeyup:M}),Zt("div",V,E(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Yt,e.ripple]])}}});let Ee=0;const ql={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},mt={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var zl=Te({name:"QDialog",inheritAttrs:!1,props:{...ol,...dl,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...il,"shake","click","escapeKey"],setup(e,{slots:f,emit:a,attrs:k}){const p=Re(),o=T(null),A=T(!1),b=T(!1);let g=null,q=null,r,x;const M=S(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:C}=sl(),{registerTimeout:H}=hl(),{registerTick:E,removeTick:V}=yl(),{transitionProps:$,transitionStyle:L}=fl(e,()=>mt[e.position][0],()=>mt[e.position][1]),{showPortal:U,hidePortal:F,portalIsAccessible:I,renderPortal:W}=vl(p,o,_,"dialog"),{hide:Y}=al({showing:A,hideOnRouteChange:M,handleShow:se,handleHide:Z,processOnMount:!0}),{addToHistory:le,removeFromHistory:ae}=rl(A,Y,M),J=S(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${ql[e.position]}`+(b.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),P=S(()=>A.value===!0&&e.seamless!==!0),ue=S(()=>e.autoClose===!0?{onClick:u}:{}),re=S(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${P.value===!0?"modal":"seamless"}`,k.class]);ie(()=>e.maximized,d=>{A.value===!0&&i(d)}),ie(P,d=>{C(d),d===!0?(ml(v),Sl(ee)):(ft(v),vt(ee))});function se(d){le(),q=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,i(e.maximized),U(),b.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),E(K)):V(),H(()=>{if(p.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:s,bottom:h}=document.activeElement.getBoundingClientRect(),{innerHeight:R}=window,y=window.visualViewport!==void 0?window.visualViewport.height:R;s>0&&h>y/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-y,h>=R?1/0:Math.ceil(document.scrollingElement.scrollTop+h-y/2))),document.activeElement.scrollIntoView()}x=!0,o.value.click(),x=!1}U(!0),b.value=!1,a("show",d)},e.transitionDuration)}function Z(d){V(),ae(),te(!0),b.value=!0,F(),q!==null&&(((d&&d.type.indexOf("key")===0?q.closest('[tabindex]:not([tabindex^="-"])'):void 0)||q).focus(),q=null),H(()=>{F(!0),b.value=!1,a("hide",d)},e.transitionDuration)}function K(d){bl(()=>{let s=o.value;s===null||s.contains(document.activeElement)===!0||(s=(d!==""?s.querySelector(d):null)||s.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||s.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||s.querySelector("[autofocus], [data-autofocus]")||s,s.focus({preventScroll:!0}))})}function ne(d){d&&typeof d.focus=="function"?d.focus({preventScroll:!0}):K(),a("shake");const s=o.value;s!==null&&(s.classList.remove("q-animate--scale"),s.classList.add("q-animate--scale"),g!==null&&clearTimeout(g),g=setTimeout(()=>{g=null,o.value!==null&&(s.classList.remove("q-animate--scale"),K())},170))}function ee(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&ne():(a("escapeKey"),Y()))}function te(d){g!==null&&(clearTimeout(g),g=null),(d===!0||A.value===!0)&&(i(!1),e.seamless!==!0&&(C(!1),ft(v),vt(ee))),d!==!0&&(q=null)}function i(d){d===!0?r!==!0&&(Ee<1&&document.body.classList.add("q-body--dialog"),Ee++,r=!0):r===!0&&(Ee<2&&document.body.classList.remove("q-body--dialog"),Ee--,r=!1)}function u(d){x!==!0&&(Y(d),a("click",d))}function c(d){e.persistent!==!0&&e.noBackdropDismiss!==!0?Y(d):e.noShake!==!0&&ne()}function v(d){e.allowFocusOutside!==!0&&I.value===!0&&Pt(o.value,d.target)!==!0&&K('[tabindex]:not([tabindex="-1"])')}Object.assign(p.proxy,{focus:K,shake:ne,__updateRefocusTarget(d){q=d||null}}),We(te);function _(){return w("div",{role:"dialog","aria-modal":P.value===!0?"true":"false",...k,class:re.value},[w(ct,{name:"q-transition--fade",appear:!0},()=>P.value===!0?w("div",{class:"q-dialog__backdrop fixed-full",style:L.value,"aria-hidden":"true",tabindex:-1,onClick:c}):null),w(ct,$.value,()=>A.value===!0?w("div",{ref:o,class:J.value,style:L.value,tabindex:-1,...ue.value},tl(f.default)):null)])}return W}});const X=1e3,Al=["start","center","end","start-force","center-force","end-force"],wt=Array.prototype.filter,_l=window.getComputedStyle(document.body).overflowAnchor===void 0?Dt:function(e,f){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const a=e.children||[];wt.call(a,p=>p.dataset&&p.dataset.qVsAnchor!==void 0).forEach(p=>{delete p.dataset.qVsAnchor});const k=a[f];k&&k.dataset&&(k.dataset.qVsAnchor="")}))};function xe(e,f){return e+f}function je(e,f,a,k,p,o,A,b){const g=e===window?document.scrollingElement||document.documentElement:e,q=p===!0?"offsetWidth":"offsetHeight",r={scrollStart:0,scrollViewSize:-A-b,scrollMaxSize:0,offsetStart:-A,offsetEnd:-b};if(p===!0?(e===window?(r.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,r.scrollViewSize+=document.documentElement.clientWidth):(r.scrollStart=g.scrollLeft,r.scrollViewSize+=g.clientWidth),r.scrollMaxSize=g.scrollWidth,o===!0&&(r.scrollStart=(Qe===!0?r.scrollMaxSize-r.scrollViewSize:0)-r.scrollStart)):(e===window?(r.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,r.scrollViewSize+=document.documentElement.clientHeight):(r.scrollStart=g.scrollTop,r.scrollViewSize+=g.clientHeight),r.scrollMaxSize=g.scrollHeight),a!==null)for(let x=a.previousElementSibling;x!==null;x=x.previousElementSibling)x.classList.contains("q-virtual-scroll--skip")===!1&&(r.offsetStart+=x[q]);if(k!==null)for(let x=k.nextElementSibling;x!==null;x=x.nextElementSibling)x.classList.contains("q-virtual-scroll--skip")===!1&&(r.offsetEnd+=x[q]);if(f!==e){const x=g.getBoundingClientRect(),M=f.getBoundingClientRect();p===!0?(r.offsetStart+=M.left-x.left,r.offsetEnd-=M.width):(r.offsetStart+=M.top-x.top,r.offsetEnd-=M.height),e!==window&&(r.offsetStart+=r.scrollStart),r.offsetEnd+=r.scrollMaxSize-r.offsetStart}return r}function St(e,f,a,k){f==="end"&&(f=(e===window?document.body:e)[a===!0?"scrollWidth":"scrollHeight"]),e===window?a===!0?(k===!0&&(f=(Qe===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-f),window.scrollTo(f,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,f):a===!0?(k===!0&&(f=(Qe===!0?e.scrollWidth-e.offsetWidth:0)-f),e.scrollLeft=f):e.scrollTop=f}function _e(e,f,a,k){if(a>=k)return 0;const p=f.length,o=Math.floor(a/X),A=Math.floor((k-1)/X)+1;let b=e.slice(o,A).reduce(xe,0);return a%X!==0&&(b-=f.slice(o*X,a).reduce(xe,0)),k%X!==0&&k!==p&&(b-=f.slice(k,A*X).reduce(xe,0)),b}const Bl={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},Ml={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...Bl};function pl({virtualScrollLength:e,getVirtualScrollTarget:f,getVirtualScrollEl:a,virtualScrollItemSizeComputed:k}){const p=Re(),{props:o,emit:A,proxy:b}=p,{$q:g}=b;let q,r,x,M=[],C;const H=T(0),E=T(0),V=T({}),$=T(null),L=T(null),U=T(null),F=T({from:0,to:0}),I=S(()=>o.tableColspan!==void 0?o.tableColspan:100);k===void 0&&(k=S(()=>o.virtualScrollItemSize));const W=S(()=>k.value+";"+o.virtualScrollHorizontal),Y=S(()=>W.value+";"+o.virtualScrollSliceRatioBefore+";"+o.virtualScrollSliceRatioAfter);ie(Y,()=>{K()}),ie(W,le);function le(){Z(r,!0)}function ae(u){Z(u===void 0?r:u)}function J(u,c){const v=f();if(v==null||v.nodeType===8)return;const _=je(v,a(),$.value,L.value,o.virtualScrollHorizontal,g.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd);x!==_.scrollViewSize&&K(_.scrollViewSize),ue(v,_,Math.min(e.value-1,Math.max(0,parseInt(u,10)||0)),0,Al.indexOf(c)>-1?c:r>-1&&u>r?"end":"start")}function P(){const u=f();if(u==null||u.nodeType===8)return;const c=je(u,a(),$.value,L.value,o.virtualScrollHorizontal,g.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd),v=e.value-1,_=c.scrollMaxSize-c.offsetStart-c.offsetEnd-E.value;if(q===c.scrollStart)return;if(c.scrollMaxSize<=0){ue(u,c,0,0);return}x!==c.scrollViewSize&&K(c.scrollViewSize),re(F.value.from);const d=Math.floor(c.scrollMaxSize-Math.max(c.scrollViewSize,c.offsetEnd)-Math.min(C[v],c.scrollViewSize/2));if(d>0&&Math.ceil(c.scrollStart)>=d){ue(u,c,v,c.scrollMaxSize-c.offsetEnd-M.reduce(xe,0));return}let s=0,h=c.scrollStart-c.offsetStart,R=h;if(h<=_&&h+c.scrollViewSize>=H.value)h-=H.value,s=F.value.from,R=h;else for(let y=0;h>=M[y]&&s<v;y++)h-=M[y],s+=X;for(;h>0&&s<v;)h-=C[s],h>-c.scrollViewSize?(s++,R=h):R=C[s]+h;ue(u,c,s,R)}function ue(u,c,v,_,d){const s=typeof d=="string"&&d.indexOf("-force")>-1,h=s===!0?d.replace("-force",""):d,R=h!==void 0?h:"start";let y=Math.max(0,v-V.value[R]),N=y+V.value.total;N>e.value&&(N=e.value,y=Math.max(0,N-V.value.total)),q=c.scrollStart;const me=y!==F.value.from||N!==F.value.to;if(me===!1&&h===void 0){ee(v);return}const{activeElement:ke}=document,G=U.value;me===!0&&G!==null&&G!==ke&&G.contains(ke)===!0&&(G.addEventListener("focusout",se),setTimeout(()=>{G!==null&&G.removeEventListener("focusout",se)})),_l(G,v-y);const Be=h!==void 0?C.slice(y,v).reduce(xe,0):0;if(me===!0){const ce=N>=F.value.from&&y<=F.value.to?F.value.to:N;F.value={from:y,to:ce},H.value=_e(M,C,0,y),E.value=_e(M,C,N,e.value),requestAnimationFrame(()=>{F.value.to!==N&&q===c.scrollStart&&(F.value={from:F.value.from,to:N},E.value=_e(M,C,N,e.value))})}requestAnimationFrame(()=>{if(q!==c.scrollStart)return;me===!0&&re(y);const ce=C.slice(y,v).reduce(xe,0),Se=ce+c.offsetStart+H.value,Me=Se+C[v];let qe=Se+_;if(h!==void 0){const He=ce-Be,j=c.scrollStart+He;qe=s!==!0&&j<Se&&Me<j+c.scrollViewSize?j:h==="end"?Me-c.scrollViewSize:Se-(h==="start"?0:Math.round((c.scrollViewSize-C[v])/2))}q=qe,St(u,qe,o.virtualScrollHorizontal,g.lang.rtl),ee(v)})}function re(u){const c=U.value;if(c){const v=wt.call(c.children,y=>y.classList&&y.classList.contains("q-virtual-scroll--skip")===!1),_=v.length,d=o.virtualScrollHorizontal===!0?y=>y.getBoundingClientRect().width:y=>y.offsetHeight;let s=u,h,R;for(let y=0;y<_;){for(h=d(v[y]),y++;y<_&&v[y].classList.contains("q-virtual-scroll--with-prev")===!0;)h+=d(v[y]),y++;R=h-C[s],R!==0&&(C[s]+=R,M[Math.floor(s/X)]+=R),s++}}}function se(){U.value!==null&&U.value!==void 0&&U.value.focus()}function Z(u,c){const v=1*k.value;(c===!0||Array.isArray(C)===!1)&&(C=[]);const _=C.length;C.length=e.value;for(let s=e.value-1;s>=_;s--)C[s]=v;const d=Math.floor((e.value-1)/X);M=[];for(let s=0;s<=d;s++){let h=0;const R=Math.min((s+1)*X,e.value);for(let y=s*X;y<R;y++)h+=C[y];M.push(h)}r=-1,q=void 0,H.value=_e(M,C,0,F.value.from),E.value=_e(M,C,F.value.to,e.value),u>=0?(re(F.value.from),oe(()=>{J(u)})):te()}function K(u){if(u===void 0&&typeof window!="undefined"){const h=f();h!=null&&h.nodeType!==8&&(u=je(h,a(),$.value,L.value,o.virtualScrollHorizontal,g.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd).scrollViewSize)}x=u;const c=parseFloat(o.virtualScrollSliceRatioBefore)||0,v=parseFloat(o.virtualScrollSliceRatioAfter)||0,_=1+c+v,d=u===void 0||u<=0?1:Math.ceil(u/k.value),s=Math.max(1,d,Math.ceil((o.virtualScrollSliceSize>0?o.virtualScrollSliceSize:10)/_));V.value={total:Math.ceil(s*_),start:Math.ceil(s*c),center:Math.ceil(s*(.5+c)),end:Math.ceil(s*(1+c)),view:d}}function ne(u,c){const v=o.virtualScrollHorizontal===!0?"width":"height",_={["--q-virtual-scroll-item-"+v]:k.value+"px"};return[u==="tbody"?w(u,{class:"q-virtual-scroll__padding",key:"before",ref:$},[w("tr",[w("td",{style:{[v]:`${H.value}px`,..._},colspan:I.value})])]):w(u,{class:"q-virtual-scroll__padding",key:"before",ref:$,style:{[v]:`${H.value}px`,..._}}),w(u,{class:"q-virtual-scroll__content",key:"content",ref:U,tabindex:-1},c.flat()),u==="tbody"?w(u,{class:"q-virtual-scroll__padding",key:"after",ref:L},[w("tr",[w("td",{style:{[v]:`${E.value}px`,..._},colspan:I.value})])]):w(u,{class:"q-virtual-scroll__padding",key:"after",ref:L,style:{[v]:`${E.value}px`,..._}})]}function ee(u){r!==u&&(o.onVirtualScroll!==void 0&&A("virtualScroll",{index:u,from:F.value.from,to:F.value.to-1,direction:u<r?"decrease":"increase",ref:b}),r=u)}K();const te=$t(P,g.platform.is.ios===!0?120:35);Kt(()=>{K()});let i=!1;return Nt(()=>{i=!0}),jt(()=>{if(i!==!0)return;const u=f();q!==void 0&&u!==void 0&&u!==null&&u.nodeType!==8?St(u,q,o.virtualScrollHorizontal,g.lang.rtl):J(r)}),We(()=>{te.cancel()}),Object.assign(b,{scrollTo:J,reset:le,refresh:ae}),{virtualScrollSliceRange:F,virtualScrollSliceSizeComputed:V,setVirtualScrollSize:K,onVirtualScrollEvt:te,localResetVirtualScroll:Z,padVirtualScroll:ne,scrollTo:J,reset:le,refresh:ae}}const gt=e=>["add","add-unique","toggle"].includes(e),Fl=".*+?^${}()|[]\\",Il=Object.keys(Ue);var Ul=Te({name:"QSelect",inheritAttrs:!1,props:{...Ml,...wl,...Ue,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:gt},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...ht,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:f,emit:a}){const{proxy:k}=Re(),{$q:p}=k,o=T(!1),A=T(!1),b=T(-1),g=T(""),q=T(!1),r=T(!1);let x=null,M,C,H,E=null,V,$,L,U;const F=T(null),I=T(null),W=T(null),Y=T(null),le=T(null),ae=Cl(e),J=Rt(nt),P=S(()=>Array.isArray(e.options)?e.options.length:0),ue=S(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:re,virtualScrollSliceSizeComputed:se,localResetVirtualScroll:Z,padVirtualScroll:K,onVirtualScrollEvt:ne,scrollTo:ee,setVirtualScrollSize:te}=pl({virtualScrollLength:P,getVirtualScrollTarget:kt,getVirtualScrollEl:lt,virtualScrollItemSizeComputed:ue}),i=bt(),u=S(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,n=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const l=e.mapOptions===!0&&M!==void 0?M:[],m=n.map(B=>xt(B,l));return e.modelValue===null&&t===!0?m.filter(B=>B!==null):m}return n}),c=S(()=>{const t={};return Il.forEach(n=>{const l=e[n];l!==void 0&&(t[n]=l)}),t}),v=S(()=>e.optionsDark===null?i.isDark.value:e.optionsDark),_=S(()=>st(u.value)),d=S(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||u.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),s=S(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),h=S(()=>P.value===0),R=S(()=>u.value.map(t=>Q.value(t)).join(", ")),y=S(()=>e.displayValue!==void 0?e.displayValue:R.value),N=S(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),me=S(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||u.value.some(N.value))),ke=S(()=>i.focused.value===!0?e.tabindex:-1),G=S(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":o.value===!0?"true":"false","aria-controls":`${i.targetUid.value}_lb`};return b.value>=0&&(t["aria-activedescendant"]=`${i.targetUid.value}_${b.value}`),t}),Be=S(()=>({id:`${i.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),ce=S(()=>u.value.map((t,n)=>({index:n,opt:t,html:N.value(t),selected:!0,removeAtIndex:Vt,toggleOption:de,tabindex:ke.value}))),Se=S(()=>{if(P.value===0)return[];const{from:t,to:n}=re.value;return e.options.slice(t,n).map((l,m)=>{const B=ge.value(l)===!0,z=t+m,O={clickable:!0,active:!1,activeClass:He.value,manualFocus:!0,focused:!1,disable:B,tabindex:-1,dense:e.optionsDense,dark:v.value,role:"option",id:`${i.targetUid.value}_${z}`,onClick:()=>{de(l)}};return B!==!0&&(De(l)===!0&&(O.active=!0),b.value===z&&(O.focused=!0),O["aria-selected"]=O.active===!0?"true":"false",p.platform.is.desktop===!0&&(O.onMousemove=()=>{o.value===!0&&he(z)})),{index:z,opt:l,html:N.value(l),label:Q.value(l),selected:O.active,focused:O.focused,toggleOption:de,setOptionIndex:he,itemProps:O}})}),Me=S(()=>e.dropdownIcon!==void 0?e.dropdownIcon:p.iconSet.arrow.dropdown),qe=S(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),He=S(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),j=S(()=>Pe(e.optionValue,"value")),Q=S(()=>Pe(e.optionLabel,"label")),ge=S(()=>Pe(e.optionDisable,"disable")),pe=S(()=>u.value.map(t=>j.value(t))),Ct=S(()=>{const t={onInput:nt,onChange:J,onKeydown:tt,onKeyup:Ze,onKeypress:et,onFocus:Ge,onClick(n){C===!0&&Ve(n)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=J,t});ie(u,t=>{M=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&i.innerLoading.value!==!0&&(A.value!==!0&&o.value!==!0||_.value!==!0)&&(H!==!0&&Ce(),(A.value===!0||o.value===!0)&&ye(""))},{immediate:!0}),ie(()=>e.fillInput,Ce),ie(o,$e),ie(P,Tt);function Xe(t){return e.emitValue===!0?j.value(t):t}function Le(t){if(t>-1&&t<u.value.length)if(e.multiple===!0){const n=e.modelValue.slice();a("remove",{index:t,value:n.splice(t,1)[0]}),a("update:modelValue",n)}else a("update:modelValue",null)}function Vt(t){Le(t),i.focus()}function Ye(t,n){const l=Xe(t);if(e.multiple!==!0){e.fillInput===!0&&ze(Q.value(t),!0,!0),a("update:modelValue",l);return}if(u.value.length===0){a("add",{index:0,value:l}),a("update:modelValue",e.multiple===!0?[l]:l);return}if(n===!0&&De(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const m=e.modelValue.slice();a("add",{index:m.length,value:l}),m.push(l),a("update:modelValue",m)}function de(t,n){if(i.editable.value!==!0||t===void 0||ge.value(t)===!0)return;const l=j.value(t);if(e.multiple!==!0){n!==!0&&(ze(e.fillInput===!0?Q.value(t):"",!0,!0),fe()),I.value!==null&&I.value.focus(),(u.value.length===0||Ae(j.value(u.value[0]),l)!==!0)&&a("update:modelValue",e.emitValue===!0?l:t);return}if((C!==!0||q.value===!0)&&i.focus(),Ge(),u.value.length===0){const z=e.emitValue===!0?l:t;a("add",{index:0,value:z}),a("update:modelValue",e.multiple===!0?[z]:z);return}const m=e.modelValue.slice(),B=pe.value.findIndex(z=>Ae(z,l));if(B>-1)a("remove",{index:B,value:m.splice(B,1)[0]});else{if(e.maxValues!==void 0&&m.length>=e.maxValues)return;const z=e.emitValue===!0?l:t;a("add",{index:m.length,value:z}),m.push(z)}a("update:modelValue",m)}function he(t){if(p.platform.is.desktop!==!0)return;const n=t>-1&&t<P.value?t:-1;b.value!==n&&(b.value=n)}function Fe(t=1,n){if(o.value===!0){let l=b.value;do l=dt(l+t,-1,P.value-1);while(l!==-1&&l!==b.value&&ge.value(e.options[l])===!0);b.value!==l&&(he(l),ee(l),n!==!0&&e.useInput===!0&&e.fillInput===!0&&Ie(l>=0?Q.value(e.options[l]):V))}}function xt(t,n){const l=m=>Ae(j.value(m),t);return e.options.find(l)||n.find(l)||t}function Pe(t,n){const l=t!==void 0?t:n;return typeof l=="function"?l:m=>m!==null&&typeof m=="object"&&l in m?m[l]:m}function De(t){const n=j.value(t);return pe.value.find(l=>Ae(l,n))!==void 0}function Ge(t){e.useInput===!0&&I.value!==null&&(t===void 0||I.value===t.target&&t.target.value===R.value)&&I.value.select()}function Je(t){Wt(t,27)===!0&&o.value===!0&&(Ve(t),fe(),Ce()),a("keyup",t)}function Ze(t){const{value:n}=t.target;if(t.keyCode!==void 0){Je(t);return}if(t.target.value="",x!==null&&(clearTimeout(x),x=null),Ce(),typeof n=="string"&&n.length>0){const l=n.toLocaleLowerCase(),m=z=>{const O=e.options.find(D=>z.value(D).toLocaleLowerCase()===l);return O===void 0?!1:(u.value.indexOf(O)===-1?de(O):fe(),!0)},B=z=>{m(j)!==!0&&(m(Q)===!0||z===!0||ye(n,!0,()=>B(!0)))};B()}else i.clearValue(t)}function et(t){a("keypress",t)}function tt(t){if(a("keydown",t),Xt(t)===!0)return;const n=g.value.length>0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),l=t.shiftKey!==!0&&e.multiple!==!0&&(b.value>-1||n===!0);if(t.keyCode===27){Ne(t);return}if(t.keyCode===9&&l===!1){be();return}if(t.target===void 0||t.target.id!==i.targetUid.value)return;if(t.keyCode===40&&i.innerLoading.value!==!0&&o.value===!1){ve(t),we();return}if(t.keyCode===8&&e.hideSelected!==!0&&g.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Le(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&a("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof g.value!="string"||g.value.length===0)&&(ve(t),b.value=-1,Fe(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&se.value!==void 0&&(ve(t),b.value=Math.max(-1,Math.min(P.value,b.value+(t.keyCode===33?-1:1)*se.value.view)),Fe(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ve(t),Fe(t.keyCode===38?-1:1,e.multiple));const m=P.value;if((L===void 0||U<Date.now())&&(L=""),m>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||L.length>0)){o.value!==!0&&we(t);const B=t.key.toLocaleLowerCase(),z=L.length===1&&L[0]===B;U=Date.now()+1500,z===!1&&(ve(t),L+=B);const O=new RegExp("^"+L.split("").map(Ke=>Fl.indexOf(Ke)>-1?"\\"+Ke:Ke).join(".*"),"i");let D=b.value;if(z===!0||D<0||O.test(Q.value(e.options[D]))!==!0)do D=dt(D+1,-1,m-1);while(D!==b.value&&(ge.value(e.options[D])===!0||O.test(Q.value(e.options[D]))!==!0));b.value!==D&&oe(()=>{he(D),ee(D),D>=0&&e.useInput===!0&&e.fillInput===!0&&Ie(Q.value(e.options[D]))});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||L!=="")&&(t.keyCode!==9||l===!1))){if(t.keyCode!==9&&ve(t),b.value>-1&&b.value<m){de(e.options[b.value]);return}if(n===!0){const B=(z,O)=>{if(O){if(gt(O)!==!0)return}else O=e.newValueMode;if(z==null)return;ze("",e.multiple!==!0,!0),(O==="toggle"?de:Ye)(z,O==="add-unique"),e.multiple!==!0&&(I.value!==null&&I.value.focus(),fe())};if(e.onNewValue!==void 0?a("newValue",g.value,B):B(g.value),e.multiple!==!0)return}o.value===!0?be():i.innerLoading.value!==!0&&we()}}function lt(){return C===!0?le.value:W.value!==null&&W.value.contentEl!==null?W.value.contentEl:void 0}function kt(){return lt()}function qt(){return e.hideSelected===!0?[]:f["selected-item"]!==void 0?ce.value.map(t=>f["selected-item"](t)).slice():f.selected!==void 0?[].concat(f.selected()):e.useChips===!0?ce.value.map((t,n)=>w(kl,{key:"option-"+n,removable:i.editable.value===!0&&ge.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:ke.value,onRemove(){t.removeAtIndex(n)}},()=>w("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:Q.value(t.opt)}))):[w("span",{[me.value===!0?"innerHTML":"textContent"]:y.value})]}function ut(){if(h.value===!0)return f["no-option"]!==void 0?f["no-option"]({inputValue:g.value}):void 0;const t=f.option!==void 0?f.option:l=>w(nl,{key:l.index,...l.itemProps},()=>w(ul,()=>w(cl,()=>w("span",{[l.html===!0?"innerHTML":"textContent"]:l.label}))));let n=K("div",Se.value.map(t));return f["before-options"]!==void 0&&(n=f["before-options"]().concat(n)),ll(f["after-options"],n)}function zt(t,n){const l=n===!0?{...G.value,...i.splitAttrs.attributes.value}:void 0,m={ref:n===!0?I:void 0,key:"i_t",class:d.value,style:e.inputStyle,value:g.value!==void 0?g.value:"",type:"search",...l,id:n===!0?i.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...Ct.value};return t!==!0&&C===!0&&(Array.isArray(m.class)===!0?m.class=[...m.class,"no-pointer-events"]:m.class+=" no-pointer-events"),w("input",m)}function nt(t){x!==null&&(clearTimeout(x),x=null),!(t&&t.target&&t.target.qComposing===!0)&&(Ie(t.target.value||""),H=!0,V=g.value,i.focused.value!==!0&&(C!==!0||q.value===!0)&&i.focus(),e.onFilter!==void 0&&(x=setTimeout(()=>{x=null,ye(g.value)},e.inputDebounce)))}function Ie(t){g.value!==t&&(g.value=t,a("inputValue",t))}function ze(t,n,l){H=l!==!0,e.useInput===!0&&(Ie(t),(n===!0||l!==!0)&&(V=t),n!==!0&&ye(t))}function ye(t,n,l){if(e.onFilter===void 0||n!==!0&&i.focused.value!==!0)return;i.innerLoading.value===!0?a("filterAbort"):(i.innerLoading.value=!0,r.value=!0),t!==""&&e.multiple!==!0&&u.value.length>0&&H!==!0&&t===Q.value(u.value[0])&&(t="");const m=setTimeout(()=>{o.value===!0&&(o.value=!1)},10);E!==null&&clearTimeout(E),E=m,a("filter",t,(B,z)=>{(n===!0||i.focused.value===!0)&&E===m&&(clearTimeout(E),typeof B=="function"&&B(),r.value=!1,oe(()=>{i.innerLoading.value=!1,i.editable.value===!0&&(n===!0?o.value===!0&&fe():o.value===!0?$e(!0):o.value=!0),typeof z=="function"&&oe(()=>{z(k)}),typeof l=="function"&&oe(()=>{l(k)})}))},()=>{i.focused.value===!0&&E===m&&(clearTimeout(E),i.innerLoading.value=!1,r.value=!1),o.value===!0&&(o.value=!1)})}function At(){return w(gl,{ref:W,class:s.value,style:e.popupContentStyle,modelValue:o.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&h.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:v.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:qe.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...Be.value,onScrollPassive:ne,onBeforeShow:it,onBeforeHide:_t,onShow:Bt},ut)}function _t(t){at(t),be()}function Bt(){te()}function Mt(t){Ve(t),I.value!==null&&I.value.focus(),q.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function pt(t){Ve(t),oe(()=>{q.value=!1})}function Ft(){const t=[w(Vl,{class:`col-auto ${i.fieldClass.value}`,...c.value,for:i.targetUid.value,dark:v.value,square:!0,loading:r.value,itemAligned:!1,filled:!0,stackLabel:g.value.length>0,...i.splitAttrs.listeners.value,onFocus:Mt,onBlur:pt},{...f,rawControl:()=>i.getControl(!0),before:void 0,after:void 0})];return o.value===!0&&t.push(w("div",{ref:le,class:s.value+" scroll",style:e.popupContentStyle,...Be.value,onClick:Ne,onScrollPassive:ne},ut())),w(zl,{ref:Y,modelValue:A.value,position:e.useInput===!0?"top":void 0,transitionShow:$,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:it,onBeforeHide:It,onHide:Et,onShow:Ot},()=>w("div",{class:"q-select__dialog"+(v.value===!0?" q-select__dialog--dark q-dark":"")+(q.value===!0?" q-select__dialog--focused":"")},t))}function It(t){at(t),Y.value!==null&&Y.value.__updateRefocusTarget(i.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),i.focused.value=!1}function Et(t){fe(),i.focused.value===!1&&a("blur",t),Ce()}function Ot(){const t=document.activeElement;(t===null||t.id!==i.targetUid.value)&&I.value!==null&&I.value!==t&&I.value.focus(),te()}function be(){A.value!==!0&&(b.value=-1,o.value===!0&&(o.value=!1),i.focused.value===!1&&(E!==null&&(clearTimeout(E),E=null),i.innerLoading.value===!0&&(a("filterAbort"),i.innerLoading.value=!1,r.value=!1)))}function we(t){i.editable.value===!0&&(C===!0?(i.onControlFocusin(t),A.value=!0,oe(()=>{i.focus()})):i.focus(),e.onFilter!==void 0?ye(g.value):(h.value!==!0||f["no-option"]!==void 0)&&(o.value=!0))}function fe(){A.value=!1,be()}function Ce(){e.useInput===!0&&ze(e.multiple!==!0&&e.fillInput===!0&&u.value.length>0&&Q.value(u.value[0])||"",!0,!0)}function $e(t){let n=-1;if(t===!0){if(u.value.length>0){const l=j.value(u.value[0]);n=e.options.findIndex(m=>Ae(j.value(m),l))}Z(n)}he(n)}function Tt(t,n){o.value===!0&&i.innerLoading.value===!1&&(Z(-1,!0),oe(()=>{o.value===!0&&i.innerLoading.value===!1&&(t>n?Z():$e(!0))}))}function ot(){A.value===!1&&W.value!==null&&W.value.updatePosition()}function it(t){t!==void 0&&Ve(t),a("popupShow",t),i.hasPopupOpen=!0,i.onControlFocusin(t)}function at(t){t!==void 0&&Ve(t),a("popupHide",t),i.hasPopupOpen=!1,i.onControlFocusout(t)}function rt(){C=p.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?f["no-option"]!==void 0||e.onFilter!==void 0||h.value===!1:!0),$=p.platform.is.ios===!0&&C===!0&&e.useInput===!0?"fade":e.transitionShow}return Qt(rt),Ut(ot),rt(),We(()=>{x!==null&&clearTimeout(x)}),Object.assign(k,{showPopup:we,hidePopup:fe,removeAtIndex:Le,add:Ye,toggleOption:de,getOptionIndex:()=>b.value,setOptionIndex:he,moveOptionSelection:Fe,filter:ye,updateMenuPosition:ot,updateInputValue:ze,isOptionSelected:De,getEmittingOptionValue:Xe,isOptionDisabled:(...t)=>ge.value.apply(null,t)===!0,getOptionValue:(...t)=>j.value.apply(null,t),getOptionLabel:(...t)=>Q.value.apply(null,t)}),Object.assign(i,{innerValue:u,fieldClass:S(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:F,targetRef:I,hasValue:_,showPopup:we,floatingLabel:S(()=>e.hideSelected!==!0&&_.value===!0||typeof g.value=="number"||g.value.length>0||st(e.displayValue)),getControlChild:()=>{if(i.editable.value!==!1&&(A.value===!0||h.value!==!0||f["no-option"]!==void 0))return C===!0?Ft():At();i.hasPopupOpen===!0&&(i.hasPopupOpen=!1)},controlEvents:{onFocusin(t){i.onControlFocusin(t)},onFocusout(t){i.onControlFocusout(t,()=>{Ce(),be()})},onClick(t){if(Ne(t),C!==!0&&o.value===!0){be(),I.value!==null&&I.value.focus();return}we(t)}},getControl:t=>{const n=qt(),l=t===!0||A.value!==!0||C!==!0;if(e.useInput===!0)n.push(zt(t,l));else if(i.editable.value===!0){const B=l===!0?G.value:void 0;n.push(w("input",{ref:l===!0?I:void 0,key:"d_t",class:"q-select__focus-target",id:l===!0?i.targetUid.value:void 0,value:y.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...B,onKeydown:tt,onKeyup:Je,onKeypress:et})),l===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length>0&&n.push(w("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Ze}))}if(ae.value!==void 0&&e.disable!==!0&&pe.value.length>0){const B=pe.value.map(z=>w("option",{value:z,selected:!0}));n.push(w("select",{class:"hidden",name:ae.value,multiple:e.multiple},B))}const m=e.useInput===!0||l!==!0?void 0:i.splitAttrs.attributes.value;return w("div",{class:"q-field__native row items-center",...m},n)},getInnerAppend:()=>e.loading!==!0&&r.value!==!0&&e.hideDropdownIcon!==!0?[w(Oe,{class:"q-select__dropdown-icon"+(o.value===!0?" rotate-180":""),name:Me.value})]:null}),yt(i)}});export{zl as Q,Ul as a};
