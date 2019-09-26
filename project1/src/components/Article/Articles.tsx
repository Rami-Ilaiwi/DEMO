import React from "react";
import AXIOS from "../../utils/AXIOS";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Article from "./Article";
import { Article as ArticleItem } from "../../dtos/ArticleResponseDto";

class Articles extends React.Component {
  state = {
    articles: [] as Array<ArticleItem>
  };

  componentDidMount() {
    AXIOS.noauthGet("articles").then(res => {
      const articles = res.data.articles;
      this.setState({
        articles
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.articles.map((article, index: number) => (
          <Grid container justify="center" key={index}>
            <Grid item xs={10}>
              <Article
                username={article.author.username}
                image={article.author.image}
                createdAt={article.createdAt}
                title={article.title}
                description={article.description}
                favoritesCount={article.favoritesCount}
                tagList={article.tagList}
                slug={article.slug}
              />
              <hr />
            </Grid>
          </Grid>
        ))}
      </div>
    );
  }
}

export default Articles;
