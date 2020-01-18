import React from "react";
import { Link } from "react-router-dom";
import DescriptionIcon from "@material-ui/icons/Description";
import Slide from "@material-ui/core/Slide";

import "./header.css";
const Header = () => {
  return (
    <header >
      <nav >
        <h1>
          <Slide direction="right" in={true}>
            <DescriptionIcon />
          </Slide>
          <Link to="/" className="logo">
            Note +
          </Link>
        </h1>

        <ul className="">
          <Link to="/login" className="nav-links">
            <li>Login</li>
          </Link>
          <Link to="/register" className="nav-links">
            <li>Register</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
