import React from "react";
import AXIOS from "../utils/AXIOS";
import Grid from "@material-ui/core/Grid";
import utl from "../utils/utils";

// const userDetails = utl.getUserDetails();

class Settings extends React.Component {
  public state = {
    image: "",
    username: "",
    bio: "",
    email: "",
    newPass: ""
  };

  public componentDidMount() {
    const userData = utl.getUserDetails();
    this.setState({
      image: userData.image,
      username: userData.username,
      bio: userData.bio,
      email: userData.email
    });
  }

  public handlePicture = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ image: event.target.value });
  };

  public handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ username: event.target.value });
  };

  public handleBio = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ bio: event.target.value });
  };

  public handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: event.target.value });
  };

  public handleNewPass = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newPass: event.target.value });
  };

  public handleFormSubmition = (event: React.FormEvent<HTMLFormElement>) => {
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

  public handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  public render() {
    return (
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <h1 className="subTitle">Your Settings</h1>
        </Grid>
        <Grid item style={{ width: 700 }}>
          <form onSubmit={this.handleFormSubmition}>
            <input
              className="input"
              placeholder="URL of profile picture"
              value={this.state.image}
              onChange={this.handlePicture}
            ></input>
            <input
              className="input"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleUsername}
            ></input>
            <textarea
              className="textarea"
              placeholder="Short bio about you"
              value={this.state.bio}
              onChange={this.handleBio}
            ></textarea>
            <input
              className="input"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleEmail}
            ></input>
            <input
              className="input"
              placeholder="New Password"
              value={this.state.newPass}
              onChange={this.handleNewPass}
              type="password"
            ></input>
            <Grid item>
              <input
                type="submit"
                className="submit"
                value="Update Settings"
              ></input>
            </Grid>
            <hr />
          </form>
          <Grid item>
            <input
              type="submit"
              className="logout"
              value="Or click here to logout."
              onClick={this.handleLogout}
            ></input>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Settings;

/*
 
<Grid item style={{ width: 500 }}>
          <form>
            <input className="input" placeholder="Article title"></input>
            <input
              className="input"
              placeholder="What's this article about?"
            ></input>
            <textarea
              className="textarea"
              placeholder="Write your article (in markdown)"
            ></textarea>
            <input className="input" placeholder="Article tag"></input>
            <Grid item>
              <input type="submit" className="submit"></input>
            </Grid>
          </form>
        </Grid>

 */
