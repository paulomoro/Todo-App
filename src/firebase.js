// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIM154H3VA9sBF12vjR3N8GDzdfeXaISg",
  authDomain: "todo-app-4a903.firebaseapp.com",
  projectId: "todo-app-4a903",
  storageBucket: "todo-app-4a903.appspot.com",
  messagingSenderId: "622220106516",
  appId: "1:622220106516:web:d5d17d47ed8c7608de0001"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export {createUserWithEmailAndPassword}
export {signInWithEmailAndPassword}
export {signOut}
export default app;
// Initialize Firebase