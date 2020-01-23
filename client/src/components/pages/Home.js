import React, { useState, useContext, useEffect } from "react";
import CreateNote from "../notes/CreateNote";
import NoteItem from "../notes/NoteItem";

import { AuthContext } from "../../context/auth/AuthProvider";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.getUser();

    // eslint-disable-next-line
  }, []);

  const [list, setList] = useState([]);

  function addNote(newNote) {
    setList([...list, newNote]);
  }

  function deleteNote(id) {
    setList(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <CreateNote addNote={addNote} />
      {list.map((note, index) => (
        <NoteItem
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
        />
      ))}{" "}
    </div>
  );
};

export default Home;
