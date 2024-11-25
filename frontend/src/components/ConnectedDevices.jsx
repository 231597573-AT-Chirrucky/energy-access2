import React from 'react';
import ListManager from './ListManager';

const ConnectedDevices = () => {
  const connectedDevicesList = [
    'Smart Thermostat: Connected to Wi-Fi',
    'Smart Light Bulbs: Connected to Zigbee',
    'Smart Speaker: Connected to Bluetooth',
    'Security Camera: Connected to Wi-Fi',
    'Smart Door Lock: Connected to Zigbee',
    'Smart Refrigerator: Connected to Wi-Fi',
    'Smart TV: Connected to Ethernet',
    'Smart Washing Machine: Connected to Wi-Fi',
    'Smart Microwave: Connected to Bluetooth',
    'Smart Smoke Detector: Connected to Wi-Fi',
  ];

  const handleBack = () => {
    window.history.back();
  };

  return (
    <ListManager
      title="Funding Opportunities"
      initialItems={connectedDevicesList}
      onBack={handleBack}
    />
  );
};

export default ConnectedDevices;
