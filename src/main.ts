import { createApp } from "vue";
import router from "./router";
import pinia from "./store";
import App from "./App.vue";

import "./styles/index.scss";

createApp(App).use(router).use(pinia).mount("#app");
