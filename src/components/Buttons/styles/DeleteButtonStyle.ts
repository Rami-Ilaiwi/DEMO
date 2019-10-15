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

    delete: {
      color: "#b85c5c",
      backgroundColor: "transparent",
      borderColor: "#b85c5c",
      "&:hover": {
        backgroundColor: "#b85c5c",
        color: "#fff"
      }
    },

    icon: {
      fontSize: "inherit",
      cursor: "pointer"
    }
  });
