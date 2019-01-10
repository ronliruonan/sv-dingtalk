webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parseCorpId;
/* unused harmony export parseMetaData */
/* harmony export (immutable) */ __webpack_exports__["b"] = parseMicroApps;
/* harmony export (immutable) */ __webpack_exports__["c"] = openLink;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__metaHandler__ = __webpack_require__(47);
/**
 * Created by xiangwenwen on 2017/2/9.
 */



var isDingtalk = /DingTalk/.test(navigator.userAgent);

function parseCorpId(url, param) {
    var searchIndex = url.indexOf('?');
    var searchParams = url.slice(searchIndex + 1).split('&');
    for (var i = 0; i < searchParams.length; i++) {
        var items = searchParams[i].split('=');
        if (items[0].trim() == param) {
            return items[1].trim();
        }
    }
}

function parseMetaData(response, corpId) {
    var meta = {};
    meta.admin = response.admin;
    meta.bannerMetas = __WEBPACK_IMPORTED_MODULE_0__metaHandler__["a" /* default */].homeBannerModelsHandler(response.homeBannerModels, corpId);
    meta.itemMetas = __WEBPACK_IMPORTED_MODULE_0__metaHandler__["a" /* default */].homeHeaderModelHandler(response.homeHeaderModel, corpId);
    meta.userlistMetas = __WEBPACK_IMPORTED_MODULE_0__metaHandler__["a" /* default */].homeGroupsHandler(response.homeGroups, corpId);
    meta.allapplistMetas = __WEBPACK_IMPORTED_MODULE_0__metaHandler__["a" /* default */].microAppsHandler(response.microApps, corpId);
    meta.h5Config = response.h5Config;
    meta.userInfo = response.userInfo;
    return meta;
}

function parseMicroApps(microApps, corpId) {
    return __WEBPACK_IMPORTED_MODULE_0__metaHandler__["a" /* default */].microAppsHandler(microApps, corpId);
}

function openLink(url, corpId) {
    if (corpId && typeof corpId === 'string') {
        if (url && url.indexOf('$CORPID$') !== -1) {
            url = url.replace(/\$CORPID\$/, corpId);
        }
    }
    if (isDingtalk) {
        dd.biz.util.openLink({
            url: url,
            onSuccess: function () {
                if (typeof corpId === 'function') {
                    corpId();
                }
            },
            onFail: function () {
                if (typeof corpId === 'function') {
                    corpId();
                }
            }
        });
    } else {
        window.open(url);
    }
}

/* unused harmony default export */ var _unused_webpack_default_export = ({
    parseCorpId: parseCorpId,
    parseMetaData: parseMetaData,
    parseMicroApps: parseMicroApps
});

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const OPENAPIHOST = 'http://192.168.1.104:3000';
/* harmony export (immutable) */ __webpack_exports__["a"] = OPENAPIHOST;

const HASCONSOLE = typeof console !== undefined;
/* harmony export (immutable) */ __webpack_exports__["b"] = HASCONSOLE;

const ISBROWSER = typeof window !== 'undefined' && typeof window === 'object';
/* unused harmony export ISBROWSER */

const UA = ISBROWSER && window.navigator.userAgent.toLowerCase();
/* unused harmony export UA */


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__env__ = __webpack_require__(12);


const logger = {
  warn: function (msg, e) {
    if (__WEBPACK_IMPORTED_MODULE_0__env__["b" /* HASCONSOLE */]) {
      console.warn('[DING WEB SDK Warning]:', msg);
      if (e) {
        throw e;
      } else {
        const warning = new Error('WARNING STACK TRACE');
        console.warn(warning.stack);
      }
    }
  },
  info: function (msg) {
    if (__WEBPACK_IMPORTED_MODULE_0__env__["b" /* HASCONSOLE */]) {
      console.info('[DING WEB SDK INFO]:', msg);
    }
  },
  error: function (msg) {
    if (__WEBPACK_IMPORTED_MODULE_0__env__["b" /* HASCONSOLE */]) {
      console.error('[DING WEB SDK ERROR]:', msg);
    }
  }
};

if (false) {}

/* harmony default export */ __webpack_exports__["a"] = (logger);

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(60)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(37),
  /* template */
  __webpack_require__(83),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pages_home_index_vue__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pages_home_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pages_home_index_vue__);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

const routes = [{
    path: '/',
    name: 'home',
    component: __WEBPACK_IMPORTED_MODULE_2_pages_home_index_vue___default.a
}];

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
    routes: routes
}));

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(52)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(35),
  /* template */
  __webpack_require__(75),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app'
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_util_js__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var lock = true;

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'complexApp',
    props: ['item'],
    data: function () {
        return {};
    },
    methods: {
        homeGroupsOpenLink: function (item) {
            if (lock) {
                lock = false;
                var url = item.url;
                const redirect = item.redirect;
                const tableName = item.tableName;
                const title = item.title;
                if (redirect) {
                    url = 'https://h5.dingtalk.com//industry_versatility/notData.html?u=' + encodeURIComponent(url) + '&tablename=' + encodeURIComponent(tableName) + '&title=' + encodeURIComponent(title);
                }
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_util_js__["c" /* openLink */])(url, function () {
                    lock = true;
                });
            }
        }
    }
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__singleApp_vue__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__singleApp_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__singleApp_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__complexApp_vue__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__complexApp_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__complexApp_vue__);
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "grid",
  props: ["meta", "corpId", "microApps", "homeGroups"],
  components: {
    singleApp: __WEBPACK_IMPORTED_MODULE_0__singleApp_vue___default.a,
    complexApp: __WEBPACK_IMPORTED_MODULE_1__complexApp_vue___default.a
  },
  data: function () {
    return {};
  }
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_util_js__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//


var lock = true;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "singleApp",
  props: ["item"],
  data: function () {
    return {};
  },
  mounted: function () {},
  methods: {
    microAppsOpenLink: function (item, e) {
      if (lock) {
        lock = false;
        const agentId = item.agentId;
        const url = item.url;
        const corpId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_util_js__["a" /* parseCorpId */])(location.href, "corpId");

        if (agentId === 0) {
          // 企业自己的微应用
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_util_js__["c" /* openLink */])(url, function () {
            lock = true;
          });
        } else {
          lock = true;

          //   // isv
          //   window.location.href =
          //     "dingtalk://dingtalkclient/action/switchtab?index=2&name=work&scene=1&corpid=" +
          //     corpId +
          //     "&agentid=" +
          //     agentId;
          console.log(item);

          dd.biz.microApp.openApp({
            agentId: agentId,
            appId: "dingxgyezybqss11gqi6",
            corpId: corpId,
            onSuccess: function (result) {},
            onFail: function (err) {
              alert("打开应用失败：" + JSON.stringify(err));
            }
          });
        }
      }
    }
  }
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_util_js__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//


