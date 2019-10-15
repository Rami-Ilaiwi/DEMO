import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
  createStyles({
    root: {
      opacity: 0.8,
      borderRadius: "0.2rem",
      fontSize: "0.875rem",
      padding: "2px 6px 2px 6px",
      border: "1px solid transparent",
      cursor: "pointer",
      textTransform: "none"
    },

    favorite: {
      color: "#5cb85c",
      backgroundColor: "transparent",
      borderColor: "#5cb85c",
      "&:hover": {
        backgroundColor: "#449d44",
        color: "#fff"
      }
    },

    unfavorite: {
      color: "#fff",
      backgroundColor: "#5cb85c",
      borderColor: "#5cb85c",
      "&:hover": {
        backgroundColor: "#449d44",
        color: "#fff"
      }
    },

    icon: {
      fontSize: "inherit",
      cursor: "pointer"
    }
  });
