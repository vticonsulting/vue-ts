import{o as n,i as o,j as t,g as h,u as x,h as k,ad as v,n as f,p as m,t as s,k as e,F as w,S as g,z as b,A as C,U as N}from"./vendor.js";import{u as y}from"./main.js";const A={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},V=t("path",{d:"M21.677 14l-1.245-3.114A2.986 2.986 0 0 0 17.646 9h-4.092a3.002 3.002 0 0 0-1.544.428L7 12.434V18h2v-4.434l3-1.8v11.931l-3.462 5.194L10.202 30L14 24.303V11h3.646a.995.995 0 0 1 .928.629L20.323 16H26v-2z",fill:"currentColor"},null,-1),L=t("path",{d:"M17.051 18.316L19 24.162V30h2v-6.162l-2.051-6.154l-1.898.632z",fill:"currentColor"},null,-1),$=t("path",{d:"M16.5 8A3.5 3.5 0 1 1 20 4.5A3.504 3.504 0 0 1 16.5 8zm0-5A1.5 1.5 0 1 0 18 4.5A1.502 1.502 0 0 0 16.5 3z",fill:"currentColor"},null,-1),z=[V,L,$];function M(i,l){return n(),o("svg",A,z)}var B={name:"carbon-pedestrian",render:M};const S={class:"text-4xl"},j={class:"text-sm opacity-50"},E={key:0,class:"mt-4 text-sm"},F={class:"opacity-75"},D=h({props:{name:{type:String,required:!0}},setup(i){const l=i,p=x(),c=y(),{t:r}=k();return v(()=>{c.setNewName(l.name)}),(R,u)=>{const _=B,d=f("router-link");return n(),o("div",null,[t("p",S,[m(_,{class:"inline-block"})]),t("p",null,s(e(r)("intro.hi",{name:l.name})),1),t("p",j,[t("em",null,s(e(r)("intro.dynamic-route")),1)]),e(c).otherNames.length?(n(),o("p",E,[t("span",F,s(e(r)("intro.aka"))+":",1),t("ul",null,[(n(!0),o(w,null,g(e(c).otherNames,a=>(n(),o("li",{key:a},[m(d,{to:`/hi/${a}`,replace:""},{default:b(()=>[C(s(a),1)]),_:2},1032,["to"])]))),128))])])):N("",!0),t("div",null,[t("button",{class:"m-3 mt-6 text-sm btn",onClick:u[0]||(u[0]=a=>e(p).back())},s(e(r)("button.back")),1)])])}}});export{D as default};
//# sourceMappingURL=[name].js.map