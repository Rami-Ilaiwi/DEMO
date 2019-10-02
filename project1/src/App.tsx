import React from "react";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import GridContainer from "./Pages/GridContainer";
import LoginComponent from "./Pages/LoginComponent";
import RegisterComponent from "./Pages/RegisterComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewArticle from "./Pages/NewArticle";
import Settings from "./Pages/Settings";
import Slug from "./components/Slug/Slug";
import Profile from "./Pages/Profile";
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
