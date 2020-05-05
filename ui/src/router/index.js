import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

let routes = [
  {
    path: "/",
    name: "Hello",
    component: () => import(/* webpackChunkName: "base" */ "@/views/vHello"),
  },
  // {
  //   path: "/posts",
  //   name: "Posts",
  //   component: () =>
  //     import(/* webpackChunkName: "base" */ "@/components/cPosts"),
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () => import(/* webpackChunkName: "base" */ "@/views/vAbout"),
  // },
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
  //console.log(store.getters.isAuthenticated());
  //console.log(store.getters.role);
  if (to.meta.role) console.log(to.meta.role);
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
