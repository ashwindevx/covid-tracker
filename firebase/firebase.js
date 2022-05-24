import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8EnPEQe8NhkhDcQe_1OcIj0RPkM07z_k",
  authDomain: "criz-e8a27.firebaseapp.com",
  projectId: "criz-e8a27",
  storageBucket: "criz-e8a27.appspot.com",
  messagingSenderId: "792487051884",
  appId: "1:792487051884:web:1f7abb41541ef86a544e49",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const authStateChanged = onAuthStateChanged;
