(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"28d0":function(t,e,n){},"38a9":function(t,e,n){"use strict";n.d(e,"b",function(){return d}),n.d(e,"c",function(){return m}),n.d(e,"e",function(){return v}),n.d(e,"d",function(){return w}),n.d(e,"a",function(){return O});var r=n("5176"),i=n.n(r),a=n("cebc"),o=(n("96cf"),n("3b8d")),c=n("795b"),u=n.n(c),s=n("bc3a"),l=n.n(s),p=n("a047");function f(t,e){return t.url=p["f"]+t.url,new u.a(function(n,r){l()(t).then(function(t){n(t)}).catch(function(t){r({errcode:100,errmsg:e,error:t})})})}function d(){return h.apply(this,arguments)}function h(){return h=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,n=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:{method:"post",url:"/api/services/portal/publicationannouncement/pageLoad",data:{page:{pageNo:1,pageSize:2},publishType:"2",status:"1"}},t.abrupt("return",f(e,"getIndexFawen request bad"));case 2:case"end":return t.stop()}},t,this)})),h.apply(this,arguments)}function m(){return g.apply(this,arguments)}function g(){return g=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,n=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:{method:"post",url:"/api/services/portal/publicationannouncement/pageLoad",data:{page:{pageNo:1,pageSize:2},publishType:"3",status:"1"}},t.abrupt("return",f(e,"getIndexGonggao request bad"));case 2:case"end":return t.stop()}},t,this)})),g.apply(this,arguments)}function v(t){return b.apply(this,arguments)}function b(){return b=Object(o["a"])(regeneratorRuntime.mark(function t(e){var n,r=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{method:"post",url:"/api/services/portal/publicationannouncement/getPublicationAnnouncementById",data:{id:-1}},n.data=Object(a["a"])({},n.data,e),t.abrupt("return",f(n,"viewArticl request bad"));case 3:case"end":return t.stop()}},t,this)})),b.apply(this,arguments)}function w(){return y.apply(this,arguments)}function y(){return y=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,n,r,a=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"",n=a.length>1&&void 0!==a[1]?a[1]:{pageNo:0,pageSize:10},r=a.length>2&&void 0!==a[2]?a[2]:{method:"post",url:"/api/services/portal/publicationannouncement/getPublicationAnnouncement",data:{publishType:3,status:1}},i()(r.data,{title:e}),i()(r.data,{page:n}),t.abrupt("return",f(r,"getNoticeList request bad"));case 6:case"end":return t.stop()}},t,this)})),y.apply(this,arguments)}function O(){return A.apply(this,arguments)}function A(){return A=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,n,r,a=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"",n=a.length>1&&void 0!==a[1]?a[1]:{pageNo:0,pageSize:10},r=a.length>2&&void 0!==a[2]?a[2]:{method:"post",url:"/api/services/portal/publicationannouncement/getPublicationAnnouncement",data:{publishType:2,status:1}},i()(r.data,{title:e}),i()(r.data,{page:n}),t.abrupt("return",f(r,"getDispatchList request bad"));case 6:case"end":return t.stop()}},t,this)})),A.apply(this,arguments)}l.a.defaults.headers.common["Content-Type"]="application/json",l.a.defaults.headers.common["Accept"]="application/json",l.a.defaults.headers.common["Access-Control-Allow-Headers"]="Content-Type, X-XSRF-TOKEN"},3933:function(t,e,n){"use strict";var r=n("a047"),i={warn:function(t,e){if(r["d"]){if(console.warn("[Warning]",t),e)throw e;var n=new Error("WARNING STACK TRACE");console.warn(n.stack)}},info:function(t){r["d"]&&console.info("[INFO]:",t)},error:function(t){r["d"]&&(console.error("[ERROR]:",t),dd.device.notification.toast({icon:"error",text:"[ERROR]:"+t}))}};e["a"]=i},"3ad6":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"article-detail"},[n("h3",{staticStyle:{"margin-top":"10px","text-align":"center"}},[t._v(t._s(t.item.title))]),n("p",{staticStyle:{"font-size":"14px",color:"#999"}},[n("span",[t._v("来源: "+t._s(t._f("findDict")(t.item.columnPlateId,t.dict)))]),n("span",{staticStyle:{float:"right"}},[t._v("发布于: "+t._s(t._f("formateDate")(t.item.releaseTime)))])]),n("pre",[t._v(t._s(t.item.content))])])},i=[],a=n("cebc"),o=n("f499"),c=n.n(o),u=(n("96cf"),n("3b8d")),s=(n("386d"),n("a745")),l=n.n(s),p=(n("cadf"),n("551c"),n("097d"),n("f1ed")),f=n("38a9"),d=n("3933"),h={name:"article-detail",filters:{findDict:function(t,e){return t?e?Object(p["b"])(t,e):t:""},formateDate:function(t){if(!t)return"";var e=new Date(t);return Object(p["a"])(e,"yyyy-MM-dd hh:mm")}},data:function(){return{item:{title:"",content:"",releaseTime:"",columnPlateId:""},dict:[]}},created:function(){var t=localStorage.getItem("columnplates"),e=JSON.parse(t);this.dict=l()(e)?e:[]},mounted:function(){var t=this.$route.query,e=Object(p["e"])(location.search,"id");this.viewDetail(e||t.id)},methods:{viewDetail:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e,n,r,i=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:-1,t.prev=1,t.next=4,Object(f["e"])({id:e});case 4:if(n=t.sent,r=n.data,!0===r.success){t.next=8;break}return t.abrupt("return",d["a"].warn(c()(r.error)));case 8:this.item=Object(a["a"])({},this.item,r.result.item),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),d["a"].error(c()(t.t0));case 14:case"end":return t.stop()}},t,this,[[1,11]])}));function e(){return t.apply(this,arguments)}return e}()}},m=h,g=(n("fe42"),n("2877")),v=Object(g["a"])(m,r,i,!1,null,"ac59f982",null);v.options.__file="Article.vue";e["a"]=v.exports},"4ca7":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"jt-list"},[t._l(t.items,function(e,i){return r("div",{key:i,staticClass:"list-item",on:{click:function(n){t.jsItemOPen(e)}}},[r("p",{staticClass:"title"},[t._v(t._s(e.title))]),e.content?r("p",{staticClass:"content"},[t._v(t._s(e.content))]):t._e(),r("div",{staticClass:"other"},[r("p",{staticClass:"other-left"},[r("img",{staticClass:"other-icon",attrs:{src:n("9c97")}}),t._v("\n        "+t._s(t._f("findDict")(e[t.jtOptions.jtFrom],t.dict))+"\n      ")]),r("p",{staticClass:"other-right"},[t._v(t._s(t._f("formateDate")(e[t.jtOptions.jtTime])))])])])}),t.hasMore?r("p",{staticClass:"list-more",on:{click:t.jsmore}},[t._v("查看更多")]):r("p",{staticClass:"list-more"},[t._v("没有更多了")])],2)},i=[],a=(n("386d"),n("f1ed")),o=n("3933"),c={name:"jt-list",props:{moreOpen:{type:String,default:null},items:Array,itemOpen:Object,dict:{type:Array,default:function(){return null}},hasMore:{type:Boolean,default:!1},jtOptions:{type:Object,default:function(){return{jtFrom:"from",jtTime:"time"}}}},filters:{findDict:function(t,e){return t?e?Object(a["b"])(t,e):t:"null"},formateDate:function(t){if(!t)return"";var e=new Date(t);return Object(a["a"])(e)}},methods:{jsItemOPen:function(t){if(this.itemOpen.newLink){if(t.mobileUrl)return Object(a["d"])(t.mobileUrl);var e=this.itemOpen.newLink,n=e.pathName,r=e.search;r=Object(a["f"])(r,t);var i=Object(a["c"])(n,r);return Object(a["d"])(i)}if(this.itemOpen.curLink)return this.$router.push({name:this.itemOpen.curLink.pathName,query:{id:t.id,ip:"aya"}});o["a"].info("has nothing to do")},jsmore:function(){if(this.moreOpen){var t=Object(a["c"])(this.moreOpen);Object(a["d"])(t)}else this.$emit("page-more")}}},u=c,s=(n("8612"),n("2877")),l=Object(s["a"])(u,r,i,!1,null,"54688bab",null);l.options.__file="jt-list.vue";e["a"]=l.exports},8612:function(t,e,n){"use strict";var r=n("ba1e"),i=n.n(r);i.a},"9c97":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACZElEQVRYR+2XzW7TQBDH/+MY7khIoS1CiAsS4uOCBFQInoCn4FDeAOzYybjrrMkDgHgRHoAKoSJuRT30UhBSKEUcOEPiQZsmjmM2xiSpmkP35I8Z729nZue/JpzwoBOeH8cC4PvtutR6rwGk1Hcfad04nLbQCQAv5IiEHoOwZnMQyHcALxLFm9M+eDT573cEumJsBLJP/TPr0yAyAD+INAhepZQIOjpuPSva5icXyGfznkCXyyDyAF9BWOmDrndUc9cG4nl8jVzaBeSnVnwub1OY/IuTuuvmfer0TDQuTYMYA4SRGAetmg5Ag2vb8C12hcn3ndR90G4HXePfaMRrqdPbMimxQcwNMJFzwR5S92Ex30XAfE3MDeCF0TYBdyDYO+vKfWb+YY2c367D6b0B4SpEtnXM945qZDhsoa2SAj/gDyC6/S8AZj7/q0dvDYAA7xPVursYgPy2K0nBaPXFOpg7AmYVZTmuXIReyF0CraKf3tI62inbhqYhJYrrJdtwsBP+axt6ISsCBRUbUaLjll/WiCD4JCS1sh4wUQPmxgvZAGwQ6KIVRNAVkleJ4njhrbjSyisaDWtii4TE1hfynzkWNazIOTBbLoChHG+AMFHh2YoEh0Ly0ibHs/pmEfBCTgj0l8TawimQ54niTLrn8c0DHBDoQhU5Fsi3RPHKCM4LeWZfSydsldbFWDPGdrZn5Toy9j0FOI3AEkUgiEan4psd1fxoq+Kn4eaNGmQHggMdt1az09QcvvljeQxCo0ofF4hOFGe2fhDN7Fv8MwpI6Mm0PyOUyLGR8ll8l0uMqoR/0TZ/AERaKz9o5pvBAAAAAElFTkSuQmCC"},a047:function(t,e,n){"use strict";n.d(e,"e",function(){return i}),n.d(e,"f",function(){return a}),n.d(e,"g",function(){return o}),n.d(e,"d",function(){return c}),n.d(e,"a",function(){return u}),n.d(e,"c",function(){return s}),n.d(e,"b",function(){return l});var r=n("7618"),i="https://www.ayaron.work/ding",a="https://www.ayaron.work/portal",o="https://www.ayaron.work/task/services/api",c=void 0!==("undefined"===typeof console?"undefined":Object(r["a"])(console)),u="xiangxiaoqiang001",s="dingxgyezybqss11gqi6",l="213833119"},ba1e:function(t,e,n){},ef07:function(t,e,n){"use strict";n.d(e,"a",function(){return f}),n.d(e,"b",function(){return h});var r=n("5176"),i=n.n(r),a=(n("96cf"),n("3b8d")),o=n("795b"),c=n.n(o),u=n("bc3a"),s=n.n(u),l=n("a047");function p(t,e){return t.url=l["g"]+t.url,new c.a(function(n,r){s()(t).then(function(t){n(t)}).catch(function(t){r({errcode:100,errmsg:e,error:t})})})}function f(){return d.apply(this,arguments)}function d(){return d=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,n=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:{method:"post",url:"/getuntasks",data:{userId:"jim"}},t.abrupt("return",p(e,"getTodoCount request bad"));case 2:case"end":return t.stop()}},t,this)})),d.apply(this,arguments)}function h(){return m.apply(this,arguments)}function m(){return m=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,n,r,a=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"",n=a.length>1&&void 0!==a[1]?a[1]:{pageNo:0,pageSize:10},r=a.length>2&&void 0!==a[2]?a[2]:{method:"post",url:"/getuntasks",data:{userId:"jim"}},i()(r.data,{keyword:e}),i()(r.data,{page:n}),t.abrupt("return",p(r,"getDispatchList request bad"));case 6:case"end":return t.stop()}},t,this)})),m.apply(this,arguments)}s.a.defaults.headers.common["Content-Type"]="application/json",s.a.defaults.headers.common["Accept"]="application/json",s.a.defaults.headers.common["Access-Control-Allow-Headers"]="Content-Type, X-XSRF-TOKEN"},f1ed:function(t,e,n){"use strict";n.d(e,"e",function(){return o}),n.d(e,"d",function(){return c}),n.d(e,"c",function(){return u}),n.d(e,"b",function(){return s}),n.d(e,"a",function(){return l}),n.d(e,"f",function(){return p}),n.d(e,"g",function(){return f});n("3b2b"),n("7514");var r=n("a745"),i=n.n(r),a=(n("f499"),n("386d"),n("a481"),n("28a5"),/dingtalk/.test(navigator.userAgent.toLowerCase()));function o(t,e){for(var n=t.indexOf("?"),r=t.slice(n+1).split("&"),i=0;i<r.length;i++){var a=r[i].split("=");if(a[0].trim()==e)return a[1].trim()}}function c(t,e){e&&"string"===typeof e&&t&&-1!==t.indexOf("$CORPID$")&&(t=t.replace(/\$CORPID\$/,e)),a?dd.biz.util.openLink({url:t,onSuccess:function(){"function"===typeof e&&e()},onFail:function(){"function"===typeof e&&e()}}):window.open(t)}function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.search,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:location.hash;if(!t)return t;t.indexOf("/")<0&&(t="/"+t);var r=t+e+n;return location.origin?location.origin+r:"".concat(location.protocol,"//").concat(location.host).concat(r)}function s(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"name";if(!i()(e))return t;var a=e.find(function(e){return e[n]+""===t+""});return a?a[r]:t}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date("2019-01-21"),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd";/(y+)/.test(e)&&(e=e.replace(RegExp.$1,t.getFullYear()+"").substr(4-RegExp.$1.length));var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var r in n)if(new RegExp("(".concat(r,")")).test(e)){var i=n[r]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?i:a(i))}function a(t){return("00"+t).substr(t.length)}return e}function p(t,e){if(!t)return t;var n=t.replace(/\{\{(\w+)\}\}/g,function(t,n){return e[n]});return n}function f(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e5;"function"===typeof t&&(e&&t(),setTimeout(function(){t(),setTimeout(function(){f(t,!0,n)},n,t,n)},n,t,n))}},fe42:function(t,e,n){"use strict";var r=n("28d0"),i=n.n(r);i.a}}]);