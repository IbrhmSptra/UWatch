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
import {
  getFirestore,
  collection,
  setDoc,
  doc,
  query,
  where,
  onSnapshot,
  documentId,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { data } from "autoprefixer";

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

//init services
const auth = getAuth();
const db = getFirestore(app);
const analytics = getAnalytics(app);

export const getWatchlist = (id, uid, callback) => {
  const watchlistQuery = query(
    collection(db, "watchlist"),
    where(documentId(), "==", `${id}`),
    where("uid", "==", `${uid}`)
  );
  getDocs(watchlistQuery)
    .then((querySnapshot) => {
      querySnapshot.forEach((docSnapshot) => {
        const data = docSnapshot.data(); // Get the document data
        callback(data);
      });
    })
    .catch((error) => {
      callback(error);
    });
};

export const getAllWatchlist = (uid, callback) => {
  const watchlistQuery = query(
    collection(db, "watchlist"),
    where("uid", "==", `${uid}`)
  );
  getDocs(watchlistQuery)
    .then((querySnapshot) => {
      querySnapshot.forEach((docSnapshot) => {
        const data = docSnapshot.data(); // Get the document data
        callback(data);
      });
    })
    .catch((error) => {
      callback(error);
    });
};

export const deleteWatchlist = (id, uid, callback) => {
  const filterRef = query(
    collection(db, "watchlist"),
    where(documentId(), "==", `${id}`),
    where("uid", "==", `${uid}`)
  );
  // Execute the query
  getDocs(filterRef).then((querySnapshot) => {
    querySnapshot.forEach((docSnapshot) => {
      // Get a reference to the document
      const docRef = doc(db, "watchlist", docSnapshot.id);

      // Delete the document
      deleteDoc(docRef)
        .then(() => {
          callback(data);
        })
        .catch((error) => {
          console.error("Error deleting document: ", error);
        });
    });
  });
};
export const insertWatchlist = async (id, data, callback) => {
  await setDoc(doc(db, "watchlist", String(id)), data);
  callback();
};

export {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  db,
};
