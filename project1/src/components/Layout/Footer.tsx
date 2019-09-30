import React from "react";
// import styled from "@emotion/styled";

// const FooterS = styled("a")`
//   position: fixed;
//   bottom: 0;
//   width: 100%;
//   background: linear-gradient(#485563, #29323c);
//   text-align: center;
//   padding: 15px;
//   z-index: 999;
//   color: #fff;
//   font-size: 1.5rem;
//   display: block;
//   text-decoration: none;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

class Footer extends React.Component {
  render() {
    return (
      <a
        href="https://github.com/gothinkster/angularjs-realworld-example-app"
        target="_blank"
        className="footer"
      >
        <i className="ion-social-github"></i>&nbsp;&nbsp;Fork on GitHub
      </a>
    );
  }
}

export default Footer;
