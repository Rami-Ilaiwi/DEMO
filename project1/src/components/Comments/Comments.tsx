import React from "react";
import moment from "moment";
// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import utl from "../../utils/utils";
import DeleteComment from "./DeleteComment";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";

const styles = () =>
  createStyles({
    root: {
      boxShadow: "none",
      position: "relative",
      display: "block",
      marginBottom: "0.75rem",
      borderRadius: "0.25rem",
      marginLeft: "19%"
    },

    commentAuthor: {
      display: "inline-block"
    },

    commentAuthorImage: {
      display: "inline-block",
      verticalAlign: "middle",
      height: "30px",
      width: "30px",
      borderRadius: "30px"
    },

    cardWidth: {
      maxWidth: 600
    },

    date: {
      color: "#bbb",
      fontSize: "0.8rem",
      display: "block"
    }
  });

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

// const useStyles = makeStyles({
//   cardWidth: {
//     maxWidth: 600
//   }
// });

const Comments: React.FC<CommentsProps & WithStyles<typeof styles>> = props => {
  // const classes = useStyles();
  const user = utl.getUserDetails();
  const content = props.comments.map(item => {
    return (
      <div key={item.id} className={props.classes.root}>
        <Card className={props.classes.cardWidth}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <a className={props.classes.commentAuthor} href="#/@yiwei">
                <img
                  src={item.author.image}
                  className={props.classes.commentAuthorImage}
                />
              </a>
              <span>
                {" "}
                {/* edit this link */}
                <a className={props.classes.commentAuthor} href="#/@yiwei">
                  {item.author.username}
                </a>
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
