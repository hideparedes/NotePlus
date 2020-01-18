import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./components/pages/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";


import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./colorPalette";

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
