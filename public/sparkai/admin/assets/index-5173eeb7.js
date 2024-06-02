
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as b,y as S,A as h,r as M,b as e,o as a,c as o,e as l,G as u,f as c,a9 as v,R as m,S as C,J as p,h as k,I as w,n as y}from"./index-56458f60.js";import x from"./index-fce63257.js";import q from"./index-45d3789c.js";const B=b({name:"SubSidebar"}),I=b({...B,setup(T){const s=S(),i=h(),r=M(0);function _(n){r.value=n.target.scrollTop}return(n,G)=>{const g=k("el-menu");return["side","head","single"].includes(e(s).settings.menu.menuMode)||e(s).mode==="mobile"?(a(),o("div",{key:0,class:u(["sub-sidebar-container",{"is-collapse":e(s).mode==="pc"&&e(s).settings.menu.subMenuCollapse}]),onScroll:_},[l(x,{"show-logo":e(s).settings.menu.menuMode==="single",class:u(["sidebar-logo",{"sidebar-logo-bg":e(s).settings.menu.menuMode==="single",shadow:e(r)}])},null,8,["show-logo","class"]),l(g,{"unique-opened":e(s).settings.menu.subMenuUniqueOpened,"default-openeds":e(i).defaultOpenedPaths,"default-active":n.$route.meta.activeMenu||n.$route.path,collapse:e(s).mode==="pc"&&e(s).settings.menu.subMenuCollapse,"collapse-transition":!1,class:u({"is-collapse-without-logo":e(s).settings.menu.menuMode!=="single"&&e(s).settings.menu.subMenuCollapse})},{default:c(()=>[l(v,{name:"sub-sidebar"},{default:c(()=>[(a(!0),o(m,null,C(e(i).sidebarMenus,(t,f)=>{var d;return a(),o(m,null,[((d=t.meta)==null?void 0:d.sidebar)!==!1?(a(),w(q,{key:t.path||f,item:t,"base-path":t.path},null,8,["item","base-path"])):p("",!0)],64)}),256))]),_:1})]),_:1},8,["unique-opened","default-openeds","default-active","collapse","class"])],34)):p("",!0)}}});const V=y(I,[["__scopeId","data-v-600db683"]]);export{V as default};
