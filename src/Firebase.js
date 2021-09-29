import firebase from "firebase"
const firebaseApp = firebase.initializeApp({
  
    apiKey: "AIzaSyANCROkVOJCM4yfGW0HrZzp__7kK61pOZ8",
    authDomain: "anazon-12013.firebaseapp.com",
    databaseURL: "https://anazon-12013.firebaseio.com",
    projectId: "anazon-12013",
    storageBucket: "anazon-12013.appspot.com",
    messagingSenderId: "918785789218",
    appId: "1:918785789218:web:b20dcd5a1c9baf74bd697b",
    measurementId: "G-WWS9Y1LPW7"
  
})

const auth = firebase.auth()
export {auth}