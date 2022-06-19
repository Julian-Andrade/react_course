// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Import Firebase Database
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCphvYwunBnxZgIdByO_zl9k_Q7TcOXB7M",
  authDomain: "miniblog-react-course.firebaseapp.com",
  projectId: "miniblog-react-course",
  storageBucket: "miniblog-react-course.appspot.com",
  messagingSenderId: "422723485983",
  appId: "1:422723485983:web:b43d6e3f324144e5a8302a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Database Firebase
const db = getFirestore(app);
export { db };
