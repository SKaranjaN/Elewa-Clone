import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Invest from '../src//Invest'; // Import your route components
import SocialImpact from './SocialImpact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Invest />} />
        <Route path="/social-impact" element={<SocialImpact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;