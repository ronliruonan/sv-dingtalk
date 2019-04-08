<template>
  <div id="app">
    <index-header :corp-id="corpId"/>
    <index-page-tab :ding-user-id="dingUserId" :tabs="pageTabs"/>
  </div>
</template>

<script>
import { parseCorpId } from "../../lib/util.js";
import { sso_ding } from "../../lib/sso-web.js";
import EventBus from "../../lib/pub-sub.js";

import IndexHeader from "../../views/index/IndexHeader.vue";
import IndexPageTab from "../../views/index/IndexPageTab.vue";
import logger from "../../lib/logger.js";

export default {
  name: "app",
  components: {
    IndexHeader,
    IndexPageTab
  },
  data() {
    return {
      corpId: "",
      dingUserId: "",
      pageTabs: [
        { name: "我的应用", componentName: "IndexAppList" },
        { name: "发文信息", componentName: "IndexDispatch" },
        { name: "新闻信息", componentName: "IndexNews" }
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
  async created() {
    try {
      this.corpId = parseCorpId(location.search, "corpId");
      const dingUserId = await sso_ding();
      this.dingUserId = dingUserId;
      
      EventBus.$emit("DUID", dingUserId);
    } catch (error) {
      logger.error(JSON.stringify(error));
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
