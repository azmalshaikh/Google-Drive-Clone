import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCtScjkbpkfG0wPx3aQjEp2z0x-hcWZTT0",
    authDomain: "driveclone-1.firebaseapp.com",
    projectId: "driveclone-1",
    storageBucket: "driveclone-1.appspot.com",
    messagingSenderId: "1065057146018",
    appId: "1:1065057146018:web:741e6a33d0a984f997f3fb",
    measurementId: "G-WHX3D80WB4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebase.firestore()

export { auth, provider, db, storage }