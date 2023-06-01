
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import {validateAuthToken} from "./utils";
import Element from './Element';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  const authToken = localStorage.getItem('auth_token'); // Get the stored authentication token
  const decodedToken = validateAuthToken(authToken); // Validate and decode the token

  return (
    <Route
      {...rest}
      element={
        isAuthenticated && decodedToken ? (
          <Element />
        ) : (
          <Navigate to="/login" replace />
        )
      }
    />
  );
};

export default PrivateRoute;