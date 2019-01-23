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
    getIndexFawen()
      .then(response => {
        const data = response.data;
        if (data.success === true) {
          this.items = data.result.items.items;
          this.dict = data.result.columnPlates;
          this.hasMore = this.items.length < data.result.items.totalCount;

          // Article Api 么有字典项
          localStorage.setItem("columnplates", JSON.stringify(this.dict));
        } else {
          logger.warn(JSON.stringify(data.error));
        }
      })
      .catch(error => {
        logger.error(JSON.stringify(error));
      });
  }
};
</script>
