<template>
  <jt-list
    :items="items"
    :dict="dict"
    :item-open="{
        newLink: false,
        curLink: {
            pathName:'article'
        }
    }"
    :has-more="hasMore"
    :jt-options="jtListOptions"
    @page-more="pageNo += 1"
  ></jt-list>
</template>

<script>
import { getDispatchList } from "../../lib/portal-web.js";
import JtList from "../../components/jt-list.vue";
import logger from "../../lib/logger";
import { pullToRefresh } from "../../lib/util";

export default {
  name: "notice-index",
  components: { JtList },
  data: function() {
    return {
      items: [],
      dict: [],
      hasMore: false,
      jtListOptions: {
        jtFrom: "columnPlateId",
        jtTime: "releaseTime"
      },
      pageNo: -1,
      pageSize: 10,
      searchTitle: ""
    };
  },
  watch: {
    pageNo: function(v1) {
      if (v1 === 1) return;

      this.pageFunc(this.pageNo, this.pageSize);
    }
  },
  created: function() {
    const localDictStr = localStorage.getItem("columnplates");
    const localDict = JSON.parse(localDictStr);
    this.dict = Array.isArray(localDict) ? localDict : [];
  },
  mounted: function() {
    this.init();

    pullToRefresh(this.init);
  },
  methods: {
    init: async function(isRefresh = false, txt = "发文列表：刷新完成!") {
      this.pageNo = 1;

      await this.pageFunc(this.pageNo, this.pageSize, isRefresh);

      if (isRefresh) {
        // eslint-disable-next-line
        dd.device.notification.toast({
          icon: "success",
          text: txt
        });
      }
    },
    pageFunc: async function(pageNo = 1, pageSize = 10, isRefresh = false) {
      try {
        const response = await getDispatchList(this.searchTitle, {
          pageNo: pageNo,
          pageSize: pageSize
        });
        const data = response.data;

        if (data.success !== true)
          return logger.warn(JSON.stringify(data.error));

        const {
          items: dataItems,
          totalCount: dataTotalCount
        } = data.result.items;

        isRefresh ? (this.items = dataItems) : this.items.push(...dataItems);
        this.hasMore = this.items.length < dataTotalCount;

        if (data.result.columnPlates) {
          this.dict = data.result.columnPlates;
        }
      } catch (e) {
        logger.error(JSON.stringify(e));
      }
    }
  }
};
</script>
