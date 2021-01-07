const { db } = require("../admin");

// const createUserRecord = (data, context) => {
//     // Authentication / User Id is automatically added to the request

//     // Save user data to Firestore Users collection using "uid" as key
//     // return db.doc(`users/${data.uid}`).update({
//     //     name: data.name || null,
//     //     emailVerified: data.emailVerified || false,
//     //     picture: data.picture || null,
//     //     provider: data.provider || null
//     // });

//     for (const [index, value] of data) {
//         return db.doc(`users/${context.auth.uid || data.uid}`).update({
//             [index]: value
//         });
//     }
// };

// export as => functions.https.onCall();

const updateUserRecord = (data, context) => {
    // data = {name: "", email: ""}
    for (const [index, value] of data) {
        const entries = Object.entries(data);

        for (const [index, value] of entries) {
            return db.doc(`users/${context.auth.uid || data.uid}`).update({
                [index]: value
            });
        }
    }
};

module.exports = {
    // createUserRecord,
    updateUserRecord
};