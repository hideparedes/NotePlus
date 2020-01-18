import React from "react";

const Register = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" required onChange={handleChange} />
        </div>
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
        <input type="submit" value="Sign Up"/>
      </form>
      <div>
        <h3>Already </h3>
      </div>
    </div>
  );
};

export default Register;
