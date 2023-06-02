import React, { useState, useEffect } from 'react';
import { updateContactDetails } from './api';
import './ContactForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [propertyPreferences, setPropertyPreferences] = useState('');

  useEffect(() => {
    // Fetch user's existing contact details and preferences
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    // TODO: Fetch user details from the backend and set the state variables
    // Example: const userDetails = await getUserDetails();
    // setName(userDetails.name);
    // setEmail(userDetails.email);
    // setPhoneNumber(userDetails.phoneNumber);
    // setLocation(userDetails.location);
    // setPropertyPreferences(userDetails.propertyPreferences);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the updated contact details and preferences
    const updatedDetails = {
      name,
      email,
      phoneNumber,
      location,
      propertyPreferences,
    };

    try {
      // TODO: Send the updated details to the backend to save
      await updateContactDetails(updatedDetails);
      console.log('Contact details updated successfully');
    } catch (error) {
      console.error('Failed to update contact details:', error);
    }
  };

  return (
    <div className="contact-form-container">
      <h2 className="contact-form-heading">Update Contact Details</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Preferred Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="propertyPreferences">Property Preferences:</label>
          <textarea
            id="propertyPreferences"
            value={propertyPreferences}
            onChange={(event) => setPropertyPreferences(event.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="contact-form-submit-btn">Update</button>
      </form>
    </div>
  );
};

export default ContactForm;
