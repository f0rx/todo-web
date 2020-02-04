<template>
  <v-bottom-navigation
    app
    grow
    class="d-flex align-center"
    color="accent"
    :value="0"
    :style="{background: $vuetify.theme.themes[getTheme].secondary}"
  >
    <v-btn height="100%">
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn height="100%">
      <span>New</span>
      <v-icon>mdi-check</v-icon>
    </v-btn>

    <v-btn height="100%">
      <span>Account</span>
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  computed: {
    getTheme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  }
};
</script>