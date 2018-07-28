import React from 'react';
import ReactDOM from 'react-dom';
import style from '../index.css';
import Test from './Test';

const dom = (
  <div className={style.world}>
    <h1>hello world</h1>
    <Test int={45} str="str" bar={{ str: 'bar' }} />
  </div>
);

ReactDOM.render(dom, document.querySelector('#content'));
