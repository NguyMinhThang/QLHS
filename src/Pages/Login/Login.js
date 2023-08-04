import React from "react";
import "./Login.css";
import data from "../../Data/dataLogin";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  function handleChange() {
    navigate("/home");
  }
  const handleLogin = () => {
    const newData1 = data.map((item) => item.user);
    const newData2 = data.map((item) => item.password);
    const account = document.getElementById("acc").value;
    const pw = document.getElementById("pass").value;
    const myAcc = { user: account, password: pw };
    if (newData1.includes(myAcc.user) && newData2.includes(myAcc.password)) {
      alert("Đăng nhập thành công!");
      handleChange();
    } else {
      alert("Sai tài khoản hoặc mật khẩu!");
    }
  };

  return (
    <div className="sign-up">
      <div className="circle circle--red"></div>
      <div className="circle circle--yellow"></div>
      <div className="circle circle--green"></div>
      <div className="circle circle--purple"></div>
      <form className="sign-up__form" action="">
        <div className="sign-up__content">
          <h2 className="sign-up__title">Login</h2>
          <input
            id="acc"
            class="sign-up__inp"
            type="email"
            placeholder="Email"
            required="required"
          />
          <input
            id="pass"
            class="sign-up__inp"
            type="password"
            placeholder="Password"
            required="required"
          />
          <a href="/" className="forgot__password">
            Forgot your password
          </a>
        </div>
        <div class="sign-up__buttons">
          <a class="btn btn--register" href="#register">
            Register
          </a>
          <button class="btn btn--signin" type="submit" onClick={handleLogin}>
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
