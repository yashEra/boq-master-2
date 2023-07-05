import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/api/user/save', inputs);
    console.log(inputs);
  };

  return (
    <div>
      <form action={handleSubmit}>
        <table>
          <tr>
            <td>User Name</td>
            <td>
              <input type="text" name="userName" onChange={handleChange} />
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
              <input type="submit" name="submit" value="Submit" onClick={handleSubmit}/>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default Signup;
