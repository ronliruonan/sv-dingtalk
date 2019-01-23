<template>
  <jt-list
    :items="items"
    :dict="dict"
    :item-open="{
        newLink: false,
        curLink: {
            pathName:'article'
        }
    }"
    :has-more="hasMore"
    :jt-options="jtListOptions"
    @page-more="pageNo += 1"
  ></jt-list>
</template>

<script>
import { getDispatchList } from "../../lib/portal-web.js";
import JtList from "../../components/jt-list.vue";

export default {
  name: "notice-index",
  components: { JtList },
  data: function() {
    return {
      items: [],
      dict: [],
      hasMore: false,
      jtListOptions: {
        jtFrom: "columnPlateId",
        jtTime: "releaseTime"
      },
      pageNo: -1,
      pageSize: 5,
      searchTitle: ""
    };
  },
  watch: {
    pageNo: function() {
      this.pageFunc();
    }
  },
  created: function() {
    const localDictStr = localStorage.getItem("columnplates"),
      localDict = JSON.parse(localDictStr);
    this.dict = Array.isArray(localDict) ? localDict : [];
  },
  mounted: function() {
    this.pageNo = 0;
  },
  methods: {
    pageFunc: function() {
      getDispatchList(this.searchTitle, {
        pageNo: this.pageNo,
        pageSize: this.pageSize
      })
        .then(response => {
          const data = response.data;
          if (data.success === true) {
            this.items.push(...data.result.items.items);
            this.hasMore = this.items.length < data.result.items.totalCount;

            if (data.result.columnPlates) {
              this.dict = data.result.columnPlates;
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
