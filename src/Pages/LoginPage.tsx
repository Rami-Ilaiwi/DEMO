import React from "react";
import { Link, Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/LoginPageStyle";
import * as yup from "yup";
import { Formik, Form, FormikActions } from "formik";
import FormikTextField from "../components/FormikInputs/FormikTextField";
import { connect } from "react-redux";
import { loginUser } from "../store/actionCreators/loginAction";
import { selectIsLoggedIn, selectLoginError } from "../store/selectors/user";
import { LoginUserPayload } from "../dtos/ArticleResponseDto";

interface Values {
  email: string;
  password: string;
}

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
  password: yup.string().required("Password is required")
});
interface ILoginProps {
  onLogin: (user: LoginUserPayload) => void;
  isLoggedIn: boolean;
  loginError: string;
}

const LoginPage: React.FC<ILoginProps & WithStyles<typeof styles>> = ({
  onLogin,
  isLoggedIn,
  classes,
  loginError
}) => {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmition = (
    values: Values,
    formikActions: FormikActions<Values>
  ) => {
    onLogin({ email: values.email, password: values.password });
  };

  return (
    <Grid container justify="center">
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography gutterBottom variant="h4">
            Sign in
          </Typography>
          <Link className={classes.link} to="/register">
            Need an account?
          </Link>
        </Grid>
        {loginError.length > 0 ? (
          <Grid item>
            <Typography className={classes.error}>{loginError}</Typography>
          </Grid>
        ) : null}
        <Grid item container direction="column" alignItems="center">
          <Formik
            initialValues={{
              email: "",
              password: ""
            }}
            validationSchema={LoginSchema}
            onSubmit={handleFormSubmition}
            render={() => (
              <Form>
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
                    Sign in
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

const mapStateToProps = (state: any) => ({
  isLoggedIn: selectIsLoggedIn(state),
  loginError: selectLoginError(state)
});

const mapDispatchToProps = (dispatch: any) => ({
  onLogin: (userPayload: LoginUserPayload) => dispatch(loginUser(userPayload))
});

const StyledLogin = withStyles(styles)(LoginPage);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledLogin);
