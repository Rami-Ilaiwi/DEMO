import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
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
            <TextField
              label="Write your article (in markdown)"
              multiline
              rows="7"
              value={props.comment}
              onChange={props.handleComment}
              className={props.classes.input}
              margin="normal"
              variant="outlined"
            />
          </CardContent>

          <CardActions>
            <img className={props.classes.userImage} src={props.image} />
            <input
              className={props.classes.postComment}
              type="submit"
              value="Post Comment"
            />
          </CardActions>
        </form>
      </Card>
    </div>
  );
};

export default withStyles(styles)(UserComment);
