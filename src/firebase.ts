import { initializeApp } from "firebase/app";
;

const firebaseConfig = {
  apiKey: "AIzaSyAP3UrOL28eODT-JR9SPGM8eTlUaZzPo10",
  authDomain: "young-chanakya.firebaseapp.com",
  projectId: "young-chanakya",
  storageBucket: "young-chanakya.appspot.com",
  messagingSenderId: "274354076638",
  appId: "1:274354076638:web:7205bf6eb1e7ab1435bb4f",
  measurementId: "G-KL618WW9M9"
};

export const firebaseApp = initializeApp(firebaseConfig);