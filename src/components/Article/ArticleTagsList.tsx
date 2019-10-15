import React from "react";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/ArticleTagsListStyle";

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
