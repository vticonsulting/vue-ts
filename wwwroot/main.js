var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,i=(e,t)=>{for(var o in t||(t={}))n.call(t,o)&&s(e,o,t[o]);if(r)for(var o of r(t))a.call(t,o)&&s(e,o,t[o]);return e};import{d as l,l as u,r as m,c,N as d,O as p,a as _,p as g,V as h,E as b,b as y,e as f,f as z,g as v,u as E,h as k,i as C,w as j,v as O,j as T,k as x,m as w,t as D,o as S,n as A,q as V,s as P,x as L,y as R}from"./vendor.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var I=l(((e,t)=>{e("read","Article"),e("manage","all"),t("delete","User")}));var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:({app:e})=>{e.use(u,I,{useGlobalProperties:!0})}});const q=m({assetsURL:"https://cominex.net/assets",advocate:null,affiliate:{id:1,name:"Ema",subdomain:"hancock-h",theme:{nav:{class:"bg-white text-gray-800"},logo_path:"",isActive:!0,colors:{primary:"",secondary:"",danger:"",warning:"",success:"",info:""}}},authenticated:!1,authUser:{id:1,firstName:"Victor",name_first:"Victor",lastName:"Tolbert",name_last:"Tolbert",people_email_primary:"victor.tolbert@gmail.com",avatarPath:"img/people/victor.jpeg",url_avatar:"[BASEURL]/img/people/victor.jpeg",profilePhotoUrl:"https://cominex.net/assets/img/people/victor.jpeg"},cancelNextNavigation:!1,categories:{},church:null,event:null,flashMessage:"",isMenuOpen:!1,person:null,recipes:[{title:"Red White and Blue Rice Krispie Treats",author:"Hank Douglas",time:20,difficulty:"medium",servings:4,procedure:"My recipe for Red White and Blue Rice Krispie Treats lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"https://www.iheartnaptime.net/wp-content/uploads/2018/05/red-white-and-blue-rice-krispie-treats.jpg",isFeatured:!0},{title:"Garlic and Herb Sautéed Bell Pepper Strips",author:"Nicholas Denver",time:30,difficulty:"easy",servings:5,procedure:"Garlic and Herb Sautéed Bell Pepper Strips, at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",image:"https://www.thespruceeats.com/thmb/eFyjZT5rxTDF3j3GD2undTytLjk=/3000x3000/smart/filters:no_upscale()/garlic-herb-sauteed-bell-pepper-recipe-102112-hero-01-5be21874c9e77c0051eed106.jpg",isFeatured:!0},{title:"Lily’s Healthy Beef Burger",author:"Lily Ford",time:10,difficulty:"easy",servings:4,procedure:"Lily’s Healthy Beef Burger recipe, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",image:"https://images-na.ssl-images-amazon.com/images/I/81cMw0qNjTL._SX425_.jpg"}],resource:null,settings:{title:"Documentation",url:"",defaultDir:"docs",defaultBranch:"",filled:!1},subdomain:"ga-sps",volunteer:null});var N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:({app:e})=>{e.provide("GStore",q)}}),B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{button:{about:e=>{const{normalize:t}=e;return t(["Über"])},back:e=>{const{normalize:t}=e;return t(["Zurück"])},go:e=>{const{normalize:t}=e;return t(["Los"])},home:e=>{const{normalize:t}=e;return t(["Startseite"])},toggle_dark:e=>{const{normalize:t}=e;return t(["Dunkelmodus umschalten"])},toggle_langs:e=>{const{normalize:t}=e;return t(["Sprachen ändern"])}},intro:{desc:e=>{const{normalize:t}=e;return t(["Vite Startvorlage mit Vorlieben"])},"dynamic-route":e=>{const{normalize:t}=e;return t(["Demo einer dynamischen Route"])},hi:e=>{const{normalize:t,interpolate:o,named:r}=e;return t(["Hi, ",o(r("name")),"!"])},aka:e=>{const{normalize:t}=e;return t(["Auch bekannt als"])},"whats-your-name":e=>{const{normalize:t}=e;return t(["Wie heißt du?"])}},"not-found":e=>{const{normalize:t}=e;return t(["Nicht gefunden"])}}}),H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{button:{about:e=>{const{normalize:t}=e;return t(["About"])},back:e=>{const{normalize:t}=e;return t(["Back"])},go:e=>{const{normalize:t}=e;return t(["GO"])},home:e=>{const{normalize:t}=e;return t(["Home"])},toggle_dark:e=>{const{normalize:t}=e;return t(["Toggle dark mode"])},toggle_langs:e=>{const{normalize:t}=e;return t(["Change languages"])}},intro:{desc:e=>{const{normalize:t}=e;return t(["Opinionated Vite Starter Template"])},"dynamic-route":e=>{const{normalize:t}=e;return t(["Demo of dynamic route"])},hi:e=>{const{normalize:t,interpolate:o,named:r}=e;return t(["Hi, ",o(r("name")),"!"])},aka:e=>{const{normalize:t}=e;return t(["Also known as"])},"whats-your-name":e=>{const{normalize:t}=e;return t(["What's your name?"])}},"not-found":e=>{const{normalize:t}=e;return t(["Not found"])}}}),U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{button:{about:e=>{const{normalize:t}=e;return t(["Acerca de"])},back:e=>{const{normalize:t}=e;return t(["Atrás"])},go:e=>{const{normalize:t}=e;return t(["Ir"])},home:e=>{const{normalize:t}=e;return t(["Inicio"])},toggle_dark:e=>{const{normalize:t}=e;return t(["Alternar modo oscuro"])},toggle_langs:e=>{const{normalize:t}=e;return t(["Cambiar idiomas"])}},intro:{desc:e=>{const{normalize:t}=e;return t(["Plantilla de Inicio de Vite Dogmática"])},"dynamic-route":e=>{const{normalize:t}=e;return t(["Demo de ruta dinámica"])},hi:e=>{const{normalize:t,interpolate:o,named:r}=e;return t(["¡Hola, ",o(r("name")),"!"])},aka:e=>{const{normalize:t}=e;return t(["También conocido como"])},"whats-your-name":e=>{const{normalize:t}=e;return t(["¿Cómo te llamas?"])}},"not-found":e=>{const{normalize:t}=e;return t(["No se ha encontrado"])}}}),G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{button:{about:e=>{const{normalize:t}=e;return t(["À propos de"])},back:e=>{const{normalize:t}=e;return t(["Retour"])},go:e=>{const{normalize:t}=e;return t(["Essayer"])},home:e=>{const{normalize:t}=e;return t(["Accueil"])},toggle_dark:e=>{const{normalize:t}=e;return t(["Basculer en mode sombre"])},toggle_langs:e=>{const{normalize:t}=e;return t(["Changer de langue"])}},intro:{desc:e=>{const{normalize:t}=e;return t(["Exemple d'application Vite"])},"dynamic-route":e=>{const{normalize:t}=e;return t(["Démo de route dynamique"])},hi:e=>{const{normalize:t,interpolate:o,named:r}=e;return t(["Salut, ",o(r("name")),"!"])},aka:e=>{const{normalize:t}=e;return t(["Aussi connu sous le nom de"])},"whats-your-name":e=>{const{normalize:t}=e;return t(["Comment t'appelles-tu ?"])}},"not-found":e=>{const{normalize:t}=e;return t(["Page non trouvée"])}}}),K=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{button:{about:e=>{const{normalize:t}=e;return t(["Su di me"])},back:e=>{const{normalize:t}=e;return t(["Indietro"])},go:e=>{const{normalize:t}=e;return t(["Vai"])},home:e=>{const{normalize:t}=e;return t(["Home"])},toggle_dark:e=>{const{normalize:t}=e;return t(["Attiva/disattiva modalità scura"])},toggle_langs:e=>{const{normalize:t}=e;return t(["Cambia lingua"])}},intro:{desc:e=>{const{normalize:t}=e;return t(["Modello per una Applicazione Vite"])},"dynamic-route":e=>{const{normalize:t}=e;return t(["Demo di rotta dinamica"])},hi:e=>{const{normalize:t,interpolate:o,named:r}=e;return t(["Ciao, ",o(r("name")),"!"])},"whats-your-name":e=>{const{normalize:t}=e;return t(["Come ti chiami?"])}},"not-found":e=>{const{normalize:t}=e;return t(["Non trovato"])}}}),W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{button:{about:e=>{const{normalize:t}=e;return t(["これは？"])},back:e=>{const{normalize:t}=e;return t(["戻る"])},go:e=>{const{normalize:t}=e;return t(["進む"])},home:e=>{const{normalize:t}=e;return t(["ホーム"])},toggle_dark:e=>{const{normalize:t}=e;return t(["ダークモード切り替え"])},toggle_langs:e=>{const{normalize:t}=e;return t(["言語切り替え"])}},intro:{desc:e=>{const{normalize:t}=e;return t(["固執された Vite スターターテンプレート"])},"dynamic-route":e=>{const{normalize:t}=e;return t(["動的ルートのデモ"])},hi:e=>{const{normalize:t,interpolate:o,named:r}=e;return t(["こんにちは、",o(r("name")),"!"])},"whats-your-name":e=>{const{normalize:t}=e;return t(["君の名は。"])}},"not-found":e=>{const{normalize:t}=e;return t(["見つかりませんでした"])}}}),F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{button:{about:e=>{const{normalize:t}=e;return t(["소개"])},back:e=>{const{normalize:t}=e;return t(["뒤로가기"])},go:e=>{const{normalize:t}=e;return t(["이동"])},home:e=>{const{normalize:t}=e;return t(["홈"])},toggle_dark:e=>{const{normalize:t}=e;return t(["다크모드 토글"])},toggle_langs:e=>{const{normalize:t}=e;return t(["언어 변경"])}},intro:{desc:e=>{const{normalize:t}=e;return t(["Vite 애플리케이션 템플릿"])},"dynamic-route":e=>{const{normalize:t}=e;return t(["다이나믹 라우트 데모"])},hi:e=>{const{normalize:t,interpolate:o,named:r}=e;return t(["안녕, ",o(r("name")),"!"])},"whats-your-name":e=>{const{normalize:t}=e;return t(["이름이 뭐예요?"])}},"not-found":e=>{const{normalize:t}=e;return t(["찾을 수 없습니다"])}}}),$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{button:{about:e=>{const{normalize:t}=e;return t(["Sobre"])},back:e=>{const{normalize:t}=e;return t(["Voltar"])},go:e=>{const{normalize:t}=e;return t(["Ir"])},home:e=>{const{normalize:t}=e;return t(["Início"])},toggle_dark:e=>{const{normalize:t}=e;return t(["Alternar modo escuro"])},toggle_langs:e=>{const{normalize:t}=e;return t(["Mudar de idioma"])}},intro:{desc:e=>{const{normalize:t}=e;return t(["Modelo Opinativo de Partida de Vite"])},"dynamic-route":e=>{const{normalize:t}=e;return t(["Demonstração de rota dinâmica"])},hi:e=>{const{normalize:t,interpolate:o,named:r}=e;return t(["Olá, ",o(r("name")),"!"])},aka:e=>{const{normalize:t}=e;return t(["Também conhecido como"])},"whats-your-name":e=>{const{normalize:t}=e;return t(["Qual é o seu nome?"])}},"not-found":e=>{const{normalize:t}=e;return t(["Não encontrado"])}}}),Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{button:{about:e=>{const{normalize:t}=e;return t(["О шаблоне"])},back:e=>{const{normalize:t}=e;return t(["Назад"])},go:e=>{const{normalize:t}=e;return t(["Перейти"])},home:e=>{const{normalize:t}=e;return t(["Главная"])},toggle_dark:e=>{const{normalize:t}=e;return t(["Включить темный режим"])},toggle_langs:e=>{const{normalize:t}=e;return t(["Сменить язык"])}},intro:{desc:e=>{const{normalize:t}=e;return t(["Самостоятельный начальный шаблон Vite"])},"dynamic-route":e=>{const{normalize:t}=e;return t(["Демо динамического маршрута"])},hi:e=>{const{normalize:t,interpolate:o,named:r}=e;return t(["Привет, ",o(r("name")),"!"])},"whats-your-name":e=>{const{normalize:t}=e;return t(["Как тебя зовут?"])}},"not-found":e=>{const{normalize:t}=e;return t(["Не найден"])}}}),Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{button:{about:e=>{const{normalize:t}=e;return t(["Hakkımda"])},back:e=>{const{normalize:t}=e;return t(["Geri"])},go:e=>{const{normalize:t}=e;return t(["İLERİ"])},home:e=>{const{normalize:t}=e;return t(["Anasayfa"])},toggle_dark:e=>{const{normalize:t}=e;return t(["Karanlık modu değiştir"])},toggle_langs:e=>{const{normalize:t}=e;return t(["Dilleri değiştir"])}},intro:{desc:e=>{const{normalize:t}=e;return t(["Görüşlü Vite Başlangıç Şablonu"])},"dynamic-route":e=>{const{normalize:t}=e;return t(["Dinamik rota demosu"])},hi:e=>{const{normalize:t,interpolate:o,named:r}=e;return t(["Merhaba, ",o(r("name")),"!"])},aka:e=>{const{normalize:t}=e;return t(["Ayrıca şöyle bilinir"])},"whats-your-name":e=>{const{normalize:t}=e;return t(["Adınız nedir?"])}},"not-found":e=>{const{normalize:t}=e;return t(["Bulunamadı"])}}}),X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{button:{about:e=>{const{normalize:t}=e;return t(["Về"])},back:e=>{const{normalize:t}=e;return t(["Quay lại"])},go:e=>{const{normalize:t}=e;return t(["Đi"])},home:e=>{const{normalize:t}=e;return t(["Khởi đầu"])},toggle_dark:e=>{const{normalize:t}=e;return t(["Chuyển đổi chế độ tối"])},toggle_langs:e=>{const{normalize:t}=e;return t(["Thay đổi ngôn ngữ"])}},intro:{desc:e=>{const{normalize:t}=e;return t(["Ý kiến cá nhân Vite Template để bắt đầu"])},"dynamic-route":e=>{const{normalize:t}=e;return t(["Bản giới thiệu về dynamic route"])},hi:e=>{const{normalize:t,interpolate:o,named:r}=e;return t(["Hi, ",o(r("name")),"!"])},"whats-your-name":e=>{const{normalize:t}=e;return t(["Tên bạn là gì?"])}},"not-found":e=>{const{normalize:t}=e;return t(["Không tìm thấy"])}}}),J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{button:{about:e=>{const{normalize:t}=e;return t(["关于"])},back:e=>{const{normalize:t}=e;return t(["返回"])},go:e=>{const{normalize:t}=e;return t(["确定"])},home:e=>{const{normalize:t}=e;return t(["首页"])},toggle_dark:e=>{const{normalize:t}=e;return t(["切换深色模式"])},toggle_langs:e=>{const{normalize:t}=e;return t(["切换语言"])}},intro:{desc:e=>{const{normalize:t}=e;return t(["固执己见的 Vite 项目模板"])},"dynamic-route":e=>{const{normalize:t}=e;return t(["动态路由演示"])},hi:e=>{const{normalize:t,interpolate:o,named:r}=e;return t(["你好，",o(r("name"))])},aka:e=>{const{normalize:t}=e;return t(["也叫"])},"whats-your-name":e=>{const{normalize:t}=e;return t(["输入你的名字"])}},"not-found":e=>{const{normalize:t}=e;return t(["未找到页面"])}}});const Y=Object.fromEntries(Object.entries({"../../locales/de.yml":B,"../../locales/en.yml":H,"../../locales/es.yml":U,"../../locales/fr.yml":G,"../../locales/it.yml":K,"../../locales/ja.yml":W,"../../locales/ko.yml":F,"../../locales/pt-BR.yml":$,"../../locales/ru.yml":Q,"../../locales/tr.yml":Z,"../../locales/vi.yml":X,"../../locales/zh-CN.yml":J}).map((([e,t])=>{const o=e.endsWith(".yaml");return[e.slice(14,o?-5:-4),t.default]})));var ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:({app:e})=>{const t=c({legacy:!1,locale:"en",messages:Y});e.use(t)}});var te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:({isClient:e,router:t})=>{e&&(t.beforeEach((()=>{d.start()})),t.afterEach((()=>{d.done()})))}});var oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:({app:e})=>{e.use(p,{iconPack:"fas",iconComponent:"FontAwesomeIcon",button:{override:!0,rootClass:"button",variantClass:"is-",expandedClass:"w-full",roundedClass:"is-rounded",invertedClass:"is-inverted",outlinedClass:"is-outlined"},autocomplete:{override:!0,menuClass:"border absolute z-10 bg-white shadow-lg rounded-md p-2 mt-2 max-h-72 overflow-auto",itemClass:"py-2 px-4 text-sm text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900",itemHoverClass:"bg-gray-100"},checkbox:{override:!0,rootClass:"radio",labelClass:"ml-1 text-sm font-medium text-gray-700",checkClass:"focus:ring-primary-500 h-4 w-4 rounded text-primary-600 border-gray-300",checkedClass:"radio-checked"},radio:{override:!0,rootClass:"radio",labelClass:"ml-1 text-sm font-medium text-gray-700",checkClass:"focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300",checkedClass:"radio-checked"},field:{override:!0,labelClass:"block text-sm font-medium text-gray-700",messageClass:"mt-1 text-sm text-gray-500",variantClassDanger:"bg-red-500",variantDanger:"bg-red-500",variantClass:"text-"},input:{override:!0,rootClass:"relative",inputClass:"block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm",iconLeftClass:"absolute inset-y-0 left-0 pl-3 pointer-events-none text-gray-400",iconLeftSpaceClass:"pl-10",iconRightClass:"absolute inset-y-0 right-0 pr-3 pointer-events-none text-gray-400",iconRightSpaceClass:"pr-10",roundedClass:"rounded-full",variantClass:"border-"},table:{override:!0,borderedClass:"border",detailedClass:"border-red-500",thClass:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",thCheckboxClass:"w-6",tdCheckboxClass:"w-6",emptyClass:"",footerClass:"",hoverableClass:"is-hoverable",mobileClass:"",mobileSortClass:"",narrowedClass:"is-narrowed",paginationWrapperClass:"p-8",scrollableClass:"",stickyHeaderClass:"",stripedClass:"is-striped",tableClass:"table min-w-full divide-y divide-gray-200",tdClass:"py-2 px-6 whitespace-nowrap text-sm text-gray-500",tdDetailedChevronClass:"",tdPositionClass:"",tdStickyClass:"",thCurrentSortClass:"",thDetailedClass:"",thPositionClass:"",thSortIconClass:"",thSortableClass:"",thStickyClass:"",thUnselectableClass:"",trSelectedClass:"is-selected",wrapperClass:"shadow overflow-hidden bg-white border-b border-gray-200 sm:rounded-lg"},pagination:{override:!0,rootClass:"mt-4 text-gray-600 flex items-center justify-end",listClass:"ml-4 flex items-center space-x-1",linkClass:"rounded border border-gray-200 hover:border-gray-300 text-sm h-8 w-8 flex items-center justify-center",linkDisabledClass:"text-gray-300",prevBtnClass:"border",nextBtnClass:"ml-1 border",linkCurrentClass:"bg-primary-500 text-white",ellipsisClass:"inline-flex",infoClass:"border border-red-500",roundedClass:"rounded-full",simpleClass:"",sizeClass:"",orderClass:"",mobileClass:""},dropdown:{rootClass:"flex relative w-full lg:w-auto lg:inline-flex",disabledClass:"",expandedClass:"",inlineClass:"",itemActiveClass:"bg-primary-500 text-white",itemClass:"m-1 py-1 px-4 h-11 flex items-center rounded lg:block relative lg:h-auto text-base font-normal leading-normal cursor-pointer outline-none",itemDisabledClass:"",menuActiveClass:"",menuClass:"absolute shadow left-0 mt-1 w-64 top-full block z-20 shadow p-0 bg-white",menuMobileOverlayClass:"",menuPositionClass:"",mobileClass:"",triggerClass:"w-full lg:w-auto"}})}});var re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:({isClient:e,initialState:t,app:o})=>{const r=_();o.use(r),e?r.state.value=t.pinia||{}:t.pinia=r.state.value}});const ne={},ae=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in ne)return;ne[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":"modulepreload",t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e())):e()};var se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:({isClient:e,router:t})=>{e&&t.isReady().then((async()=>{const{registerSW:e}=await ae((()=>import("./virtual_pwa-register.js")),[]);e({immediate:!0})}))}});var ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:({app:e})=>{e.use(g)}}),le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module"});const ue={maxToasts:20,newestOnTop:!0};var me=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:({app:e})=>{e.use(h,ue)}});var ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:({app:e})=>{e.use(b)}});const de=y("user",(()=>{const e=f(""),t=f(new Set),o=z((()=>Array.from(t.value)));return{setNewName:function(o){e.value&&t.value.add(e.value),e.value=o},otherNames:z((()=>o.value.filter((t=>t!==e.value)))),savedName:e}}));var pe={};const _e=["placeholder","aria-label","onKeydown"],ge={class:"hidden",for:"input"},he=["disabled"],be=v({setup(e){const t=de(),o=f(t.savedName),r=E(),n=()=>{o.value&&r.push(`/hi/${encodeURIComponent(o.value)}`)},{t:a}=k();return(e,t)=>(S(),C("div",null,[j(T("input",{id:"input","onUpdate:modelValue":t[0]||(t[0]=e=>o.value=e),placeholder:x(a)("intro.whats-your-name"),"aria-label":x(a)("intro.whats-your-name"),type:"text",autocomplete:"false",p:"x-4 y-2",w:"250px",text:"center",bg:"transparent",border:"~ rounded gray-200 dark:gray-700",outline:"none active:none",onKeydown:w(n,["enter"])},null,40,_e),[[O,o.value]]),T("label",ge,D(x(a)("intro.whats-your-name")),1),T("div",null,[T("button",{class:"m-3 text-sm btn",disabled:!o.value,onClick:n},D(x(a)("button.go")),9,he)])]))}});"function"==typeof pe&&pe(be);const ye=[{name:"users-bulk-assign",path:"/users/bulk-assign",component:()=>ae((()=>import("./bulk-assign.js")),["bulk-assign.js","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"users-add-service-tech",path:"/users/add-service-tech",component:()=>ae((()=>import("./add-service-tech.js")),["add-service-tech.js","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"users-add-insurance-adjuster",path:"/users/add-insurance-adjuster",component:()=>ae((()=>import("./add-insurance-adjuster.js")),["add-insurance-adjuster.js","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"users-add-application-user",path:"/users/add-application-user",component:()=>ae((()=>import("./add-application-user.js")),["add-application-user.js","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"users-add",path:"/users/add",component:()=>ae((()=>import("./add.js")),["add.js","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"users",path:"/users",component:()=>ae((()=>import("./index.js")),["index.js","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"user",path:"/user",component:()=>ae((()=>import("./user.js")),["user.js","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"setup",path:"/setup",component:()=>ae((()=>import("./setup.js")),["setup.js","vendor.js"]),props:!0,meta:{layout:"home"}},{name:"settings-service-types-add",path:"/settings/service-types/add",component:()=>ae((()=>import("./add2.js")),["add2.js","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"settings-service-types",path:"/settings/service-types",component:()=>ae((()=>import("./index2.js")),["index2.js","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"settings-service-areas-add",path:"/settings/service-areas/add",component:()=>ae((()=>import("./add3.js")),["add3.js","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"settings-service-areas",path:"/settings/service-areas",component:()=>ae((()=>import("./index3.js")),["index3.js","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"settings-regions",path:"/settings/regions",component:()=>ae((()=>import("./index4.js")),["index4.js","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"settings-permissions-edit",path:"/settings/permissions/edit",component:()=>ae((()=>import("./edit.js")),["edit.js","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"settings-faq-edit",path:"/settings/faq/edit",component:()=>ae((()=>import("./edit2.js")),["edit2.js","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"settings-announcements-add",path:"/settings/announcements/add",component:()=>ae((()=>import("./add4.js")),["add4.js","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"settings-announcements",path:"/settings/announcements",component:()=>ae((()=>import("./index5.js")),["index5.js","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"scratch",path:"/scratch",component:()=>ae((()=>import("./scratch.js")),["scratch.js","vue-class-component.esm-bundler.js","vendor.js"]),props:!0},{name:"reports-user",path:"/reports/user",component:()=>ae((()=>import("./index6.js")),["index6.js","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"reports-allstate-hic-exact",path:"/reports/allstate/hic-exact",component:()=>ae((()=>import("./hic-exact.js")),["hic-exact.js","hic-exact.css","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"reports-allstate-hic",path:"/reports/allstate/hic",component:()=>ae((()=>import("./hic.js")),["hic.js","hic.css","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"reports-add",path:"/reports/add",component:()=>ae((()=>import("./add5.js")),["add5.js","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"reports",path:"/reports",component:()=>ae((()=>import("./index7.js")),["index7.js","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"README",path:"/readme",component:()=>ae((()=>import("./README.js")),["README.js","vendor.js"]),props:!0},{name:"projects-add",path:"/projects/add",component:()=>ae((()=>import("./add6.js")),["add6.js","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"projects",path:"/projects",component:()=>ae((()=>import("./index8.js")),["index8.js","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"person-layout",path:"/person/layout",component:()=>ae((()=>import("./layout.js")),["layout.js","vendor.js","BaseIconOutlined.js","index9.js"]),props:!0},{name:"person-edit",path:"/person/edit",component:()=>ae((()=>import("./edit3.js")),["edit3.js","SectionHeader.js","vendor.js","SectionWrapper.js"]),props:!0},{name:"person",path:"/person",component:()=>ae((()=>import("./index10.js")),["index10.js","SectionHeader.js","vendor.js","SectionWrapper.js"]),props:!0},{name:"home",path:"/home",component:()=>ae((()=>import("./home.js")),["home.js","vendor.js"]),props:!0},{name:"hello",path:"/hello",component:()=>ae((()=>import("./hello.js")),["hello.js","hello.css","vue-class-component.esm-bundler.js","vendor.js"]),props:!0,meta:{layout:"home"}},{name:"generic",path:"/generic",component:()=>ae((()=>import("./generic.js")),["generic.js","vendor.js"]),props:!0},{name:"design-tokens",path:"/design/tokens",component:()=>ae((()=>import("./tokens.js")),["tokens.js","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"design",path:"/design",component:()=>ae((()=>import("./index11.js")),["index11.js","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"dashboard",path:"/dashboard",component:()=>ae((()=>import("./dashboard.js")),["dashboard.js","BaseIconSolid.js","index9.js","vendor.js","SectionWrapper.js","index12.js"]),props:!0,meta:{layout:"hancock"}},{name:"customers-add-business-unit",path:"/customers/add-business-unit",component:()=>ae((()=>import("./add-business-unit.js")),["add-business-unit.js","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"customers-add",path:"/customers/add",component:()=>ae((()=>import("./add7.js")),["add7.js","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"customers",path:"/customers",component:()=>ae((()=>import("./index13.js")),["index13.js","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"calendar",path:"/calendar",component:()=>ae((()=>import("./calendar.js")),["calendar.js","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"billing",path:"/billing",component:()=>ae((()=>import("./billing.js")),["billing.js","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"about",path:"/about",component:()=>ae((()=>import("./about.js")),["about.js","vendor.js"]),props:!0,meta:{layout:"hancock"}},{name:"index",path:"/",component:be,props:!0,meta:{layout:"home"}},{name:"hi-name",path:"/hi/:name",component:()=>ae((()=>import("./[name].js")),["[name].js","vendor.js"]),props:!0},{name:"all",path:"/:all(.*)*",component:()=>ae((()=>import("./[...all].js")),["[...all].js","vendor.js"]),props:!0,meta:{layout:404}}];var fe=(e,t)=>{for(const[o,r]of t)e[o]=r;return e};const ze={class:"p-4"};const ve={404:()=>ae((()=>import("./404.js")),["404.js","vendor.js"]),default:fe({},[["render",function(e,t,o,r,n,a){const s=A("router-view");return S(),C("main",ze,[V(s)])}]]),develop:()=>ae((()=>import("./develop.js")),["develop.js","Footer.js","vendor.js","index12.js"]),docs:()=>ae((()=>import("./docs.js")),["docs.js","windi-components.css","main.css","HeaderComponent.js","BaseIconSolid.js","index9.js","vendor.js","FooterComponent.js"]),hancock:()=>ae((()=>import("./hancock.js")),["hancock.js","hancock.css","windi-components.css","windi-utilities.css","BaseIconSolid.js","index9.js","vendor.js","HeaderComponent.js","BaseIconOutlined.js","Footer.js","index12.js"]),home:()=>ae((()=>import("./home2.js")),["home2.js","windi-components.css","main.css","windi-utilities.css","Footer.js","vendor.js","index12.js"]),plain:()=>ae((()=>import("./plain.js")),["plain.js","vendor.js"]),promiserves:()=>ae((()=>import("./promiserves.js")),["promiserves.js","promiserves.css","windi-components.css","windi-utilities.css","HeaderComponent.js","BaseIconSolid.js","index9.js","vendor.js","FooterComponent.js"])};R(v({setup:e=>(P({title:"Design Tokens",meta:[{name:"description",content:"Opinionated Vite Starter Template"}]}),(e,t)=>{const o=A("router-view");return S(),L(o)})}),{routes:ye.map((e=>{var r,n,a;return{path:e.path,component:ve[(null==(r=e.meta)?void 0:r.layout)||"default"],children:[(n=i({},e),a={path:""},t(n,o(a)))]}}))},(e=>{Object.values({"./modules/casl.ts":M,"./modules/global.ts":N,"./modules/i18n.ts":ee,"./modules/nprogress.ts":te,"./modules/oruga.ts":oe,"./modules/pinia.ts":re,"./modules/pwa.ts":se,"./modules/vue-clickaway.ts":ie,"./modules/vue-sidebar-menu.ts":le,"./modules/vue-toastification.ts":me,"./modules/vuejs-smart-table.ts":ce}).map((t=>{var o;return null==(o=t.install)?void 0:o.call(t,e)}))}));export{fe as _,de as u};
//# sourceMappingURL=main.js.map
