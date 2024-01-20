// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut } from "firebase/auth";
import { getFirestore , doc , setDoc ,collection, addDoc , getDocs } from "firebase/firestore";


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

export function UserLogin (userInfo) {
  const {email , Pass} = userInfo
  signInWithEmailAndPassword(auth, email, Pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert('user SignIn')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('user Not SignIn')
  });
}

export async function AddSalePost(addInfoResponse) {
  const { title , description , price , image} = addInfoResponse
  const docRef = await addDoc(collection(db, "AddInfo"), {
    Title: title,
    Description: description,
    Price: price,
    Image: image
  });
  console.log("Document written with ID: ", docRef.id);
}

export async function GetAllProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = []
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  products.push({
     ...doc.data(),
     id :doc.id
  });
});
return products
}