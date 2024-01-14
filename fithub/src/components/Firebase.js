import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAWwCXOgzKTSczfoGnFitR8Ry6-XjifWj4",
    authDomain: "otp-app-demo-fc843.firebaseapp.com",
    projectId: "otp-app-demo-fc843",
    storageBucket: "otp-app-demo-fc843.appspot.com",
    messagingSenderId: "890740486424",
    appId: "1:890740486424:web:a85b47e404360a83962e6d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);