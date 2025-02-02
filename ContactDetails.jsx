import React, { useState } from 'react';
import './ContactDetails.css';

const ContactDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your details!\n' + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="contact-details-container">
      <h2>Contact Us</h2>

      <section className="company-info">
        <h3>About Our Company</h3>
        <p>
          We are a leading e-learning platform providing high-quality courses in various domains, including
          Web Development, Data Science, Graphic Design, and more. Our mission is to make learning accessible to
          everyone, anywhere, at any time. Join us and start learning today!
        </p>
      </section>

      <section className="contact-info">
        <h3>Contact Information</h3>
        <p><strong>Phone Number:</strong> +91 9905815980</p>
        <p><strong>Email:</strong> support@elearning.com</p>
      </section>

      <section className="map">
        <h3>Our Location</h3>
        <iframe
          title="company-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5358.594892760222!2d77.58927250041609!3d12.915469619468373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1597cd6fe0a5%3A0x36097fc10e521aef!2sJain%20(Deemed-to-be%20University)!5e0!3m2!1sen!2sin!4v1738166981910!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      <section className="contact-form">
        <h3>Enter Your Details</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Permanent Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default ContactDetails;
