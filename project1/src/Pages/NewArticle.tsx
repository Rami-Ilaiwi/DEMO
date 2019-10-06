import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import AXIOS from "../utils/AXIOS";
import { RouteComponentProps } from "react-router-dom";
import TagsInput, { TagsProps } from "../components/Article/TagsInput";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/NewArticleStyle";

const NewArticle: React.FC<
  WithStyles<typeof styles> & RouteComponentProps<{ slug?: string }>
> = props => {
  const [articleTitle, setArticleTitle] = useState("");
  const [articleDescription, setArticleDescription] = useState("");
  const [articleBody, setArticleBody] = useState("");
  const [tagsList, setTagsList] = useState([] as string[]);
  const slug = props.match.params.slug;

  const handleArticleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArticleTitle(event.target.value);
  };

  useEffect(() => {
    if (!!slug) {
      AXIOS.noauthGet(`articles/${slug}`).then(res => {
        setArticleTitle(res.data.article.title);
        setArticleDescription(res.data.article.description);
        setArticleBody(res.data.article.body);
        setTagsList(res.data.article.tagList);
      });
    }
  }, [slug]);

  const handleArticleDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setArticleDescription(event.target.value);
  };

  const handleArticleBody = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setArticleBody(event.target.value);
  };

  const handleEnterForm = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") event.preventDefault();
  };

  const handleAddTag = (tag: string) => {
    setTagsList([...tagsList, tag]);
  };

  const handleDeleteTag = (tagID: string) => {
    const newSelectedItem = tagsList.filter(id => id !== tagID);
    setTagsList(newSelectedItem);
  };
  // handleAddTag:TagsProps["onAddTag"] = (tag)=>{
  //   tag.
  // }

  const handleFormSubmition = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    AXIOS.post({
      endpoint: "articles",
      body: {
        article: {
          title: articleTitle,
          description: articleDescription,
          body: articleBody,
          tagList: tagsList
        }
      }
    }).then(data => (window.location.href = `/article/${data.article.slug}`));
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item style={{ width: 1000 }}>
        <form onKeyPress={handleEnterForm} onSubmit={handleFormSubmition}>
          <input
            className={props.classes.input}
            placeholder="Article title"
            value={articleTitle}
            onChange={handleArticleTitle}
          />
          <input
            className={props.classes.input}
            placeholder="What's this article about?"
            value={articleDescription}
            onChange={handleArticleDescription}
          />
          <textarea
            className={`${props.classes.input} ${props.classes.textarea}`}
            placeholder="Write your article (in markdown)"
            value={articleBody}
            onChange={handleArticleBody}
          />

          <TagsInput
            tagsList={tagsList}
            onAddTag={handleAddTag}
            onDeleteTag={handleDeleteTag}
          />

          <Grid item>
            <input
              type="submit"
              className={props.classes.submit}
              value="Publish Article"
            />
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(NewArticle);
