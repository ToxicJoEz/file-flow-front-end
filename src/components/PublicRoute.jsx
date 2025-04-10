import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }) {
  const token = useSelector((state) => state.auth.token);

  // If the user is logged in, redirect them to the dashboard
  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  // Otherwise, allow access to the login or register component
  return children;
}

export default PublicRoute;
