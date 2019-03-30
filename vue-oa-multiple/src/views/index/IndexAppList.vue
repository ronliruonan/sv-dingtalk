<template>
  <div class="index-all-applist">
    <grid :meta="appListMeta" :corp-id="corpId" :micor-app="true"></grid>
  </div>
</template>

<script>
import logger from "../../lib/logger.js";
import { getMicroApps } from "../../lib/ding-web.js";
import { pullToRefresh } from "../../lib/util";

import grid from "../../components/grid.vue";

export default {
  name: "applist",
  props: {
    dingUserId: String,
    corpId: String
  },
  components: { grid },
  watch: {
    dingUserId: function() {
      this.init();
    }
  },
  data: function() {
    return { appListMeta: [] };
  },
  created: function() {
    this.init();
  },
  activated: function() {
    pullToRefresh(this.init);
  },
  methods: {
    init: function(isRefresh = false, txt = "我的应用：刷新完成!") {
      // 获取用户权限范围内的apps
      const localStr = localStorage.getItem("microapps");
      const localResult = JSON.parse(localStr);

      // 率先localStorage渲染applist
      if (localResult) {
        this.appListMeta = localResult.appList.filter(
          a => a.name !== "企业主页"
        );
      }

      if (!this.dingUserId) return;

      getMicroApps({
        url: "/api/microapps/user/" + this.dingUserId
      })
        .then(response => {
          const data = response.data;

          if (data.errcode !== 0) {
            logger.error(`获取microApps 失败：${data.errmsg}`);
            return;
          }

          if (!localResult || data.md5 !== localResult.md5) {
            localStorage.setItem("microapps", JSON.stringify(data));
            this.appListMeta = data.appList.filter(a => a.name !== "企业主页");

            // eslint-disable-next-line
            dd.device.notification.toast({
              icon: "success",
              text: "钉钉应用更新完成"
            });
          }

          if (isRefresh) {
            // eslint-disable-next-line
            dd.device.notification.toast({
              icon: "success",
              text: txt
            });
          }
        })
        .catch(error => {
          logger.error(`获取microApps Error: ${JSON.stringify(error)}`);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.index-all-applist {
  margin-top: 15px;
}
</style>
