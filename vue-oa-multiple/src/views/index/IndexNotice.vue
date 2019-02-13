<template>
  <jt-list
    :items="items"
    :dict="dict"
    :item-open="{
        newLink: {
            pathName:'article.html',
            search:'?id={{id}}'
        },
        curLink: false
    }"
    :more-open="'notice.html'"
    :has-more="hasMore"
    :jt-options="jtListOptions"
  ></jt-list>
</template>

<script>
// @ is an alias to /src
import jtList from "../../components/jt-list.vue";
import { getIndexGonggao } from "../../lib/portal-web.js";
import logger from "../../lib/logger";
import { pullToRefresh } from "../../lib/util";

export default {
  name: "index-notice",
  components: { jtList },
  data: function() {
    return {
      items: [],
      dict: [],
      hasMore: false,
      jtListOptions: {
        jtFrom: "columnPlateId",
        jtTime: "releaseTime"
      }
    };
  },
  mounted: function() {
    this.init();
  },
  activated: function() {
    pullToRefresh(this.init);
  },
  methods: {
    init: async function(isRefresh = false, txt = "公告信息：刷新完成!") {
      try {
        const response = await getIndexGonggao();
        const data = response.data;
        if (data.success !== true)
          return logger.warn(JSON.stringify(data.error));

        this.items = data.result.items.items;
        this.dict = data.result.columnPlates;
        this.hasMore = this.items.length < data.result.items.totalCount;

        // Article Api 没有字典项，自己安装数据
        localStorage.setItem("columnplates", JSON.stringify(this.dict));

        if (isRefresh) {
          // eslint-disable-next-line
          dd.device.notification.toast({
            icon: "success",
            text: txt
          });
        }
      } catch (e) {
        logger.error(JSON.stringify(e));
      }
    }
  }
};
</script>
