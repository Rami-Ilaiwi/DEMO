import React from "react";
import Grid from "@material-ui/core/Grid";
import ArticleMeta from "../Article/ArticleMeta";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/SlugBannerStyle";

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
  onFollow: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onFavorite: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onDelete: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const SlugBanner: React.FC<SlugProps & WithStyles<typeof styles>> = props => {
  return (
    <Grid container direction="column" justify="center">
      <br />
      <Grid
        item
        style={{
          backgroundColor: "#333",
          width: "100%",
          color: "white"
        }}
      >
        <Grid item style={{ marginLeft: "15%", width: "70%" }}>
          <Grid>
            <h1 className={props.classes.title}>{props.title}</h1>
          </Grid>
          <ArticleMeta
            image={props.image}
            username={props.username}
            createdAt={props.createdAt}
            following={props.following}
            profileName={props.username}
            favorited={props.favorited}
            favoritesCount={props.favoritesCount}
            loggedinUser={props.loggedinUser}
            onFollow={props.onFollow}
            onFavorite={props.onFavorite}
            onDelete={props.onDelete}
          ></ArticleMeta>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(SlugBanner);
