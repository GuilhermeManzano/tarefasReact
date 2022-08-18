import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyBbX7evAFndZIUSZZ0yDALIY9YWxGGhVEw",
  authDomain: "tarefas-36d99.firebaseapp.com",
  projectId: "tarefas-36d99",
  storageBucket: "tarefas-36d99.appspot.com",
  messagingSenderId: "842926892059",
  appId: "1:842926892059:web:1ffbffd5c28d029e0f44be"
};

if(!firebase.apps.lenght) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase;