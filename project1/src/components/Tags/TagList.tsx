import React from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";

const styles = () =>
  createStyles({
    tagList: {
      fontWeight: 300,
      fontSize: "0.8rem !important",
      paddingTop: "0px !important",
      paddingBottom: "0px !important",
      border: "1px solid #ddd",
      color: "#aaa !important",
      background: "none !important",
      display: "inline-block !important",
      whiteSpace: "nowrap",
      marginRight: "3px",
      marginBottom: "0.2rem",
      paddingRight: "0.6em",
      paddingLeft: "0.6em",
      borderRadius: "10rem",
      boxSizing: "inherit",
      listStyle: "none !important"
    }
  });

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
