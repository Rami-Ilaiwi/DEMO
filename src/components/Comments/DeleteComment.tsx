import React from "react";
import CardActions from "@material-ui/core/CardActions";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/DeleteCommentStyle";
import Grid from "@material-ui/core/Grid";

interface DeleteCommentProps {
  user: string;
  author: string;
  commentID: number;
  handleDeleteComment: (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => void;
}

const DeleteComment: React.FC<
  DeleteCommentProps & WithStyles<typeof styles>
> = ({ user, author, commentID, handleDeleteComment, classes }) => {
  return (
    <Grid item>
      {user === author ? (
        <CardActions>
          <span
            className={classes.deleteIcon}
            onClick={handleDeleteComment}
            id={`${commentID}`}
          >
            <DeleteForeverRoundedIcon
              className={classes.deleteIcon}
              id={`${commentID}`}
            />
          </span>
        </CardActions>
      ) : null}
    </Grid>
  );
};

export default withStyles(styles)(DeleteComment);
