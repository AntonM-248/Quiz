import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let questions = [
  ['which','a','e','i','o','a'],
  ['which','a','e','i','o','e'],
  ['which','a','e','i','o','i']
];

ReactDOM.render(
  <React.StrictMode>
    <App quiz={questions}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
