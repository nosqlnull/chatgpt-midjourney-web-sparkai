import{r as u,o as at,c as ee,a,b as C,d as ve,f as Me,i as lt,e as rt,g as Se,u as st,h as Ae,j as it,k,t as dt,l as ct,w as ge,m as ut,n as Ie,p as ht,q as ze,s as b,V as vt,v as ft,x as mt,y as pt,T as Fe,z as gt,A as fe,B as me,C as Ce,D as Ve,E as oe,F as ne,G as w,H as bt,I as wt,J as xt,K as yt,L as kt,M as te,N as B,O as De,P as pe,Q as _t,R as Rt,S as Ct,U as zt,W as St,X as Ee,Y as Tt,Z as $t,_ as Mt,$ as It}from"./index-09938545.js";import{c as Vt}from"./index-c94da121.js";function Be(n){return window.TouchEvent&&n instanceof window.TouchEvent}function He(){const n=u(new Map),s=z=>x=>{n.value.set(z,x)};return at(()=>{n.value.clear()}),[n,s]}const Dt=ee([a("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[C("reverse",[a("slider-handles",[a("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),a("slider-dots",[a("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),C("vertical",[a("slider-handles",[a("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),a("slider-marks",[a("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),a("slider-dots",[a("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),C("vertical",`
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[a("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[a("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),a("slider-rail",`
 height: 100%;
 `,[ve("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),C("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),a("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[a("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),a("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[a("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),C("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[a("slider-handle",`
 cursor: not-allowed;
 `)]),C("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),ee("&:hover",[a("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[ve("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),a("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),C("active",[a("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[ve("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),a("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),a("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[a("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),a("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[ve("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),a("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[a("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[a("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[ee("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),ee("&:focus",[a("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[ee("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),a("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[C("transition-disabled",[a("slider-dot","transition: none;")]),a("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[C("active","border: var(--n-dot-border-active);")])])]),a("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[Me()]),a("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[C("top",`
 margin-bottom: 12px;
 `),C("right",`
 margin-left: 12px;
 `),C("bottom",`
 margin-top: 12px;
 `),C("left",`
 margin-right: 12px;
 `),Me()]),lt(a("slider",[a("slider-dot","background-color: var(--n-dot-color-modal);")])),rt(a("slider",[a("slider-dot","background-color: var(--n-dot-color-popover);")]))]),Et=0,Bt=Object.assign(Object.assign({},Ae.props),{to:ze.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Ht=Se({name:"Slider",props:Bt,setup(n){const{mergedClsPrefixRef:s,namespaceRef:z,inlineThemeDisabled:x}=st(n),v=Ae("Slider","-slider",Dt,gt,n,s),h=u(null),[H,_]=He(),[I,L]=He(),be=u(new Set),N=it(n),{mergedDisabledRef:V}=N,X=k(()=>{const{step:e}=n;if(Number(e)<=0||e==="mark")return 0;const t=e.toString();let o=0;return t.includes(".")&&(o=t.length-t.indexOf(".")-1),o}),Y=u(n.defaultValue),j=dt(n,"value"),D=ct(j,Y),y=k(()=>{const{value:e}=D;return(n.range?e:[e]).map(se)}),A=k(()=>y.value.length>2),we=k(()=>n.placement===void 0?n.vertical?"right":"top":n.placement),ae=k(()=>{const{marks:e}=n;return e?Object.keys(e).map(parseFloat):null}),m=u(-1),q=u(-1),T=u(-1),$=u(!1),P=u(!1),G=k(()=>{const{vertical:e,reverse:t}=n;return e?t?"top":"bottom":t?"right":"left"}),xe=k(()=>{if(A.value)return;const e=y.value,t=U(n.range?Math.min(...e):n.min),o=U(n.range?Math.max(...e):e[0]),{value:r}=G;return n.vertical?{[r]:`${t}%`,height:`${o-t}%`}:{[r]:`${t}%`,width:`${o-t}%`}}),ye=k(()=>{const e=[],{marks:t}=n;if(t){const o=y.value.slice();o.sort((p,g)=>p-g);const{value:r}=G,{value:d}=A,{range:f}=n,S=d?()=>!1:p=>f?p>=o[0]&&p<=o[o.length-1]:p<=o[0];for(const p of Object.keys(t)){const g=Number(p);e.push({active:S(g),label:t[p],style:{[r]:`${U(g)}%`}})}}return e});function le(e,t){const o=U(e),{value:r}=G;return{[r]:`${o}%`,zIndex:t===m.value?1:0}}function J(e){return n.showTooltip||T.value===e||m.value===e&&$.value}function re(e){return $.value?!(m.value===e&&q.value===e):!0}function c(e){var t;~e&&(m.value=e,(t=H.value.get(e))===null||t===void 0||t.focus())}function i(){I.value.forEach((e,t)=>{J(t)&&e.syncPosition()})}function l(e){const{"onUpdate:value":t,onUpdateValue:o}=n,{nTriggerFormInput:r,nTriggerFormChange:d}=N;o&&Ve(o,e),t&&Ve(t,e),Y.value=e,r(),d()}function M(e){const{range:t}=n;if(t){if(Array.isArray(e)){const{value:o}=y;e.join()!==o.join()&&l(e)}}else Array.isArray(e)||y.value[0]!==e&&l(e)}function R(e,t){if(n.range){const o=y.value.slice();o.splice(t,1,e),M(o)}else M(e)}function Q(e,t,o){const r=o!==void 0;o||(o=e-t>0?1:-1);const d=ae.value||[],{step:f}=n;if(f==="mark"){const g=F(e,d.concat(t),r?o:void 0);return g?g.value:t}if(f<=0)return t;const{value:S}=X;let p;if(r){const g=Number((t/f).toFixed(S)),E=Math.floor(g),_e=g>E?E:E-1,Re=g<E?E:E+1;p=F(t,[Number((_e*f).toFixed(S)),Number((Re*f).toFixed(S)),...d],o)}else{const g=O(e);p=F(e,[...d,g])}return p?se(p.value):t}function se(e){return Math.min(n.max,Math.max(n.min,e))}function U(e){const{max:t,min:o}=n;return(e-o)/(t-o)*100}function ie(e){const{max:t,min:o}=n;return o+(t-o)*e}function O(e){const{step:t,min:o}=n;if(Number(t)<=0||t==="mark")return e;const r=Math.round((e-o)/t)*t+o;return Number(r.toFixed(X.value))}function F(e,t=ae.value,o){if(!(t!=null&&t.length))return null;let r=null,d=-1;for(;++d<t.length;){const f=t[d]-e,S=Math.abs(f);(o===void 0||f*o>0)&&(r===null||S<r.distance)&&(r={index:d,distance:S,value:t[d]})}return r}function Z(e){const t=h.value;if(!t)return;const o=Be(e)?e.touches[0]:e,r=t.getBoundingClientRect();let d;return n.vertical?d=(r.bottom-o.clientY)/r.height:d=(o.clientX-r.left)/r.width,n.reverse&&(d=1-d),ie(d)}function ke(e){if(V.value||!n.keyboard)return;const{vertical:t,reverse:o}=n;switch(e.key){case"ArrowUp":e.preventDefault(),de(t&&o?-1:1);break;case"ArrowRight":e.preventDefault(),de(!t&&o?-1:1);break;case"ArrowDown":e.preventDefault(),de(t&&o?1:-1);break;case"ArrowLeft":e.preventDefault(),de(!t&&o?1:-1);break}}function de(e){const t=m.value;if(t===-1)return;const{step:o}=n,r=y.value[t],d=Number(o)<=0||o==="mark"?r:r+o*e;R(Q(d,r,e>0?1:-1),t)}function Le(e){var t,o;if(V.value||!Be(e)&&e.button!==Et)return;const r=Z(e);if(r===void 0)return;const d=y.value.slice(),f=n.range?(o=(t=F(r,d))===null||t===void 0?void 0:t.index)!==null&&o!==void 0?o:-1:0;f!==-1&&(e.preventDefault(),c(f),Ne(),R(Q(r,y.value[f]),f))}function Ne(){$.value||($.value=!0,fe("touchend",document,he),fe("mouseup",document,he),fe("touchmove",document,ue),fe("mousemove",document,ue))}function ce(){$.value&&($.value=!1,me("touchend",document,he),me("mouseup",document,he),me("touchmove",document,ue),me("mousemove",document,ue))}function ue(e){const{value:t}=m;if(!$.value||t===-1){ce();return}const o=Z(e);R(Q(o,y.value[t]),t)}function he(){ce()}function je(e){m.value=e,V.value||(T.value=e)}function Pe(e){m.value===e&&(m.value=-1,ce()),T.value===e&&(T.value=-1)}function Ue(e){T.value=e}function Oe(e){T.value===e&&(T.value=-1)}ge(m,(e,t)=>void Ce(()=>q.value=t)),ge(D,()=>{if(n.marks){if(P.value)return;P.value=!0,Ce(()=>{P.value=!1})}Ce(i)}),ut(()=>{ce()});const Te=k(()=>{const{self:{markFontSize:e,railColor:t,railColorHover:o,fillColor:r,fillColorHover:d,handleColor:f,opacityDisabled:S,dotColor:p,dotColorModal:g,handleBoxShadow:E,handleBoxShadowHover:_e,handleBoxShadowActive:Re,handleBoxShadowFocus:We,dotBorder:Ke,dotBoxShadow:Xe,railHeight:Ye,railWidthVertical:qe,handleSize:Ge,dotHeight:Je,dotWidth:Qe,dotBorderRadius:Ze,fontSize:et,dotBorderActive:tt,dotColorPopover:ot},common:{cubicBezierEaseInOut:nt}}=v.value;return{"--n-bezier":nt,"--n-dot-border":Ke,"--n-dot-border-active":tt,"--n-dot-border-radius":Ze,"--n-dot-box-shadow":Xe,"--n-dot-color":p,"--n-dot-color-modal":g,"--n-dot-color-popover":ot,"--n-dot-height":Je,"--n-dot-width":Qe,"--n-fill-color":r,"--n-fill-color-hover":d,"--n-font-size":et,"--n-handle-box-shadow":E,"--n-handle-box-shadow-active":Re,"--n-handle-box-shadow-focus":We,"--n-handle-box-shadow-hover":_e,"--n-handle-color":f,"--n-handle-size":Ge,"--n-opacity-disabled":S,"--n-rail-color":t,"--n-rail-color-hover":o,"--n-rail-height":Ye,"--n-rail-width-vertical":qe,"--n-mark-font-size":e}}),W=x?Ie("slider",void 0,Te,n):void 0,$e=k(()=>{const{self:{fontSize:e,indicatorColor:t,indicatorBoxShadow:o,indicatorTextColor:r,indicatorBorderRadius:d}}=v.value;return{"--n-font-size":e,"--n-indicator-border-radius":d,"--n-indicator-box-shadow":o,"--n-indicator-color":t,"--n-indicator-text-color":r}}),K=x?Ie("slider-indicator",void 0,$e,n):void 0;return{mergedClsPrefix:s,namespace:z,uncontrolledValue:Y,mergedValue:D,mergedDisabled:V,mergedPlacement:we,isMounted:ht(),adjustedTo:ze(n),dotTransitionDisabled:P,markInfos:ye,isShowTooltip:J,shouldKeepTooltipTransition:re,handleRailRef:h,setHandleRefs:_,setFollowerRefs:L,fillStyle:xe,getHandleStyle:le,activeIndex:m,arrifiedValues:y,followerEnabledIndexSet:be,handleRailMouseDown:Le,handleHandleFocus:je,handleHandleBlur:Pe,handleHandleMouseEnter:Ue,handleHandleMouseLeave:Oe,handleRailKeyDown:ke,indicatorCssVars:x?void 0:$e,indicatorThemeClass:K==null?void 0:K.themeClass,indicatorOnRender:K==null?void 0:K.onRender,cssVars:x?void 0:Te,themeClass:W==null?void 0:W.themeClass,onRender:W==null?void 0:W.onRender}},render(){var n;const{mergedClsPrefix:s,themeClass:z,formatTooltip:x}=this;return(n=this.onRender)===null||n===void 0||n.call(this),b("div",{class:[`${s}-slider`,z,{[`${s}-slider--disabled`]:this.mergedDisabled,[`${s}-slider--active`]:this.activeIndex!==-1,[`${s}-slider--with-mark`]:this.marks,[`${s}-slider--vertical`]:this.vertical,[`${s}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},b("div",{class:`${s}-slider-rail`},b("div",{class:`${s}-slider-rail__fill`,style:this.fillStyle}),this.marks?b("div",{class:[`${s}-slider-dots`,this.dotTransitionDisabled&&`${s}-slider-dots--transition-disabled`]},this.markInfos.map(v=>b("div",{key:v.label,class:[`${s}-slider-dot`,{[`${s}-slider-dot--active`]:v.active}],style:v.style}))):null,b("div",{ref:"handleRailRef",class:`${s}-slider-handles`},this.arrifiedValues.map((v,h)=>{const H=this.isShowTooltip(h);return b(vt,null,{default:()=>[b(ft,null,{default:()=>b("div",{ref:this.setHandleRefs(h),class:`${s}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,style:this.getHandleStyle(v,h),onFocus:()=>{this.handleHandleFocus(h)},onBlur:()=>{this.handleHandleBlur(h)},onMouseenter:()=>{this.handleHandleMouseEnter(h)},onMouseleave:()=>{this.handleHandleMouseLeave(h)}},mt(this.$slots.thumb,()=>[b("div",{class:`${s}-slider-handle`})]))}),this.tooltip&&b(pt,{ref:this.setFollowerRefs(h),show:H,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(h),teleportDisabled:this.adjustedTo===ze.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>b(Fe,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(h),onEnter:()=>{this.followerEnabledIndexSet.add(h)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(h)}},{default:()=>{var _;return H?((_=this.indicatorOnRender)===null||_===void 0||_.call(this),b("div",{class:[`${s}-slider-handle-indicator`,this.indicatorThemeClass,`${s}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof x=="function"?x(v):v)):null}})})]})})),this.marks?b("div",{class:`${s}-slider-marks`},this.markInfos.map(v=>b("div",{key:v.label,class:`${s}-slider-mark`,style:v.style},v.label))):null))}}),At={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Ft=w("path",{d:"M315.27 33L96 304h128l-31.51 173.23a2.36 2.36 0 0 0 2.33 2.77h0a2.36 2.36 0 0 0 1.89-.95L416 208H288l31.66-173.25a2.45 2.45 0 0 0-2.44-2.75h0a2.42 2.42 0 0 0-1.95 1z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Lt=[Ft],Nt=Se({name:"FlashOutline",render:function(s,z){return oe(),ne("svg",At,Lt)}});function jt(n,s){let z,x;return function(...h){x=h,z||(z=setTimeout(()=>{n.apply(this,x),z=null},s))}}const Pt={class:"bg-[#E7ECF6] h-[100vh] overflow-hidden h-full p-4 pr-0 dark:bg-[#18181c] flex flex-col"},Ut={class:"p-4 flex pr-6 justify-between items-center"},Ot=w("div",{class:"font-bold text-xl"},"AI绘画广场",-1),Wt={class:"w-[200px] sm:w-[300px] flex justify-between"},Kt=w("span",{class:"hidden sm:block"},"尺寸调整",-1),Xt={class:"flex-1 ml-5"},Yt={class:"px-4 mb-6 pr-5"},qt={class:"market overflow-y-scroll flex-1 min-h-screen bg-[#E7ECF6] p-4 dark:bg-[#18181c] relative"},Gt=["id"],Jt=["id","src","onLoad","onError","onClick"],Qt={class:"menu p-2 text-[#cbd5e1]"},Zt={class:"prompt"},eo={class:"flex justify-between items-end"},to=["onClick"],oo={class:"text-sm dark:text-slate-400"},lo=Se({__name:"index",setup(n){var re;const s=bt(),z=(re=wt())==null?void 0:re.appContext.config.globalProperties.$viewerApi,x=xt(),v=u([]),h=u({}),H=u(0),_=u(160),I=u(0),L=u(10),be=u(10),N=u([]),V=u(null),X=u(0),Y=k(()=>s.isLogin),j=u(30),D=u(""),y=k(()=>j.value+L.value+150);function A(){ae(),$();const c=I.value,i=_.value,l=[];m.value.forEach((M,R)=>{const{width:Q,height:se}=M.fileInfo,U=i/Q,ie=se*U+be.value+H.value,O=h.value[M.id];if(l.length<c)O.style.top="0px",O.style.left=`${(i+L.value)*R}px`,l.push(ie);else{const F=Math.min.apply(null,l),Z=l.findIndex(ke=>ke===F);O.style.top=`${F+0}px`,O.style.left=`${Z*(_.value+L.value)}px`,l[Z]+=ie}}),X.value=Math.max(...l)+130}function we(c,i){c&&i&&(h.value[i.id]=c)}function ae(){const{showName:c=0,showOther:i=0}={};H.value=[c,i].filter(l=>l).length*15}const m=k(()=>D.value?v.value.filter(c=>{const{prompt:i}=c;return i.includes(D.value)}):v.value);ge(j,()=>{A()});let q=null;ge(m,()=>{m.value.length&&(clearTimeout(q),q=setTimeout(()=>{A()},300))});async function T(){const c=await Ct({size:999,rec:1});v.value=c.data.rows}function $(){if(!V.value)return;const c=V.value.clientWidth;I.value=Math.floor(c/y.value);const i=c-I.value*y.value,l=(I.value-1)*L.value;i-l<0&&(I.value-=1),_.value=Math.floor((c-l)/I.value)}function P(c,i){N.value.push(i.id)}function G(c,i){N.value.push(i.id)}function xe(c){if(!Y.value)return s.setLoginDialog(!0);const{prompt:i}=c;Vt({text:i}),x.success("复制prompt成功")}function ye(c){const{fileInfo:i}=c,{cosUrl:l}=i;z({options:{},images:[l]})}const le=k(()=>c=>{const{fileInfo:i}=c,{width:l,height:M}=i;return M/(l/_.value)}),J=jt(function(){A()},200);return yt(async()=>{await T(),A(),window.addEventListener("resize",J)}),kt(()=>{window.removeEventListener("resize",J)}),(c,i)=>(oe(),ne("div",Pt,[w("div",Ut,[Ot,w("div",Wt,[Kt,w("div",Xt,[te(B(Ht),{value:j.value,"onUpdate:value":i[0]||(i[0]=l=>j.value=l),step:10},null,8,["value"])])])]),w("div",Yt,[te(B(St),{value:D.value,"onUpdate:value":i[1]||(i[1]=l=>D.value=l),placeholder:"prompt关键词搜索"},{prefix:De(()=>[te(B(zt),{component:B(Nt)},null,8,["component"])]),_:1},8,["value"])]),w("div",qt,[w("div",{id:"wapper",ref_key:"wapperRef",ref:V,class:"wapper",style:pe({height:`${X.value}px`})},[(oe(!0),ne(_t,null,Rt(B(m),(l,M)=>(oe(),ne("div",{id:l.id,key:M,ref_for:!0,ref:R=>we(R,l),class:"wapper-item",style:pe({width:`${_.value}px`})},[te(Fe,{name:"img",css:!0},{default:De(()=>[w("img",{id:l.id,class:"item-file rounded-sm",style:pe({width:`${_.value}px`,height:`${B(le)(l)}px`}),src:l.fileInfo.thumbImg,loading:"lazy",onLoad:R=>P(R,l),onError:R=>G(R,l),onClick:R=>ye(l)},null,44,Jt)]),_:2},1024),w("div",Qt,[w("div",Zt,Ee(l.fullPrompt),1),w("div",eo,[Tt(Ee(l.createdAt)+" ",1),w("button",{class:"flex h-5 w-8 items-center justify-center rounded border transition hover:bg-[#666161] dark:border-neutral-700 dark:hover:bg-[#33373c]",onClick:$t(R=>xe(l),["stop"])},[w("span",oo,[te(B(Mt),{icon:"tabler:copy",class:"text-sm"})])],8,to)])]),N.value.includes(l.id)?It("",!0):(oe(),ne("div",{key:0,class:"item-loading",style:pe({width:`${_.value}px`,height:`${B(le)(l)}px`})},null,4))],12,Gt))),128))],4)])]))}});export{lo as default};
