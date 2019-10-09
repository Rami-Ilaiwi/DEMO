import React, { useState, useEffect } from "react";
import Banner from "../components/Layout/Banner";
import Grid from "@material-ui/core/Grid";
import Tags from "../components/Tags/Tags";
import Articles from "../components/Article/Articles";
import { withRouter } from "react-router-dom";
import FeedApiWrapper, { FeedType } from "../components/Article/FeedApiWrapper";
import { RouteComponentProps } from "react-router-dom";
import FeedTabs from "../components/Buttons/FeedTabs";
import Typography from "@material-ui/core/Typography";
import AXIOS from "../utils/AXIOS";

const FeedPage = ({ history }: RouteComponentProps) => {
  const [selectedFeedTab, setSelectedFeedTab] = useState<FeedType>(
    "globalFeed"
  );
  const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState("");
  const [isTagClicked, setIsTagClicked] = useState(false);

  const token = localStorage.getItem("userToken");
  const handleRedirect = (path: string) => history.push(path);

  const handleChangeSelectedFeedTab = (feedType: FeedType) => {
    setSelectedFeedTab(feedType);
    if (feedType != "tagFeed") {
      setIsTagClicked(false);
    }
  };

  const onClickTag = (tag: string) => {
    setTag(tag);
    setIsTagClicked(true);
    setSelectedFeedTab("tagFeed");
  };

  useEffect(() => {
    AXIOS.noauthGet("tags").then(res => {
      const tags = res.data.tags;
      setTags(tags);
    });
  }, [tag]);

  const isLoggedIn = localStorage.getItem("userToken") ? true : false;
  return (
    <>
      {token ? null : <Banner />}

      <div>
        <Grid container style={{ marginTop: "3%" }}>
          <Grid item xs>
            <Grid item style={{ marginBottom: "2%", marginLeft: "20%" }}>
              <FeedTabs
                onChangeSelectedFeedTab={handleChangeSelectedFeedTab}
                isLoggedIn={isLoggedIn}
                tag={tag}
                selectedFeedTab={selectedFeedTab}
                isTagToggeld={isTagClicked}
              />
            </Grid>
            <Grid item>
              <FeedApiWrapper
                selectedFeedTab={selectedFeedTab}
                tag={tag}
                onRedirect={handleRedirect}
                isLoggedIn={isLoggedIn}
              >
                {({ articles, handleFavoriteToggle }) => (
                  <>
                    {articles.length == 0 ? (
                      <Typography style={{ marginLeft: "20%" }}>
                        No articles are here... yet.
                      </Typography>
                    ) : (
                      <Articles
                        articles={articles}
                        handleFavoriteToggle={handleFavoriteToggle}
                      />
                    )}
                  </>
                )}
              </FeedApiWrapper>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Tags onClickTag={onClickTag} tags={tags} />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default withRouter(FeedPage);
