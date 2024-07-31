import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    user_email: '',
    user_password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      user_email: formData.user_email,
      user_password: formData.user_password
    };

    const response = await fetch('https://syoft.dev/Api/userlogin/api/userlogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('user', JSON.stringify({
        user_email: data.user_email,
        user_phone: data.user_phone,
        user_city: data.user_city,
        // Add any other fields you want to store
      }));
      alert('Login successful');
      navigate('/dashboard');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="user_password" value={formData.user_password} onChange={handleChange} required />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
