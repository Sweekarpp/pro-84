import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
apiKey: "AIzaSyDpIh7JUtlYwAM095t4djbXJUceCJTraf4",
    authDomain: "barter-system-app-370ec.firebaseapp.com",
    databaseURL: "https://barter-system-app-370ec-default-rtdb.firebaseio.com",
    projectId: "barter-system-app-370ec",
    storageBucket: "barter-system-app-370ec.appspot.com",
    messagingSenderId: "697633287707",
    appId: "1:697633287707:web:275896cad0d0da8f64d2be",
    measurementId: "G-M5BDFE47MW"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//export default firebase.firestore();