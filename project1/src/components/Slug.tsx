import React from "react";
import Grid from "@material-ui/core/Grid";
import AXIOS from "../utils/AXIOS";
import { RouteComponentProps } from "react-router-dom";
import moment from "moment";
import TagList from "./TagList";
import Comments from "./Comments";
// interface MYProps extends RouteComponentProps<{ slug: string }> {}

// interface PROPS {
//   article: {
//     title: string;
//     slug: string;
//     body: string;
//     createdAt: string;
//     updatedAt: string;
//     tagList: [];
//     description: string;
//     author: {
//       username: string;
//       bio: string;
//       image: string;
//       following: boolean;
//     };
//     favorited: boolean;
//     favoritesCount: number;
//   };
// }

// interface comments {
//   id: number;
//   createdAt: string;
//   updatedAt: string;
//   body: string;
//   author: {
//     username: string;
//     bio: string;
//     image: string;
//     following: boolean;
//   };
// }

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
    comments: []
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
    AXIOS.get(
      "articles/the-sole-reason-people-are-writing-posts-here-because-they-need-to-be-convinced-the-code-actually-works-282xh9/comments"
    ).then(res => this.setState({ comments: res.data.comments }));
  }

  public handleFavClick = (
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
    console.log(this.state.comments);
  };

  public handleFollowClick = (
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

  public render() {
    const article = this.state.article;
    const profile = this.state.profile;

    return (
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
          <Grid item style={{ marginLeft: "15%" }}>
            <Grid>
              <h1>{article.title}</h1>
            </Grid>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
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
                    src={article.author.image}
                    className="articleImage"
                    alt={article.author.username}
                  ></img>
                </Grid>
                <Grid item>
                  <Grid>{article.author.username}</Grid>
                  <Grid>
                    {moment(new Date(Date.parse(article.createdAt))).format(
                      "MMMM D, YYYY"
                    )}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <button
                  onClick={this.handleFollowClick}
                  className={`btn ${profile.following ? "unFollow" : "follow"}`}
                >
                  <i className="ion-plus-round"></i>
                  <span>
                    {profile.following ? " Unfollow" : " Follow"}{" "}
                    {profile.username}
                  </span>
                </button>
                <button
                  onClick={this.handleFavClick}
                  className={`btn ${article.favorited ? "unFav" : "fav"}`}
                >
                  <i className="ion-heart"></i>
                  <span>
                    {article.favorited ? " Unfavorite" : " Favorite"} Article (
                    {article.favoritesCount})
                  </span>
                </button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: "15%", marginTop: "2%" }}>
          {article.body}
          <TagList tagList={article.tagList}></TagList>
        </Grid>
        <Grid item xs={6} style={{ marginLeft: "25%", marginTop: "2%" }}>
          <Comments comments={this.state.comments}></Comments>
        </Grid>
      </Grid>
    );
  }
}

export default Slug;
