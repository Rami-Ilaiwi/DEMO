import React from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import ArticleTagsList from "./ArticleTagsList";

const styles = createStyles({
  input: {
    marginTop: "1.5%",
    padding: "0.5rem 0.75rem",
    width: "100%",
    lineHeight: "1.25",
    color: "#55595c",
    backgroundColor: "#fff",
    backgroundClip: "padding-box",
    border: "1px solid rgba(0, 0, 0, 0.15)",
    borderRadius: "0.25rem",
    fontFamily: "'Source Sans Pro', sans-serif",
    fontSize: "1.25rem"
  }
});

export interface TagsProps {
  tagsList: string[];
  onAddTag: (tag: string) => void;
  onDeleteTag: (tag: string) => void;
}

class TagsInput extends React.Component<TagsProps & WithStyles<typeof styles>> {
  state = {
    articleTag: "",
    tagsList: this.props.tagsList
  };

  handleChangeTag = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ articleTag: event.target.value });
  };

  handleEnterInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (!this.state.articleTag) return;
      // console.log(this.state.articleTag);
      else {
        this.props.onAddTag(this.state.articleTag);
        this.setState({
          articleTag: ""
        });
      }
    }
  };

  handleDelete = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    this.props.onDeleteTag(event.currentTarget.id);
  };

  render() {
    return (
      <>
        <input
          className={this.props.classes.input}
          placeholder="Article tag"
          value={this.state.articleTag}
          onChange={this.handleChangeTag}
          onKeyPress={this.handleEnterInput}
        />
        <ArticleTagsList
          tagsList={this.props.tagsList}
          handleDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default withStyles(styles)(TagsInput);
