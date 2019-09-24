import React from "react";
import "./App.css";
// import Tags from "./components/Tags";
import Footer from "./components/Footer";
import Header from "./components/header";
import GridContainer from "./components/GridContainer";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewArticle from "./components/NewArticle";
import Settings from "./components/Settings";
import Slug from "./components/Slug";
import Profile from "./components/Profile";
// import { Router } from "@reach/router";

const App = () => {
  return (
    <Router>
      <Header></Header>

      <Route exact path="/" component={GridContainer} />
      <Route path="/login/" component={LoginComponent} />
      <Route path="/register/" component={RegisterComponent} />
      <Route path="/editor/" component={NewArticle} />
      <Route path="/settings/" component={Settings} />
      <Route path="/article/:slug" component={Slug} />
      <Route path="/@:user" component={Profile} />
      {/* <GridContainer path="/"></GridContainer>
        <LoginComponent path="/login/"></LoginComponent> */}
      {/* <Tags></Tags> */}
      {/* <LoginComponent></LoginComponent> */}
      <div style={{ padding: "50px" }} />
      <Footer></Footer>
    </Router>
  );
};

export default App;
