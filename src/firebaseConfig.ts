import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCPp5Fe4Hl4FAocJpCaYUXdSzyIJL6D7pI',
  authDomain: 'shopping-app-839d5.firebaseapp.com',
  projectId: 'shopping-app-839d5',
  storageBucket: 'shopping-app-839d5.appspot.com',
  messagingSenderId: '740605013537',
  appId: '1:740605013537:web:de978f68ddcd68808e3d60',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
