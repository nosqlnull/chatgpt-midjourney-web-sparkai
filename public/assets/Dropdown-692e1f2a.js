import{r as D,w as ee,bA as je,co as De,cp as Fe,m as ze,B as Q,cq as Be,A as X,aM as oe,a as I,g as T,aN as F,u as ue,h as W,cr as we,k as N,t as _,n as ye,s as l,D as j,C as fe,cs as Le,ct as ge,cu as xe,ax as Pe,cv as Y,a_ as U,bq as Se,aS as J,V as Ue,v as Ee,y as He,T as Ve,bo as Ne,cw as Z,U as qe,bQ as We,aW as Ge,Q as Qe,cx as Xe,cy as Je,br as Ye,bp as Ze,f as eo,c as V,bb as he,b as M,d as A,l as oo,cz as no,aL as L}from"./index-09938545.js";import{N as to,c as ke,h as le,a as ro,m as ve}from"./utils-74414945.js";function Re(e){return o=>{o?e.value=o.$el:e.value=null}}function io(e,o,n){if(!o)return e;const r=D(e.value);let i=null;return ee(e,t=>{i!==null&&window.clearTimeout(i),t===!0?n&&!n.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},o):r.value=!1}),r}function so(e={},o){const n=je({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:i}=e,t=s=>{switch(s.key){case"Control":n.ctrl=!0;break;case"Meta":n.command=!0,n.win=!0;break;case"Shift":n.shift=!0;break;case"Tab":n.tab=!0;break}r!==void 0&&Object.keys(r).forEach(v=>{if(v!==s.key)return;const m=r[v];if(typeof m=="function")m(s);else{const{stop:g=!1,prevent:p=!1}=m;g&&s.stopPropagation(),p&&s.preventDefault(),m.handler(s)}})},d=s=>{switch(s.key){case"Control":n.ctrl=!1;break;case"Meta":n.command=!1,n.win=!1;break;case"Shift":n.shift=!1;break;case"Tab":n.tab=!1;break}i!==void 0&&Object.keys(i).forEach(v=>{if(v!==s.key)return;const m=i[v];if(typeof m=="function")m(s);else{const{stop:g=!1,prevent:p=!1}=m;g&&s.stopPropagation(),p&&s.preventDefault(),m.handler(s)}})},a=()=>{(o===void 0||o.value)&&(X("keydown",document,t),X("keyup",document,d)),o!==void 0&&ee(o,s=>{s?(X("keydown",document,t),X("keyup",document,d)):(Q("keydown",document,t),Q("keyup",document,d))})};return De()?(Fe(a),ze(()=>{(o===void 0||o.value)&&(Q("keydown",document,t),Q("keyup",document,d))})):a(),Be(n)}const Oe=oe("n-popselect"),ao=I("popselect-menu",`
 box-shadow: var(--n-menu-box-shadow);
`),ce={multiple:Boolean,value:{type:[String,Number,Array],default:null},cancelable:Boolean,options:{type:Array,default:()=>[]},size:{type:String,default:"medium"},scrollable:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onMouseenter:Function,onMouseleave:Function,renderLabel:Function,showCheckmark:{type:Boolean,default:void 0},nodeProps:Function,virtualScroll:Boolean,onChange:[Function,Array]},me=Le(ce),lo=T({name:"PopselectPanel",props:ce,setup(e){const o=F(Oe),{mergedClsPrefixRef:n,inlineThemeDisabled:r}=ue(e),i=W("Popselect","-pop-select",ao,we,o.props,n),t=N(()=>ke(e.options,ro("value","children")));function d(p,S){const{onUpdateValue:w,"onUpdate:value":k,onChange:b}=e;w&&j(w,p,S),k&&j(k,p,S),b&&j(b,p,S)}function a(p){v(p.key)}function s(p){le(p,"action")||p.preventDefault()}function v(p){const{value:{getNode:S}}=t;if(e.multiple)if(Array.isArray(e.value)){const w=[],k=[];let b=!0;e.value.forEach(O=>{if(O===p){b=!1;return}const C=S(O);C&&(w.push(C.key),k.push(C.rawNode))}),b&&(w.push(p),k.push(S(p).rawNode)),d(w,k)}else{const w=S(p);w&&d([p],[w.rawNode])}else if(e.value===p&&e.cancelable)d(null,null);else{const w=S(p);w&&d(p,w.rawNode);const{"onUpdate:show":k,onUpdateShow:b}=o.props;k&&j(k,!1),b&&j(b,!1),o.setShow(!1)}fe(()=>{o.syncPosition()})}ee(_(e,"options"),()=>{fe(()=>{o.syncPosition()})});const m=N(()=>{const{self:{menuBoxShadow:p}}=i.value;return{"--n-menu-box-shadow":p}}),g=r?ye("select",void 0,m,o.props):void 0;return{mergedTheme:o.mergedThemeRef,mergedClsPrefix:n,treeMate:t,handleToggle:a,handleMenuMousedown:s,cssVars:r?void 0:m,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),l(to,{clsPrefix:this.mergedClsPrefix,focusable:!0,nodeProps:this.nodeProps,class:[`${this.mergedClsPrefix}-popselect-menu`,this.themeClass],style:this.cssVars,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,multiple:this.multiple,treeMate:this.treeMate,size:this.size,value:this.value,virtualScroll:this.virtualScroll,scrollable:this.scrollable,renderLabel:this.renderLabel,onToggle:this.handleToggle,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseenter,onMousedown:this.handleMenuMousedown,showCheckmark:this.showCheckmark},{action:()=>{var o,n;return((n=(o=this.$slots).action)===null||n===void 0?void 0:n.call(o))||[]},empty:()=>{var o,n;return((n=(o=this.$slots).empty)===null||n===void 0?void 0:n.call(o))||[]}})}}),uo=Object.assign(Object.assign(Object.assign(Object.assign({},W.props),xe(Y,["showArrow","arrow"])),{placement:Object.assign(Object.assign({},Y.placement),{default:"bottom"}),trigger:{type:String,default:"hover"}}),ce),Po=T({name:"Popselect",props:uo,inheritAttrs:!1,__popover__:!0,setup(e){const{mergedClsPrefixRef:o}=ue(e),n=W("Popselect","-popselect",void 0,we,e,o),r=D(null);function i(){var a;(a=r.value)===null||a===void 0||a.syncPosition()}function t(a){var s;(s=r.value)===null||s===void 0||s.setShow(a)}return U(Oe,{props:e,mergedThemeRef:n,syncPosition:i,setShow:t}),Object.assign(Object.assign({},{syncPosition:i,setShow:t}),{popoverInstRef:r,mergedTheme:n})},render(){const{mergedTheme:e}=this,o={theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:{padding:"0"},ref:"popoverInstRef",internalRenderBody:(n,r,i,t,d)=>{const{$attrs:a}=this;return l(lo,Object.assign({},a,{class:[a.class,n],style:[a.style,i]},ge(this.$props,me),{ref:Re(r),onMouseenter:ve([t,a.onMouseenter]),onMouseleave:ve([d,a.onMouseleave])}),{action:()=>{var s,v;return(v=(s=this.$slots).action)===null||v===void 0?void 0:v.call(s)},empty:()=>{var s,v;return(v=(s=this.$slots).empty)===null||v===void 0?void 0:v.call(s)}})}};return l(Pe,Object.assign({},xe(this.$props,me),o,{internalDeactivateImmediately:!0}),{trigger:()=>{var n,r;return(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n)}})}}),Ie=T({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return l("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),pe=oe("n-dropdown-menu"),ne=oe("n-dropdown"),be=oe("n-dropdown-option");function de(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function co(e){return e.type==="group"}function _e(e){return e.type==="divider"}function po(e){return e.type==="render"}const Ce=T({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=F(ne),{hoverKeyRef:n,keyboardKeyRef:r,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:t,activeKeyPathRef:d,animatedRef:a,mergedShowRef:s,renderLabelRef:v,renderIconRef:m,labelFieldRef:g,childrenFieldRef:p,renderOptionRef:S,nodePropsRef:w,menuPropsRef:k}=o,b=F(be,null),O=F(pe),C=F(Se),te=N(()=>e.tmNode.rawNode),q=N(()=>{const{value:c}=p;return de(e.tmNode.rawNode,c)}),re=N(()=>{const{disabled:c}=e.tmNode;return c}),ie=N(()=>{if(!q.value)return!1;const{key:c,disabled:P}=e.tmNode;if(P)return!1;const{value:K}=n,{value:z}=r,{value:ae}=i,{value:B}=t;return K!==null?B.includes(c):z!==null?B.includes(c)&&B[B.length-1]!==c:ae!==null?B.includes(c):!1}),se=N(()=>r.value===null&&!a.value),G=io(ie,300,se),E=N(()=>!!(b!=null&&b.enteringSubmenuRef.value)),H=D(!1);U(be,{enteringSubmenuRef:H});function $(){H.value=!0}function u(){H.value=!1}function x(){const{parentKey:c,tmNode:P}=e;P.disabled||s.value&&(i.value=c,r.value=null,n.value=P.key)}function h(){const{tmNode:c}=e;c.disabled||s.value&&n.value!==c.key&&x()}function f(c){if(e.tmNode.disabled||!s.value)return;const{relatedTarget:P}=c;P&&!le({target:P},"dropdownOption")&&!le({target:P},"scrollbarRail")&&(n.value=null)}function R(){const{value:c}=q,{tmNode:P}=e;s.value&&!c&&!P.disabled&&(o.doSelect(P.key,P.rawNode),o.doUpdateShow(!1))}return{labelField:g,renderLabel:v,renderIcon:m,siblingHasIcon:O.showIconRef,siblingHasSubmenu:O.hasSubmenuRef,menuProps:k,popoverBody:C,animated:a,mergedShowSubmenu:N(()=>G.value&&!E.value),rawNode:te,hasSubmenu:q,pending:J(()=>{const{value:c}=t,{key:P}=e.tmNode;return c.includes(P)}),childActive:J(()=>{const{value:c}=d,{key:P}=e.tmNode,K=c.findIndex(z=>P===z);return K===-1?!1:K<c.length-1}),active:J(()=>{const{value:c}=d,{key:P}=e.tmNode,K=c.findIndex(z=>P===z);return K===-1?!1:K===c.length-1}),mergedDisabled:re,renderOption:S,nodeProps:w,handleClick:R,handleMouseMove:h,handleMouseEnter:x,handleMouseLeave:f,handleSubmenuBeforeEnter:$,handleSubmenuAfterEnter:u}},render(){var e,o;const{animated:n,rawNode:r,mergedShowSubmenu:i,clsPrefix:t,siblingHasIcon:d,siblingHasSubmenu:a,renderLabel:s,renderIcon:v,renderOption:m,nodeProps:g,props:p,scrollable:S}=this;let w=null;if(i){const C=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);w=l(Ke,Object.assign({},C,{clsPrefix:t,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const k={class:[`${t}-dropdown-option-body`,this.pending&&`${t}-dropdown-option-body--pending`,this.active&&`${t}-dropdown-option-body--active`,this.childActive&&`${t}-dropdown-option-body--child-active`,this.mergedDisabled&&`${t}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},b=g==null?void 0:g(r),O=l("div",Object.assign({class:[`${t}-dropdown-option`,b==null?void 0:b.class],"data-dropdown-option":!0},b),l("div",Ne(k,p),[l("div",{class:[`${t}-dropdown-option-body__prefix`,d&&`${t}-dropdown-option-body__prefix--show-icon`]},[v?v(r):Z(r.icon)]),l("div",{"data-dropdown-option":!0,class:`${t}-dropdown-option-body__label`},s?s(r):Z((o=r[this.labelField])!==null&&o!==void 0?o:r.title)),l("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__suffix`,a&&`${t}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?l(qe,null,{default:()=>l(We,null)}):null)]),this.hasSubmenu?l(Ue,null,{default:()=>[l(Ee,null,{default:()=>l("div",{class:`${t}-dropdown-offset-container`},l(He,{show:this.mergedShowSubmenu,placement:this.placement,to:S&&this.popoverBody||void 0,teleportDisabled:!S},{default:()=>l("div",{class:`${t}-dropdown-menu-wrapper`},n?l(Ve,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>w}):w)}))})]}):null);return m?m({node:O,option:r}):O}}),fo=T({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=F(pe),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:i,renderOptionRef:t}=F(ne);return{labelField:r,showIcon:e,hasSubmenu:o,renderLabel:n,nodeProps:i,renderOption:t}},render(){var e;const{clsPrefix:o,hasSubmenu:n,showIcon:r,nodeProps:i,renderLabel:t,renderOption:d}=this,{rawNode:a}=this.tmNode,s=l("div",Object.assign({class:`${o}-dropdown-option`},i==null?void 0:i(a)),l("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},l("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,r&&`${o}-dropdown-option-body__prefix--show-icon`]},Z(a.icon)),l("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},t?t(a):Z((e=a.title)!==null&&e!==void 0?e:a[this.labelField])),l("div",{class:[`${o}-dropdown-option-body__suffix`,n&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return d?d({node:s,option:a}):s}}),ho=T({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:n}=this,{children:r}=e;return l(Qe,null,l(fo,{clsPrefix:n,tmNode:e,key:e.key}),r==null?void 0:r.map(i=>{const{rawNode:t}=i;return t.show===!1?null:_e(t)?l(Ie,{clsPrefix:n,key:i.key}):i.isGroup?(Ge("dropdown","`group` node is not allowed to be put in `group` node."),null):l(Ce,{clsPrefix:n,tmNode:i,parentKey:o,key:i.key})}))}}),vo=T({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return l("div",o,[e==null?void 0:e()])}}),Ke=T({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:n}=F(ne);U(pe,{showIconRef:N(()=>{const i=o.value;return e.tmNodes.some(t=>{var d;if(t.isGroup)return(d=t.children)===null||d===void 0?void 0:d.some(({rawNode:s})=>i?i(s):s.icon);const{rawNode:a}=t;return i?i(a):a.icon})}),hasSubmenuRef:N(()=>{const{value:i}=n;return e.tmNodes.some(t=>{var d;if(t.isGroup)return(d=t.children)===null||d===void 0?void 0:d.some(({rawNode:s})=>de(s,i));const{rawNode:a}=t;return de(a,i)})})});const r=D(null);return U(Ye,null),U(Ze,null),U(Se,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:o,scrollable:n}=this,r=this.tmNodes.map(i=>{const{rawNode:t}=i;return t.show===!1?null:po(t)?l(vo,{tmNode:i,key:i.key}):_e(t)?l(Ie,{clsPrefix:o,key:i.key}):co(t)?l(ho,{clsPrefix:o,tmNode:i,parentKey:e,key:i.key}):l(Ce,{clsPrefix:o,tmNode:i,parentKey:e,key:i.key,props:t.props,scrollable:n})});return l("div",{class:[`${o}-dropdown-menu`,n&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},n?l(Je,{contentClass:`${o}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?Xe({clsPrefix:o,arrowStyle:this.arrowStyle}):null)}}),mo=I("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[eo(),I("dropdown-option",`
 position: relative;
 `,[V("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[V("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),I("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[V("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),he("disabled",[M("pending",`
 color: var(--n-option-text-color-hover);
 `,[A("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),V("&::before","background-color: var(--n-option-color-hover);")]),M("active",`
 color: var(--n-option-text-color-active);
 `,[A("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),V("&::before","background-color: var(--n-option-color-active);")]),M("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[A("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),M("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),M("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[A("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[M("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),A("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[M("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),I("icon",`
 font-size: var(--n-option-icon-size);
 `)]),A("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),A("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[M("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),I("icon",`
 font-size: var(--n-option-icon-size);
 `)]),I("dropdown-menu","pointer-events: all;")]),I("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),I("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),I("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),V(">",[I("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),he("scrollable",`
 padding: var(--n-padding);
 `),M("scrollable",[A("content",`
 padding: var(--n-padding);
 `)])]),bo={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},wo=Object.keys(Y),yo=Object.assign(Object.assign(Object.assign({},Y),bo),W.props),So=T({name:"Dropdown",inheritAttrs:!1,props:yo,setup(e){const o=D(!1),n=oo(_(e,"show"),o),r=N(()=>{const{keyField:u,childrenField:x}=e;return ke(e.options,{getKey(h){return h[u]},getDisabled(h){return h.disabled===!0},getIgnored(h){return h.type==="divider"||h.type==="render"},getChildren(h){return h[x]}})}),i=N(()=>r.value.treeNodes),t=D(null),d=D(null),a=D(null),s=N(()=>{var u,x,h;return(h=(x=(u=t.value)!==null&&u!==void 0?u:d.value)!==null&&x!==void 0?x:a.value)!==null&&h!==void 0?h:null}),v=N(()=>r.value.getPath(s.value).keyPath),m=N(()=>r.value.getPath(e.value).keyPath),g=J(()=>e.keyboard&&n.value);so({keydown:{ArrowUp:{prevent:!0,handler:re},ArrowRight:{prevent:!0,handler:q},ArrowDown:{prevent:!0,handler:ie},ArrowLeft:{prevent:!0,handler:te},Enter:{prevent:!0,handler:se},Escape:C}},g);const{mergedClsPrefixRef:p,inlineThemeDisabled:S}=ue(e),w=W("Dropdown","-dropdown",mo,no,e,p);U(ne,{labelFieldRef:_(e,"labelField"),childrenFieldRef:_(e,"childrenField"),renderLabelRef:_(e,"renderLabel"),renderIconRef:_(e,"renderIcon"),hoverKeyRef:t,keyboardKeyRef:d,lastToggledSubmenuKeyRef:a,pendingKeyPathRef:v,activeKeyPathRef:m,animatedRef:_(e,"animated"),mergedShowRef:n,nodePropsRef:_(e,"nodeProps"),renderOptionRef:_(e,"renderOption"),menuPropsRef:_(e,"menuProps"),doSelect:k,doUpdateShow:b}),ee(n,u=>{!e.animated&&!u&&O()});function k(u,x){const{onSelect:h}=e;h&&j(h,u,x)}function b(u){const{"onUpdate:show":x,onUpdateShow:h}=e;x&&j(x,u),h&&j(h,u),o.value=u}function O(){t.value=null,d.value=null,a.value=null}function C(){b(!1)}function te(){E("left")}function q(){E("right")}function re(){E("up")}function ie(){E("down")}function se(){const u=G();u!=null&&u.isLeaf&&n.value&&(k(u.key,u.rawNode),b(!1))}function G(){var u;const{value:x}=r,{value:h}=s;return!x||h===null?null:(u=x.getNode(h))!==null&&u!==void 0?u:null}function E(u){const{value:x}=s,{value:{getFirstAvailableNode:h}}=r;let f=null;if(x===null){const R=h();R!==null&&(f=R.key)}else{const R=G();if(R){let c;switch(u){case"down":c=R.getNext();break;case"up":c=R.getPrev();break;case"right":c=R.getChild();break;case"left":c=R.getParent();break}c&&(f=c.key)}}f!==null&&(t.value=null,d.value=f)}const H=N(()=>{const{size:u,inverted:x}=e,{common:{cubicBezierEaseInOut:h},self:f}=w.value,{padding:R,dividerColor:c,borderRadius:P,optionOpacityDisabled:K,[L("optionIconSuffixWidth",u)]:z,[L("optionSuffixWidth",u)]:ae,[L("optionIconPrefixWidth",u)]:B,[L("optionPrefixWidth",u)]:Me,[L("fontSize",u)]:Te,[L("optionHeight",u)]:$e,[L("optionIconSize",u)]:Ae}=f,y={"--n-bezier":h,"--n-font-size":Te,"--n-padding":R,"--n-border-radius":P,"--n-option-height":$e,"--n-option-prefix-width":Me,"--n-option-icon-prefix-width":B,"--n-option-suffix-width":ae,"--n-option-icon-suffix-width":z,"--n-option-icon-size":Ae,"--n-divider-color":c,"--n-option-opacity-disabled":K};return x?(y["--n-color"]=f.colorInverted,y["--n-option-color-hover"]=f.optionColorHoverInverted,y["--n-option-color-active"]=f.optionColorActiveInverted,y["--n-option-text-color"]=f.optionTextColorInverted,y["--n-option-text-color-hover"]=f.optionTextColorHoverInverted,y["--n-option-text-color-active"]=f.optionTextColorActiveInverted,y["--n-option-text-color-child-active"]=f.optionTextColorChildActiveInverted,y["--n-prefix-color"]=f.prefixColorInverted,y["--n-suffix-color"]=f.suffixColorInverted,y["--n-group-header-text-color"]=f.groupHeaderTextColorInverted):(y["--n-color"]=f.color,y["--n-option-color-hover"]=f.optionColorHover,y["--n-option-color-active"]=f.optionColorActive,y["--n-option-text-color"]=f.optionTextColor,y["--n-option-text-color-hover"]=f.optionTextColorHover,y["--n-option-text-color-active"]=f.optionTextColorActive,y["--n-option-text-color-child-active"]=f.optionTextColorChildActive,y["--n-prefix-color"]=f.prefixColor,y["--n-suffix-color"]=f.suffixColor,y["--n-group-header-text-color"]=f.groupHeaderTextColor),y}),$=S?ye("dropdown",N(()=>`${e.size[0]}${e.inverted?"i":""}`),H,e):void 0;return{mergedClsPrefix:p,mergedTheme:w,tmNodes:i,mergedShow:n,handleAfterLeave:()=>{e.animated&&O()},doUpdateShow:b,cssVars:S?void 0:H,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender}},render(){const e=(r,i,t,d,a)=>{var s;const{mergedClsPrefix:v,menuProps:m}=this;(s=this.onRender)===null||s===void 0||s.call(this);const g=(m==null?void 0:m(void 0,this.tmNodes.map(S=>S.rawNode)))||{},p={ref:Re(i),class:[r,`${v}-dropdown`,this.themeClass],clsPrefix:v,tmNodes:this.tmNodes,style:[t,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:d,onMouseleave:a};return l(Ke,Ne(this.$attrs,p,g))},{mergedTheme:o}=this,n={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return l(Pe,Object.assign({},ge(this.$props,wo),n),{trigger:()=>{var r,i;return(i=(r=this.$slots).default)===null||i===void 0?void 0:i.call(r)}})}});export{So as N,Po as a};
