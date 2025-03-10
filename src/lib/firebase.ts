
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmTE6nHa7-ZFgOCBJG8ooGhz1WPoWO4Xk",
  authDomain: "guardian-io-demo.firebaseapp.com",
  projectId: "guardian-io-demo",
  storageBucket: "guardian-io-demo.appspot.com",
  messagingSenderId: "109876543210",
  appId: "1:109876543210:web:123456789abcdef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
