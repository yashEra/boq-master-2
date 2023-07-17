import React, { useState, useCallback } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Signup from "./Signup";
import "./style/Login.css";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
import Footer from "./Footer"

const Login = () => {
  const [inputs, setInputs] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const form = document.getElementById("form");
      const formData = new FormData(form);
      // const history = useHistory();

      axios
        .post("http://localhost:80/boq_master/src/php/login.php", formData)
        .then((res) => console.log(res))
        .then(setSubmitted(true));
    },
    [setSubmitted]
  );

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div class="box">
        <div class="container">
          <div class="top">
            <span class="span__1">Have an account?</span>
            <header class="header_1">Login</header>
          </div>
          <form id="form" onSubmit={handleSubmit} style={{paddingBottom: "94px"}}>
            <div class="input-field">
              <input className="input"
                type="text"
                name="userName"
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
            <div class="input-field">
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div class="input-field">
              <input
                className="submit"
                type="submit"
                name="submit"
                value="Submit"
              />
            </div>
            <div class="two-col">
              <div class="one">
                <label for="check"> Haven't an Account</label>
              </div>
              <div class="two">
                <label>
                  <a href="/signup">Sign up Now!</a>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;
