import{g as Ue,r as f,cD as xt,cE as Ct,K as Ye,C as Xe,s as a,cF as Ot,cG as Ft,c as re,a as m,d as S,bb as Ke,b as ne,h as Te,t as oe,cH as Tt,k as B,w as Fe,aT as St,n as Ze,cI as Rt,cJ as Mt,ag as Le,ax as Pt,Q as It,cw as Oe,aL as He,f as Bt,u as _t,l as qe,c4 as At,cK as zt,j as $t,p as kt,q as Ne,V as Et,v as Dt,y as Wt,T as Vt,al as Lt,bj as jt,am as Ge,cL as Nt,ao as Ut,cM as Kt,D as U}from"./index-09938545.js";import{u as Ht,N as qt,c as Gt,d as Jt,p as je,f as Qt,h as Je,a as Yt}from"./utils-74414945.js";function Xt(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}const K="v-hidden",Zt=Ft("[v-hidden]",{display:"none!important"}),Qe=Ue({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:x}){const y=f(null),b=f(null);function g(W){const{value:i}=y,{getCounter:_,getTail:C}=e;let h;if(_!==void 0?h=_():h=b.value,!i||!h)return;h.hasAttribute(K)&&h.removeAttribute(K);const{children:A}=i;if(W.showAllItemsBeforeCalculate)for(const F of A)F.hasAttribute(K)&&F.removeAttribute(K);const R=i.offsetWidth,z=[],v=x.tail?C==null?void 0:C():null;let w=v?v.offsetWidth:0,$=!1;const O=i.children.length-(x.tail?1:0);for(let F=0;F<O-1;++F){if(F<0)continue;const E=A[F];if($){E.hasAttribute(K)||E.setAttribute(K,"");continue}else E.hasAttribute(K)&&E.removeAttribute(K);const V=E.offsetWidth;if(w+=V,z[F]=V,w>R){const{updateCounter:I}=e;for(let T=F;T>=0;--T){const L=O-1-T;I!==void 0?I(L):h.textContent=`${L}`;const H=h.offsetWidth;if(w-=z[T],w+H<=R||T===0){$=!0,F=T-1,v&&(F===-1?(v.style.maxWidth=`${R-H}px`,v.style.boxSizing="border-box"):v.style.maxWidth="");const{onUpdateCount:j}=e;j&&j(L);break}}}}const{onUpdateOverflow:M}=e;$?M!==void 0&&M(!0):(M!==void 0&&M(!1),h.setAttribute(K,""))}const D=xt();return Zt.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Ct,ssr:D}),Ye(()=>g({showAllItemsBeforeCalculate:!1})),{selfRef:y,counterRef:b,sync:g}},render(){const{$slots:e}=this;return Xe(()=>this.sync({showAllItemsBeforeCalculate:!1})),a("div",{class:"v-overflow",ref:"selfRef"},[Ot(e,"default"),e.counter?e.counter():a("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}}),en=re([m("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[m("base-loading",`
 color: var(--n-loading-color);
 `),m("base-selection-tags","min-height: var(--n-height);"),S("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),S("state-border",`
 z-index: 1;
 border-color: #0000;
 `),m("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[S("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),m("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[S("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),m("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[S("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),m("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),m("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[m("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[S("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),S("render-label",`
 color: var(--n-text-color);
 `)]),Ke("disabled",[re("&:hover",[S("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),ne("focus",[S("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),ne("active",[S("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),m("base-selection-label","background-color: var(--n-color-active);"),m("base-selection-tags","background-color: var(--n-color-active);")])]),ne("disabled","cursor: not-allowed;",[S("arrow",`
 color: var(--n-arrow-color-disabled);
 `),m("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[m("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),S("render-label",`
 color: var(--n-text-color-disabled);
 `)]),m("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),m("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),m("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[S("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),S("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>ne(`${e}-status`,[S("state-border",`border: var(--n-border-${e});`),Ke("disabled",[re("&:hover",[S("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),ne("active",[S("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),m("base-selection-label",`background-color: var(--n-color-active-${e});`),m("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),ne("focus",[S("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),m("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),m("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[re("&:last-child","padding-right: 0;"),m("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[S("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),tn=Ue({name:"InternalSelection",props:Object.assign(Object.assign({},Te.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const x=f(null),y=f(null),b=f(null),g=f(null),D=f(null),W=f(null),i=f(null),_=f(null),C=f(null),h=f(null),A=f(!1),R=f(!1),z=f(!1),v=Te("InternalSelection","-internal-selection",en,Tt,e,oe(e,"clsPrefix")),w=B(()=>e.clearable&&!e.disabled&&(z.value||e.active)),$=B(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Oe(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),O=B(()=>{const n=e.selectedOption;if(n)return n[e.labelField]}),M=B(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function F(){var n;const{value:l}=x;if(l){const{value:p}=y;p&&(p.style.width=`${l.offsetWidth}px`,e.maxTagCount!=="responsive"&&((n=C.value)===null||n===void 0||n.sync()))}}function E(){const{value:n}=h;n&&(n.style.display="none")}function V(){const{value:n}=h;n&&(n.style.display="inline-block")}Fe(oe(e,"active"),n=>{n||E()}),Fe(oe(e,"pattern"),()=>{e.multiple&&Xe(F)});function I(n){const{onFocus:l}=e;l&&l(n)}function T(n){const{onBlur:l}=e;l&&l(n)}function L(n){const{onDeleteOption:l}=e;l&&l(n)}function H(n){const{onClear:l}=e;l&&l(n)}function j(n){const{onPatternInput:l}=e;l&&l(n)}function X(n){var l;(!n.relatedTarget||!(!((l=b.value)===null||l===void 0)&&l.contains(n.relatedTarget)))&&I(n)}function k(n){var l;!((l=b.value)===null||l===void 0)&&l.contains(n.relatedTarget)||T(n)}function le(n){H(n)}function se(){z.value=!0}function ue(){z.value=!1}function Z(n){!e.active||!e.filterable||n.target!==y.value&&n.preventDefault()}function de(n){L(n)}function ee(n){if(n.key==="Backspace"&&!Q.value&&!e.pattern.length){const{selectedOptions:l}=e;l!=null&&l.length&&de(l[l.length-1])}}const Q=f(!1);let q=null;function ce(n){const{value:l}=x;if(l){const p=n.target.value;l.textContent=p,F()}e.ignoreComposition&&Q.value?q=n:j(n)}function Se(){Q.value=!0}function Re(){Q.value=!1,e.ignoreComposition&&j(q),q=null}function Me(n){var l;R.value=!0,(l=e.onPatternFocus)===null||l===void 0||l.call(e,n)}function Pe(n){var l;R.value=!1,(l=e.onPatternBlur)===null||l===void 0||l.call(e,n)}function fe(){var n,l;if(e.filterable)R.value=!1,(n=W.value)===null||n===void 0||n.blur(),(l=y.value)===null||l===void 0||l.blur();else if(e.multiple){const{value:p}=g;p==null||p.blur()}else{const{value:p}=D;p==null||p.blur()}}function he(){var n,l,p;e.filterable?(R.value=!1,(n=W.value)===null||n===void 0||n.focus()):e.multiple?(l=g.value)===null||l===void 0||l.focus():(p=D.value)===null||p===void 0||p.focus()}function Y(){const{value:n}=y;n&&(V(),n.focus())}function N(){const{value:n}=y;n&&n.blur()}function ve(n){const{value:l}=i;l&&l.setTextContent(`+${n}`)}function te(){const{value:n}=_;return n}function Ie(){return y.value}let ie=null;function ae(){ie!==null&&window.clearTimeout(ie)}function Be(){e.disabled||e.active||(ae(),ie=window.setTimeout(()=>{M.value&&(A.value=!0)},100))}function _e(){ae()}function Ae(n){n||(ae(),A.value=!1)}Fe(M,n=>{n||(A.value=!1)}),Ye(()=>{St(()=>{const n=W.value;n&&(n.tabIndex=e.disabled||R.value?-1:0)})}),Ht(b,e.onResize);const{inlineThemeDisabled:be}=e,ge=B(()=>{const{size:n}=e,{common:{cubicBezierEaseInOut:l},self:{borderRadius:p,color:pe,placeholderColor:ze,textColor:$e,paddingSingle:ke,paddingMultiple:Ee,caretColor:me,colorDisabled:we,textColorDisabled:ye,placeholderColorDisabled:De,colorActive:We,boxShadowFocus:xe,boxShadowActive:J,boxShadowHover:t,border:o,borderFocus:r,borderHover:c,borderActive:s,arrowColor:d,arrowColorDisabled:u,loadingColor:P,colorActiveWarning:Ce,boxShadowFocusWarning:Ve,boxShadowActiveWarning:et,boxShadowHoverWarning:tt,borderWarning:nt,borderFocusWarning:ot,borderHoverWarning:lt,borderActiveWarning:it,colorActiveError:at,boxShadowFocusError:rt,boxShadowActiveError:st,boxShadowHoverError:ut,borderError:dt,borderFocusError:ct,borderHoverError:ft,borderActiveError:ht,clearColor:vt,clearColorHover:bt,clearColorPressed:gt,clearSize:pt,arrowSize:mt,[He("height",n)]:wt,[He("fontSize",n)]:yt}}=v.value;return{"--n-bezier":l,"--n-border":o,"--n-border-active":s,"--n-border-focus":r,"--n-border-hover":c,"--n-border-radius":p,"--n-box-shadow-active":J,"--n-box-shadow-focus":xe,"--n-box-shadow-hover":t,"--n-caret-color":me,"--n-color":pe,"--n-color-active":We,"--n-color-disabled":we,"--n-font-size":yt,"--n-height":wt,"--n-padding-single":ke,"--n-padding-multiple":Ee,"--n-placeholder-color":ze,"--n-placeholder-color-disabled":De,"--n-text-color":$e,"--n-text-color-disabled":ye,"--n-arrow-color":d,"--n-arrow-color-disabled":u,"--n-loading-color":P,"--n-color-active-warning":Ce,"--n-box-shadow-focus-warning":Ve,"--n-box-shadow-active-warning":et,"--n-box-shadow-hover-warning":tt,"--n-border-warning":nt,"--n-border-focus-warning":ot,"--n-border-hover-warning":lt,"--n-border-active-warning":it,"--n-color-active-error":at,"--n-box-shadow-focus-error":rt,"--n-box-shadow-active-error":st,"--n-box-shadow-hover-error":ut,"--n-border-error":dt,"--n-border-focus-error":ct,"--n-border-hover-error":ft,"--n-border-active-error":ht,"--n-clear-size":pt,"--n-clear-color":vt,"--n-clear-color-hover":bt,"--n-clear-color-pressed":gt,"--n-arrow-size":mt}}),G=be?Ze("internal-selection",B(()=>e.size[0]),ge,e):void 0;return{mergedTheme:v,mergedClearable:w,patternInputFocused:R,filterablePlaceholder:$,label:O,selected:M,showTagsPanel:A,isComposing:Q,counterRef:i,counterWrapperRef:_,patternInputMirrorRef:x,patternInputRef:y,selfRef:b,multipleElRef:g,singleElRef:D,patternInputWrapperRef:W,overflowRef:C,inputTagElRef:h,handleMouseDown:Z,handleFocusin:X,handleClear:le,handleMouseEnter:se,handleMouseLeave:ue,handleDeleteOption:de,handlePatternKeyDown:ee,handlePatternInputInput:ce,handlePatternInputBlur:Pe,handlePatternInputFocus:Me,handleMouseEnterCounter:Be,handleMouseLeaveCounter:_e,handleFocusout:k,handleCompositionEnd:Re,handleCompositionStart:Se,onPopoverUpdateShow:Ae,focus:he,focusInput:Y,blur:fe,blurInput:N,updateCounter:ve,getCounter:te,getTail:Ie,renderLabel:e.renderLabel,cssVars:be?void 0:ge,themeClass:G==null?void 0:G.themeClass,onRender:G==null?void 0:G.onRender}},render(){const{status:e,multiple:x,size:y,disabled:b,filterable:g,maxTagCount:D,bordered:W,clsPrefix:i,onRender:_,renderTag:C,renderLabel:h}=this;_==null||_();const A=D==="responsive",R=typeof D=="number",z=A||R,v=a(Mt,null,{default:()=>a(Rt,{clsPrefix:i,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var $,O;return(O=($=this.$slots).arrow)===null||O===void 0?void 0:O.call($)}})});let w;if(x){const{labelField:$}=this,O=k=>a("div",{class:`${i}-base-selection-tag-wrapper`,key:k.value},C?C({option:k,handleClose:()=>{this.handleDeleteOption(k)}}):a(Le,{size:y,closable:!k.disabled,disabled:b,onClose:()=>{this.handleDeleteOption(k)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>h?h(k,!0):Oe(k[$],k,!0)})),M=()=>(R?this.selectedOptions.slice(0,D):this.selectedOptions).map(O),F=g?a("div",{class:`${i}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},a("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:b,value:this.pattern,autofocus:this.autofocus,class:`${i}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),a("span",{ref:"patternInputMirrorRef",class:`${i}-base-selection-input-tag__mirror`},this.pattern)):null,E=A?()=>a("div",{class:`${i}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},a(Le,{size:y,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:b})):void 0;let V;if(R){const k=this.selectedOptions.length-D;k>0&&(V=a("div",{class:`${i}-base-selection-tag-wrapper`,key:"__counter__"},a(Le,{size:y,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:b},{default:()=>`+${k}`})))}const I=A?g?a(Qe,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:M,counter:E,tail:()=>F}):a(Qe,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:M,counter:E}):R?M().concat(V):M(),T=z?()=>a("div",{class:`${i}-base-selection-popover`},A?M():this.selectedOptions.map(O)):void 0,L=z?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,j=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?a("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`},a("div",{class:`${i}-base-selection-placeholder__inner`},this.placeholder)):null,X=g?a("div",{ref:"patternInputWrapperRef",class:`${i}-base-selection-tags`},I,A?null:F,v):a("div",{ref:"multipleElRef",class:`${i}-base-selection-tags`,tabindex:b?void 0:0},I,v);w=a(It,null,z?a(Pt,Object.assign({},L,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>X,default:T}):X,j)}else if(g){const $=this.pattern||this.isComposing,O=this.active?!$:!this.selected,M=this.active?!1:this.selected;w=a("div",{ref:"patternInputWrapperRef",class:`${i}-base-selection-label`},a("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${i}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:b,disabled:b,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),M?a("div",{class:`${i}-base-selection-label__render-label ${i}-base-selection-overlay`,key:"input"},a("div",{class:`${i}-base-selection-overlay__wrapper`},C?C({option:this.selectedOption,handleClose:()=>{}}):h?h(this.selectedOption,!0):Oe(this.label,this.selectedOption,!0))):null,O?a("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`,key:"placeholder"},a("div",{class:`${i}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,v)}else w=a("div",{ref:"singleElRef",class:`${i}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?a("div",{class:`${i}-base-selection-input`,title:Xt(this.label),key:"input"},a("div",{class:`${i}-base-selection-input__content`},C?C({option:this.selectedOption,handleClose:()=>{}}):h?h(this.selectedOption,!0):Oe(this.label,this.selectedOption,!0))):a("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`,key:"placeholder"},a("div",{class:`${i}-base-selection-placeholder__inner`},this.placeholder)),v);return a("div",{ref:"selfRef",class:[`${i}-base-selection`,this.themeClass,e&&`${i}-base-selection--${e}-status`,{[`${i}-base-selection--active`]:this.active,[`${i}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${i}-base-selection--disabled`]:this.disabled,[`${i}-base-selection--multiple`]:this.multiple,[`${i}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},w,W?a("div",{class:`${i}-base-selection__border`}):null,W?a("div",{class:`${i}-base-selection__state-border`}):null)}}),nn=re([m("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),m("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Bt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),on=Object.assign(Object.assign({},Te.props),{to:Ne.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),rn=Ue({name:"Select",props:on,setup(e){const{mergedClsPrefixRef:x,mergedBorderedRef:y,namespaceRef:b,inlineThemeDisabled:g}=_t(e),D=Te("Select","-select",nn,Nt,e,x),W=f(e.defaultValue),i=oe(e,"value"),_=qe(i,W),C=f(!1),h=f(""),A=B(()=>{const{valueField:t,childrenField:o}=e,r=Yt(t,o);return Gt(k.value,r)}),R=B(()=>Jt(j.value,e.valueField,e.childrenField)),z=f(!1),v=qe(oe(e,"show"),z),w=f(null),$=f(null),O=f(null),{localeRef:M}=At("Select"),F=B(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:M.value.placeholder}),E=zt(e,["items","options"]),V=[],I=f([]),T=f([]),L=f(new Map),H=B(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:o,valueField:r}=e;return c=>({[o]:String(c),[r]:c})}return t===!1?!1:o=>Object.assign(t(o),{value:o})}),j=B(()=>T.value.concat(I.value).concat(E.value)),X=B(()=>{const{filter:t}=e;if(t)return t;const{labelField:o,valueField:r}=e;return(c,s)=>{if(!s)return!1;const d=s[o];if(typeof d=="string")return je(c,d);const u=s[r];return typeof u=="string"?je(c,u):typeof u=="number"?je(c,String(u)):!1}}),k=B(()=>{if(e.remote)return E.value;{const{value:t}=j,{value:o}=h;return!o.length||!e.filterable?t:Qt(t,X.value,o,e.childrenField)}});function le(t){const o=e.remote,{value:r}=L,{value:c}=R,{value:s}=H,d=[];return t.forEach(u=>{if(c.has(u))d.push(c.get(u));else if(o&&r.has(u))d.push(r.get(u));else if(s){const P=s(u);P&&d.push(P)}}),d}const se=B(()=>{if(e.multiple){const{value:t}=_;return Array.isArray(t)?le(t):[]}return null}),ue=B(()=>{const{value:t}=_;return!e.multiple&&!Array.isArray(t)?t===null?null:le([t])[0]||null:null}),Z=$t(e),{mergedSizeRef:de,mergedDisabledRef:ee,mergedStatusRef:Q}=Z;function q(t,o){const{onChange:r,"onUpdate:value":c,onUpdateValue:s}=e,{nTriggerFormChange:d,nTriggerFormInput:u}=Z;r&&U(r,t,o),s&&U(s,t,o),c&&U(c,t,o),W.value=t,d(),u()}function ce(t){const{onBlur:o}=e,{nTriggerFormBlur:r}=Z;o&&U(o,t),r()}function Se(){const{onClear:t}=e;t&&U(t)}function Re(t){const{onFocus:o,showOnFocus:r}=e,{nTriggerFormFocus:c}=Z;o&&U(o,t),c(),r&&Y()}function Me(t){const{onSearch:o}=e;o&&U(o,t)}function Pe(t){const{onScroll:o}=e;o&&U(o,t)}function fe(){var t;const{remote:o,multiple:r}=e;if(o){const{value:c}=L;if(r){const{valueField:s}=e;(t=se.value)===null||t===void 0||t.forEach(d=>{c.set(d[s],d)})}else{const s=ue.value;s&&c.set(s[e.valueField],s)}}}function he(t){const{onUpdateShow:o,"onUpdate:show":r}=e;o&&U(o,t),r&&U(r,t),z.value=t}function Y(){ee.value||(he(!0),z.value=!0,e.filterable&&ye())}function N(){he(!1)}function ve(){h.value="",T.value=V}const te=f(!1);function Ie(){e.filterable&&(te.value=!0)}function ie(){e.filterable&&(te.value=!1,v.value||ve())}function ae(){ee.value||(v.value?e.filterable?ye():N():Y())}function Be(t){var o,r;!((r=(o=O.value)===null||o===void 0?void 0:o.selfRef)===null||r===void 0)&&r.contains(t.relatedTarget)||(C.value=!1,ce(t),N())}function _e(t){Re(t),C.value=!0}function Ae(t){C.value=!0}function be(t){var o;!((o=w.value)===null||o===void 0)&&o.$el.contains(t.relatedTarget)||(C.value=!1,ce(t),N())}function ge(){var t;(t=w.value)===null||t===void 0||t.focus(),N()}function G(t){var o;v.value&&(!((o=w.value)===null||o===void 0)&&o.$el.contains(Ut(t))||N())}function n(t){if(!Array.isArray(t))return[];if(H.value)return Array.from(t);{const{remote:o}=e,{value:r}=R;if(o){const{value:c}=L;return t.filter(s=>r.has(s)||c.has(s))}else return t.filter(c=>r.has(c))}}function l(t){p(t.rawNode)}function p(t){if(ee.value)return;const{tag:o,remote:r,clearFilterAfterSelect:c,valueField:s}=e;if(o&&!r){const{value:d}=T,u=d[0]||null;if(u){const P=I.value;P.length?P.push(u):I.value=[u],T.value=V}}if(r&&L.value.set(t[s],t),e.multiple){const d=n(_.value),u=d.findIndex(P=>P===t[s]);if(~u){if(d.splice(u,1),o&&!r){const P=pe(t[s]);~P&&(I.value.splice(P,1),c&&(h.value=""))}}else d.push(t[s]),c&&(h.value="");q(d,le(d))}else{if(o&&!r){const d=pe(t[s]);~d?I.value=[I.value[d]]:I.value=V}we(),N(),q(t[s],t)}}function pe(t){return I.value.findIndex(r=>r[e.valueField]===t)}function ze(t){v.value||Y();const{value:o}=t.target;h.value=o;const{tag:r,remote:c}=e;if(Me(o),r&&!c){if(!o){T.value=V;return}const{onCreate:s}=e,d=s?s(o):{[e.labelField]:o,[e.valueField]:o},{valueField:u}=e;E.value.some(P=>P[u]===d[u])||I.value.some(P=>P[u]===d[u])?T.value=V:T.value=[d]}}function $e(t){t.stopPropagation();const{multiple:o}=e;!o&&e.filterable&&N(),Se(),o?q([],[]):q(null,null)}function ke(t){!Je(t,"action")&&!Je(t,"empty")&&t.preventDefault()}function Ee(t){Pe(t)}function me(t){var o,r,c,s,d;if(!e.keyboard){t.preventDefault();return}switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((o=w.value)===null||o===void 0)&&o.isComposing)){if(v.value){const u=(r=O.value)===null||r===void 0?void 0:r.getPendingTmNode();u?l(u):e.filterable||(N(),we())}else if(Y(),e.tag&&te.value){const u=T.value[0];if(u){const P=u[e.valueField],{value:Ce}=_;e.multiple&&Array.isArray(Ce)&&Ce.some(Ve=>Ve===P)||p(u)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;v.value&&((c=O.value)===null||c===void 0||c.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;v.value?(s=O.value)===null||s===void 0||s.next():Y();break;case"Escape":v.value&&(Kt(t),N()),(d=w.value)===null||d===void 0||d.focus();break}}function we(){var t;(t=w.value)===null||t===void 0||t.focus()}function ye(){var t;(t=w.value)===null||t===void 0||t.focusInput()}function De(){var t;v.value&&((t=$.value)===null||t===void 0||t.syncPosition())}fe(),Fe(oe(e,"options"),fe);const We={focus:()=>{var t;(t=w.value)===null||t===void 0||t.focus()},blur:()=>{var t;(t=w.value)===null||t===void 0||t.blur()}},xe=B(()=>{const{self:{menuBoxShadow:t}}=D.value;return{"--n-menu-box-shadow":t}}),J=g?Ze("select",void 0,xe,e):void 0;return Object.assign(Object.assign({},We),{mergedStatus:Q,mergedClsPrefix:x,mergedBordered:y,namespace:b,treeMate:A,isMounted:kt(),triggerRef:w,menuRef:O,pattern:h,uncontrolledShow:z,mergedShow:v,adjustedTo:Ne(e),uncontrolledValue:W,mergedValue:_,followerRef:$,localizedPlaceholder:F,selectedOption:ue,selectedOptions:se,mergedSize:de,mergedDisabled:ee,focused:C,activeWithoutMenuOpen:te,inlineThemeDisabled:g,onTriggerInputFocus:Ie,onTriggerInputBlur:ie,handleTriggerOrMenuResize:De,handleMenuFocus:Ae,handleMenuBlur:be,handleMenuTabOut:ge,handleTriggerClick:ae,handleToggle:l,handleDeleteOption:p,handlePatternInput:ze,handleClear:$e,handleTriggerBlur:Be,handleTriggerFocus:_e,handleKeydown:me,handleMenuAfterLeave:ve,handleMenuClickOutside:G,handleMenuScroll:Ee,handleMenuKeydown:me,handleMenuMousedown:ke,mergedTheme:D,cssVars:g?void 0:xe,themeClass:J==null?void 0:J.themeClass,onRender:J==null?void 0:J.onRender})},render(){return a("div",{class:`${this.mergedClsPrefix}-select`},a(Et,null,{default:()=>[a(Dt,null,{default:()=>a(tn,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,x;return[(x=(e=this.$slots).arrow)===null||x===void 0?void 0:x.call(e)]}})}),a(Wt,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Ne.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>a(Vt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,x,y;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Lt(a(qt,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(x=this.menuProps)===null||x===void 0?void 0:x.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(y=this.menuProps)===null||y===void 0?void 0:y.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var b,g;return[(g=(b=this.$slots).empty)===null||g===void 0?void 0:g.call(b)]},action:()=>{var b,g;return[(g=(b=this.$slots).action)===null||g===void 0?void 0:g.call(b)]}}),this.displayDirective==="show"?[[jt,this.mergedShow],[Ge,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Ge,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{rn as N};
