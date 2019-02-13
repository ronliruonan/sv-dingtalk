<template>
  <div class="header-slider">
    <grid :meta="headerMeta" :corp-id="corpId" :is-header="true"></grid>
  </div>
</template>

<script>
import { getMetaHeader } from "../../lib/meta.js";
import { getIndexTodoCount } from "../../lib/task-web.js";
import { timerFun } from "../../lib/util.js";
import logger from "../../lib/logger";

import grid from "../../components/grid.vue";

export default {
  name: "index-header",
  props: ["corpId"],
  components: {
    grid
  },
  data: function() {
    return {
      headerMeta: []
    };
  },
  created: function() {
    const data = getMetaHeader();
    this.headerMeta = data;
    timerFun(this.getTotoCount, true, 1000 * 60);
  },
  methods: {
    getTotoCount: async function() {
      try {
        const response = await getIndexTodoCount();
        const data = response.data;
        if (data.success !== true)
          return logger.warn(JSON.stringify(data.error));

        const todoApp = this.headerMeta[0];
        const count = data.result.items.totalCount;
        todoApp.bage = count;
        todoApp.isMove = count > 0;
      } catch (e) {
        logger.error(JSON.stringify(e));
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header-slider {
  width: 100%;
  padding-top: 20px;
  flex-direction: row;
  background-color: $bg-color-header;
  border-width: 1px;
  border-color: $bd-header-color;
}
</style>
