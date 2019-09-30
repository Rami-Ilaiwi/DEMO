import React from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import AXIOS from "../../utils/AXIOS";

const styles = createStyles({
  root: {
    padding: "5px 10px 10px 10px",
    background: "#f3f3f3",
    borderRadius: "4px",
    boxSizing: "inherit",
    lineHeight: 1.5,
    marginRight: "100px",
    marginTop: "20px",
    position: "static"
  },
  tag: {
    backgroundColor: "#818a91",
    color: "#fff !important",
    fontSize: "0.8rem",
    paddingTop: "0.1rem",
    paddingBottom: "0.1rem",
    whiteSpace: "nowrap",
    marginRight: "3px",
    marginBottom: "0.2rem",
    display: "inline-block",
    paddingRight: "0.6em",
    paddingLeft: "0.6em",
    borderRadius: "10rem",
    touchAction: "manipulation",
    textDecoration: "none"
  }
});

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
