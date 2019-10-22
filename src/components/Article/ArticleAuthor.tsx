import React from "react";
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

const ArticleInfo: React.FC<ArticleInfoProps & WithStyles<typeof styles>> = ({
  image,
  username,
  createdAt,
  classes
}) => {
  const date = moment(Date.parse(createdAt)).format("MMMM D, YYYY");
  return (
    <CardHeader
      avatar={<Avatar src={image} aria-label="recipe" />}
      title={
        <Link className={classes.author} to={`/@${username}`}>
          {username}
        </Link>
      }
      subheader={<span className={classes.date}>{date}</span>}
    />
  );
};

export default withStyles(styles)(ArticleInfo);
