import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { storiesOf } from "@storybook/react";

import LoginPage from "./LoginPage";

import RegisterComponent from "./RegisterComponent";
import Settings from "./Settings";

storiesOf("Pages", module)
  .add("Login Component", () => (
    <Router>
      <LoginPage />
    </Router>
  ))
  .add("Register Component", () => (
    <Router>
      <RegisterComponent />
    </Router>
  ))
  .add("Settings", () => <Settings />);
