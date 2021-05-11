import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyADFalPAhAP8N2T2XQa7Rs25Q_A6T6XaH8",
  authDomain: "booksantastage1.firebaseapp.com",
  projectId: "booksantastage1",
  storageBucket: "booksantastage1.appspot.com",
  messagingSenderId: "1038809440667",
  appId: "1:1038809440667:web:f78027f2208fea4131013e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();