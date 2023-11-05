import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Invest from '../../client/src/pages/invest.tsx';
import SocialImpact from '../../client/src/pages/social-impact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Invest />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/socialImpact" element={<SocialImpact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;