<template>
  <v-content>
    <v-container fluid>
      <v-row class="mb-6" no-gutters :color="$vuetify.dark ? 'primary darken-1' : 'primary'">
        <v-col cols="0" xl="4" lg="3" md="3" sm="2" tag="span"></v-col>
        <v-col>
          <v-hover>
            <v-avatar size="65" v-ripple style="cursor: pointer">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
          </v-hover>

          <p class="text-left mt-4 headline" :class="textColor">Hello, Brendan.</p>
          <p class="body-2" :class="textColor">
            This is a daily plot
            <br />You have 10 tasks to do today
          </p>

          <v-card class="mt-10" color="primary" flat shaped outlined tile>
            <p class="text-capitalize font-weight-medium pa-0 ma-0">Folders</p>
          </v-card>

          <v-chip-group column>
            <v-chip label outlined pill v-for="(item, index) in 4" :key="index">
              <v-icon left>mdi-folder</v-icon>Folder Name
            </v-chip>
          </v-chip-group>

          <!--  -->

          <v-card class="mt-10" color="primary" flat shaped outlined tile>
            <p class="text-capitalize font-weight-medium pa-0 ma-0">Recent</p>
          </v-card>

          <v-container class="pa-0">
            <v-row dense>
              <v-col cols="12" sm="6" md="6" lg="6" xl="4" v-for="(item, index) in 3" :key="index">
                <v-card :ripple="can_ripple" hover shaped @click="openFolder">
                  <v-card-title
                    class="px-1 pt-1 mb-12"
                    @click="can_ripple = false"
                    @mouseover="can_ripple = false"
                    @mouseout="can_ripple = true"
                  >
                    <v-row dense>
                      <v-col cols="6">
                        <v-menu
                          ref="menu"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          transition="scale-transition"
                          offset-y
                          max-width="290px"
                          min-width="290px"
                        >
                          <template v-slot:activator="{ on }">
                            <v-btn icon class="float-left" v-on="on">
                              <v-icon>mdi-alarm</v-icon>
                            </v-btn>
                          </template>
                          <v-time-picker
                            v-model="time"
                            full-width
                            @click:minute="$refs.menu.save(time)"
                          ></v-time-picker>
                        </v-menu>
                      </v-col>

                      <v-col cols="6">
                        <v-menu bottom left>
                          <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" class="float-right">
                              <v-icon>mdi-dots-vertical</v-icon>
                            </v-btn>
                          </template>

                          <v-list>
                            <v-list-item
                              v-for="(item, i) in optionmenu"
                              :key="i"
                              style="cursor: pointer"
                              v-ripple
                            >
                              <v-list-item-title>{{ item.text }}</v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                      </v-col>
                    </v-row>
                  </v-card-title>

                  <v-spacer></v-spacer>

                  <v-card-subtitle class="px-3 pb-0 font-weight-light">
                    <small>8 Tasks</small>
                  </v-card-subtitle>

                  <v-card-text class="px-3 pb-1 headline font-weight-normal text--white">Personal</v-card-text>

                  <v-card-actions>
                    <v-progress-linear
                      height="4"
                      bottom
                      rounded
                      v-model="valueDeterminate"
                      color="accent"
                    ></v-progress-linear>
                    <small class="pl-2" v-html="valueDeterminate + '%'"></small>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
          <!--  -->
        </v-col>
        <v-col cols="0" xl="4" lg="3" md="3" sm="2" tag="span"></v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",

  data: () => ({
    can_ripple: true,
    makeTime: false,
    time: null,
    valueDeterminate: Math.floor(Math.random() * 100),
    optionmenu: [{ text: "Edit" }, { text: "Delete" }]
  }),

  computed: {
    textColor() {
      return this.$vuetify.theme.dark ? "white--text" : "white--text";
    }
  },

  methods: {
    openFolder() {
      Event.$emit("read-folder-modal");
    }
  }
};
</script>
