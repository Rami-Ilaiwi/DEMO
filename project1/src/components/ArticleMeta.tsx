import React from "react";
import Grid from "@material-ui/core/Grid";
import moment from "moment";

interface ArticleMetaProps {
  image: string;
  username: string;
  createdAt: string;
  following: boolean;
  profileName: string;
  favorited: boolean;
  favoritesCount: number;
  handleFollow: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
  handleFav: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
}

class ArticleMeta extends React.Component<ArticleMetaProps> {
  //   handleFollow = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //     this.props.handleFollow(event)
  //   };

  render() {
    return (
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <Grid
          item
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          xs={2}
        >
          <Grid item xs={3}>
            <img
              src={this.props.image}
              className="articleImage"
              alt={this.props.username}
            ></img>
          </Grid>
          <Grid item>
            <Grid>{this.props.username}</Grid>
            <Grid className="date">
              {moment(new Date(Date.parse(this.props.createdAt))).format(
                "MMMM D, YYYY"
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <button
            onClick={this.props.handleFollow}
            className={`btn ${this.props.following ? "unFollow" : "follow"}`}
          >
            <i className="ion-plus-round"></i>
            <span>
              {this.props.following ? " Unfollow" : " Follow"}{" "}
              {this.props.profileName}
            </span>
          </button>
          <button
            onClick={this.props.handleFav}
            className={`btn ${this.props.favorited ? "unFav" : "fav"}`}
          >
            <i className="ion-heart"></i>
            <span>
              {this.props.favorited ? " Unfavorite" : " Favorite"} Article (
              {this.props.favoritesCount})
            </span>
          </button>
        </Grid>
      </Grid>
    );
  }
}

export default ArticleMeta;
