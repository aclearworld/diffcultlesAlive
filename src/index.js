import React from 'react'
import ReactDOM from 'react-dom'
import  style from  './index.css'

const dom =
    <div className={style.world}>
        <h1> hello  world</h1>
    </div>

ReactDOM.render(dom, document.querySelector('#content'))
