import VueRouter from "vue-router";
import HomePage from "./pages/HomePage";
import ApartmentPage from "./pages/ApartmentPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "homepage",
  },
  {
    path: "/apartments/:id",
    name: "apartment",
    component: ApartmentPage,
  },

  {
    path: "*",
    component: ErrorPage,
    name: "errorpage",
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login-page",
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
