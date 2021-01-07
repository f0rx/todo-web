import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import MyPlugin from "./plugins/default-plugin";
window.axios = require("axios");

/*******************************************
 * vForm npm
 *
 * NPM package for Vuejs form validation
 */
// import { Form, HasError, AlertError } from "vform";
// Vue.component(HasError.name, HasError);
// Vue.component(AlertError.name, AlertError);

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