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

    follow: {
      color: "#999",
      backgroundColor: "transparent",
      border: "1px solid #999",
      "&:hover": {
        backgroundColor: "#f5f5f5",
        color: "#373a3c"
      }
    },

    unfollow: {
      color: "#373a3c",
      backgroundColor: "#fff",
      borderColor: "#ccc",
      "&:hover": {
        backgroundColor: "#f5f5f5"
      }
    },

    icon: {
      fontSize: "inherit",
      cursor: "pointer"
    }
  });
