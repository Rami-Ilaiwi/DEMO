import React from "react";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import FeedPage from "./Pages/FeedPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import NewArticle from "./Pages/NewArticle";
import SettingsPage from "./Pages/SettingsPage";
import ArticlePage from "./Pages/ArticlePage";
import Profile from "./Pages/Profile";
import CssBaseline from "@material-ui/core/CssBaseline";

// import { Router } from "@reach/router";

const App = () => {
  // const [isLoggedIn, setLoggedIn] = React.useState(false);
  // const login = () => setLoggedIn(true);
  // const logout = () => setLoggedIn(false);
  return (
    // <Provider value={{isLoggedIn, login, logout}}>

    <>
      <CssBaseline />
      <Router>
        <Header></Header>

        <Route exact path="/" component={FeedPage} />
        <Route path="/login/" component={LoginPage} />
        <Route path="/register/" component={RegisterPage} />
        <Route path="/editor/" component={NewArticle} />
        <Route path="/settings/" component={SettingsPage} />
        <Route path="/article/:slug" component={ArticlePage} />

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
