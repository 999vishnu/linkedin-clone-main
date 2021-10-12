// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA392wDp7ekX5VM3lBIlj_9oqIV42C-ynA",
    authDomain: "linkedin-clone-e372d.firebaseapp.com",
    projectId: "linkedin-clone-e372d",
    storageBucket: "linkedin-clone-e372d.appspot.com",
    messagingSenderId: "447862271280",
    appId: "1:447862271280:web:55bc0397128563963facf5",
    measurementId: "G-JNFQD1K9P3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export {db, auth};