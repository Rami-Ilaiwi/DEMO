import React from "react";
import Grid from "@material-ui/core/Grid";
import AXIOS from "../../utils/AXIOS";
import { RouteComponentProps } from "react-router-dom";
import TagList from "../Tags/TagList";
import Comments from "../Comments/Comments";
import ArticleMeta from "../Article/ArticleMeta";
import UserComment from "../Comments/UserComment";
import utl from "../../utils/utils";
import SlugBanner from "./SlugBanner";

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
    AXIOS.noauthGet(`articles/${this.props.match.params.slug}`)
      .then(res => {
        const article = res.data.article;
        this.setState({
          article
        });
      })
      .then(() =>
        AXIOS.noauthGet(`profiles/${this.state.article.author.username}`).then(
          res => {
            const profile = res.data.profile;
            this.setState({
              profile
            });
          }
        )
      );
    AXIOS.noauthGet(`articles/${this.props.match.params.slug}/comments`).then(
      res => this.setState({ comments: res.data.comments })
    );
  }

  /* ***** handlers ***** */

  handleFavoriteClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
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
    const token = localStorage.getItem("userToken");
    return (
      <>
        <SlugBanner
          title={article.title}
          image={article.author.image}
          username={article.author.username}
          createdAt={article.createdAt}
          following={profile.following}
          profileName={profile.username}
          favorited={article.favorited}
          favoritesCount={article.favoritesCount}
          handleFollow={this.handleFollowClick}
          handleFavorite={this.handleFavoriteClick}
        ></SlugBanner>

        <Grid item style={{ marginTop: "2%", marginLeft: "15%" }}>
          <Grid item>{article.body}</Grid>
          <Grid item>
            <TagList tagList={article.tagList}></TagList>
          </Grid>
        </Grid>

        <Grid item style={{ marginLeft: "28%" }}>
          <ArticleMeta
            image={article.author.image}
            username={article.author.username}
            createdAt={article.createdAt}
            following={profile.following}
            profileName={profile.username}
            favorited={article.favorited}
            favoritesCount={article.favoritesCount}
            handleFollow={this.handleFollowClick}
            handleFavorite={this.handleFavoriteClick}
          ></ArticleMeta>
        </Grid>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item></Grid>
          {/* style={{ marginLeft: "25%", marginTop: "2%" }} */}
          <Grid item>
            <hr style={{ width: "1000px" }} />

            {token ? (
              <UserComment
                comment={this.state.comment}
                image={utl.getUserDetails().image}
                handleComment={this.handleComment}
                handleSubmit={this.handleFormSubmit}
              ></UserComment>
            ) : null}

            <Comments comments={this.state.comments}></Comments>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Slug;
