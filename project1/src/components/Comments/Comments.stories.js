import React from "react";
import "../../App.css";
import { action } from "@storybook/addon-actions";

import { storiesOf } from "@storybook/react";
import Comments from "./Comments";
import UserComment from "./UserComment";

storiesOf("Comments", module)
  .add("Comments", () => (
    <Comments
      comments={[
        {
          id: 1,
          createdAt: "2019-09-11T11:55:18.705Z",
          updatedAt: "2019-09-11T11:55:18.705Z",
          body: "Comment 1",
          author: {
            username: "Name 1",
            bio: "BIO",
            image: "https://avatarfiles.alphacoders.com/165/thumb-165504.png",
            following: false
          }
        },
        {
          id: 2,
          createdAt: "2019-09-11T11:55:15.542Z",
          updatedAt: "2019-09-11T11:55:15.542Z",
          body: "Comment 2",
          author: {
            username: "Name 2",
            bio: "BIO",
            image: "https://static.productionready.io/images/smiley-cyrus.jpg",
            following: false
          }
        }
      ]}
    />
  ))
  .add("User comment", () => (
    <UserComment
      comment={""}
      image={"https://avatarfiles.alphacoders.com/165/thumb-165504.png"}
      handleComment={action("")}
      handleSubmit={action("button-click")}
    />
  ));
