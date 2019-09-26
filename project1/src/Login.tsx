import React from "react";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import LoginComponent from "./components/Pages/LoginComponent";

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
