import { getApp, getApps, initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
const VITE_FIREBASE_API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: "booking-dev01.firebaseapp.com",
  projectId: "booking-dev01",
  storageBucket: "booking-dev01.firebasestorage.app",
  messagingSenderId: "1039510019907",
  appId: "1:1039510019907:web:21dec080df03bfe57f59f6"
};

// Initialize Firebase
const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

const auth = getAuth(firebaseApp);

const logOut = async () => {
    await auth.signOut();
}

export { auth, googleAuthProvider, facebookAuthProvider, githubAuthProvider, logOut };