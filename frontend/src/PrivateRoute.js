
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import {validateAuthToken} from "utils"

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  const authToken = localStorage.getItem('auth_token'); // Get the stored authentication token
  const decodedToken = validateAuthToken(authToken); // Validate and decode the token

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && decodedToken ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;