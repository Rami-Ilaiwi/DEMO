import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import AXIOS from "../utils/AXIOS";
import { RouteComponentProps } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TagsInput, { TagsProps } from "../components/Article/TagsInput";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
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
    }).then(data => props.history.push(`/article/${data.article.slug}`));
  };

  return (
    <Grid container justify="center">
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography gutterBottom variant="h4">
            Add New Article
          </Typography>
        </Grid>

        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item container direction="column" alignItems="center">
            <form onKeyPress={handleEnterForm} onSubmit={handleFormSubmition}>
              <Grid item>
                {/* <input
              className={props.classes.input}
              placeholder="Article title"
              value={articleTitle}
              onChange={handleArticleTitle}
            /> */}
                <TextField
                  id="outlined-name"
                  label="Article title"
                  value={articleTitle}
                  onChange={handleArticleTitle}
                  margin="normal"
                  variant="outlined"
                  className={props.classes.input}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-name"
                  label="What's this article about?"
                  value={articleDescription}
                  onChange={handleArticleDescription}
                  margin="normal"
                  variant="outlined"
                  className={props.classes.input}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Write your article (in markdown)"
                  multiline
                  rows="7"
                  value={articleBody}
                  onChange={handleArticleBody}
                  className={props.classes.input}
                  margin="normal"
                  variant="outlined"
                />
              </Grid>

              <Grid item>
                <TagsInput
                  tagsList={tagsList}
                  onAddTag={handleAddTag}
                  onDeleteTag={handleDeleteTag}
                />
              </Grid>
              <Grid item className={props.classes.button}>
                <Button
                  className={props.classes.submit}
                  type="submit"
                  variant="outlined"
                >
                  Publish Article
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(NewArticle);
