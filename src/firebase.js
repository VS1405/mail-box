// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVsYs-SdQxx0D2zHv_IY5QC7jHoz0m2dw",
  authDomain: "mail-box-e9271.firebaseapp.com",
  databaseURL: "https://mail-box-e9271-default-rtdb.firebaseio.com",
  projectId: "mail-box-e9271",
  storageBucket: "mail-box-e9271.appspot.com",
  messagingSenderId: "80104803653",
  appId: "1:80104803653:web:c74ffbbbe72aad2a09822c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);

export default app;