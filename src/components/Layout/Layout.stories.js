import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import Footer from "./Footer";
import Banner from "./Banner";
import Header from "./Header";
import LoadingComponent from "./LoadingComponent";

storiesOf("Layout", module)
  .add("Header", () => (
    <Router>
      <Header />
    </Router>
  ))
  .add("Banner", () => <Banner />)
  .add("Footer", () => <Footer />)
  .add("Loading", () => <LoadingComponent />);
