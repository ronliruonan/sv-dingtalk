<template>
  <section class="article-detail">
    <h3 style="margin-top:10px; text-align: center;">{{item.title}}</h3>
    <p style="font-size:14px; color:#999;">
      <span>来源: {{item.columnPlateId|findDict(dict)}}</span>
      <span style="float:right;">发布于: {{item.releaseTime| formateDate}}</span>
    </p>
    <article v-html="item.content"></article>
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

    // eslint-disable-next-line
    dd.ui.pullToRefresh.disable();
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

<style lang="scss">
.article-detail {
  margin-top: 1px;
  padding: 5px 10px;
  height: 100%;
  box-sizing: border-box;

  background-color: $bg-color-card;

  article {
    margin-top: 10px;
    color: $txt-color-hei;
    font-size: 16px;

    h1 {
      margin: 0;
      padding: 0;
      font-size: 1.6em;
    }
    h2 {
      margin: 0;
      padding: 0;
      font-size: 1.4em;
    }
    h3 {
      margin: 0;
      padding: 0;
      font-size: 1.2em;
    }
    h4 {
      margin: 0;
      padding: 0;
      font-size: 1em;
    }
    h5 {
      margin: 0;
      padding: 0;
      font-size: 0.8em;
    }
    h6 {
      margin: 0;
      padding: 0;
      font-size: 0.6em;
    }

    p {
      padding-top: 5px;
      white-space: pre-wrap;
    }
    img {
      max-width: 100%;
    }
  }
}
</style>
