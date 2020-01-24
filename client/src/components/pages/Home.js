import React from "react";
import CreateNote from "../notes/CreateNote";
import Notes from "../notes/Notes";

const Home = () => {
  return (
    <div>
      <CreateNote />
      <Notes />
    </div>
  );
};

export default Home;
