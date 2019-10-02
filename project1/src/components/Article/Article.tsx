import React from "react";
import Grid from "@material-ui/core/Grid";
import FavoriteButton from "../Buttons/FavoriteButton";
import TagList from "../Tags/TagList";
import { Link } from "react-router-dom";
import ArticleAuthor from "./ArticleAuthor";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/ArticleStyle";

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

const Article: React.FC<ArticleProps & WithStyles<typeof styles>> = props => {
  return (
    <Grid className={props.classes.root} container direction="column">
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
          <ArticleAuthor
            image={props.image}
            createdAt={props.createdAt}
            username={props.username}
          />
        </Grid>
        <Grid item xs={1}>
          <FavoriteButton favoritesCount={props.favoritesCount} />
        </Grid>
      </Grid>
      <Link className={props.classes.articleBody} to={`/article/${props.slug}`}>
        <Grid item>
          <h1 className={props.classes.title}>{props.title}</h1>
          <p>{props.description}</p>
        </Grid>
        <Grid container direction="row" justify="space-between">
          <Grid item>
            <span>Read more...</span>
          </Grid>
          <Grid item>
            <TagList tagList={props.tagList} />
            {/* {console.log(props.tagList)} */}
          </Grid>
        </Grid>
      </Link>
    </Grid>
  );
};

export default withStyles(styles)(Article);
