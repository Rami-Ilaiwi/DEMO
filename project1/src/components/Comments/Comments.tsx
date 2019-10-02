import React from "react";
import moment from "moment";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import utl from "../../utils/utils";
import DeleteComment from "./DeleteComment";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { styles } from "./styles/CommentsStyle";

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

const Comments: React.FC<CommentsProps & WithStyles<typeof styles>> = props => {
  const user = utl.getUserDetails();
  const content = props.comments.map(item => {
    return (
      <div key={item.id} className={props.classes.root}>
        <Card className={props.classes.cardWidth}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <Link className={props.classes.commentAuthor} to="/@yiwei">
                <img
                  src={item.author.image}
                  className={props.classes.commentAuthorImage}
                />
              </Link>
              <span>
                {" "}
                {/* edit this link */}
                <Link className={props.classes.commentAuthor} to="/@yiwei">
                  {item.author.username}
                </Link>
              </span>
              <br />
              <span className={props.classes.date}>
                {moment(new Date(Date.parse(item.createdAt))).format(
                  "MMMM D, YYYY"
                )}
              </span>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
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

export default withStyles(styles)(Comments);
