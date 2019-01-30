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
import { getNoticeList } from "../../lib/portal-web.js";
import JtList from "../../components/jt-list.vue";
import logger from "../../lib/logger";

export default {
  name: "notice-index",
  components: { JtList },
  data: function() {
    return {
      items: [],
      dict: [],
      hasMore: false,
      jtListOptions: {
        jtFrom: "columnPlateId", //columnPlateId
        jtTime: "releaseTime"
      },
      pageNo: -1,
      pageSize: 10,
      searchTitle: ""
    };
  },
  watch: {
    pageNo: function() {
      this.pageFunc();
    }
  },
  created: function() {
    const localDictStr = localStorage.getItem("columnplates");
    const localDict = JSON.parse(localDictStr);
    this.dict = Array.isArray(localDict) ? localDict : [];
  },
  mounted: function() {
    this.pageNo = 1;
  },
  methods: {
    pageFunc: async function() {
      try {
        const response = await getNoticeList(this.searchTitle, {
          pageNo: this.pageNo,
          pageSize: this.pageSize
        });
        const data = response.data;

        if (data.success !== true)
          return logger.warn(JSON.stringify(data.error));

        this.items.push(...data.result.items.items);
        this.hasMore = this.items.length < data.result.items.totalCount;

        if (data.result.columnPlates) this.dict = data.result.columnPlates;
      } catch (e) {
        logger.error(JSON.stringify(e));
      }
    }
  }
};
</script>
