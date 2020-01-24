import React, { useContext, useState } from "react";
import { NoteContext } from "../../context/note/NoteProvider";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";

import "./edit-item.css";

const EditItem = () => {
  const noteContext = useContext(NoteContext);
  const { current, clearCurrent, editNote } = noteContext;

  const [note, setNote] = useState(current);
  const { title, content } = note;

  const handleChange = event => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    editNote(note);
    clearCurrent();
  };

  const clear = () => {
    clearCurrent();
  };
  return (
    <div className="edit-container">
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            name="title"
            value={title}
            autoComplete="off"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            name="content"
            cols="30"
            rows="3"
            value={content}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="btn">
          <button className="edit-btn done" type="submit">
            <DoneIcon />
          </button>
          <button className="edit-btn cancel" onClick={clear}>
            <CloseIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditItem;
