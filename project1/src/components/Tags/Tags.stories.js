import React from "react";

import { storiesOf } from "@storybook/react";
import Tags from "./Tags";
import TagList from "./TagList";

storiesOf("Tags", module)
  .add("Tags", () => <Tags></Tags>)
  .add("Tag list", () => <TagList tagList={["a", "b", "c", "d"]}></TagList>);
