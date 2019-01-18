<template>
  <jt-list :items="items" :go-open="'notice'"></jt-list>
</template>

<script>
// @ is an alias to /src
import jtList from "../../components/jt-list.vue";

export default {
  name: "index-notice",
  components: { jtList },
  data: function() {
    return {
      items: [
        {
          title:
            "中水换人【xxxx】xxx号*关于集团总部福分管理员员人名通知中水换人【xxxx】xxx号*关于集团总部福分管理员员人名通知中水换人【xxxx】xxx号*关于集团总部福分管理员员人名通知",
          from: "人力企业管理",
          time: "2018-11-03",
          url: "https://www.baidu.com"
        },
        {
          title: "中水换人【xxxx】xxx号*关于集团总部福分管理员员人名通知",
          from: "人力企业管理",
          time: "2018-12-11"
        },
        {
          title: "中水换人【xxxx】xxx号*关于集团总部福分管理员员人名通知",
          from: "人力企业管理",
          time: "2019-01-01"
        },
        {
          title: "中水换人【xxxx】xxx号*关于集团总部福分管理员员人名通知",
          from: "人力企业管理",
          time: "2019-01-01"
        },
        {
          title: "中水换人【xxxx】xxx号*关于集团总部福分管理员员人名通知",
          from: "人力企业管理",
          time: "2019-01-01"
        }
      ]
    };
  }
};
</script>
