import React from "react";
import CardActions from "@material-ui/core/CardActions";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";

const styles = () =>
  createStyles({
    root: { float: "right", marginRight: "2%" },
    deleteIcon: {
      color: "rgba(0, 0, 0, 0.54)",
      cursor: "pointer",
      fontSize: "1.3rem"
    }
  });

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
> = props => {
  return (
    <div>
      {props.user == props.author ? (
        <CardActions className={props.classes.root}>
          <span
            className={props.classes.deleteIcon}
            onClick={props.handleDeleteComment}
            id={`${props.commentID}`}
          >
            <DeleteForeverRoundedIcon
              className={props.classes.deleteIcon}
              id={`${props.commentID}`}
            />
          </span>
        </CardActions>
      ) : null}
    </div>
  );
};

export default withStyles(styles)(DeleteComment);
