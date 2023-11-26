
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAedZ-zphoUh_jON2Ili6fF1drRxI3CUDc",
  authDomain: "medusalinks-32f55.firebaseapp.com",
  projectId: "medusalinks-32f55",
  storageBucket: "medusalinks-32f55.appspot.com",
  messagingSenderId: "282111985485",
  appId: "1:282111985485:web:be63269cf01cf6c0cf1904"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
