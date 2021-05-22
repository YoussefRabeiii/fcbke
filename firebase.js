import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAE4XFhvKZXDZ0FoEQoW2mnfgmL-LnSR-M",
  authDomain: "fcbke-yr.firebaseapp.com",
  projectId: "fcbke-yr",
  storageBucket: "fcbke-yr.appspot.com",
  messagingSenderId: "644251253337",
  appId: "1:644251253337:web:61a2d3252dd57f73d8cf48",
  measurementId: "G-3R8KJLBD9Q",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
