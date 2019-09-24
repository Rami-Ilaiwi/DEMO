import React from "react";
import moment from "moment";

interface commentItem {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
}

interface commentsProps {
  comments: commentItem[];
}

const Comments: React.FC<commentsProps> = props => {
  const content = props.comments.map(item => {
    return (
      <div key={item.id} className="card">
        <div className="card-block">
          <p className="card-text">{item.body}</p>
        </div>
        <div className="card-footer">
          <a className="comment-author" href="#/@yiwei">
            <img src={item.author.image} className="comment-author-img" />
          </a>
          <a
            className="comment-author ng-binding"
            ui-sref="app.profile.main({ username: $ctrl.data.author.username })"
            href="#/@yiwei"
          >
            {item.author.username}
          </a>
          <span className="date-posted ng-binding">
            {" "}
            {moment(new Date(Date.parse(item.createdAt))).format(
              "MMMM D, YYYY"
            )}
          </span>
          {/* <span className="mod-options ng-hide" ng-show="$ctrl.canModify">
            <i className="ion-trash-a" ng-click="$ctrl.deleteCb()"></i>
          </span> */}
        </div>
      </div>
    );
  });
  return <ul>{content}</ul>;
};

export default Comments;
