import React from "react";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/FollowButtonStyle";

interface FollowButtonProps {
  following: boolean;
  profileName: string;
  onFollow: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const FollowButton: React.FC<
  FollowButtonProps & WithStyles<typeof styles>
> = props => {
  return (
    <button
      onClick={props.onFollow}
      className={`${props.classes.root} ${
        props.following ? props.classes.unfollow : props.classes.follow
      }`}
      // className={`btn ${props.following ? "unfollow" : "follow"}`}
    >
      <AddRoundedIcon className={props.classes.icon}></AddRoundedIcon>

      <span>
        {props.following ? " Unfollow" : " Follow"} {props.profileName}
      </span>
    </button>
  );
};

export default withStyles(styles)(FollowButton);
