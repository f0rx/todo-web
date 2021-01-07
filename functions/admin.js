// const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const realDb = admin.database();
const db = admin.firestore();

module.exports = {
    realDb,
    db
};