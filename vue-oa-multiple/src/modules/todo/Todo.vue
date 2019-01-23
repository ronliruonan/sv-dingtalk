<template>
  <section id="todo">
    <jt-list :items="items"></jt-list>
  </section>
</template>

<script>
import JtList from "@/components/jt-list.vue";

export default {
  name: "todo",
  components: { JtList },
  data: function() {
    return {
      items: [
        {
          title:
            "读你度你兜兜风大师姐啊第三方课课练发读你度你兜兜风大师姐啊第三方课课练发读你度你兜兜风大师姐啊第三方课课练发读你度你兜兜风大师姐啊第三方课课练发",
          from: "督办系统",
          time: "2018-1-2"
        },
        {
          title:
            "读你度你兜兜风大师姐啊第三方课课练发读你度你兜兜风大师姐啊第三方课课练发读你度你兜兜风大师姐啊第三方课课练发读你度你兜兜风大师姐啊第三方课课练发",
          from: "督办系统",
          time: "2018-1-2"
        },
        {
          title:
            "读你度你兜兜风大师姐啊第三方课课练发读你度你兜兜风大师姐啊第三方课课练发读你度你兜兜风大师姐啊第三方课课练发读你度你兜兜风大师姐啊第三方课课练发",
          from: "督办系统",
          time: "2018-1-2"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
