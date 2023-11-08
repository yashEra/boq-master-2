import React, { useState, useCallback, useHistory } from "react";
import axios from "axios";
import "./style/Signup.css";
import Navbar from "./Navbar";
import Footer from "./Footer"

const Signup = () => {
  const [inputs, setInputs] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const url = "http://localhost:8080/Models/Process/signup-process.php"
    axios.post(url, inputs);
    console.log(inputs);
    
  };

  // const handleSubmit = useCallback(
  //   (e) => {
  //     e.preventDefault();
  //     const form = document.getElementById("form");
  //     const formData = new FormData(form);
  //     // const history = useHistory();

  //     axios
  //       .post("http://localhost:80/boq_master/src/php/index.php", formData)
  //       .then((res) => console.log(res))
  //       .then(setSubmitted(true));
  //   },
  //   [setSubmitted]
  // );

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div class="box">
        <div class="container">
          <div class="top">
            {/* <span class="span__1">Have an account?</span> */}
            <header class="header_1">Sing up</header>
          </div>
          <form id="form" onSubmit={handleSubmit} style={{paddingBottom:"90px"}}>
            <div class="input-field">
              <input
                className="input"
                type="text"
                name="userName"
                placeholder="Username"
                onChange={handleChange}
              />
            </div>

            <div class="input-field">
              <input
                className="input"
                type="text"
                name="firstName"
                placeholder="Frist name"
                onChange={handleChange}
              />
            </div>

            <div class="input-field">
              <input
                className="input"
                type="text"
                name="lastName"
                placeholder="Last name"
                onChange={handleChange}
              />
            </div>

            <div class="input-field">
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>

            <div class="input-field">
              <input
                className="input"
                type="text"
                name="phoneNumber"
                placeholder="Phone number"
                onChange={handleChange}
              />
            </div>

            <div class="input-field">
              <input
                className="input"
                type="text"
                name="accountType"
                placeholder="Account Type"
                onChange={handleChange}
              />
            </div>

            <div class="input-field">
              <input
                className="input"
                type="passWord"
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
                <label for="check"> Have an Account</label>
              </div>
              <div class="two">
                <label>
                  <a href="/login">Login Now!</a>
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

export default Signup;
