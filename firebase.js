// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDI2hQvWm2Ufz4QK22cWzJMMQeWqINEMcU",
    authDomain: "irent-e6e7d.firebaseapp.com",
    projectId: "irent-e6e7d",
    storageBucket: "irent-e6e7d.appspot.com",
    messagingSenderId: "973115381587",
    appId: "1:973115381587:web:0073c18d4391bcd4bdb3a6",
    measurementId: "G-7NGCTSRLV6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const DB = getFirestore()