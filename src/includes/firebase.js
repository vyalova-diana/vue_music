import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyD54anfq5MlnqN8x7M4rM8KA8y59ofRCEI',
  authDomain: 'music-213fd.firebaseapp.com',
  projectId: 'music-213fd',
  storageBucket: 'music-213fd.appspot.com',
  messagingSenderId: '706488940712',
  appId: '1:706488940712:web:52ba259b540697f4136a9d'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`)
})

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export { auth, db, usersCollection, songsCollection, commentsCollection, storage}
