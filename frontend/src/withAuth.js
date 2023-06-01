import React from 'react';
import { Redirect } from 'react-router-dom';

const withAuth = (Component, isAuthenticated) => {
  return props =>
    isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    );
};

export default withAuth;
