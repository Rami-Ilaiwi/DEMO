import React from "react";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/ArticleTagsListStyle";

interface TagsProps {
  tagsList: string[];
  handleDelete: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

const ArticleTagsList: React.FC<TagsProps & WithStyles<typeof styles>> = ({
  tagsList,
  handleDelete,
  classes
}) => {
  return (
    <ul className={classes.root}>
      {tagsList.map(tag => (
        <li className={classes.list} key={tag}>
          <CancelOutlinedIcon
            className={classes.icon}
            onClick={handleDelete}
            id={tag}
          />

          <span className={classes.tag}> {tag}</span>
        </li>
      ))}
    </ul>
  );
};

export default withStyles(styles)(ArticleTagsList);
