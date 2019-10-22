import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { styles } from "./styles/FeedTabsStyle";
import { FeedType } from "../Article/FeedApiWrapper";

interface FeedTabsProps {
  isLoggedIn: boolean;
  tag: string;
  isTagToggeld: boolean;
  selectedFeedTab: FeedType;
  onChangeSelectedFeedTab: (tab: FeedType) => void;
}

const FeedTabs: React.FC<FeedTabsProps & WithStyles<typeof styles>> = ({
  isLoggedIn,
  tag,
  isTagToggeld,
  selectedFeedTab,
  onChangeSelectedFeedTab,
  classes
}) => {
  const handleChangeSelectedFeedTab = (
    event: React.ChangeEvent<{}>,
    tab: FeedType
  ) => {
    onChangeSelectedFeedTab(tab);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={selectedFeedTab}
        onChange={handleChangeSelectedFeedTab}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#5cb85c"
          }
        }}
      >
        {isLoggedIn ? (
          <Tab
            component="button"
            value="yourFeed"
            id="yourFeed"
            label="Your Feed"
          />
        ) : null}
        <Tab
          component="button"
          value="globalFeed"
          id="globalFeed"
          label="Global Feed"
        />
        {isTagToggeld ? (
          <Tab
            component="button"
            value="tagFeed"
            id="tagFeed"
            label={`#${tag}`}
          />
        ) : null}
      </Tabs>
    </div>
  );
};

export default withStyles(styles)(FeedTabs);
