// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//! Google yetkilendirme
import {getAuth,GoogleAuthProvider} from "firebase/auth" ;
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiEJV27Kf8vFazM87inpF9MTRDhfrX0yI",
  authDomain: "deneme-f56a5.firebaseapp.com",
  projectId: "deneme-f56a5",
  storageBucket: "deneme-f56a5.appspot.com",
  messagingSenderId: "1003690913910",
  appId: "1:1003690913910:web:faa2a445ff9daa0bb2af57"
};

//! Initialize Firebase
const app = initializeApp(firebaseConfig);
/!*Yekinlendirme için gerekli kurulum */
export const auth=getAuth(app);
/!*Google sağlayıcısı kurulum */

export const provider= new GoogleAuthProvider();

//! veri tabanı kurulumu
export const db=getFirestore(app);
