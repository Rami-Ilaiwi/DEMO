import React from "react";
import AXIOS from "../utils/AXIOS";
import { Link, Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/RegisterPageStyle";
import { Formik, Form, FormikActions } from "formik";
import * as yup from "yup";
import FormikTextField from "../components/FormikInputs/FormikTextField";
import { User } from "../dtos/ArticleResponseDto";
import { connect } from "react-redux";
import { selectIsLoggedIn } from "../store/selectors/user";
import { loginUser } from "../store/actionCreators/loginAction";

interface Values {
  username: string;
  password: string;
  email: string;
}

interface RegisterResponse {
  user: User;
}

interface IRegisterProps {
  isLoggedIn: boolean;
  onLogin: (user: User) => void;
}

const RegisterSchema = yup.object().shape({
  username: yup
    .string()
    .max(20, "Username is too long (maximum is 20 characters)")
    .required("Username is required"),
  password: yup
    .string()
    .min(8, "Password is too short (minimum is 8 characters)")
    .required("Password is required"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required")
});

const RegisterPage: React.FC<IRegisterProps & WithStyles<typeof styles>> = ({
  classes,
  isLoggedIn,
  onLogin
}) => {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmition = (
    values: Values,
    formikActions: FormikActions<Values>
  ) => {
    AXIOS.noauthPost<RegisterResponse>({
      endpoint: "users",
      body: {
        user: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      }
    })
      .then(res => {
        localStorage.setItem("userData", JSON.stringify(res.data));
        localStorage.setItem("userToken", res.data.user.token);
        onLogin(res.data.user);
      })
      .catch(err => {
        Object.entries(err.response.data.errors).forEach(([field, errors]) => {
          if (Array.isArray(errors)) {
            formikActions.setFieldError(field, errors[0]);
          }
        });
      });
  };

  return (
    <Grid container justify="center">
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography gutterBottom variant="h4">
            Sign up
          </Typography>
          <Link className={classes.link} to="/login">
            Have an account?
          </Link>
        </Grid>
        <Grid item container direction="column" alignItems="center">
          <Formik
            initialValues={{
              username: "",
              password: "",
              email: ""
            }}
            validationSchema={RegisterSchema}
            onSubmit={handleFormSubmition}
            render={() => (
              <Form>
                <FormikTextField
                  name="username"
                  label="Username"
                  margin="normal"
                />
                <FormikTextField name="email" label="Email" margin="normal" />
                <FormikTextField
                  name="password"
                  label="Password"
                  margin="normal"
                  type="password"
                />

                <Grid item className={classes.button}>
                  <Button
                    className={classes.submit}
                    type="submit"
                    variant="outlined"
                  >
                    Sign up
                  </Button>
                </Grid>
              </Form>
            )}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
const mapStateToProps = (state: any) => {
  return {
    isLoggedIn: selectIsLoggedIn(state)
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onLogin: (user: User) => dispatch(loginUser(user))
});

const StyledRegisterPage = withStyles(styles)(RegisterPage);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledRegisterPage);
