import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/UserCommentStyle";

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
    <div className={props.classes.root}>
      <Card>
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
