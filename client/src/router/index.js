import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/Home.vue"),
  },
  // {
  //   path: "/login",
  //   component: () => import("../views/Login.vue"),
  // },
  // {
  //   path: "/dashboard",
  //   component: () => import("../views/dashBoard/DashBoard.vue"),
  //   children: [
  //     {
  //       path: "/dashboard/category",
  //       component: () => import("../views/dashBoard/Category.vue"),
  //     },
  //     {
  //       path: "/dashboard/article",
  //       component: () => import("../views/dashBoard/Article.vue"),
  //     },
  //   ],
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
