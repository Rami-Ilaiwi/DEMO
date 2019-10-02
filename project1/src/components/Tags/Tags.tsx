import React from "react";
import AXIOS from "../../utils/AXIOS";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/TagsStyle";

class Tags extends React.Component<WithStyles<typeof styles>> {
  public state = {
    tags: [] as string[]
  };
  public componentDidMount() {
    AXIOS.noauthGet("tags").then(res => {
      const tags = res.data.tags;
      this.setState({
        tags
      });
    });
  }

  public render() {
    return (
      <div className={this.props.classes.root}>
        Popular Tags
        <br />
        {this.state.tags.map(ar => (
          <a className={this.props.classes.tag} key={ar}>
            {ar}
          </a>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(Tags);
