import React from 'react';
import { useNavigate } from 'react-router-dom';
import ListManager from './ListManager'; // Import the reusable ListManager

const OutreachPrograms = () => {
  const navigate = useNavigate();

  const outreachPrograms = [
    'School Energy Awareness Drives',
    'Community Solar Power Projects',
    'Neighborhood Recycling Initiatives',
    'Workshops on Energy Conservation',
    'Partnerships with Local NGOs',
    'Clean Energy Campaigns',
    'Energy-efficient Building Programs',
    'Public Awareness on Electric Vehicles',
    'Green Technology Fairs',
  ];

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <ListManager
      title="Outreach Programs"
      initialItems={outreachPrograms}
      onBack={handleBack}
    />
  );
};

export default OutreachPrograms;
