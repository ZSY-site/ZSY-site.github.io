(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{2098:function(t,e,a){"use strict";a.r(e);var o=a(0),r=a(350),n=a(313),s=a(312),i=Object(o.c)({components:{NavLink:r.a,ModuleTransition:n.a},setup(t,e){const a=Object(s.a)();return{recoShowModule:Object(s.b)(),actionLink:Object(o.a)(()=>a&&{link:a.$frontmatter.actionLink,text:a.$frontmatter.actionText}),heroImageStyle:Object(o.a)(()=>a.$frontmatter.heroImageStyle||{maxHeight:"200px",margin:"6rem auto 1.5rem"})}}}),c=(a(413),a(2)),l=Object(c.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"hero"},[a("ModuleTransition",[t.recoShowModule&&t.$frontmatter.heroImage?a("img",{style:t.heroImageStyle||{},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:"hero"}}):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.04"}},[t.recoShowModule&&null!==t.$frontmatter.heroText?a("h1",{style:{marginTop:t.$frontmatter.heroImage?"0px":"140px"}},[t._v("\n        "+t._s(t.$frontmatter.heroText||t.$title||"vuePress-theme-reco")+"\n      ")]):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.08"}},[t.recoShowModule&&null!==t.$frontmatter.tagline?a("p",{staticClass:"description"},[t._v("\n        "+t._s(t.$frontmatter.tagline||t.$description||"Welcome to your vuePress-theme-reco site")+"\n      ")]):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.16"}},[t.recoShowModule&&t.$frontmatter.actionText&&t.$frontmatter.actionLink?a("p",{staticClass:"action"},[a("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()])],1),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.24"}},[t.recoShowModule&&t.$frontmatter.features&&t.$frontmatter.features.length?a("div",{staticClass:"features"},t._l(t.$frontmatter.features,(function(e,o){return a("div",{key:o,staticClass:"feature"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.details))])])})),0):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.32"}},[a("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-center",attrs:{custom:""}})],1)],1)}),[],!1,null,null,null).exports,u=(a(16),a(329)),p=a(365),g=a.n(p),m=a(32);const h=()=>{const t=Object(s.a)(),e=Object(o.h)(!0),a=Object(o.g)({left:0,top:0});return Object(o.e)(()=>{e.value=!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)}),{popupWindowStyle:a,showDetail:o=>{const r=o.target;r.querySelector(".popup-window-wrapper").style.display="block";const n=r.querySelector(".popup-window"),s=document.querySelector(".info-wrapper"),{clientWidth:i}=r,{clientWidth:c,clientHeight:l}=n;if(e)a.left=(i-c)/2+"px",a.top=-l+"px",s.style.overflow="visible",t.$nextTick(()=>{(t=>{const{offsetWidth:e}=document.body,{x:o,width:r}=t.getBoundingClientRect(),n=e-(o+r);if(n<0){const{offsetLeft:e}=t;a.left=e+n+"px"}})(n)});else{const t=function(t){const e=document,a=t.getBoundingClientRect();let o=a.left,r=a.top;return o+=e.documentElement.scrollLeft||e.body.scrollLeft,r+=e.documentElement.scrollTop||e.body.scrollTop,{left:o,top:r}};s.style.overflow="hidden";const e=t(r).left-t(s).left;a.left=-e+(s.clientWidth-n.clientWidth)/2+"px",a.top=-l+"px"}},hideDetail:t=>{t.target.querySelector(".popup-window-wrapper").style.display="none"}}};var d=Object(o.c)({setup(t,e){const a=Object(s.a)(),{popupWindowStyle:r,showDetail:n,hideDetail:i}=h();return{dataAddColor:Object(o.a)(()=>{const{friendLink:t=[]}=a&&a.$themeConfig;return t.map(t=>(t.color=Object(m.b)(),t))}),popupWindowStyle:r,showDetail:n,hideDetail:i,getImgUrl:t=>{const{logo:e="",email:o=""}=t;return e&&/^http/.test(e)?e:e&&!/^http/.test(e)?a.$withBase(e):`//1.gravatar.com/avatar/${g()(o||"")}?s=50&amp;d=mm&amp;r=x`}}}}),f=(a(414),Object(c.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"friend-link-wrapper"},t._l(t.dataAddColor,(function(e,o){return a("div",{key:o,staticClass:"friend-link-item",attrs:{target:"_blank"},on:{mouseenter:function(e){return t.showDetail(e)},mouseleave:function(e){return t.hideDetail(e)}}},[a("span",{staticClass:"list-style",style:{backgroundColor:e.color}}),t._v("\n    "+t._s(e.title)+"\n    "),a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"popup-window-wrapper"},[a("div",{ref:"popupWindow",refInFor:!0,staticClass:"popup-window",style:t.popupWindowStyle},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:t.getImgUrl(e)}})]),t._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"title"},[a("h4",[t._v(t._s(e.title))]),t._v(" "),a("a",{staticClass:"btn-go",style:{backgroundColor:e.color},attrs:{href:e.link,target:"_blank"}},[t._v("GO")])]),t._v(" "),e.desc?a("p",[t._v(t._s(e.desc))]):t._e()])])])])],1)})),0)}),[],!1,null,"65cde94c",null).exports),v=a(325),_=a(387),b=Object(o.c)({components:{NoteAbstract:v.a,TagList:u.a,FriendLink:f,ModuleTransition:n.a,PersonalInfo:_.a,RecoIcon:n.b},setup(t,e){const r=Object(s.a)(),n=Object(o.g)({recoShow:!1,heroHeight:0}),i=Object(s.b)(),c=Object(o.a)(()=>r.$frontmatter.heroImageStyle||{}),l=Object(o.a)(()=>{const t={textAlign:"center",overflow:"hidden",background:`url(${r.$frontmatter.bgImage?r.$withBase(r.$frontmatter.bgImage):a(415)}) center/cover no-repeat`},{bgImageStyle:e}=r.$frontmatter;return e?{...t,...e}:t});return Object(o.e)(()=>{n.heroHeight=document.querySelector(".hero").clientHeight,n.recoShow=!0}),{recoShowModule:i,heroImageStyle:c,bgImageStyle:l,...Object(o.i)(n),getOneColor:m.b}},methods:{paginationChange(t){setTimeout(()=>{window.scrollTo(0,this.heroHeight)},100)},getPagesByTags(t){this.$router.push({path:t.path})}}}),C=(a(416),Object(c.a)(b,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-blog"},[a("div",{staticClass:"hero",style:Object.assign({},t.bgImageStyle)},[a("div",[a("ModuleTransition",[t.recoShowModule&&t.$frontmatter.heroImage?a("img",{staticClass:"hero-img",style:t.heroImageStyle||{},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:"hero"}}):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.04"}},[t.recoShowModule&&null!==t.$frontmatter.heroText?a("h1",[t._v("\n          "+t._s(t.$frontmatter.heroText||t.$title||"vuePress-theme-reco")+"\n        ")]):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.08"}},[t.recoShowModule&&null!==t.$frontmatter.tagline?a("p",{staticClass:"description"},[t._v("\n          "+t._s(t.$frontmatter.tagline||t.$description||"Welcome to your vuePress-theme-reco site")+"\n        ")]):t._e()])],1)]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.16"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-blog-wrapper"},[a("div",{staticClass:"blog-list"},[a("note-abstract",{attrs:{data:t.$recoPosts},on:{paginationChange:t.paginationChange}})],1),t._v(" "),a("div",{staticClass:"info-wrapper"},[a("PersonalInfo"),t._v(" "),a("h4",[a("reco-icon",{attrs:{icon:"reco-category"}}),t._v(" "+t._s(t.$recoLocales.category))],1),t._v(" "),a("ul",{staticClass:"category-wrapper"},t._l(this.$categories.list,(function(e,o){return a("li",{key:o,staticClass:"category-item"},[a("router-link",{attrs:{to:e.path}},[a("span",{staticClass:"category-name"},[t._v(t._s(e.name))]),t._v(" "),a("span",{staticClass:"post-num",style:{backgroundColor:t.getOneColor()}},[t._v(t._s(e.pages.length))])])],1)})),0),t._v(" "),a("hr"),t._v(" "),0!==t.$tags.list.length?a("h4",[a("reco-icon",{attrs:{icon:"reco-tag"}}),t._v(" "+t._s(t.$recoLocales.tag))],1):t._e(),t._v(" "),a("TagList",{on:{getCurrentTag:t.getPagesByTags}}),t._v(" "),t.$themeConfig.friendLink&&0!==t.$themeConfig.friendLink.length?a("h4",[a("reco-icon",{attrs:{icon:"reco-friend"}}),t._v(" "+t._s(t.$recoLocales.friendLink))],1):t._e(),t._v(" "),a("FriendLink")],1)])]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.24"}},[a("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-center",attrs:{custom:""}})],1)],1)}),[],!1,null,null,null).exports),$=a(321),w=a(17);function y(t,e,a){const o=[];!function t(e,a){for(let o=0,r=e.length;o<r;o++)"group"===e[o].type?t(e[o].children||[],a):a.push(e[o])}(e,o);for(let e=0;e<o.length;e++){const r=o[e];if("page"===r.type&&r.path===decodeURIComponent(t.path))return o[e+a]}}var O=Object(o.c)({components:{PageInfo:$.a},props:["sidebarItems"],setup(t,e){const a=Object(s.a)(),{sidebarItems:r}=Object(o.i)(t),n=Object(s.b)(),i=Object(o.a)(()=>{const{isShowComments:t}=a.$frontmatter,{showComment:e}=a.$themeConfig.valineConfig||{showComment:!0};return!1!==e&&!1!==t||!1===e&&!0===t}),c=Object(o.a)(()=>{const{$themeConfig:{valineConfig:t},$themeLocaleConfig:{valineConfig:e}}=a||{},o=e||t;return o&&0!=o.visitor}),l=Object(o.a)(()=>!1!==a.$themeConfig.lastUpdated&&a.$page.lastUpdated),u=Object(o.a)(()=>"string"==typeof a.$themeLocaleConfig.lastUpdated?a.$themeLocaleConfig.lastUpdated:"string"==typeof a.$themeConfig.lastUpdated?a.$themeConfig.lastUpdated:"Last Updated"),p=Object(o.a)(()=>{const t=a.$frontmatter.prev;return!1===t?void 0:t?Object(w.k)(a.$site.pages,t,a.$route.path):(e=a.$page,o=r.value,y(e,o,-1));var e,o}),g=Object(o.a)(()=>{const t=a.$frontmatter.next;return!1===g?void 0:t?Object(w.k)(a.$site.pages,t,a.$route.path):(e=a.$page,o=r.value,y(e,o,1));var e,o}),m=Object(o.a)(()=>{if(!1===a.$frontmatter.editLink)return!1;const{repo:t,editLinks:e,docsDir:o="",docsBranch:r="master",docsRepo:n=t}=a.$themeConfig;return n&&e&&a.$page.relativePath?function(t,e,a,o,r){if(/bitbucket.org/.test(t)){return(w.i.test(e)?e:t).replace(w.c,"")+"/src"+`/${o}/`+(a?a.replace(w.c,"")+"/":"")+r+`?mode=edit&spa=0&at=${o}&fileviewer=file-view-default`}return(w.i.test(e)?e:"https://github.com/"+e).replace(w.c,"")+"/edit"+`/${o}/`+(a?a.replace(w.c,"")+"/":"")+r}(t,n,o,r,a.$page.relativePath):""}),h=Object(o.a)(()=>a.$themeLocaleConfig.editLinkText||a.$themeConfig.editLinkText||"Edit this page"),d=Object(o.a)(()=>a.$showSubSideBar?{}:{paddingRight:"0"});return{recoShowModule:n,shouldShowComments:i,showAccessNumber:c,lastUpdated:l,lastUpdatedText:u,prev:p,next:g,editLink:m,editLinkText:h,pageStyle:d}}}),S=(a(417),Object(c.a)(O,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"page",style:t.pageStyle},[a("section",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}]},[a("div",{staticClass:"page-title"},[a("h1",{staticClass:"title"},[t._v(t._s(t.$page.title))]),t._v(" "),a("PageInfo",{attrs:{pageInfo:t.$page,showAccessNumber:t.showAccessNumber}})],1),t._v(" "),a("Content",{staticClass:"theme-reco-content"})],1),t._v(" "),t.recoShowModule?a("footer",{staticClass:"page-edit"},[t.editLink?a("div",{staticClass:"edit-link"},[a("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),a("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?a("div",{staticClass:"last-updated"},[a("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),a("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]):t._e(),t._v(" "),t.recoShowModule&&(t.prev||t.next)?a("div",{staticClass:"page-nav"},[a("p",{staticClass:"inner"},[t.prev?a("span",{staticClass:"prev"},[t.prev?a("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?a("span",{staticClass:"next"},[t.next?a("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e()],1):t._e()])]):t._e(),t._v(" "),t.recoShowModule?a("Comments",{attrs:{isShowComments:t.shouldShowComments}}):t._e()],1)}),[],!1,null,null,null).exports),j=a(418),k=Object(o.c)({components:{RecoIcon:n.b},setup(t,e){const a=Object(s.a)(),r=Object(o.a)(()=>{var t,e;const o=null==a||null===(t=a.$themeConfig)||void 0===t?void 0:t.valineConfig,r=(null==a||null===(e=a.$themeLocaleConfig)||void 0===e?void 0:e.valineConfig)||o;return r&&0!=r.visitor});return{version:j.a,showAccessNumber:r}}}),x=(a(419),Object(c.a)(k,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-wrapper"},[a("span",[a("reco-icon",{attrs:{icon:"reco-theme"}}),t._v(" "),a("a",{attrs:{target:"blank",href:"https://vuepress-theme-reco.recoluan.com"}},[t._v(t._s("vuepress-theme-reco@"+t.version))])],1),t._v(" "),t.$themeConfig.record?a("span",[a("reco-icon",{attrs:{icon:"reco-beian"}}),t._v(" "),a("a",{attrs:{href:t.$themeConfig.recordLink||"#"}},[t._v(t._s(t.$themeConfig.record))])],1):t._e(),t._v(" "),a("span",[a("reco-icon",{attrs:{icon:"reco-copyright"}}),t._v(" "),a("a",[t.$themeConfig.author?a("span",[t._v(t._s(t.$themeConfig.author))]):t._e(),t._v("\n        \n      "),t.$themeConfig.startYear&&t.$themeConfig.startYear!=(new Date).getFullYear()?a("span",[t._v(t._s(t.$themeConfig.startYear)+" - ")]):t._e(),t._v("\n      "+t._s((new Date).getFullYear())+"\n    ")])],1),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.showAccessNumber,expression:"showAccessNumber"}]},[a("reco-icon",{attrs:{icon:"reco-eye"}}),t._v(" "),a("AccessNumber",{attrs:{idVal:"/"}})],1),t._v(" "),t.$themeConfig.cyberSecurityRecord?a("p",{staticClass:"cyber-security"},[a("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png",alt:""}}),t._v(" "),a("a",{attrs:{href:t.$themeConfig.cyberSecurityLink||"#"}},[t._v(t._s(t.$themeConfig.cyberSecurityRecord))])]):t._e(),t._v(" "),a("Comments",{attrs:{isShowComments:!1}})],1)}),[],!1,null,"1bb2f610",null).exports),I=a(328),T=Object(o.c)({components:{HomeBlog:C,Home:l,Page:S,Common:I.a,Footer:x,ModuleTransition:n.a},setup(t,e){const a=Object(s.a)(),r=Object(o.a)(()=>{const{$page:t,$site:e,$localePath:o}=a;return t?Object(w.l)(t,t.regularPath,e,o):[]}),n=Object(o.a)(()=>{const{type:t}=a.$themeConfig||{};return t?"blog"==t?"HomeBlog":t:"Home"}),i=Object(o.h)(!1);Object(o.e)(()=>{i.value=!0});const c=Object(o.a)(()=>null==a?void 0:a.$page.path);return{sidebarItems:r,homeCom:n,show:i,path:c}}}),P=(a(420),a(421),Object(c.a)(T,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Common",{attrs:{sidebarItems:t.sidebarItems,showModule:t.show}},[t.$frontmatter.home?a(t.homeCom,{tag:"component"}):a("div",[t.sidebarItems.length>0?a("ModuleTransition",[a("Page",{key:t.path,attrs:{"sidebar-items":t.sidebarItems}})],1):a("Page",{key:t.path,attrs:{"sidebar-items":t.sidebarItems}})],1),t._v(" "),t.$frontmatter.home?a("Footer",{staticClass:"footer"}):t._e()],1)}),[],!1,null,null,null));e.default=P.exports},315:function(t,e,a){},316:function(t,e,a){},317:function(t,e,a){},320:function(t,e,a){},321:function(t,e,a){"use strict";a(16);var o=a(0),r=a(313),n=a(312),s=Object(o.c)({components:{RecoIcon:r.b},props:{pageInfo:{type:Object,default:()=>({})},currentTag:{type:String,default:""},showAccessNumber:{type:Boolean,default:!1}},setup(t,e){const a=Object(n.a)();return{numStyle:{fontSize:".9rem",fontWeight:"normal",color:"#999"},goTags:t=>{a.$route.path!==`/tag/${t}/`&&a.$router.push({path:`/tag/${t}/`})},formatDateValue:t=>new Intl.DateTimeFormat(a.$lang).format(new Date(t))}}}),i=(a(322),a(2)),c=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.pageInfo.frontmatter.author||t.$themeConfig.author?a("reco-icon",{attrs:{icon:"reco-account"}},[a("span",[t._v(t._s(t.pageInfo.frontmatter.author||t.$themeConfig.author))])]):t._e(),t._v(" "),t.pageInfo.frontmatter.date?a("reco-icon",{attrs:{icon:"reco-date"}},[a("span",[t._v(t._s(t.formatDateValue(t.pageInfo.frontmatter.date)))])]):t._e(),t._v(" "),!0===t.showAccessNumber?a("reco-icon",{attrs:{icon:"reco-eye"}},[a("AccessNumber",{attrs:{idVal:t.pageInfo.path,numStyle:t.numStyle}})],1):t._e(),t._v(" "),t.pageInfo.frontmatter.tags?a("reco-icon",{staticClass:"tags",attrs:{icon:"reco-tag"}},t._l(t.pageInfo.frontmatter.tags,(function(e,o){return a("span",{key:o,staticClass:"tag-item",class:{active:t.currentTag==e},on:{click:function(a){return a.stopPropagation(),t.goTags(e)}}},[t._v(t._s(e))])})),0):t._e()],1)}),[],!1,null,"6db21d7c",null);e.a=c.exports},322:function(t,e,a){"use strict";a(315)},323:function(t,e,a){"use strict";a(316)},324:function(t,e,a){"use strict";a(317)},325:function(t,e,a){"use strict";var o=a(0),r={methods:{_getStoragePage(){const t=window.location.pathname,e=JSON.parse(sessionStorage.getItem("currentPage"));return null===e||t!==e.path?(sessionStorage.setItem("currentPage",JSON.stringify({page:1,path:""})),1):parseInt(e.page)},_setStoragePage(t){const e=window.location.pathname;sessionStorage.setItem("currentPage",JSON.stringify({page:t,path:e}))}}},n=a(313),s=a(321),i=Object(o.c)({components:{PageInfo:s.a,RecoIcon:n.b},props:["item","currentPage","currentTag"]}),c=(a(323),a(2)),l=Object(c.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"abstract-item",on:{click:function(e){return t.$router.push(t.item.path)}}},[t.item.frontmatter.sticky?a("reco-icon",{attrs:{icon:"reco-sticky"}}):t._e(),t._v(" "),a("div",{staticClass:"title"},[t.item.frontmatter.keys?a("reco-icon",{attrs:{icon:"reco-lock"}}):t._e(),t._v(" "),a("router-link",{attrs:{to:t.item.path}},[t._v(t._s(t.item.title))])],1),t._v(" "),a("div",{staticClass:"abstract",domProps:{innerHTML:t._s(t.item.excerpt)}}),t._v(" "),a("PageInfo",{attrs:{pageInfo:t.item,currentTag:t.currentTag}})],1)}),[],!1,null,"174af40c",null).exports,u=a(312),p=Object(o.c)({mixins:[r],components:{NoteAbstractItem:l},props:["data","currentTag"],setup(t,e){const a=Object(u.a)(),{data:r}=Object(o.i)(t),n=Object(o.h)(1),s=Object(o.a)(()=>{const t=(n.value-1)*a.$perPage,e=n.value*a.$perPage;return r.value.slice(t,e)});return Object(o.e)(()=>{n.value=a._getStoragePage()||1}),{currentPage:n,currentPageData:s,getCurrentPage:t=>{n.value=t,a._setStoragePage(t),e.emit("paginationChange",t)}}},watch:{$route(){this.currentPage=this._getStoragePage()||1}}}),g=(a(324),Object(c.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"abstract-wrapper"},[t._l(t.currentPageData,(function(e){return a("NoteAbstractItem",{key:e.path,attrs:{item:e,currentPage:t.currentPage,currentTag:t.currentTag}})})),t._v(" "),a("pagation",{staticClass:"pagation",attrs:{total:t.data.length,currentPage:t.currentPage},on:{getCurrentPage:t.getCurrentPage}})],2)}),[],!1,null,"39eb36a6",null));e.a=g.exports},327:function(t,e,a){"use strict";a(320)},329:function(t,e,a){"use strict";var o=a(0),r=a(32),n=a(312),s=Object(o.c)({props:{currentTag:{type:String,default:""}},setup(t,e){const a=Object(n.a)();return{tags:Object(o.a)(()=>[{name:a.$recoLocales.all,path:"/tag/"},...a.$tagesList]),tagClick:t=>{e.emit("getCurrentTag",t)},getOneColor:r.b}}}),i=(a(327),a(2)),c=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tags"},t._l(t.tags,(function(e,o){return a("span",{directives:[{name:"show",rawName:"v-show",value:!e.pages||e.pages&&e.pages.length>0,expression:"!item.pages || (item.pages && item.pages.length > 0)"}],key:o,class:{active:e.name==t.currentTag},style:{backgroundColor:t.getOneColor()},on:{click:function(a){return t.tagClick(e)}}},[t._v(t._s(e.name))])})),0)}),[],!1,null,"2dbc4fdc",null);e.a=c.exports},371:function(t,e,a){},372:function(t,e,a){},373:function(t,e,a){},374:function(t,e,a){},375:function(t,e,a){},376:function(t,e,a){},377:function(t,e,a){},413:function(t,e,a){"use strict";a(371)},414:function(t,e,a){"use strict";a(372)},415:function(t,e,a){t.exports=a.p+"assets/img/bg.2cfdbb33.svg"},416:function(t,e,a){"use strict";a(373)},417:function(t,e,a){"use strict";a(374)},418:function(t){t.exports=JSON.parse('{"a":"1.6.17"}')},419:function(t,e,a){"use strict";a(375)},420:function(t,e,a){"use strict";a(376)},421:function(t,e,a){"use strict";a(377)}}]);