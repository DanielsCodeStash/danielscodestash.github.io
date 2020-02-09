(function(t){function e(e){for(var a,o,c=e[0],s=e[1],u=e[2],h=0,d=[];h<c.length;h++)o=c[h],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"0984":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("ChartPanel")],1)},i=[],o=(n("99af"),n("bc3a")),c=n.n(o),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"topPanel"}},[n("div",{staticClass:"topPanelSquare",class:{active:t.laterDataExists},on:{click:function(e){return t.showLaterData()}}},[t._v("<")]),n("div",{staticClass:"topPanelSquare",class:{active:t.earlierDataExists},on:{click:function(e){return t.showEarlierData()}}},[t._v(">")]),n("div",{staticClass:"topPanelSquare active"},[t._v(t._s(t.displayDate))])])},u=[],l=(n("d3b7"),n("25f0"),{addMonth:function(t){return 12===t.month?{year:t.year+1,month:1}:{year:t.year,month:t.month+1}},subtractMonth:function(t){return 1===t.month?{year:t.year-1,month:12}:{year:t.year,month:t.month-1}},toJsonFilename:function(t){var e;return e=1===t.month.toString().length?"0".concat(t.month):t.month,"data/".concat(t.year).concat(e,".json")},dataExistsCheck:function(t,e){var n=this.toJsonFilename(t);c.a.get(n).then((function(){e(!0)})).catch((function(){e(!1)}))}}),h={name:"Header",mounted:function(){var t=this;this.$root.$on("changeData",(function(e){t.date=e}))},data:function(){return{date:{year:"",month:""},earlierDataExists:!1,laterDataExists:!1}},methods:{showLaterData:function(){this.date=l.addMonth(this.date),this.$root.$emit("changeData",this.date)},showEarlierData:function(){this.date=l.subtractMonth(this.date),this.$root.$emit("changeData",this.date)}},watch:{date:{handler:function(t){var e=this;l.dataExistsCheck(l.addMonth(t),(function(t){e.laterDataExists=t})),l.dataExistsCheck(l.subtractMonth(t),(function(t){e.earlierDataExists=t}))}}},computed:{displayDate:function(){if(!this.date.year||!this.date.month)return"";var t=["January","February","March","April","May","June","July","August","September","October","November","December"];return"".concat(t[this.date.month-1]," ").concat(this.date.year)}}},d=h,f=(n("da14"),n("2877")),p=Object(f["a"])(d,s,u,!1,null,"cfb90970",null),m=p.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mainPanel"}},[n("div",{attrs:{id:"graphPanel"}})])}],y=window.d3plus,b={name:"ChartPanel",created:function(){window.addEventListener("resize",this.onResize)},destroyed:function(){window.removeEventListener("resize",this.onResize)},data:function(){return{treemap:new y.Treemap}},mounted:function(){var t=this;this.$root.$on("changeData",(function(e){t.changeData(e)})),this.initTreemap(),this.onResize()},methods:{initTreemap:function(){this.treemap.groupBy(["g1","g2"]).select("#graphPanel").sum("value")},changeData:function(t){var e=l.toJsonFilename(t);console.log("filename ".concat(e)),this.treemap.data(e),this.treemap.render()},onResize:function(){var t=window.innerWidth,e=window.innerHeight;document.getElementById("topPanel").setAttribute("style","height: 60 + px"),document.getElementById("mainPanel").setAttribute("style","padding-left: 10px"),this.treemap&&(this.treemap.width(t-20),this.treemap.height(e-60-50),this.treemap.render())}},props:{}},w=b,D=(n("af36"),Object(f["a"])(w,v,g,!1,null,"2ebc85c0",null)),x=D.exports,E={name:"app",components:{Header:m,ChartPanel:x},mounted:function(){var t=this;this.$nextTick((function(){console.log("Finished rendering the complete view");var e={year:(new Date).getFullYear(),month:(new Date).getMonth()};t.initialDateExploration(e,1,(function(e){console.log("".concat(JSON.stringify(e)," has data")),t.$root.$emit("changeData",e)}))}))},methods:{initialDateExploration:function(t,e,n){var a=this,r=l.toJsonFilename(t);console.log("Checking if ".concat(JSON.stringify(t)," has data ").concat(e," - ").concat(r)),e>100||c.a.get(r).then((function(e){n(t)})).catch((function(){a.initialDateExploration(l.subtractMonth(t),e+1,n)}))}}},P=E,_=(n("034f"),Object(f["a"])(P,r,i,!1,null,null,null)),O=_.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(O)}}).$mount("#app")},"85ec":function(t,e,n){},af36:function(t,e,n){"use strict";var a=n("0984"),r=n.n(a);r.a},da14:function(t,e,n){"use strict";var a=n("f056"),r=n.n(a);r.a},f056:function(t,e,n){}});
//# sourceMappingURL=app.2b143001.js.map