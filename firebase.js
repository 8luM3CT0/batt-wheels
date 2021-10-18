import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyC_gQi1gutdyCedfhkhRd0roGa7FOk_sxA',
  authDomain: 'batt-wheels.firebaseapp.com',
  projectId: 'batt-wheels',
  storageBucket: 'batt-wheels.appspot.com',
  messagingSenderId: '172570886108',
  appId: '1:172570886108:web:4028d4a56ce00e6d921919',
  measurementId: 'G-EFCEMBSRYB'
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const store = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, store, provider }
