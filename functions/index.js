const functions = require("firebase-functions");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// const { createUserRecord } = require("./src/callable");
const { updateUserRecord } = require("./src/callable");
const { addUserRecord } = require("./src/auth");
const { sendEmailVerification } = require("./src/auth");

module.exports = {
    // createUserRecord: functions.https.onCall(createUserRecord),
    updateUserRecord: functions.https.onCall(updateUserRecord),
    addUserRecord: functions.auth.user().onCreate(addUserRecord),
    sendEmailVerification: functions.auth.user().onCreate(sendEmailVerification)
};