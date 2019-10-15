import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/LoadingComponentStyle";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoadingComponent = ({ classes }: WithStyles<typeof styles>) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function tick() {
      setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }

    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item>
        <CircularProgress
          className={classes.progress}
          variant="determinate"
          value={progress}
        />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(LoadingComponent);
