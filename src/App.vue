<template>
  <v-app :style="{background: $vuetify.theme.themes[getTheme].primary}">
    <router-view></router-view>

    <app-footer></app-footer>

    <app-dialogs></app-dialogs>

    <!-- <app-bottom-nav></app-bottom-nav>~ -->
  </v-app>
</template>

<script>
import colors from "vuetify/es5/util/colors";
export default {
  name: "App",

  data: () => ({
    //
  }),

  computed: {
    getTheme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  },

  mounted() {
    //
  }
};
</script>
