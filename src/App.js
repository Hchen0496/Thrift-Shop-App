import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
//import logo from "./logo.svg";
=======
>>>>>>> master
=======
>>>>>>> ec9f5749089b7c6d0bca0874fd276154530cc9ee
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
