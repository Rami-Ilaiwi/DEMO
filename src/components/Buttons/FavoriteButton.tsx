import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
//import { Article } from "../../dtos/ArticleResponseDto";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { styles } from "./styles/FavoriteButtonStyle";

interface FavoriteButtonProps {
  favoritesCount: number;
  favorited: boolean;
  slug: string;
  onFavorite: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

// interface FavoriteButtonProps extends Pick<Article, "favoritesCount"> {}
const FavoriteButton: React.FC<
  FavoriteButtonProps & WithStyles<typeof styles>
> = props => {
  const classes = props.classes;
  return (
    <button
      id={props.slug}
      onClick={props.onFavorite}
      className={`${classes.root} ${
        props.favorited ? classes.unfavorite : classes.favorite
      }`}
    >
      <FavoriteIcon className={classes.icon}></FavoriteIcon>
      <span> {props.favoritesCount}</span>
    </button>
  );
};

export default withStyles(styles)(FavoriteButton);