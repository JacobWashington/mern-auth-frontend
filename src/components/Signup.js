// Imports
import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
const { REACT_APP_SERVER_URL } = process.env;

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  if(redirect) return <Redirect to="/login"/>;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword && password.length >= 8) {
      const newUser = { name, email, password };
      axios
        .post(`${REACT_APP_SERVER_URL}/users/register`, newUser)
        .then((response) => {
          console.log("=====> Yay, new user!");
          console.log(response);
          setRedirect(true);
        })
        .catch((err) => {
          console.log("=====> Error in Signup", err);
        });
    } else {
      password !== confirmPassword
        ? alert("Password and Confirm Password do not match")
        : alert(
            "Password must contain at least 8 characters. Please try again."
          );
    }
  };

  return (
    <div className="row mt-4">
      <div className="col-md-7 offset-md-3">
        <div className="card card-body">
          <h2 className="py-2">Signup</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleName}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleEmail}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handlePassword}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleConfirmPassword}
                className="form-control"
              />
              <button type="submit" className="btn btn-primary float-right">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
