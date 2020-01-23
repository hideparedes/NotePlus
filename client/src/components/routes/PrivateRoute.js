import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import {AuthContext} from "../../context/auth/AuthProvider";

export default ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={props => {
        if (!isAuthenticated) {
          return <Redirect to="/login" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};
