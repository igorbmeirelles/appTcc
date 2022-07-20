import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./registerServiceWorker";
import VueAnalytics from "vue-analytics";
import VueCookies from "vue-cookies";
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: "G-QMPCSNBKK4",
  router,
});

Vue.use(VueCookies, { expires: "2h" });

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
