import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/BannerStyle";

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

export default withStyles(styles)(Banner);
