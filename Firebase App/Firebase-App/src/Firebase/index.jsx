import { initializeApp, getApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Login from "../Views/Login";

const firebaseConfig = {
  apiKey: "AIzaSyDJObtNHxmzfIczH17_AJluLCPA9vZu-Hk",
  authDomain: "ds-store-d7a58.firebaseapp.com",
  projectId: "ds-store-d7a58",
  storageBucket: "ds-store-d7a58.appspot.com",
  messagingSenderId: "590572980909",
  appId: "1:590572980909:web:383169b9da3e246ce0d424",
  measurementId: "G-3Y36SQ4RR4",
};

// Get a non-default Storage bucket
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage(app);
let UserIdRes;
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
      window.location.pathname = "/";
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

export function signOutUser() {
  signOut(auth)
    .then(() => {
      // window.location.pathname = '/login'
      alert("user SignOut");
    })
    .catch((e) => {
      alert(e.message);
    });
}

//////////// AddData User ///////////

export async function AddItemDataBase(addItemIndataBase) {
  const data = await getDoc(doc(db, "productId", "x9Y16CZVPKncsC8ggKhL"));

  const { Title, Description, Price, Image } = addItemIndataBase;
  const productId = data.data().productId;

  const storageRef = ref(storage, `productImage/${productId}`);
  await uploadBytes(storageRef, Image).then((snapshot) => {
    console.log("Uploaded a blob or file!");

    getDownloadURL(storageRef).then(async (url) => {
      try {
        const docRef = await addDoc(collection(db, "AddData"), {
          Title,
          Description,
          Price,
          url,
          productId,
        });

        await updateDoc(doc(db, "productId", "x9Y16CZVPKncsC8ggKhL"), {
          productId: productId + 1,
        });

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.log("Error adding document: ", e.massage);
      }
    });
  });
}

//////////// GetData User ///////////

export async function getData() {
  const querySnapshot = await getDocs(collection(db, "AddData"));
  const product = [];
  querySnapshot.forEach((doc) => {
    product.push({
      ...doc.data(),
      id: doc.id,
    });
    console.log(product);
  });
  return product;
}

getData();

//////////// Forget Password /////////

export async function forgetPass(resetPass) {
  console.log("email", resetPass);

  await sendPasswordResetEmail(auth, resetPass)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

////////// Get Single Product //////////////

export async function GetSingleProduct(user) {

console.log(user.user?.uid);

  const docRef = doc(db, "AddData", user.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}