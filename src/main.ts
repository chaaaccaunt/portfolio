import { createApp, Component } from "vue";
import App from "./App.vue";
import router from "./router";

import { LayOuts } from "@/layout";

const app = createApp(App);

LayOuts.forEach((comp) => app.component(comp.name, comp));

app.use(router);
app.mount("#app");
