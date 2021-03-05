import firebase from "firebase/app";
import firebase from "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyC-8peJsR2Q6W713jN0hgszFENGNqRbBLU",
    authDomain: "weathersapp.firebaseapp.com",
    projectId: "weathersapp",
    storageBucket: "weathersapp.appspot.com",
    messagingSenderId: "806963247990",
    appId: "1:806963247990:web:41549c7561f204c10ad857",
    measurementId: "G-2C6D70JPJB"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();