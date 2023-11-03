import App from "./App.vue";
import { createApp } from "vue";
import "./assets/scss/index.scss";

import router from "./router";

const app = createApp(App);

app.use(router);
app.mount("#app");
