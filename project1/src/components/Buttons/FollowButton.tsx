import React from "react";

interface FollowButtonProps {
  following: boolean;
  profileName: string;
  handleFollow: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const FollowButton: React.FC<FollowButtonProps> = props => {
  return (
    <button
      onClick={props.handleFollow}
      className={`btn ${props.following ? "unFollow" : "follow"}`}
    >
      <i className="ion-plus-round"></i>
      <span>
        {props.following ? " Unfollow" : " Follow"} {props.profileName}
      </span>
    </button>
  );
};

export default FollowButton;
