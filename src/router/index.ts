import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "default" },
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    meta: { layout: "main" },
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/path",
    name: "Path",
    meta: { layout: "main" },
    component: () => import(/* webpackChunkName: "Path" */ "../views/Path.vue"),
  },
  {
    path: "/contacts",
    name: "Contacts",
    meta: { layout: "main" },
    component: () => import(/* webpackChunkName: "Contacts" */ "../views/Contacts.vue"),
  },
  {
    path: "/404",
    name: "NotFound",
    meta: { layout: "main" },
    component: () => import(/* webpackChunkName: "Contacts" */ "../views/NotFound.vue"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "",
  linkExactActiveClass: "navbar__exact-active",
});

router.beforeEach((to, from) => {});

export default router;
