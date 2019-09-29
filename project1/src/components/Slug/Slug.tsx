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
  state = {
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
    comments: [
      {
        id: 0,
        createdAt: "",
        updatedAt: "",
        body: "",
        author: {
          username: "",
          bio: "",
          image: "",
          following: false
        }
      }
    ],
    comment: ""
  };
  slug = this.props.match.params.slug;

  componentDidMount() {
    AXIOS.noauthGet(`articles/${this.slug}`)
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
    AXIOS.noauthGet(`articles/${this.slug}/comments`).then(res =>
      this.setState({ comments: res.data.comments })
    );
  }

  /* ***** handlers ***** */

  handleFavoriteClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (this.state.article.favorited) {
      AXIOS.DELETE({
        endpoint: `articles/${this.slug}/favorite`
      }).then(resp => this.setState({ article: resp.article }));
    } else {
      AXIOS.post({
        endpoint: `articles/${this.slug}/favorite`
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

  handleDeleteArticle = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    AXIOS.DELETE({ endpoint: `articles/${this.slug}` }).then(
      () => (window.location.href = "/")
    );
  };

  handleComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ comment: event.target.value });
  };

  handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    AXIOS.post({
      endpoint: `articles/${this.slug}/comments`,
      body: {
        comment: {
          body: `${this.state.comment}`
        }
      }
    }).then(
      () => (
        this.setState({ comment: "" }),
        AXIOS.noauthGet(`articles/${this.slug}/comments`).then(res =>
          this.setState({ comments: res.data.comments })
        )
      )
    );
  };

  handleDeleteComment = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    AXIOS.DELETE({
      endpoint: `articles/${this.slug}/comments/${event.currentTarget.id}`
    }).then(() =>
      AXIOS.noauthGet(`articles/${this.slug}/comments`).then(res =>
        this.setState({ comments: res.data.comments })
      )
    );
    // console.log(event.currentTarget.id);
  };
  /* ****************** */

  render() {
    const article = this.state.article;
    const profile = this.state.profile;
    const user = utl.getUserDetails();
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
          loggedinUser={user.username}
          handleFollow={this.handleFollowClick}
          handleFavorite={this.handleFavoriteClick}
          handleDelete={this.handleDeleteArticle}
        ></SlugBanner>

        <Grid
          item
          style={{
            marginTop: "2%",
            marginLeft: "16%",
            width: "69%",
            textAlign: "justify"
          }}
        >
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
            loggedinUser={user.username}
            handleFollow={this.handleFollowClick}
            handleFavorite={this.handleFavoriteClick}
            handleDelete={this.handleDeleteArticle}
          ></ArticleMeta>
        </Grid>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <hr style={{ width: "1000px" }} />

            {token ? (
              <UserComment
                comment={this.state.comment}
                image={user.image}
                handleComment={this.handleComment}
                handleSubmit={this.handleFormSubmit}
              ></UserComment>
            ) : null}

            <Comments
              comments={this.state.comments}
              handleDeleteComment={this.handleDeleteComment}
            ></Comments>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Slug;
