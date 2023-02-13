import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCpViQHABU5N9buzDjAPU_5AkPviIgGbCQ",
  authDomain: "vue-blog-system-d3ffa.firebaseapp.com",
  projectId: "vue-blog-system-d3ffa",
  storageBucket: "vue-blog-system-d3ffa.appspot.com",
  messagingSenderId: "633431634387",
  appId: "1:633431634387:web:abeabc456d73689417bf26"
};

let app = firebase.initializeApp(firebaseConfig)
let db = app.firestore()
let auth = firebase.auth()
export {db,auth}