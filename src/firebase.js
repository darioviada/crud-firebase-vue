import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAucMFkHvQ_czGyZnmqBkTWDRDHJRQ6kio",
    authDomain: "crud-vue-firebase-8e514.firebaseapp.com",
    databaseURL: "https://crud-vue-firebase-8e514.firebaseio.com",
    projectId: "crud-vue-firebase-8e514",
    storageBucket: "crud-vue-firebase-8e514.appspot.com",
    messagingSenderId: "651963894011",
    appId: "1:651963894011:web:cbc8fbf9148271c142885e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export {db}