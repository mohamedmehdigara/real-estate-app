import React, { useState, useEffect } from 'react';
import { getUserProfile } from './api';
import './ContactForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [propertyPreferences, setPropertyPreferences] = useState('');

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      // Fetch the user's profile data from the backend
      const userProfile = await getUserProfile();
  
      // Update the state variables with the retrieved profile data
      setName(userProfile.name);
      setEmail(userProfile.email);
      setPhoneNumber(userProfile.phoneNumber);
      setLocation(userProfile.location);
      setPropertyPreferences(userProfile.propertyPreferences);
    } catch (error) {
      console.error('Failed to fetch user profile:', error);
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      // Create an object with the updated profile data
      const updatedProfile = {
        name,
        email,
        phoneNumber,
        location,
        propertyPreferences,
      };
    
      try {
        // Send the updated profile data to the backend
        const response = await updateProfile(updatedProfile);
        
        // Check the response status
        if (response.status === 200) {
          setSuccessMessage('Profile updated successfully');
        } else {
          setErrorMessage('Failed to update profile');
        }
      } catch (error) {
        setErrorMessage('Failed to update profile');
        console.error('Failed to update profile:', error);
      }
    };
    
  };
  

  // Rest of the component code...

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

