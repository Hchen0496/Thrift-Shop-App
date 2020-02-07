import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/SignUpPage">
          <SignUpPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
