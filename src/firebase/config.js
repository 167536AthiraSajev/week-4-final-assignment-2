import * as firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'
import { Base64 } from 'js-base64';

const Config ={
  
apiKey: 'AIzaSyCYSyu4o7oHBi-ClIZKZb_U0YxE95TRQTI',
authDomain: 'week4geolocation.firebaseapp.com',
databaseURL: 'https://week4geolocation-default-rtdb.firebaseio.com/',
projectId: 'week4geolocation',
storageBucket: 'week4geolocation.appspot.com',
messagingSenderId: '298853145818',
appId: '1:298853145818:android:8fc62c5618e7b9e1c399e3',

};
/*
apiKey: "AIzaSyDqAo1VfUwo7AWKBJK_zGkSnvS_WT0svdE",
authDomain: "crwn-db-c4e4f.firebaseapp.com",
projectId: "crwn-db-c4e4f",
storageBucket: "crwn-db-c4e4f.appspot.com",
messagingSenderId: "452126882503",
appId: "1:452126882503:web:a577116fc21bdc89c6dce2",
measurementId: "G-S4G4D4CS99"
*/
  

/*
if(!firebase.apps.length){
  firebase.initializeApp(Config);
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

const provider1 = new firebase.auth.FacebookAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithFacebook = () => auth.signInWithPopup(provider1);

export  {firebase};

*/

firebase.initializeApp(Config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

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
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

const provider1 = new firebase.auth.FacebookAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithFacebook = () => auth.signInWithPopup(provider1);


export default firebase;

