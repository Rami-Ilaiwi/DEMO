import React from "react";
import { storiesOf } from "@storybook/react";
import SlugBanner from "./SlugBanner";

storiesOf("Slug", module).add("Slug Banner", () => (
  <SlugBanner
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
  ></SlugBanner>
));
