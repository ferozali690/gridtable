import React from "react";
import { useState } from "react";

import { Redirect, Link } from "react-router-dom";
import "./Login.css";
const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIN, setLoggedIN] = useState(false);

  const handleSubmit = () => {
    if (userName === "hruday@gmail.com" && password === "hruday123") {
      setLoggedIN(true);
    }
  };

  if (loggedIN) {
    return <Redirect to="/Dashboard" />;
  }
  return (
    <div className="login-container">
      <h1>Login</h1>

      <form>
        <label htmlFor="myInput">Username</label>
        <input
          id="myInput"
          type="email"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter Username"
        />
        <br />
        <label htmlFor="myPass">Password</label>
        <input
          id="myPass"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <br />
        <Link to="/Dashboard">
          <button onClick={handleSubmit}>Log In</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
