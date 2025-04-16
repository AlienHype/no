import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvEX2MuHSlbQd7LwagAGYRDviOJFhzgfY",
  authDomain: "login12-21ea6.firebaseapp.com",
  projectId: "login12-21ea6",
  storageBucket: "login12-21ea6.appspot.com",
  messagingSenderId: "601186813763",
  appId: "1:601186813763:web:501de5425113bdcb6b11f6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

