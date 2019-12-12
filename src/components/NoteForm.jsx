import React, { useState } from "react";

export default function NoteForm(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });

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
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Title"
          autoComplete="off"
          onChange={handleChange}
          value={newNote.title}
        />
        <textarea
          name="content"
          cols="30"
          rows="3"
          placeholder="Note..."
          required
          onChange={handleChange}
          value={newNote.content}
        />
        <button onClick={submitNote}> + </button>{" "}
      </form>
    </div>
  );
}
