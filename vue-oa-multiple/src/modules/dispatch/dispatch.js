import Vue from 'vue'
import Dispatch from './Dispatch.vue'
import router from './router'

new Vue({
    router,
    render: h => h(Dispatch)
}).$mount('#dispatch')
