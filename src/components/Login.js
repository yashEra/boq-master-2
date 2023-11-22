import React, { useState, useCallback } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "./style/Login.css";
import Footer from "./Footer";

const Login = () => {
  const [inputs, setInputs] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);

    axios
      .post("http://localhost:8080/Models/Process/login-process.php", formData)
      .then((res) => {
        console.log(res.data.success);
        
        //console.log("res.data.success value:", res.data);
        console.log("res.data.success type:", typeof res.data.success);

        if (res.data.success === true) {

          console.log("Redirecting..."); // Log the redirection

          window.location.href = "/";
          let id=res.data.id;
          sessionStorage.setItem('userId', id);
          // set user name and id in local storage
          // get localstorage

          window.localStorage.setItem("userName", formData.get("userName"));
          window.localStorage.setItem("userId", res.data.id);


        } else {

          console.log("Login failed."); // Log failure
          
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
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
