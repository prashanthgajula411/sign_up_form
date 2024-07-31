import React from 'react';
import './Dashboard.css';

function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    return <div>No user data available.</div>;
  }

  return (
    <div className="dashboard">
      <h2>User Dashboard</h2>
      <div className="user-info">
        <p><strong>Email:</strong> {user.user_email}</p>
        <p><strong>Phone:</strong> {user.user_phone}</p>
        <p><strong>City:</strong> {user.user_city}</p>
        {/* Add more fields as needed */}
      </div>
    </div>
  );
}

export default Dashboard;
