import React from 'react';
import './Services.css'; 

 const services = [
  {
    id: 1,
    title: 'Interactive Lessons',
    description: 'Engage with interactive lessons designed to improve understanding and retention.',
    imageUrl: 'https://www.mckv.edu.in/site/assets/files/2008/untitled.564x0-is.jpeg', 
  },
  {
    id: 2,
    title: 'Personalized Learning',
    description: 'Get personalized learning paths based on your strengths and weaknesses.',
    imageUrl: 'https://integranxt.com/wp-content/uploads/2024/01/High-School-Student-Learning-scaled.jpg',
  },
  {
    id: 3,
    title: 'Expert Tutors',
    description: 'Learn from experienced and certified tutors through one-on-one sessions.',
    imageUrl: 'https://www.shutterstock.com/image-photo/group-portrait-happy-diverse-colleagues-260nw-1912431385.jpg',
  },
  {
    id: 4,
    title: 'Progress Tracking',
    description: 'Track your progress with the basic steps.',
    imageUrl: 'https://www.careerexperts.co.uk/wp-content/uploads/2022/01/Using-Milestones-to-Monitor-Progress.jpg',
  },
];

export const Service = () => {
  return (
    <section className="services">
      <h2 className="services-title">Our E-Learning Services</h2>
      <div className="services-list">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <img src={service.imageUrl} alt={service.title} className="service-image" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

