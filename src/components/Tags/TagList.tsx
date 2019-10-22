import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/TagListStyle";

interface TagListProps {
  tagList: Array<string>;
}

const TagList: React.FC<TagListProps & WithStyles<typeof styles>> = ({
  tagList,
  classes
}) => {
  return (
    <ul>
      {tagList.map((item: string) => {
        return (
          <li key={item} className={classes.tagList}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default withStyles(styles)(TagList);
