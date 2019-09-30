import React from "react";
import CardActions from "@material-ui/core/CardActions";

interface DeleteCommentProps {
  user: string;
  author: string;
  commentID: number;
  handleDeleteComment: (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => void;
}

const DeleteComment: React.FC<DeleteCommentProps> = props => {
  return (
    <div>
      {props.user == props.author ? (
        <CardActions style={{ float: "right", marginRight: "2%" }}>
          <span
            className="deleteIcon"
            onClick={props.handleDeleteComment}
            id={`${props.commentID}`}
          >
            <i className="ion-android-delete" id={`${props.commentID}`}></i>
          </span>
        </CardActions>
      ) : null}
    </div>
  );
};

export default DeleteComment;
