// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth/react-native';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL2Vv03COATCJbXxOcnbxtUdnx4L4z6uQ",
  authDomain: "react-native-hw-20871.firebaseapp.com",
  projectId: "react-native-hw-20871",
  storageBucket: "react-native-hw-20871.appspot.com",
  messagingSenderId: "599547891835",
  appId: "1:599547891835:web:68a48e78b7805ed7ff92de"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
