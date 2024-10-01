// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJcYV3kwKZ-_iwkj93A2OhCGqVwstUoxA",
  authDomain: "netflixgpt-a776f.firebaseapp.com",
  projectId: "netflixgpt-a776f",
  storageBucket: "netflixgpt-a776f.appspot.com",
  messagingSenderId: "1004095943989",
  appId: "1:1004095943989:web:7963853381c9fad902887c",
  measurementId: "G-E8WDNC0G5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();