import { createRouter, createWebHistory } from "vue-router";
import { store } from "./store";

const HomePage = () => import("./pages/HomePage.vue");
const ApartmentPage = () => import("./pages/ApartmentPage.vue");
const ErrorPage = () => import("./pages/ErrorPage.vue");
const LoginPage = () => import("./pages/LoginPage.vue");
const RegistrationPage = () => import("./pages/RegistrationPage.vue");
const MyOrdersPage = () => import("./pages/MyOrdersPage.vue");

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "homepage",
  },
  {
    path: "/apartments/:id",
    component: ApartmentPage,
    name: "apartments",
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/:pathMatch(.*)*",
    component: ErrorPage,
    name: "error-page",
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login-page",
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: "/register",
    component: RegistrationPage,
    name: "registration-page",
    meta: {
      hideForAuth: true,
    },
  },

  {
    path: "/orders",
    component: MyOrdersPage,
    name: "my-orders",
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters["isLoggedIn"];

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next({ name: "login-page" });
    }
  }

  if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (isLoggedIn) {
      next({ name: "homepage" });
    }
  }

  next();
});

export default router;
