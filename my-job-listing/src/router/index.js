import { createRouter, createWebHistory } from "vue-router";
import Jobs from "../views/Jobs.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/jobs",
      name: "jobss",
      component: Jobs,
    },
  ],
});

export default router;
