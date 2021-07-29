import * as firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyDrmD-Dpsn8PwXZg5RS_MmK8zU4LN_jzLo",
    authDomain: "library-fb252.firebaseapp.com",
    projectId: "library-fb252",
    storageBucket: "library-fb252.appspot.com",
    messagingSenderId: "80223033755",
    appId: "1:80223033755:web:84caf9babe8338ae42e93e"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();