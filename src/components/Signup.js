import React, { useState, useCallback } from "react";
import axios from "axios";

const Signup = () => {
  const [inputs, setInputs] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const url = "http://localhost:3000/src/php/index.php"
  //   axios.post(url, inputs);
  //   console.log(inputs);
  // };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const form = document.getElementById("form");
      const formData = new FormData(form);

      axios
        .post(
          "http://localhost:80/boq_master/src/php/index.php",
          formData
        )
        .then((res) => console.log(res))
        .then(setSubmitted(true))
        .catch((err) => console.log(err));
    },
    [setSubmitted]
  );

  return (
    <div>
      <form id = "form" onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>User Name</td>
            <td>
              <input type="text" name="userName" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>First Name</td>
            <td>
              <input type="text" name="firstName" onChange={handleChange}/>
            </td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>
              <input type="text" name="lastName" onChange={handleChange}/>
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <input type="email" name="email" onChange={handleChange}/>
            </td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>
              <input type="text" name="phoneNumber" onChange={handleChange}/>
            </td>
          </tr>
          <tr>
            <td>Account Type</td>
            <td>
              <input type="text" name="accountType" onChange={handleChange}/>
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              <input type="passWord" name="password" onChange={handleChange}/>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="submit" name="submit" value="Submit"/>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default Signup;
