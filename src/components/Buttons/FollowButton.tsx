import React from "react";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/FollowButtonStyle";
import Button from "@material-ui/core/Button";

interface FollowButtonProps {
  following: boolean;
  profileName: string;
  onFollow: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const FollowButton: React.FC<FollowButtonProps & WithStyles<typeof styles>> = ({
  following,
  profileName,
  onFollow,
  classes
}) => {
  return (
    <Button
      onClick={onFollow}
      className={`${classes.root} ${
        following ? classes.unfollow : classes.follow
      }`}
    >
      <AddRoundedIcon className={classes.icon} />

      <span>
        {following ? " Unfollow" : " Follow"} {profileName}
      </span>
    </Button>
  );
};

export default withStyles(styles)(FollowButton);
