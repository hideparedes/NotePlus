import React, { useState, useContext } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

import { NoteContext } from "../../context/note/NoteProvider";

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

  const handleClick = () => {
    setIsExpanded(true);
  }

  const submitNote = event => {
    event.preventDefault();
    addNote(createNote);

    setCreateNote({
      title: "",
      content: ""
    });

    setIsExpanded(false);
  };

  return (
    <>
      <form className="create-note">
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
          onClick={handleClick}
        ></textarea>
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </>
  );
};

export default CreateNote;
