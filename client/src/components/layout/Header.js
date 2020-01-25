import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import DescriptionIcon from "@material-ui/icons/Description";
import Slide from "@material-ui/core/Slide";
import { AuthContext } from "../../context/auth/AuthProvider";
import { NoteContext } from "../../context/note/NoteProvider";

import "./header.css";

const Header = () => {
  const authContext = useContext(AuthContext);
  const noteContext = useContext(NoteContext);

  const { logout, isAuthenticated, user, getUser } = authContext;
  const { clearNotes } = noteContext;

  useEffect(() => {
    getUser();

    // eslint-disable-next-line
  }, [isAuthenticated]);

  const userLogout = () => {
    logout();
    clearNotes();
  };

  const loggedUser = (
    <>
      <li style={{ listStyle: "none", color:"#3c3c3c" }}>Hello, {user && user.name}</li>
      <li onClick={userLogout} className="nav-links">
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
            <DescriptionIcon style={{color: "#fff"}}/>
          </Slide>
          Note +
        </h1>

        <ul>{isAuthenticated ? loggedUser : guests}</ul>
      </nav>
    </header>
  );
};

export default Header;
