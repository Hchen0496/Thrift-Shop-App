import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUpPage from "./pages/SignUpPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ProfilePage from "./pages/ProfilePage";

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
        <Route exact path="/ForgotPasswordPage">
          <ForgotPasswordPage />
        </Route>
        <Route exact path="/ProfilePage">
          <ProfilePage />
        </Route>
    </Switch>
    </Router>
  );
}

export default App;
