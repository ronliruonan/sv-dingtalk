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
    >
      <slot-msg
        v-if="apiError.isAvailable"
        :msgType="'error'"
        :msg="apiError.msg"
        :msgDetail="apiError.detail"
      ></slot-msg>
    </jt-list>
  </section>
</template>

<script>
import { getTodoList } from "../../lib/task-web.js";

import JtList from "@/components/jt-list.vue";
import slotMsg from "../../components/slot-msg.vue";

import { pullToRefresh } from "../../lib/util";
import logger from "../../lib/logger.js";

export default {
  name: "todo",
  components: { JtList, slotMsg },
  data() {
    return {
      items: [],
      hasMore: false,
      jtListOptions: {
        jtFrom: "createUserName",
        jtTime: "createTime"
      },
      pageNo: -1,
      pageSize: 10,
      apiError: {
        isAvailable: false,
        msg: "网络请求异常，请稍后重试",
        detail: null
      }
    };
  },
  watch: {
    pageNo: function(v1) {
      if (v1 === 1) return;
      this.pageFunc(this.pageNo, this.pageSize);
    }
  },
  mounted: function() {
    this.init();

    pullToRefresh(this.init);
  },
  methods: {
    async init(isRefresh = false, txt = "待办列表：刷新完成") {
      this.pageNo = 1;

      await this.pageFunc(this.pageNo, this.pageSize, isRefresh);
      if (isRefresh) {
        // eslint-disable-next-line
        dd.device.notification.toast({
          icon: "success",
          text: txt
        });
      }
    },
    async pageFunc(pageNo = 1, pageSize = 0, isRefresh = false) {
      try {
        const response = await getTodoList(null, {
            pageNo: pageNo,
            pageSize: pageSize
          }),
          data = response.data;

        if (data.success !== true) return logger.warn(data.error);

        const {
          items: dataItems,
          totalCount: dataTotalCount
        } = data.result.items;

        isRefresh ? (this.items = dataItems) : this.items.push(...dataItems);
        this.hasMore = this.items.length < dataTotalCount;

        this.apiError.isAvailable = false;
      } catch (error) {
        this.apiError = {
          ...this.apiError,
          ...{
            isAvailable: true,
            detail: JSON.stringify(error)
          }
        };
      }
      //   getTodoList(null, {
      //     pageNo: this.pageNo,
      //     pageSize: this.pageSize
      //   })
      //     .then(response => {
      //       const data = response.data;
      //       if (data.success === true) {
      //         this.items.push(...data.result.items.items);
      //         this.hasMore = this.items.length < data.result.items.totalCount;

      //         this.apiError.isAvailable = false;
      //       }
      //     })
      //     .catch(error => {
      //       this.apiError = {
      //         ...this.apiError,
      //         ...{
      //           isAvailable: true,
      //           detail: JSON.stringify(error)
      //         }
      //       };
      //     });
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
