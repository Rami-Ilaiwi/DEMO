import React from "react";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";

const styles = () =>
  createStyles({
    root: {},

    list: {
      fontSize: "15px !important",
      border: "1px solid #ddd",
      color: "#aaa !important",
      display: "inline-block",
      marginRight: "3px",
      paddingRight: "0.6em",
      paddingLeft: "0.6em",
      borderRadius: "10rem"
    },

    tag: { marginBottom: "1%" },

    icon: {
      fontSize: "inherit",
      cursor: "pointer"
    }
  });

interface TagsProps {
  tagsList: string[];
  handleDelete: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

const ArticleTagsList: React.FC<
  TagsProps & WithStyles<typeof styles>
> = props => {
  return (
    <ul className={props.classes.root}>
      {props.tagsList.map(tag => (
        <li className={props.classes.list} key={tag}>
          <CancelOutlinedIcon
            className={props.classes.icon}
            onClick={props.handleDelete}
            id={tag}
          />

          <span className={props.classes.tag}> {tag}</span>
        </li>
      ))}
    </ul>
  );
};

export default withStyles(styles)(ArticleTagsList);
