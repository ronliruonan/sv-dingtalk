<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <banner :bannerMetas="bannerMetas"></banner>
    <admin :user-info="{isAdmin:true, name:' '}" :corp-id="corpId"></admin>
    <applist :applistMetas2="microApps" :corp-id="corpId"></applist>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import banner from "./index/index-banner.vue";
import admin from "./index/index-admin.vue";
import applist from "./index/index-applist.vue";

export default {
  name: "home",
  components: {
    banner,
    admin,
    applist
  },
  data: function() {
    return {
      bannerMetas: [
        {
          imgUrl:
            "https://gw.alicdn.com/tps/TB1o8BqOpXXXXanXVXXXXXXXXXX-750-300.png"
        }
      ],
      microApps: [
        {
          url: "http://mail.dingtalk.com/auth/login",
          appType: 0,
          agentId: "53005361",
          name: "钉邮",
          icon: "https://static.dingtalk.com/media/lALOcrvqOszIzMg_200_200.png",
          appId: -5
        }
      ],
      corpId: "corpid123456"
    };
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
