import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setLoginError('Email and password are required.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.token) {
        localStorage.setItem('user-token', data.token);
        navigate('/dashboard');
      } else {
        setLoginError('Invalid email or password.');
      }
    } catch (error) {
      setLoginError('Login failed. Please try again.');
    }
  };

  const handleGoogleLoginSuccess = (response) => {
    console.log('Google login successful:', response);

    fetch('http://localhost:5000/api/google-login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: response.credential }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem('user-token', data.token);
          navigate('/dashboard');
        }
      })
      .catch((error) => {
        console.error('Google login error:', error);
        setLoginError('Google login failed.');
      });
  };

  const handleGoogleLoginFailure = (error) => {
    console.error('Google login failed:', error);
    setLoginError('Google login failed. Please try again.');
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      
      {loginError && <div className="error">{loginError}</div>}
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>

      <GoogleLogin
        onSuccess={handleGoogleLoginSuccess}
        onError={handleGoogleLoginFailure}
      />

      <div>
        <a href="/forgot-password">Forgot Password?</a>
      </div>

      <div>
        <p>Don't have an account? <a href="/signup">Sign up</a></p>
      </div>
    </div>
  );
};

export default LoginPage;
