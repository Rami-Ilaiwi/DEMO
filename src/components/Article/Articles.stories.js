import React from "react";
import { action } from "@storybook/addon-actions";
import { BrowserRouter as Router } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import ArticleCard from "./ArticleCard";
import Articles from "./Articles";
import ArticleAuthor from "./ArticleAuthor";
import ArticleMeta from "./ArticleMeta";
import ArticleTagsList from "./ArticleTagsList";
import TagsInput from "./TagsInput";
import articles from "./articlesFixtures.json";
import ArticleBanner from "./ArticleBanner";

storiesOf("Article", module)
  .add("Article", () => (
    <Router>
      <ArticleCard
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
      <Articles
        articles={articles}
        handleFavoriteToggle={action("handleFavoriteToggle")}
      />
    </Router>
  ))
  .add("Article Author", () => (
    <Router>
      <ArticleAuthor
        username={"Name"}
        image={"https://avatarfiles.alphacoders.com/165/thumb-165504.png"}
        createdAt={"2019-09-11T11:55:18.705Z"}
      />
    </Router>
  ))
  .add("Article Meta", () => (
    <Router>
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
    </Router>
  ))
  .add("Article Tags List", () => (
    <ArticleTagsList
      tagsList={["a", "b", "c"]}
      handleDelete={action("handleDelete")}
    />
  ))
  .add("Tags Input", () => <TagsInput tagsList={[]} articleTag="" />)
  .add("Article Banner", () => (
    <Router>
      <ArticleBanner
        title={"Title"}
        image={"https://avatarfiles.alphacoders.com/165/thumb-165504.png"}
        username={"Name"}
        createdAt={"2019-09-11T11:55:15.542Z"}
        following={false}
        profileName={"Name"}
        favorited={true}
        favoritesCount={1}
        handleFollow={event => event.preventDefault()}
        handleFavorite={event => event.preventDefault()}
      />
    </Router>
  ));
