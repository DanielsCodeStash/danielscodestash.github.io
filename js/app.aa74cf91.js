(function(t){function e(e){for(var a,i,c=e[0],s=e[1],u=e[2],h=0,d=[];h<c.length;h++)i=c[h],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"1fd3":function(t,e,n){},2063:function(t,e,n){"use strict";n("9443")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("keep-alive",[n(t.mainComponent,t._b({tag:"component"},"component",t.currentProperties,!1))],1)],1)},r=[],i=(n("99af"),n("bc3a")),c=n.n(i),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"topPanel"}},[t.inCategoryViewMode?[n("div",{staticClass:"headerButton active",attrs:{id:"backButton"},on:{click:function(e){return t.backToChartPanel()}}},[t._v("<")])]:[n("div",{staticClass:"headerButton",class:{active:t.earlierDataExists},on:{click:function(e){return t.showEarlierData()}}},[t._v("<")]),n("div",{staticClass:"headerButton",class:{active:t.laterDataExists},on:{click:function(e){return t.showLaterData()}}},[t._v(">")])],n("div",{staticClass:"topPanelSquare psudoActive"},[t._v(t._s(t.displayDate))])],2)},u=[],l=(n("a15b"),n("d81d"),n("d3b7"),n("25f0"),{addMonth:function(t){return 12===t.month?{year:t.year+1,month:1}:{year:t.year,month:t.month+1}},subtractMonth:function(t){return 1===t.month?{year:t.year-1,month:12}:{year:t.year,month:t.month-1}},is_touch_device:function(){if("ontouchstart"in window||window.TouchEvent)return!0;if(window.DocumentTouch&&document instanceof DocumentTouch)return!0;var t=["","-webkit-","-moz-","-o-","-ms-"],e=t.map((function(t){return"(".concat(t,"touch-enabled)")}));return window.matchMedia(e.join(",")).matches},toJsonFilename:function(t){var e;return e=1===t.month.toString().length?"0".concat(t.month):t.month,"data/".concat(t.year).concat(e,".json")},formatMoney:function(t){return"".concat(t.toLocaleString("sv-SE")," kr")},dataExistsCheck:function(t,e){var n=this.toJsonFilename(t);c.a.get(n).then((function(){e(!0)})).catch((function(){e(!1)}))}}),h={name:"Header",mounted:function(){var t=this;this.$root.$on("changeData",(function(e){t.date=e})),this.$root.$on("categorySelected",(function(e){t.category=e.g2,t.inCategoryViewMode=!0}))},data:function(){return{inCategoryViewMode:!1,category:"",date:{year:"",month:""},earlierDataExists:!1,laterDataExists:!1}},methods:{showLaterData:function(){this.date=l.addMonth(this.date),this.$root.$emit("changeData",this.date)},showEarlierData:function(){this.date=l.subtractMonth(this.date),this.$root.$emit("changeData",this.date)},backToChartPanel:function(){this.inCategoryViewMode=!1,this.$root.$emit("returnToChart")}},watch:{date:{handler:function(t){var e=this;l.dataExistsCheck(l.addMonth(t),(function(t){e.laterDataExists=t})),l.dataExistsCheck(l.subtractMonth(t),(function(t){e.earlierDataExists=t}))}}},computed:{displayDate:function(){if(!this.date.year||!this.date.month)return"";var t=["January","February","March","April","May","June","July","August","September","October","November","December"];return this.inCategoryViewMode?"".concat(this.category):(console.log("".concat(t[this.date.month-1]," ").concat(this.date.year)),"".concat(t[this.date.month-1]," ").concat(this.date.year))}}},d=h,f=(n("2063"),n("2877")),m=Object(f["a"])(d,s,u,!1,null,"5739e5ec",null),p=m.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mainPanel"}},[n("div",{attrs:{id:"graphPanel"}})])}],v=window.$,b=window.d3plus,C={name:"ChartPanel",created:function(){window.addEventListener("resize",this.onResize)},destroyed:function(){window.removeEventListener("resize",this.onResize)},data:function(){return{treemap:new b.Treemap}},mounted:function(){var t=this;this.$root.$on("changeData",(function(e){t.changeData(e)})),this.initTreemap(),this.onResize()},activated:function(){this.treemap&&l.is_touch_device()&&(console.log("rerendering"),this.treemap.render())},methods:{initTreemap:function(){var t=this;this.treemap.groupBy(["g1","g2"]).loadingMessage(!1).select("#graphPanel").tooltipConfig({body:function(t,e){var n=Array.isArray(t.g2)?t.g1:t.g2,a="<b>".concat(n,"</b><br/>");return a+=l.formatMoney(t.value),a},title:function(t){return t.id}}).on("click",(function(e){v(".d3plus-tooltip").remove(),t.$root.$emit("categorySelected",e)})).sum("value")},changeData:function(t){var e=l.toJsonFilename(t);console.log("filename ".concat(e)),this.treemap.data(e),this.treemap.render()},onResize:function(){var t=window.innerWidth,e=window.innerHeight;this.treemap&&(this.treemap.width(t-20),this.treemap.height(e-60-50),this.treemap.render())}},props:{}},w=C,D=(n("9c19"),Object(f["a"])(w,g,y,!1,null,"eca38fac",null)),_=D.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main"}},[n("div",{attrs:{id:"categoryChart"}})])}],M=(n("4160"),n("a9e3"),n("aff5"),n("e6e1"),n("159b"),{initDatastore:function(t){this.initDate=t,console.log("initiation datastore at ".concat(t.year,"-").concat(t.month));var e=24;this.data={};var n=t,a=0;do{this.fetchMonthData(n),n=l.subtractMonth(n),a+=1}while(a<=e)},fetchMonthData:function(t){var e=this,n=l.toJsonFilename(t);c.a.get(n).then((function(n){return e.handleResponse(n,e,t)})).catch((function(t){}))},handleResponse:function(t,e,n){e.data["".concat(n.year).concat(n.month)]=t.data},getHistoricalDataForSubcategory:function(t){var e=24,n=0,a=[],o=this.initDate;do{var r=this.getCategoryData(o,t);a.push(r),o=l.subtractMonth(o),n+=1}while(n<=e);return a},getCategoryData:function(t,e){var n=this.data["".concat(t.year).concat(t.month)],a={d:t,v:""};return n?(n.forEach((function(n){n.g2===e&&(a={d:t,v:n.value})})),a):a}}),$=window.Highcharts,P={name:"Category",props:{selectedCategory:Object},activated:function(){var t=M.getHistoricalDataForSubcategory(this.selectedCategory.g2),e=[],n=Number.MAX_SAFE_INTEGER,a=Number.MIN_SAFE_INTEGER;t.reverse().forEach((function(t){var o=t.v;""===o&&(o=null),e.push({x:Date.UTC(t.d.year,t.d.month-1,1),y:o}),o&&(o<n&&(n=o),o>a&&(a=o))})),a*=1.1,n*=.9,this.chart=$.chart("categoryChart",{chart:{type:"line",backgroundColor:"#919191",marginTop:25},tooltip:{xDateFormat:"%A, %b %e, %Y",formatter:function(){return"".concat($.dateFormat("%b %Y",this.x)," <br/> ").concat(l.formatMoney(this.y),"</b>")}},title:{text:null},xAxis:{type:"datetime",tickInterval:2592e6,labels:{style:{color:"#303030"}},lineColor:"#303030",tickColor:"#303030",maxPadding:.03},yAxis:{title:!1,gridLineColor:"#7a7a7a",labels:{style:{color:"#303030"}},max:a,min:n},series:[{name:this.selectedCategory.g2,data:e,borderColor:"#303030",showInLegend:!1,tooltip:{valueDecimals:0}}]})}},k=P,O=(n("bdb2"),Object(f["a"])(k,x,E,!1,null,"1f7a00f5",null)),S=O.exports,T={name:"app",components:{Header:p,CategoryPanel:S,ChartPanel:_},mounted:function(){var t=this;this.$nextTick((function(){console.log("Finished rendering the complete view");var e={year:(new Date).getFullYear(),month:(new Date).getMonth()+1};t.initialDateExploration(e,1,(function(e){M.initDatastore(e),t.$root.$emit("changeData",e)}))})),this.$root.$on("categorySelected",(function(e){t.selectedCategory=e,t.toggleCategoryPanel()})),this.$root.$on("returnToChart",(function(){t.toggleCategoryPanel()}))},data:function(){return{mainComponent:"ChartPanel",selectedCategory:""}},computed:{currentProperties:function(){return"CategoryPanel"===this.mainComponent?{selectedCategory:this.selectedCategory}:{}}},methods:{toggleCategoryPanel:function(){"ChartPanel"===this.mainComponent?this.mainComponent="CategoryPanel":this.mainComponent="ChartPanel"},initialDateExploration:function(t,e,n){var a=this,o=l.toJsonFilename(t);console.log("Checking if ".concat(JSON.stringify(t)," has data ").concat(e," - ").concat(o)),e>100||c.a.get(o).then((function(e){n(t)})).catch((function(){a.initialDateExploration(l.subtractMonth(t),e+1,n)}))}}},j=T,F=(n("034f"),Object(f["a"])(j,o,r,!1,null,null,null)),A=F.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(A)}}).$mount("#app")},"85ec":function(t,e,n){},9443:function(t,e,n){},"9c19":function(t,e,n){"use strict";n("cf1a")},bdb2:function(t,e,n){"use strict";n("1fd3")},cf1a:function(t,e,n){}});
//# sourceMappingURL=app.aa74cf91.js.map