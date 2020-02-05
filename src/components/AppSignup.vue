<template>
  <v-card class="elevation-12">
    <v-card-text>
      <v-form>
        <v-text-field
          label="Name"
          name="name"
          prepend-icon="mdi-account"
          type="text"
          required
          autofocus
        />

        <v-text-field label="Email" name="login" prepend-icon="mdi-email" type="text" required />

        <v-text-field
          label="Password"
          name="password"
          prepend-icon="mdi-lock"
          type="password"
          required
        />
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <v-btn color="primary">Sign Up</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  //
};
</script>
