import React from "react";
import AXIOS from "../utils/AXIOS";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";

const styles = createStyles({
  title: {
    fontFamily: "'Source Sans Pro', sans-serif",
    lineHeight: 1.5,
    fontWeight: 500,
    color: "#373a3c",
    marginBottom: 0,
    marginTop: "5%"
  },
  input: {
    marginTop: "1.5%",
    padding: "0.5rem 0.75rem",
    width: "100%",
    lineHeight: "1.25",
    color: "#55595c",
    backgroundColor: "#fff",
    backgroundClip: "padding-box",
    border: "1px solid rgba(0, 0, 0, 0.15)",
    borderRadius: "0.25rem",
    fontFamily: "'Source Sans Pro', sans-serif",
    fontSize: "1.25rem"
  },
  submit: {
    padding: "0.75rem 1.5rem",
    fontSize: "1.25rem",
    borderRadius: "0.3rem",
    marginTop: "1%",
    borderColor: "#5cb85c",
    display: "inline-block",
    fontWeight: "normal",
    lineHeight: "1.25",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    cursor: "pointer",
    userSelect: "none",
    border: "1px solid transparent",
    opacity: 0.8,
    color: "white",
    backgroundColor: "#5cb85c",
    "&:hover, &focus, &active": {
      color: "#fff",
      backgroundColor: "#449d44",
      borderColor: " #419641"
    },
    "&active:hover, active:focus": {
      color: "#fff",
      backgroundColor: "#398439",
      borderColor: "#2d672d"
    }
  },
  link: {
    color: "#5CB85C !important",
    textDecoration: "none",
    "&:hover": {
      color: "#3d8b3d !important",
      textDecoration: "underline"
    },
    "&:focus": {
      outline: "thin dotted",
      outlineDffset: "-2px"
    }
  }
});

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
