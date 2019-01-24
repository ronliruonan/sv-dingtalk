<template>
  <div class="index-all-applist">
    <grid :meta="appListMeta" :corp-id="corpId" :micor-app="true"></grid>
  </div>
</template>

<script>
import logger from "../../lib/logger.js";
import { getMicroApps } from "../../lib/ding-web.js";

import grid from "../../components/grid.vue";

export default {
  name: "applist",
  props: {
    dingUserId: String,
    corpId: String
  },
  components: {
    grid
  },
  watch: {
    dingUserId: function() {
      this.getMicroApps();
    }
  },
  data: function() {
    return {
      appListMeta: []
    };
  },
  created: function() {
    this.getMicroApps();
  },
  methods: {
    getMicroApps: function() {
      // 获取用户权限范围内的apps
      const localStr = localStorage.getItem("microapps"),
        localResult = JSON.parse(localStr);

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
              text: "钉钉应用更新完成"
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

  .applist-title {
    width: 100%;
    height: 49px;
    position: relative;

    .applist-text {
      color: #999;
      font-size: 17px;
      position: absolute;
      top: 16px;
      left: 12px;
    }
  }
}
</style>
