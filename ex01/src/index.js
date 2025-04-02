import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test3 from './aaa';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

function Test2() {
  return <h3>Test 2 컴포넌트</h3>
}
function Test1() {
  return <h3>Test 1 컴포넌트</h3>

}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
