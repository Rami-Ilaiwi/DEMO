import React from "react";
import "../../App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import Footer from "./Footer";
import Banner from "./Banner";
import Header from "./Header";

storiesOf("Layout", module)
  .add("Header", () => (
    <Router>
      <Header />
    </Router>
  ))
  .add("Banner", () => <Banner />)
  .add("Footer", () => <Footer />);
