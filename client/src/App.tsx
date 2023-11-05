import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Invest from '../../client/src/pages/invest.tsx';
import SocialImpact from '../../client/src/pages/social-impact';
import About from './pages/about.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Invest />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/socialImpact" element={<SocialImpact />} />
        <Route path="/aboutUs" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;