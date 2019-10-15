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
import LoadingComponent from "../components/Layout/LoadingComponent";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/FeedPageStyle";

const FeedPage: React.FC<RouteComponentProps & WithStyles<typeof styles>> = ({
  history,
  classes
}) => {
  const [selectedFeedTab, setSelectedFeedTab] = useState<FeedType>(
    "globalFeed"
  );
  const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState("");
  const [isTagClicked, setIsTagClicked] = useState(false);
  const [articlesCount, setArticlesCount] = useState(0);
  const [page, setPage] = useState(0);
  const [isLoadingTags, setIsLoadingTags] = useState(false);
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
    setIsLoadingTags(true);
    AXIOS.noauthGet("tags").then(res => {
      const tags = res.data.tags;
      setTags(tags);
      setIsLoadingTags(false);
    });
  }, []);

  const isLoggedIn = localStorage.getItem("userToken") ? true : false;
  return (
    <>
      {token ? null : <Banner />}

      <>
        <Grid container className={classes.container}>
          <Grid item xs={8}>
            <Grid item className={classes.tabs}>
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
                {({ articles, handleFavoriteToggle, isLoadingArticles }) =>
                  isLoadingArticles ? (
                    <LoadingComponent />
                  ) : (
                    <>
                      {articles.length == 0 ? (
                        <Typography className={classes.content}>
                          No articles are here... yet.
                        </Typography>
                      ) : (
                        <Articles
                          articles={articles}
                          handleFavoriteToggle={handleFavoriteToggle}
                        />
                      )}
                      {articlesCount > 10 ? (
                        <Pagination
                          onChangePage={handleChangePage}
                          articlesCount={articlesCount}
                          page={page}
                        />
                      ) : null}
                    </>
                  )
                }
              </FeedApiWrapper>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Tags
              isLoadingTags={isLoadingTags}
              onClickTag={onClickTag}
              tags={tags}
            />
          </Grid>
        </Grid>
      </>
    </>
  );
};

const RoutedFeedPage = withRouter(FeedPage);

export default withStyles(styles)(RoutedFeedPage);
