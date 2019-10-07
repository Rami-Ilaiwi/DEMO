import { createStyles } from "@material-ui/core/styles";

export const styles = createStyles({
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
    color: "#fff",
    fontSize: "0.85rem",
    padding: "5px",
    whiteSpace: "nowrap",
    marginRight: "3px",
    marginBottom: "0.2rem",
    display: "inline-block",
    paddingRight: "0.6em",
    paddingLeft: "0.6em",
    borderRadius: "10rem",
    touchAction: "manipulation",
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline"
    }
  }
});
