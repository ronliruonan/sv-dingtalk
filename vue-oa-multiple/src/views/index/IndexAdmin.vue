<template>
  <div class="index-admin">
    <div class="admin">
      <img class="admin-image" :src="hello.icon">
      <div class="admin-hello">{{hello.title}}</div>
      <div class="admin-edit" v-if="dingUserInfo.isAdmin" @click="openAdmin">编辑分组</div>
    </div>
  </div>
</template>

<script>
import logger from "../../lib/logger.js";
import dingWeb from "../../lib/ding-web.js";
import { openLink } from "../../lib/util";
let lock = true;

export default {
  name: "admin",
  props: ["dingUserId", "corpId"],
  computed: {
    hello: function() {
      const dateTime = new Date().getHours();
      const isAdmin = this.dingUserInfo.isAdmin;
      const name = this.dingUserInfo.name;
      const hi = {
        title: "早上好，",
        icon: () => import("../../assets/morning.jpg")
      };

      if (!name) return hi;

      if (dateTime >= 5 && dateTime <= 12) {
        hi.title = isAdmin ? "早上好，管理员，" + name : "早上好，" + name;
      } else if (dateTime > 12 && dateTime <= 18) {
        hi.title = isAdmin ? "下午好，管理员，" + name : "下午好，" + name;
        hi.icon = () => import("../../assets/noon.jpg");
      } else {
        hi.title = isAdmin ? "晚上好，管理员，" + name : "晚上好，" + name;
        hi.icon = () => import("../../assets/night.jpg");
      }

      return hi;
    }
  },
  watch: {
    dingUserId: function() {
      this.getUserInfo();
    }
  },
  data: function() {
    return {
      dingUserInfo: {
        isAdmin: false,
        name: ""
      }
    };
  },
  mounted: function() {
    if (this.dingUserId) {
      this.getUserInfo();
    }
  },
  methods: {
    openAdmin: function() {
      if (lock) {
        lock = false;
        const adminUrl = `https://h5.dingtalk.com/industry_versatility/get.html?dd_progress=false&corpId=${
          this.corpId
        }`;

        openLink(adminUrl, function() {
          lock = true;
        });
      }
    },
    getUserInfo: function() {
      // 根据dingUserId获取用户详细信息
      dingWeb
        .getUserInfo({
          url: "/api/users/" + this.dingUserId
        })
        .then(response => {
          const data = response.data;
          if (data.errcode === 0) {
            this.dingUserInfo = { ...this.dingUserInfo, ...data };
          }
        })
        .catch(error => {
          logger.error(`获取钉钉用户信息 Error：${JSON.stringify(error)}`);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.index-admin {
  width: 100%;
  height: 30px;
  //   background-color: #fff;
  //   border-bottom-color: #e4e4e4;
  //   border-bottom-style: solid;
  //   border-bottom-width: 1px;
}
.admin {
  position: relative;
  padding-left: 12.5px;
  padding-right: 12.5px;
  //   height: 44px;
}
.admin-image {
  width: 16.5px;
  height: 16.5px;
  position: absolute;
  top: 8.5px;
}
.admin-hello {
  font-size: 14px;
  color: #999;
  float: left;
  padding-left: 26px;
  padding-top: 10.5px;
}
.admin-edit {
  font-size: 14px;
  color: #38adff;
  position: absolute;
  right: 12px;
  top: 10.5px;
}
</style>
