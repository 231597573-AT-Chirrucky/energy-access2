import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaBolt,
  FaDollarSign,
  FaPlug,
  FaLeaf,
  FaMoneyCheckAlt,
  FaHandsHelping,
} from 'react-icons/fa';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [welcomeAnimation, setWelcomeAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setWelcomeAnimation(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    // Clear authentication data (e.g., tokens, user info)
    localStorage.clear(); // Example: Clearing local storage
    navigate('/'); // Redirect to CombinedForm
  };

  const topics = [
    { icon: <FaBolt />, label: 'Energy Usage', path: '/energy-usage' },
    { icon: <FaDollarSign />, label: 'Savings', path: '/savings' },
    {
      icon: <FaPlug />,
      label: 'Connected Devices',
      path: '/connected-devices',
    },
    {
      icon: <FaLeaf />,
      label: 'Sustainable Energy',
      path: '/sustainable-energy',
    },
    {
      icon: <FaMoneyCheckAlt />,
      label: 'Funding Opportunities',
      path: '/funding-opportunities',
    },
    {
      icon: <FaHandsHelping />,
      label: 'Outreach Programs',
      path: '/outreach-programs',
    },
  ];

  return (
    <div className="dashboard-page">
      {/* Header */}
      <header className="dashboard-header">
        <div className="logo" onClick={() => navigate('/dashboard')}>
          <h2>EnergyApp</h2>
        </div>
        <nav>
          {['Home', 'About', 'Profile'].map((text) => (
            <button key={text} onClick={() => navigate(`/dashboard`)}>
              {text}
            </button>
          ))}
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </header>

      {/* Dashboard Content */}
      <div className="dashboard-container">
        <h1 className={`welcome-text ${welcomeAnimation ? 'slide-down' : ''}`}>
          Welcome, Mr. Aly Tsakane Chirrucky!
        </h1>
        <p className="mission-text">
          Your mission for affordable, sustainable energy begins here.
        </p>

        {/* Topics Section */}
        <div className="circle">
          <div className="dashboard-topics">
            {topics.map(({ icon, label, path }) => (
              <div
                key={label}
                className="topic-circle"
                onClick={() => navigate(path)}
              >
                {icon}
                <span>{label}</span>
              </div>
            ))}
            <button
              className="center-button"
              onClick={() => navigate('/all-topics')}
            >
              Show All Topics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
