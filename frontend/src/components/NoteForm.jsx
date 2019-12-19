import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

export default function NoteForm(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });

  const [expanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNewNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();

    props.addNote(newNote);

    setNewNote({
      title: "",
      content: ""
    });

    setExpanded(false);
  }

  function handleClick() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {expanded && (
          <input
            type="text"
            name="title"
            placeholder="Title"
            autoComplete="off"
            onChange={handleChange}
            value={newNote.title}
            required
          />
        )}

        <textarea
          name="content"
          cols="30"
          rows={expanded ? "3" : "1"}
          placeholder={expanded ? "Content..." : "Take note..."}
          required
          onChange={handleChange}
          value={newNote.content}
          onClick={handleClick}
        />
        <Zoom in={expanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
