import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/Bootstrap/bootstrap.min-litera.css';
// import './Assets/Bootstrap/bootstrap.min-cyborg.css';
// import './Assets/Bootstrap/bootstrap.min-morph.css';
// import './Assets/Bootstrap/bootstrap.min-lux.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
