import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/TagsStyle";
import Typography from "@material-ui/core/Typography";
import LoadingComponent from "../Layout/LoadingComponent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

interface TagsProps {
  tags: string[];
  isLoadingTags: boolean;
  onClickTag: (tag: string) => void;
}

const Tags: React.FC<TagsProps & WithStyles<typeof styles>> = props => {
  const handleTagClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    props.onClickTag(event.currentTarget.id);
  };

  return (
    <Paper className={props.classes.root}>
      <Typography variant="h6">Popular Tags</Typography>
      {props.isLoadingTags ? (
        <LoadingComponent />
      ) : (
        props.tags.map(tag => (
          <Button
            onClick={handleTagClick}
            id={tag}
            key={tag}
            size="small"
            variant="contained"
            className={props.classes.button}
          >
            {tag}
          </Button>
        ))
      )}
    </Paper>
  );
};

export default withStyles(styles)(Tags);
