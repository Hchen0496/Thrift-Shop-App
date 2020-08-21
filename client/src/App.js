import React from "react";
<<<<<<< HEAD

//import logo from "./logo.svg";
=======
>>>>>>> 2d0fcc75e968ec03275f127e680715e4e03b4a33
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
