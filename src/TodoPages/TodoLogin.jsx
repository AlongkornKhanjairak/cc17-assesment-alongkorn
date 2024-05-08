import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function TodoLogin() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmailOrPhone = (e) => setEmailOrPhone(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    if (emailOrPhone === "Alongkorn@mail.com" && password === "qwerty") {
      await login(emailOrPhone, password);
      navigate("/");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="home">
      <h1>Welcome</h1>
      <div className="form">
        <input
          className="input"
          placeholder="emailOrMobile"
          type="text"
          value={emailOrPhone}
          onChange={handleChangeEmailOrPhone}
        />
      </div>
      <div className="form">
        <input
          className="input"
          placeholder="password"
          type="text"
          value={password}
          onChange={handleChangePassword}
        />
      </div>
      <div className="login" onSubmit={handleSubmitLogin}>
        <button className="login__Btu">
          <h1>LOG IN</h1>
        </button>
      </div>
    </div>
  );
}

export default TodoLogin;
