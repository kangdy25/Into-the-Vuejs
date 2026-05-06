import HomeView from "@/views/HomeView.vue";
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [{ path: "/", component: HomeView }];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
