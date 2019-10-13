import React, { useState } from "react";
import AXIOS from "../utils/AXIOS";
import { Link, Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/RegisterComponentStyle";

const RegisterComponent = ({ classes }: WithStyles<typeof styles>) => {
  const hasLogginCookie = localStorage.getItem("userToken") ? true : false;
  const [isLoggedIn, setIsLoggedIn] = useState(hasLogginCookie);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleFormSubmition = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    AXIOS.noauthPost({
      endpoint: "users",
      body: {
        user: {
          username: username,
          email: email,
          password: password
        }
      }
    }).then(res => {
      localStorage.setItem("userData", JSON.stringify(res));
      localStorage.setItem("userToken", res.data.user.token);
      window.location.href = "/";

      // setIsLoggedIn(true);
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
          <form onSubmit={handleFormSubmition}>
            <Grid item>
              <TextField
                label="Username"
                value={username}
                onChange={handleUsername}
                margin="normal"
                variant="outlined"
                className={classes.input}
              />
            </Grid>
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
            <Grid>
              <TextField
                label="Password"
                value={password}
                type="password"
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
                Sign up
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(RegisterComponent);
