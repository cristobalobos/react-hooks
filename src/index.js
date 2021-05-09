import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppUseState from './AppUseState';
import AppUseStateBolean from './AppUseStateBolean';
import AppUseStateObject from './AppUseStateObject';
import AppUseEffect from './AppUseEffect';


import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AppUseEffect />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
