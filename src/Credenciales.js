// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwBVBM3yl-WnjT67j3bBB1LyjUiwm0S7s",
    authDomain: "fir-frontend-c74fa.firebaseapp.com",
    projectId: "fir-frontend-c74fa",
    storageBucket: "fir-frontend-c74fa.appspot.com",
    messagingSenderId: "175994660822",
    appId: "1:175994660822:web:4a02cd271df57e7cf5e677"
};

// Initialize Firebase
const appConfig = initializeApp(firebaseConfig);

export default appConfig;