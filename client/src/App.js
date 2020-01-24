import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./components/pages/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/routes/PrivateRoute";

import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./colorPalette";

import { AuthProvider } from "./context/auth/AuthProvider";
import { NoteProvider } from "./context/note/NoteProvider";
const App = () => {
  return (
    <AuthProvider>
      <NoteProvider>
        <MuiThemeProvider theme={theme}>
          <Router>
            <Header />
            <div className="container">
              <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
            <Footer />
          </Router>
        </MuiThemeProvider>
      </NoteProvider>
    </AuthProvider>
  );
};

export default App;
