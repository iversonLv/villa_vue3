import { createWebHistory, createRouter } from "vue-router";
import Villas from "../views/Villas.vue";
import Villa from "../views/Villa.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "Villas",
    component: Villas,
  },
  {
    path: "/villa/:id",
    name: "Villa",
    component: Villa,
  },
  {
    path: "/:catchAll(.*)",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;