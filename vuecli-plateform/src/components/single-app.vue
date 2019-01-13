<template>
  <div class="cell-box" @click="microAppOpenLink(item,$event)">
    <div class="cell-image-container">
      <img class="cell-image" :src="item.icon">
    </div>
    <div class="cell-text">{{item.name}}</div>
  </div>
</template>

<script>
import { openLink, parseCorpId } from "@/lib/util.js";

let lock = true;

export default {
  name: "singleApp",
  props: ["item", "corpId"],
  data: function() {
    return {};
  },
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
        appId: "dingxgyezybqss11gqi6",
        corpId: corpId,
        onSuccess: function() {},
        onFail: function(err) {
          alert("打开应用失败：" + JSON.stringify(err));
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.cell-image-container {
  width: 50px;
  height: 49px;
  position: relative;
  border-radius: 10px;
  background-color: #f8f8f8;
  overflow: hidden;
  margin: 0 auto;
}
.cell-image {
  width: 50px;
  height: 49px;
  border-radius: 10px;
}
.cell-text {
  text-align: center;
  color: #323334;
  font-size: 13px;
  margin-top: 12px;
}
</style>
