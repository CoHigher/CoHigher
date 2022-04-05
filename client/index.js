console.log('Entry in js');
import ReactDOM from 'react-dom';
import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
// import additional components for routing

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
