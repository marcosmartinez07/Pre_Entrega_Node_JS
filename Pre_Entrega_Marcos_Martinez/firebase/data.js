import dotenv from 'dotenv/config';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "api-rest-nest-js-data",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: "874210181102",
  appId: process.env.FIREBASE_APP_ID,
  measurementId: "G-WVN1PYCS61"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default  db ;
