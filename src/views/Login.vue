<template>
  <v-content>
    <v-container fluid id="app-auth-container" class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="10" md="6">
          <v-tabs
            background-color="accent accent-4"
            color="white"
            class="elevation-2"
            centered
            grow
          >
            <v-tabs-slider></v-tabs-slider>

            <v-tab :href="`#tab-login`">Login</v-tab>
            <v-tab :href="`#tab-signup`">Sign Up</v-tab>

            <v-tab-item :value="`tab-login`">
              <app-login></app-login>
            </v-tab-item>

            <v-tab-item :value="`tab-signup`">
              <app-signup></app-signup>
            </v-tab-item>
          </v-tabs>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    tabs: 2
  }),

  watch: {
    $route: {
      handler: (to, from) => {
        console.log(to);
        console.log(this.$store.state.user);
      },
      deep: true, 
      immediate: true
    }
  },

  mounted() {
    Event.$on("isAuthenticated", uid => {
      // this.$router.replace({
      //   name: "profile",
      //   params: { uid }
      // });
    });
  }
};
</script>
