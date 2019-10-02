import React from "react";
import Grid from "@material-ui/core/Grid";
import AXIOS from "../utils/AXIOS";
import TagsInput, { TagsProps } from "../components/Article/TagsInput";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/NewArticleStyle";

class NewArticle extends React.Component<WithStyles<typeof styles>> {
  state = {
    articleTitle: "",
    articleDescription: "",
    articleBody: "",
    tagsList: [] as string[]
  };

  handleArticleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ articleTitle: event.target.value });
  };

  handleArticleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ articleDescription: event.target.value });
  };

  handleArticleBody = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ articleBody: event.target.value });
  };

  handleEnterForm = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") event.preventDefault();
  };

  handleAddTag = (tag: string) => {
    this.setState({
      tagsList: [...this.state.tagsList, tag]
    });
  };

  handleDeleteTag = (tagID: string) => {
    const newSelectedItem = this.state.tagsList.filter(id => id !== tagID);
    this.setState({ tagsList: newSelectedItem });
  };
  // handleAddTag:TagsProps["onAddTag"] = (tag)=>{
  //   tag.
  // }

  handleFormSubmition = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    AXIOS.post({
      endpoint: "articles",
      body: {
        article: {
          title: this.state.articleTitle,
          description: this.state.articleDescription,
          body: this.state.articleBody,
          tagList: this.state.tagsList
        }
      }
    }).then(data => (window.location.href = `/article/${data.article.slug}`));
  };

  render() {
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item style={{ width: 1000 }}>
          <form
            onKeyPress={this.handleEnterForm}
            onSubmit={this.handleFormSubmition}
          >
            <input
              className={this.props.classes.input}
              placeholder="Article title"
              value={this.state.articleTitle}
              onChange={this.handleArticleTitle}
            />
            <input
              className={this.props.classes.input}
              placeholder="What's this article about?"
              value={this.state.articleDescription}
              onChange={this.handleArticleDescription}
            />
            <textarea
              className={`${this.props.classes.input} ${this.props.classes.textarea}`}
              placeholder="Write your article (in markdown)"
              value={this.state.articleBody}
              onChange={this.handleArticleBody}
            />

            <TagsInput
              tagsList={this.state.tagsList}
              onAddTag={this.handleAddTag}
              onDeleteTag={this.handleDeleteTag}
            />

            <Grid item>
              <input
                type="submit"
                className={this.props.classes.submit}
                value="Publish Article"
              />
            </Grid>
          </form>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(NewArticle);
