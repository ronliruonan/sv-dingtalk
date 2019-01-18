<template>
  <section class="jt-list">
    <div class="list-item" v-for="(item, index) in items" :key="index" @click="jsgo(item)">
      <p class="title">{{item.title}}</p>
      <div class="other">
        <p class="other-left">
          <img class="other-icon" src="@/assets/pingtai2.png">
          {{item.from}}
        </p>
        <p class="other-right">{{item.time}}</p>
      </div>
    </div>
    <p class="list-more" @click="jsmore">查看更多</p>
  </section>
</template>

<script>
import { openLink } from "../lib/util.js";
export default {
  name: "jt-list",
  props: {
    goOpen: {
      type: String,
      default: null
    },
    items: Array
  },
  data: function() {
    return {};
  },
  methods: {
    jsgo: function(item) {
      if (this.goOpen) {
        openLink(item.url);
      } else {
        this.$router.push({ name: "article", params: { item: item } });
      }
    },
    jsmore: function() {
      if (this.goOpen) {
        const href = location.href;
        const hash = location.hash;
        const url = href.replace(hash, `#/${this.goOpen}`);
        openLink(url);
      } else {
        console.log("page no");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.jt-list {
  font-size: 15px;

  .list-item {
    padding: 15px 15px 10px 15px;
    border-bottom: 1px solid #efefef;

    .title {
      color: #191f25;
    }
    .other {
      margin-top: 10px;
      font-size: 14px;
      display: flex;
      color: #7a7d81;
    }
    .other-left {
      flex: 1;
      text-align: left;
    }
    .other-right {
      flex: 1;
      text-align: right;
    }
    .other-icon {
      height: 14px;
    }
  }

  .list-more {
    padding: 10px;
    box-sizing: border-box;
    border: 10px solid #f6f6f6;
    border-left-width: 0;
    border-right-width: 0;
    text-align: center;
  }
}
</style>
