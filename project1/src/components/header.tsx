import React from "react";
import styled from "@emotion/styled";
import Grid from "@material-ui/core/Grid";
import utl from "../utils/utils";
import { Link } from "react-router-dom";

const HeaderBar = styled("div")`
  list-style-type: none;
  margin: 0;

  overflow: hidden;
  flex-grow: 1;
  div {
    float: right;
    text-align: center;
    margin-right: 150px;
  }
  ul {
    li {
      float: left;
      position: inherit;
      list-style: none;
      padding-left: 0;
      margin-top: 0;
      box-sizing: inherit;
    }
    a {
      text-align: center;
      padding-left: 20px;
    }
  }
`;

class Header extends React.Component {
  render() {
    const userDetails = utl.getUserDetails();
    return (
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="baseline"
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

// const Header = () => {
//   return (
//     <div>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="title" color="inherit">
//             React & Material-UI
//           </Typography>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// };

export default Header;