var lock = true;
/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'admin',
    props: ['admin', 'corpId', 'userInfo'],
    data: function () {
        return {
            wh: '',
            whImage: ''
        };
    },
    mounted: function () {
        this.$watch('userInfo', function () {
            this.updateName();
        });
    },
    methods: {
        openAdmin: function () {
            if (lock) {
                lock = false;
                const adminUrl = "https://h5.dingtalk.com/industry_versatility/get.html?dd_progress=false&corpId=" + this.corpId;
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_util_js__["c" /* openLink */])(adminUrl, function () {
                    lock = true;
                });
            }
        },
        updateName: function () {
            const dateTime = new Date().getHours();
            const isAdmin = this.userInfo.isAdmin;
            const name = this.userInfo.name;
            if (name) {
                if (dateTime >= 5 && dateTime <= 12) {
                    this.wh = isAdmin ? '早上好，管理员，' + name : '早上好，' + name;
                    this.whImage = 'https://gw.alicdn.com/tps/TB1ubtjOFXXXXbzXpXXXXXXXXXX-36-36.jpg';
                } else if (dateTime > 12 && dateTime <= 18) {
                    this.wh = isAdmin ? '下午好，管理员，' + name : '下午好，' + name;
                    this.whImage = 'https://gw.alicdn.com/tps/TB1ubtjOFXXXXbzXpXXXXXXXXXX-36-36.jpg';
                } else {
                    this.wh = isAdmin ? '晚上好，管理员，' + name : '晚上好，' + name;
                    this.whImage = 'https://gw.alicdn.com/tps/TB15FNwOFXXXXbqXXXXXXXXXXXX-36-36.jpg';
                }
            }
        }
    }
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_util_js__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//


var lock = true;
/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'appmanager',
    props: ['admin', 'corpId'],
    data: function () {
        return {};
    },
    mounted: function () {},
    methods: {
        addManager: function () {
            if (lock) {
                lock = false;
                const url = 'https://h5.dingtalk.com/appcenter/index.html?showmenu=false&dd_share=false&dd_progress=false&corpId=' + this.corpId;
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_util_js__["c" /* openLink */])(url, function () {
                    lock = true;
                });
            }
        }
    }
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_grid_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_grid_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_grid_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'applist',
    props: ['corpId', 'allapplistMetas'],
    components: {
        grid: __WEBPACK_IMPORTED_MODULE_0__components_grid_vue___default.a
    },
    data: function () {
        return {};
    },
    beforeMount: function () {},
    mounted: function () {}
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'banner',
    props: ['corpId', 'bannerMetas'],
    data: function () {
        return {};
    },
    mounted: function () {},
    beforeDestroy: function () {},
    destroyed: function () {},
    methods: {
        bannerLink: function (item) {
            const url = item.linkUrl;
        }
    }
});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_util_js__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var lock = true;
/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'item',
    props: ['corpId', 'itemMetas'],
    data: function () {
        return {};
    },
    methods: {
        appLink: function (url) {
            // alert(url);
            if (lock) {
                lock = false;
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_util_js__["c" /* openLink */])(url, function () {
                    lock = true;
                });
            }
        }
    }
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_grid_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_grid_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_grid_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'userlist',
    components: {
        grid: __WEBPACK_IMPORTED_MODULE_0__components_grid_vue___default.a
    },
    props: ['userlistMetas', 'corpId'],
    data: function () {
        return {};
    },
    mounted: function () {}
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mock_meta__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mock_meta___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mock_meta__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_env_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_ding_web_js__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_index_banner_vue__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_index_banner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_index_banner_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_index_applist_vue__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_index_applist_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_index_applist_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_index_item_vue__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_index_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_index_item_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_index_admin_vue__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_index_admin_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_index_admin_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_index_userlist_vue__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_index_userlist_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_index_userlist_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_index_appManager_vue__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_index_appManager_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_index_appManager_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_axios__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_axios__);
//
//
//
//
//
//
//
//
//
//
//
















