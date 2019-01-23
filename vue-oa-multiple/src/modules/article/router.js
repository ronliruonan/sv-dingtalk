import Vue from 'vue'
import Router from 'vue-router'
import Article from '../../views/Article.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Article
        }
    ]
})
