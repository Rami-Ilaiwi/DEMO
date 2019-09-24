import React from "react";
import Grid from "@material-ui/core/Grid";
import FavoriteButton from "./FavoriteButton";
import TagList from "./TagList";
import moment from "moment";
import { Link } from "react-router-dom";
interface ArticleProps {
  image: string;
  username: string;
  createdAt: string;
  favoritesCount: number;
  title: string;
  description: string;
  tagList: Array<string>;
  slug: string;
}

const Article: React.FC<ArticleProps> = props => {
  return (
    <Grid container direction="column">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          item
          xs={6}
          spacing={2}
        >
          <Grid item>
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
              {moment(new Date(Date.parse(props.createdAt))).format(
                "MMMM D, YYYY"
              )}
            </span>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <FavoriteButton
            favoritesCount={props.favoritesCount}
          ></FavoriteButton>
        </Grid>
      </Grid>
      <Link to={`/article/${props.slug}`}>
        <Grid item>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </Grid>
        <Grid container direction="row" justify="space-between">
          <Grid item>
            <span>Read more...</span>
          </Grid>
          <Grid item>
            <TagList tagList={props.tagList}></TagList>
            {/* {console.log(props.tagList)} */}
          </Grid>
        </Grid>
      </Link>
    </Grid>
  );
};

export default Article;
