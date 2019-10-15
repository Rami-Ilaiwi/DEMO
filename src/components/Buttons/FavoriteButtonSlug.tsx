import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/FavoriteButtonSlugStyle";

interface FavoriteButtonProps {
  favorited: boolean;
  favoritesCount: number;
  onFavorite: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const FavoriteButtonSlug: React.FC<
  FavoriteButtonProps & WithStyles<typeof styles>
> = props => {
  return (
    <button
      onClick={props.onFavorite}
      className={`${props.classes.root} ${
        props.favorited ? props.classes.unfavorite : props.classes.favorite
      }`}
    >
      <FavoriteIcon className={props.classes.icon}></FavoriteIcon>
      <span>
        {props.favorited ? " Unfavorite" : " Favorite"} Article (
        {props.favoritesCount})
      </span>
    </button>
  );
};

export default withStyles(styles)(FavoriteButtonSlug);
