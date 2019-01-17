<template>
  <section class="index-notice">
    <div
      style="padding:15px; border-bottom:1px solid #efefef;"
      v-for="(item, index) in items"
      :key="index"
    >
      <p style>{{item.title}}</p>
      <div>
        <span>{{item.from}}</span>
        <span>{{item.time}}</span>
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
          title:
            "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
          from: "测试测试测试",
          time: "2018-01-01"
        },
        {
          title:
            "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
          from: "测试测试测试",
          time: "2018-01-01"
        },
        {
          title:
            "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
          from: "测试测试测试",
          time: "2018-01-01"
        },
        {
          title:
            "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
          from: "测试测试测试",
          time: "2018-01-01"
        },
        {
          title:
            "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
          from: "测试测试测试",
          time: "2018-01-01"
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
