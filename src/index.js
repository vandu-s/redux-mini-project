import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
im
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './services/Reducers/index'
const store=createStore(rootReducer);
console.log('store',store);
console.warn('store',store);

ReactDOM.render(
  <provider store={store}>
    <App />
  </provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
