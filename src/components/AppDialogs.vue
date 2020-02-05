<template>
  <span>
    <!-- Create a new Task Folder -->
    <v-dialog v-model="folderModal" max-width="300px">
      <v-card>
        <v-card-title>
          <span class="headline">Create New Folder</span>
        </v-card-title>

        <v-card-text>
          <v-text-field
            label="New Folder"
            v-model="folder.name"
            v-on:keyup.enter="createFolder"
            v-focus="true"
          ></v-text-field>

          <small class="grey--text">* Click Enter to save.</small>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text color="primary" @click="createFolder">Create Folder</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Add a new Task -->
    <v-dialog v-model="taskModal" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Add a new Task</span>
        </v-card-title>

        <v-card-text>
          <v-text-field
            label="Title*"
            hint="Make it simple!"
            persistent-hint
            required
            v-on:keyup.enter="createTask"
            v-focus
            v-model="task.title"
          ></v-text-field>
        </v-card-text>

        <v-card-text>
          <v-textarea
            label="Description"
            hint="Description is optional..."
            name="description"
            rows="2"
            auto-grow
            v-model="task.description"
          ></v-textarea>
        </v-card-text>

        <v-card-text>
          <small class="grey--text">* Click Enter to save.</small>
          <br />
          <small class="grey--text">* indicates required field</small>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text color="primary" @click="createTask">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Open a folder -->

    <v-row justify="center">
      <v-dialog
        v-model="openFolderModal"
        fullscreen
        hide-overlay
        transition="scale-transition"
        origin="center center"
      >
        <v-card>
          <v-toolbar light color="transparent" dense elevation="0">
            <v-btn icon light @click="openFolderModal = false">
              <v-icon class="d-md-none">mdi-arrow-left</v-icon>
              <v-icon class="d-none d-md-block">mdi-close</v-icon>
            </v-btn>
            <!-- <v-toolbar-title>Settings</v-toolbar-title> -->
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn light text class="d-none d-md-block" @click="openFolderModal = false">Delete</v-btn>

              <v-menu left bottom nudge-bottom="15" nudge-left="30">
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on" class="d-md-none">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item :ripple="true">
                    <v-list-item-title @click="openFolderModal = false">Done</v-list-item-title>
                  </v-list-item>
                  <v-list-item :ripple="true">
                    <v-list-item-title>Delete</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-toolbar-items>
          </v-toolbar>
          <!--  -->
          <v-list three-line subheader class="pa-md-3 pa-lg-3 pa-xl-3">
            <v-subheader>
              <v-btn icon class="float-left" color="primary" :ripple="false" outlined>
                <v-icon>mdi-alarm</v-icon>
              </v-btn>
            </v-subheader>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>8 Tasks</v-list-item-subtitle>
                <v-list-item-title class="font-weight-normal display-1">Custom</v-list-item-title>
                <v-list-item-subtitle>
                  <v-row>
                    <v-col cols="10" sm="10" md="11" lg="11" xl="11" align-self="center">
                      <v-progress-linear
                        height="6"
                        bottom
                        rounded
                        v-model="valueDeterminate"
                        color="accent"
                      ></v-progress-linear>
                    </v-col>
                    <v-col cols="2" sm="2" md="1" lg="1" xl="1">
                      <small class="pl-2 float-right" v-html="valueDeterminate + '%'"></small>
                    </v-col>
                  </v-row>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <!--  -->
          <v-divider></v-divider>
          <!--  -->
          <v-list three-line subheader class="pa-md-3 pa-lg-3 pa-xl-3">
            <v-subheader>Previous - Thu</v-subheader>
            <div class="mt-n4">
              <task v-for="(item, index) in 5" :key="index"></task>
            </div>
          </v-list>

          <v-list three-line subheader class="pa-md-3 pa-lg-3 pa-xl-3">
            <v-subheader>Previous - Fri</v-subheader>
            <task v-for="(item, index) in 5" :key="index"></task>
          </v-list>
        </v-card>
      </v-dialog>
    </v-row>

    <!-- Notify Snackbar -->
    <v-snackbar v-model="snackbar" right bottom :timeout="4000" v-if="snackBar_msg !== null">
      {{ snackBar_msg }}
      <v-btn color="white" text v-show="snackBar_actionMsg !== null">{{ snackBar_actionMsg }}</v-btn>
    </v-snackbar>
  </span>
</template>

<script>
import footerMixin from "./../plugins/footer-mixin";
export default {
  data: () => ({
    folder: {
      name: ""
    },
    task: {
      title: "",
      description: ""
    },
    openFolderModal: false,
    valueDeterminate: 37
  }),

  methods: {
    createFolder() {
      this.folderModal = false;
      this.$firestore
        .collection("1234-user_id")
        .doc(this.folder.name)
        .set({
          exists: true
        })
        .then(function() {
          this.showSnackbar("Folder created!");
        })
        .catch(function(error) {
          console.error("Error creating folder ", error);
        });
    },

    createTask() {
      this.taskModal = false;
    }
  },

  mounted() {
    Event.$on(
      "toggle-folder-modal",
      () => (this.folderModal = !this.folderModal)
    );
    Event.$on("toggle-task-modal", () => (this.taskModal = !this.taskModal));
    Event.$on(
      "read-folder-modal",
      () => (this.openFolderModal = !this.openFolderModal)
    );
  },
  mixins: [footerMixin]
};
</script>