import React from 'react';
import { useNavigate } from 'react-router-dom';
import ListManager from './ListManager';

const Savings = () => {
  const navigate = useNavigate();

  const initialItems = [
    'Energy-efficient Lighting',
    'Smart Thermostat Savings',
    'Solar Panel Installation Benefits',
    'Insulation Improvements',
    'Water Heater Energy Savings',
    'Use of Energy Star Appliances',
    'Upgrading to Energy-efficient Windows',
    'Seasonal Energy-Saving Adjustments',
  ];

  return (
    <ListManager
      title="Savings Tips"
      initialItems={initialItems}
      placeholder="Add new saving tip"
      onBack={() => navigate(-1)}
    />
  );
};

export default Savings;
