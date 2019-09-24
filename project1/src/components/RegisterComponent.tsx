import React from "react";
import AXIOS from "../utils/AXIOS";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

class RegisterComponent extends React.Component {
  state = { username: "", email: "", password: "" };

  public handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ username: event.target.value });
  };

  public handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: event.target.value });
  };

  public handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: event.target.value });
  };

  public handleFormSubmition = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    AXIOS.post({
      endpoint: "users",
      body: {
        user: {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password
        }
      }
    }).then(res => {
      console.log(res);
      // this.props.history.push("/");
    });
  };

  public render() {
    return (
      <Grid container justify="center">
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <h1 className="subTitle">Sign up</h1>
            <Link to="/login">Have an account?</Link>
          </Grid>
          <Grid item>
            <form onSubmit={this.handleFormSubmition}>
              <input
                className="input"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleUsername}
              ></input>
              <br />
              <input
                className="input"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleEmail}
              ></input>
              <br />
              <input
                className="input"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handlePassword}
              ></input>
              <br />
              <input className="submit" type="submit" value="Sign up"></input>
            </form>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default RegisterComponent;
