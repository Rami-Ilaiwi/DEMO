import React from "react";
import AXIOS from "../utils/AXIOS";
import utl from "../utils/utils";

interface PROPS {
  comment: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => any;
  handleComment: (e: React.ChangeEvent<HTMLTextAreaElement>) => any;
}

class UserComment extends React.Component<PROPS> {
  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit}
          className="card comment-form ng-valid ng-dirty ng-submitted"
          ng-submit="$ctrl.addComment()"
        >
          <div>
            <textarea
              className="comment"
              placeholder="Write a comment..."
              rows={3}
              value={this.props.comment}
              onChange={this.props.handleComment}
            ></textarea>
          </div>
          <div className="card-footer">
            <img
              className="comment-user-img"
              src={utl.getUserDetails().image}
            />
            <input
              className="btn btn-sm btn-primary"
              type="submit"
              value="Post Comment"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default UserComment;
