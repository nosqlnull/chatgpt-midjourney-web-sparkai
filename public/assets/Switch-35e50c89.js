import{a as A,d as t,aZ as I,c as K,b as o,bb as E,g as se,u as de,h as L,j as ce,r as P,t as ue,l as he,k as _,n as be,bc as j,s as a,bd as f,be as fe,aL as v,bf as U,bg as r,aV as ve,bh as ge,D as H}from"./index-09938545.js";const we=A("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[t("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),t("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),t("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),A("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[I({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),t("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),t("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),K("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),o("round",[t("rail","border-radius: calc(var(--n-rail-height) / 2);",[t("button","border-radius: calc(var(--n-button-height) / 2);")])]),E("disabled",[E("icon",[o("rubber-band",[o("pressed",[t("rail",[t("button","max-width: var(--n-button-width-pressed);")])]),t("rail",[K("&:active",[t("button","max-width: var(--n-button-width-pressed);")])]),o("active",[o("pressed",[t("rail",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),t("rail",[K("&:active",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),o("active",[t("rail",[t("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),t("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[t("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[I()]),t("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),o("active",[t("rail","background-color: var(--n-rail-color-active);")]),o("loading",[t("rail",`
 cursor: wait;
 `)]),o("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),me=Object.assign(Object.assign({},L.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let x;const ye=se({name:"Switch",props:me,setup(e){x===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?x=CSS.supports("width","max(1px)"):x=!1:x=!0);const{mergedClsPrefixRef:S,inlineThemeDisabled:m}=de(e),z=L("Switch","-switch",we,fe,e,S),l=ce(e),{mergedSizeRef:$,mergedDisabledRef:h}=l,p=P(e.defaultValue),C=ue(e,"value"),b=he(C,p),y=_(()=>b.value===e.checkedValue),g=P(!1),i=P(!1),s=_(()=>{const{railStyle:n}=e;if(n)return n({focused:i.value,checked:y.value})});function d(n){const{"onUpdate:value":B,onChange:R,onUpdateValue:V}=e,{nTriggerFormInput:F,nTriggerFormChange:T}=l;B&&H(B,n),V&&H(V,n),R&&H(R,n),p.value=n,F(),T()}function O(){const{nTriggerFormFocus:n}=l;n()}function X(){const{nTriggerFormBlur:n}=l;n()}function Y(){e.loading||h.value||(b.value!==e.checkedValue?d(e.checkedValue):d(e.uncheckedValue))}function Z(){i.value=!0,O()}function q(){i.value=!1,X(),g.value=!1}function G(n){e.loading||h.value||n.key===" "&&(b.value!==e.checkedValue?d(e.checkedValue):d(e.uncheckedValue),g.value=!1)}function J(n){e.loading||h.value||n.key===" "&&(n.preventDefault(),g.value=!0)}const M=_(()=>{const{value:n}=$,{self:{opacityDisabled:B,railColor:R,railColorActive:V,buttonBoxShadow:F,buttonColor:T,boxShadowFocus:Q,loadingColor:ee,textColor:te,iconColor:ne,[v("buttonHeight",n)]:c,[v("buttonWidth",n)]:ie,[v("buttonWidthPressed",n)]:ae,[v("railHeight",n)]:u,[v("railWidth",n)]:k,[v("railBorderRadius",n)]:oe,[v("buttonBorderRadius",n)]:re},common:{cubicBezierEaseInOut:le}}=z.value;let N,D,W;return x?(N=`calc((${u} - ${c}) / 2)`,D=`max(${u}, ${c})`,W=`max(${k}, calc(${k} + ${c} - ${u}))`):(N=U((r(u)-r(c))/2),D=U(Math.max(r(u),r(c))),W=r(u)>r(c)?k:U(r(k)+r(c)-r(u))),{"--n-bezier":le,"--n-button-border-radius":re,"--n-button-box-shadow":F,"--n-button-color":T,"--n-button-width":ie,"--n-button-width-pressed":ae,"--n-button-height":c,"--n-height":D,"--n-offset":N,"--n-opacity-disabled":B,"--n-rail-border-radius":oe,"--n-rail-color":R,"--n-rail-color-active":V,"--n-rail-height":u,"--n-rail-width":k,"--n-width":W,"--n-box-shadow-focus":Q,"--n-loading-color":ee,"--n-text-color":te,"--n-icon-color":ne}}),w=m?be("switch",_(()=>$.value[0]),M,e):void 0;return{handleClick:Y,handleBlur:q,handleFocus:Z,handleKeyup:G,handleKeydown:J,mergedRailStyle:s,pressed:g,mergedClsPrefix:S,mergedValue:b,checked:y,mergedDisabled:h,cssVars:m?void 0:M,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:S,checked:m,mergedRailStyle:z,onRender:l,$slots:$}=this;l==null||l();const{checked:h,unchecked:p,icon:C,"checked-icon":b,"unchecked-icon":y}=$,g=!(j(C)&&j(b)&&j(y));return a("div",{role:"switch","aria-checked":m,class:[`${e}-switch`,this.themeClass,g&&`${e}-switch--icon`,m&&`${e}-switch--active`,S&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},a("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:z},f(h,i=>f(p,s=>i||s?a("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},a("div",{class:`${e}-switch__rail-placeholder`},a("div",{class:`${e}-switch__button-placeholder`}),i),a("div",{class:`${e}-switch__rail-placeholder`},a("div",{class:`${e}-switch__button-placeholder`}),s)):null)),a("div",{class:`${e}-switch__button`},f(C,i=>f(b,s=>f(y,d=>a(ve,null,{default:()=>this.loading?a(ge,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(s||i)?a("div",{class:`${e}-switch__button-icon`,key:s?"checked-icon":"icon"},s||i):!this.checked&&(d||i)?a("div",{class:`${e}-switch__button-icon`,key:d?"unchecked-icon":"icon"},d||i):null})))),f(h,i=>i&&a("div",{key:"checked",class:`${e}-switch__checked`},i)),f(p,i=>i&&a("div",{key:"unchecked",class:`${e}-switch__unchecked`},i)))))}});export{ye as N};
