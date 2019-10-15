import React from "react";
import Grid from "@material-ui/core/Grid";
import FollowButton from "../Buttons/FollowButton";
import FavoriteButtonSlug from "../Buttons/FavoriteButtonSlug";
import ArticleAuthor from "./ArticleAuthor";
import DeleteButton from "../Buttons/DeleteButton";
import EditButton from "../Buttons/EditButton";

interface ArticleMetaProps {
  image: string;
  username: string;
  createdAt: string;
  following: boolean;
  profileName: string;
  favorited: boolean;
  favoritesCount: number;
  loggedinUser: string;
  slug: string;
  onFollow: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onFavorite: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onDelete: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onEdit: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const ArticleMeta: React.FC<ArticleMetaProps> = props => {
  //   onFollow = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //     this.props.onFollow(event)
  //   };

  return (
    <Grid container>
      <Grid item xs={4}>
        <ArticleAuthor
          image={props.image}
          username={props.username}
          createdAt={props.createdAt}
        />
      </Grid>

      <Grid item container xs={4} spacing={1}>
        {props.loggedinUser == props.username ? (
          <>
            <Grid item style={{ marginTop: "1%" }}>
              <EditButton slug={props.slug} onEdit={props.onEdit}></EditButton>
            </Grid>
            <Grid item>
              <DeleteButton onDelete={props.onDelete} />
            </Grid>
          </>
        ) : (
          <>
            <Grid item>
              <FollowButton
                following={props.following}
                onFollow={props.onFollow}
                profileName={props.profileName}
              />
            </Grid>

            <Grid item>
              <FavoriteButtonSlug
                onFavorite={props.onFavorite}
                favorited={props.favorited}
                favoritesCount={props.favoritesCount}
              />
            </Grid>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default ArticleMeta;