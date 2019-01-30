<template>
  <section class="jt-list">
    <div class="list-item" v-for="(item, index) in items" :key="index" @click="jsItemOPen(item)">
      <p class="title">{{item.title}}</p>
      <p class="content" v-if="item.content">{{item.content}}</p>
      <div class="other">
        <p class="other-left">
          <img class="other-icon" src="@/assets/pingtai2.png">
          {{item[jtOptions.jtFrom]|findDict(dict)}}
        </p>
        <p class="other-right">{{item[jtOptions.jtTime]|formateDate}}</p>
      </div>
    </div>
    <p class="list-more" v-if="hasMore" @click="jsmore">查看更多</p>
    <p class="list-more" v-else>没有更多了</p>
  </section>
</template>

<script>
import {
  openLink,
  newUrl,
  templateFunc,
  filterGetDict,
  filterDateFormate
} from "../lib/util.js";
import logger from "../lib/logger.js";

export default {
  name: "jt-list",
  props: {
    moreOpen: {
      type: String,
      default: null
    },
    items: Array,
    itemOpen: Object,
    dict: {
      type: Array,
      default: () => {
        return null;
      }
    },
    hasMore: {
      type: Boolean,
      default: false
    },
    jtOptions: {
      type: Object,
      default: () => {
        return { jtFrom: "from", jtTime: "time" };
      }
    }
  },
  filters: {
    findDict: (value, dict) => {
      if (!value) return "null";
      if (!dict) return value;

      return filterGetDict(value, dict);
    },
    formateDate: function(value) {
      if (!value) return "";
      const date = new Date(value);

      return filterDateFormate(date);
    }
  },
  methods: {
    jsItemOPen: function(item) {
      if (this.itemOpen.newLink) {
        if (item.mobileUrl) {
          return openLink(item.mobileUrl);
        }

        let { pathName, search } = this.itemOpen.newLink;

        search = templateFunc(search, item);
        const url = newUrl(pathName, search);
        return openLink(url);
      }

      if (this.itemOpen.curLink) {
        return this.$router.push({
          name: this.itemOpen.curLink.pathName,
          query: { id: item.id, ip: "aya" }
        });
      }
      logger.info("has nothing to do");
    },
    jsmore: function() {
      if (this.moreOpen) {
        const url = newUrl(this.moreOpen);
        openLink(url);
      } else {
        this.$emit("page-more");
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
    padding: 15px;
    border-bottom: 1px solid #efefef;
    text-align: center;
    font-size: 13px;
    color: #191f258c;
  }
}
</style>
