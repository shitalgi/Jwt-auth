import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/Dashboard.css';

const Dashboard: React.FC = () => {
  const { user, logout, token } = useAuth();
  const navigate = useNavigate();

  const handleLogout = (): void => {
    logout();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </header>

      <div className="dashboard-content">
        <div className="welcome-card">
          <h2>Welcome, {user?.username}!</h2>
          <p>You have successfully logged in to the dashboard.</p>
        </div>

        <div className="info-card">
          <h3>User Information</h3>
          <div className="info-row">
            <span className="info-label">User ID:</span>
            <span className="info-value">{user?.id}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Username:</span>
            <span className="info-value">{user?.username}</span>
          </div>
        </div>

        <div className="token-card">
          <h3>JWT Token Information</h3>
          <p className="token-info">Your authentication token is securely stored in localStorage.</p>
          <div className="token-display">
            <p className="token-label">Token (truncated):</p>
            <code className="token-value">
              {token ? `${token.substring(0, 50)}...` : 'No token'}
            </code>
          </div>
        </div>

        <div className="features-card">
          <h3>Protected Features</h3>
          <ul className="features-list">
            <li>✓ JWT-based authentication</li>
            <li>✓ Secure token storage</li>
            <li>✓ Protected routes</li>
            <li>✓ Automatic token expiry check</li>
            <li>✓ Session persistence</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
