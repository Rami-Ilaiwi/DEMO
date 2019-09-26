import React from "react";
import styled from "@emotion/styled";
import AXIOS from "../../utils/AXIOS";
const TagBar = styled("div")`
  padding: 5px 10px 10px 10px;
  background: #f3f3f3;
  border-radius: 4px;
  box-sizing: inherit;
  line-height: 1.5;
  float: right;
  margin-right: 100px;
  margin-top: 20px;
  position: static;

  a {
    background-color: #818a91;
    color: #fff !important;
    font-size: 0.8rem;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    white-space: nowrap;
    margin-right: 3px;
    margin-bottom: 0.2rem;
    display: inline-block;
    padding-right: 0.6em;
    padding-left: 0.6em;
    border-radius: 10rem;
    touch-action: manipulation;
    text-decoration: none;
  }
`;

class Tags extends React.Component {
  public state = {
    tags: [] as string[]
  };
  public componentDidMount() {
    AXIOS.noauthGet("tags").then(res => {
      const tags = res.data.tags;
      this.setState({
        tags
      });
    });
  }

  public render() {
    return (
      <TagBar>
        Popular Tags
        <br />
        {this.state.tags.map(ar => (
          <a key={ar}>{ar}</a>
        ))}
      </TagBar>
    );
  }
}

export default Tags;
