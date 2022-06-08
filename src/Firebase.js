import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional


//Testing
/*const firebaseConfig = {
    apiKey: "AIzaSyBS2aOUDMMuDTTvEuDKV7cUu_Uma_KWXJI",
    authDomain: "dashboard-4045d.firebaseapp.com",
    projectId: "dashboard-4045d",
    storageBucket: "dashboard-4045d.appspot.com",
    messagingSenderId: "330664505363",
    appId: "1:330664505363:web:f81bc0f323ab7f70de0fe6",
    measurementId: "G-5NLB6JGXRJ"
  };*/

  const firebaseConfig = {
    apiKey: "AIzaSyBsbsj5vZpDw70ubofL5DBlY1ujkZ5fQtM",
    authDomain: "fir-functions-api-a924d.firebaseapp.com",
    databaseURL: "https://fir-functions-api-a924d-default-rtdb.firebaseio.com",
    projectId: "fir-functions-api-a924d",
    storageBucket: "fir-functions-api-a924d.appspot.com",
    messagingSenderId: "47817084187",
    appId: "1:47817084187:web:92c9e3ab971091936397be"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

//export default firebase;

export { storage, firebase as default };