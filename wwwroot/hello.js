var e=Object.defineProperty,t=(t,n,o)=>(((t,n,o)=>{n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o})(t,"symbol"!=typeof n?n+"":n,o),o);import{V as n}from"./vue-class-component.esm-bundler.js";import{_ as o}from"./main.js";import{o as r,i as l,j as s,t as c,s as a,n as i,q as m,C as u,A as p}from"./vendor.js";var d=o(class extends n{constructor(){super(...arguments),t(this,"count",0)}increment(){this.count++}decrement(){this.count--}},[["render",function(e,t,n,o,a,i){return r(),l("div",null,[s("button",{onClick:t[0]||(t[0]=(...t)=>e.decrement&&e.decrement(...t))},"decrement"),s("button",{onClick:t[1]||(t[1]=(...t)=>e.increment&&e.increment(...t))},"increment"),s("p",null,c(e.count),1)])}]]),f={};const b={class:"prose prose-sm mr-auto text-left max-w-none"},H=s("h1",null,"Hello world!",-1),v=p("Home"),y={setup(e,{expose:t}){const n={title:"Hello",meta:[{name:"description",content:"Hello World"},{property:"og:title",content:"Hello"}],test:"test"};t({frontmatter:n});return a({title:"Hello",meta:[{name:"description",content:"Hello World"},{property:"og:title",content:"Hello"}]}),(e,t)=>{const o=d,a=i("router-link");return r(),l("div",b,[H,s("p",null,"Front matter: "+c(n)),m(o),s("p",null,[m(a,{to:"/"},{default:u((()=>[v])),_:1})])])}}};"function"==typeof f&&f(y);export{y as default};
//# sourceMappingURL=hello.js.map