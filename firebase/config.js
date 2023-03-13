import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB_7kKvsBt24x7T6zTtr103cTYm7buWG9k",
  authDomain: "miniblog-90913.firebaseapp.com",
  projectId: "miniblog-90913",
  storageBucket: "miniblog-90913.appspot.com",
  messagingSenderId: "993244616123",
  appId: "1:993244616123:web:3b666791269713ce50a09e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}