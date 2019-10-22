import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/FavoriteButtonSlugStyle";
import Button from "@material-ui/core/Button";

interface FavoriteButtonProps {
  favorited: boolean;
  favoritesCount: number;
  onFavorite: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const FavoriteButtonSlug: React.FC<
  FavoriteButtonProps & WithStyles<typeof styles>
> = ({ favorited, favoritesCount, onFavorite, classes }) => {
  return (
    <Button
      onClick={onFavorite}
      className={`${classes.root} ${
        favorited ? classes.unfavorite : classes.favorite
      }`}
    >
      <FavoriteIcon className={classes.icon} />
      <span>
        {favorited ? " Unfavorite" : " Favorite"} Article ({favoritesCount})
      </span>
    </Button>
  );
};

export default withStyles(styles)(FavoriteButtonSlug);
