import React from "react";
import Grid from "@material-ui/core/Grid";
import utl from "../../utils/utils";
import { Link } from "react-router-dom";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import BorderColorRoundedIcon from "@material-ui/icons/BorderColorRounded";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/HeaderStyle";

const Header = ({ classes }: WithStyles<typeof styles>) => {
  const userDetails = utl.getUserDetails();
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="baseline"
      className={classes.root}
    >
      <Grid item xs={3}>
        <span>
          <Link to="/" className={classes.title}>
            conduit
          </Link>
        </span>
      </Grid>

      <Grid item xs={4}>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="baseline"
          spacing={3}
        >
          <Grid item>
            <Link className={classes.link} to="/">
              Home
            </Link>
          </Grid>

          {localStorage.getItem("userToken") ? (
            <>
              <Grid item>
                <Link className={classes.link} to="/editor">
                  <BorderColorRoundedIcon className={classes.icon} /> New
                  Article
                </Link>
              </Grid>
              <Grid item>
                <Link className={classes.link} to="/settings">
                  <SettingsRoundedIcon className={classes.icon} /> Settings
                </Link>
              </Grid>

              <Grid item>
                <Link className={classes.link} to="/editor">
                  <img
                    src={userDetails.image}
                    className={classes.userPicture}
                  ></img>
                  {userDetails.username}
                </Link>
              </Grid>
            </>
          ) : (
            <>
              <Grid item>
                <Link className={classes.link} to="/login">
                  Sign in
                </Link>
              </Grid>

              <Grid item>
                <Link className={classes.link} to="/register">
                  Sign up
                </Link>
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Header);
