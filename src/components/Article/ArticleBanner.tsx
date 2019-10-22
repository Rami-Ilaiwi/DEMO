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

const ArticleBanner: React.FC<SlugProps & WithStyles<typeof styles>> = ({
  title,
  image,
  username,
  createdAt,
  following,
  profileName,
  favorited,
  favoritesCount,
  loggedinUser,
  slug,
  onFollow,
  onFavorite,
  onDelete,
  onEdit,
  classes
}) => {
  return (
    <Grid container direction="column" justify="center">
      <br />
      <Grid item className={classes.root}>
        <Grid item>
          <Typography className={classes.title} variant="h4">
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <ArticleMeta
            image={image}
            username={username}
            createdAt={createdAt}
            following={following}
            profileName={username}
            favorited={favorited}
            favoritesCount={favoritesCount}
            loggedinUser={loggedinUser}
            slug={slug}
            onFollow={onFollow}
            onFavorite={onFavorite}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ArticleBanner);
