import React, { useState } from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { styles } from "./styles/FeedTabsStyle";

interface FeedTabsProps {
  isLoggedIn: boolean;
  tag: string;
  isTagToggeld: boolean;
  feedID: number;
  onChangeFeed: (id: number) => void;
}

const FeedTabs: React.FC<FeedTabsProps & WithStyles<typeof styles>> = props => {
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    props.onChangeFeed(newValue);
  };

  return (
    <div className={props.classes.root}>
      <Tabs
        value={props.feedID}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#5cb85c"
          }
        }}
      >
        {props.isLoggedIn ? (
          <Tab component="button" value={1} id="yourFeed" label="Your Feed" />
        ) : null}
        <Tab component="button" value={0} id="globalFeed" label="Global Feed" />
        {props.isTagToggeld ? (
          <Tab
            component="button"
            value={2}
            id="tagFeed"
            label={`#${props.tag}`}
          />
        ) : null}
      </Tabs>
    </div>
  );
};

export default withStyles(styles)(FeedTabs);
