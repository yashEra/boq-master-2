import React, { useState, useCallback } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "./style/Login.css";
import Footer from "./Footer";

const Login = () => {
  const [inputs, setInputs] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setErrorMessage(''); // Reset error message on each submit

    const form = document.getElementById("form");
    const formData = new FormData(form);

    axios
      .post("http://localhost:8080/Models/Process/login-process.php", formData)
      .then((res) => {
        console.log(res.data.success);
        console.log("Form Data:", formData);

        if (res.data.success === true) {
          if (res.data.type === 'professional') {
            console.log("Redirecting...");
            window.location.href = "/myprofile";
            let id = res.data.id;
            sessionStorage.setItem('userId', id);
            sessionStorage.setItem('userType', 'professional');
            sessionStorage.setItem('userName', formData.get('userName'));
          } else {
            console.log("Redirecting...");
            window.location.href = "/myprofile-c";
            let id = res.data.id;
          }
        } else {
          console.log("Login failed.");
          setErrorMessage('Username or password incorrect'); // Set error message
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="box">
        <div className="container">
          <div className="top">
            <span className="span__1">Have an account?</span>
            <header className="header_1">Login</header>
          </div>
          <form
            id="form"
            onSubmit={handleSubmit}
            style={{ paddingBottom: "94px" }}
          >
            <div className="input-field">
              <input
                className="input"
                type="text"
                name="userName"
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <input
                className="submit"
                type="submit"
                name="submit"
                value="Submit"
              />
            </div>
            {errorMessage && <div className="error-message text-red-600 mt-2">{errorMessage}</div>}
            <div className="two-col">
              <div className="one">
                <label htmlFor="check"> Haven't an Account</label>
              </div>
              <div className="two">
                <label>
                  <a href="/signup">Sign up Now!</a>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
