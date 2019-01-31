<template>
  <div id="app">
    <index-header :corp-id="corpId"/>
    <index-page-tab :ding-user-id="dingUserId" :tabs="pageTabs"/>
  </div>
</template>

<script>
import { parseCorpId } from "../../lib/util.js";
import logger from "../../lib/logger.js";
import { getUserId } from "../../lib/ding-web.js";
import { DEFAULTDINGUSERID } from "../../lib/env.js";

import IndexHeader from "../../views/index/IndexHeader.vue";
import IndexPageTab from "../../views/index/IndexPageTab.vue";

export default {
  name: "app",
  components: {
    IndexHeader,
    IndexPageTab
  },
  data: function() {
    return {
      corpId: "",
      dingUserId: DEFAULTDINGUSERID,
      pageTabs: [
        { name: "我的应用", componentName: "IndexAppList" },
        { name: "发文信息", componentName: "IndexDispatch" },
        { name: "公告信息", componentName: "IndexNotice" }
      ],
      meta: {
        dingUserInfo: {
          name: "",
          userid: "",
          isAdmin: false,
          isHide: false
        }
      }
    };
  },
  mounted: function() {
    this.corpId = parseCorpId(location.href, "corpId");
    this.getUserId();
  },
  methods: {
    getUserId: function() {
      getUserId({ url: "/api/users/auth" }, this.corpId)
        .then(response => {
          const data = response.data;
          if (data.errcode === 0) {
            this.dingUserId = data.userid;
          } else {
            logger.error(`获取钉钉userid error：${data.errmsg}`);
          }
        })
        .catch(error => {
          logger.error(`获取钉钉userid exception：${JSON.stringify(error)}`);
        });
    }
  }
};
</script>


<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $txt-color-h1;
}
</style>