/* harmony default export */ __webpack_exports__["default"] = ({
  name: "home",
  components: {
    banner: __WEBPACK_IMPORTED_MODULE_4__components_index_banner_vue___default.a,
    applist: __WEBPACK_IMPORTED_MODULE_5__components_index_applist_vue___default.a,
    item: __WEBPACK_IMPORTED_MODULE_6__components_index_item_vue___default.a,
    admin: __WEBPACK_IMPORTED_MODULE_7__components_index_admin_vue___default.a,
    userlist: __WEBPACK_IMPORTED_MODULE_8__components_index_userlist_vue___default.a,
    appmanager: __WEBPACK_IMPORTED_MODULE_9__components_index_appManager_vue___default.a
  },
  data: function () {
    return {
      openAppManager: true,
      corpId: "",
      userId: "xiangxiaoqiang001",
      meta: {
        admin: false,
        bannerMetas: {
          homeBannerModels: [],
          isHomeBannerModels: false
        },
        itemMetas: {
          homeHeaderModel: {},
          act: "这里是什么？",
          // isAdminOrBoos: false,
          isAdminOrBoos: true,
          attendanceUrl: "",
          myTasksUrl: "",
          checkinsUrl: "",
          notReadReportUrl: "",
          // isHomeHeaderModel: false
          isHomeHeaderModel: true
        },
        userlistMetas: {
          homeGroups: [],
          renderLine: 0,
          isHomeGroups: false
        },
        allapplistMetas: {
          microApps: [],
          isMicroApps: false,
          corpId: ""
        },
        h5Config: {},
        userInfo: {
          name: ""
        }
      }
    };
  },
  mounted: function () {
    const self = this;
    const originalUrl = location.href;
    this.corpId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_util__["a" /* parseCorpId */])(originalUrl, "corpId");

    //监听userId的变化，如果有变化，立即获取用户信息
    this.$watch("userId", function () {
      self.getUserInfo();
      self.getMicroApps();
    });
    __WEBPACK_IMPORTED_MODULE_0__mock_meta___default.a.microApps.length = 0;

    if (self.userId) {
      self.getUserInfo();
      self.getMicroApps();
    }

    this.meta.bannerMetas.homeBannerModels = __WEBPACK_IMPORTED_MODULE_0__mock_meta___default.a.homeBannerModels;
    this.meta.bannerMetas.isHomeHeaderModel = true;
    this.meta.itemMetas.homeHeaderModel = __WEBPACK_IMPORTED_MODULE_0__mock_meta___default.a.homeHeaderModel;

    const signRequest = {
      url: __WEBPACK_IMPORTED_MODULE_2__lib_env_js__["a" /* OPENAPIHOST */] + "/api/auth/jsapi-oauth",
      params: {
        href: location.href
      }
    };

    // js-api 权限校验
    __WEBPACK_IMPORTED_MODULE_3__lib_ding_web_js__["a" /* default */].jsApiOAuth(signRequest).then(function (response) {
      const data = response.data;
      if (data.errcode === 0) {
        // console.log('config110 : ', data);

        // 获取开放的全部应用
        //   self.getMicroApps();

        // const meta = parseMetaData(metaData);
        // self.meta = meta;
        // self.openAppManager = true;

        // 走免登的流程
        self.getUserId();
      } else {
        alert("获取jsapi oauth 异常：" + data.errmsg);
      }
    }).catch(function (error) {
      console.warn("JS API 权限校验失败 error : " + JSON.stringify(error));
    });
  },
  methods: {
    getUserId: function () {
      // 获取userid
      const self = this;
      const getUserIdRequest = {
        url: __WEBPACK_IMPORTED_MODULE_2__lib_env_js__["a" /* OPENAPIHOST */] + "/api/users/auth"
      };
      __WEBPACK_IMPORTED_MODULE_3__lib_ding_web_js__["a" /* default */].getUserId(getUserIdRequest, this.corpId).then(function (response) {
        const data = response.data;
        self.userId = data.userid;
      }).catch(function (error) {
        alert("获取userid error ：" + JSON.stringify(error));
      });
    },
    getUserInfo: function () {
      // 根据userid获取用户详细信息
      const self = this;
      const getUserInfoRequest = {
        url: __WEBPACK_IMPORTED_MODULE_2__lib_env_js__["a" /* OPENAPIHOST */] + "/api/users/" + self.userId,
        params: {
          userid: this.userId
        }
      };
      __WEBPACK_IMPORTED_MODULE_3__lib_ding_web_js__["a" /* default */].getUserInfo(getUserInfoRequest).then(function (response) {
        const data = response.data;
        self.meta.userInfo = data;
      }).catch(function (error) {
        console.warn("获取用户信息 error：" + JSON.stringify(error));
      });
    },
    getMicroApps: function () {
      // 获取Apps数 据
      const self = this;
      const microAppsRequest = {
        url: __WEBPACK_IMPORTED_MODULE_2__lib_env_js__["a" /* OPENAPIHOST */] + "/api/microapps/user/" + self.userId
      };
      __WEBPACK_IMPORTED_MODULE_3__lib_ding_web_js__["a" /* default */].getMicroApps(microAppsRequest).then(function (response) {
        const data = response.data;
        if (data.errcode === 0) {
          self.meta.allapplistMetas = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_util__["b" /* parseMicroApps */])(data.appList);

          // console.log(self.meta.allapplistMetas);
        }
      }).catch(function (error) {
        alert("获取microApps error：" + JSON.stringify(error));
      });
    }
  }
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export jsApiOAuth */
/* unused harmony export getUserId */
/* unused harmony export getUserInfo */
/* unused harmony export getMicroApps */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logger__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__(48);
/**
 * Created by xiangwenwen on 2017/2/28.
 */





__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.headers.common['appkey'] = 'dingxgyezybqss11gqi6';
// axios.interceptors.request.use(function (config) {
//     // alert('统一标配');
//     // msgLog(config.url);
//     return config;
// }, function (error) {
//     alert('统一标配报错 【tongyi001】');

//     return Promise.reject(error);
// });

function request(Config, msg) {
    if (false) {
        if (!isObject(Config)) {
            logger.error('必须传入 axios 配置对象');
            return;
        }
    }
    return new Promise(function (resolve, reject) {

        __WEBPACK_IMPORTED_MODULE_0_axios___default()(Config).then(function (response) {
            resolve(response);
        }).catch(function (error) {
            reject({
                errcode: 100,
                errmsg: msg,
                error: error
            });
        });
    });
}

/**
 * [jsApiOAuth js-api 权限校验]
 * @param  {[type]} Config    [axios 配置对象]
 * @param  {[type]} jsApiList [需要权限校验的api列表]
 * @return {[type]}           [Promise]
 */
function jsApiOAuth(Config, jsApiList) {
    if (false) {
        if (!isObject(Config)) {
            logger.error('必须传入 axios 配置对象');
            return;
        }
    }
    let params = Config.params || {};
    const href = params.href;
    dd.error(function (error) {
        __WEBPACK_IMPORTED_MODULE_1__logger__["a" /* default */].error('[1551]dd js api OAuth error' + JSON.stringify(error));
    });
    if (false) {
        if (!href) {
            logger.warn('参数 href 不能为空格');
        }
        if (href !== location.href) {
            logger.warn('传入的 href 参数 与 location.href 不相等');
        }
    }
    params.href = encodeURIComponent(href);
    Config.params = params;
    return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_0_axios___default()(Config).then(function (response) {
            const data = response.data;
            if (false) {
                const checks = ['agentId', 'corpId', 'timeStamp', 'nonceStr', 'signature'];
                const responseKey = Object.keys(data);
                checks.map(function (v) {
                    const checkResult = responseKey.filter(function (k) {
                        return v === k;
                    });
                    if (checkResult.length === 0) {
                        logger.warn('jsApiOAuth Response ' + v + ' 不能返回空');
                    }
                });
            }
            if (data.errcode === 0) {
                const config = {
                    // agentId: data.agentId || '',
                    agentId: '213833119',
                    // corpId: data.corpId || '',
                    corpId: 'ding3b11247e3909339d35c2f4657eb6378f',
                    timeStamp: data.timeStamp || '',
                    nonceStr: data.nonceStr || '',
                    signature: data.signature || '',
                    jsApiList: jsApiList || []
                };
                dd.config(config);
            }
            resolve(response);
        }).catch(function (error) {
            reject({
                errcode: 100,
                errmsg: 'js api auth request bad',
                error: error
            });
            // alert('sign request error' + JSON.stringify(error));
        });
    });
}

