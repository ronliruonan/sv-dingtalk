<template>
  <div class="grid">
    <!-- v-if="microApps" -->
    <div class="cell" v-bind:key="item.agentId" v-for="item in meta">
      <single-app v-bind:item="item"></single-app>
    </div>
    <!-- <div class="cell" v-if="homeGroups" v-bind:key="item.agentId" v-for="item in meta">
            <complex-app v-bind:item="item"></complex-app>
    </div>-->
  </div>
</template>

<script>
import singleApp from "./singleApp.vue";
import complexApp from "./complexApp.vue";

export default {
  name: "grid",
  props: ["meta", "corpId", "microApps", "homeGroups"],
  components: {
    singleApp: singleApp,
    complexApp: complexApp
  },
  data: function() {
    return {
    };
  }
};
</script>

<style>
.grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.cell {
  width: 25%;
  position: relative;
  margin-bottom: 20px;
}
</style>
