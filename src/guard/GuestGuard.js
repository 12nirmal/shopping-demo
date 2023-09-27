import React, { useContext } from "react";
import AuthContext from "../context/auth-context";
import { Navigate } from "react-router-dom";

const GuestGuard = (props) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }

  return <>{props.children}</>;
};

export default GuestGuard;
