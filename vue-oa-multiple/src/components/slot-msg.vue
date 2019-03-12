<template>
  <section class="msg">
    <p class="msg-content" :class="className" @click="isShowDetail = !isShowDetail">{{msg}}</p>
    <p v-show="isShowDetail">{{msgDetail}}</p>
  </section>
</template>

<script>
export default {
  name: "slot-msg",
  props: {
    msg: String,
    msgType: String,
    msgDetail: String
  },
  computed: {
    className: function() {
      if (this.msgType === "error") return "msg-error";

      return "msg-primary";
    }
  },
  data() {
    return {
      isShowDetail: false
    };
  }
};
</script>

<style lang="scss" scoped>
.msg {
  box-sizing: border-box;
  margin: 0;
  padding: 10px 15px;

  .msg-content {
    padding: 10px 15px;
  }

  .msg-error {
    border-radius: 5px;
    border: 1px solid $colors-danger;
    background-color: #f3beb8; //$colors-warning;
  }
  .msg-normal {
    background-color: $colors-primary;
  }
}
</style>
