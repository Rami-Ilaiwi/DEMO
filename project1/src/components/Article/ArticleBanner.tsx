import React from "react";
import Grid from "@material-ui/core/Grid";
import ArticleMeta from "./ArticleMeta";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/ArticleBannerStyle";

import Typography from "@material-ui/core/Typography";

interface SlugProps {
  title: string;
  image: string;
  username: string;
  createdAt: string;
  following: boolean;
  profileName: string;
  favorited: boolean;
  favoritesCount: number;
  loggedinUser: string;
  slug: string;
  onFollow: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onFavorite: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onDelete: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onEdit: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const ArticleBanner: React.FC<
  SlugProps & WithStyles<typeof styles>
> = props => {
  return (
    <Grid container direction="column" justify="center">
      <br />
      <Grid item className={props.classes.root}>
        <Grid item>
          <Typography className={props.classes.title} variant="h4">
            {props.title}
          </Typography>
        </Grid>
        <Grid item>
          <ArticleMeta
            image={props.image}
            username={props.username}
            createdAt={props.createdAt}
            following={props.following}
            profileName={props.username}
            favorited={props.favorited}
            favoritesCount={props.favoritesCount}
            loggedinUser={props.loggedinUser}
            slug={props.slug}
            onFollow={props.onFollow}
            onFavorite={props.onFavorite}
            onDelete={props.onDelete}
            onEdit={props.onEdit}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ArticleBanner);