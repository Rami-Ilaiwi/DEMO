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

const Profile: React.FC<RouteComponentProps<{ user: string }>> = props => {
  const isLoggedIn = localStorage.getItem("userToken") ? true : false;
  const [selectedFeedTab, setSelectedFeedTab] = useState<FeedType>(
    "myArticlesFeed"
  );
  const user = utl.getUserDetails();

  const [profile, setProfile] = useState({
    bio: "",
    following: false,
    image: "",
    username: ""
  });

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
  }, [props.match.params.user, selectedFeedTab]);

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

  const handleRedirect = (path: string) => props.history.push(path);

  const handleChangeSelectedFeedTab = (tab: FeedType) => {
    setSelectedFeedTab(tab);
  };

  return (
    <>
      {/* {console.log(props.match.params.user)} */}
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
    </>
  );
};

export default withRouter(Profile);
