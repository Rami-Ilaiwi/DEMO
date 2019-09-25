import React from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

interface commentItem {
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

interface commentsProps {
  comments: commentItem[];
}

const useStyles = makeStyles({
  card: {
    maxWidth: 600
  }
});

const Comments: React.FC<commentsProps> = props => {
  const classes = useStyles();
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
            <Typography variant="body2" color="textSecondary" component="p">
              <p className="card-text">{item.body}</p>
            </Typography>
          </CardContent>

          {/* hereee */}
          <CardActions>
            {/* <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button> */}
            {/* <span className="mod-options ng-hide" ng-show="$ctrl.canModify">
              <i className="ion-trash-a" ng-click="$ctrl.deleteCb()"></i>
            </span> */}
          </CardActions>
        </Card>
      </div>
    );
  });
  return <ul>{content}</ul>;
};

export default Comments;
