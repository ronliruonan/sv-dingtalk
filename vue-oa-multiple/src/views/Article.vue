<template>
  <section class="article">
    <h3 class="article_title">{{item.title}}</h3>
    <section class="article_addtion">
      <span>栏目: {{item.columnPlateName}}</span>
      <span class="addtion-right">浏览: {{item.broweCount}}次</span>
    </section>
    <section class="article_addtion">
      <span>日期: {{item.releaseTime | formateDate}}</span>
      <span class="addtion-right">{{item.publishingDepartment}}</span>
    </section>

    <article v-html="item.content" class="article_detial"></article>

    <section class="article_footer">
      <p>
        <strong>发布范围：</strong>
        <br>
        <i
          class="footer-bage"
          v-for="(itemScope,index) in releaseScopes"
          :key="index"
        >{{itemScope.publishingDepartment}}</i>
      </p>
      <p style="margin-top:1em;">
        <strong>附件：</strong>
        <template v-if="item.files && item.files.length">
          <br>
          <a
            style="display:block;padding:2px 1em;"
            v-for="(file, index) in item.files"
            :key="index"
            :href="file.fileUrl"
          >{{file.fileName}}</a>
        </template>
        <template v-else>
          <span>无</span>
        </template>
      </p>
    </section>
  </section>
</template>

<script>
import {
  parseCorpId,
  // filterGetDict,
  filterDateFormate
} from "../lib/util.js";
import { viewArticle } from "../lib/portal-web.js";
import logger from "../lib/logger.js";

export default {
  name: "article-detail",
  filters: {
    // findDict: (value, dict) => {
    //   if (!value) return "";
    //   if (!dict) return value;

    //   return filterGetDict(value, dict);
    // },
    formateDate: function(value) {
      if (!value) return "";

      const date = new Date(value);
      return filterDateFormate(date, "yyyy-MM-dd");
    }
  },
  data: function() {
    return {
      item: {
        title: "",
        content: "",
        releaseTime: "",
        columnPlateId: "",
        columnPlateName: ""
      },
      releaseScopes: []
      //   dict: []
    };
  },
  //   created: function() {
  //     // const localDictStr = localStorage.getItem("columnplates");
  //     // const localDict = JSON.parse(localDictStr);
  //     // this.dict = Array.isArray(localDict) ? localDict : [];
  //   },
  async created() {
    const query = this.$route.query;
    const id = parseCorpId(location.search, "id");
    const isNews = parseCorpId(location.search, "isNews");

    await this.viewDetail(id || query.id, isNews || query.isNews);

    // eslint-disable-next-line
    dd.ui.pullToRefresh.disable();
  },
  methods: {
    viewDetail: async function(id = -1, isNews = false) {
      try {
        const response = await viewArticle({ id: id, isNews: isNews });
        const data = response.data;

        if (data.success !== true) return logger.warn(data.error);

        this.item = { ...this.item, ...data.result.item };
        this.releaseScopes = [
          ...this.releaseScopes,
          ...data.result.releaseScopes
        ];
      } catch (e) {
        logger.error(JSON.stringify(e));
      }
    }
  }
};
</script>

<style lang="scss">
.article {
  margin-top: 1px;
  padding: 5px 10px 0 10px;
  height: 100%;
  box-sizing: border-box;
  background-color: $bg-color-card;
}
.article_title {
  margin: 5px 0 0.8em 0;
  text-align: center;
}

.article_addtion {
  font-size: 14px;
  color: #999;
  padding-bottom: 0.5em;
}
.addtion-right {
  float: right;
}

.article_detial {
  padding-top: 10px;
  border-top: 1px solid #f25643;
  color: $txt-color-hei;
  font-size: 16px;
  line-height: 1.5;

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

.article_footer {
  font-size: 14px;
  margin: 1em -10px 0 -10px;
  padding: 1em 10px;
  background-color: #f6f6f6;
}

.footer-bage {
  display: inline-block;
  margin: 2px;
  padding: 1px 10px;
  box-sizing: border-box;
  border-radius: 10px;
  font-style: normal;
  background-color: rgba(206, 206, 206, 0.4); //$bg-color-bage;
}
</style>
