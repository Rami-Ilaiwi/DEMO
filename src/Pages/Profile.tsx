import React, { useState, useEffect } from "react";
import ProfileBanner from "../components/Layout/ProfileBanner";
import { RouteComponentProps } from "react-router-dom";
import AXIOS from "../utils/AXIOS";
import ProfileTabs from "../components/Buttons/ProfileTabs";
import FeedApiWrapper, { FeedType } from "../components/Article/FeedApiWrapper";
import Articles from "../components/Article/Articles";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import Pagination from "../components/Buttons/Pagination";
import LoadingComponent from "../components/Layout/LoadingComponent";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/ProfileStyle";
import { connect } from "react-redux";
import { User } from "../dtos/ArticleResponseDto";
import { selectUserInfo, selectIsLoggedIn } from "../store/selectors/user";
import { IState } from "../store/reducers";

interface IProfile extends WithStyles<typeof styles> {
  user: User;
  isLoggedIn: boolean;
}

const Profile: React.FC<
  IProfile & RouteComponentProps<{ user: string }>
> = props => {
  const [selectedFeedTab, setSelectedFeedTab] = useState<FeedType>(
    "myArticlesFeed"
  );
  const [articlesCount, setArticlesCount] = useState(0);
  const [page, setPage] = useState(0);
  const [profile, setProfile] = useState({
    bio: "",
    following: false,
    image: "",
    username: ""
  });

  // This is for take the number of articles in each feed tab
  useEffect(() => {
    let url = "articles";
    url +=
      selectedFeedTab === "myArticlesFeed" ? `?author=${profile.username}` : "";
    url +=
      selectedFeedTab === "favoritedArticlesFeed"
        ? `?favorited=${profile.username}`
        : "";

    AXIOS.get(url).then(res => {
      const articlesCount: number = res.data.articlesCount;
      setArticlesCount(articlesCount);
    });
  }, [selectedFeedTab, profile.username]);

  // This for fetching the articles
  useEffect(() => {
    AXIOS.get(`profiles/${props.match.params.user}`).then(res => {
      const profile = res.data.profile;
      setProfile(profile);
    });
  }, [props.match.params.user]);

  const onFollowClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!props.isLoggedIn) {
      return props.history.push("/login");
    }

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
      {!profile.username ? (
        <LoadingComponent />
      ) : (
        <>
          <ProfileBanner
            loggedinUser={props.user.username}
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
            isLoggedIn={props.isLoggedIn}
          >
            {({ articles, handleFavoriteToggle, isLoadingArticles }) =>
              isLoadingArticles ? (
                <LoadingComponent />
              ) : (
                <>
                  {articles.length === 0 ? (
                    <Typography className={props.classes.content}>
                      No articles are here... yet.
                    </Typography>
                  ) : (
                    <Articles
                      articles={articles}
                      handleFavoriteToggle={handleFavoriteToggle}
                    />
                  )}
                  {articlesCount > 10 ? (
                    <div className={props.classes.pages}>
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
      )}
    </>
  );
};

const mapStateToProps = (user: IState) => {
  return {
    user: selectUserInfo(user),
    isLoggedIn: selectIsLoggedIn(user)
  };
};

const RoutedProfile = withRouter(Profile);
const StyledProfile = withStyles(styles)(RoutedProfile);

export default connect(mapStateToProps)(StyledProfile);
