import { createRouter, createWebHistory } from "vue-router";

import DashboardView from "@/views/DashboardView.vue";
import TablesView from "@/views/TablesView.vue";
import BillingView from "@/views/BillingView.vue";
import RTLView from "@/views/RTLView.vue";
import ProfileView from "@/views/ProfileView.vue";
import SigninView from "@/views/SigninView.vue";
import SignupView from "@/views/SignupView.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardView,
  },
  {
    path: "/tables",
    name: "Tables",
    component: TablesView,
  },
  {
    path: "/billing",
    name: "Billing",
    component: BillingView,
  },
  {
    path: "/rtl",
    name: "RTL",
    component: RTLView,
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfileView,
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: SigninView,
  },
  {
    path: "/sign-up",
    name: "Sign Up",
    component: SignupView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
