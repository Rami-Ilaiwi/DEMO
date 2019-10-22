import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import AXIOS from "../utils/AXIOS";
import { RouteComponentProps } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TagsInput from "../components/Article/TagsInput";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { styles } from "./styles/NewArticlePageStyle";
import { Formik, Form, FormikActions } from "formik";
import { Redirect } from "react-router-dom";
import * as yup from "yup";
import FormikTextField from "../components/FormikInputs/FormikTextField";

interface Values {
  title: string;
  description: string;
  body: string;
}

const NewArticleSchema = yup.object().shape({
  title: yup.string().required("Title can't be blank"),
  description: yup.string().required("Description can't be blank"),
  body: yup.string().required("body can't be blank")
});

const NewArticle: React.FC<
  WithStyles<typeof styles> & RouteComponentProps<{ slug?: string }>
> = ({ match, history, classes }) => {
  const isLoggedIn = localStorage.getItem("userToken") ? true : false;

  const [articleTitle, setArticleTitle] = useState("");
  const [articleDescription, setArticleDescription] = useState("");
  const [articleBody, setArticleBody] = useState("");
  const [tagsList, setTagsList] = useState<string[]>([]);
  const slug = match.params.slug;

  useEffect(() => {
    if (!!slug) {
      AXIOS.get(`articles/${slug}`).then(res => {
        setArticleTitle(res.data.article.title);
        setArticleDescription(res.data.article.description);
        setArticleBody(res.data.article.body);
        setTagsList(res.data.article.tagList);
      });
    }
  }, [slug]);

  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }

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

  const handleFormSubmition = (
    values: Values,
    formikActions: FormikActions<Values>
  ) => {
    if (slug) {
      AXIOS.put({
        endpoint: `articles/${slug}`,
        body: {
          article: {
            title: values.title,
            description: values.description,
            body: values.body,
            tagList: tagsList
          }
        }
      }).then(data => history.push(`/article/${data.article.slug}`));
    } else {
      AXIOS.post({
        endpoint: "articles",
        body: {
          article: {
            title: values.title,
            description: values.description,
            body: values.body,
            tagList: tagsList
          }
        }
      }).then(data => history.push(`/article/${data.article.slug}`));
    }
  };

  return (
    <Grid container justify="center">
      <Grid container direction="column" alignItems="center">
        <Grid item>
          {slug ? (
            <Typography gutterBottom variant="h4">
              Edit Article
            </Typography>
          ) : (
            <Typography gutterBottom variant="h4">
              Add New Article
            </Typography>
          )}
        </Grid>

        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item container direction="column" alignItems="center">
            <Formik
              enableReinitialize
              initialValues={{
                title: articleTitle,
                description: articleDescription,
                body: articleBody
              }}
              validationSchema={NewArticleSchema}
              onSubmit={handleFormSubmition}
              render={() => (
                <Form onKeyPress={handleEnterForm}>
                  <FormikTextField
                    name="title"
                    label="Article title"
                    margin="normal"
                  />
                  <FormikTextField
                    name="description"
                    label="What's this article about?"
                    margin="normal"
                  />
                  <FormikTextField
                    name="body"
                    label="Write your article (in markdown)"
                    margin="normal"
                    multiline
                    rows="7"
                  />
                  <Grid item>
                    <TagsInput
                      tagsList={tagsList}
                      onAddTag={handleAddTag}
                      onDeleteTag={handleDeleteTag}
                    />
                  </Grid>
                  <Grid item className={classes.button}>
                    <Button
                      className={classes.submit}
                      type="submit"
                      variant="outlined"
                    >
                      Publish Article
                    </Button>
                  </Grid>
                </Form>
              )}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(NewArticle);
