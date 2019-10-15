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

const FollowButton: React.FC<
  FollowButtonProps & WithStyles<typeof styles>
> = props => {
  return (
    <Button
      onClick={props.onFollow}
      className={`${props.classes.root} ${
        props.following ? props.classes.unfollow : props.classes.follow
      }`}
    >
      <AddRoundedIcon className={props.classes.icon}></AddRoundedIcon>

      <span>
        {props.following ? " Unfollow" : " Follow"} {props.profileName}
      </span>
    </Button>
  );
};

export default withStyles(styles)(FollowButton);
