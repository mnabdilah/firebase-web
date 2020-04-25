// Import stylesheets
import './style.css';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from 'firebaseui';

// Document elements
const startRsvpButton = document.getElementById('startRsvp');
const guestbookContainer = document.getElementById('guestbook-container');

const form = document.getElementById('leave-message');
const input = document.getElementById('message');
const guestbook = document.getElementById('guestbook');
const numberAttending = document.getElementById('number-attending');
const rsvpYes = document.getElementById('rsvp-yes');
const rsvpNo = document.getElementById('rsvp-no');

var rsvpListener = null;
var guestbookListener = null;

// Add Firebase project configuration object here
var firebaseConfig = {
    apiKey: "AIzaSyDvqO--mXkTBDl6XXT2TSAogE6NvYPOvUU",
    authDomain: "fir-ae069.firebaseapp.com",
    databaseURL: "https://fir-ae069.firebaseio.com",
    projectId: "fir-ae069",
    storageBucket: "fir-ae069.appspot.com",
    messagingSenderId: "877789877755",
    appId: "1:877789877755:web:906d2bc8b3e4f83c3be75e"

};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


// FirebaseUI config
const uiConfig = {
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
        // Email / Password Provider.
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // Handle sign-in.
            // Return false to avoid redirect.
            return false;
        }
    }
};

if (firebaseui.auth.AuthUI.getInstance()) {
    const ui = firebaseui.auth.AuthUI.getInstance();
    startRsvpButton.addEventListener("click",
        () => {
            ui.start("#firebaseui-auth-container", uiConfig);
        });
} else {
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    startRsvpButton.addEventListener("click",
        () => {
            ui.start("#firebaseui-auth-container", uiConfig);
        });
}