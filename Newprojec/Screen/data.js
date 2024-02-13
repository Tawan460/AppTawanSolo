import { getApps, getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAIveihpuCG6Qr-OLM9rEktviVtylHoLm0",
    authDomain: "apprepaire.firebaseapp.com",
    projectId: "apprepaire",
    storageBucket: "apprepaire.appspot.com",
    messagingSenderId: "865770311403",
    appId: "1:865770311403:web:941fecaabb59a4d3fbb8ae",
    measurementId: "G-5YXVENYXNR"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firebaseauth = getAuth(app);
const firestoredb = getFirestore(app);

export { app, firebaseauth, firestoredb };



