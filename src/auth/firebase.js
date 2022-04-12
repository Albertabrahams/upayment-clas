import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings

const firebaseConfig = {
    apiKey: "AIzaSyBqzP_Qe5UD4BH3YqR5HaelDlh0qTObgf0",
    authDomain: "movieapp-e9023.firebaseapp.com",
    projectId: "movieapp-e9023",
    storageBucket: "movieapp-e9023.appspot.com",
    messagingSenderId: "683082563183",
    appId: "1:683082563183:web:f1afebecbd3225bd61d79a",
    measurementId: "G-N9NLL9MZJF"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    console.log(userCredential);
  } catch (err) {
    alert(err.message);
  }
};

export const signIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    console.log(userCredential);
  } catch (err) {
    alert(err.message);
  }
};

export const logOut = () => {
  signOut(auth);
  alert("logged out successfully");
};