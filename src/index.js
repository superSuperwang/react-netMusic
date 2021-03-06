import React from 'react';
import ReactDOM from 'react-dom';
import './static/swiper.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom"
import store from '@/store'

const render = () => {
  ReactDOM.render(<BrowserRouter>
    <App />
  </BrowserRouter>,
    document.getElementById('root'));
}

store.subscribe(render)
render()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
