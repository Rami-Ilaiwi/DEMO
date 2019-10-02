import React from "react";
import AXIOS from "../utils/AXIOS";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/LoginComponentStyle";

class LoginComponent extends React.Component<WithStyles<typeof styles>> {
  state = { email: "", password: "" };

  handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: event.target.value });
  };

  handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: event.target.value });
  };

  handleFormSubmition = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    AXIOS.noauthPost({
      endpoint: "users/login",
      body: {
        user: {
          email: this.state.email,
          password: this.state.password
        }
      }
    }).then(res => {
      localStorage.setItem("userData", JSON.stringify(res));
      localStorage.setItem("userToken", res.data.user.token);
      // this.props.history.push("/");
      window.location.href = "/";
    });
  };

  render() {
    return (
      <Grid container justify="center">
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <h1 className={this.props.classes.title}>Sign up</h1>
            <Link className={this.props.classes.link} to="/register">
              Need an account?
            </Link>
          </Grid>
          <Grid item>
            <form onSubmit={this.handleFormSubmition}>
              <input
                value={this.state.email}
                className={this.props.classes.input}
                placeholder="Email"
                onChange={this.handleEmail}
              />
              <br />
              <input
                value={this.state.password}
                className={this.props.classes.input}
                type="password"
                placeholder="Password"
                onChange={this.handlePassword}
              />
              <br />
              <input
                className={this.props.classes.submit}
                type="submit"
                value="Sign in"
              />
            </form>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(LoginComponent);
