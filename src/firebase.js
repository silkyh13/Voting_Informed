import * as firebase from 'firebase';

console.log(process.env.projectId);
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
};
console.log(process.env);
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//make auth for future references
const auth = firebase.auth();
const db = firebase.firestore();

//update firestore settings
db.settings({timestampsInSnapshots:true})
export default firebase;




















//Brian was here