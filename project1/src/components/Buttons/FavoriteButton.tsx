import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { Article } from "../../dtos/ArticleResponseDto";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { styles } from "./styles/FavoriteButtonStyle";

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
