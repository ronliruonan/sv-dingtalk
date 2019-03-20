import Vue from 'vue'
import News from './News.vue'
import router from './router'

new Vue({
    router,
    render: h => h(News)
}).$mount('#news')
