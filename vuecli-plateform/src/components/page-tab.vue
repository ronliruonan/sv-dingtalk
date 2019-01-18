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
    <!-- <transition name="fade" mode="out-in"> -->
    <transition name="slide-fade">
      <keep-alive>
        <component :is="componentName" :dingUserId="dingUserId"></component>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
import indexAppList from "@/views/index/index-applist.vue";

export default {
  name: "page-tab",
  props: {
    dingUserId: String,
    tabs: Array
  },
  components: {
    indexAppList,
    indexNotice: () => import("@/views/index/index-notice.vue"),
    indexDispatch: () => import("@/views/index/index-dispatch.vue")
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
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter
/* .slide-fade-leave-active for below version 2.1.8 */ {
  //   transform: translateY(-10px);
  opacity: 0;
}
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(-60px);
  opacity: 0;
}
.page-tab {
  margin-top: 10px;
  box-sizing: border-box;
  background-color: #fff;

  .page-tab-title {
    display: flex;
    text-align: center;

    .item {
      flex: 1;
      padding: 15px 0;
      font-size: 16px;
      border-bottom: 1px #e6e6e7 solid;
    }
    .item.active {
      color: #2599de;
      font-weight: 500;
      border-bottom-color: #2599de;
      border-bottom-width: 2px;
    }
  }
}
</style>
