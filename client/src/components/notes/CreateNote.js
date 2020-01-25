import React, { useState, useContext } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import CloseIcon from "@material-ui/icons/Close";
import { NoteContext } from "../../context/note/NoteProvider";

import "./create-note.css";

const CreateNote = () => {
  const noteContext = useContext(NoteContext);

  const { addNote } = noteContext;

  const [createNote, setCreateNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const { title, content } = createNote;

  const handleChange = event => {
    setCreateNote({ ...createNote, [event.target.name]: event.target.value });
  };

  const handleOpen = () => {
    setIsExpanded(true);
  };

  const submitNote = event => {
    event.preventDefault();
    addNote(createNote);

    setCreateNote({
      title: "",
      content: ""
    });

    setIsExpanded(false);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  return (
    <>
      <form onSubmit={submitNote} className="create-note">
        {isExpanded && (
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Title"
            autoComplete="off"
            required
            onChange={handleChange}
          />
        )}

        <textarea
          name="content"
          cols="30"
          rows={isExpanded ? "3" : "1"}
          value={content}
          placeholder={isExpanded ? "Content..." : "Create Note..."}
          onChange={handleChange}
          onClick={handleOpen}
          required
        ></textarea>
        <div className="create-btn">
          <Zoom in={isExpanded}>
            <Fab type="submit">
              <AddIcon />
            </Fab>
          </Zoom>

          <Zoom in={isExpanded}>
            <Fab onClick={handleClose} className="close">
              <CloseIcon />
            </Fab>
          </Zoom>
        </div>
      </form>
    </>
  );
};

export default CreateNote;
