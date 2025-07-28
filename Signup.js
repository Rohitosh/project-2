import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // In real app, save to backend
    alert('Account created successfully!');
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <h2>Sign Up for NutriTrack Pro 🥦</h2>
      <form onSubmit={handleSignup}>
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
        <button type="submit">Sign Up</button>
        <p>
          Already have an account?{' '}
          <span onClick={() => navigate('/login')} className="auth-link">Log in</span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
