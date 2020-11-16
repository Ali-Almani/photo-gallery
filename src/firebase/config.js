import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
 // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAkzcj6klYeU9ws0ms277DX-1GI0i6ga-A",
    authDomain: "firegram-9eb44.firebaseapp.com",
    databaseURL: "https://firegram-9eb44.firebaseio.com",
    projectId: "firegram-9eb44",
    storageBucket: "firegram-9eb44.appspot.com",
    messagingSenderId: "282659211670",
    appId: "1:282659211670:web:6423e5c81f88d69fb2f5b7"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export { projectStorage, projectFirestore, timestamp };