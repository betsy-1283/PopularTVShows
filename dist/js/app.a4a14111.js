(function(t){function a(a){for(var r,s,o=a[0],l=a[1],c=a[2],v=0,p=[];v<o.length;v++)s=o[v],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(a);while(p.length)p.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],r=!0,o=1;o<e.length;o++){var l=e[o];0!==n[l]&&(r=!1)}r&&(i.splice(a--,1),t=s(s.s=e[0]))}return t}var r={},n={app:0},i=[];function s(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=r,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)s.d(e,r,function(a){return t[a]}.bind(null,r));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var u=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";e("85ec")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Navigation"),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},t._l(t.movies,(function(t){return e("Card",{key:t.id,staticClass:"col-12 col-md-3",attrs:{movieobj:t}})})),1)])],1)},i=[],s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Navbar")]),e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})]),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item active"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Home "),e("span",{staticClass:"sr-only"},[t._v("(current)")])])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Features")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Pricing")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link disabled",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[t._v("Disabled")])])])])]),e("div",{staticClass:"jumbotron jumbotron-fluid"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"display-4"},[t._v("Popular TV Shows")]),e("p",{staticClass:"lead"})])])])}],l={name:"Navigation"},c=l,u=e("2877"),v=Object(u["a"])(c,s,o,!1,null,null,null),p=v.exports,d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"card",staticStyle:{width:"18rem"}},[e("img",{staticClass:"card-img-top",attrs:{src:"https://image.tmdb.org/t/p/original"+t.movieobj.poster_path,alt:" "}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(t.movieobj.title))]),e("p",{staticClass:"card-text"},[t._v(" "+t._s(t.movieobj.overview)+" ")]),e("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Go somewhere")])])])])},f=[],b={name:"Card",props:["movieobj"]},m=b,g=Object(u["a"])(m,d,f,!1,null,null,null),h=g.exports,_=e("bc3a"),C=e.n(_),y={name:"App",components:{Navigation:p,Card:h},data:function(){return{movies:[{id:1,title:"matrix",overview:"A movie about the matrix",poster_path:"matrix.jpg"},{id:2,title:"top gun",overview:"A movie about fighter pilots",poster_path:"topgun.jpg"}]}},mounted:function(){var t=this;C.a.get("https://api.themoviedb.org/3/tv/popular?api_key=8aca17faf6bf476ec035b28e2de1f418&language=en-US&page=1").then((function(a){t.movies=a.data.results}))}},j=y,w=(e("034f"),Object(u["a"])(j,n,i,!1,null,null,null)),x=w.exports;e("7b17"),e("ab8b");r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(x)}}).$mount("#app")},"85ec":function(t,a,e){}});
//# sourceMappingURL=app.a4a14111.js.map