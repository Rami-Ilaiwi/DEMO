import React from "react";
import AXIOS from "../utils/AXIOS";
import Grid from "@material-ui/core/Grid";
import utl from "../utils/utils";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/SettingsStyle";

class Settings extends React.Component<WithStyles<typeof styles>> {
  state = {
    image: "",
    username: "",
    bio: "",
    email: "",
    newPass: ""
  };

  componentDidMount() {
    const userData = utl.getUserDetails();
    this.setState({
      image: userData.image,
      username: userData.username,
      bio: userData.bio,
      email: userData.email
    });
  }

  handlePicture = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ image: event.target.value });
  };

  handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ username: event.target.value });
  };

  handleBio = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ bio: event.target.value });
  };

  handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: event.target.value });
  };

  handleNewPass = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newPass: event.target.value });
  };

  handleFormSubmition = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // console.log(localStorage.getItem("userToken"));
    AXIOS.put({
      endpoint: "user",
      body: {
        user: {
          image: this.state.image || undefined,
          username: this.state.username || undefined,
          bio: this.state.bio || undefined,
          email: this.state.email || undefined,
          password: this.state.newPass || undefined
        }
      }
    }).then(res => console.log(res));
  };

  handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  render() {
    return (
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <h1 className={this.props.classes.title}>Your Settings</h1>
        </Grid>
        <Grid item style={{ width: 700 }}>
          <form onSubmit={this.handleFormSubmition}>
            <input
              className={this.props.classes.input}
              placeholder="URL of profile picture"
              value={this.state.image}
              onChange={this.handlePicture}
            />
            <input
              className={this.props.classes.input}
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleUsername}
            />
            <textarea
              className={`${this.props.classes.input} ${this.props.classes.textarea}`}
              placeholder="Short bio about you"
              value={this.state.bio}
              onChange={this.handleBio}
            ></textarea>
            <input
              className={this.props.classes.input}
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleEmail}
            />
            <input
              className={this.props.classes.input}
              placeholder="New Password"
              value={this.state.newPass}
              onChange={this.handleNewPass}
              type="password"
            />
            <Grid item>
              <input
                type="submit"
                className={this.props.classes.submit}
                value="Update Settings"
              />
            </Grid>
            <hr />
          </form>
          <Grid item>
            <input
              type="submit"
              className={this.props.classes.logout}
              value="Or click here to logout."
              onClick={this.handleLogout}
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Settings);
