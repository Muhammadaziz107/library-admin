import React from "react";
import "./login.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const elPassword = useRef(null);
  const elAlert = useRef(null);
  const navigate = useNavigate();

  const handleLogin = async evt => {
    try {
      evt.preventDefault();
      const res = await fetch("https://coursesnodejs.herokuapp.com/employee/sign-in", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          password: elPassword.current.value.trim(),
        }),
      });

      console.log(res);

      if (res.status === 200) {
        navigate("/");
      } else {
        elAlert.current.classList.add("incorrect-login--active");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="login">
      <div className="login_wrapper">
        <p className="heading-login">Sign in</p>
        <div className="incorrect-login " ref={elAlert}>
          <p>Sorry, That password is incorrect</p>
        </div>

        <form className="login-form" method="post" onSubmit={handleLogin}>
          <input
            ref={elPassword}
            className="label__input"
            type="password"
            placeholder="Password"
          />

          <button className="login-submit-btn" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
