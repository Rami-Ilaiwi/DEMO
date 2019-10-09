import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import moment from "moment";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/ArticleAuthorStyle";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";

interface ArticleInfoProps {
  image: string;
  username: string;
  createdAt: string;
}

const ArticleInfo: React.FC<
  ArticleInfoProps & WithStyles<typeof styles>
> = props => {
  const date = moment(Date.parse(props.createdAt)).format("MMMM D, YYYY");
  return (
    <CardHeader
      avatar={<Avatar src={props.image} aria-label="recipe" />}
      title={
        <Link className={props.classes.author} to={`/@${props.username}`}>
          {props.username}
        </Link>
      }
      subheader={<span className={props.classes.date}>{date}</span>}
    />
  );
};

export default withStyles(styles)(ArticleInfo);
