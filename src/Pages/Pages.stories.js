import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { storiesOf } from "@storybook/react";

import LoginPage from "./LoginPage";

import RegisterPage from "./RegisterPage";
import SettingsPage from "./SettingsPage";

storiesOf("Pages", module)
  .add("Login Page", () => (
    <Router>
      <LoginPage />
    </Router>
  ))
  .add("Register Page", () => (
    <Router>
      <RegisterPage />
    </Router>
  ))
  .add("Settings Page", () => <SettingsPage />);
