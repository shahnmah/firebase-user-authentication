// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA67XhYssHte6G7qdMoAZxjhgyt1evE4X0",
  authDomain: "fir-user-authentication-ff26f.firebaseapp.com",
  projectId: "fir-user-authentication-ff26f",
  storageBucket: "fir-user-authentication-ff26f.appspot.com",
  messagingSenderId: "892101106761",
  appId: "1:892101106761:web:932f742d4781a166cd7398"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;