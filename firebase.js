import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyA4lpNRk8iwFqVwIK9Cpfjw7GXQWgxKCC8",
  authDomain: "mobile-social-4cd50.firebaseapp.com",
  databaseURL: "https://mobile-social-4cd50-default-rtdb.firebaseio.com",
  projectId: "mobile-social-4cd50",
  storageBucket: "mobile-social-4cd50.appspot.com",
  messagingSenderId: "450823494",
  appId: "1:450823494:web:a3350161ae575cd2419147",
  measurementId: "G-58TNFSMYT9"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

export default firebase