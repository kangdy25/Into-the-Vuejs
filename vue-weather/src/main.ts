import "./assets/styles/index.css";
import "./assets/styles/main.scss";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import { createPinia } from "pinia";
import { createNaverMap } from "vue3-naver-maps";

createApp(App)
  .use(router)
  .use(createPinia())
  .use(createNaverMap, {
    clientId: import.meta.env.VITE_WEATHER_CLIENT_KEY,
    enableAiMaps: false,
    category: "ncp",
    subModules: [],
  })
  .mount("#app");