/**
 * [getUserId 获取用户id]
 * @param  {[type]} Config [axios 配置对象]
 * @param  {[type]} corpId [企业corpId]
 * @return {[type]}        [Promise]
 */
function getUserId(Config, corpId) {
    if (false) {
        if (!Config || typeof Config === 'string') {
            logger.error('必须传入 axios 配置对象');
            return;
        }
        if (!corpId) {
            logger.error('必须传入 corpId');
            return;
        }
    }

    return new Promise(function (resolve, reject) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__shared__["a" /* authCode */])(corpId).then(function (result) {
            const code = result.code;
            Config.url = Config.url + '/' + code;

            let params = Config.params || {};
            params.code = code;
            // console.log('授权code: ',code);
            // console.log('请求Config；',Config);

            Config.params = params;
            request(Config, 'getUserId request bad').then(function (response) {
                resolve(response);
            }).catch(function (error) {
                reject(error);
            });
        }).catch(function (error) {
            reject(error);
        });
    });
}

/**
 * [getUserInfoRequest 获取用户详细信息]
 * @param  {[type]} Config [axios 配置对象]
 * @return {[type]}        [Promise]
 */
function getUserInfo(Config) {
    return request(Config, 'getUserInfo request bad');
}

/**
 * [getMicroApps 获取全部应用]
 * @param  {[type]} Config [axios 配置对象]
 * @return {[type]}        [Promise]
 */
function getMicroApps(Config) {
    return request(Config, 'microApps request bad');
}

