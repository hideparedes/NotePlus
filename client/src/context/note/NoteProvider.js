import React, { createContext, useReducer } from "react";
import axios from "axios";

import noteReducer from "./noteReducer";

export const NoteContext = createContext();

export const NoteProvider = props => {
  const initialState = {
    notes: [],
    error: null,
    current: null
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
      dispatch({
        type: "NOTE_ERROR",
        payload: error.response.message
      });
    }
  };

  const editNote = async newNote => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.put(`/api/notes/${newNote._id}`, newNote, config);

      dispatch({ type: "EDIT_NOTE", payload: res.data });
    } catch (error) {
      dispatch({
        type: "NOTE_ERROR",
        payload: error.response.message
      });
    }
  };

  const deleteNote = async id => {
    try {
      await axios.delete(`/api/notes/${id}`);

      dispatch({
        type: "DELETE_NOTE",
        payload: id
      });
    } catch (error) {
      dispatch({
        type: "NOTE_ERROR",
        payload: error.response.message
      });
    }
  };

  const setCurrent = data => {
    dispatch({ type: "SET_CURRENT", payload: data });
  };

  const clearCurrent = () => {
    dispatch({ type: "CLEAR_CURRENT" });
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
        current: state.current,
        getNotes,
        addNote,
        editNote,
        deleteNote,
        clearNotes,
        setCurrent,
        clearCurrent
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
