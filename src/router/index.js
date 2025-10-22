import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: () => import("@/views/LandingPage.vue")},
  { path: "/produk/security", name: "Produk Keamanan dan Kepatuhan", component: () => import("@/views/Produk/security/ProdukSecurity.vue")},
  { path: "/produk/pajak", name: "Produk Perpajakan Daerah", component: () => import("@/views/Produk/pajak/ProdukPajak.vue")},
  { path: "/produk/host-to-host", name: "Produk Host-to-Host Bank", component: () => import("@/views/Produk/hthb/ProdukHTHB.vue")},
  { path: "/produk/api-gateway", name: "Produk Integrasi Gateway Api", component: () => import("@/views/Produk/gateway/ProdukGateway.vue")},
  { path: "/deskripsi", name: "Detail", component: () => import("@/views/Deskripsi.vue")},
  { path: "/smart-pbb", name: "SmartPbb", component: () => import("@/views/Produk/pajak/SmartPbb.vue")},
  { path: "/bphtb-online", name: "BPHTB", component: () => import("@/views/Produk/pajak/BPHTB.vue")},
  { path: "/siapdol", name: "SIAPDOL", component: () => import("@/views/Produk/pajak/SIAPDOL.vue")},
  { path: "/sippadu", name: "SIPPADU", component: () => import("@/views/Produk/pajak/SIPPADU.vue")},
  { path: "/host-to-host", name: "Host-to-Host Bank", component: () => import("@/views/Produk/hthb/HTHB.vue")},
   { path: "/security", name: "Keamanan dan Kepatuhan", component: () => import("@/views/Produk/security/Security.vue")},
    { path: "/api-gateway", name: "Integrasi Gateway Api", component: () => import("@/views/Produk/gateway/ApiGateway.vue")},
  
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
