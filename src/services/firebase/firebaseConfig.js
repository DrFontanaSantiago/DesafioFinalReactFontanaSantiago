
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAXUDBM3S5yN-Y5cPxM90iP-hQp0u1wXW8",
  authDomain: "coderreact-6854c.firebaseapp.com",
  projectId: "coderreact-6854c",
  storageBucket: "coderreact-6854c.appspot.com",
  messagingSenderId: "454573927721",
  appId: "1:454573927721:web:bcd9925c18528d05345b38",
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

