import React, { useState, useEffect } from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/TagsStyle";

interface TagsProps {
  tags: string[];
  onClickTag: (tag: string) => void;
}

const Tags: React.FC<TagsProps & WithStyles<typeof styles>> = props => {
  const handleTagClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    props.onClickTag(event.currentTarget.id);
  };

  return (
    <div className={props.classes.root}>
      Popular Tags
      <br />
      {props.tags.map(tag => (
        <button
          onClick={handleTagClick}
          id={tag}
          className={props.classes.tag}
          key={tag}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default withStyles(styles)(Tags);
