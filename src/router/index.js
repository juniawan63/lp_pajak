import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: () => import("@/views/LandingPage.vue")},
  { path: "/produk", name: "Produk", component: () => import("@/views/Produk.vue")},
  { path: "/deskripsi", name: "Detail", component: () => import("@/views/Deskripsi.vue")},
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: "smooth" };
    }
  },
});

export default router;
