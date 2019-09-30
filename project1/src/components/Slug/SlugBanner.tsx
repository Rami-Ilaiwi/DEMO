import React from "react";
import Grid from "@material-ui/core/Grid";
import ArticleMeta from "../Article/ArticleMeta";

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
  handleFollow: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleFavorite: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleDelete: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const SlugBanner: React.FC<SlugProps> = props => {
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
            <h1>{props.title}</h1>
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
            handleFollow={props.handleFollow}
            handleFavorite={props.handleFavorite}
            handleDelete={props.handleDelete}
          ></ArticleMeta>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SlugBanner;
