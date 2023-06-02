import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('/api/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('auth_token')}`,
          },
        });

        const { name, email, phoneNumber } = response.data;

        setName(name);
        setEmail(email);
        setPhoneNumber(phoneNumber);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfileData();
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      // Send a request to the backend server to update the profile
      const response = await axios.put('/api/profile', {
        name,
        email,
        phoneNumber,
        // Include other profile attributes as needed
      });
  
      // Check the response status and display appropriate messages
      if (response.status === 200) {
        // Profile update successful
        setMessage('Profile updated successfully.');
      } else {
        // Handle other possible response statuses or error scenarios
        setMessage('An error occurred while updating the profile.');
      }
    } catch (error) {
      // Handle any errors that occurred during the request
      setMessage('An error occurred while updating the profile.');
    }
  };
  
  

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} />
        </label>
        <br />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
