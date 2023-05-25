
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxyoWfm6TxodoqJt3PD3w8-W6j5cRZDkk",
  authDomain: "nextjs-3d90f.firebaseapp.com",
  projectId: "nextjs-3d90f",
  storageBucket: "nextjs-3d90f.appspot.com",
  messagingSenderId: "88187982661",
  appId: "1:88187982661:web:8723003d7d999a0b6aa42c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;


