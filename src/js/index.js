import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import App from './components/App';
import config from './firebase/config';

const firebaseApp = firebase.initializeApp(config);

const dom = (
  <div>
    <App />
  </div>
);

ReactDOM.render(dom, document.querySelector('#content'));
