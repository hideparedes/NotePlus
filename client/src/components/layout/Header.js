import React, { useContext,useEffect } from "react";
import { Link } from "react-router-dom";
import DescriptionIcon from "@material-ui/icons/Description";
import Slide from "@material-ui/core/Slide";
import { AuthContext } from "../../context/auth/AuthProvider";

import "./header.css";

const Header = () => {
  const authContext = useContext(AuthContext);

  const { logout, isAuthenticated, user, getUser } = authContext;

  useEffect(() => {
    getUser();

    // eslint-disable-next-line
  }, [])

  const loggedUser = (
    <>
      <li style={{listStyle: "none"}}>Hello, {user && user.name}</li>
      <li
        onClick={() => {
          logout();
        }}
        className="nav-links"
      >
        Logout
      </li>
    </>
  );

  const guests = (
    <>
      <Link to="/login" className="nav-links">
        <li>Login</li>
      </Link>
      <Link to="/register" className="nav-links">
        <li>Register</li>
      </Link>
    </>
  );

  return (
    <header>
      <nav>
        <h1>
          <Slide direction="right" in={true}>
            <DescriptionIcon />
          </Slide>
          Note +
        </h1>

        <ul>{isAuthenticated ? loggedUser: guests

        }</ul>
      </nav>
    </header>
  );
};

export default Header;
