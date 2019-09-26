import React from "react";
import styled from "@emotion/styled";

const BannerContent = styled("div")`
  background: #5cb85c;
  box-shadow: inset 0 8px 8px -8px rgba(0, 0, 0, 0.3),
    inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3);
  box-sizing: inherit;
  h1 {
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    font-weight: 700 !important;
    text-align: center;
    font-size: 3.5rem;
    font-family: "Titillium Web", sans-serif;
    color: #fff;
  }

  p {
    color: #fff;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 300 !important;
  }
`;

const Banner = () => {
  return (
    <BannerContent>
      <h1>conduit</h1>
      <p>A place to share your knowledge</p>
    </BannerContent>
  );
};

export default Banner;
