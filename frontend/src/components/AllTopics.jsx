import React from "react";
import "../styles/AllTopics.css"; // Ensure this file exists and is properly linked

const AllTopics = () => {
  const topics = [
    {
      id: 1,
      title: "Energy Usage",
      description: "Explore efficient energy usage tips.",
      extendedContent: "Learn how to save energy at home and reduce your carbon footprint.",
    },
    {
      id: 2,
      title: "Connected Devices",
      description: "Discover energy-smart connected devices.",
      extendedContent: "Get insights on devices that can help optimize energy consumption in real-time.",
    },
    {
      id: 3,
      title: "Savings",
      description: "Save money with energy-efficient strategies.",
      extendedContent: "Access practical strategies for saving on energy bills while promoting sustainability.",
    },
    {
      id: 4,
      title: "Training Programs",
      description: "Empowering users with knowledge.",
      extendedContent: "Participate in webinars and workshops to enhance your energy efficiency skills.",
    },
    {
      id: 5,
      title: "Community Engagement",
      description: "Building connections for sustainable energy.",
      extendedContent: "Collaborate with communities to promote modern energy solutions.",
    },
    {
      id: 6,
      title: "Sustainable Practices",
      description: "Implement green solutions.",
      extendedContent: "Adopt eco-friendly practices for a sustainable future.",
    },
  ];

  return (
    <div className="topic-content">
      <div className="card-container">
        {topics.map((topic) => (
          <div key={topic.id} className="topic-card">
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
            <div className="extended-content">{topic.extendedContent}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTopics;

