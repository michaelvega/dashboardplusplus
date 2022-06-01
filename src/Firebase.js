import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBS2aOUDMMuDTTvEuDKV7cUu_Uma_KWXJI",
    authDomain: "dashboard-4045d.firebaseapp.com",
    projectId: "dashboard-4045d",
    storageBucket: "dashboard-4045d.appspot.com",
    messagingSenderId: "330664505363",
    appId: "1:330664505363:web:f81bc0f323ab7f70de0fe6",
    measurementId: "G-5NLB6JGXRJ"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

//export default firebase;

export { storage, firebase as default };