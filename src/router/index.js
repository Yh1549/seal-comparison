import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../view/Home.vue"),
    // component: "<h1>this is home</h1>",
  },
  {
    path: "/",
    name: "test",
    component: () => import("../view/Result.vue"),
    // component: "<h1>this is home</h1>",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
// import { createRouter, createWebHistory } from "vue-router";
// import Home from "../view/Home.vue";
// // import About from "./views/About.vue";

// export const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     { path: "/", component: Home },
//     // { path: "/about", component: About },
//   ],
// });
