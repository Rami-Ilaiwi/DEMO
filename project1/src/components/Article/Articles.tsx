import React, { useState, useEffect } from "react";
import AXIOS from "../../utils/AXIOS";
import Grid from "@material-ui/core/Grid";
import Article from "./Article";
import { Article as ArticleItem } from "../../dtos/ArticleResponseDto";
import Pagination from "../Buttons/Pagination";

const Articles = () => {
  const [articles, setArticles] = useState([] as Array<ArticleItem>);
  // const [numberOfPages, setNumberOfPages] = useState(0);

  const onFavoriteClick = (article: { favorited: boolean; slug: string }) => {
    let promise;
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
    AXIOS.noauthGet(`articles?limit=10`).then(res => {
      setArticles(res.data.articles);
      //setNumberOfPages(res.data.articlesCount);
    });
  }, []);

  return (
    <div>
      {articles.map((article, index: number) => (
        <Grid container justify="center" key={index}>
          <Grid item xs={7}>
            <Article
              username={article.author.username}
              image={article.author.image}
              createdAt={article.createdAt}
              title={article.title}
              description={article.description}
              favoritesCount={article.favoritesCount}
              tagList={article.tagList}
              slug={article.slug}
              favorited={article.favorited}
              onFavorite={onFavoriteClick}
            />
            <hr />
          </Grid>
        </Grid>
      ))}
      {/* <Pagination numberOfPages={numberOfPages} /> */}
    </div>
  );
};

export default Articles;
