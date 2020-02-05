import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// import "./plugins/firebase";
import vuetify from "./plugins/vuetify";
import MyPlugin from "./plugins/default-plugin";

window.Event = new Vue();
Vue.use(MyPlugin);

Vue.config.productionTip = false;

const files = require.context("./", true, /\.vue$/i);
files.keys().map(key =>
  Vue.component(
    key
      .split("/")
      .pop()
      .split(".")[0],
    files(key).default
  )
);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
