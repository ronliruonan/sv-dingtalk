import Vue from 'vue'
import Article from './Article.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Article)
}).$mount('#article')
