<template>
  <div class="index-all-applist">
    <div class="applist-title">
      <h1 class="applist-text">全部应用</h1>
    </div>
    <grid :meta="applistMetas2" :corp-id="corpId" :micor-app="true"></grid>
  </div>
</template>

<script>
import grid from "../../components/grid.vue";

export default {
  name: "applist",
  props: ["applistMetas2", "corpId"],
  components: {
    grid
  },
  data: function() {
    return {};
  },
  mounted: function() {}
};
</script>

<style lang="scss" scoped>
.index-all-applist {
  margin-top: 16px;
  background-color: #fff;
  border-top-color: #e4e4e4;
  border-top-width: 1px;
  border-top-style: solid;

  .applist-title {
    width: 100%;
    height: 49px;
    position: relative;

    .applist-text {
      color: #999;
      font-size: 17px;
      position: absolute;
      top: 16px;
      left: 12px;
    }
  }
}
</style>
