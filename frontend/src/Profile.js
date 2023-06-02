import React, { useState, useEffect } from 'react';
import { getUserProfile, updateProfile } from './api';
import './Profile.css';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    // Fetch user profile data when component mounts
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const userProfile = await getUserProfile();
      setName(userProfile.name);
      setEmail(userProfile.email);
      setPhoneNumber(userProfile.phoneNumber);
    } catch (error) {
      console.error('Failed to fetch user profile:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateProfile({ name, email, phoneNumber });
      console.log('Profile updated successfully');
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  return (
    <div className="profile-container">
      <h2 className="profile-heading">User Profile</h2>
      <form className="profile-form" onSubmit={handleSubmit}>
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
        <button type="submit" className="profile-submit-btn">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;

