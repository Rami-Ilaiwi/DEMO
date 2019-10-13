import React, { useState, useEffect } from "react";
import AXIOS from "../utils/AXIOS";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import utl from "../utils/utils";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/SettingsStyle";

const Settings = ({ classes }: WithStyles<typeof styles>) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [bio, setBio] = useState("");
  const [newPass, setNewPass] = useState("");

  useEffect(() => {
    const userData = utl.getUserDetails();
    setUsername(userData.username);
    setEmail(userData.email);
    setImage(userData.image);
    setBio(userData.bio);
  }, []);

  const handlePicture = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.value);
  };

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleBio = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBio(event.target.value);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleNewPass = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPass(event.target.value);
  };

  const handleFormSubmition = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    AXIOS.put({
      endpoint: "user",
      body: {
        user: {
          image: image || undefined,
          username: username || undefined,
          bio: bio || undefined,
          email: email || undefined,
          password: newPass || undefined
        }
      }
    }).then(res => {
      localStorage.setItem("userData", JSON.stringify(res));
      localStorage.setItem("userToken", res.data.user.token);
    });
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <Grid container justify="center">
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography gutterBottom variant="h4">
            Your Settings
          </Typography>
        </Grid>
        <Grid item>
          <form onSubmit={handleFormSubmition}>
            <Grid item>
              <TextField
                label="URL of profile picture"
                value={image}
                onChange={handlePicture}
                margin="normal"
                variant="outlined"
                className={classes.input}
              />
            </Grid>
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
                label="Short bio about you"
                multiline
                rows="7"
                value={bio}
                onChange={handleBio}
                className={classes.input}
                margin="normal"
                variant="outlined"
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
            <Grid item>
              <TextField
                type="password"
                label="New Password"
                value={newPass}
                onChange={handleNewPass}
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
                Update Settings
              </Button>
            </Grid>
          </form>
          <hr />
          <Grid item>
            <Button
              className={classes.logout}
              type="submit"
              variant="outlined"
              onClick={handleLogout}
            >
              Or click here to logout.
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Settings);
