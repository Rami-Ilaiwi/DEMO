import React from "react";
import AXIOS from "../utils/AXIOS";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import utl from "../utils/utils";
import { Redirect } from "react-router-dom";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/SettingsPageStyle";
import * as yup from "yup";
import { Formik, Form, FormikActions } from "formik";
import FormikTextField from "../components/FormikInputs/FormikTextField";
import { RouteComponentProps } from "react-router-dom";
import { withRouter } from "react-router-dom";

const Settings: React.FC<RouteComponentProps & WithStyles<typeof styles>> = ({
  history,
  classes
}) => {
  const isLoggedIn = localStorage.getItem("userToken") ? true : false;
  const userData = utl.getUserDetails();

  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }

  interface Values {
    image: string;
    username: string;
    bio: string;
    email: string;
    newPassword: string;
  }

  const SettingsSchema = yup.object().shape({
    username: yup
      .string()
      .max(20, "Username is too long (maximum is 20 characters)")
      .required("Username is required"),
    email: yup
      .string()
      .email("Invalid email")
      .required("Email is required"),
    newPassword: yup
      .string()
      .min(8, "Password is too short (minimum is 8 characters)")
  });

  const handleFormSubmition = (
    values: Values,
    formikActions: FormikActions<Values>
  ) => {
    AXIOS.put({
      endpoint: "user",
      body: {
        user: {
          image: values.image,
          username: values.username,
          bio: values.bio,
          email: values.email,
          password: values.newPassword || undefined
        }
      }
    })
      .then(res => {
        localStorage.setItem("userData", JSON.stringify(res));
        localStorage.setItem("userToken", res.data.user.token);
        // window.location.href = `/@${values.username}`;
        history.push(`/@${values.username}`);
      })
      .catch(err =>
        Object.entries(err.response.data.errors).forEach(([field, errors]) => {
          if (Array.isArray(errors)) {
            formikActions.setFieldError(field, errors[0]);
          }
        })
      );
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <Grid container justify="center">
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography gutterBottom variant="h4">
            Your Settings
          </Typography>
        </Grid>
        <Grid item>
          <Formik
            initialValues={{
              image: userData.image,
              username: userData.username,
              bio: userData.bio,
              email: userData.email,
              newPassword: ""
            }}
            validationSchema={SettingsSchema}
            onSubmit={handleFormSubmition}
            render={() => (
              <Form>
                <FormikTextField
                  name="image"
                  label="URL of profile picture"
                  margin="normal"
                />
                <FormikTextField
                  name="username"
                  label="Username"
                  margin="normal"
                />
                <FormikTextField
                  name="bio"
                  label="Short bio about you"
                  margin="normal"
                  multiline
                  rows="7"
                />
                <FormikTextField name="email" label="Email" margin="normal" />
                <FormikTextField
                  name="newPassword"
                  label="New Password"
                  margin="normal"
                  type="password"
                />
                <Grid item className={classes.button}>
                  <Button
                    className={classes.submit}
                    type="submit"
                    variant="outlined"
                  >
                    Update Settings
                  </Button>
                </Grid>
              </Form>
            )}
          />

          <hr />
          <Grid item>
            <Button
              className={classes.logout}
              type="submit"
              variant="outlined"
              onClick={handleLogout}
            >
              Or click here to logout.
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const RoutedSettings = withRouter(Settings);

export default withStyles(styles)(RoutedSettings);
