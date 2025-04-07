import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isOutlet = !!localStorage.getItem("outlet");
  return isOutlet ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
