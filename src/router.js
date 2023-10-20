import VueRouter from "vue-router";
import HomePage from "./pages/HomePage";
import ApartmentPage from "./pages/ApartmentPage";

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "homepage",
  },
  {
    path: "/apartment",
    component: ApartmentPage,
    name: "apartment",
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
