import React from "react";
import { action } from "@storybook/addon-actions";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { storiesOf } from "@storybook/react";
import Article from "./Article";
import Articles from "./Articles";
import ArticleAuthor from "./ArticleAuthor";
import ArticleMeta from "./ArticleMeta";
import NewArticle from "../../Pages/NewArticle";
import ArticleTagsList from "./ArticleTagsList";
import TagsInput from "./TagsInput";

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
  .add("Article Author", () => (
    <ArticleAuthor
      username={"Name"}
      image={"https://avatarfiles.alphacoders.com/165/thumb-165504.png"}
      createdAt={"2019-09-11T11:55:18.705Z"}
    />
  ))
  .add("Article Meta", () => (
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
    />
  ))
  .add("NewArticle", () => <NewArticle />)
  .add("Add tag", () => (
    <ArticleTagsList
      tagsList={["a", "b", "c"]}
      handleDelete={action("handleDelete")}
    />
  ))
  .add("Tags Input", () => <TagsInput tagsList={[]} articleTag="" />);
