import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBbI4MQW1E6qMFn1_PMxXfXYU07ohCER2k",
  authDomain: "crwn-clothing-e4536.firebaseapp.com",
  projectId: "crwn-clothing-e4536",
  storageBucket: "crwn-clothing-e4536.appspot.com",
  messagingSenderId: "198655520461",
  appId: "1:198655520461:web:27d1e4de5ff1c179378384"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;