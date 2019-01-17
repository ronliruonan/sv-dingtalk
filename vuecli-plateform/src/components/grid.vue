<template>
  <div class="grid">
    <div class="cell" :key="index" v-for="(item, index) in meta">
      <single-app :item="item" :corp-id="corpId" :isHeader="isHeader"></single-app>
    </div>
  </div>
</template>

<script>
import singleApp from "./single-app.vue";

export default {
  name: "grid",
  props: ["meta", "corpId", "isHeader"],
  components: {
    singleApp
  },
  mounted: function() {},
  data: function() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .cell {
    width: 25%;
    position: relative;
    margin-bottom: 20px;
  }
}
</style>
