import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import AXIOS from "../utils/AXIOS";
import { RouteComponentProps } from "react-router-dom";
import TagList from "../components/Tags/TagList";
import Comments from "../components/Comments/Comments";
import ArticleMeta from "../components/Article/ArticleMeta";
import UserComment from "../components/Comments/UserComment";
import utl from "../utils/utils";
import ArticleBanner from "../components/Article/ArticleBanner";
import LoadingComponent from "../components/Layout/LoadingComponent";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/ArticlePageStyle";

const ArticlePage: React.FC<
  RouteComponentProps<{ slug: string }> & WithStyles<typeof styles>
> = ({ match, history, classes }) => {
  const isLoggedIn = localStorage.getItem("userToken") ? true : false;
  const [isLoadingComments, setIsLoadingComments] = useState(false);
  const [isLoadingArticleData, setIsLoadingArticleData] = useState(false);

  const [article, setArticle] = useState({
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
  });

  const [profile, setProfile] = useState({
    bio: "",
    following: false,
    image: "",
    username: ""
  });
  const [comments, setComments] = useState([
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
  ]);
  const [comment, setComment] = useState("");

  const slug = match.params.slug;

  useEffect(() => {
    setIsLoadingArticleData(true);
    AXIOS.get(`articles/${slug}`)
      .then(res => {
        const article = res.data.article;
        setArticle(article);
        return article;
      })
      .then(article => {
        return AXIOS.get(`profiles/${article.author.username}`);
      })
      .then(res => {
        const profile = res.data.profile;
        setProfile(profile);
        setIsLoadingArticleData(false);
      });
  }, [slug]);

  useEffect(() => {
    setIsLoadingComments(true);
    AXIOS.get(`articles/${slug}/comments`).then(res => {
      setComments(res.data.comments);
      setIsLoadingComments(false);
    });
  }, [slug]);

  /* ***** handlers ***** */

  const onFavoriteClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!isLoggedIn) {
      return history.push("/login");
    }

    if (article.favorited) {
      AXIOS.DELETE({
        endpoint: `articles/${slug}/favorite`
      }).then(resp => setArticle(resp.article));
    } else {
      AXIOS.post({
        endpoint: `articles/${slug}/favorite`
      }).then(resp => setArticle(resp.article));
    }
  };

  const onFollowClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!isLoggedIn) {
      return history.push("/login");
    }

    if (profile.following) {
      AXIOS.DELETE({
        endpoint: `profiles/${profile.username}/follow`
      }).then(resp => setProfile(resp.profile));
    } else {
      AXIOS.post({
        endpoint: `profiles/${profile.username}/follow`
      }).then(resp => setProfile(resp.profile));
    }
  };

  const onDeleteClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    AXIOS.DELETE({ endpoint: `articles/${slug}` }).then(() =>
      history.push("/")
    );
  };

  const onEditClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    AXIOS.put({ endpoint: `articles/${slug}` });
  };

  const handleComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    AXIOS.post({
      endpoint: `articles/${slug}/comments`,
      body: {
        comment: {
          body: `${comment}`
        }
      }
    }).then(
      () => (
        setComment(""),
        AXIOS.get(`articles/${slug}/comments`).then(res =>
          setComments(res.data.comments)
        )
      )
    );
  };

  const handleDeleteComment = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    AXIOS.DELETE({
      endpoint: `articles/${slug}/comments/${event.currentTarget.id}`
    }).then(() =>
      AXIOS.get(`articles/${slug}/comments`).then(res =>
        setComments(res.data.comments)
      )
    );
  };
  /* ****************** */

  const user = utl.getUserDetails();
  const token = localStorage.getItem("userToken");
  return (
    <>
      {isLoadingArticleData || isLoadingComments ? (
        <LoadingComponent />
      ) : (
        <>
          <ArticleBanner
            title={article.title}
            image={article.author.image}
            username={article.author.username}
            createdAt={article.createdAt}
            following={profile.following}
            profileName={profile.username}
            favorited={article.favorited}
            favoritesCount={article.favoritesCount}
            slug={slug}
            loggedinUser={user.username}
            onFollow={onFollowClick}
            onFavorite={onFavoriteClick}
            onDelete={onDeleteClick}
            onEdit={onEditClick}
          />

          <Grid item className={classes.body}>
            <Grid item>{article.body}</Grid>
            <Grid item>
              <TagList tagList={article.tagList} />
            </Grid>
          </Grid>

          <Grid item className={classes.author}>
            <ArticleMeta
              image={article.author.image}
              username={article.author.username}
              createdAt={article.createdAt}
              following={profile.following}
              profileName={profile.username}
              favorited={article.favorited}
              favoritesCount={article.favoritesCount}
              loggedinUser={user.username}
              slug={slug}
              onFollow={onFollowClick}
              onFavorite={onFavoriteClick}
              onDelete={onDeleteClick}
              onEdit={onEditClick}
            />
          </Grid>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item className={classes.comments}>
              <hr />

              {token ? (
                <UserComment
                  comment={comment}
                  image={user.image}
                  handleComment={handleComment}
                  handleSubmit={handleFormSubmit}
                />
              ) : null}

              <Comments
                comments={comments}
                handleDeleteComment={handleDeleteComment}
              />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default withStyles(styles)(ArticlePage);
