import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Trade from './components/Trade';
import Help from './components/Help';
import SignUp from './components/SignUp';

const AppContent = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === '/signup';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} /> {/* Redirects to /signup on start */}
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/help" element={<Help />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
