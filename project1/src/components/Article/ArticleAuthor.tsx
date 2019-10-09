import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import moment from "moment";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/ArticleAuthorStyle";

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
    <>
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        xs={8}
        spacing={2}
      >
        <Grid item>
          <img src={props.image} className={props.classes.image} />
        </Grid>
        <Grid item>
          <Grid item>
            <Link className={props.classes.author} to={`/@${props.username}`}>
              {props.username}
            </Link>
          </Grid>
          <Grid className={props.classes.date}>{date}</Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default withStyles(styles)(ArticleInfo);
