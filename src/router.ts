import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: () => import("./views/LandingPage.vue"),
    },
    {
      path: "/log-in",
      name: "log-in",
      component: () => import("./views/LoginPage.vue"),
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: () => import("./views/SignupPage.vue"),
    },
  ],
});

export default router;
