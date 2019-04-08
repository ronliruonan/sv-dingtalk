<template>
  <jt-list
    :items="items"
    :dict="dict"
    :item-open="{
        newLink: {
            pathName:'article.html',
            search:'?id={{id}}&isNews=1'
        },
        curLink: false
    }"
    :more-open="'news.html'"
    :has-more="hasMore"
    :jt-options="jtListOptions"
  >
    <slot-msg
      v-if="apiError.isAvailable"
      :msgType="'error'"
      :msg="apiError.msg"
      :msgDetail="apiError.detail"
    ></slot-msg>
  </jt-list>
</template>

<script>
// @ is an alias to /src
import jtList from "../../components/jt-list.vue";
import slotMsg from "../../components/slot-msg.vue";

import { getIndexNews } from "../../lib/portal-web.js";
import logger from "../../lib/logger";
import { pullToRefresh, timerFun } from "../../lib/util";

export default {
  name: "index-news",
  components: { jtList, slotMsg },
  data: function() {
    return {
      items: [],
      dict: [],
      hasMore: false,
      jtListOptions: {
        jtFrom: "columnPlateName",
        jtTime: "releaseTime"
      },
      apiError: {
        isAvailable: false,
        msg: "网络请求异常，请稍后重试",
        detail: null
      },
      timerId: -1
    };
  },
  mounted: function() {
    this.init();

    this.timerId = timerFun(this.init, false, 1000 * 60 * 5);
  },
  activated: function() {
    pullToRefresh(this.init);
  },
  methods: {
    init: async function(isRefresh = false, txt = "新闻信息：刷新完成!") {
      try {
        const response = await getIndexNews();
        const data = response.data;
        if (data.success !== true) return logger.warn(data.error);

        this.items = data.result.items.items;
        this.dict = data.result.columnPlates;
        this.hasMore = this.items.length < data.result.items.totalCount;

        // Article Api 没有字典项，自己安装数据
        localStorage.setItem("columnplates", JSON.stringify(this.dict));

        this.apiError.isAvailable = false;

        if (isRefresh) {
          // eslint-disable-next-line
          dd.device.notification.toast({
            icon: "success",
            text: txt
          });
        }
      } catch (e) {
        this.apiError = {
          ...this.apiError,
          ...{
            isAvailable: true,
            detail: JSON.stringify(e)
          }
        };

        if (this.timerId !== -1) {
          clearInterval(this.timerId);
        }
      }
    }
  }
};
</script>