/* harmony default export */ __webpack_exports__["a"] = ({
    jsApiOAuth,
    getUserId,
    getUserInfo,
    getMicroApps
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by xiangwenwen on 2016/12/8.
 */

function homeHeaderModelHandler(meta, corpId) {
    var _meta = {};
    var isDeptManager = meta.isDeptManager;
    var isAdmin = meta.isAdmin;
    var boss = meta.boss;
    var dateTime = new Date();
    if (isDeptManager) {
        _meta.act = '出勤人数';
    } else {
        _meta.act = '出勤天数';
    }
    _meta.homeHeaderModel = meta;
    _meta.isAdminOrBoos = isAdmin || boss;
    _meta.isHomeHeaderModel = true;

    _meta.attendanceUrl = 'https://attend.dingtalk.com/attend/index.html?dd_web_timestamp=' + new Date().getTime() + '&showmenu=false&dd_share=false&corpId=ding68942498a5cd785e35c2f4657eb6378f&swfrom=work_homepage#stat';
    _meta.myTasksUrl = 'https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm?corpid=ding68942498a5cd785e35c2f4657eb6378f&showmenu=false&dd_share=false&swfrom=work_homepage#upcoming';
    _meta.checkinsUrl = 'https://attendance.dingtalk.com/attendance/mobile/mapAttendance.html?corpid=ding68942498a5cd785e35c2f4657eb6378f&showmenu=false&dd_progress=false&dd_share=false&swfrom=work_homepage&to_page=footprint';
    _meta.notReadReportUrl = 'https://landray.dingtalkapps.com/alid/app/report/received_new.html?corpid=ding68942498a5cd785e35c2f4657eb6378f&ismy=2&dd_share=false&readType=1&swfrom=work_homepage';
    return _meta;
}

function homeBannerModelsHandler(meta, corpId) {
    var _meta = {};
    _meta.homeBannerModels = meta;
    _meta.isHomeBannerModels = !!meta.length;
    return _meta;
}

function homeGroupsHandler(meta, corpId) {
    var _meta = {};
    _meta.renderLine = meta.length;
    _meta.isHomeGroups = _meta.renderLine > 0;
    _meta.homeGroups = meta.map(function (groups) {
        groups.homeGroupDetail = groups.homeGroupDetail.map(function (item) {
            if (item.appType === 3) {
                var formatNumber = {};
                if (typeof item.value === "undefined" || typeof item.value === "NaN") {
                    formatNumber = formatNum(0);
                } else {
                    formatNumber = formatNum(parseFloat(item.value, 10));
                }
                item.formatNumber = formatNumber;
                return item;
            }
            return item;
        });
        return groups;
    });
    return _meta;
}

function formatNum(val) {
    // 金额格式化
    var rt = null;

    if (val < 999) {
        rt = { val: val.toString().substr(0, 3), unit: "" };
        substrNum(rt);
    } else if (val < 9999999) {
        val = Math.round(val / 1000) / 10;
        rt = { val: val, unit: "万" };
        substrNum(rt);
    } else if (val < 99999999) {
        val = Math.round(val / 1000000) / 10;
        rt = { val: val, unit: "千万" };
        substrNum(rt);
    } else if (val < 99999999999) {
        val = Math.round(val / 10000000) / 10;
        rt = { val: val, unit: "亿" };
        substrNum(rt);
    } else {
        val = Math.round(val / 10000000) / 10;
        rt = { val: val, unit: "亿" };
    }
    return rt;
}

function substrNum(rt) {
    rt.val = rt.val.toString().substr(0, 3);
    if (rt.val.charAt(rt.val.length - 1) == ".") {
        //判断末尾是否 "."
        rt.val = rt.val.substr(0, 2);
    }
}

function microAppsHandler(meta, corpId) {
    var _meta = {};
    _meta.isMicroApps = !!meta.length;
    _meta.microApps = meta;
    return _meta;
}

/* harmony default export */ __webpack_exports__["a"] = ({
    homeHeaderModelHandler: homeHeaderModelHandler,
    homeBannerModelsHandler: homeBannerModelsHandler,
    homeGroupsHandler: homeGroupsHandler,
    microAppsHandler: microAppsHandler
});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = authCode;
/* unused harmony export isObject */
/* unused harmony export msgLog */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger__ = __webpack_require__(13);


function authCode(corpId) {
  return new Promise(function (resolve, reject) {
    dd.ready(function () {
      dd.runtime.permission.requestAuthCode({
        corpId: corpId,
        onSuccess: function (result) {
          resolve(result);
        },
        onFail: function (err) {
          reject(err);
        }
      });
    });
  });
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function msgLog(opt) {
  wpo.log('DING WEB INTERFACE SDK API' + opt.url, 1);
}

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(16);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.





new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 50 */
/***/ (function(module, exports) {

/**
 * Created by xiangwenwen on 2016/12/2.
 */

var meta = {
  "homeGroups": [{
    "id": 51,
    "groupName": "经营数据",
    "homeGroupDetail": [{
      "id": 156,
      "url": "https://landray.dingtalkapps.com/alid/app/report/createReport_new.html?showmenu=false&dd_share=false&swfrom=work_homepage&id=158b457eea778023c59114c439eb80e9&corpid=ding68942498a5cd785e35c2f4657eb6378f",
      "cloudDataSource": 1,
      "redirect": true,
      "nativeid": 1603,
      "appType": 3,
      "title": "支付宝收入",
      "tableId": 4751,
      "tableName": "营业日报"
    }, {
      "id": 537,
      "url": "https://landray.dingtalkapps.com/alid/app/report/createReport_new.html?showmenu=false&dd_share=false&swfrom=work_homepage&id=158b457eea778023c59114c439eb80e9&corpid=ding68942498a5cd785e35c2f4657eb6378f",
      "cloudDataSource": 1,
      "redirect": true,
      "nativeid": 1603,
      "appType": 3,
      "title": "日总营业额",
      "tableId": 4751,
      "tableName": "营业日报"
    }],
    "departmentIds": [],
    "staffIds": []
  }, {
    "id": 50,
    "groupName": "门店运营",
    "homeGroupDetail": [{
      "id": 151,
      "url": "https://landray.dingtalkapps.com/alid/app/report/createReport_new.html?showmenu=false&dd_share=false&swfrom=work_homepage&id=158b457eea778023c59114c439eb80e9&corpid=ding68942498a5cd785e35c2f4657eb6378f",
      "imgPath": "https://landray.dingtalkapps.com/alid/app/report/images/ico-png/25.png",
      "nativeid": 2,
      "appType": 1,
      "title": "营业日报"
    }, {
      "id": 152,
      "url": "https://landray.dingtalkapps.com/alid/app/report/createReport_new.html?showmenu=false&dd_share=false&swfrom=work_homepage&id=158b457ee4f983d9d450fa0400780d8a&corpid=ding68942498a5cd785e35c2f4657eb6378f",
      "imgPath": "https://landray.dingtalkapps.com/alid/app/report/images/ico-png/24.png",
      "nativeid": 2,
      "appType": 1,
      "title": "门店水电煤月报"
    }, {
      "id": 153,
      "url": "https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm?dd_share=false&showmenu=true&swfrom=work_homepage&corpid=ding68942498a5cd785e35c2f4657eb6378f&formUuid=FORM-FAB-DISCOUNT&processCode=PROC-FF6YHERSO2-2Z6G82CENE9S21Z7ZSR02-3SB5O4WI-F#/custom",
      "imgPath": "https://gw.alicdn.com/tps/TB1q5U5OXXXXXXPXVXXXXXXXXXX-102-102.png",
      "nativeid": -4,
      "appType": 2,
      "title": "打折免单申请"
    }],
    "departmentIds": [],
    "staffIds": []
  }, {
    "id": 49,
    "groupName": "巡店督导",
    "homeGroupDetail": [{
      "id": 149,
      "url": "https://attendance.dingtalk.com/attendance/mobile/mapAttendance.html?showmenu=false&dd_progress=false&dd_share=false&corpid=ding68942498a5cd785e35c2f4657eb6378f",
      "isNative": false,
      "imgPath": "http://static.dingtalk.com/media/lALOcrvqOszIzMg_200_200.png",
      "nativeid": -8,
      "appType": 0,
      "title": "签到"
    }, {
      "id": 150,
      "url": "https://landray.dingtalkapps.com/alid/app/report/createReport_new.html?showmenu=false&dd_share=false&swfrom=work_homepage&id=158b457ee8275fd852d13d34398a1872&corpid=ding68942498a5cd785e35c2f4657eb6378f",
      "imgPath": "https://landray.dingtalkapps.com/alid/app/report/images/ico-png/0.png",
      "nativeid": 2,
      "appType": 1,
      "title": "巡检日报"
    }],
    "departmentIds": [],
    "staffIds": []
  }, {
    "id": 48,
    "groupName": "企划营销",
    "homeGroupDetail": [{
      "id": 147,
      "url": "https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm?dd_share=false&showmenu=true&swfrom=work_homepage&corpid=ding68942498a5cd785e35c2f4657eb6378f&formUuid=FORM-FAB-MARKETING&processCode=PROC-FF6YHERSO2-2Z6G82CENE9S21Z7ZSR02-LTB5O4WI-H#/custom",
      "imgPath": "https://gw.alicdn.com/tps/TB12R3NOXXXXXcwaXXXXXXXXXXX-102-102.png",
      "nativeid": -4,
      "appType": 2,
      "title": "营销活动申请"
    }, {
      "id": 148,
      "url": "https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm?dd_share=false&showmenu=true&swfrom=work_homepage&corpid=ding68942498a5cd785e35c2f4657eb6378f&formUuid=FORM-FAB-PROMOTIONAL-MATERIAL&processCode=PROC-FF6YHERSO2-2Z6G82CENE9S21Z7ZSR02-ZTB5O4WI-I#/custom",
      "imgPath": "https://gw.alicdn.com/tps/TB1Pb4eOpXXXXcGXpXXXXXXXXXX-102-102.png",
      "nativeid": -4,
      "appType": 2,
      "title": "宣传物料申请"
    }],
    "departmentIds": [],
    "staffIds": []
  }, {
    "id": 47,
    "groupName": "人力资源",
    "homeGroupDetail": [{
      "id": 141,
      "url": "https://attend.dingtalk.com/attend/index.html?corpId=ding68942498a5cd785e35c2f4657eb6378f&showmenu=false&dd_share=false&dd_progress=false",
      "isNative": false,
      "imgPath": "http://static.dingtalk.com/media/lALOcsYpu8zIzMg_200_200.png",
      "nativeid": 158,
      "appType": 0,
      "title": "考勤打卡"
    }, {
      "id": 142,
      "url": "https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm?dd_share=false&showmenu=true&swfrom=work_homepage&corpid=ding68942498a5cd785e35c2f4657eb6378f&formUuid=FORM-leave-NJJZLP58HL3HBTO2NJ5X1-AV05OQ8I-2&processCode=PROC-FF6YHERSO2-2Z6G82CENE9S21Z7ZSR02-3PB5O4WI-8#/custom",
      "imgPath": "https://gw.alicdn.com/tps/TB1hcBoOpXXXXbPXXXXXXXXXXXX-102-102.png",
      "nativeid": -4,
      "appType": 2,
      "title": "请假"
    }, {
      "id": 143,
      "url": "https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm?dd_share=false&showmenu=true&swfrom=work_homepage&corpid=ding68942498a5cd785e35c2f4657eb6378f&formUuid=FORM-FAB-HIRE&processCode=PROC-FF6YHERSO2-2Z6G82CENE9S21Z7ZSR02-4VB5O4WI-K#/custom",
      "imgPath": "https://gw.alicdn.com/tps/TB1GCw.OXXXXXbOXFXXXXXXXXXX-102-102.png",
      "nativeid": -4,
      "appType": 2,
      "title": "入职申请单"
    }, {
      "id": 144,
      "url": "https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm?dd_share=false&showmenu=true&swfrom=work_homepage&corpid=ding68942498a5cd785e35c2f4657eb6378f&formUuid=FORM-FAB-QUIT&processCode=PROC-FF6YHERSO2-2Z6G82CENE9S21Z7ZSR02-IVB5O4WI-L#/custom",
      "imgPath": "https://gw.alicdn.com/tps/TB1ESwQOXXXXXbaaXXXXXXXXXXX-102-102.png",
      "nativeid": -4,
      "appType": 2,
      "title": "离职申请单"
    }, {
      "id": 145,
      "url": "https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm?dd_share=false&showmenu=true&swfrom=work_homepage&corpid=ding68942498a5cd785e35c2f4657eb6378f&formUuid=FORM-FAB-SALARY&processCode=PROC-FF6YHERSO2-2Z6G82CENE9S21Z7ZSR02-XVB5O4WI-M#/custom",
      "imgPath": "https://gw.alicdn.com/tps/TB1.vAMOXXXXXXmaFXXXXXXXXXX-102-102.png",
      "nativeid": -4,
      "appType": 2,
      "title": "薪资调整申请"
    }, {
      "id": 146,
      "url": "https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm?dd_share=false&showmenu=true&swfrom=work_homepage&corpid=ding68942498a5cd785e35c2f4657eb6378f&formUuid=FORM-FAB-REASSIGNMENT&processCode=PROC-FF6YHERSO2-2Z6G82CENE9S21Z7ZSR02-EUB5O4WI-J#/custom",
      "imgPath": "https://gw.alicdn.com/tps/TB1UEoTOXXXXXbCaXXXXXXXXXXX-102-102.png",
      "nativeid": -4,
      "appType": 2,
      "title": "调岗申请单"
    }],
    "departmentIds": [],
    "staffIds": []
  }],
  "h5Config": {
    "guide": [{
      "img": {
        "url": "https://gw.alicdn.com/tps/TB1jJBsOpXXXXbxXpXXXXXXXXXX-1125-636.png"
      },
      "itemId": "营业日报"
    }, {
      "img": {
        "url": "https://gw.alicdn.com/tps/TB1e2ZYOXXXXXXhaFXXXXXXXXXX-1125-636.png"
      },
      "itemId": "营销活动申请"
    }, {
      "img": {
        "url": "https://gw.alicdn.com/tps/TB1oR7VOXXXXXbOapXXXXXXXXXX-1125-636.png"
      },
      "itemId": "巡检日报"
    }]
  },
  "microApps": [{
    "url": "https://attendance.dingtalk.com/attendance/mobile/mapAttendance.html?showmenu=false&dd_progress=false&dd_share=false&corpid=ding68942498a5cd785e35c2f4657eb6378f",
    "appType": 0,
    "agentId": "53005351",
    "name": "签到",
    "icon": "http://static.dingtalk.com/media/lALOcrvqOszIzMg_200_200.png",
    "appId": -8
  }, {
    "url": "https://attend.dingtalk.com/attend/index.html?corpId=ding68942498a5cd785e35c2f4657eb6378f&showmenu=false&dd_share=false&dd_progress=false",
    "appType": 0,
    "agentId": "53005353",
    "name": "考勤打卡",
    "icon": "http://static.dingtalk.com/media/lALOcsYpu8zIzMg_200_200.png",
    "appId": 158
  }, {
    "url": "https://landray.dingtalkapps.com/alid/app/report/home.html?showmenu=false&dd_share=false&corpid=ding68942498a5cd785e35c2f4657eb6378f",
    "appType": 0,
    "agentId": "53005356",
    "name": "日志",
    "icon": "http://static.dingtalk.com/media/lALOcsZGkszIzMg_200_200.png",
    "appId": 2
  }, {
    "url": "https://app.dingtalk.com/blackboard/noticeList.html?showmenu=false&dd_progress=false&dd_share=false&corpid=ding68942498a5cd785e35c2f4657eb6378f",
    "appType": 0,
    "agentId": "53005358",
    "name": "公告",
    "icon": "http://static.dingtalk.com/media/lALOcsZHFszIzMg_200_200.png",
    "appId": -2
  }, {
    "url": "https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm?showmenu=false&dd_progress=false&dd_share=false&corpid=ding68942498a5cd785e35c2f4657eb6378f",
    "appType": 0,
    "agentId": "53005359",
    "name": "审批",
    "icon": "http://static.dingtalk.com/media/lALOcsZGQszIzMg_200_200.png",
    "appId": -4
  }, {
    "url": "http://mail.dingtalk.com/auth/login",
    "appType": 0,
    "agentId": "53005361",
    "name": "钉邮",
    "icon": "http://static.dingtalk.com/media/lALOcsah9MzIzMg_200_200.png",
    "appId": -5
  }, {
    "url": "https://space.dingtalk.com/auth/login",
    "appType": 0,
    "agentId": "53005362",
    "name": "钉盘",
    "icon": "http://static.dingtalk.com/media/lALOcsahiMzIzMg_200_200.png",
    "appId": -3
  }, {
    "url": "https://clouddata.dingtalkapps.com/alid/mobile/index.html?corpId=ding68942498a5cd785e35c2f4657eb6378f&dd_progress=false",
    "appType": 0,
    "agentId": "53005363",
    "name": "智能报表",
    "icon": "http://static.dingtalk.com/media/lALOcsxZiszIzMg_200_200.png",
    "appId": 1603
  }, {
    "url": "http://businessConference.dingtalk.com/auth/login",
    "appType": 0,
    "agentId": "53005365",
    "name": "电话会议",
    "icon": "http://static.dingtalk.com/media/lALOcsajBszIzMg_200_200.png",
    "appId": -9
  }, {
    "url": "",
    "appType": 0,
    "agentId": "53005366",
    "name": "视频会议",
    "icon": "http://static.dingtalk.com/media/lALOcsaifMzIzMg_200_200.png",
    "appId": 1288
  }],
  "admin": true,
  "homeHeaderModel": {
    "deptManager": true,
    "notReadReport": 0,
    "subAdmin": false,
    "turnoverTotal": 0,
    "checkins": 0,
    "attendance": 0,
    "myTasks": 0,
    "boss": false,
    "admin": true,
    "isAdmin": true,
    "isDeptManager": true,
    "isSubAdmin": false,
    "isBoss": false
  },
  "homeBannerModels": [{
    "linkUrl": "https://alimarket.m.taobao.com/markets/dingtalk/cydd?lwfrom=20161118115327653",
    "imgUrl": "https://gw.alicdn.com/tps/TB1o8BqOpXXXXanXVXXXXXXXXXX-750-300.png"
  }],
  "userInfo": {}
};

module.exports = meta;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 52 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 53 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 54 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 55 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 58 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 59 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 60 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 61 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(59)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(82),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(51)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(38),
  /* template */
  __webpack_require__(74),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(57)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(39),
  /* template */
  __webpack_require__(80),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(56)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(40),
  /* template */
  __webpack_require__(79),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(54)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(41),
  /* template */
  __webpack_require__(77),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(55)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(42),
  /* template */
  __webpack_require__(78),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(53)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(43),
  /* template */
  __webpack_require__(76),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(61)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(44),
  /* template */
  __webpack_require__(84),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(58)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(81),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cell-box",
    on: {
      "click": function($event) {
        _vm.microAppsOpenLink(_vm.item, $event)
      }
    }
  }, [_c('div', {
    staticClass: "cell-image-container"
  }, [_c('img', {
    staticClass: "cell-image",
    attrs: {
      "src": _vm.item.appIcon
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "cell-text"
  }, [_vm._v(_vm._s(_vm.item.name))])])
},staticRenderFns: []}

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app-container"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.itemMetas.isHomeHeaderModel) ? _c('div', {
    staticClass: "index-item"
  }, [_c('div', {
    staticClass: "index-item-center"
  }, [(_vm.itemMetas.isAdminOrBoos) ? _c('div', {
    staticClass: "index-item-con"
  }, [_c('div', {
    staticClass: "item",
    on: {
      "click": function($event) {
        _vm.appLink(_vm.itemMetas.myTasksUrl, $event)
      }
    }
  }, [_c('div', {
    staticClass: "item-right-line"
  }, [_c('div', {
    staticClass: "item-number"
  }, [_vm._v(_vm._s(_vm.itemMetas.homeHeaderModel.myTasks))]), _vm._v(" "), _c('div', {
    staticClass: "item-text"
  }, [_vm._v("待我审批")])])]), _vm._v(" "), _c('div', {
    staticClass: "item",
    on: {
      "click": function($event) {
        _vm.appLink(_vm.itemMetas.myTasksUrl, $event)
      }
    }
  }, [_c('div', {
    staticClass: "item-right-line"
  }, [_c('div', {
    staticClass: "item-number"
  }, [_vm._v(_vm._s(_vm.itemMetas.homeHeaderModel.attendance))]), _vm._v(" "), _c('div', {
    staticClass: "item-text"
  }, [_vm._v(_vm._s(_vm.itemMetas.act))])])]), _vm._v(" "), _c('div', {
    staticClass: "item",
    on: {
      "click": function($event) {
        _vm.appLink(_vm.itemMetas.myTasksUrl, $event)
      }
    }
  }, [_c('div', {
    staticClass: "item-right-line"
  }, [_c('div', {
    staticClass: "item-number"
  }, [_vm._v(_vm._s(_vm.itemMetas.homeHeaderModel.checkins))]), _vm._v(" "), _c('div', {
    staticClass: "item-text"
  }, [_vm._v("签到人数")])])]), _vm._v(" "), _c('div', {
    staticClass: "item",
    on: {
      "click": function($event) {
        _vm.appLink(_vm.itemMetas.myTasksUrl, $event)
      }
    }
  }, [_c('div', {
    staticClass: "item-right-line"
  }, [_c('div', {
    staticClass: "item-number"
  }, [_vm._v(_vm._s(_vm.itemMetas.homeHeaderModel.notReadReport))]), _vm._v(" "), _c('div', {
    staticClass: "item-text"
  }, [_vm._v("未读日志")])])])]) : _c('div', {
    staticClass: "index-item-con"
  }, [_c('div', {
    staticClass: "item",
    on: {
      "click": function($event) {
        _vm.appLink(_vm.itemMetas.myTasksUrl, $event)
      }
    }
  }, [_c('div', {
    staticClass: "item-right-line"
  }, [_c('text', {
    staticClass: "item-number"
  }, [_vm._v(_vm._s(_vm.itemMetas.homeHeaderModel.myTasks))]), _vm._v(" "), _c('text', {
    staticClass: "item-text"
  }, [_vm._v("待我审批")])])]), _vm._v(" "), _c('div', {
    staticClass: "item",
    on: {
      "click": function($event) {
        _vm.appLink(_vm.itemMetas.attendanceUrl, $event)
      }
    }
  }, [_c('div', {
    staticClass: "item-right-line"
  }, [_c('text', {
    staticClass: "item-number"
  }, [_vm._v(_vm._s(_vm.itemMetas.homeHeaderModel.attendance))]), _vm._v(" "), _c('text', {
    staticClass: "item-text"
  }, [_vm._v(_vm._s(_vm.itemMetas.act))])])])])])]) : _vm._e()
},staticRenderFns: []}

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.allapplistMetas.isMicroApps) ? _c('div', {
    staticClass: "index-all-applist"
  }, [_vm._m(0), _vm._v(" "), _c('grid', {
    attrs: {
      "meta": _vm.allapplistMetas.microApps,
      "corp-id": _vm.corpId,
      "micro-apps": true
    }
  })], 1) : _vm._e()
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "applist-title"
  }, [_c('h1', {
    staticClass: "applist-text"
  }, [_vm._v("全部应用")])])
}]}

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "banner-slider"
  }, _vm._l((_vm.bannerMetas.homeBannerModels), function(item) {
    return _c('div', {
      key: item.imgUrl,
      staticClass: "banner"
    }, [_c('img', {
      staticClass: "banner-image",
      attrs: {
        "src": item.imgUrl
      },
      on: {
        "click": function($event) {
          _vm.bannerLink(item, $event)
        }
      }
    })])
  }), 0)
},staticRenderFns: []}

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "add-manager"
  }, [_c('div', {
    staticClass: "add-manager-container",
    on: {
      "click": _vm.addManager
    }
  }, [_c('img', {
    staticClass: "add-manager-add-icon",
    attrs: {
      "src": "https://gw.alicdn.com/tps/TB1O.peOFXXXXbvXpXXXXXXXXXX-42-42.png"
    }
  }), _vm._v(" "), (_vm.admin) ? _c('div', {
    staticClass: "add-manager-text"
  }, [_vm._v("添加/管理")]) : _c('div', {
    staticClass: "add-manager-text"
  }, [_vm._v("查看更多")]), _vm._v(" "), _c('img', {
    staticClass: "add-manager-more-icon",
    attrs: {
      "src": "https://gw.alicdn.com/tps/TB12pIZOpXXXXaxXVXXXXXXXXXX-16-28.jpg"
    }
  })])])
},staticRenderFns: []}

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index-admin"
  }, [_c('div', {
    staticClass: "admin"
  }, [_c('img', {
    staticClass: "admin-image",
    attrs: {
      "src": _vm.whImage
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "admin-hello"
  }, [_vm._v("\n            " + _vm._s(_vm.wh) + "\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "admin-edit",
    on: {
      "click": _vm.openAdmin
    }
  }, [_vm._v("编辑分组")])])])
},staticRenderFns: []}

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app-container"
  }, [_c('banner', {
    attrs: {
      "banner-metas": _vm.meta.bannerMetas,
      "corp-id": _vm.corpId
    }
  }), _vm._v(" "), _c('item', {
    attrs: {
      "item-metas": _vm.meta.itemMetas,
      "corp-id": _vm.corpId
    }
  }), _vm._v(" "), _c('admin', {
    attrs: {
      "admin": _vm.meta.admin,
      "user-info": _vm.meta.userInfo,
      "corp-id": _vm.corpId
    }
  }), _vm._v(" "), _c('userlist', {
    attrs: {
      "userlist-metas": _vm.meta.userlistMetas,
      "corp-id": _vm.corpId
    }
  }), _vm._v(" "), _c('applist', {
    attrs: {
      "allapplist-metas": _vm.meta.allapplistMetas,
      "corp-id": _vm.corpId
    }
  }), _vm._v(" "), (_vm.openAppManager) ? _c('appmanager', {
    attrs: {
      "admin": _vm.meta.admin,
      "corp-id": _vm.corpId
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cell-box",
    on: {
      "click": function($event) {
        _vm.homeGroupsOpenLink(_vm.item, $event)
      }
    }
  }, [(_vm.item.appType === 3) ? _c('div', [_c('div', {
    staticClass: "cell-image-container"
  }, [_c('div', {
    staticClass: "cell-mount"
  }, [_vm._v(_vm._s(_vm.item.formatNumber.val))]), _vm._v(" "), _c('div', {
    staticClass: "cell-unit"
  }, [_vm._v(_vm._s(_vm.item.formatNumber.unit))]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('div', {
    staticClass: "cell-text"
  }, [_vm._v(_vm._s(_vm.item.title))]), _vm._v(" "), _c('div', {
    staticClass: "cell-tag"
  }, [_vm._v(_vm._s(_vm.item.tableName))])]) : _c('div', [_c('div', {
    staticClass: "cell-image-container"
  }, [_c('img', {
    staticClass: "cell-image",
    attrs: {
      "src": _vm.item.imgPath
    }
  }), _vm._v(" "), (_vm.item.appType === 1) ? _c('div', {
    staticClass: "cell-app-type-container"
  }, [_c('div', {
    staticClass: "cell-app-type"
  }, [_vm._v("日志")])]) : _vm._e(), _vm._v(" "), (_vm.item.appType === 2) ? _c('div', {
    staticClass: "cell-app-type-container"
  }, [_c('div', {
    staticClass: "cell-app-type"
  }, [_vm._v("审批")])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "cell-text"
  }, [_vm._v(_vm._s(_vm.item.title))])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cell-app-type-container"
  }, [_c('div', {
    staticClass: "cell-app-type"
  }, [_vm._v("智能报表")])])
}]}

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "grid"
  }, _vm._l((_vm.meta), function(item) {
    return _c('div', {
      key: item.agentId,
      staticClass: "cell"
    }, [_c('single-app', {
      attrs: {
        "item": item
      }
    })], 1)
  }), 0)
},staticRenderFns: []}

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.userlistMetas.isHomeGroups) ? _c('div', {
    staticClass: "index-userlist"
  }, _vm._l((_vm.userlistMetas.homeGroups), function(appGroupList, index) {
    return _c('div', {
      key: index,
      staticClass: "index-userlist-item"
    }, [_c('div', {
      staticClass: "index-title"
    }, [_c('div', {
      staticClass: "index-text"
    }, [_vm._v(_vm._s(appGroupList.groupName))])]), _vm._v(" "), _c('grid', {
      attrs: {
        "meta": appGroupList.homeGroupDetail,
        "home-groups": true,
        "corp-id": _vm.corpId
      }
    }), _vm._v(" "), ((index + 1) !== _vm.userlistMetas.renderLine) ? _c('div', {
      staticClass: "index-userlist-line"
    }) : _vm._e()], 1)
  }), 0) : _vm._e()
},staticRenderFns: []}

/***/ })
],[49]);
//# sourceMappingURL=app.7280add97b72035c2dc9.js.map