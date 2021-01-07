const { db } = require("../admin");

// Listens for new messages added to /messages/:pushId/original and creates an
// uppercase version of the message to /messages/:pushId/uppercase
const makeUpper = (snapshot, context) => {
    // Grab the current value of what was written to the Realtime Database.
    const storedVal = snapshot.val();
    console.log("Uppercasing", context.params.id, storedVal);
    const uppercase = storedVal.toUpperCase();
    // You must return a Promise when performing asynchronous tasks inside a Functions such as
    // writing to the Firebase Realtime Database.
    // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
    return snapshot.ref.parent.child("uppercase").set(uppercase);
};

// export as functions.database.ref("/messages/{id}/original").onCreate(#####);