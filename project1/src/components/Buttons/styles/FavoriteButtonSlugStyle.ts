import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
  createStyles({
    root: {
      float: "right",
      backgroundColor: "transparent",
      borderColor: "#5cb85c",
      whiteSpace: "nowrap",
      opacity: 0.8,
      borderRadius: "0.2rem",
      fontSize: "0.875rem",
      padding: "0.25rem 0.5rem",
      marginRight: "1%",
      border: "1px solid transparent",
      cursor: "pointer"
    },

    favorite: {
      color: "#5cb85c",
      backgroundColor: "transparent",
      borderColor: "#5cb85c"
    },

    unfavorite: {
      color: "#fff",
      backgroundColor: "#5cb85c",
      borderColor: "#5cb85c"
    },

    icon: {
      fontSize: "inherit",
      cursor: "pointer"
    }
  });
