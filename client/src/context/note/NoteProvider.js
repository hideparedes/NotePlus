import React, { createContext, useReducer } from "react";
import axios from "axios";

import noteReducer from "./noteReducer";

export const NoteContext = createContext();

export const NoteProvider = props => {
  const initialState = {
    notes: [],
    error: null
  };

  const [state, dispatch] = useReducer(noteReducer, initialState);

  const getNotes = async () => {
    try {
      const res = await axios.get("/api/notes");

      dispatch({
        type: "GET_NOTES",
        payload: res.data
      });
    } catch (error) {
      console.log(error.response.message);

      dispatch({
        type: "NOTE_ERROR",
        payload: error.response.message
      });
    }
  };

  const addNote = async newNote => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/notes", newNote, config);

      dispatch({
        type: "ADD_NOTE",
        payload: res.data
      });
    } catch (error) {
      console.log(error.response.message);

      dispatch({
        type: "NOTE_ERROR",
        payload: error.response.message
      });
    }
  };

  const editNote = () => {};

  const deleteNote = async id => {
    try {
      await axios.delete(`/api/notes/${id}`);

      dispatch({
        type: "DELETE_NOTE",
        payload: id
      });
    } catch (error) {
      console.log(error.response.message);

      dispatch({
        type: "NOTE_ERROR",
        payload: error.response.message
      });
    }
  };

  const clearNotes = () => {
    dispatch({
      type: "CLEAR_NOTES"
    });
  };
  return (
    <NoteContext.Provider
      value={{
        notes: state.notes,
        error: state.error,
        getNotes,
        addNote,
        editNote,
        deleteNote,
        clearNotes
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
