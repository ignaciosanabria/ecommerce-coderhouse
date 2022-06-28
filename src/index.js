import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBRys3DWdEE9Lsl3-PDlk2qbRQnkxZsHEk",
  authDomain: "ecommerce-coderhouse-f56e6.firebaseapp.com",
  projectId: "ecommerce-coderhouse-f56e6",
  storageBucket: "ecommerce-coderhouse-f56e6.appspot.com",
  messagingSenderId: "912035817483",
  appId: "1:912035817483:web:124d05d5a5658af2a0bf0e"
};
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

{
  /*<React.StrictMode></React.StrictMode>*/
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
