import firebase from "./firebase";

let main = {
    data: () => ({
        snackbar: false,
        snackBar_msg: null,
        snackBar_actionMsg: null,
        user: {}
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

        $auth() {
            return this.$firebase.auth();
        },

        $firestore() {
            return this.$firebase.firestore();
        },

        $functions() {
            return this.$firebase.functions();
        },

        $storage() {
            return this.$firebase.storage();
        }
    },

    methods: {
        // let firebaseUser = firebase.auth().currentUser;
        showSnackbar(msg, actionMsg) {
            this.snackbar = true;
            this.snackBar_msg = msg;
            this.snackBar_actionMsg = actionMsg;
        },

        saveUserInformation(form) {
            let firebaseUser = firebase.auth().currentUser;

            console.log(firebaseUser);
            console.log(form);

            // if (firebaseUser != null) {
            //     var newUser = {
            //         uid: firebaseUser.uid,
            //         name: firebaseUser.displayName || form.name,
            //         emailVerified: firebaseUser.emailVerified,
            //         provider: firebaseUser.providerData
            //     };

            //     this.$functions
            //         .httpsCallable("updateUserRecord")(newUser)
            //         .then(value => {
            //             console.log("User records updated!");
            //         });
            // }
        }
    },

    beforeMount() {
        this.$store.subscribe((mutation, state) => {
            if (mutation.type === "storeUser" && state.user != null) {
                this.user = state.user; // Watch for changes and update fragment
            }
        });
    }
};

export default main;