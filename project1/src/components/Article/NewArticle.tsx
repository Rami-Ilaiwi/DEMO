import React from "react";
import Grid from "@material-ui/core/Grid";
import AXIOS from "../../utils/AXIOS";
import AddTags from "./AddTags";

class NewArticle extends React.Component {
  state = {
    articleTitle: "",
    articleDescription: "",
    articleBody: "",
    articleTags: "",
    tagsList: [] as string[] // heree
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

  handleArticleTags = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ articleTags: event.target.value });
  };

  handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (!this.state.articleTags) return;
      // console.log(this.state.articleTags);
      else {
        this.setState({
          tagsList: [...this.state.tagsList, this.state.articleTags],
          articleTags: ""
        });
      }
    }
  };

  handleDelete = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const newSelectedItem = [...this.state.tagsList];
    // console.log(event.currentTarget.id);
    newSelectedItem.splice(newSelectedItem.indexOf(event.currentTarget.id), 1);
    this.setState({ tagsList: newSelectedItem });
    // console.log(this.state.tagsList);
  };

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
            onKeyPress={e => {
              if (e.key === "Enter") e.preventDefault();
            }}
            onSubmit={this.handleFormSubmition}
          >
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
              onKeyPress={this.handleEnter}
            ></input>
            {/* <div>{this.state.tagsList}</div> */}
            {/* <AddTags tagsList={this.state.tagsList}></AddTags> */}
            {/* <div>
              {this.state.tagsList.map((tag, index: number) => (
                <Chip
                  key={index}
                  onDelete={this.handleDelete}
                  label={tag}
                ></Chip>
              ))}
            </div> */}
            <AddTags
              tagsList={this.state.tagsList}
              handleDelete={this.handleDelete}
            ></AddTags>
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
