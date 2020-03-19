import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC_A5AvDjjROq-JTO4QDDVDLwWVuVJ_uOk",
  authDomain: "dj-producer-shop.firebaseapp.com",
  databaseURL: "https://dj-producer-shop.firebaseio.com",
  projectId: "dj-producer-shop",
  storageBucket: "dj-producer-shop.appspot.com",
  messagingSenderId: "557886071065",
  appId: "1:557886071065:web:729df177c9fcc678316588",
  measurementId: "G-NVPHZ8KRZZ"
};

firebase.initializeApp(config);

export const createUser = async (userData, additionalData) => {
  if(!userData) return; 
  
  const userRef = firestore.doc(`users/${userData.uid}`); 
  const shapShot = await userRef.get(); 

  if(!shapShot.exists) {
    const { displayName, email } = userData; 
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

export const addCollectionAndDocuments = async (collectionName, collectionDoc) => {
  const collectionRef = firestore.collection(collectionName); 
  const batch = firestore.batch(); 

  collectionDoc.forEach(doc => {
    const newDocRef = collectionRef.doc(); 
    batch.set(newDocRef, doc); 
  });
  
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  });
};

export const auth = firebase.auth(); 
export const firestore = firebase.firestore(); 

export const googleProvider = new firebase.auth.GoogleAuthProvider(); 
googleProvider.setCustomParameters({ prompt: 'select_account' }); 
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider); 

export default firebase; 