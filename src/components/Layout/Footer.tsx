import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/FooterStyle";

const Footer = ({ classes }: WithStyles<typeof styles>) => {
  return (
    <a
      href="https://github.com/gothinkster/angularjs-realworld-example-app"
      target="_blank"
      className={classes.footer}
    >
      <i className={"ion-social-github"} />
      <span> Fork on GitHub</span>
    </a>
  );
};

export default withStyles(styles)(Footer);
