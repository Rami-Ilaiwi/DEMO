import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import FavButtonArticle from "./FavoriteButtonSlug";
import FavoriteButton from "./FavoriteButton";
import FollowButton from "./FollowButton";
import DeleteButton from "./DeleteButton";
import Pagination from "./Pagination";
import EditButton from "./EditButton";
import { BrowserRouter as Router } from "react-router-dom";
import FeedTabs from "./FeedTabs";

// import { State } from "react-powerplug";

storiesOf("Buttons", module)
  .add("Favorite Button inside Slug", () => (
    // <State initial={{ favoriteCount: 3 }}>
    //   {({ state, setState }) => (
    <FavButtonArticle
      handleFavorite={
        action("button-click")
        // event => event.preventDefault()
        //   () =>
        // setState({ favoriteCount: state.favoriteCount + 1 })
      }
      favorited={false}
      favoritesCount={
        3
        //   state.favoriteCount
      }
    />
    //   )}
    // </State>
  ))
  .add("Favorite Button", () => <FavoriteButton favoritesCount={5} />)
  .add("Follow Button", () => (
    <FollowButton
      following={true}
      handleFollow={action("button-click")}
      profileName={"Name"}
    />
  ))
  .add("Delete Button", () => (
    <DeleteButton handleDelete={action("button-click")} />
  ))
  .add("Pagination", () => (
    <Pagination
      articlesCount={500}
      page={0}
      onChangePage={action("onChangePage")}
    />
  ))
  .add("Edit article button", () => (
    <Router>
      <EditButton slug="article-wdx2ja" onEdit={action("onEdit")} />
    </Router>
  ))
  .add("Feed Tabs", () => (
    <FeedTabs
      isLoggedIn={true}
      tag="tags"
      isTagToggeld={true}
      selectedFeedTab="tagFeed"
      onChangeSelectedFeedTab={action("onChangeSelectedFeedTab")}
    />
  ));
