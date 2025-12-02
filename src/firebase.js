// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3JB2VrF2l1fbrjL340-89yhWwZN5jzps",
  authDomain: "ferretinvsellpage.firebaseapp.com",
  projectId: "ferretinvsellpage",
  storageBucket: "ferretinvsellpage.firebasestorage.app",
  messagingSenderId: "1038586088976",
  appId: "1:1038586088976:web:16bdba6825bc567f0b4495",
  measurementId: "G-5X94HBCCVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
