import React from "react";
import { AnimateOnChange, hideUntilLoaded } from "react-animation";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, route, Link } from "react-router-dom";
import Login from "./Login";
import "./App.css";

const Routing = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="">Login</Link>
        </li>
        <li>
          <Link to="">New User? Come Register!</Link>
        </li>
        <li>
          <Link to="">Forgot Password?</Link>
        </li>
      </ul>
      <hr />
      <route exact path="/Login" component={Login} />
    </div>
  </Router>
);

export default Routing;
