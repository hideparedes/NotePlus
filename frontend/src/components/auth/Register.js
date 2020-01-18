import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./auth.css";

const Register = () => {
  function handleChange() {}
  return (
    <div className="form-container">
      <h1>Sign Up</h1>
      <form>
        <div className="form-group">
          <input
            type="text"
            name="name"
            required
            onChange={handleChange}
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            required
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <Button variant="contained" type="submit" color="primary">
          Sign Up
        </Button>
      </form>

      <div>
        <h5>Already have an account?</h5>

        <Link to="/login" className="already">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
