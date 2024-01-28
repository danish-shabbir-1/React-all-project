import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDJObtNHxmzfIczH17_AJluLCPA9vZu-Hk",
  authDomain: "ds-store-d7a58.firebaseapp.com",
  projectId: "ds-store-d7a58",
  storageBucket: "ds-store-d7a58.appspot.com",
  messagingSenderId: "590572980909",
  appId: "1:590572980909:web:383169b9da3e246ce0d424",
  measurementId: "G-3Y36SQ4RR4",
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);


//////////// signIn User ///////////
export function Useer() { 
  createUserWithEmailAndPassword(auth)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    // ..
  });
}

