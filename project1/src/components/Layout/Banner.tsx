import React from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = () =>
  createStyles({
    root: {
      background: "#5cb85c",
      boxShadow:
        "inset 0 8px 8px -8px rgba(0, 0, 0, 0.3) inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3)",
      marginBottom: "1%"
    },
    contentHeader: {
      textShadow: "0px 1px 3px rgba(0, 0, 0, 0.3)",
      textAlign: "center",
      fontSize: "3.5rem",
      fontFamily: "'Titillium Web', sans-serif",
      color: "#fff",
      padding: "3%"
    },
    contentBody: {
      color: "#fff",
      textAlign: "center",
      fontSize: "1.5rem"
    }
  });

const Banner = ({ classes }: WithStyles<typeof styles>) => {
  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.contentHeader}>
        conduit
      </Typography>
      <Typography variant="body1" className={classes.contentBody}>
        A place to share your knowledge
      </Typography>
    </div>
  );
};

{
  /* <Banner classes={{root: classes.myRoot}} /> */
}

export default withStyles(styles)(Banner);
