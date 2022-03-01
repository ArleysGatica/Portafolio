// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxl_N9AAOIZD68MuMIQ25FjDLXaIYr8T4",
  authDomain: "portafolio-7545d.firebaseapp.com",
  projectId: "portafolio-7545d",
  storageBucket: "portafolio-7545d.appspot.com",
  messagingSenderId: "779250094823",
  appId: "1:779250094823:web:9f72a43bc3de998db64842",
  measurementId: "G-EKYMLEH197"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;