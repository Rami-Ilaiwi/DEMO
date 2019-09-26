import React from "react";
import Grid from "@material-ui/core/Grid";
import moment from "moment";

interface ArticleInfoProps {
  image: string;
  username: string;
  createdAt: string;
}

const ArticleInfo: React.FC<ArticleInfoProps> = props => {
  return (
    <>
      {/* <Grid item>
        <a>
          <img
            src={props.image}
            className="articleImage"
            alt={props.username}
          ></img>
        </a>
      </Grid>
      <Grid item>
        <div>
          <a>{props.username}</a>
        </div>
        <span>
          {moment(new Date(Date.parse(props.createdAt))).format("MMMM D, YYYY")}
        </span>
      </Grid> */}

      <Grid
        item
        container
        direction="row"
        alignItems="center"
        xs={8}
        spacing={2}
      >
        <Grid item>
          <img
            src={props.image}
            className="articleImage"
            alt={props.username}
          ></img>
        </Grid>
        <Grid item>
          <Grid>{props.username}</Grid> {/* Make this a Link */}
          <Grid className="date">
            {moment(new Date(Date.parse(props.createdAt))).format(
              "MMMM D, YYYY"
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ArticleInfo;
