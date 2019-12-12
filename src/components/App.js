import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import Form from "./NoteForm";

function App() {
  const [list, setList] = useState([]);

  function addNote(note) {
    setList(prevNotes => {
      return [...prevNotes, note];
    });
  }

  return (
    <div>
      <Header />
      <Form addNote={addNote} />
      {list.map((note, index) => (
        <Note key={index} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
