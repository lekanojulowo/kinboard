import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/board",
    alias: '/',
    name: "home",
    component: Home,
    children: [{
      path: "task",
      name: "task",
      props: route => ({ columnId: route.params.columnId, taskId: route.params.taskId }),
      component: () =>
        import ( /* webpackChunkName: "task" */ "../views/Task.vue")
    }, ]
  },
  {
    path: "/cart",
    name: "cart",
    // route level code-splitting
    // this generates a separate chunk (cart.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import ( /* webpackChunkName: "cart" */ "../views/Cart.vue")
  },
  {
    path: "/404",
    alias: "*",
    name: "notFound",
    component: () =>
      import ( /* webpackChunkName: "notFound" */ "../views/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;