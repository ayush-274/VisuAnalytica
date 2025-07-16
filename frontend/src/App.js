// src/App.js
import React from 'react';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* Add additional routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
