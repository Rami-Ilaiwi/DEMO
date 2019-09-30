import React from "react";
import Grid from "@material-ui/core/Grid";
import utl from "../../utils/utils";
import { Link } from "react-router-dom";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import BorderColorRoundedIcon from "@material-ui/icons/BorderColorRounded";

const styles = () =>
  createStyles({
    root: {},
    title: {
      fontFamily: "'Titillium Web', sans-serif",
      fontSize: "1.5rem !important",
      textDecoration: "none",
      color: "#5cb85c !important"
    },
    userPicture: {
      height: "26px",
      borderRadius: "50px",
      float: "left",
      boxSizing: "inherit",
      marginRight: "5px",
      position: "relative"
    },
    icon: {
      fontSize: "15px !important"
    }
  });

const Header = ({ classes }: WithStyles<typeof styles>) => {
  const userDetails = utl.getUserDetails();
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="baseline"
      style={{ marginTop: "1%" }}
    >
      <Grid item xs={3}>
        <span className={classes.title}>
          <Link to="/">conduit</Link>
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
            <Link to="/">Home</Link>
          </Grid>

          {localStorage.getItem("userToken") ? (
            <>
              <Grid item>
                <Link to="/editor">
                  <BorderColorRoundedIcon className={classes.icon} /> New
                  Article
                </Link>
              </Grid>
              <Grid item>
                <Link to="/settings">
                  <SettingsRoundedIcon className={classes.icon} /> Settings
                </Link>
              </Grid>

              <Grid item>
                <Link to="/editor">
                  <img
                    src={userDetails.image}
                    className={classes.userPicture}
                    alt={userDetails.username}
                  ></img>
                  {userDetails.username}
                </Link>
              </Grid>
            </>
          ) : (
            <>
              <Grid item>
                <Link to="/login">Sign in</Link>
              </Grid>

              <Grid item>
                <Link to="/register">Sign up</Link>
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Header);
