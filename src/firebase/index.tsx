import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBnffUN5yPKxFGNNejjRhg5ocbt9Kb0GMw",
  authDomain: "react-calc-ee91e.firebaseapp.com",
  projectId: "react-calc-ee91e",
  storageBucket: "react-calc-ee91e.appspot.com",
  messagingSenderId: "356849491791",
  appId: "1:356849491791:web:f323b780d212c4f4e82f3a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
