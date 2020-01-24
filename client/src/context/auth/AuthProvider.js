import React, { useReducer, createContext } from "react";
import axios from "axios";
import authReducer from "./authReducer";
import setAuthHeader from "../../utils/setAuthHeader";

export const AuthContext = createContext();

export const AuthProvider = props => {
  const initalState = {
    isAuthenticated: false,
    user: null,
    token: localStorage.getItem("token"),
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initalState);

  const getUser = async () => {
    setAuthHeader(localStorage.token);

    try {
      const res = await axios.get("/api/users/auth");

      dispatch({
        type: "GET_USER",
        payload: res.data
      });
    } catch (error) {
      dispatch({ type: "AUTH_FAIL" });
    }
  };
  const login = async userInfo => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post("/api/users/login", userInfo, config);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data
      });
    } catch (error) {
      console.log(error.response.data.message);

      dispatch({
        type: "LOGIN_FAIL",
        payload: error.response.data.message
      });
    }
  };

  const register = async userInfo => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post("/api/users/register", userInfo, config);

      console.log(res.data);

      dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
    } catch (error) {
      console.log(error.response.data.message);
      dispatch({ type: "REGISTER_FAIL", payload: error.response.data.message });
    }
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT"
    });
  };

  const clearError = () => {
    dispatch({
      type: "CLEAR_ERROR"
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        token: state.token,
        error: state.error,
        getUser,
        login,
        clearError,
        register,
        logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
