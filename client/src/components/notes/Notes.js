import React, { useContext, useEffect } from "react";
import NoteItem from "./NoteItem";
import { NoteContext } from "../../context/note/NoteProvider";
import EditItem from "./EditItem";

import "./notes.css"

const Notes = () => {
  const noteContext = useContext(NoteContext);
  const { notes, getNotes, current } = noteContext;

  useEffect(() => {
    getNotes();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="notes-container">
      {current != null && <EditItem />}
      {notes.map(note => (
        <NoteItem key={note._id} note={note} />
      ))}
    </div>
  );
};

export default Notes;
