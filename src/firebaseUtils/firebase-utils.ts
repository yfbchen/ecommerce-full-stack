// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth'
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  addDoc,
} from 'firebase/firestore/lite'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBx6mQcyDXlO2O2Izm_DgNWNAzO9kVPeN0',
  authDomain: 'ecommerce-full-stack-a57e5.firebaseapp.com',
  projectId: 'ecommerce-full-stack-a57e5',
  storageBucket: 'ecommerce-full-stack-a57e5.appspot.com',
  messagingSenderId: '52612287627',
  appId: '1:52612287627:web:f558aeca5cb9b465d0988e',
  measurementId: 'G-ZP7D0QF0FM',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore(app)

// Google Auth
const googleProvider = new GoogleAuthProvider()
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider)
    const user = res.user
    const q = query(collection(db, 'users'), where('uid', '==', user.uid))
    const usersSnapShot = await getDocs(q)

    if (usersSnapShot.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      })
    }
  } catch (e) {
    alert('Invalid Google sign in.')
  }
}

// Login with Email and Password
const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (e) {
    alert('Invalid username / password.')
  }
}

// Create a user
const registerWithEmailAndPassword = async (
  email: string,
  name: string,
  password: string
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user

    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      email,
      authProvider: 'local',
    })
  } catch (e: any) {
    console.error(e)
    alert(e.message)
  }
}

// Reset a user's password
const resetUserPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email)
    alert('Password reset link sent!')
  } catch (e: any) {
    console.error(e)
    alert(e.message)
  }
}

// Signout User
const logOutUser = () => {
  signOut(auth)
}

export {
  auth,
  db,
  logInWithEmailAndPassword,
  logOutUser,
  registerWithEmailAndPassword,
  resetUserPassword,
  signInWithGoogle,
}
