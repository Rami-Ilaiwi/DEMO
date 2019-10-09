import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
  createStyles({
    root: {
      padding: "0.25rem 0.5rem",
      fontSize: "0.875rem",
      borderRadius: "0.2rem",
      fontWeight: "normal",
      lineHeight: "1.25",
      textAlign: "center",
      verticalAlign: "middle",
      cursor: "pointer",
      border: "none",
      color: "#5cb85c",
      backgroundColor: "transparent",
      borderColor: "#5cb85c"
    },
    favorite: {
      color: "#818a91",
      // backgroundColor: "transparent",
      borderColor: "#5cb85c"
    },

    unfavorite: {
      color: "#5cb85c",
      // backgroundColor: "#5cb85c",
      borderColor: "#5cb85c"
    },
    icon: {
      fontSize: "inherit"
    }
  });
