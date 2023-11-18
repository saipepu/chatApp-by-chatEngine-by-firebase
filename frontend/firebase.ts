import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1Ygz8EQa9VKhhdvdt905VLqCLgak8KwU",
  authDomain: "chat-engine-nextjs.firebaseapp.com",
  projectId: "chat-engine-nextjs",
  storageBucket: "chat-engine-nextjs.appspot.com",
  messagingSenderId: "744853543388",
  appId: "1:744853543388:web:be31b0ecbb6dec6dcd9719"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);