import React, { useContext } from "react";
import AuthContext from "../context/auth-context";
import Login from "../pages/Login";

const AuthGuard = (props) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Login />;
  }

  return <>{props.children}</>;
};

export default AuthGuard;
