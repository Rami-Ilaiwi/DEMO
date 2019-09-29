import React from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import utl from "../../utils/utils";
import DeleteComment from "./DeleteComment";

interface CommentItem {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
}

interface CommentsProps {
  comments: CommentItem[];
  handleDeleteComment: (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => void;
}

const useStyles = makeStyles({
  card: {
    maxWidth: 600
  }
});

const Comments: React.FC<CommentsProps> = props => {
  const classes = useStyles();
  const user = utl.getUserDetails();
  const content = props.comments.map(item => {
    return (
      <div key={item.id} className="card">
        <Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <a className="comment-author" href="#/@yiwei">
                <img src={item.author.image} className="comment-author-img" />
              </a>
              <span>
                {" "}
                {/* edit this link */}
                <a className="comment-author ng-binding" href="#/@yiwei">
                  {item.author.username}
                </a>
              </span>
              <br />
              <span className="date">
                {moment(new Date(Date.parse(item.createdAt))).format(
                  "MMMM D, YYYY"
                )}
              </span>
            </Typography>
            <Typography
              className="card-text"
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {item.body}
            </Typography>
          </CardContent>

          <DeleteComment
            commentID={item.id}
            user={user.username}
            author={item.author.username}
            handleDeleteComment={props.handleDeleteComment}
          ></DeleteComment>
        </Card>
      </div>
    );
  });
  return <div>{content}</div>;
};

export default Comments;
