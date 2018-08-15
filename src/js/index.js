import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import App from './components/App';
import config from './firebase/config';

/*
* bootstrap
 */
window.firebase = firebase.initializeApp(config);
const provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithRedirect(provider).then((result) => {
  // This gives you a Google Access Token. You can use it to access the Google API.
  const token = result.credential.accessToken;
  // The signed-in user info.
  const user = result.user;
  // ...
}).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  const credential = error.credential;
  // ...
});

const dom = (
  <div>
    <App />
  </div>
);

ReactDOM.render(dom, document.querySelector('#content'));
