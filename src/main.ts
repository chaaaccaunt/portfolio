import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { LayOuts } from "@/layout";
import { UI } from "@/components/UI";

const app = createApp(App);

LayOuts.forEach((layout) => app.component(layout.name, layout));
UI.forEach((ui) => app.component(ui.name, ui));

app.use(router);
app.mount("#app");
