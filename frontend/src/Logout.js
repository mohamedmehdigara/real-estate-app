import React from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const history = useHistory();

  // Function to handle logout
  const handleLogout = () => {
    // Clear the authentication token from storage (e.g., localStorage)
    localStorage.removeItem('authToken');

    // Redirect the user to the login page
    history.push('/login');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
