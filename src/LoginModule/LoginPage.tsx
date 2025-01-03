import React, { useState } from "react";
import LoginCSS from "./LoginPage.module.css";
const LandingPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e: any) => {
    console.log("submitted!!");
    e.preventDefault();
  };
  return (
    <div className={LoginCSS.loginBoxParent}>
      <div className={LoginCSS.loginBox}>
        <form onSubmit={handleSubmit} className={LoginCSS.loginForm}>
          <div className={LoginCSS.container}>
            {" "}
            <b>SignIn </b>
          </div>
          <div className={LoginCSS.container}>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className={LoginCSS.container}>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <br />
          </div>
          <div className={LoginCSS.container}>
            
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
