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
  apiKey: "AIzaSyC9-ttJVRWWbmtcayn0BKwX-z16BRIEQXM",
  authDomain: "my-react-native-app-562dd.firebaseapp.com",
  projectId: "my-react-native-app-562dd",
  storageBucket: "my-react-native-app-562dd.appspot.com",
  messagingSenderId: "291516644451",
  appId: "1:291516644451:web:ab60215cca33e7e1808c56",
  measurementId: "G-Z4J15T38HX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
