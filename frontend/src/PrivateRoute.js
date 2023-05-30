import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { validateAuthToken } from './utils'; // Import the token validation function


const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  const authToken = localStorage.getItem('auth_token'), // Get the stored authentication token
  const decodedToken = validateAuthToken(authToken);
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default PrivateRoute;
