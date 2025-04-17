import React, { useState } from "react";
import axios from "axios";
import './Login.css';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Login successful! Redirecting...');
        localStorage.setItem('token', data.token);
        // redirect after a short delay
        setTimeout(() => {
          window.location.href = '/'; // or wherever you want to go
        }, 1500);
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Something went wrong');
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
        <div className="input-row">
          <input 
            type="email" 
            name='email'
            placeholder='Enter Email Address'
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="input-row">
          <input 
            type="password" 
            name='password'
            placeholder='Enter Password'
            value={formData.password}
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

