<template>
  <v-footer app fixed light inset :padless="true">
    <v-speed-dial
      absolute
      fab
      bottom
      right
      color="accent"
      v-model="fab"
      :direction="'top'"
      :transition="'slide-x-transition'"
    >
      <!-- open-on-hover -->

      <template v-slot:activator>
        <v-btn v-model="fab" color="accent" fab>
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-plus</v-icon>
        </v-btn>
      </template>

      <v-tooltip left>
        <template v-slot:activator="{ on }">
          <v-btn fab dark small color="indigo" v-on="on" @click="toggleTaskModal">
            <v-icon>mdi-file-outline</v-icon>
          </v-btn>
        </template>
        <span>Add task</span>
      </v-tooltip>

      <v-tooltip left>
        <template v-slot:activator="{ on }">
          <v-btn fab dark small color="green" v-on="on" @click="toggleFolderModal">
            <v-icon>mdi-folder-outline</v-icon>
          </v-btn>
        </template>
        <span>Create Folder</span>
      </v-tooltip>
    </v-speed-dial>
  </v-footer>
</template>

<script>
import footerMixin from "./../plugins/footer-mixin";
export default {
  methods: {
    toggleFolderModal() {
      Event.$emit("toggle-folder-modal");
    },

    toggleTaskModal() {
      Event.$emit("toggle-task-modal");
    }
  },

  mixins: [footerMixin]
};
</script>