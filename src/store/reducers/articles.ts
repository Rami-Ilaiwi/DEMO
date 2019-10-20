import { Article } from "../../dtos/ArticleResponseDto";

export interface ArticlesState {
  data: Array<Article>;
  isLoading: boolean;
}

const intialValue: ArticlesState = {
  data: [],
  isLoading: false
};

function onSetArticles(
  state: ArticlesState,
  data: Array<Article>
): ArticlesState {
  return { ...state, data };
}
function onSetLoading(state: ArticlesState, isLoading: boolean): ArticlesState {
  return { ...state, isLoading: isLoading };
}

export default function articlesReducer(
  state = intialValue,
  action: { type: string; payload: ArticlesState }
): ArticlesState {
  const { type, payload } = action;
  if (type === "SET_ARTICLES") {
    return onSetArticles(state, payload.data);
  } else if (type === "SET_LOADING") {
    return onSetLoading(state, payload.isLoading);
  } else {
    return state;
  }
}
