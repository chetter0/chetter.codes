import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

let routes = [
  {
    path: "/",
    name: "Hello",
    component: () => import(/* webpackChunkName: "base" */ "@/views/vHello"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import(/* webpackChunkName: "base" */ "@/views/vBlog"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "base" */ "@/views/vAbout"),
  },
  {
    path: "*",
    name: "catchall",
    component: () => import(/* webpackChunkName: "base" */ "@/views/vNotFound"),
  },
];

let router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  //TODO: does there need to be any sort of authentication? Will there be a login portal?
  //console.log(store.getters.isAuthenticated());
  //console.log(store.getters.role);
  //if (to.meta.role) console.log(to.meta.role);
  // if (to.meta.auth) {
  //   if (!store.getters.isAuthenticated()) {
  //     next("/login");
  //   } else if (to.meta.role != null && to.meta.role > store.getters.role) {
  //     next("/index");
  //   } else next();
  // } else next();
  next();
});
export default router;
