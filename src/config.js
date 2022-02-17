const initialiseApp = require('firebase/app');
const getFirestore = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyCXqcfzuq-5FT7-2W1e5sJLLEaqjR0x2HA",
  authDomain: "subllyme-00.firebaseapp.com",
  projectId: "subllyme-00",
  storageBucket: "subllyme-00.appspot.com",
  messagingSenderId: "436259114972",
  appId: "1:436259114972:web:e2c8a177fae708812cc919",
  measurementId: "G-3E5F08KX3M"
};

initialiseApp.initializeApp(firebaseConfig);

const db = getFirestore.getFirestore();

module.exports = db;
