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
> = props => {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={props.classes.root}
    >
      <Grid
        item
        container
        direction="column"
        justify="center"
        className={props.classes.container}
      >
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Avatar
              alt={props.username}
              src={props.image}
              className={props.classes.avatar}
            />
          </Grid>
          <Grid item>
            <Typography className={props.classes.title} variant="h4">
              {props.username}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={props.classes.bio} variant="body1">
              {props.bio}
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
          <Grid item style={{ padding: 10 }}>
            {props.loggedinUser == props.username ? (
              <EditProfileButton />
            ) : (
              <FollowButton
                following={props.following}
                profileName={props.username}
                onFollow={props.onFollow}
              />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ProfileBanner);
