import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { styles } from "./styles/FeedTabsStyle";
import { FeedType } from "../Article/FeedApiWrapper";

interface ProfileTabsProps {
  selectedFeedTab: FeedType;
  onChangeSelectedFeedTab: (tab: FeedType) => void;
}

const ProfileTabs: React.FC<ProfileTabsProps & WithStyles<typeof styles>> = ({
  selectedFeedTab,
  onChangeSelectedFeedTab,
  classes
}) => {
  const handleChange = (event: React.ChangeEvent<{}>, tab: FeedType) => {
    onChangeSelectedFeedTab(tab);
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid
        item
        container
        direction="column"
        justify="center"
        className={classes.tabs}
      >
        <Tabs
          value={selectedFeedTab}
          onChange={handleChange}
          TabIndicatorProps={{
            className: classes.indicator
          }}
        >
          <Tab
            component="button"
            value="myArticlesFeed"
            id="myArticlesFeed"
            label="My Articles"
          />
          <Tab
            component="button"
            value="favoritedArticlesFeed"
            id="favoritedArticlesFeed"
            label="Favorited Articles"
          />
        </Tabs>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ProfileTabs);
