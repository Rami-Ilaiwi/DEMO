import React from "react";
import { Article } from "../dtos/ArticleResponseDto";
interface FavoriteButtonProps extends Pick<Article, "favoritesCount"> {}
const FavoriteButton: React.FC<FavoriteButtonProps> = props => {
  return (
    <button className="favoriteButton">
      <i className="ion-heart"></i>
      <span> {props.favoritesCount}</span>
    </button>
  );
};

export default FavoriteButton;
