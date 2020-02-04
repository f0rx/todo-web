<template>
  <div>
    <v-checkbox
      class="px-3 my-1 py-3"
      append-icon="mdi-alarm"
      indeterminate
      hide-details
      v-ripple="{ class: 'grey--text', center: true }"
      @click="snackbar = true"
    >
      <template v-slot:label>Meet Clients</template>
    </v-checkbox>

    <!-- Date Picker -->
    <v-dialog ref="dialog" v-model="date_picker_modal" :return-value.sync="date" width="290px">
      <template v-slot:activator="{ on }">
        <!-- Activator -->
        <v-snackbar v-model="snackbar" bottom :timeout="8000" v-on="on">
          Reschedule?
          <v-btn color="white" text>Yes</v-btn>
        </v-snackbar>
      </template>
      <!--  -->
      <v-date-picker
        v-model="date"
        scrollable
        :show-current="new Date().toISOString().substr(0, 10)"
      >
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="date_picker_modal = false">Cancel</v-btn>
        <v-btn text color="primary" @click="setDate($refs)">OK</v-btn>
      </v-date-picker>
    </v-dialog>

    <!-- Time Picker -->
    <v-dialog ref="dialog2" v-model="time_picker_modal" width="290px">
      <v-time-picker v-model="time" ampm-in-title full-width scrollable format="ampm">
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="time_picker_modal = false">Cancel</v-btn>
        <v-btn text color="primary" @click="setTime($refs)">OK</v-btn>
      </v-time-picker>
    </v-dialog>

    <!-- Notify Snackbar -->
    <v-snackbar v-model="notifySnackbar" right top :timeout="3000">{{ snackbar_msg }}</v-snackbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    snackbar_msg: null,
    date: new Date().toISOString().substr(0, 10),
    time: null,
    snackbar: false,
    notifySnackbar: false,
    was_reschedulded: false,
    date_picker_modal: false,
    time_picker_modal: false
  }),

  computed: {
    isDark() {
      return this.$vuetify.theme.dark ? "white" : "primary";
    }
  },

  watch: {
    time(newTime, oldTime) {
      this.was_reschedulded = newTime != oldTime;
    },

    date(newDate, oldDate) {
      this.was_reschedulded = newDate != oldDate;
    },
    
    was_reschedulded() {
      //
    }
  },

  methods: {
    setDate(ref) {
      ref.dialog.save(this.date);
      this.time_picker_modal = true; // Show Time Dialog (Activator)
      if (this.date == new Date().toISOString().substr(0, 10)) {
        this.notify("Hey, that's Today!");
      }
    },

    setTime(ref) {
      if (this.time != null) {
        // The time was changed!
        ref.dialog.save(this.time);
        this.time_picker_modal = false; // Hide Time Dialog
        return;
      }
      let choices = ["Set a time.", "Tell me when.", "I'd like to notify you!"];
      this.notify(choices[Math.floor(Math.random() * choices.length) + 0]);
    },

    notify(msg) {
      this.notifySnackbar = false;
      this.snackbar_msg = msg;
      this.notifySnackbar = true;
    }
  },

  mounted() {
    //
  }
};
</script>

<style scoped>
.v-input--checkbox {
  cursor: pointer;
}
</style>