// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/dashboard'; // ✅ Correct for small 'd'
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);
  const handleLogin = () => setIsLoggedIn(true);

  return (
    <div className={isDark ? 'App dark' : 'App'}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Dashboard isDark={isDark} toggleTheme={toggleTheme} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
