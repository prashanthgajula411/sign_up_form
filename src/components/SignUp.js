import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; // Ensure this path is correct

function SignUp() {
  const [formData, setFormData] = useState({
    user_firstname: '',
    user_email: '',
    user_password: '',
    user_phone: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      user_lastname: 'Doe',
      user_city: 'Hyderabad',
      user_zipcode: '500072'
    };

    const response = await fetch('https://syoft.dev/Api/user_registeration/api/user_registeration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      alert('Registration successful');
      navigate('/login');
    } else {
      alert('Registration failed');
    }
  };

  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="user_firstname" value={formData.user_firstname} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="user_password" value={formData.user_password} onChange={handleChange} required />
        </label>
        <label>
          Phone:
          <input type="text" name="user_phone" value={formData.user_phone} onChange={handleChange} required />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
