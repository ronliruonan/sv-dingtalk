<template>
  <section class="index-notice">
    <div
      style="padding:15px 15px 10px 15px; border-bottom:1px solid #efefef;"
      v-for="(item, index) in items"
      :key="index"
    >
      <p style="color:#191F25;">{{item.title}}</p>
      <div style="margin-top:10px;font-size:14px;display:flex;color:#7A7D81;">
        <p style="flex:1; text-align:left;color:#7A7D81;"><img src="../../assets/pingtai2.png" style="height:14px;"/> {{item.from}}</p>
        <p style="flex:1; text-align:right;color:#7A7D81;">{{item.time}}</p>
      </div>
    </div>
    <p style="padding:10px;text-align:center;">查看更多</p>
  </section>
</template>

<script>
export default {
  name: "index-notice",
  data: function() {
    return {
      items: [
        {
          title: "中水换人【xxxx】xxx号*关于集团总部福分管理员员人名通知",
          from: "人力企业管理",
          time: "2018-11-03"
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

<style lang="scss" scoped>
.index-notice {
  font-size: 15px;
}
</style>
