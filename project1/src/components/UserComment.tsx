import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

interface PROPS {
  comment: string;
  image: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleComment: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

class UserComment extends React.Component<PROPS> {
  render() {
    return (
      <div className="comment-card">
        <Card style={{ maxWidth: "600px" }}>
          <form onSubmit={this.props.handleSubmit}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <div>
                  <textarea
                    className="comment"
                    placeholder="Write a comment..."
                    rows={3}
                    value={this.props.comment}
                    onChange={this.props.handleComment}
                  ></textarea>
                </div>
              </Typography>
            </CardContent>

            <CardActions>
              <img className="comment-user-img" src={this.props.image} />
              <input
                className="btn btn-sm btn-primary"
                type="submit"
                value="Post Comment"
              ></input>
            </CardActions>
          </form>
        </Card>
      </div>
    );
  }
}

export default UserComment;
