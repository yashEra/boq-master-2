import React, { useState, useCallback } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Signup from "./Signup";
import './style/Login.css'
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";

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
        .then(setSubmitted(true))
    },
    [setSubmitted]
  );
  
  return (
    <div>
      <div><Navbar/></div>
      <form id="form" onSubmit={handleSubmit}>
        <table className="login__table">
          <tbody>
            <tr>
              <td>User Name</td>
              <td>
                <input type="text" name="userName" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input
                  type="password" name="password"  onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="submit" name="submit" value="Submit" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <div><Link to='/signup'>Signup</Link></div>
      {/* <Signup /> */}
    </div>
  );
};

export default Login;
