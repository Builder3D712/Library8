import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAJcjgKhjCrtOfl2E5oinOG4vOAasa85v4",
    authDomain: "wily-app-b619f.firebaseapp.com",
    projectId: "wily-app-b619f",
    storageBucket: "wily-app-b619f.appspot.com",
    messagingSenderId: "615291695452",
    appId: "1:615291695452:web:d325bb5ce269932f759199"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();