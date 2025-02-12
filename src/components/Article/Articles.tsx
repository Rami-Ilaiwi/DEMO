import React from "react";
import Grid from "@material-ui/core/Grid";
import ArticleCard from "./ArticleCard";
import { Article as ArticleItem } from "../../dtos/ArticleResponseDto";

interface ArticlesProps {
  articles: Array<ArticleItem>;
  handleFavoriteToggle: (article: { favorited: boolean; slug: string }) => void;
}

const Articles: React.FC<ArticlesProps> = ({
  articles,
  handleFavoriteToggle
}) => {
  const onFavoriteClick = (article: { favorited: boolean; slug: string }) => {
    handleFavoriteToggle(article);
  };

  return (
    <>
      {articles.map((article, index: number) => (
        <Grid container justify="center" key={index}>
          <Grid item xs={7}>
            <ArticleCard
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
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default Articles;
