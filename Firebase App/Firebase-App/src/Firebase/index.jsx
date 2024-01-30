import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

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

//////////// signUp User ///////////

export async function Useer(userInfo) {
  const { FirstName, LastName, email, passward } = userInfo;

  const { user } = await createUserWithEmailAndPassword(auth, email, passward);
  const userDocRef = doc(db, "UserInformation", user.uid);
  await setDoc(userDocRef, {
    FirstName,
    LastName,
    email,
  });
  alert("User Create Succesfull");
  return userDocRef;
}

//////////// signIn User ///////////

export function UserLogin(loginInfo) {

  const {email, passward} = loginInfo
  signInWithEmailAndPassword(auth, email, passward)
    .then((userCredential) => {
      const user = userCredential.user;
      alert('User Login')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
