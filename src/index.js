import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HariNadh1 from './practiceComp/Events.js';
import HariNadh2 from './autofits/ScreenSet.js';
import Home from './autofits/ScreenSet.js';
import AppRoutes from './Routes/Routes.js';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <App /> */}
< AppRoutes />
  
  
  {/*<HariNadh1 /> */}
   { /* <HariNadh2 /> */ }
   { /* <Home /> */}
   {/*<Parent />
   index.js child class: <Child /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
