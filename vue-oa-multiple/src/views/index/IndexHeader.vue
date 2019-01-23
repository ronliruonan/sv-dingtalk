<template>
  <div class="header-slider">
    <grid :meta="headerMeta" :corp-id="corpId" :is-header="true"></grid>
  </div>
</template>

<script>
import { getMetaHeader } from "../../lib/meta.js";

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
  }
};
</script>

<style lang="scss" scoped>
.header-slider {
  width: 100%;
  padding-top: 20px;
  flex-direction: row;
  background-color: #3e3e3e;
  border-width: 1px;
  border-color: #dadada;
}
</style>
