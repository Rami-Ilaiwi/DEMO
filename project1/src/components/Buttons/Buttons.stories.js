import React from "react";
import "../../App.css";
import { action } from "@storybook/addon-actions";

import { storiesOf } from "@storybook/react";
import FavButtonArticle from "./FavoriteButtonSlug";
import FavoriteButton from "./FavoriteButton";
import FollowButton from "./FollowButton";
import { State } from "react-powerplug";

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
  .add("Favorite Button", () => (
    <FavoriteButton favoritesCount={5}></FavoriteButton>
  ))
  .add("Follow Button", () => (
    <FollowButton
      following={true}
      handleFollow={action("button-click")}
      profileName={"Name"}
    ></FollowButton>
  ));
