import React from "react";
import { Navigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

function ProtectedRoute({ children, isAllowed = true, redirectPath = "/" }) {
  const { token } = UseAuth();

  if (!token) {
    alert("Redirect to Home");
    return <Navigate to={"/"} replace />;
  }

  if (!isAllowed) {
    alert("Redirect to Home");
    return <Navigate to={redirectPath} replace />;
  }
  return children;
}

export default ProtectedRoute;
