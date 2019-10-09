import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { styles } from "./styles/FeedTabsStyle";

interface ProfileTabsProps {
  feedID: number;
  onChangeFeed: (id: number) => void;
}

const ProfileTabs: React.FC<
  ProfileTabsProps & WithStyles<typeof styles>
> = props => {
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    props.onChangeFeed(newValue);
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={props.classes.root}
    >
      <Grid
        item
        container
        direction="column"
        justify="center"
        style={{ width: "60%", marginTop: "1%" }}
      >
        <Tabs
          value={props.feedID}
          onChange={handleChange}
          TabIndicatorProps={{
            className: props.classes.indicator
          }}
        >
          <Tab
            component="button"
            value={3}
            id="myArticlesFeed"
            label="My Articles"
          />
          <Tab
            component="button"
            value={4}
            id="favoritedArticlesFeed"
            label="Favorited Articles"
          />
        </Tabs>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ProfileTabs);
