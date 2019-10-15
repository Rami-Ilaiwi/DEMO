import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/TagListStyle";

interface TagListProps {
  tagList: Array<string>;
}

const TagList: React.FC<TagListProps & WithStyles<typeof styles>> = props => {
  return (
    <ul>
      {props.tagList.map((item: string) => {
        return (
          <li key={item} className={props.classes.tagList}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default withStyles(styles)(TagList);
