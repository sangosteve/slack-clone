import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCbFLwM12WKOuu_uPVik6gPox2WwWoxIMw",
  authDomain: "slack-clone-a3bbf.firebaseapp.com",
  projectId: "slack-clone-a3bbf",
  storageBucket: "slack-clone-a3bbf.appspot.com",
  messagingSenderId: "315552385730",
  appId: "1:315552385730:web:5a5dbbe3635af8cf98c95b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
