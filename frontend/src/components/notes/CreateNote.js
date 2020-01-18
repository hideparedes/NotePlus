import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

const CreateNote = props => {
  const [createNote, setCreateNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const { title, content } = createNote;

  function handleChange(event) {
    const { name, value } = event.target;
    setCreateNote({ ...createNote, [name]: value });
  }

  function handleClick() {
    setIsExpanded(!isExpanded);
  }

  function submitNote(event) {
    event.preventDefault();
    props.addNote(createNote);

    setCreateNote({
      title: "",
      content: ""
    });

    setIsExpanded(false);
  }

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
