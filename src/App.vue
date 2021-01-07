<template>
  <v-app :style="{background: $vuetify.theme.themes[getTheme].primary}">
    <router-view></router-view>

    <app-footer></app-footer>

    <app-dialogs></app-dialogs>

    <!-- <app-bottom-nav></app-bottom-nav>~ -->
  </v-app>
</template>

<script>
import mixin from "./plugins/main-mixin";

export default {
  name: "App",

  mixins: [mixin],

  computed: {
    getTheme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  },

  mounted() {
    let data = {
      name: "Brendan Ejike C.",
      level: 300,
      verified: true
    };

    // const entries = Object.entries(data);

    // for (const [index, value] of entries) {
    //   console.log({ [index]: value });
    // }
  }
};
</script>
