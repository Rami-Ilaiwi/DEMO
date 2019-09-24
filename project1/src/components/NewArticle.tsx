import React from "react";
import Grid from "@material-ui/core/Grid";
import { RouteComponentProps } from "@reach/router";
import AXIOS from "../utils/AXIOS";

class NewArticle extends React.Component {
  public state = {
    articleTitle: "",
    articleDescription: "",
    articleBody: "",
    articleTags: "",
    tagsList: [] as string[]
  };

  public handleArticleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ articleTitle: event.target.value });
  };

  public handleArticleDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({ articleDescription: event.target.value });
  };

  public handleArticleBody = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    this.setState({ articleBody: event.target.value });
  };

  public handleArticleTags = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ articleTags: event.target.value });
  };

  public handleFormSubmition = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    AXIOS.post({
      endpoint: "articles",
      body: {
        article: {
          title: this.state.articleTitle,
          description: this.state.articleDescription,
          body: this.state.articleBody,
          tagList: this.state.articleTags
        }
      }
    }).then(data => (window.location.href = `/article/${data.article.slug}`));
  };

  public render() {
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item style={{ width: 1000 }}>
          <form onSubmit={this.handleFormSubmition}>
            <input
              className="input"
              placeholder="Article title"
              value={this.state.articleTitle}
              onChange={this.handleArticleTitle}
            ></input>
            <input
              className="input"
              placeholder="What's this article about?"
              value={this.state.articleDescription}
              onChange={this.handleArticleDescription}
            ></input>
            <textarea
              className="textarea"
              placeholder="Write your article (in markdown)"
              value={this.state.articleBody}
              onChange={this.handleArticleBody}
            ></textarea>
            <input
              className="input"
              placeholder="Article tag"
              value={this.state.articleTags}
              onChange={this.handleArticleTags}
            ></input>
            <Grid item>
              <input
                type="submit"
                className="submit"
                value="Publish Article"
              ></input>
            </Grid>
          </form>
        </Grid>
      </Grid>
    );
  }
}

export default NewArticle;
