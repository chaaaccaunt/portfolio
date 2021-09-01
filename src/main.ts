import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import components from "@/components/UI";

Vue.config.productionTip = false;
// @ts-ignore
components.forEach((comp) => Vue.component(comp.options.name, comp));

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
