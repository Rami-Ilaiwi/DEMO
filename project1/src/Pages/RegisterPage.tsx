import React, { useState } from "react";
import AXIOS from "../utils/AXIOS";
import { Link, Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

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

        <Grid item>
          <form onSubmit={handleFormSubmition}>
            <input
              className={classes.input}
              placeholder="Username"
              value={username}
              onChange={handleUsername}
            ></input>
            <br />
            <input
              className={classes.input}
              placeholder="Email"
              value={email}
              onChange={handleEmail}
            ></input>
            <br />
            <input
              className={classes.input}
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
            ></input>
            <br />
            <input
              className={classes.submit}
              type="submit"
              value="Sign up"
            ></input>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(RegisterComponent);
