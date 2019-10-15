import React, { useState, useEffect } from "react";
import ProfileBanner from "../components/Layout/ProfileBanner";
import { RouteComponentProps } from "react-router-dom";
import AXIOS from "../utils/AXIOS";
import utl from "../utils/utils";
import ProfileTabs from "../components/Buttons/ProfileTabs";
import FeedApiWrapper, { FeedType } from "../components/Article/FeedApiWrapper";
import Articles from "../components/Article/Articles";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import Pagination from "../components/Buttons/Pagination";
import LoadingComponent from "../components/Layout/LoadingComponent";

const Profile: React.FC<RouteComponentProps<{ user: string }>> = props => {
  const isLoggedIn = localStorage.getItem("userToken") ? true : false;
  const [selectedFeedTab, setSelectedFeedTab] = useState<FeedType>(
    "myArticlesFeed"
  );
  const [articlesCount, setArticlesCount] = useState(0);
  const [page, setPage] = useState(0);

  const user = utl.getUserDetails();

  const [profile, setProfile] = useState({
    bio: "",
    following: false,
    image: "",
    username: ""
  });

  // This is for take the number of articles in each feed tab
  useEffect(() => {
    if (profile.username) {
      if (selectedFeedTab === "myArticlesFeed") {
        AXIOS.noauthGet(`articles?author=${profile.username}`).then(res => {
          const articlesCount: number = res.data.articlesCount;
          setArticlesCount(articlesCount);
        });
      } else if (selectedFeedTab === "favoritedArticlesFeed") {
        AXIOS.noauthGet(`articles?favorited=${profile.username}`).then(res => {
          const articlesCount: number = res.data.articlesCount;
          setArticlesCount(articlesCount);
        });
      }
    }
  }, [selectedFeedTab, profile.username]);

  // This for fetching the articles
  useEffect(() => {
    if (isLoggedIn) {
      AXIOS.get(`profiles/${props.match.params.user}`).then(res => {
        const profile = res.data.profile;
        setProfile(profile);
      });
    } else {
      AXIOS.noauthGet(`profiles/${props.match.params.user}`).then(res => {
        const profile = res.data.profile;
        setProfile(profile);
      });
    }
  }, [props.match.params.user]);

  const onFollowClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (profile.following) {
      AXIOS.DELETE({
        endpoint: `profiles/${profile.username}/follow`
      }).then(resp => setProfile(resp.profile));
    } else {
      AXIOS.post({
        endpoint: `profiles/${profile.username}/follow`
      }).then(resp => setProfile(resp.profile));
    }
  };

  const handleChangePage = (page: number) => {
    setPage(page);
  };

  const handleRedirect = (path: string) => props.history.push(path);

  const handleChangeSelectedFeedTab = (tab: FeedType) => {
    setSelectedFeedTab(tab);
    setPage(0);
  };

  return (
    <>
      <ProfileBanner
        loggedinUser={user.username}
        bio={profile.bio}
        following={profile.following}
        image={profile.image}
        username={profile.username}
        onFollow={onFollowClick}
      />
      <ProfileTabs
        selectedFeedTab={selectedFeedTab}
        onChangeSelectedFeedTab={handleChangeSelectedFeedTab}
      />

      <FeedApiWrapper
        selectedFeedTab={selectedFeedTab}
        author={profile.username}
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
                <Typography style={{ marginLeft: "20%" }}>
                  No articles are here... yet.
                </Typography>
              ) : (
                <Articles
                  articles={articles}
                  handleFavoriteToggle={handleFavoriteToggle}
                />
              )}
              {articlesCount > 10 ? (
                <div style={{ marginRight: "20%" }}>
                  <Pagination
                    onChangePage={handleChangePage}
                    articlesCount={articlesCount}
                    page={page}
                  />
                </div>
              ) : null}
            </>
          )
        }
      </FeedApiWrapper>
    </>
  );
};

export default withRouter(Profile);
