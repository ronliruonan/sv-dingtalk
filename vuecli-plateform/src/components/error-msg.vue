<template>
  <pre>{{errmsg | json}}</pre>
</template>

<script>
export default {
  name: "error-msg",
  props: ["errmsg"],
  filters: {
    json: function(value) {
      if (!value) return "";
      if (typeof value === "string") return value;
      return JSON.stringify(value);
    }
  },
  data: function() {
    return {};
  }
};
</script>
