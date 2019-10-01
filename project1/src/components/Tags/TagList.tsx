import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/TagListStyle";

interface TagListProps {
  tagList: Array<string>;
}

const TagList: React.FC<TagListProps & WithStyles<typeof styles>> = props => {
  return (
    <ul>
      {props.tagList.map((item: string, index: number) => {
        return (
          <li key={index} className={props.classes.tagList}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};
// TagList.defaultProps = {
//     tagList:[]
// }
export default withStyles(styles)(TagList);
