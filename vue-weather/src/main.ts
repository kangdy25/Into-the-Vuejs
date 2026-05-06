import "./assets/styles/main.scss";
import "./assets/styles/index.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";

createApp(App).use(router).mount("#app");
