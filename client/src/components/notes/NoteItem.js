import React, { useContext } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

import { NoteContext } from "../../context/note/NoteProvider";

const NoteItem = props => {
  const noteContext = useContext(NoteContext);

  const { deleteNote } = noteContext;

  const { _id, title, content } = props.note;

  const handleClick = () => {
    deleteNote(_id);
  };

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default NoteItem;
