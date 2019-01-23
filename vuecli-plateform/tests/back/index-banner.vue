<template>
  <div class="banner-slider">
    <div class="banner" :key="item.imgUrl" v-for="item in bannerMetas">
      <img class="banner-image" :src="item.imgUrl">
    </div>
  </div>
</template>

<script>
export default {
  name: "banner",
  props: ["corpId", "bannerMetas"],
  data: function() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.banner-slider {
  width: 100%;
  height: 150px;
  flex-direction: row;
  background-color: #fff;
  border-width: 1px;
  border-color: #dadada;

  .banner {
    width: 100%;
    height: 150px;

    .banner-image {
      width: 100%;
      height: 150px;
    }
  }
}
</style>
