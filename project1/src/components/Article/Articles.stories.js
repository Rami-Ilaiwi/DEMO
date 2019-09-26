import React from "react";
import "../../App.css";
import { action } from "@storybook/addon-actions";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { storiesOf } from "@storybook/react";
import Article from "./Article";
import Articles from "./Articles";
import ArticleInfo from "./ArticleInfo";
import ArticleMeta from "./ArticleMeta";
import NewArticle from "./NewArticle";

storiesOf("Article", module)
  .add("Article", () => (
    <Router>
      <Article
        username={"Name"}
        image={"https://avatarfiles.alphacoders.com/165/thumb-165504.png"}
        createdAt={"2019-09-11T11:55:18.705Z"}
        title={"Title"}
        description={"Description"}
        favoritesCount={4}
        tagList={["a", "b", "c", "d"]}
        slug={"f"}
      />
    </Router>
  ))
  .add("Articles", () => (
    <Router>
      <Articles />
    </Router>
  ))
  .add("ArticleInfo", () => (
    <ArticleInfo
      username={"Name"}
      image={"https://avatarfiles.alphacoders.com/165/thumb-165504.png"}
      createdAt={"2019-09-11T11:55:18.705Z"}
    ></ArticleInfo>
  ))
  .add("ArticleMeta", () => (
    <ArticleMeta
      image={"https://avatarfiles.alphacoders.com/165/thumb-165504.png"}
      username={"Name"}
      createdAt={"2019-09-11T11:55:18.705Z"}
      following={true}
      profileName={"Name"}
      favorited={false}
      favoritesCount={5}
      handleFollow={action("button-click")}
      handleFavorite={action("button-click")}
    ></ArticleMeta>
  ))
  .add("NewArticle", () => <NewArticle></NewArticle>);
