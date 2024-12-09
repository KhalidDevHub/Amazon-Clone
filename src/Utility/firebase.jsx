import firebase from "firebase/compat/app";
import {getAuth} from 'firebase/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACFds-eLR4SODiP0GqiIvenLt_yA63w6s",
  authDomain: "clone-723c2.firebaseapp.com",
  projectId: "clone-723c2",
  storageBucket: "clone-723c2.firebasestorage.app",
  messagingSenderId: "34866137755",
  appId: "1:34866137755:web:94a84a1f1bed5ca738943e",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db = app.firestore();
