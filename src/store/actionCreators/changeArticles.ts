import { Article } from "../../dtos/ArticleResponseDto";

export function onLoadArticles(articles: Array<Article>) {
  return { type: "SET_ARTICLES", payload: articles };
}

export function setIsLoadingArticles(isLoading: boolean) {
  return { type: "SET_ARTICLES", payload: isLoading };
}
