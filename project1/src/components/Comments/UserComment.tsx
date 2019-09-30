import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";

const styles = () =>
  createStyles({
    root: {
      maxWidth: 600
    },
    postComment: {
      textAlign: "center",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      cursor: "pointer",
      userSelect: "none",
      border: "1px solid transparent",
      padding: "0.25rem 0.5rem",
      fontSize: "0.875rem",
      borderRadius: "0.2rem",
      opacity: 0.8,
      color: "white",
      backgroundColor: "#5cb85c",
      float: "right",
      "&:hover, &focus, &active": {
        color: "#fff",
        backgroundColor: "#449d44",
        borderColor: " #419641"
      },
      "&active:hover, active:focus": {
        color: "#fff",
        backgroundColor: "#398439",
        borderColor: "#2d672d"
      }
    },
    comment: {
      display: "block",
      paddingTop: "0.5rem",
      width: "100%",
      minWidth: "60px",
      minHeight: "150px",
      lineHeight: "1.25",
      color: "#55595c",
      backgroundColor: "#fff",
      backgroundImage: "none",
      backgroundClip: "padding-box",
      border: "1px solid rgba(0, 0, 0, 0.15)",
      borderRadius: "0.25rem",
      fontFamily: "'Source Sans Pro', sans-serif",
      fontSize: "1.25rem",
      resize: "vertical"
    },
    userImage: { height: "30px", width: "30px", borderRadius: "30px" }
  });

interface UserCommentProps {
  comment: string;
  image: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleComment: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const UserComment: React.FC<
  UserCommentProps & WithStyles<typeof styles>
> = props => {
  return (
    <div className="card">
      <Card className={props.classes.root}>
        <form onSubmit={props.handleSubmit}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <div>
                <textarea
                  className={props.classes.comment}
                  placeholder="Write a comment..."
                  rows={3}
                  value={props.comment}
                  onChange={props.handleComment}
                ></textarea>
              </div>
            </Typography>
          </CardContent>

          <CardActions>
            <img className={props.classes.userImage} src={props.image} />
            <input
              className={props.classes.postComment}
              type="submit"
              value="Post Comment"
            ></input>
          </CardActions>
        </form>
      </Card>
    </div>
  );
};

export default withStyles(styles)(UserComment);
