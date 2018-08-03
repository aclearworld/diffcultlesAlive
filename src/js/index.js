import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const dom = (
  <div>
    <App />
  </div>
);

ReactDOM.render(dom, document.querySelector('#content'));
