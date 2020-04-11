import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCoUTCVWKvcsIyac02Av1MbwRwXiT0c1tc",
    authDomain: "crwn-db-e760f.firebaseapp.com",
    databaseURL: "https://crwn-db-e760f.firebaseio.com",
    projectId: "crwn-db-e760f",
    storageBucket: "crwn-db-e760f.appspot.com",
    messagingSenderId: "29226842479",
    appId: "1:29226842479:web:734ef3c88080e3247ed09a",
    measurementId: "G-GLHGKG84FB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//provider.setCustomParameters({ prompt: 'select_account' });
provider.setCustomParameters({
    'login_hint': 'user@example.com'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;