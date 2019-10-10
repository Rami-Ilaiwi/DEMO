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
import Pagination from "../components/Buttons/Pagination";

const FeedPage = ({ history }: RouteComponentProps) => {
  const [selectedFeedTab, setSelectedFeedTab] = useState<FeedType>(
    "globalFeed"
  );
  const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState("");
  const [isTagClicked, setIsTagClicked] = useState(false);
  const [articlesCount, setArticlesCount] = useState(0);
  const [page, setPage] = useState(0);
  const token = localStorage.getItem("userToken");
  const handleRedirect = (path: string) => history.push(path);

  const handleChangePage = (page: number) => {
    setPage(page);
  };

  const handleChangeSelectedFeedTab = (feedType: FeedType) => {
    setSelectedFeedTab(feedType);
    setPage(0);
    if (feedType !== "tagFeed") {
      setIsTagClicked(false);
    }
  };

  const onClickTag = (tag: string) => {
    setTag(tag);
    setPage(0);
    setIsTagClicked(true);
    setSelectedFeedTab("tagFeed");
  };

  // This one for fetching the articles
  useEffect(() => {
    if (selectedFeedTab === "globalFeed") {
      AXIOS.noauthGet("articles").then(res => {
        const articlesCount: number = res.data.articlesCount;
        setArticlesCount(articlesCount);
      });
    } else if (selectedFeedTab === "yourFeed") {
      AXIOS.get(`articles/feed`).then(res => {
        const articlesCount: number = res.data.articlesCount;
        setArticlesCount(articlesCount);
      });
    } else if (selectedFeedTab === "tagFeed") {
      AXIOS.noauthGet(`articles?tag=${tag}`).then(res => {
        const articlesCount: number = res.data.articlesCount;
        setArticlesCount(articlesCount);
      });
    }
  }, [tag, selectedFeedTab]);

  // This for fetching tags
  useEffect(() => {
    AXIOS.noauthGet("tags").then(res => {
      const tags = res.data.tags;
      setTags(tags);
    });
  }, []);

  const isLoggedIn = localStorage.getItem("userToken") ? true : false;
  return (
    <>
      {token ? null : <Banner />}

      <>
        <Grid container style={{ marginTop: "3%" }}>
          <Grid item xs={8}>
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
                page={page}
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
            {articlesCount > 10 ? (
              <Pagination
                onChangePage={handleChangePage}
                articlesCount={articlesCount}
                page={page}
              />
            ) : null}
          </Grid>
          <Grid item xs={3}>
            <Tags onClickTag={onClickTag} tags={tags} />
          </Grid>
        </Grid>
      </>
    </>
  );
};

export default withRouter(FeedPage);
