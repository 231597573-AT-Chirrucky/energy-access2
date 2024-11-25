import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AllTopics from './components/AllTopics';
import CombinedForm from './components/CombinedForm';
import EnergyUsage from './components/EnergyUsage';
import Savings from './components/Savings';
import ConnectedDevices from './components/ConnectedDevices';
import SustainableEnergy from './components/SustainableEnergy';
import FundingOpportunities from './components/FundingOpportunities';
import OutreachPrograms from './components/OutreachPrograms';
import './App.css';

const App = () => (
  <Router>
    <Routes>
      {/* Login/Register */}
      <Route path="/" element={<CombinedForm />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Topics */}
      <Route path="/energy-usage" element={<EnergyUsage />} />
      <Route path="/savings" element={<Savings />} />
      <Route path="/connected-devices" element={<ConnectedDevices />} />
      <Route path="/sustainable-energy" element={<SustainableEnergy />} />
      <Route path="/funding-opportunities" element={<FundingOpportunities />} />
      <Route path="/outreach-programs" element={<OutreachPrograms />} />

      {/* All Topics */}
      <Route path="/all-topics" element={<AllTopics />} />
    </Routes>
  </Router>
);

export default App;
