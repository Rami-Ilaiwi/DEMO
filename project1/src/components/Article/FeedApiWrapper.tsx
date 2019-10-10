import React, { useState, useEffect } from "react";
import { Article } from "../../dtos/ArticleResponseDto";
import AXIOS from "../../utils/AXIOS";
import { RouteComponentProps } from "react-router-dom";

export type FeedType =
  | "yourFeed"
  | "globalFeed"
  | "tagFeed"
  | "myArticlesFeed"
  | "favoritedArticlesFeed";

interface OnChangeProps {
  articles: Array<Article>;
  handleFavoriteToggle: (article: { favorited: boolean; slug: string }) => void;
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
            return a.slug == article.slug
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
      AXIOS.post({
        endpoint: `articles/${article.slug}/favorite`
      }).then(() => {
        setArticles(
          articles.map(a => {
            return a.slug == article.slug
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
    if (!props.author) {
      if (props.selectedFeedTab == "globalFeed") {
        if (props.isLoggedIn) {
          AXIOS.get(`articles?offset=${offset}&limit=10`).then(res => {
            setArticles(res.data.articles);
          });
        } else {
          AXIOS.noauthGet(`articles?offset=${offset}&limit=10`).then(res => {
            setArticles(res.data.articles);
          });
        }
      } else if (props.selectedFeedTab == "yourFeed") {
        AXIOS.get(`articles/feed?offset=${offset}&limit=10`).then(res => {
          setArticles(res.data.articles);
        });
      } else if (props.selectedFeedTab == "tagFeed") {
        if (props.isLoggedIn) {
          AXIOS.get(
            `articles/?offset=${offset}&limit=10&tag=${props.tag}`
          ).then(res => {
            setArticles(res.data.articles);
          });
        } else {
          AXIOS.noauthGet(
            `articles/?offset=${offset}&limit=10&tag=${props.tag}`
          ).then(res => {
            setArticles(res.data.articles);
          });
        }
      }
    } else {
      if (props.selectedFeedTab == "myArticlesFeed") {
        if (props.isLoggedIn) {
          AXIOS.get(
            `articles?offset=${offset}&limit=10&author=${props.author}`
          ).then(res => {
            setArticles(res.data.articles);
          });
        } else {
          AXIOS.noauthGet(
            `articles?offset=${offset}&limit=10&author=${props.author}`
          ).then(res => {
            setArticles(res.data.articles);
          });
        }
      } else if (props.selectedFeedTab == "favoritedArticlesFeed") {
        if (props.isLoggedIn) {
          AXIOS.get(
            `articles?offset=${offset}&limit=10&favorited=${props.author}`
          ).then(res => {
            setArticles(res.data.articles);
          });
        } else {
          AXIOS.noauthGet(
            `articles?offset=${offset}&limit=10&favorited=${props.author}`
          ).then(res => {
            setArticles(res.data.articles);
          });
        }
      }
    }
  }, [props.selectedFeedTab, props.tag, props.author, props.page]);

  return props.children({ articles, handleFavoriteToggle });
};

export default FeedApiWrapper;
