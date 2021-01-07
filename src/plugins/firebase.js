// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/messaging";
import "firebase/functions";

var firebaseConfig = {
    apiKey: "AIzaSyA5WoJ_lkYFyKHFVmpn7VgZgU9jjvsuKbw",
    authDomain: "brendan-portfolio.firebaseapp.com",
    databaseURL: "https://brendan-portfolio.firebaseio.com",
    projectId: "brendan-portfolio",
    storageBucket: "brendan-portfolio.appspot.com",
    messagingSenderId: "999975491629",
    appId: "1:999975491629:web:02ccfa149e60c7918c40a4",
    measurementId: "G-84QHGNGF68"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;