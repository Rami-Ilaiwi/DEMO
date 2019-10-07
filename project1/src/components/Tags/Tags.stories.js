import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import Tags from "./Tags";
import TagList from "./TagList";

storiesOf("Tags", module)
  .add("Tags", () => (
    <Tags
      tags={["tag1", "tag2", "tag3", "tag4"]}
      onClickTag={action("onClickTag")}
    />
  ))
  .add("Tag list", () => <TagList tagList={["a", "b", "c", "d"]}></TagList>);
