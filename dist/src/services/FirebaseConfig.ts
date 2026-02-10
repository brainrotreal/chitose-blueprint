// src/services/FirebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhbANsFpKg1fJ71pd0AZS2Kcvz0hizgb4",
  authDomain: "chitoseblueprint.firebaseapp.com",
  projectId: "chitoseblueprint",
  storageBucket: "chitoseblueprint.appspot.com",
  messagingSenderId: "955321440188",
  appId: "1:955321440188:web:08d8c7203e8befca003db9",
  measurementId: "G-SNK7W5MBKY"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
