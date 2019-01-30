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
    :more-open="'dispatch.html'"
    :has-more="hasMore"
    :jt-options="jtListOptions"
  ></jt-list>
</template>

<script>
// @ is an alias to /src
import jtList from "../../components/jt-list.vue";
import { getIndexFawen } from "../../lib/portal-web.js";
import logger from "../../lib/logger";

export default {
  name: "index-dispatch",
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
  methods: {
    init: async function() {
      try {
        const response = await getIndexFawen();
        const data = response.data;
        if (data.success !== true)
          return logger.warn(JSON.stringify(data.error));

        this.items = data.result.items.items;
        this.dict = data.result.columnPlates;
        this.hasMore = this.items.length < data.result.items.totalCount;

        // Article Api 没有字典项，自己安装
        localStorage.setItem("columnplates", JSON.stringify(this.dict));
      } catch (e) {
        logger.error(JSON.stringify(e));
      }
    }
  }
};
</script>
