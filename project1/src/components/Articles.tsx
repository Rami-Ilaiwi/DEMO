import React from "react";
import AXIOS from "../utils/AXIOS";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Article from "./Article";
import { Article as ArticleItem } from "../dtos/ArticleResponseDto";

// const classes = useStyles();
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
    // axios.get("https://conduit.productionready.io/api/articles").then(res => {
    //   const articles = res.data.articles;
    //   this.setState({
    //     articles
    //   });
    // });
  }

  render() {
    return (
      <div>
        {this.state.articles.map(article => (
          <Grid container justify="center">
            <Grid item xs={10}>
              <Article
                key={article.createdAt}
                username={article.author.username}
                image={article.author.image}
                createdAt={article.createdAt}
                title={article.title}
                description={article.description}
                favoritesCount={article.favoritesCount}
                tagList={article.tagList}
                slug={article.slug}
              />
              {/* {console.log(article)} */}
              <hr />
            </Grid>
          </Grid>
        ))}
      </div>
    );
  }
}

export default Articles;
