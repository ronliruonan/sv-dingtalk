(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{1399:function(e,t,n){"use strict";var r=n("2e99"),a=n.n(r);a.a},"2e99":function(e,t,n){},3781:function(e,t,n){},"38a9":function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"c",function(){return p}),n.d(t,"f",function(){return h}),n.d(t,"e",function(){return g}),n.d(t,"d",function(){return b}),n.d(t,"a",function(){return O});var r=n("5176"),a=n.n(r),i=n("cebc"),o=(n("96cf"),n("3b8d")),c=n("9388"),s=n("a047");function u(e,t){return Object(c["default"])(s["PORTALAPIHOST"],e,t)}function l(){return f.apply(this,arguments)}function f(){return f=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,n=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{method:"post",url:"/api/services/portal/publicationannouncement/pageLoad",data:{page:{pageNo:1,pageSize:4},publishType:3,status:1}},e.abrupt("return",u(t,"getIndexFawen request bad"));case 2:case"end":return e.stop()}},e,this)})),f.apply(this,arguments)}function p(){return d.apply(this,arguments)}function d(){return d=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,n=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{method:"post",url:"/api/services/portal/newscollege/pageLoad",data:{page:{pageNo:1,pageSize:4}}},e.abrupt("return",u(t,"getIndexNews request bad"));case 2:case"end":return e.stop()}},e,this)})),d.apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return m=Object(o["a"])(regeneratorRuntime.mark(function e(t){var n,r=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{method:"post",url:"/api/services/portal/publicationannouncement/getPublicationAnnouncementById",data:{id:-1,type:"view"}},t&&t.isNews&&"1"===t.isNews&&(n.url="/api/services/portal/newscollege/getNewsCollegeById"),n.data=Object(i["a"])({},n.data,t),e.abrupt("return",u(n,"viewArticl request bad"));case 4:case"end":return e.stop()}},e,this)})),m.apply(this,arguments)}function g(){return v.apply(this,arguments)}function v(){return v=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,n,r,i=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"",n=i.length>1&&void 0!==i[1]?i[1]:{pageNo:0,pageSize:10},r=i.length>2&&void 0!==i[2]?i[2]:{method:"post",url:"/api/services/portal/publicationannouncement/getPublicationAnnouncement",data:{publishType:2,status:1}},a()(r.data,{title:t}),a()(r.data,{page:n}),e.abrupt("return",u(r,"getNoticeList request bad"));case 6:case"end":return e.stop()}},e,this)})),v.apply(this,arguments)}function b(){return w.apply(this,arguments)}function w(){return w=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,n,r,i=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"",n=i.length>1&&void 0!==i[1]?i[1]:{pageNo:0,pageSize:10},r=i.length>2&&void 0!==i[2]?i[2]:{method:"post",url:"/api/services/portal/newscollege/getNewsCollege",data:{}},a()(r.data,{title:t}),a()(r.data,{page:n}),e.abrupt("return",u(r,"getNewsList request bad"));case 6:case"end":return e.stop()}},e,this)})),w.apply(this,arguments)}function O(){return y.apply(this,arguments)}function y(){return y=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,n,r,i=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"",n=i.length>1&&void 0!==i[1]?i[1]:{pageNo:0,pageSize:10},r=i.length>2&&void 0!==i[2]?i[2]:{method:"post",url:"/api/services/portal/publicationannouncement/getPublicationAnnouncement",data:{publishType:3,status:1}},a()(r.data,{title:t}),a()(r.data,{page:n}),e.abrupt("return",u(r,"getDispatchList request bad"));case 6:case"end":return e.stop()}},e,this)})),y.apply(this,arguments)}},3933:function(e,t,n){"use strict";var r=n("a047"),a={warn:function(e,t){if(r["HASCONSOLE"]){if(console.warn("[Warning]",e),t)throw t;var n=new Error("WARNING STACK TRACE");console.warn(n.stack)}},info:function(e){r["HASCONSOLE"]&&(console.info("[INFO]:",e),dd.device.notification.toast({icon:"success",text:"[INFO]:"+e}))},error:function(e){r["HASCONSOLE"]&&(console.error("[ERROR]:",e),dd.device.notification.toast({icon:"error",text:"[ERROR]:"+e}))}};t["a"]=a},"3a07":function(e,t,n){"use strict";n.d(t,"a",function(){return g}),n.d(t,"b",function(){return b});var r=n("f499"),a=n.n(r),i=(n("386d"),n("6762"),n("2fdb"),n("96cf"),n("3b8d")),o=n("795b"),c=n.n(o),s=(n("cadf"),n("551c"),n("097d"),n("bc3a")),u=n.n(s),l=n("90f8"),f=n("f1ed"),p=n("a047"),d=n("3933");function h(e,t){return e.url=p["SSOHOST"]+e.url,new c.a(function(n,r){u()(e).then(function(e){n(e)}).catch(function(e){r({errcode:100,errmsg:t,error:e})})})}function m(e){return h(e,"getJWTInfo request bad")}function g(e){return v.apply(this,arguments)}function v(){return v=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n,r,i,o,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n={url:"/jwt/".concat(t),method:"POST"},e.next=3,m(n);case 3:if(r=e.sent,200===r.status){e.next=6;break}return e.abrupt("return",d["a"].error("GetJWTErr:".concat(r)));case 6:if(i=r.data,o=i.id_token,c=i.user_info,o&&c){e.next=9;break}return e.abrupt("return",d["a"].error("GetSysUserErr"));case 9:sessionStorage.setItem("id_token",o),sessionStorage.setItem("user_info",a()(c));case 11:case"end":return e.stop()}},e,this)})),v.apply(this,arguments)}function b(){return new c.a(function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i,o,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,location.search.includes("JtVDUID")&&t(Object(f["e"])(location.search,"JtVDUID")),r=Object(f["e"])(location.search,"corpId"),a={url:"/api/users/auth"},e.next=6,Object(l["b"])(a,r);case 6:i=e.sent,o=i.data,0!==o.errcode&&(d["a"].error("GET DingUserId Err：".concat(o.errmsg)),n(o)),c=o.userid,d["a"].info("".concat(c)),t(c),e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](0),n(e.t0);case 17:case"end":return e.stop()}},e,this,[[0,14]])}));return function(t,n){return e.apply(this,arguments)}}())}},"3ad6":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"article"},[n("h3",{staticClass:"article_title"},[e._v(e._s(e.item.title))]),n("section",{staticClass:"article_addtion"},[n("span",[e._v("栏目: "+e._s(e.item.columnPlateName))]),n("span",{staticClass:"addtion-right"},[e._v("浏览: "+e._s(e.item.broweCount)+"次")])]),n("section",{staticClass:"article_addtion"},[n("span",[e._v("日期: "+e._s(e._f("formateDate")(e.item.releaseTime)))]),n("span",{staticClass:"addtion-right"},[e._v(e._s(e.item.publishingDepartment))])]),n("article",{staticClass:"article_detial",domProps:{innerHTML:e._s(e.item.content)}}),n("section",{staticClass:"article_footer"},[n("p",[n("strong",[e._v("发布范围：")]),n("br"),e._l(e.releaseScopes,function(t,r){return n("i",{key:r,staticClass:"footer-bage"},[e._v(e._s(t.publishingDepartment))])})],2),n("p",{staticStyle:{"margin-top":"1em"}},[n("strong",[e._v("附件：")]),e.item.files&&e.item.files.length?[n("br"),e._l(e.item.files,function(t,r){return n("a",{key:r,staticStyle:{display:"block",padding:"2px 1em"},attrs:{href:t.fileUrl}},[e._v(e._s(t.fileName))])})]:[n("span",[e._v("无")])]],2)])])},a=[],i=n("75fc"),o=n("cebc"),c=n("f499"),s=n.n(c),u=(n("96cf"),n("3b8d")),l=(n("386d"),n("f1ed")),f=n("38a9"),p=n("3933"),d={name:"article-detail",filters:{formateDate:function(e){if(!e)return"";var t=new Date(e);return Object(l["a"])(t,"yyyy-MM-dd")}},data:function(){return{item:{title:"",content:"",releaseTime:"",columnPlateId:"",columnPlateName:""},releaseScopes:[]}},mounted:function(){var e=this.$route.query,t=Object(l["e"])(location.search,"id"),n=Object(l["e"])(location.search,"isNews");this.viewDetail(t||e.id,n||e.isNews),dd.ui.pullToRefresh.disable()},methods:{viewDetail:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var t,n,r,a,c=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:-1,n=c.length>1&&void 0!==c[1]&&c[1],e.prev=2,e.next=5,Object(f["f"])({id:t,isNews:n});case 5:if(r=e.sent,a=r.data,!0===a.success){e.next=9;break}return e.abrupt("return",p["a"].warn(s()(a.error)));case 9:this.item=Object(o["a"])({},this.item,a.result.item),this.releaseScopes=[].concat(Object(i["a"])(this.releaseScopes),Object(i["a"])(a.result.releaseScopes)),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](2),p["a"].error(s()(e.t0));case 16:case"end":return e.stop()}},e,this,[[2,13]])}));function t(){return e.apply(this,arguments)}return t}()}},h=d,m=(n("1399"),n("2877")),g=Object(m["a"])(h,r,a,!1,null,null,null);g.options.__file="Article.vue";t["a"]=g.exports},"4a0f":function(e,t,n){},"4ca7":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"jt-list"},[e._t("default"),e._l(e.items,function(t,a){return r("div",{key:a,staticClass:"list-item",on:{click:function(n){e.jsItemOPen(t)}}},[r("p",{staticClass:"title"},[e._v(e._s(t.title))]),r("div",{staticClass:"other"},[r("p",{staticClass:"other-left"},[r("img",{staticClass:"other-icon",attrs:{src:n("9c97")}}),e._v("\n        "+e._s(e._f("findDict")(t[e.jtOptions.jtFrom],e.dict))+"\n      ")]),r("p",{staticClass:"other-right"},[e._v(e._s(e._f("formateDate")(t[e.jtOptions.jtTime])))])])])}),e.hasMore?r("p",{staticClass:"list-more",on:{click:e.jsmore}},[e._v("查看更多")]):r("p",{staticClass:"list-more"},[e._v("没有更多了")])],2)},a=[],i=n("cebc"),o=n("5176"),c=n.n(o),s=(n("386d"),n("f1ed")),u=n("3933"),l={name:"jt-list",props:{moreOpen:{type:String,default:null},items:Array,itemOpen:Object,dict:{type:Array,default:function(){return null}},hasMore:{type:Boolean,default:!1},jtOptions:{type:Object,default:function(){return{jtFrom:"from",jtTime:"time"}}}},filters:{findDict:function(e,t){return e?t?Object(s["b"])(e,t):e:"null"},formateDate:function(e){if(!e)return"";var t=new Date(e);return Object(s["a"])(t)}},methods:{jsItemOPen:function(e){if(this.itemOpen.newLink){if(e.mobileUrl)return Object(s["d"])(e.mobileUrl);var t=this.itemOpen.newLink,n=t.pathName,r=t.search;r=Object(s["g"])(r,e);var a=Object(s["c"])(n,r);return Object(s["d"])(a)}if(this.itemOpen.curLink){var o=c()({},this.itemOpen.curLink);return o.query=Object(i["a"])({},o.query,{id:e.id}),this.$router.push(o)}u["a"].info("The component 'js-list' has nothing to do")},jsmore:function(){if(this.moreOpen){var e=Object(s["c"])(this.moreOpen);Object(s["d"])(e)}else this.$emit("page-more")}}},f=l,p=(n("ac4f"),n("2877")),d=Object(p["a"])(f,r,a,!1,null,"16a9901c",null);d.options.__file="jt-list.vue";t["a"]=d.exports},"90f8":function(e,t,n){"use strict";n("96cf");var r=n("3b8d"),a=(n("386d"),n("a4bb"),n("f499"),n("795b")),i=n.n(a),o=n("bc3a"),c=n.n(o);function s(e){return new i.a(function(t,n){dd.ready(function(){dd.runtime.permission.requestAuthCode({corpId:e,onSuccess:function(e){t(e)},onFail:function(e){n(e)}})})})}var u=n("3933"),l=n("a047");n("f1ed");function f(e,t){return e.url=l["OPENAPIHOST"]+e.url,e.headers={appKey:l["DINGAPPKEY"]},new i.a(function(n,r){c()(e).then(function(e){n(e)}).catch(function(e){r({errcode:100,errmsg:t,error:e})})})}function p(e,t){return d.apply(this,arguments)}function d(){return d=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:e.next=7;break;case 4:if(n){e.next=7;break}return u["a"].error("必须传入 corpId"),e.abrupt("return");case 7:return e.abrupt("return",new i.a(function(e,r){s(n).then(function(n){var a=n.code;t.url=t.url+"/"+a;var i=t.params||{};i.code=a,t.params=i,f(t,"getUserId request bad").then(function(t){e(t)}).catch(function(e){r(e)})}).catch(function(e){r(e)})}));case 8:case"end":return e.stop()}},e,this)})),d.apply(this,arguments)}function h(e){return f(e,"micApps request bad")}n.d(t,"b",function(){return p}),n.d(t,"a",function(){return h})},9388:function(e,t,n){"use strict";n.r(t),n.d(t,"checkJwt",function(){return p});var r=n("795b"),a=n.n(r),i=n("f499"),o=n.n(i),c=(n("96cf"),n("3b8d")),s=n("bc3a"),u=n.n(s),l=n("3a07"),f=n("3933");function p(){return d.apply(this,arguments)}function d(){return d=Object(c["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=sessionStorage.getItem("id_token"),!t){e.next=4;break}return u.a.defaults.headers.common["Authorization"]="Bearer ".concat(t),e.abrupt("return",!0);case 4:return e.prev=4,e.next=7,Object(l["b"])();case 7:if(n=e.sent,n){e.next=11;break}return u.a.defaults.headers.common["Authorization"]="Bearer unavailable DingUserId",e.abrupt("return",!1);case 11:return e.next=13,Object(l["a"])(n);case 13:return t=sessionStorage.getItem("id_token"),u.a.defaults.headers.common["Authorization"]="Bearer ".concat(t),e.abrupt("return",!!t);case 18:return e.prev=18,e.t0=e["catch"](4),f["a"].error(o()(e.t0)),e.abrupt("return",!1);case 22:case"end":return e.stop()}},e,this,[[4,18]])})),d.apply(this,arguments)}function h(){return h=Object(c["a"])(regeneratorRuntime.mark(function e(t,n,r){var i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:e.next=3;break;case 3:return n.url=t+n.url,e.next=6,p();case 6:if(i=e.sent,i){e.next=9;break}return e.abrupt("return",{errcode:100,errmsg:"无效id_token"});case 9:return e.abrupt("return",new a.a(function(e,t){u()(n).then(function(t){e(t)}).catch(function(e){t({errcode:100,errmsg:r,error:e})})}));case 10:case"end":return e.stop()}},e,this)})),h.apply(this,arguments)}t["default"]=function(e,t,n){return h.apply(this,arguments)}},"9c97":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACZElEQVRYR+2XzW7TQBDH/+MY7khIoS1CiAsS4uOCBFQInoCn4FDeAOzYybjrrMkDgHgRHoAKoSJuRT30UhBSKEUcOEPiQZsmjmM2xiSpmkP35I8Z729nZue/JpzwoBOeH8cC4PvtutR6rwGk1Hcfad04nLbQCQAv5IiEHoOwZnMQyHcALxLFm9M+eDT573cEumJsBLJP/TPr0yAyAD+INAhepZQIOjpuPSva5icXyGfznkCXyyDyAF9BWOmDrndUc9cG4nl8jVzaBeSnVnwub1OY/IuTuuvmfer0TDQuTYMYA4SRGAetmg5Ag2vb8C12hcn3ndR90G4HXePfaMRrqdPbMimxQcwNMJFzwR5S92Ex30XAfE3MDeCF0TYBdyDYO+vKfWb+YY2c367D6b0B4SpEtnXM945qZDhsoa2SAj/gDyC6/S8AZj7/q0dvDYAA7xPVursYgPy2K0nBaPXFOpg7AmYVZTmuXIReyF0CraKf3tI62inbhqYhJYrrJdtwsBP+axt6ISsCBRUbUaLjll/WiCD4JCS1sh4wUQPmxgvZAGwQ6KIVRNAVkleJ4njhrbjSyisaDWtii4TE1hfynzkWNazIOTBbLoChHG+AMFHh2YoEh0Ly0ibHs/pmEfBCTgj0l8TawimQ54niTLrn8c0DHBDoQhU5Fsi3RPHKCM4LeWZfSydsldbFWDPGdrZn5Toy9j0FOI3AEkUgiEan4psd1fxoq+Kn4eaNGmQHggMdt1az09QcvvljeQxCo0ofF4hOFGe2fhDN7Fv8MwpI6Mm0PyOUyLGR8ll8l0uMqoR/0TZ/AERaKz9o5pvBAAAAAElFTkSuQmCC"},a047:function(e,t,n){"use strict";n.r(t),n.d(t,"DINGAPPKEY",function(){return a}),n.d(t,"DINGAGENTID",function(){return i}),n.d(t,"OPENAPIHOST",function(){return c}),n.d(t,"SSOHOST",function(){return s}),n.d(t,"PORTALAPIHOST",function(){return u}),n.d(t,"TASKAPIHOST",function(){return l}),n.d(t,"HASCONSOLE",function(){return f}),n.d(t,"ISDINGTALK",function(){return p});var r=n("7618"),a=(n("cadf"),n("551c"),n("097d"),"dingy2ovuvgbpwrzedqn"),i="214032587",o="",c="".concat(o,"/ding"),s="".concat(o,"/jwt"),u="".concat(o,"/portal"),l="".concat(o,"/task/services/api"),f=void 0!==("undefined"===typeof console?"undefined":Object(r["a"])(console)),p=/dingtalk/.test(navigator.userAgent.toLowerCase())},ac4f:function(e,t,n){"use strict";var r=n("3781"),a=n.n(r);a.a},c3be:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"msg"},[n("p",{staticClass:"msg-content",class:e.className,on:{click:function(t){e.isShowDetail=!e.isShowDetail}}},[e._v(e._s(e.msg))]),n("p",{directives:[{name:"show",rawName:"v-show",value:e.isShowDetail,expression:"isShowDetail"}]},[e._v(e._s(e.msgDetail))])])},a=[],i={name:"slot-msg",props:{msg:String,msgType:String,msgDetail:String},computed:{className:function(){return"error"===this.msgType?"msg-error":"msg-primary"}},data:function(){return{isShowDetail:!1}}},o=i,c=(n("ce48"),n("2877")),s=Object(c["a"])(o,r,a,!1,null,"fc654ca6",null);s.options.__file="slot-msg.vue";t["a"]=s.exports},ce48:function(e,t,n){"use strict";var r=n("4a0f"),a=n.n(r);a.a},ef07:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"b",function(){return p});n("96cf");var r=n("5176"),a=n.n(r),i=n("3b8d"),o=n("a047"),c=n("9388");function s(e,t){return u.apply(this,arguments)}function u(){return u=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){var r,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.checkJwt();case 2:if(r=l(),r){e.next=5;break}throw{errcode:404,errmsg:"没找到UserInfo"};case 5:return i=r.user_code,a()(t.data,{userCode:i}),e.abrupt("return",c.default(o["TASKAPIHOST"],t,n));case 8:case"end":return e.stop()}},e,this)})),u.apply(this,arguments)}function l(){var e=sessionStorage.getItem("user_info");return!!(e&&e.indexOf("user_code")>-1)&&JSON.parse(e)}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{method:"post",url:"/getuntasks",data:{userCode:"nothing"}};return s(e,"getTodoCount request bad")}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{pageNo:0,pageSize:10},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{method:"post",url:"/getuntasks",data:{userCode:"nothing"}};return a()(n.data,{keyword:e}),a()(n.data,{page:t}),s(n,"getDispatchList request bad")}},f1ed:function(e,t,n){"use strict";n.d(t,"e",function(){return s}),n.d(t,"d",function(){return u}),n.d(t,"c",function(){return l}),n.d(t,"b",function(){return f}),n.d(t,"a",function(){return p}),n.d(t,"g",function(){return d}),n.d(t,"h",function(){return h}),n.d(t,"f",function(){return m});n("96cf");var r=n("3b8d"),a=(n("3b2b"),n("7514"),n("a745")),i=n.n(a),o=n("f499"),c=n.n(o);n("386d"),n("a481"),n("28a5"),n("cadf"),n("551c"),n("097d");function s(e,t){for(var n=e.indexOf("?"),r=e.slice(n+1).split("&"),a=0;a<r.length;a++){var i=r[a].split("=");if(i[0].trim()==t)return i[1].trim()}}function u(e,t){var r=n("a047");t&&"string"===typeof t&&e&&-1!==e.indexOf("$CORPID$")&&(e=e.replace(/\$CORPID\$/,t)),r.ISDINGTALK?dd.biz.util.openLink({url:e,onSuccess:function(){"function"===typeof t&&t()},onFail:function(){"function"===typeof t&&t()}}):window.open(e)}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.search,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:location.hash;if(!e)return e;if(e.indexOf("/")<0&&(e="/"+e),t&&t.toLowerCase().indexOf("corpid")<0){var r=s(location.search,"corpId");t="".concat(t,"&corpId=").concat(r)}var a=e+t+n;return location.origin?location.origin+a:"".concat(location.protocol,"//").concat(location.host).concat(a)}function f(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"name";if(!i()(t))return e;var a=t.find(function(t){return t[n]+""===e+""});return a?a[r]:e}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date("2019-01-21"),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd";/(y+)/.test(t)&&(t=t.replace(RegExp.$1,e.getFullYear()+"").substr(4-RegExp.$1.length));var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(var r in n)if(new RegExp("(".concat(r,")")).test(t)){var a=n[r]+"";t=t.replace(RegExp.$1,1===RegExp.$1.length?a:i(a))}function i(e){return("00"+e).substr(e.length)}return t}function d(e,t){if(!e)return e;var n=e.replace(/\{\{(\w+)\}\}/g,function(e,n){return t[n]});return n}function h(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e5;if("function"===typeof e){t&&e();var r=-1;return r=setInterval(function(){e()},n,e,n),r}}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)})),t=n("a047");t.ISDINGTALK&&dd&&(dd.ui.pullToRefresh.disable(),dd.ui.pullToRefresh.enable({onSuccess:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if("function"===typeof e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e(!0);case 4:dd.ui.pullToRefresh.stop();case 5:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),onFail:function(e){alert(c()(e))}}))}}}]);