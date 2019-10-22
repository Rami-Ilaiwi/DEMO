import React, { useState, useEffect } from "react";
import { Article } from "../../dtos/ArticleResponseDto";
import AXIOS from "../../utils/AXIOS";

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

const FeedApiWrapper: React.FC<FeedApiWrapperProps> = ({
  selectedFeedTab,
  tag,
  author,
  page,
  isLoggedIn,
  onRedirect,
  children
}) => {
  const offset = page * 10;
  const [isLoadingArticles, setIsLoadingArticles] = useState(false);
  const [articles, setArticles] = useState<Array<Article>>([]);
  const handleFavoriteToggle = (article: {
    favorited: boolean;
    slug: string;
  }) => {
    if (!isLoggedIn) {
      onRedirect("/login");
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
      AXIOS.post({
        endpoint: `articles/${article.slug}/favorite`
      }).then(() => {
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

    let url = "";
    url += selectedFeedTab === "yourFeed" ? "articles/feed" : "articles";
    url += `?limit=10&offset=${offset}`;
    url += selectedFeedTab === "tagFeed" ? `&tag=${tag}` : "";
    url += selectedFeedTab === "myArticlesFeed" ? `&author=${author}` : "";
    url +=
      selectedFeedTab === "favoritedArticlesFeed" ? `&favorited=${author}` : "";

    AXIOS.get(`${url}`).then(res => {
      setArticles(res.data.articles);
      setIsLoadingArticles(false);
    });
  }, [selectedFeedTab, tag, author, page]);

  return children({ articles, handleFavoriteToggle, isLoadingArticles });
};

export default FeedApiWrapper;
