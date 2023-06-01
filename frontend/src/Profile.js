import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        // Make an API request to retrieve the user's profile data
        const response = await axios.get('/api/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('auth_token')}`,
          },
        });

        // Extract the profile data from the response
        const { name, email, phoneNumber } = response.data;

        // Update the state variables with the profile data
        setName(name);
        setEmail(email);
        setPhoneNumber(phoneNumber);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone Number: {phoneNumber}</p>
      {/* Add other profile information and components here */}
    </div>
  );
};

export default Profile;
