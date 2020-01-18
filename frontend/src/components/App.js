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

  function deleteNote(id) {
    setList(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <div className="container">
        <Form addNote={addNote} />
        {list.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
