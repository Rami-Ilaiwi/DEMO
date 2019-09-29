import React from "react";

interface FavoriteButtonProps {
  favorited: boolean;
  favoritesCount: number;
  handleFavorite: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const FavoriteButtonSlug: React.FC<FavoriteButtonProps> = props => {
  return (
    <button
      onClick={props.handleFavorite}
      className={`btn ${props.favorited ? "unFav" : "fav"}`}
    >
      <i className="ion-heart"></i>
      <span>
        {props.favorited ? " Unfavorite" : " Favorite"} Article (
        {props.favoritesCount})
      </span>
    </button>
  );
};

export default FavoriteButtonSlug;
