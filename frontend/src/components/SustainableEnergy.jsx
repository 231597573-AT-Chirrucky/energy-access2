import React from 'react';
import { useNavigate } from 'react-router-dom';
import ListManager from './ListManager'; // Import the reusable ListManager

const SustainableEnergy = () => {
  const navigate = useNavigate();

  const sustainableEnergyList = [
    'Solar Energy Solutions',
    'Wind Power Generation',
    'Hydropower Basics',
    'Geothermal Energy Systems',
    'Energy Efficiency and Conservation',
    'Biomass Energy',
    'Ocean Energy',
    'Energy Storage Technologies',
    'Smart Grid Systems',
  ];

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <ListManager
      title="Sustainable Energy"
      initialItems={sustainableEnergyList}
      onBack={handleBack}
    />
  );
};

export default SustainableEnergy;
