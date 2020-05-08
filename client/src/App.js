import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUpPage from "./pages/SignUpPage";
import ProfileForConsumer from "./pages/ProfileConsumer";

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
        <Route exact path="/profileForConsumer">
          <ProfileForConsumer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
