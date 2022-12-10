import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBjyBC2KONEtaHWOcW3_pF-FTAhu447gr4",
    authDomain: "fir-auth-article-97b20.firebaseapp.com",
    projectId: "fir-auth-article-97b20",
    storageBucket: "fir-auth-article-97b20.appspot.com",
    messagingSenderId: "255303691171",
    appId: "1:255303691171:web:d3b560329c0b56c7664816",
    measurementId: "G-QJWJ3YWSLB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();