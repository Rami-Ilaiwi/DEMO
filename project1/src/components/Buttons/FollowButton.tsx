import React from "react";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";

const styles = () =>
  createStyles({
    root: {
      float: "right",
      backgroundColor: "transparent",
      borderColor: "#5cb85c",
      whiteSpace: "nowrap",
      opacity: 0.8,
      borderRadius: "0.2rem",
      fontSize: "0.875rem",
      padding: "0.25rem 0.5rem",
      marginRight: "1%",
      border: "1px solid transparent",
      cursor: "pointer"
    },

    follow: {
      color: "#ccc",
      backgroundColor: "transparent",
      borderColor: "#ccc"
    },

    unfollow: {
      color: "#373a3c",
      backgroundColor: "#fff",
      borderColor: "#ccc"
    },

    icon: {
      fontSize: "inherit",
      cursor: "pointer"
    }
  });

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
