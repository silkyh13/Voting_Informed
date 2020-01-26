import firebase from 'firebase';
require('dotenv').config()
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.DB_apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//make auth for future references
const auth = firebase.auth();
const db = firebase.firestore();

//update firestore settings
db.settings({timestampsInSnapshots:true})
export default firebase;