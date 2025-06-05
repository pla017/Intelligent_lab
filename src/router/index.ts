import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/scicentics",
      name: "scicentics",
      component: () => import("@/views/Sicentics.vue"),
    },
    {
      path: "/resource",
      name: "resource",
      component: () => import("@/views/ResourceCenter.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About.vue"),
    },
  ],
});

export default router;
