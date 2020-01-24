import React, { useContext, useEffect } from "react";
import NoteItem from "./NoteItem";
import { NoteContext } from "../../context/note/NoteProvider";
import EditItem from "./EditItem";


const Notes = () => {
  const noteContext = useContext(NoteContext);
  const { notes, getNotes, current } = noteContext;

  useEffect(() => {
    getNotes();

    // eslint-disable-next-line
  }, []);

  return (
    <>
    {current != null && <EditItem /> }
      {notes.map(note => (
        <NoteItem key={note._id} note={note} />
      ))}
    </>
  );
};

export default Notes;
