import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCEhnngGVGppv74fqCoSNdq0cq-sSi3hl0',
  authDomain: 'music-addfe.firebaseapp.com',
  projectId: 'music-addfe',
  storageBucket: 'music-addfe.appspot.com',
  appId: '1:263658071349:web:55f34ccd38a82a86d7187c',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const userCollection = db.collection('users');

export {
  auth,
  db,
  userCollection,
};
