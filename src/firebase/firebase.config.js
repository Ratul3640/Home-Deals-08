import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJ0ykO-Cx8PWwZM5fwoIvx_IGCeJ5jCxI",
  authDomain: "real-estate-c552b.firebaseapp.com",
  projectId: "real-estate-c552b",
  storageBucket: "real-estate-c552b.appspot.com",
  messagingSenderId: "722581044578",
  appId: "1:722581044578:web:cf39eb5d7d186afe6f403b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;