import React from "react";
import AXIOS from "../utils/AXIOS";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/RegisterComponentStyle";

class RegisterComponent extends React.Component<WithStyles<typeof styles>> {
  state = { username: "", email: "", password: "" };

  handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ username: event.target.value });
  };

  handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: event.target.value });
  };

  handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: event.target.value });
  };

  handleFormSubmition = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    AXIOS.noauthPost({
      endpoint: "users",
      body: {
        user: {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password
        }
      }
    }).then(res => {
      localStorage.setItem("userData", JSON.stringify(res));
      localStorage.setItem("userToken", res.data.user.token);
      window.location.href = "/";
    });
  };

  render() {
    return (
      <Grid container justify="center">
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <h1 className={this.props.classes.title}>Sign up</h1>
            <Link className={this.props.classes.link} to="/login">
              Have an account?
            </Link>
          </Grid>
          <Grid item>
            <form onSubmit={this.handleFormSubmition}>
              <input
                className={this.props.classes.input}
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleUsername}
              ></input>
              <br />
              <input
                className={this.props.classes.input}
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleEmail}
              ></input>
              <br />
              <input
                className={this.props.classes.input}
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handlePassword}
              ></input>
              <br />
              <input
                className={this.props.classes.submit}
                type="submit"
                value="Sign up"
              ></input>
            </form>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(RegisterComponent);
