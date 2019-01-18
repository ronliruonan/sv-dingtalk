import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "index" */ "./views/Index.vue")
    },
    {
      path: "/todo",
      name: "todo",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "todo" */ "./views/Todo.vue"),
      beforeEnter: (to, from, next) => {
        document.title = "移动门户 - 待办事宜";
        next();
      }
    },
    {
      path: "/notice",
      name: "notice",
      component: () =>
        import(/* webpackChunkName: "notice" */ "./views/Notice.vue"),
      beforeEnter: (to, from, next) => {
        document.title = "移动门户 - 公告信息";
        next();
      }
    },
    {
      path: "/dispatch",
      name: "dispatch",
      component: () =>
        import(/* webpackChunkName: "dispatch" */ "./views/Dispatch.vue"),
      beforeEnter: (to, from, next) => {
        document.title = "移动门户 - 发文信息";
        next();
      }
    },
    {
      path: "/article",
      name: "article",
      component: () =>
        import(/* webpackChunkName: "article" */ "./views/Article.vue"),
      beforeEnter: (to, from, next) => {
        document.title = "移动门户 - 详细信息";
        next();
      }
    }
  ]
});
