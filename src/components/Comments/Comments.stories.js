import React from "react";
import { action } from "@storybook/addon-actions";

import { BrowserRouter as Router } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import Comments from "./Comments";
import UserComment from "./UserComment";
import DeleteComment from "./DeleteComment";
import comments from "./commentsFixtures.json";

storiesOf("Comments", module)
  .add("Comments", () => (
    <Router>
      <Comments
        comments={comments}
        handleDeleteComment={action("handleDeleteComment")}
      />
    </Router>
  ))
  .add("User comment", () => (
    <UserComment
      comment={""}
      image={"https://avatarfiles.alphacoders.com/165/thumb-165504.png"}
      handleComment={action("")}
      handleSubmit={action("button-click")}
    />
  ))
  .add("Delete comment", () => (
    <DeleteComment user="rami" author="rami" commentID={5} />
  ));
