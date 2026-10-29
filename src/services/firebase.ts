
import { initializeApp, getApp, getApps } from 'firebase/app';
import { initializeAuth, getAuth } from 'firebase/auth';
import { getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCyj1jN0ofjqXjsylycbGLMec7Hkvzlfag',
  authDomain: 'projetomobile-pam.firebaseapp.com',
  projectId: 'projetomobile-pam',
  storageBucket: 'projetomobile-pam.firebasestorage.app',
  messagingSenderId: '939460285104',
  appId: '1:939460285104:web:b57a121488209cba22e175',
  measurementId: "G-NTC79DQ8NL"
};

// Inicializa o Firebase uma única vez
const app = getApps().length === 0
  ? initializeApp(firebaseConfig)
  : getApp();

// Mantém a sessão do usuário no dispositivo
export const auth = (() => {
  try {
    return initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  } catch (error) {
    return getAuth(app);
  }
})();

// Banco de dados
export const db = getFirestore(app);
