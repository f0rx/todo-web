let authMixin = {
    data: () => ({
        error: null,
        cancel: false
    }),

    methods: {
        validate() {
            if (this.form.email == null || this.form.email === "") {
                this.error = "Email is required!";
                this.cancel = true;
            } else if (this.form.password == null || this.form.password === "") {
                this.error = "Password is required!";
                this.cancel = true;
            } else {
                this.cancel = false;
                this.error = null;
            }
        },

        login() {
            this.validate();

            if (this.cancel) {
                this.showSnackbar(this.error);
                return;
            }

            // console.log(this.form.email, this.form.password);

            this.$firebase
                .auth()
                .signInWithEmailAndPassword(this.form.email, this.form.password)
                .catch(error => {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    this.showSnackbar(errorMessage);
                });
        },

        register() {
            this.validate();

            if (this.form.name == null || this.form.name === "") {
                this.error = "A name is required!";
                this.cancel = true;
            }

            if (this.cancel) {
                this.showSnackbar(this.error);
                return;
            }

            // console.log(this.form.name, this.form.email, this.form.password);

            this.$firebase
                .auth()
                .createUserWithEmailAndPassword(this.form.email, this.form.password)
                .catch(error => {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    this.showSnackbar(errorMessage);
                });

            this.saveUserInformation(this.form);
        },

        signOut() {
            this.$firebase
                .auth()
                .signOut()
                .then(() => {
                    console.log("Signed out");
                })
                .catch(e => {
                    console.log(e);
                });
        },

        clear() {
            this.form.name = "";
            this.form.email = "";
            this.form.password = "";
        },

        showSnackbar(msg, actionMsg) {
            this.snackbar = true;
            this.snackBar_msg = msg;
            this.snackBar_actionMsg = actionMsg;
        }
    },

    created() {
        // this.log("Hello");
    }
};

export default authMixin;