// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk65NtmVZ6_i9_rt03NbnRtyUK8wpoXoU",
  authDomain: "instagram-clone-d944b.firebaseapp.com",
  projectId: "instagram-clone-d944b",
  storageBucket: "instagram-clone-d944b.appspot.com",
  messagingSenderId: "753820961644",
  appId: "1:753820961644:web:d483c44122a40b3c210149",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
