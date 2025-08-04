import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import '@styles/SignIn.css';

export default function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }
    alert(`Signed in as ${formData.email}`);
  };

  const handleGoogleSignIn = () => {
    alert('Redirecting to Google Sign-In...');
    // TODO: Add real OAuth flow
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>Welcome Back 🌸</h2>
        <p className="subtitle">Sign in to continue exploring our floral wonders</p>
        {error && <p className="error-msg">{error}</p>}

        <form onSubmit={handleSubmit} className="signin-form">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit" className="signin-btn">Sign In</button>
          <p className="no-account">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>

        <div className="divider">or</div>

        <button className="google-signin-btn" onClick={handleGoogleSignIn}>
          <FcGoogle size={24} /> Sign in with Google
        </button>
      </div>
    </div>
  );
}
