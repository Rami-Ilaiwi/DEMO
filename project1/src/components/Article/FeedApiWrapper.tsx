import React, { useState, useEffect } from "react";
import { Article } from "../../dtos/ArticleResponseDto";
import AXIOS from "../../utils/AXIOS";
import { RouteComponentProps } from "react-router-dom";

interface OnChangeProps {
  articles: Array<Article>;
  handleFavoriteToggle: (article: { favorited: boolean; slug: string }) => void;
}

interface FeedApiWrapperProps {
  feedID: number;
  tag?: string;
  isLoggedIn: boolean;
  onRedirect: (path: string) => void;
  children: (onChangeProps: OnChangeProps) => JSX.Element;
}

const FeedApiWrapper: React.FC<FeedApiWrapperProps> = props => {
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
    if (props.feedID == 0) {
      if (props.isLoggedIn) {
        AXIOS.get(`articles?limit=10`).then(res => {
          setArticles(res.data.articles);
        });
      } else {
        AXIOS.noauthGet(`articles?limit=10`).then(res => {
          setArticles(res.data.articles);
        });
      }
    } else if (props.feedID == 1) {
      AXIOS.get(`articles/feed?limit=10`).then(res => {
        setArticles(res.data.articles);
      });
    } else if (props.feedID == 2) {
      AXIOS.get(`articles/?limit=10&tag=${props.tag}`).then(res => {
        setArticles(res.data.articles);
      });
    }
  }, [props.feedID, props.tag]);

  return props.children({ articles, handleFavoriteToggle });
};

export default FeedApiWrapper;
