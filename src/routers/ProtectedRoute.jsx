import React, { Children } from "react";
import useAuth from "../custom-hooks/useAuth";

import { Navigate } from "react-router-dom";

/**
 * Component to render protected routes
 * @param {Object} children - The child components to be rendered if the user is authenticated
 * @returns {JSX.Element} - The protected route component
 */
const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
