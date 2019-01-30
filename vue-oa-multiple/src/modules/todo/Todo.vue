<template>
  <section id="todo">
    <jt-list
      :items="items"
      :item-open="{
        newLink: true
        }"
      :has-more="hasMore"
      :jt-options="jtListOptions"
      @page-more="pageNo += 1"
    ></jt-list>
  </section>
</template>

<script>
import { getTodoList } from "../../lib/task-web.js";

import JtList from "@/components/jt-list.vue";

export default {
  name: "todo",
  components: { JtList },
  data: function() {
    return {
      items: [],
      hasMore: false,
      jtListOptions: {
        jtFrom: "createUserName",
        jtTime: "createTime"
      },
      pageNo: -1,
      pageSize: 10
    };
  },
  watch: {
    pageNo: function() {
      this.pageFunc();
    }
  },
  mounted: function() {
    this.pageNo = 1;
  },
  methods: {
    pageFunc: function() {
      getTodoList(null, {
        pageNo: this.pageNo,
        pageSize: this.pageSize
      })
        .then(response => {
          const data = response.data;
          if (data.success === true) {
            this.items.push(...data.result.items.items);
            this.hasMore = this.items.length < data.result.items.totalCount;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#todo {
  border-top: 1px solid #efefef;
  background-color: #fff;
}
</style>
