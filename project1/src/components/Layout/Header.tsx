import React from "react";
import Grid from "@material-ui/core/Grid";
import utl from "../../utils/utils";
import { Link } from "react-router-dom";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import BorderColorRoundedIcon from "@material-ui/icons/BorderColorRounded";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/HeaderStyle";
import Typography from "@material-ui/core/Typography";

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
            <Typography className={classes.logoText}>conduit</Typography>
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
            <Link to="/" className={classes.subtitle}>
              <Typography>Home</Typography>
            </Link>
          </Grid>

          {localStorage.getItem("userToken") ? (
            <>
              <Grid item>
                <Link to="/editor" className={classes.subtitle}>
                  <Typography>
                    <BorderColorRoundedIcon className={classes.icon} /> New
                    Article
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/settings" className={classes.subtitle}>
                  <Typography>
                    <SettingsRoundedIcon className={classes.icon} /> Settings
                  </Typography>
                </Link>
              </Grid>

              <Grid item>
                <Link to="/editor" className={classes.subtitle}>
                  <Typography>
                    <img
                      src={userDetails.image}
                      className={classes.userPicture}
                    ></img>
                    {userDetails.username}
                  </Typography>
                </Link>
              </Grid>
            </>
          ) : (
            <>
              <Grid item>
                <Link to="/login" className={classes.subtitle}>
                  <Typography>Sign in</Typography>
                </Link>
              </Grid>

              <Grid item>
                <Link to="/register" className={classes.subtitle}>
                  <Typography>Sign up</Typography>
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
