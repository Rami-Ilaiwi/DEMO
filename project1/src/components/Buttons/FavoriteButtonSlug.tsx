import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";

const styles = () =>
  createStyles({
    root: {
      float: "right",
      backgroundColor: "transparent",
      borderColor: "#5cb85c",
      whiteSpace: "nowrap",
      opacity: 0.8,
      borderRadius: "0.2rem",
      fontSize: "0.875rem",
      padding: "0.25rem 0.5rem",
      marginRight: "1%",
      border: "1px solid transparent",
      cursor: "pointer"
    },

    favorite: {
      color: "#5cb85c",
      backgroundColor: "transparent",
      borderColor: "#5cb85c"
    },

    unfavorite: {
      color: "#fff",
      backgroundColor: "#5cb85c",
      borderColor: "#5cb85c"
    },

    icon: {
      fontSize: "inherit",
      cursor: "pointer"
    }
  });

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
