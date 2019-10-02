import React, { useState } from "react";
import AXIOS from "../utils/AXIOS";
import { Link, Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/LoginComponentStyle";

const LoginComponent = ({ classes }: WithStyles<typeof styles>) => {
  // class LoginComponent extends React.Component<WithStyles<typeof styles>> {

  const hasLogginCookie = localStorage.getItem("userToken") ? true : false;
  const [isLoggedIn, setIsLoggedIn] = useState(hasLogginCookie);
  //   const {isLoggedIn, login, logout} = React.useContext(LoggedIn);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  // state = { email: "", password: "" };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    // this.setState({ email: event.target.value });
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    // this.setState({ password: event.target.value });
    setpassword(event.target.value);
  };

  const handleFormSubmition = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    AXIOS.noauthPost({
      endpoint: "users/login",
      body: {
        user: {
          email: email,
          password: password
        }
      }
    }).then(res => {
      localStorage.setItem("userData", JSON.stringify(res));
      localStorage.setItem("userToken", res.data.user.token);
      // this.props.history.push("/");
      window.location.href = "/";
      // setIsLoggedIn(true);
    });
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
        <Grid item>
          <form onSubmit={handleFormSubmition}>
            <input
              value={email}
              className={classes.input}
              placeholder="Email"
              onChange={handleEmail}
            />
            <br />
            <input
              value={password}
              className={classes.input}
              type="password"
              placeholder="Password"
              onChange={handlePassword}
            />
            <br />
            <input className={classes.submit} type="submit" value="Sign in" />
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(LoginComponent);
