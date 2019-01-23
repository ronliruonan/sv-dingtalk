import Vue from 'vue'
import Notice from './Notice.vue'
import router from './router'

new Vue({
    router,
    render: h => h(Notice)
}).$mount('#notice')
