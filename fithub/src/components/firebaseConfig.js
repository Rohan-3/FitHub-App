import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDzC35UZ6qdMPNCYmpsJkA5WsxbeTsCOsE",
  authDomain: "phone-login-159e6.firebaseapp.com",
  projectId: "phone-login-159e6",
  storageBucket: "phone-login-159e6.appspot.com",
  messagingSenderId: "68920876773",
  appId: "1:68920876773:web:e45387b3f32bedc834fe0c",
  measurementId: "G-969FLFBRNS"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the authentication module
const auth = getAuth(app);
export default firebaseConfig;