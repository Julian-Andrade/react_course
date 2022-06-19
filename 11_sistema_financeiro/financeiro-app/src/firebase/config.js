// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Import Firebase Database
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVRHZU6yHbHzN2M5zl4tbc0NGYLcRWXYI",
  authDomain: "andralima-react.firebaseapp.com",
  projectId: "andralima-react",
  storageBucket: "andralima-react.appspot.com",
  messagingSenderId: "486673951585",
  appId: "1:486673951585:web:95a9e4c33f3cc26c8d3320"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Database Firebase
const db = getFirestore(app);
export { db };
