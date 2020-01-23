export default (state, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        token: localStorage.getItem("token")
      };
    case "LOGIN_SUCCESS":
    case "REGISTER_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case "AUTH_FAIL":
    case "LOGIN_FAIL":
    case "REGISTER_FAIL":
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
        error: action.payload
      };
    case "CLEAR_ERROR":
      return {
        ...state,
        error: null
      };
    default: {
      return state;
    }
  }
};
