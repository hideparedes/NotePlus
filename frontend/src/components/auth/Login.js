import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./auth.css";
const Login = () => {
  function handleChange() {}
  return (
    <div className="form-container">
      <h1>Login</h1>
      <form>
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
          Login
        </Button>
      </form>
      <div>
        <h5>Don't have an account?</h5>

        <Link to="/register" className="already">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
