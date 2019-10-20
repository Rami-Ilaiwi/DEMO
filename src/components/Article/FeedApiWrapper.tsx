import React, { useState, useEffect } from "react";
import { Article } from "../../dtos/ArticleResponseDto";
import AXIOS from "../../utils/AXIOS";
import { connect } from "react-redux";
// import { AppStore } from "../../store/reducers";

export type FeedType =
  | "yourFeed"
  | "globalFeed"
  | "tagFeed"
  | "myArticlesFeed"
  | "favoritedArticlesFeed";

interface OnChangeProps {
  articles: Array<Article>;
  handleFavoriteToggle: (article: { favorited: boolean; slug: string }) => void;
  isLoadingArticles: boolean;
}

interface FeedApiWrapperProps {
  selectedFeedTab: FeedType;
  tag?: string;
  author?: string;
  page: number;
  isLoggedIn: boolean;
  onRedirect: (path: string) => void;
  children: (onChangeProps: OnChangeProps) => JSX.Element;
}

const FeedApiWrapper: React.FC<FeedApiWrapperProps> = props => {
  const offset = props.page * 10;
  const [isLoadingArticles, setIsLoadingArticles] = useState(false);
  const [articles, setArticles] = useState<Array<Article>>([]);
  const handleFavoriteToggle = (article: {
    favorited: boolean;
    slug: string;
  }) => {
    if (!props.isLoggedIn) {
      props.onRedirect("/login");
    }

    if (article.favorited) {
      AXIOS.DELETE({
        endpoint: `articles/${article.slug}/favorite`
      }).then(() => {
        setArticles(
          articles.map(a => {
            return a.slug === article.slug
              ? {
                  ...a,
                  favorited: !article.favorited,
                  favoritesCount: --a.favoritesCount
                }
              : a;
          })
        );
      });
    } else {
      // props.setIsLoadingPosts(true);//{type:"setLoadPosts".payload:true}
      AXIOS.post({
        endpoint: `articles/${article.slug}/favorite`
      }).then(() => {
        // props.setIsLoadingArticles(false);//{type:"setLoadPosts".payload:false}
        // props.onLoadPostsSuccess(posts);//{type:"onLoadPostsSuccess".payload:posts}
        setArticles(
          articles.map(a => {
            return a.slug === article.slug
              ? {
                  ...a,
                  favorited: !article.favorited,
                  favoritesCount: ++a.favoritesCount
                }
              : a;
          })
        );
      });
    }
  };

  useEffect(() => {
    setIsLoadingArticles(true);
    if (!props.author) {
      // This one for Home page, it has three feed tabs (global feed, your feed and tag feed)
      if (props.selectedFeedTab === "globalFeed") {
        if (props.isLoggedIn) {
          AXIOS.get(`articles?offset=${offset}&limit=10`).then(res => {
            setArticles(res.data.articles);
            setIsLoadingArticles(false);
          });
        } else {
          AXIOS.noauthGet(`articles?offset=${offset}&limit=10`).then(res => {
            setArticles(res.data.articles);
            setIsLoadingArticles(false);
          });
        }
      } else if (props.selectedFeedTab === "yourFeed") {
        AXIOS.get(`articles/feed?offset=${offset}&limit=10`).then(res => {
          setArticles(res.data.articles);
          setIsLoadingArticles(false);
        });
      } else if (props.selectedFeedTab === "tagFeed") {
        if (props.isLoggedIn) {
          AXIOS.get(
            `articles/?offset=${offset}&limit=10&tag=${props.tag}`
          ).then(res => {
            setArticles(res.data.articles);
            setIsLoadingArticles(false);
          });
        } else {
          AXIOS.noauthGet(
            `articles/?offset=${offset}&limit=10&tag=${props.tag}`
          ).then(res => {
            setArticles(res.data.articles);
            setIsLoadingArticles(false);
          });
        }
      }
    } else {
      // This for Profile page, it has two tab feeds
      // (My articles which includes articles for the profile owner,
      // and Favorited articles which has the favorited articles of the owner of the profile)
      if (props.selectedFeedTab === "myArticlesFeed") {
        if (props.isLoggedIn) {
          AXIOS.get(
            `articles?offset=${offset}&limit=10&author=${props.author}`
          ).then(res => {
            setArticles(res.data.articles);
            setIsLoadingArticles(false);
          });
        } else {
          AXIOS.noauthGet(
            `articles?offset=${offset}&limit=10&author=${props.author}`
          ).then(res => {
            setArticles(res.data.articles);
            setIsLoadingArticles(false);
          });
        }
      } else if (props.selectedFeedTab === "favoritedArticlesFeed") {
        if (props.isLoggedIn) {
          AXIOS.get(
            `articles?offset=${offset}&limit=10&favorited=${props.author}`
          ).then(res => {
            setArticles(res.data.articles);
            setIsLoadingArticles(false);
          });
        } else {
          AXIOS.noauthGet(
            `articles?offset=${offset}&limit=10&favorited=${props.author}`
          ).then(res => {
            setArticles(res.data.articles);
            setIsLoadingArticles(false);
          });
        }
      }
    }
  }, [props.selectedFeedTab, props.tag, props.author, props.page]);

  return props.children({ articles, handleFavoriteToggle, isLoadingArticles });
};
// interface MapStateToProps {
//   articles: Array<Article>;
// }
// const mapStateToProps = ({ articles }: AppStore) => ({
//   articles: articles.data
// });

// const mapDispatchToProps = (dispatch) => ({
//   onLoadArticles()
// })

export default FeedApiWrapper;
