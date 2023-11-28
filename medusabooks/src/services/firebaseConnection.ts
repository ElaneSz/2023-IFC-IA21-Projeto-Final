
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBx7-Ki-mqLOKpLxyqF4SxZyCXeLLbLl3Q",
  authDomain: "medusalinks-4b52b.firebaseapp.com",
  projectId: "medusalinks-4b52b",
  storageBucket: "medusalinks-4b52b.appspot.com",
  messagingSenderId: "515585349693",
  appId: "1:515585349693:web:fad36bdff105ec8af9b254"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
