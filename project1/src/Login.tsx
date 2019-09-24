import React from "react";
import Footer from "./components/Footer";
import Header from "./components/header";
import LoginComponent from "./components/LoginComponent";

const Login = () => {
  return (
    <div className="App">
      <Header></Header>
      <LoginComponent></LoginComponent>
      <div style={{ padding: "15px" }} />
      <Footer></Footer>
    </div>
  );
};

export default Login;
