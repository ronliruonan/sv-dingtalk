import Vue from "vue";
import Vuex from "vuex";
import { UPDATE_DINGUSERINFO } from "./lib/mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    corpId: "",
    dingUserInfo: {
      name: "",
      userId: "",
      isAdmin: false
    }
  },
  mutations: {
    [UPDATE_DINGUSERINFO](state, dingUserInfo) {
      state.dingUserInfo = { ...state.dingUserInfo, dingUserInfo };
    }
  },
  actions: {}
});
