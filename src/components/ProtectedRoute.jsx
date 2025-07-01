import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { logout } from "../authSlice";

function ProtectedRoute({ children }) {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  if (!token) {
    // no token at all → send to login
    return <Navigate to="/login" replace />;
  }

  // decode the payload (second segment of the JWT)
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    // `exp` is in seconds; compare to now (ms)
    if (payload.exp * 1000 < Date.now()) {
      // token is expired → clear it and redirect
      dispatch(logout());
      return <Navigate to="/login" replace />;
    }
  } catch (err) {
    // if anything goes wrong decoding, treat as invalid
    dispatch(logout());
    return <Navigate to="/login" replace />;
  }

  // token exists and has not yet expired
  return children;
}

export default ProtectedRoute;
