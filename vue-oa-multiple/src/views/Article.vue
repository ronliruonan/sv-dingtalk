<template>
  <section class="article-detail">
    <h3 style="margin-top:10px; text-align: center;">{{item.title}}</h3>
    <p style="font-size:14px; color:#999;">
      <span>来源: {{item.columnPlateId|findDict(dict)}}</span>
      <span style="float:right;">发布于: {{item.releaseTime| formateDate}}</span>
    </p>
    <pre>{{item.content}}</pre>
  </section>
</template>

<script>
import { parseCorpId, filterGetDict, filterDateFormate } from "../lib/util.js";
import { viewArticle } from "../lib/portal-web.js";
import logger from "../lib/logger.js";

export default {
  name: "article-detail",
  filters: {
    findDict: (value, dict) => {
      if (!value) return "";
      if (!dict) return value;

      return filterGetDict(value, dict);
    },
    formateDate: function(value) {
      if (!value) return "";

      const date = new Date(value);
      return filterDateFormate(date, "yyyy-MM-dd hh:mm");
    }
  },
  data: function() {
    return {
      item: {
        title: "",
        content: "",
        releaseTime: "",
        columnPlateId: ""
      },
      dict: []
    };
  },
  created: function() {
    const localDictStr = localStorage.getItem("columnplates");
    const localDict = JSON.parse(localDictStr);
    this.dict = Array.isArray(localDict) ? localDict : [];
  },
  mounted: function() {
    const query = this.$route.query;
    const id = parseCorpId(location.search, "id");

    this.viewDetail(id || query.id);
  },
  methods: {
    viewDetail: async function(id = -1) {
      try {
        const response = await viewArticle({ id: id });
        const data = response.data;

        if (data.success !== true)
          return logger.warn(JSON.stringify(data.error));

        this.item = { ...this.item, ...data.result.item };
      } catch (e) {
        logger.error(JSON.stringify(e));
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.article-detail {
  margin-top: 3px;
  padding: 5px 10px;

  background-color: $bg-color-card;
}
</style>
