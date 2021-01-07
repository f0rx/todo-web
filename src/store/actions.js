import firebase from "../plugins/firebase";
let actions = {
    attachAuthListener: ({ dispatch, commit }) => {
        commit("setAuthenticated", firebase.auth().currentUser != null);

        if (firebase.apps.length)
            firebase.auth().onAuthStateChanged(firebaseUser => {
                commit("setAuthenticated", firebaseUser != null);
                Event.$emit("isAuthenticated", firebaseUser.uid);

                if (firebaseUser && firebaseUser != null)
                    dispatch("fetchFirestoreUser", firebaseUser.uid);
                // If User  is authenticated, fetch data
                else dispatch("fetchGuestUser"); // Else user is signed out, fetch Guest
            });
    },

    fetchFirestoreUser: ({ commit, state }, id) => {
        firebase
            .firestore()
            .collection("users")
            .doc(id)
            .onSnapshot(
                doc => {
                    commit("storeUser", doc.data());
                },

                error => {
                    console.log(error);
                }
            );
    },

    fetchGuestUser: ({ commit, state }) => {
        let data = {
            uid: "guest",
            displayName: "Guest",
            email: null,
            emailVerified: false,
            photoURL: null,
            isAnonymous: false,
            providerData: {}
        };

        commit("storeUser", data);
    }
};

export default actions;