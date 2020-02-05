import firebase from "./firebase";
var firebaseui = require("firebaseui");
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

let main = {
  data: () => ({
    snackbar: false,
    snackBar_msg: null,
    snackBar_actionMsg: null
  }),

  computed: {
    $firebase() {
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        firebase
          .firestore()
          .enablePersistence()
          .catch(e => {
            if (err.code == "failed-precondition") {
              console.log(
                "Multiple tabs open, persistence can only be enabled in one tab at a time."
              );
            } else if (err.code == "unimplemented") {
              console.log(
                "The current browser does not support all of the features required to enable persistence."
              );
            }
          });
      }
      return firebase;
    },

    $firestore() {
      return this.$firebase.firestore();
    },
    $storage() {
      return this.$firebase.storage();
    },
    $ui() {
      return ui;
    }
  },

  methods: {
    showSnackbar(msg, actionMsg) {
      this.snackbar = true;
      this.snackBar_msg = msg;
      this.snackBar_actionMsg = actionMsg;
    }
  }
};

export default main;
