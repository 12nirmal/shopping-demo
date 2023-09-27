import React, { useContext } from "react";
import { useState } from "react";
import axios from "../utils/axios";
import AuthContext from "../context/auth-context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [passwodError, setPasswordError] = useState(false);
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleusername = (e) => {
    let username = e.target.value;
    if (username.length < 4) {
      setUserNameError(true);
    } else {
      setUserNameError(false);
    }
    setUserName(username);
  };

  const handlePassword = (e) => {
    let password = e.target.value;
    if (password.length < 6) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    setPassword(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.length < 4) {
      setUserNameError(true);
      return false;
    } else {
      setUserNameError(false);
    }

    if (password.length < 6) {
      setPasswordError(true);
      return false;
    } else {
      setPasswordError(false);
    }

    setLoading(true);
    setFormError("");
    const response = await axios.post(`/auth/login`, { username, password });
    const resData = response;
    setLoading(false);
    if (resData.status === 200) {
      const { id, username, firstName, lastName, email } = resData.data;
      auth.login({ id, username, firstName, lastName, email });

      localStorage.setItem(
        "authData",
        JSON.stringify({
          uid: response.data.id,
          token: response.data.token,
        })
      );
      axios.defaults.headers.common = {
        Authorization: `Bearer ${response.data.token}`,
      };

      navigate("/home");
    } else {
      setFormError(resData.message);
    }
  };

  return (
    <>
      <form className="login-container" onSubmit={handleSubmit}>
        <div className="loginIMG">
          <img
            src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png"
            alt=""
          />
        </div>
        <div className="login-form">
          <h1>
            <i className="fa-solid fa-user"></i> Login
          </h1>
          {formError && <p>{formError}</p>}
          <input
            className="int"
            type="text"
            placeholder="username"
            onChange={handleusername}
            value={username}
            // required
          />
          {userNameError ? <p>Name must be grater than 4 characters</p> : ""}
          <input
            className="int2"
            type="password"
            placeholder="password"
            onChange={handlePassword}
            value={password}
            // required
          />
          {passwodError ? <p>Enter 6 digits</p> : ""}
          <button className="btn" type="submit">
            {" "}
            {loading ? (
              <div>
                <h4>loading..!!</h4>
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </>
  );
};
export default Login;
