import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDHqZMAZzjAzoJDJmj_GsF7l7vtpdgU_XI",
  authDomain: "clone-react-instagram.firebaseapp.com",
  projectId: "clone-react-instagram",
  storageBucket: "clone-react-instagram.appspot.com",
  messagingSenderId: "83648473355",
  appId: "1:83648473355:web:c7b404356a977f383a9a0e",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
