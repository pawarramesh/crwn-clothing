import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const config = {
    apiKey: "AIzaSyDbr6q7awDvarVCSUuIfl_xCf9Dh3rDmpI",
    authDomain: "crwn-db-93c40.firebaseapp.com",
    projectId: "crwn-db-93c40",
    storageBucket: "crwn-db-93c40.appspot.com",
    messagingSenderId: "79825190707",
    appId: "1:79825190707:web:9bc7894f5caff5d3e6c846",
    measurementId: "G-15P1B1GK3Z"
  };

  firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () =>  auth.signInWithPopup(provider);
  export default firebase;
