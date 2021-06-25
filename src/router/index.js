import { createRouter, createWebHistory } from "vue-router";
import Intro from "../screens/Intro.vue";

const routes = [
  {
    path: "/",
    name: "Intro",
    component: Intro,
    meta: {
      title: "Portfolio | 邵德玉",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
