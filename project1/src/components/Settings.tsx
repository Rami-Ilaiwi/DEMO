import React, { useState, useEffect } from "react";
import AXIOS from "../utils/AXIOS";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import utl from "../utils/utils";

const Settings = ({ classes }: WithStyles<typeof styles>) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [bio, setBio] = useState("");
  const [newPass, setNewPass] = useState("");

  useEffect(() => {
    const userData = utl.getUserDetails();
    setUsername(userData.image);
    setEmail(userData.username);
    setImage(userData.bio);
    setBio(userData.email);
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
    }).then(res => console.log(res));
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography gutterBottom variant="h4">
          Your Settings
        </Typography>
      </Grid>
      <Grid item style={{ width: 700 }}>
        <form onSubmit={handleFormSubmition}>
          <input
            className={classes.input}
            placeholder="URL of profile picture"
            value={image}
            onChange={handlePicture}
          />
          <input
            className={classes.input}
            placeholder="Username"
            value={username}
            onChange={handleUsername}
          />
          <textarea
            className={`${classes.input} ${classes.textarea}`}
            placeholder="Short bio about you"
            value={bio}
            onChange={handleBio}
          ></textarea>
          <input
            className={classes.input}
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
          <input
            className={classes.input}
            placeholder="New Password"
            value={newPass}
            onChange={handleNewPass}
            type="password"
          />
          <Grid item>
            <input
              type="submit"
              className={classes.submit}
              value="Update Settings"
            />
          </Grid>
          <hr />
        </form>
        <Grid item>
          <input
            type="submit"
            className={classes.logout}
            value="Or click here to logout."
            onClick={handleLogout}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

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
