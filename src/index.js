import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// React Bootstrap
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.css"

import { Provider } from 'react-redux';
import indexStore from './Store/indexStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={indexStore}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
