import React, { useState } from 'react';
import './Registration.css';

export const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courses: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      courses: checked
        ? [...prevData.courses, value]
        : prevData.courses.filter((course) => course !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration Successful! Here are your details:\n' + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="registration-form-container">
      <h2>Register for Online Courses</h2>
      <form onSubmit={handleSubmit} className="registration-form">
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
          <label htmlFor="email">Email ID:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Opted Online Courses:</label>
          <div>
            <input
              type="checkbox"
              id="course1"
              name="courses"
              value="Web Development"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="course1">Web Development</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="course2"
              name="courses"
              value="Data Science"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="course2">Data Science</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="course3"
              name="courses"
              value="Graphic Design"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="course3">Graphic Design</label>
          </div>
        </div>

        <button type="submit">Register</button>
      </form>

      <div className="form-output">
        <h3>Your Data:</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
};

