import React from "react";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import FeedPage from "./Pages/FeedPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewArticle from "./Pages/NewArticlePage";
import Settings from "./Pages/SettingsPage";
import ArticlePage from "./Pages/ArticlePage";
import Profile from "./Pages/Profile";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import store from "./store/store";

// import { Router } from "@reach/router";

const App = () => {
  // const [isLoggedIn, setLoggedIn] = React.useState(false);
  // const login = () => setLoggedIn(true);
  // const logout = () => setLoggedIn(false);
  return (
    // <Provider value={{isLoggedIn, login, logout}}>

    <>
      <CssBaseline />
      <Provider store={store}>
        <Router>
          <Header />

          <Route exact path="/" component={FeedPage} />
          <Route path="/login/" component={LoginPage} />
          <Route path="/register/" component={RegisterPage} />
          <Route exact path={["/editor"]} component={NewArticle} />
          <Route path="/editor/:slug" component={NewArticle} />
          <Route path="/settings/" component={Settings} />
          <Route path="/article/:slug/" component={ArticlePage} />

          <Route path="/@:user" component={Profile} />
          <div style={{ padding: "50px" }} />
          <Footer />
        </Router>
      </Provider>
    </>
  );
};

export default App;
