import React from "react";
import "./App.css";
// import Tags from "./components/Tags";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import GridContainer from "./components/Pages/GridContainer";
import LoginComponent from "./components/Pages/LoginComponent";
import RegisterComponent from "./components/Pages/RegisterComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewArticle from "./components/Article/NewArticle";
import Settings from "./components/Pages/Settings";
import Slug from "./components/Slug/Slug";
import Profile from "./components/Pages/Profile";
import CssBaseline from "@material-ui/core/CssBaseline";

// import { Router } from "@reach/router";

const App = () => {
  return (
    <>
      <CssBaseline />
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
    </>
  );
};

export default App;
