<template>
  <div class="index-all-applist">
    <grid :meta="appListMeta" :corp-id="corpId" :micor-app="true"></grid>
  </div>
</template>

<script>
import logger from "../../lib/logger.js";
import dingWeb from "../../lib/ding-web.js";

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
  data: function() {
    return {
      appListMeta: []
    };
  },
  mounted: function() {
    logger.info("Component index-applist mounted");

    if (this.dingUserId) {
      this.getMicroApps();
    }
  },
  methods: {
    getMicroApps: function() {
      // 获取用户权限范围内的apps
      dingWeb
        .getMicroApps({
          url: "/api/microapps/user/" + this.dingUserId
        })
        .then(response => {
          const data = response.data;
          if (data.errcode === 0) {
            this.appListMeta = data.appList;
          } else {
            logger.error(`获取microApps 失败：${data.errmsg}`);
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
