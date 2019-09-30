import React from "react";
import AXIOS from "../../utils/AXIOS";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

class LoginComponent extends React.Component {
  public state = { email: "", password: "" };

  public handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: event.target.value });
  };

  public handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: event.target.value });
  };

  public handleFormSubmition = (event: React.FormEvent<HTMLFormElement>) => {
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

  public render() {
    return (
      <Grid container justify="center">
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <h1 className="subTitle">Sign up</h1>
            <Link to="/register">Need an account?</Link>
          </Grid>
          <Grid item>
            <form onSubmit={this.handleFormSubmition}>
              <input
                value={this.state.email}
                className="input"
                placeholder="Email"
                onChange={this.handleEmail}
              ></input>
              <br />
              <input
                value={this.state.password}
                className="input"
                type="password"
                placeholder="Password"
                onChange={this.handlePassword}
              ></input>
              <br />
              <input className="submit" type="submit" value="Sign in"></input>
            </form>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default LoginComponent;
