import React, { useState } from "react";
import Signup from "./Signup";

const Login = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const userName = event.target.name;
    console.log(userName);
    const value = event.target.value;
    setInputs((values) => ({ ...values, [userName]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>User Name</td>
            <td>
              <input type="text" name="userName" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              <input type="password" name="password"  onChange={handleChange}/>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input
                type="submit"
                name="submit"
                value="Submit"
              />
            </td>
          </tr>
        </table>
      </form>
      <Signup/>
    </div>
  );
};

export default Login;
