const { realDb } = require("../admin");
const { db } = require("../admin");

const firestoreMessage = async(req, res) => {
    let text = req.query.text;
    db.collection("1234-user_id")
        .doc()
        .set({
            author: "Brendan Ejike",
            exists: true,
            text: text
        });
};

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
// Url Endpoint => https://us-central1-brendan-portfolio.cloudfunctions.net/addMessage
const addMessage = async(req, res) => {
    // Grab the text paramenter
    const original = req.query.text;
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    const snapshot = await realDb.ref("/messages").push({
        original: original
    });
    // Redirect with 303 to the URL of the pushed object in the Firebase console.
    //   res.redirect(303, snapshot.ref.toString());
};

// export as => functions.https.onRequest(#####);

module.exports = {
    firestoreMessage,
    addMessage
};