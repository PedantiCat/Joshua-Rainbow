(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{BTho:function(t,e,i){"use strict";var a=i("HAuM"),l=i("hh1v"),n=[].slice,s={},r=function(t,e,i){if(!(e in s)){for(var a=[],l=0;l<e;l++)a[l]="a["+l+"]";s[e]=Function("C,a","return new C("+a.join(",")+")")}return s[e](t,i)};t.exports=Function.bind||function(t){var e=a(this),i=n.call(arguments,1),s=function(){var a=i.concat(n.call(arguments));return this instanceof s?r(e,a.length,a):e.apply(t,a)};return l(e.prototype)&&(s.prototype=e.prototype),s}},NI4W:function(t,e,i){"use strict";var a=i("Tyhw");i.n(a).a},Tyhw:function(t,e,i){},iyQ6:function(t,e,i){"use strict";i.r(e);i("wLYn"),i("R5XZ");var a={metaInfo:{title:"Home"},data:function(){return{displayed_tile:null,gallery_interval:null}},methods:{next:function(){this.displayed_tile=(this.displayed_tile+1)%this.$page.allFrontPage.edges[0].node.featured_pages.length,clearInterval(this.gallery_interval)},prev:function(){var t=this.$page.allFrontPage.edges[0].node.featured_pages.length;this.displayed_tile=(this.displayed_tile-1+t)%t,clearInterval(this.gallery_interval)}},mounted:function(){this.displayed_tile=0,this.gallery_interval=setInterval(function(){this.displayed_tile=(this.displayed_tile+1)%this.$page.allFrontPage.edges[0].node.featured_pages.length}.bind(this),1e4)}},l=(i("NI4W"),i("KHd+")),n=null,s=Object(l.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Layout",[i("main",{staticClass:"main"},[i("ul",{staticClass:"featured-pages-ul"},t._l(t.$page.allFrontPage.edges[0].node.featured_pages.entries(),(function(e){var a=e[0],l=e[1];return i("li",{directives:[{name:"show",rawName:"v-show",value:t.displayed_tile==a||null==t.displayed_tile,expression:"displayed_tile==i || displayed_tile==null"}],key:l.title,staticClass:"featured-pages-li"},[i("div",{staticClass:"image-cont"},[i("g-link",{attrs:{to:l.link}},[i("g-image",{staticClass:"featured-page-cover",attrs:{src:l.cover_image}})],1)],1),i("div",{staticClass:"bottom-bar"},[null!=t.displayed_tile?i("div",{staticClass:"prev",on:{click:t.prev}},[i("svg",{staticClass:"arrow",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"15px",height:"15px"}},[i("line",{attrs:{x1:"0%",y1:"50%",x2:"100%",y2:"50%"}}),i("line",{attrs:{x1:"0%",y1:"50%",x2:"50%",y2:"100%"}}),i("line",{attrs:{x1:"0%",y1:"50%",x2:"50%",y2:"0%"}})]),i("span",{staticClass:"link"},[t._v("Prev")])]):t._e(),i("g-link",{staticClass:"featured-page-link link",attrs:{to:l.link}},[t._v("\n            "+t._s(l.title)+"\n          ")]),null!=t.displayed_tile?i("div",{staticClass:"next",on:{click:t.next}},[i("span",{staticClass:"link"},[t._v("Next")]),i("svg",{staticClass:"arrow",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"15px",height:"15px"}},[i("line",{attrs:{x1:"0%",y1:"50%",x2:"100%",y2:"50%"}}),i("line",{attrs:{x1:"100%",y1:"50%",x2:"50%",y2:"100%"}}),i("line",{attrs:{x1:"100%",y1:"50%",x2:"50%",y2:"0%"}})])]):t._e()],1)])})),0)])])}),[],!1,null,"5cbf85c4",null);"function"==typeof n&&n(s);e.default=s.exports},wLYn:function(t,e,i){i("I+eb")({target:"Function",proto:!0},{bind:i("BTho")})}}]);