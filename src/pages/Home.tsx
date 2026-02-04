import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/Home.css';

const Home: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Auth App</h1>
        <p className="home-description">
          A secure React application with JWT authentication
        </p>
        
        <div className="features">
          <div className="feature-item">
            <h3>🔐 Secure Authentication</h3>
            <p>JWT-based authentication system</p>
          </div>
          <div className="feature-item">
            <h3>🛡️ Protected Routes</h3>
            <p>Access control for sensitive pages</p>
          </div>
          <div className="feature-item">
            <h3>💾 Token Storage</h3>
            <p>Safe token management in localStorage</p>
          </div>
        </div>

        <div className="home-actions">
          {isAuthenticated ? (
            <Link to="/dashboard" className="primary-button">
              Go to Dashboard
            </Link>
          ) : (
            <>
              <Link to="/login" className="primary-button">
                Login
              </Link>
              <p className="home-note">
                Use demo/password to test the authentication
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
