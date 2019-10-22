import React from "react";
import Grid from "@material-ui/core/Grid";
import FollowButton from "../Buttons/FollowButton";
import FavoriteButtonSlug from "../Buttons/FavoriteButtonSlug";
import ArticleAuthor from "./ArticleAuthor";
import DeleteButton from "../Buttons/DeleteButton";
import EditButton from "../Buttons/EditButton";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/ArticleMetaStyle";

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

const ArticleMeta: React.FC<ArticleMetaProps & WithStyles<typeof styles>> = ({
  image,
  username,
  createdAt,
  following,
  profileName,
  favorited,
  favoritesCount,
  loggedinUser,
  slug,
  onFollow,
  onFavorite,
  onDelete,
  onEdit,
  classes
}) => {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={4}>
        <ArticleAuthor
          image={image}
          username={username}
          createdAt={createdAt}
        />
      </Grid>

      <Grid item container xs={4} spacing={1}>
        {loggedinUser === username ? (
          <>
            <Grid item>
              <EditButton slug={slug} onEdit={onEdit} />
            </Grid>
            <Grid item>
              <DeleteButton onDelete={onDelete} />
            </Grid>
          </>
        ) : (
          <>
            <Grid item>
              <FollowButton
                following={following}
                onFollow={onFollow}
                profileName={profileName}
              />
            </Grid>

            <Grid item>
              <FavoriteButtonSlug
                onFavorite={onFavorite}
                favorited={favorited}
                favoritesCount={favoritesCount}
              />
            </Grid>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ArticleMeta);
