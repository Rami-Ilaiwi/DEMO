import React, { useState } from "react";
import ArticleTagsList from "./ArticleTagsList";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/TagsInputStyle";
import TextField from "@material-ui/core/TextField";

export interface TagsProps {
  tagsList: string[];
  onAddTag: (tag: string) => void;
  onDeleteTag: (tag: string) => void;
}

const TagsInput: React.FC<TagsProps & WithStyles<typeof styles>> = props => {
  const [articleTag, setArticleTag] = useState("");

  const handleChangeTag = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArticleTag(event.target.value);
  };

  const handleEnterInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (!articleTag) return;
      else {
        props.onAddTag(articleTag);
        setArticleTag("");
      }
    }
  };
  const handleDelete = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    props.onDeleteTag(event.currentTarget.id);
  };

  return (
    <>
      {/* <input
        className={props.classes.input}
        placeholder="Article tag"
        value={articleTag}
        onChange={handleChangeTag}
        onKeyPress={handleEnterInput}
      /> */}
      <TextField
        id="outlined-name"
        label="Article tag"
        value={articleTag}
        onChange={handleChangeTag}
        margin="normal"
        variant="outlined"
        onKeyPress={handleEnterInput}
        className={props.classes.input}
      />
      <ArticleTagsList tagsList={props.tagsList} handleDelete={handleDelete} />
    </>
  );
};

export default withStyles(styles)(TagsInput);
