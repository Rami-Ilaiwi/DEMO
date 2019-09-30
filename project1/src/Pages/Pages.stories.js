import React from "react";
import "../../App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";
import Settings from "./Settings";

storiesOf("Pages", module)
  .add("Login Component", () => (
    <Router>
      <LoginComponent />
    </Router>
  ))
  .add("Register Component", () => (
    <Router>
      <RegisterComponent />
    </Router>
  ))
  .add("Settings", () => <Settings />);
