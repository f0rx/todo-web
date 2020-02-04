import Vue from "vue";
import Vuetify from "vuetify/lib";

const vuetifyOpts = {
  theme: {
    dark: false,
    icons: {
      iconfont: "mdi", // default - only for display purposes
      values: {
        alarm: "mdi-alarm"
      }
    },
    themes: {
      light: {
        primary: "#e67169",
        secondary: "#eeeeee",
        accent: "#03b5aa",
        anchor: "#0c1821",
        error: "#FF5252",
        success: "#4CAF50",
        info: "#2196F3",
        warning: "#FFC107"
      },
      dark: {
        primary: "#20282b",
        secondary: "#161b1d",
        accent: "#13c199",
        error: "#FF5252",
        success: "#4CAF50",
        info: "#2196F3",
        warning: "#FB8C00"
      }
    }
  }
};

Vue.use(Vuetify, vuetifyOpts);

export default new Vuetify(vuetifyOpts);
