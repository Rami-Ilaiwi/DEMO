import React from "react";
import Grid from "@material-ui/core/Grid";
import FollowButton from "../Buttons/FollowButton";
import FavoriteButtonSlug from "../Buttons/FavoriteButtonSlug";
import ArticleInfo from "./ArticleInfo";
import DeleteButton from "../Buttons/DeleteButton";

interface ArticleMetaProps {
  image: string;
  username: string;
  createdAt: string;
  following: boolean;
  profileName: string;
  favorited: boolean;
  favoritesCount: number;
  loggedinUser: string;
  handleFollow: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleFavorite: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleDelete: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

class ArticleMeta extends React.Component<ArticleMetaProps> {
  //   handleFollow = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //     this.props.handleFollow(event)
  //   };

  render() {
    return (
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <Grid item xs={4}>
          <ArticleInfo
            image={this.props.image}
            username={this.props.username}
            createdAt={this.props.createdAt}
          ></ArticleInfo>
        </Grid>

        <Grid item container direction="row" xs={4} spacing={1}>
          <Grid item>
            <FollowButton
              following={this.props.following}
              handleFollow={this.props.handleFollow}
              profileName={this.props.profileName}
            ></FollowButton>
          </Grid>
          {this.props.loggedinUser == this.props.username ? (
            <Grid item>
              <DeleteButton
                handleDelete={this.props.handleDelete}
              ></DeleteButton>
            </Grid>
          ) : (
            <Grid item>
              <FavoriteButtonSlug
                handleFavorite={this.props.handleFavorite}
                favorited={this.props.favorited}
                favoritesCount={this.props.favoritesCount}
              ></FavoriteButtonSlug>
            </Grid>
          )}
        </Grid>
      </Grid>
    );
  }
}

export default ArticleMeta;
