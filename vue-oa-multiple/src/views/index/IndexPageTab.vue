<template>
  <section class="page-tab">
    <div class="page-tab-title">
      <div
        class="item"
        :class="{active:activeIndex === index}"
        v-for="(tab, index) in tabs"
        :key="index"
        @click="tabComponent(tab, index)"
      >{{tab.name}}</div>
    </div>
    <transition name="slide-fade">
      <keep-alive>
        <component :is="componentName" :dingUserId="dingUserId"></component>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
import IndexAppList from "@/views/index/IndexAppList.vue";
import IndexNotice from "@/views/index/IndexNotice.vue";
import IndexDispatch from "@/views/index/IndexDispatch.vue";

export default {
  name: "page-tab",
  props: {
    dingUserId: String,
    tabs: Array
  },
  components: {
    IndexAppList,
    IndexNotice,
    IndexDispatch
  },
  data: function() {
    return {
      componentName: "indexAppList",
      activeIndex: 0
    };
  },
  methods: {
    tabComponent: function(tab, index) {
      this.componentName = tab.componentName;
      this.activeIndex = index;
    }
  },
  mounted: function() {
    Array.isArray(this.tabs) ? (this.tabs[0].isActive = true) : "";
  }
};
</script>

<style lang="scss" scoped>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 1s ease-in-out;
}
.slide-fade-leave-active {
  transition: all 0.8s ease-in;
}
.slide-fade-enter {
  transform: translateY(100px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-150px);
  opacity: 0;
}
.page-tab {
  margin-top: 10px;
  box-sizing: border-box;
  background-color: $bg-color-card;

  .page-tab-title {
    display: flex;
    text-align: center;

    .item {
      flex: 1;
      padding: 15px 0;
      font-size: 16px;
      border-bottom: 1px $bd-header-color solid;
    }
    .item.active {
      color: $colors-primary;
      font-weight: 500;
      border-bottom-color: $colors-primary;
      border-bottom-width: 2px;
    }
  }
}
</style>
