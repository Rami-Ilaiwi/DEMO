import React, { useState } from "react";
import AXIOS from "../utils/AXIOS";
import { Link, Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/LoginComponentStyle";

const LoginComponent = ({ classes }: WithStyles<typeof styles>) => {
  const hasLogginCookie = localStorage.getItem("userToken") ? true : false;
  const [isLoggedIn, setIsLoggedIn] = useState(hasLogginCookie);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
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

        <Grid item container direction="column" alignItems="center">
          <form onSubmit={handleFormSubmition}>
            <Grid item>
              <TextField
                label="Email"
                value={email}
                onChange={handleEmail}
                margin="normal"
                variant="outlined"
                className={classes.input}
              />
            </Grid>

            <Grid item>
              <TextField
                label="Username"
                type="password"
                value={password}
                onChange={handlePassword}
                margin="normal"
                variant="outlined"
                className={classes.input}
              />
            </Grid>
            <Grid item className={classes.button}>
              <Button
                className={classes.submit}
                type="submit"
                variant="outlined"
              >
                Sign in
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(LoginComponent);
