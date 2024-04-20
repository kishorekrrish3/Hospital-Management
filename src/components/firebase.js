// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsZcpDziA9TWQuBtz7grES3bVjea4LkMY",
    authDomain: "hospital-management-3.firebaseapp.com",
    projectId: "hospital-management-3",
    storageBucket: "hospital-management-3.appspot.com",
    messagingSenderId: "1005775720459",
    appId: "1:1005775720459:web:eb23c8b036bfe7ed7ab70e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;