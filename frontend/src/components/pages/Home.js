import React, { useState } from "react";
import CreateNote from "../notes/CreateNote";
import NoteItem from "../notes/NoteItem";

const Home = () => {
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
      ))}
    </div>
  );
};

export default Home;
