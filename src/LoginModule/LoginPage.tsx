import React, { useEffect, useState } from "react";
import LoginCSS from "./LoginPage.module.css";
import { LoginController } from './LoginController';
import { useNavigate } from "react-router-dom";
const LandingPage:React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginController = LoginController;
  const {onSubmitLogin, isLoggedIn, isLoginError} = loginController();


  const navigate = useNavigate()
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmitLogin(username, password);
  };

  useEffect(()=>{
    if(isLoggedIn  ){
      setTimeout(()=>{
        navigate("/app/home")
      }, 200)
    }else if(isLoginError) {
      setError("Username or password is incorrect!");
    }
  }, [isLoggedIn, error, navigate, isLoginError])
  return (
    <div className={LoginCSS.loginBoxParent}>
      <div className={LoginCSS.loginBox}>
        <form onSubmit={handleSubmit} className={LoginCSS.loginForm}>
          <div className={LoginCSS.container}>
            <b>SignIn </b>
          </div>
          <div className={LoginCSS.container}>
            <div className={LoginCSS.error_message}><p>{error}</p></div>
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
