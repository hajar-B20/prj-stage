import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import '@styles/SignIn.css';

export default function SignUp() {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    alert(`Account created for ${formData.email}`);
  };

  const handleGoogleSignUp = () => {
    alert('Redirecting to Google Sign-Up...');
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>Create Account 🌸</h2>
        <p className="subtitle">Sign up to start your flower journey</p>
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button type="submit" className="signin-btn">Sign Up</button>
        </form>

        <div className="divider">or</div>

        <button className="google-signin-btn" onClick={handleGoogleSignUp}>
          <FcGoogle size={24} /> Sign up with Google
        </button>

        <p className="no-account" style={{ marginTop: '16px' }}>
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
