import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Calculator from './component/Calculator/Calculator';



ReactDOM.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
