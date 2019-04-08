<template>
  <div class="header-slider">
    <grid :meta="headerMeta" :corp-id="corpId" :is-header="true"></grid>
  </div>
</template>

<script>
import { getStaticHeaders } from "../../lib/meta.js";
import { getIndexTodoCount } from "../../lib/task-web.js";
import { timerFun } from "../../lib/util.js";
import logger from "../../lib/logger";
import EventBus from "../../lib/pub-sub.js";
import grid from "../../components/grid.vue";

export default {
  name: "index-header",
  props: ["corpId"],
  components: {
    grid
  },
  data: function() {
    return {
      headerMeta: [],
      timerId: -1
    };
  },
  created() {
    this.headerMeta = getStaticHeaders();
    const __this = this;

    EventBus.$once("DUID", function() {
      __this.timerId = timerFun(__this.getTotoCount, true, 1000 * 60 * 5);
    });
  },
  methods: {
    async getTotoCount() {
      try {
        const response = await getIndexTodoCount();
        const data = response.data;
        if (data.success !== true) return logger.warn(data.error);

        const todoApp = this.headerMeta.find(item => item["alias"] === "lao2");
        const count = data.result.items.totalCount;
        todoApp.bage = count;
        todoApp.isMove = count > -1;
      } catch (e) {
        if (this.timerId !== -1) {
          clearInterval(this.timerId);
        }

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
