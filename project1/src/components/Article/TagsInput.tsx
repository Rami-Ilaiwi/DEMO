import React from "react";
import ArticleTagsList from "./ArticleTagsList";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/TagsInputStyle";

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
