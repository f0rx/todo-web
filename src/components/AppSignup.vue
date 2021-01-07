<template>
  <v-card class="elevation-12">
    <v-card-text>
      <v-form>
        <v-text-field
          label="Name"
          v-model="form.name"
          prepend-icon="mdi-account"
          type="text"
          required
          autofocus
          v-on:keyup.enter="register"
        />

        <v-text-field
          label="Email"
          v-model="form.email"
          prepend-icon="mdi-email"
          type="text"
          required
          v-on:keyup.enter="register"
        />

        <v-text-field
          label="Password"
          v-model="form.password"
          prepend-icon="mdi-lock"
          type="password"
          required
          v-on:keyup.enter="register"
        />
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <v-btn color="primary accent-1 ma-2" outlined tile dark @click="register">Sign up</v-btn>
    </v-card-actions>

    <!-- Notify Snackbar -->
    <v-snackbar v-model="snackbar" right bottom :timeout="4000" v-if="snackBar_msg !== null">
      {{ snackBar_msg }}
      <v-btn color="white" text v-show="snackBar_actionMsg !== null">{{ snackBar_actionMsg }}</v-btn>
    </v-snackbar>
  </v-card>
</template>

<script>
import authMixin from "../plugins/auth-mixin";
export default {
  data: () => ({
    form: {
      name: null,
      email: null,
      password: null
    }
  }),
  mixins: [authMixin]
};
</script>
