import React from "react";
import Grid from "@material-ui/core/Grid";
import utl from "../../utils/utils";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
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
          <span className="title">
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
                    <i className="ion-compose"></i> New Article
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/settings">
                    <i className="ion-gear-a"></i> Settings
                  </Link>
                </Grid>

                <Grid item>
                  <Link to="/editor">
                    <img
                      src={userDetails.image}
                      className="user-pic"
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
  }
}

export default Header;
