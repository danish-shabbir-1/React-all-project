// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore , doc , setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXbKcDqIUIaRliJB8l3L1nBrcEUS0yX0M",
  authDomain: "olx-app-ca4a8.firebaseapp.com",
  projectId: "olx-app-ca4a8",
  storageBucket: "olx-app-ca4a8.appspot.com",
  messagingSenderId: "531596045652",
  appId: "1:531596045652:web:0c290d59c4f8fe012b2cc1",
  measurementId: "G-ZBW9PH4Z2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export async function register (userInfo) {
const { name , lastName , email , Pass} = userInfo
const {user} = await createUserWithEmailAndPassword(auth , email , Pass);
const userData = await setDoc(doc(db,'userInfo',user.uid),{
  name,lastName, email})
  return userData.data();

}