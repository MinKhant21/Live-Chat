import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCpViQHABU5N9buzDjAPU_5AkPviIgGbCQ",
  authDomain: "vue-blog-system-d3ffa.firebaseapp.com",
  projectId: "vue-blog-system-d3ffa",
  storageBucket: "vue-blog-system-d3ffa.appspot.com",
  messagingSenderId: "633431634387",
  appId: "1:633431634387:web:56ddb61c807abae617bf26"
};

firebase.initializeApp(firebaseConfig);
let db=firebase.firestore();
let auth=firebase.auth();
let timestamp=firebase.firestore.FieldValue.serverTimestamp;
export {db,auth,timestamp}