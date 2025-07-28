import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real app, verify with backend
    if (email && password) {
      onLogin();
      navigate('/');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login to NutriTrack Pro 🍏</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p>
          Don’t have an account?{' '}
          <span onClick={() => navigate('/signup')} className="auth-link">Sign up</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
