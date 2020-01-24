import React, { useContext, useEffect } from "react";
import NoteItem from "./NoteItem";
import { NoteContext } from "../../context/note/NoteProvider";

const Notes = () => {
  const noteContext = useContext(NoteContext);
  const { notes, getNotes } = noteContext;

  useEffect(() => {
    getNotes();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      {notes.map(note => (
        <NoteItem key={note._id} note={note} />
      ))}
    </>
  );
};

export default Notes;
