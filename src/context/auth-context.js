import React, { useCallback, useEffect, useState } from "react";
import axios from "../utils/axios";

const AuthContext = React.createContext({
  user: {},
  isAuthenticated: false,
  login: (user) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      const authData = JSON.parse(localStorage.getItem("authData"));
      if (authData) {
        try {
          const res = await axios.get(`/auth/users/${authData.uid}`);
          if (res.status === 200) {
            const { id, username, firstName, lastName, email } = res.data;
            setUser({ id, username, firstName, lastName, email });
          } else {
            setUser({});
          }
        } catch (e) {
          console.log(e);
          setUser({});
        }
      } else {
      }
    })();
  }, []);

  const logoutHandler = useCallback(() => {
    localStorage.removeItem("authData");
    setUser({});
  }, []);

  const loginHandler = (data) => {
    setUser(data);
  };

  const contextValue = {
    user: user,
    isAuthenticated: user.id ? true : false,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
