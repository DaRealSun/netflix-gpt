// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQrKEreOv5_WnWoBsnrMFwQ64JD-6wBfQ",
    authDomain: "netflixgpt-b7bb4.firebaseapp.com/__/auth/handler",

    projectId: "netflixgpt-b7bb4",
    storageBucket: "netflixgpt-b7bb4.appspot.com",
    messagingSenderId: "196930243022",
    appId: "1:196930243022:web:429871e7e23a1e9768c39f",
    measurementId: "G-Y47PHHZ853"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
