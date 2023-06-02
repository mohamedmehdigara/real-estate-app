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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Send updated profile data to the backend server
      await axios.put('/api/profile', {
        name,
        email,
        phoneNumber,
      });
  
      // Display success message or perform any other desired actions
      console.log('Profile updated successfully!');
    } catch (error) {
      console.log(error);
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
