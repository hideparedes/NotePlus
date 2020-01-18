import React from "react";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Sign Up" />
      </form>
      <div>
        <h3>Don't have an account?</h3>
        <a href="/register">Sign up</a>
      </div>
    </div>
  );
};

export default Login;
