import{_ as o}from"./HeaderComponent.js";import{_ as s}from"./FooterComponent.js";/* empty css                *//* empty css               */import{_ as e}from"./main.js";import{n as i,i as n,q as t,j as a,K as l,o as d}from"./vendor.js";import"./BaseIconSolid.js";import"./index9.js";const p={class:"app-main"};var r=e({name:"VueLayoutComponent",data:()=>({collapsed:!1,isOnMobile:!1}),head:{},mounted(){this.onResize(),window.addEventListener("resize",this.onResize)},methods:{onResize(){window.innerWidth<=767?(this.isOnMobile=!1,this.collapsed=!0):(this.isOnMobile=!1,this.collapsed=!1)},onToggleCollapse(){this.collapsed=!this.collapsed,console.log(this.collapsed)}}},[["render",function(e,r,m,c,h,j){const u=o,w=i("router-view"),f=s;return d(),n("div",{class:l(["app-layout",e.collapsed?"collapsed":""])},[t(u),a("main",p,[t(w)]),t(f)],2)}]]);export{r as default};
//# sourceMappingURL=promiserves.js.map