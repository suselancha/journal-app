import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDBt9zC6fo18WJGqCf2Z-3ztFOG5Z5DfnM",
    authDomain: "login-app-7bad2.firebaseapp.com",
    databaseURL: "https://login-app-7bad2.firebaseio.com",
    projectId: "login-app-7bad2",
    storageBucket: "login-app-7bad2.appspot.com",
    messagingSenderId: "221973346166",
    appId: "1:221973346166:web:8159bc0f323b719cd1ec57"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db =  firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }