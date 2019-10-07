import React, { useState, useEffect } from "react";
import Banner from "../components/Layout/Banner";
import Grid from "@material-ui/core/Grid";
import Tags from "../components/Tags/Tags";
import Articles from "../components/Article/Articles";
import { withRouter } from "react-router-dom";
import FeedApiWrapper from "../components/Article/FeedApiWrapper";
import { RouteComponentProps } from "react-router-dom";
import FeedTabs from "../components/Buttons/FeedTabs";
import Typography from "@material-ui/core/Typography";
import AXIOS from "../utils/AXIOS";

const GridContainer = ({ history }: RouteComponentProps) => {
  const [feedID, setFeedID] = useState(0);
  const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState("");
  const [isTagClicked, setIsTagClicked] = useState(false);

  const token = localStorage.getItem("userToken");
  const handleRedirect = (path: string) => history.push(path);

  const handleChangeFeed = (id: number) => {
    setFeedID(id);
    if (id != 2) {
      setIsTagClicked(false);
    }
  };

  const onClickTag = (tag: string) => {
    setTag(tag);
    setIsTagClicked(true);
    setFeedID(2);
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
                onChangeFeed={handleChangeFeed}
                isLoggedIn={isLoggedIn}
                tag={tag}
                feedID={feedID}
                isTagToggeld={isTagClicked}
              />
            </Grid>
            <Grid item>
              <FeedApiWrapper
                feedID={feedID}
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

export default withRouter(GridContainer);
