import React from "react";
import DescriptionIcon from "@material-ui/icons/Description";
import Slide from "@material-ui/core/Slide";

export default function Header() {
  return (
    <header>
      <nav>
        <h1>
          <Slide direction="right" in={true}>
            <DescriptionIcon />
          </Slide>
          Note +
        </h1>

        <ul className="nav-links">
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
