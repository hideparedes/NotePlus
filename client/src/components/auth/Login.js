import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { AuthContext } from "../../context/auth/AuthProvider";

import "./auth.css";

const Login = props => {
  const authContext = useContext(AuthContext);

  const { login, error, isAuthenticated, clearError } = authContext;

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    login(user);
  };

  // useEffect

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error !== null) {
      console.log(error);

      setTimeout(() => {
        clearError();
      }, 5000);
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  return (
    <div className="form-container">
      <h1>Login</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={email}
            required
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={password}
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
