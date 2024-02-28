/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const APIKEY = import.meta.env.VITE_APIKEY;
const AUTHDOMAIN = import.meta.env.VITE_AUTH_DOMAIN;
const PROJECTID = import.meta.env.VITE_PROJECT_ID;
const STORAGEBUCKET = import.meta.env.VITE_STORAGE_BUCKET;
const MSGSENDERID = import.meta.env.VITE_MSG_SENDER_ID;
const APPID = import.meta.env.VITE_APP_ID;
const MEASUREMENTID = import.meta.env.VITE_MEASUREMENT_ID;
const firebaseConfig = {
  apiKey: `${APIKEY}`,
  authDomain: `${AUTHDOMAIN}`,
  projectId: `${PROJECTID}`,
  storageBucket: `${STORAGEBUCKET}`,
  messagingSenderId: `${MSGSENDERID}`,
  appId: `${APPID}`,
  measurementId: `${MEASUREMENTID}`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//init services
const auth = getAuth();

export {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};
