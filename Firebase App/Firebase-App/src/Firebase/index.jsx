import { initializeApp, getApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  addDoc,
} from "firebase/firestore";
// import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyDJObtNHxmzfIczH17_AJluLCPA9vZu-Hk",
  authDomain: "ds-store-d7a58.firebaseapp.com",
  projectId: "ds-store-d7a58",
  storageBucket: "ds-store-d7a58.appspot.com",
  messagingSenderId: "590572980909",
  appId: "1:590572980909:web:383169b9da3e246ce0d424",
  measurementId: "G-3Y36SQ4RR4",
};
import { getStorage, ref, uploadBytes } from "firebase/storage";

// Get a non-default Storage bucket
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage();

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
  const { email, passward } = loginInfo;
  signInWithEmailAndPassword(auth, email, passward)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("User Login");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

//////////// OnAuth User ///////////

onAuthStateChanged(auth, (user) => {
  // const navigate = useNavigate();
  if (user) {
    // navigate("/");
    const uid = user.uid;
    // ...
  } else {
    // navigate("/signUp");
  }
});

//////////// SignOut User ///////////

export function SignOutUser() {
  signOut(auth)
    .then(() => {
      // alert("user SignOut");
      // navigate("/signUp");
    })
    .catch((e) => {
      alert(e.message);
    });
}

//////////// AddData User ///////////

export async function AddItemDataBase(addItemIndataBase) {

  const { Title, Description, Price, Image } = addItemIndataBase;

  console.log(Title);
  console.log(Description);
  console.log(Price);
  console.log(Image);

  const storageRef = ref(storage, "Image");
  await uploadBytes(storageRef, Image).then((snapshot) => {
    console.log("Uploaded a blob or file!");

    getDownloadURL(storageRef).then(async (url) => {
      try {
        const docRef = await addDoc(collection(db, "AddData"), {
          Title,
          Description,
          Price,
          url,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.log("Error adding document: ", e.massage);
      }
    });
  });

  // console.log(Title);
  // console.log(Description);
  // console.log(Price);
  // console.log(Image);

  // try {
  //   const docRef = await addDoc(collection(db, "AddData"), {
  //     Title,
  //     Description,
  //     Price,
  //     Image,
  //   });
  //   console.log("Document written with ID: ", docRef.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e.massage);
  // }
}
