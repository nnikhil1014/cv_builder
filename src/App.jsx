import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CVForm from './Form'; 
import CVPage from './Preview.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CVForm />} />
        <Route path="/preview" element={<CVPage />} />
      </Routes>
    </Router>
  );
}

export default App;
