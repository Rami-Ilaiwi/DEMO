import React from "react";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/EditProfileButtonStyle";
import { Link } from "react-router-dom";

const EditProfileButton: React.FC<WithStyles<typeof styles>> = ({
  classes
}) => {
  return (
    <Link to={`/settings`} className={`${classes.root} ${classes.edit}`}>
      <SettingsRoundedIcon className={classes.icon} />
      <span> Edit Profile Settings</span>
    </Link>
  );
};

export default withStyles(styles)(EditProfileButton);
