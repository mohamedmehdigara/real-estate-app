import React from 'react';
import { Navigate } from 'react-router-dom';

const withAuth = (Component, isAuthenticated) => {
  return (props) =>
    isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Navigate to="/login" />
    );
};

export default withAuth;
