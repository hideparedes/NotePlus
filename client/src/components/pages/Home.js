import React, { useState } from "react";
import CreateNote from "../notes/CreateNote";
import Notes from "../notes/Notes";

const Home = () => {
  const [list, setList] = useState([]);

  function deleteNote(id) {
    setList(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <CreateNote />
      <Notes />
    </div>
  );
};

export default Home;
