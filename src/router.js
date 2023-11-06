import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import ApartmentPage from "./pages/ApartmentPage.vue";
import ErrorPage from "./pages/ErrorPage.vue";
import LoginPage from "./pages/LoginPage.vue";
import RegistrationPage from "./pages/RegistrationPage.vue";

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
  },
  {
    path: "/register",
    component: RegistrationPage,
    name: "registration-page",
  },
];

const router = createRouter({
  history: createWebHistory("/gohome-vue-project/"),
  routes: routes,
});

export default router;
