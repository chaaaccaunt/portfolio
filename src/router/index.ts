import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "default" },
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/skills",
    name: "Skills",
    meta: { layout: "main" },
    component: () => import(/* webpackChunkName: "skills" */ "../views/Skills.vue"),
  },
  {
    path: "/path",
    name: "Path",
    meta: { layout: "main" },
    component: () => import(/* webpackChunkName: "skills" */ "../views/Path.vue"),
  },
  {
    path: "/contacts",
    name: "Contacts",
    meta: { layout: "main" },
    component: () => import(/* webpackChunkName: "skills" */ "../views/Contacts.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "",
  linkExactActiveClass: "navbar__exact-active",
});

export default router;
