import React from "react";
import Grid from "@material-ui/core/Grid";
import AXIOS from "../utils/AXIOS";
import { RouteComponentProps } from "react-router-dom";
import TagList from "./TagList";
import Comments from "./Comments";
import ArticleMeta from "./ArticleMeta";
import UserComment from "./UserComment";

class Slug extends React.Component<RouteComponentProps<{ slug: string }>> {
  public state = {
    article: {
      title: "",
      slug: "",
      body: "",
      createdAt: "",
      updatedAt: "",
      tagList: [],
      description: "",
      author: {
        username: "",
        bio: "",
        image: "",
        following: false
      },
      favorited: false,
      favoritesCount: 0
    },
    profile: {
      bio: "",
      following: false,
      image: "",
      username: ""
    },
    comments: [],
    comment: ""
  };

  public componentDidMount() {
    AXIOS.get(`articles/${this.props.match.params.slug}`)
      .then(res => {
        const article = res.data.article;
        this.setState({
          article
        });
      })
      .then(() =>
        AXIOS.get(`profiles/${this.state.article.author.username}`).then(
          res => {
            const profile = res.data.profile;
            this.setState({
              profile
            });
          }
        )
      );
    AXIOS.get(`articles/${this.props.match.params.slug}/comments`).then(res =>
      this.setState({ comments: res.data.comments })
    );
  }

  /* ***** handlers ***** */

  handleFavClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (this.state.article.favorited) {
      AXIOS.DELETE({
        endpoint: `articles/${this.props.match.params.slug}/favorite`
      }).then(resp => this.setState({ article: resp.article }));
    } else {
      AXIOS.post({
        endpoint: `articles/${this.props.match.params.slug}/favorite`
      }).then(resp => this.setState({ article: resp.article }));
    }
  };

  handleFollowClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (this.state.profile.following) {
      AXIOS.DELETE({
        endpoint: `profiles/${this.state.profile.username}/follow`
      }).then(resp => this.setState({ profile: resp.profile }));
    } else {
      AXIOS.post({
        endpoint: `profiles/${this.state.profile.username}/follow`
      }).then(resp => this.setState({ profile: resp.profile }));
    }
  };

  handleComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ comment: event.target.value });
  };

  handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    AXIOS.post({
      endpoint: `articles/${this.props.match.params.slug}/comments`,
      body: {
        comment: {
          body: `${this.state.comment}`
        }
      }
    });
  };

  /* ****************** */

  public render() {
    const article = this.state.article;
    const profile = this.state.profile;

    return (
      <>
        <Grid container direction="column" justify="center">
          <br />
          <Grid
            item
            style={{
              backgroundColor: "#333",
              width: "100%",
              color: "white"
            }}
          >
            <Grid item style={{ marginLeft: "15%", width: "70%" }}>
              <Grid>
                <h1>{article.title}</h1>
              </Grid>
              <ArticleMeta
                image={article.author.image}
                username={article.author.username}
                createdAt={article.createdAt}
                following={profile.following}
                profileName={profile.username}
                favorited={article.favorited}
                favoritesCount={article.favoritesCount}
                handleFollow={this.handleFollowClick}
                handleFav={this.handleFavClick}
              ></ArticleMeta>
            </Grid>
          </Grid>
        </Grid>

        <Grid container direction="column"></Grid>

        <Grid item style={{ marginTop: "2%", marginLeft: "15%" }}>
          <Grid item>{article.body}</Grid>
          <Grid item>
            <TagList tagList={article.tagList}></TagList>
          </Grid>
        </Grid>

        <Grid item style={{ marginLeft: "30%" }}>
          <ArticleMeta
            image={article.author.image}
            username={article.author.username}
            createdAt={article.createdAt}
            following={profile.following}
            profileName={profile.username}
            favorited={article.favorited}
            favoritesCount={article.favoritesCount}
            handleFollow={this.handleFollowClick}
            handleFav={this.handleFavClick}
          ></ArticleMeta>
        </Grid>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item></Grid>
          {/* style={{ marginLeft: "25%", marginTop: "2%" }} */}
          <Grid item>
            <hr />

            <UserComment
              comment={this.state.comment}
              handleComment={this.handleComment}
              handleSubmit={this.handleFormSubmit}
            ></UserComment>
            <Comments comments={this.state.comments}></Comments>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Slug;
