import React from 'react';
import { useNavigate } from 'react-router-dom';
import ListManager from './ListManager';

const EnergyUsage = () => {
  const navigate = useNavigate();

  const initialItems = [
    'Refrigerator Usage: 500 kWh/month',
    'Air Conditioner Usage: 350 kWh/month',
    'Lighting Usage: 120 kWh/month',
    'Washing Machine Usage: 100 kWh/month',
    'Dishwasher Usage: 80 kWh/month',
    'Heater Usage: 200 kWh/month',
    'Oven Usage: 150 kWh/month',
    'TV Usage: 50 kWh/month',
    'Computer Usage: 60 kWh/month',
    'Microwave Usage: 40 kWh/month',
    'Vacuum Cleaner Usage: 30 kWh/month',
    'Water Pump Usage: 220 kWh/month',
  ];

  return (
    <ListManager
      title="Energy Usage"
      initialItems={initialItems}
      placeholder="Add new energy usage"
      onBack={() => navigate(-1)}
    />
  );
};

export default EnergyUsage;
