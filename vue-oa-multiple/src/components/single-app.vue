<template>
  <div class="cell-box" :class="{'cell-header':isHeader}" @click="microAppOpenLink(item,$event)">
    <i class="bage" v-if="item.bage">{{item.bage>99?'99+':item.bage}}</i>
    <div class="cell-image-container">
      <img class="cell-image" :src="item.appIcon" :class="{'musice-move':item.isMove}">
    </div>
    <div class="cell-text" :class="{'is-special':item.isSpecial}">{{item.name}}</div>
  </div>
</template>

<script>
import { openLink, parseCorpId } from "@/lib/util.js";
import { DINGAPPKEY } from "../lib/env";
import logger from "../lib/logger";

let lock = true;

export default {
  name: "singleApp",
  props: ["item", "corpId", "isHeader"],
  mounted: function() {},
  methods: {
    microAppOpenLink: function(item) {
      if (!lock) return;

      lock = false;
      const agentId = item.agentId;
      const url = item.url;
      const corpId = parseCorpId(location.href, "corpId");

      if (agentId === 0) {
        openLink(url, () => {
          lock = true;
        });
        return;
      }

      lock = true;
      // eslint-disable-next-line
      dd.biz.microApp.openApp({
        agentId: agentId,
        appId: DINGAPPKEY,
        corpId: corpId,
        onSuccess: function() {},
        onFail: function(err) {
          logger.error(`打开应用失败: ${JSON.stringify(err)}`);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.cell-box {
  position: relative;
  .bage {
    position: absolute;
    right: 1px;
    z-index: 1;
    font-style: normal;
    color: #fff;
    background-color: red;
    border-radius: 10px;
    font-size: 12px;
    padding: 1px 6px;
  }
}
.cell-image-container {
  width: 50px;
  height: 49px;
  position: relative;
  border-radius: 10px;
  background-color: #f8f8f8;
  overflow: hidden;
  margin: 0 auto;
}
.cell-header {
  .cell-image-container {
    text-align: center;
    padding-top: 4.5px;
    box-sizing: border-box;
    border-radius: 100%;
  }

  .cell-image {
    width: 40px !important;
    height: 40px !important;
    border-radius: 100% !important;
  }

  .cell-text {
    color: #f6f6f6 !important;
  }
}
.cell-image {
  width: 50px;
  height: 49px;
  border-radius: 10px;
}
.cell-image.musice-move {
  animation: music-move 0.8s 0.5s infinite alternate ease-in-out;
}
.cell-text {
  text-align: center;
  color: #191f25;
  font-size: 13px;
  margin-top: 12px;
}
.is-special.cell-text {
  color: #f7b55e !important;
}
@keyframes music-move {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(-15deg);
  }
  66% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
