import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './scss/app.scss';

import App from './App';
// import { Home } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
      {/* <Routes>
        <Route path="/" element={<App />} />
      </Routes> */}
    </Router>
  </React.StrictMode>,
);
