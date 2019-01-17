<template>
  <div class="home">
    <index-header :corp-id="corpId"></index-header>
    <page-tab :ding-user-id="dingUserId" :tabs="pageTabs"></page-tab>
  </div>
</template>

<script>
// @ is an alias to /src
import { parseCorpId } from "../lib/util.js";
import logger from "../lib/logger.js";
import dingWeb from "../lib/ding-web.js";

import indexHeader from "./index/index-header.vue";
import pageTab from "../components/page-tab.vue";

export default {
  name: "home",
  components: {
    indexHeader,
    pageTab
  },
  data: function() {
    return {
      corpId: "",
      dingUserId: "xiangxiaoqiang001",
      pageTabs: [
        { name: "我的应用", componentName: "indexAppList" },
        { name: "发文信息", componentName: "indexDispatch" },
        { name: "公告信息", componentName: "indexNotice" }
      ],
      meta: {
        dingUserInfo: {
          name: "",
          userid: "",
          isAdmin: false,
          isBoss: false,
          isHide: false
        }
      }
    };
  },
  mounted: function() {
    this.corpId = parseCorpId(location.href, "corpId");
    // const signRequest = {
    //   url: "/api/auth/jsapi-oauth",
    //   params: { href: location.href }
    // };
    // // js-api 权限校验
    // dingWeb
    //   .jsApiOAuth(signRequest, [])
    //   .then(response => {
    //     const data = response.data;
    //     if (data.errcode === 0) {
    //       // 走免登流程
    //       this.getUserId();
    //     } else {
    //       logger.error(`获取jsapi oauth 异常: ${JSON.stringify(data.errmsg)}`);
    //     }
    //   })
    //   .catch(error => {
    //     logger.error(`JS API 权限校验失败 error: ${JSON.stringify(error)}`);
    //   });

    // 走免登流程
    this.getUserId();
  },
  methods: {
    getUserId: function() {
      dingWeb
        .getUserId({ url: "/api/users/auth" }, this.corpId)
        .then(response => {
          const data = response.data;

          if (data.errcode === 0) {
            this.dingUserId = data.userid;
          } else {
            logger.error(`获取钉钉userid error: ${data.errmsg}`);
          }
        })
        .catch(error => {
          logger.error(`钉钉 userid error: ${JSON.stringify(error)}`);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
