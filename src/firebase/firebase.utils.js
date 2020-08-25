import firebase from 'firebase/app';
import 'firebase/firestore'; //for db purpose
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBPDPY354A5eH8HZGldWgw339d19dOvtzI",
    authDomain: "crwn-db-1dc20.firebaseapp.com",
    databaseURL: "https://crwn-db-1dc20.firebaseio.com",
    projectId: "crwn-db-1dc20",
    storageBucket: "crwn-db-1dc20.appspot.com",
    messagingSenderId: "383684881673",
    appId: "1:383684881673:web:bdf702e8b7d98a809477d8",
    measurementId: "G-VKFFNZ8KJR"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//setup google authenticatiom
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
