import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { AuthContext } from "../../context/auth/AuthProvider";
import "./auth.css";

const Register = props => {
  const authContext = useContext(AuthContext);

  const { register, error, isAuthenticated, clearError } = authContext;

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const { name, email, password } = user;

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    console.log(user);
    register(user);
  };

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
      <h1>Sign Up</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            required
            value={password}
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
