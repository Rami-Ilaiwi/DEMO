import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import BorderColorRoundedIcon from "@material-ui/icons/BorderColorRounded";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/HeaderStyle";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { User } from "../../dtos/ArticleResponseDto";
import { selectUserInfo, selectIsLoggedIn } from "../../store/selectors/user";
import { IState } from "../../store/reducers";

interface IHeaderProps extends WithStyles<typeof styles> {
  user: User;
  isLoggedIn: boolean;
}

const Header: React.FC<IHeaderProps> = props => {
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="baseline"
      className={props.classes.root}
    >
      <Grid item xs={3}>
        {/* {console.log(props.user)} */}
        <span>
          <Link to="/" className={props.classes.title}>
            <Typography className={props.classes.logoText}>conduit</Typography>
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
            <Link to="/" className={props.classes.subtitle}>
              <Typography>Home</Typography>
            </Link>
          </Grid>

          {props.isLoggedIn ? (
            <>
              <Grid item>
                <Link to="/editor" className={props.classes.subtitle}>
                  <Typography>
                    <BorderColorRoundedIcon className={props.classes.icon} />{" "}
                    New Article
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/settings" className={props.classes.subtitle}>
                  <Typography>
                    <SettingsRoundedIcon className={props.classes.icon} />{" "}
                    Settings
                  </Typography>
                </Link>
              </Grid>

              <Grid item>
                <Link
                  to={`/@${props.user.username}`}
                  className={props.classes.subtitle}
                >
                  <Typography>
                    <img
                      src={props.user.image}
                      className={props.classes.userPicture}
                      alt={props.user.username}
                    />
                    {props.user.username}
                  </Typography>
                </Link>
              </Grid>
            </>
          ) : (
            <>
              <Grid item>
                <Link to="/login" className={props.classes.subtitle}>
                  <Typography>Sign in</Typography>
                </Link>
              </Grid>

              <Grid item>
                <Link to="/register" className={props.classes.subtitle}>
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

const mapStateToProps = (user: IState) => {
  return {
    user: selectUserInfo(user),
    isLoggedIn: selectIsLoggedIn(user)
  };
};

const StyledHeader = withStyles(styles)(Header);

export default connect(mapStateToProps)(StyledHeader);
