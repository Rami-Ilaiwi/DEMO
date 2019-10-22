import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { styles } from "./styles/FavoriteButtonStyle";

interface FavoriteButtonProps {
  favoritesCount: number;
  favorited: boolean;
  slug: string;
  onFavorite: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const FavoriteButton: React.FC<
  FavoriteButtonProps & WithStyles<typeof styles>
> = ({ favoritesCount, favorited, slug, onFavorite, classes }) => {
  return (
    <button
      id={slug}
      onClick={onFavorite}
      className={`${classes.root} ${
        favorited ? classes.unfavorite : classes.favorite
      }`}
    >
      <FavoriteIcon className={classes.icon} />
      <span> {favoritesCount}</span>
    </button>
  );
};

export default withStyles(styles)(FavoriteButton);
