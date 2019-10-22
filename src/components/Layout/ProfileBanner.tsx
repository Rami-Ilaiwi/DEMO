import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { styles } from "./styles/ProfileBannerStyle";
import Avatar from "@material-ui/core/Avatar";
import FollowButton from "../Buttons/FollowButton";
import EditProfileButton from "../Buttons/EditProfileButton";

interface ProfileBannerProps {
  bio: string;
  following: boolean;
  image: string;
  username: string;
  loggedinUser: string;
  onFollow: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ProfileBanner: React.FC<
  ProfileBannerProps & WithStyles<typeof styles>
> = ({ bio, following, image, username, loggedinUser, onFollow, classes }) => {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid
        item
        container
        direction="column"
        justify="center"
        className={classes.container}
      >
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Avatar alt={username} src={image} className={classes.avatar} />
          </Grid>
          <Grid item>
            <Typography className={classes.title} variant="h4">
              {username}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.bio} variant="body1">
              {bio}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="flex-end"
        >
          <Grid item className={classes.banner}>
            {loggedinUser === username ? (
              <EditProfileButton />
            ) : (
              <FollowButton
                following={following}
                profileName={username}
                onFollow={onFollow}
              />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ProfileBanner);
