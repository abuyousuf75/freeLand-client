// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_KEYS,
  authDomain:import.meta.env.VITE_DOMAIN,
  projectId: import.meta.env.PROJECT_IDS,
  storageBucket:import.meta.env.BUCKETS,
  messagingSenderId:import.meta.env.SENDER_ID,
  appId: import.meta.env.APPS_IDS
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth