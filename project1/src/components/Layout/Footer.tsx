import React from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";

const styles = () =>
  createStyles({
    footer: {
      position: "fixed",
      bottom: 0,
      width: "100%",
      background: "linear-gradient(#485563, #29323c)",
      textAlign: "center",
      padding: "15px",
      boxShadow: "0 5px 5px 5px rgba(0, 0, 0, 0.4)",
      zIndex: 999,
      color: "#fff !important",
      fontSize: "1.5rem",
      display: "block",
      "&:hover": {
        textDecoration: "underline"
      }
    }
  });

const Footer = ({ classes }: WithStyles<typeof styles>) => {
  return (
    <a
      href="https://github.com/gothinkster/angularjs-realworld-example-app"
      target="_blank"
      className={classes.footer}
    >
      <i className={"ion-social-github"}></i>&nbsp;&nbsp;Fork on GitHub
    </a>
  );
};

export default withStyles(styles)(Footer);
