const { db } = require("../admin");

const addUserRecord = (user, context) => {
    // Save user data to Firestore Users collection using "uid" as key
    return db.doc(`users/${user.uid}`).set({
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        created_at: context.timestamp,
        updated_at: context.timestamp
    });
};

const sendEmailVerification = (user, context) => { // This should always be called when user is authenticated
    if (user != null && user.emailVerified)
        user
        .sendEmailVerification()
        .then(() => {
            console.log("Verification email sent!");
        })
        .catch(error => {
            console.log("Oops! Couldn't send verification email.", error);
        });
};

//export as => functions.auth.user().onCreate(#####);

module.exports = {
    addUserRecord,
    sendEmailVerification
};