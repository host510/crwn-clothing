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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) { return; }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;