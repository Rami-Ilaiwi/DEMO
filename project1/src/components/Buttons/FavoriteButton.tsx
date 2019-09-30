import React from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import { Article } from "../../dtos/ArticleResponseDto";
import FavoriteIcon from "@material-ui/icons/Favorite";

const styles = () =>
  createStyles({
    root: {
      padding: "0.25rem 0.5rem",
      fontSize: "0.875rem",
      borderRadius: "0.2rem",
      fontWeight: "normal",
      lineHeight: "1.25",
      textAlign: "center",
      verticalAlign: "middle",
      cursor: "pointer",
      border: "1px solid transparent",
      color: "#5cb85c",
      backgroundColor: "transparent",
      borderColor: "#5cb85c"
    },
    icon: {
      fontSize: "inherit"
    }
  });

interface FavoriteButtonProps extends Pick<Article, "favoritesCount"> {}
const FavoriteButton: React.FC<
  FavoriteButtonProps & WithStyles<typeof styles>
> = props => {
  return (
    <button className={props.classes.root}>
      <FavoriteIcon className={props.classes.icon}></FavoriteIcon>
      <span> {props.favoritesCount}</span>
    </button>
  );
};

export default withStyles(styles)(FavoriteButton);
