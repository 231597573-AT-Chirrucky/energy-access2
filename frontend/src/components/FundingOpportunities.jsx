import React from 'react';
import ListManager from './ListManager';

const FundingOpportunities = () => {
  const fundingOpportunities = [
    'Government Grants for Renewable Energy',
    'Corporate Sponsorship Programs',
    'Non-Profit Renewable Initiatives',
    'Community Solar Investment Funds',
    'Energy-Efficient Appliance Rebates',
    'Wind Power Subsidies',
    'Green Bond Investments',
    'Clean Energy Tax Credits',
  ];

  const handleBack = () => {
    window.history.back();
  };

  return (
    <ListManager
      title="Funding Opportunities"
      initialItems={fundingOpportunities}
      onBack={handleBack}
    />
  );
};

export default FundingOpportunities;
