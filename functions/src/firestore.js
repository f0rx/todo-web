const { db } = require("../admin");

const writeToFirestore = (change, context) => {
    db.doc("some/otherdoc").set({
        //
    });
};

// export as => functions.firestore.document("users/kjhio").onWrite(#####);

module.exports = {
    writeToFirestore
};