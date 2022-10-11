import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM 생성
const root = ReactDOM.createRoot(document.getElementById('root'));

// HTML DOM - react DOM 연결
root.render(

  // React가 가진 기본 컴포넌트 - import React
  <React.StrictMode>
    {/* 생성한 컴포넌트 - import App */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
