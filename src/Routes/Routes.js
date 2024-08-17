import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../autofits/ScreenSet';
import HariNadh1 from '../practiceComp/Events';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HariNadh1 />} />
        <Route path="/home/success" element={<App />} />
        <Route path="*" element={<App />} />  {/* Fallback for any undefined routes */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
