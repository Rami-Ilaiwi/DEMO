import React from "react";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";

import LoginPage from "./Pages/LoginPage";

const Login = () => {
  return (
    <div className="App">
      <Header></Header>
      <LoginPage></LoginPage>
      <div style={{ padding: "15px" }} />
      <Footer></Footer>
    </div>
  );
};

export default Login;
