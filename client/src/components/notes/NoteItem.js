import React, { useContext } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import { NoteContext } from "../../context/note/NoteProvider";

import "./note-item.css"
const NoteItem = props => {
  const noteContext = useContext(NoteContext);

  const { deleteNote, setCurrent } = noteContext;

  const { _id, title, content } = props.note;

  const handleDelete = () => {
    deleteNote(_id);
  };
  const handleEdit = () => {
    // editNote(_id);
    setCurrent(props.note);
  };

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleDelete} className="delete-btn">
        <DeleteIcon />
      </button>
      <button onClick={handleEdit} >
        <EditIcon />
      </button>
    </div>
  );
};

export default NoteItem;
