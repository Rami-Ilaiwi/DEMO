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
import Grid from "@material-ui/core/Grid";

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

const Comments: React.FC<CommentsProps & WithStyles<typeof styles>> = ({
  comments,
  handleDeleteComment,
  classes
}) => {
  const user = utl.getUserDetails();
  const content = comments.map(item => {
    return (
      <div key={item.id} className={classes.root}>
        <Card className={classes.cardWidth}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <Link
                className={classes.commentAuthor}
                to={`/@${item.author.username}`}
              >
                <img
                  src={item.author.image}
                  className={classes.commentAuthorImage}
                  alt={item.author.username}
                />
              </Link>
              <span>
                {" "}
                <Link
                  className={classes.commentAuthor}
                  to={`/@${item.author.username}`}
                >
                  {item.author.username}
                </Link>
              </span>
              <br />
              <span className={classes.date}>
                {moment(new Date(Date.parse(item.createdAt))).format(
                  "MMMM D, YYYY"
                )}
              </span>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.body}
            </Typography>
          </CardContent>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <DeleteComment
              commentID={item.id}
              user={user.username}
              author={item.author.username}
              handleDeleteComment={handleDeleteComment}
            />
          </Grid>
        </Card>
      </div>
    );
  });
  return <div>{content}</div>;
};

export default withStyles(styles)(Comments);
