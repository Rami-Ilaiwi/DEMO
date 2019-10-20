import React, { useState } from "react";
import AXIOS from "../utils/AXIOS";
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
import { onLogin } from "../store/actionCreators/loginAction";
import { selectIsLoggedIn } from "../store/selectors/user";
import { User } from "../dtos/ArticleResponseDto";

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
  onLogin: (user: User) => void;
  isLoggedIn: boolean;
}

interface LoginResponse {
  user: User;
}

const LoginPage: React.FC<ILoginProps & WithStyles<typeof styles>> = ({
  onLogin,
  ...props
}) => {
  const [loginError, setLoginError] = useState("");

  if (props.isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmition = (
    values: Values,
    formikActions: FormikActions<Values>
  ) => {
    AXIOS.noauthPost<LoginResponse>({
      endpoint: "users/login",
      body: {
        user: {
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
      .catch(() => {
        setLoginError("email or password is invalid");
      });
  };

  return (
    <Grid container justify="center">
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography gutterBottom variant="h4">
            Sign in
          </Typography>
          <Link className={props.classes.link} to="/register">
            Need an account?
          </Link>
        </Grid>
        {loginError.length > 0 ? (
          <Grid item>
            <Typography className={props.classes.error}>
              {loginError}
            </Typography>
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
                <Grid item className={props.classes.button}>
                  <Button
                    className={props.classes.submit}
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

const mapStateToProps = (state: any) => {
  return {
    isLoggedIn: selectIsLoggedIn(state)
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onLogin: (user: User) => dispatch(onLogin(user))
});

const StyledLogin = withStyles(styles)(LoginPage);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledLogin);
