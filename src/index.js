// File: src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Import component App

// Dòng này rất quan trọng, đảm bảo bạn không có
// import reportWebVitals nếu đã xóa file.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);