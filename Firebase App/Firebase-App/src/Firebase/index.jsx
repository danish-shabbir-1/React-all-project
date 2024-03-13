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
import {  useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import UserSlice from "../Store/userslice";

const firebaseConfig = {
  apiKey: "AIzaSyAVDjIcVbfz2ielf8MtOdI268LilJh1aJc",
  authDomain: "olx-replica-ccdea.firebaseapp.com",
  projectId: "olx-replica-ccdea",
  storageBucket: "olx-replica-ccdea.appspot.com",
  messagingSenderId: "911980983982",
  appId: "1:911980983982:web:a7864ce918badeb1c25f3f",
  measurementId: "G-8FK1JQVSBK"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage(app);

//////////// signUp User ///////////

export async function Useer(userInfo) {

  const useeeerId = useSelector((state) => state.user)

console.log('useeeerId' , useeeerId);

  const { FirstName, LastName, email, passward } = userInfo;
  const { user } = await createUserWithEmailAndPassword(auth, email, passward);
  const userDocRef = doc(db, "UserInformation", user.uid);
  await setDoc(userDocRef, {
    FirstName,
    LastName,
    email,
    userIdd : user.uid
  });
  alert("User Create Succesfull");
  return user.uid;
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

export async function GetSingleProduct(productId) {

  const docRef = doc(db, "AddData", productId);

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    return {};
  }
}