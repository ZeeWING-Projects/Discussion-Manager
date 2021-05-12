const firebase = require('firebase');
var firebaseConfig = {
    apiKey: "AIzaSyBBkLsQDhZ3U1uWYap63SrmVjvZZkdEZeA",
    authDomain: "discussion-manager.firebaseapp.com",
    projectId: "discussion-manager",
    storageBucket: "discussion-manager.appspot.com",
    messagingSenderId: "445650446085",
    appId: "1:445650446085:web:875ae459bdb5af03f9b96c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

module.exports=firebase;