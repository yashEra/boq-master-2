import React, { useState } from "react";
import axios from "axios";
import "./style/Signup.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Signup = () => {
  const [inputs, setInputs] = useState({});
  const [accountType, setAccountType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "accountType" && value === "professional") {
      setAccountType(value);
      setInputs((values) => ({ ...values, [name]: value }));
    } else {
      setInputs((values) => ({ ...values, [name]: value }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!inputs.email || !emailRegex.test(inputs.email)) {
      alert("Please enter a valid email address");
      return;
    }
  
    // Validate password length
    if (!inputs.password || inputs.password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }
  
    // Validate that password and retype password match
    if (inputs.password !== inputs.retypePassword) {
      alert("Password and retype password do not match");
      return;
    }
  
    //If all validations pass, proceed with the form submission
    const url = "http://localhost:8080/Models/Process/signup-process.php";
    axios.post(url, inputs)
    .then((res) => {
      console.log(res.data); // Log the entire response object to see what it contains

      if (res.data.success === true) {
        console.log("Redirecting...");
        window.location.href = "/login";
      } else {
        console.log("Signup failed.");
      }
    })
    .catch((error) => {
      console.error("Error submitting form:", error);
    });

  setSubmitted(true);
};
  

  return (
    <div>
      <Navbar />
      <div className="box">
        <div className="container">
          <div className="top">
            <header className="header_1">Sign up</header>
          </div>
          <form id="form" onSubmit={handleSubmit} style={{ paddingBottom: "90px" }}>
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
                type="text"
                name="firstName"
                placeholder="First name"
                onChange={handleChange}
              />
            </div>

            <div className="input-field">
              <input
                className="input"
                type="text"
                name="lastName"
                placeholder="Last name"
                onChange={handleChange}
              />
            </div>

            <div className="input-field">
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>

            <div className="input-field">
              <input
                className="input"
                type="text"
                name="phoneNumber"
                placeholder="Phone number"
                onChange={handleChange}
              />
            </div>

            <div className="input-field">
              <select
                className="input"
                id="accountType"
                name="accountType"
                onChange={handleChange}
              >
                <option value="" selected disabled className="input">
                  Select Account Type
                </option>
                <option value="client">Client</option>
                <option value="professional">Professional</option>
              </select>
            </div>

            {accountType === "professional" && (
              <div style={{ paddingBottom: "20px", color: "white", paddingLeft: "20px" }}>
                <label className="input">Professional Type:</label>
                <div style={{ display: 'flex', color: 'white', paddingTop: '15px' }}>

                  <div style={{ paddingRight: '10px' }}>
                    <input
                      type="radio"
                      id="professionalType"
                      name="professionalType"
                      value="Architect"
                      onChange={handleChange}
                    />
                    <label htmlFor="architect">Architect</label>
                  </div>
                  <div style={{ paddingRight: '10px' }}>
                    <input
                      type="radio"
                      id="professionalType"
                      name="professionalType"
                      value="QuantitySurveyor"
                      onChange={handleChange}
                    />
                    <label htmlFor="surveyor">QS</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="professionalType"
                      name="professionalType"
                      value="CivilEngineer"
                      onChange={handleChange}
                    />
                    <label htmlFor="civilEngineer">Civil Engineer</label>
                  </div>
                </div>
              </div>
            )}

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
                className="input"
                type="password"
                name="retypePassword"
                placeholder="Retype Password"
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
                <label htmlFor="check"> Have an Account</label>
              </div>
              <div className="two">
                <label>
                  <a href="/login">Login Now!</a>
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

export default Signup;
